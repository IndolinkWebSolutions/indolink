import { useState } from "react";
import { Search } from "lucide-react";

function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center w-[45%] bg-white border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-sky-400 transition">
      {/* Category */}
      <select className="px-4 py-2 text-sm bg-transparent outline-none border-r text-gray-600 cursor-pointer">
        <option>Products</option>
        <option>Categories</option>
        <option>Brands</option>
      </select>

      {/* Input */}
      <input
        type="text"
        placeholder="Search for products, brands..."
        className="flex-1 px-4 py-2 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Button */}
      <button className="px-5 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition">
        <Search size={18} />
      </button>
    </div>
  );
}

export default SearchBox;
