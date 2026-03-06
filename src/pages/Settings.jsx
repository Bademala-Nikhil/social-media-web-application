import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";
import { useNavigate } from "react-router-dom";

import {
  User,
  Shield,
  Bell,
  HelpCircle,
  Lock,
  Moon,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Settings() {
  const navigate = useNavigate();

  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const sections = [
    {
      icon: <User />,
      title: "Personal Information",
      subtitle: "Name, email, username",
    },
    {
      icon: <Shield />,
      title: "Privacy",
      subtitle: "Account privacy and activity",
    },
    {
      icon: <Bell />,
      title: "Notifications",
      subtitle: "Push, email, messages",
    },
    {
      icon: <Lock />,
      title: "Security",
      subtitle: "Password and login activity",
    },
    {
      icon: <HelpCircle />,
      title: "Help",
      subtitle: "Support and report issue",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white flex transition-colors duration-300">

      {/* Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 md:ml-20 lg:ml-64 max-w-3xl mx-auto p-4 pb-24">

        <h2 className="text-2xl font-bold mb-6">Settings</h2>

        {/* Settings Sections */}
        <div className="space-y-4">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="card bg-white dark:bg-zinc-900 rounded-xl shadow p-4 flex items-center justify-between cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-600 dark:text-gray-300">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <ChevronRight size={18} />
            </motion.div>
          ))}
        </div>

        {/* Dark Mode */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="card bg-white dark:bg-zinc-900 rounded-xl shadow p-4 flex items-center justify-between mt-6 transition-colors"
        >
          <div className="flex items-center gap-4">
            <Moon />

            <div>
              <h3 className="font-semibold">Dark Mode</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Toggle appearance
              </p>
            </div>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className={`w-12 h-6 rounded-full transition ${
              dark ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full mt-0.5 transition ${
                dark ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </motion.div>

        {/* Logout */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            localStorage.removeItem("loggedIn");
            navigate("/login");
          }}
          className="w-full mt-8 bg-red-500 text-white py-3 rounded-xl font-semibold"
        >
          Log Out
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}