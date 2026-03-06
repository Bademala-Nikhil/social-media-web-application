import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

import {
  Send,
  Smile,
  Mic,
} from "lucide-react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dp1 from "../assets/dp1.webp";
import dp2 from "../assets/dp2.jpeg";
import my from "../assets/my.png";

const users = [
  {
    id: 1,
    name: "dhoni7",
    avatar: dp1,
    messages: ["Hello 👋"],
  },
  {
    id: 2,
    name: "hp33",
    avatar: dp2,
    messages: ["How are you?"],
  },
  {
    id: 3,
    name: "nani14",
    avatar: my,
    messages: ["Let's meet today"],
  },
];

const emojis = ["😀", "😂", "❤️", "🔥", "😍"];

export default function Messages() {
  const [selected, setSelected] = useState(users[0]);
  const [text, setText] = useState("");
  const [chatData, setChatData] = useState(users);
  const [showEmoji, setShowEmoji] = useState(false);

  const sendMessage = () => {
    if (!text.trim()) return;

    setChatData((prev) =>
      prev.map((user) =>
        user.id === selected.id
          ? {
              ...user,
              messages: [...user.messages, text],
            }
          : user
      )
    );

    setSelected((prev) => ({
      ...prev,
      messages: [...prev.messages, text],
    }));

    setText("");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex overflow-hidden">

      {/* Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 md:ml-20 lg:ml-64 flex pb-20">

        {/* Chat List */}
        <div className="w-24 md:w-80 border-r bg-white overflow-y-auto shadow-sm">
          <h2 className="text-2xl font-bold p-4">Messages</h2>

          {chatData.map((user) => (
            <motion.div
              key={user.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(user)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition ${
                selected.id === user.id
                  ? "bg-blue-50"
                  : "hover:bg-gray-100"
              }`}
            >
              <img
                src={user.avatar}
                className="w-12 h-12 rounded-full object-cover border"
              />

              <span className="hidden md:block font-medium">
                {user.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-gradient-to-br from-white to-gray-50">

          {/* Header */}
          <div className="p-4 border-b flex items-center gap-3 bg-white shadow-sm">
            <img
              src={selected.avatar}
              className="w-12 h-12 rounded-full object-cover"
            />

            <h3 className="font-bold text-lg">{selected.name}</h3>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            <AnimatePresence>
              {selected.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-xs p-3 rounded-2xl ${
                    i % 2 === 0
                      ? "bg-blue-100 text-black"
                      : "bg-blue-500 text-white ml-auto"
                  }`}
                >
                  {msg}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Emoji */}
          {showEmoji && (
            <div className="px-4 py-2 flex gap-3 border-t bg-white">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setText(text + emoji)}
                  className="text-2xl"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t bg-white flex gap-3 items-center">

            <button onClick={() => setShowEmoji(!showEmoji)}>
              <Smile />
            </button>

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Message..."
              className="flex-1 border rounded-full px-4 py-2 bg-gray-50"
            />

            <button>
              <Mic />
            </button>

            <button onClick={sendMessage}>
              <Send />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <MobileNav />
    </div>
  );
}