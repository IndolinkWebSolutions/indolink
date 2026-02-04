import { useState } from "react";
import { Search, X } from "lucide-react";

function SearchBox() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔍 Icon (mobile only) */}
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(true)}
      >
        <Search size={22} />
      </button>

      {/* Desktop Search */}
      <div className="hidden md:flex items-center w-[45%] bg-white border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-sky-400 transition">
        <select className="px-4 py-2 text-sm bg-transparent outline-none border-r text-gray-600 cursor-pointer">
          <option>Products</option>
          <option>Categories</option>
          <option>Brands</option>
        </select>

        <input
          type="text"
          placeholder="Search for products, brands..."
          className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="px-5 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600">
          <Search size={18} />
        </button>
      </div>

      {/* 📱 Mobile Full Search */}
      {open && (
        <div className=" inset-0 z-50 bg-white p-4 md:hidden">
          <div className="flex items-center  gap-2 border rounded-lg px-3 py-2 shadow-sm">

            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="flex-1 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

         
        </div>
      )}
    </>
  );
}

export default SearchBox;
