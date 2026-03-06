import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

import { Search } from "lucide-react";
import { useState } from "react";

const exploreItems = [
  "Nature",
  "Travel",
  "Fashion",
  "Food",
  "Music",
  "Technology",
  "Art",
  "Fitness",
];

export default function Explore() {
  const [query, setQuery] = useState("");

  const filtered = exploreItems.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 md:ml-20 lg:ml-64 flex justify-center">
        <div className="w-full max-w-4xl p-4 pb-24">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white rounded-full pl-12 pr-4 py-3 shadow"
            />

            {/* Suggestions */}
            {query && (
              <div className="absolute top-14 w-full bg-white rounded-xl shadow-lg z-20">
                {filtered.length ? (
                  filtered.map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={() => setQuery(item)}
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500">
                    No results
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[...Array(15)].map((_, i) => (
              <img
                key={i}
                src={`https://picsum.photos/400/400?random=${i}`}
                className="rounded-xl h-60 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <MobileNav />
    </div>
  );
}