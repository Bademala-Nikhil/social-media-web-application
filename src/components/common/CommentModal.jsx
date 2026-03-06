import { motion } from "framer-motion";
import { useState } from "react";

export default function CommentModal({ close }) {
  const [comment, setComment] = useState("");

  return (
    <div
      className="fixed inset-0 bg-black/30 flex justify-center items-end z-50 px-4"
      onClick={close}
    >
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white rounded-t-3xl 
          w-full 
          max-w-2xl 
          md:max-w-2xl 
          lg:max-w-xl
          h-[50vh] 
          p-6
          shadow-2xl
        "
      >
        <h2 className="text-xl font-bold">Comments</h2>

        {/* Comment List */}
        <div className="mt-4 space-y-3 overflow-y-auto h-[65%] pr-2">
          <p>Alex: Amazing 🔥</p>
          <p>Emma: Nice post ❤️</p>
          <p>John: Beautiful shot 👏</p>
          <p>Sophia: Love this 😍</p>
        </div>

        {/* Input */}
        <div className="flex gap-3 mt-4">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write comment..."
            className="flex-1 border rounded-full px-4 py-3"
          />

          <button className="bg-blue-500 text-white px-5 rounded-full">
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}