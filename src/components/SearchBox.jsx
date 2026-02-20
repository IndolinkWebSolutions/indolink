import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { searchProducts, searchLeads } from "../api";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("products"); // 👈 NEW
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔍 Fetch search results with debounce
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        setLoading(true);

        let response;

        if (searchType === "products") {
          response = await searchProducts(query);
          setResults(response.data || []);
        } else {
          response = await searchLeads(query);
          setResults(response.data?.results || []); 
          // leads has pagination
        }

      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [query, searchType]); // 👈 dependency added

  return (
    <>
      {/* 🔍 Mobile Icon */}
      <button className="md:hidden p-2" onClick={() => setOpen(true)}>
        <Search size={22} />
      </button>

      {/* 🖥 Desktop Search */}
      <div className="relative hidden md:flex items-center w-[45%] bg-white border border-gray-300 rounded-full shadow-sm">
        
        {/* 👇 SEARCH TYPE SELECT */}
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="px-4 py-2 text-sm bg-transparent outline-none border-r text-gray-600"
        >
          <option value="products">Products</option>
          <option value="leads">Leads</option>
        </select>

        <input
          type="text"
          placeholder={
            searchType === "products"
              ? "Search products..."
              : "Search leads..."
          }
          className="flex-1 px-4 py-2 text-sm outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="px-5 py-3 bg-sky-500 text-white rounded-full">
          <Search size={18} />
        </button>

        {/* 🔽 Search Results Dropdown */}
        {results.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white border rounded-xl shadow-lg mt-2 z-50">
            {results.map((item) => (
              <div
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="absolute top-full mt-2 px-4 py-2 text-sm text-gray-500">
            Searching...
          </div>
        )}
      </div>

      {/* 📱 Mobile Full Search */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 shadow-sm">
            
            {/* Mobile select */}
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="text-sm outline-none"
            >
              <option value="products">Products</option>
              <option value="leads">Leads</option>
            </select>

            <input
              autoFocus
              type="text"
              placeholder={
                searchType === "products"
                  ? "Search products..."
                  : "Search leads..."
              }
              className="flex-1 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Mobile Results */}
          <div className="mt-4">
            {results.map((item) => (
              <div
                key={item.id}
                className="py-3 border-b text-sm"
              >
                {item.name}
              </div>
            ))}

            {loading && (
              <p className="text-sm text-gray-500 mt-2">
                Searching...
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchBox;