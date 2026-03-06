import {
  Home,
  Search,
  Clapperboard,
  MessageCircle,
  Heart,
  Bookmark,
  User,
  Settings,
  ChevronDown,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menu = [
    { icon: <Home />, label: "Home", path: "/" },
    { icon: <Search />, label: "Explore", path: "/explore" },
    { icon: <Clapperboard />, label: "Reels", path: "/reels" },
    { icon: <MessageCircle />, label: "Messages", path: "/messages" },
    { icon: <Heart />, label: "Notifications", path: "/notifications" },
    { icon: <Bookmark />, label: "Saved", path: "/saved" },
    { icon: <User />, label: "Profile", path: "/profile" },
    { icon: <Settings />, label: "Settings", path: "/settings" },
  ];

  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="bg-white dark:bg-zinc-900 dark:text-white">

      {/* Header */}
      <div className="relative mb-10">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 font-bold text-xl"
        >
          Nani14
          <span className="text-sm font-medium text-gray-500">
            
          </span>
          <ChevronDown size={18} />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl w-44 p-2 z-50">
            <Link
              to="/login"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="block px-4 py-2 hover:bg-gray-100 rounded"
            >
              Signup
            </Link>

            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-6">
        {menu.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-4 ${
              location.pathname === item.path
                ? "text-blue-500 font-bold"
                : ""
            }`}
          >
            {item.icon}
            <span className="hidden lg:block">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}