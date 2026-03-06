import {
  Home,
  Search,
  Clapperboard,
  MessageCircle,
  User,
  Settings,
  ChevronUp,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menu = [
    { icon: <Home size={22} />, path: "/" },
    { icon: <Search size={22} />, path: "/explore" },
    { icon: <Clapperboard size={22} />, path: "/reels" },
    { icon: <MessageCircle size={22} />, path: "/messages" },
    { icon: <User size={22} />, path: "/profile" },
    { icon: <Settings size={22} />, path: "/settings" },
  ];

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <>
      {/* Account Dropdown */}
      <div className="bg-white dark:bg-zinc-900 dark:text-white">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white shadow rounded-full px-3 py-2 flex items-center gap-2"
        >
          Nani14
          <ChevronUp size={16} />
        </button>

        {open && (
          <div className="mt-2 bg-white shadow-xl rounded-xl w-36 p-2">
            <Link
              to="/login"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="block px-3 py-2 hover:bg-gray-100 rounded"
            >
              Signup
            </Link>

            <button
              onClick={logout}
              className="w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t flex justify-around py-3 z-50">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? "text-blue-500"
                : "text-black"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </>
  );
}