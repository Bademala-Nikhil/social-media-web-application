import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

import { useApp } from "../context/AppContext";

export default function Saved() {
  const { savedItems } = useApp();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-20 lg:ml-64 max-w-4xl mx-auto p-4 pb-24">
        <h2 className="text-2xl font-bold mb-6">Saved</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {savedItems.map((item) => (
            <img
              key={item.id}
              src={item.image}
              className="rounded-xl h-60 object-cover w-full"
            />
          ))}
        </div>
      </div>

      <MobileNav />
    </div>
  );
}