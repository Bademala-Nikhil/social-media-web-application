import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const emojis = ["❤️", "🔥", "😍", "👏"];

export default function StoryViewer({ story, close }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < story.slides.length - 1) {
        setIndex(index + 1);
      } else {
        close();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  const slide = story.slides[index];

  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        className="relative w-full max-w-sm"
      >
        {/* Progress */}
        <div className="flex gap-1 absolute top-3 left-3 right-3">
          {story.slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded ${
                i <= index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Slide */}
        {slide.type === "image" ? (
          <img
            src={slide.content}
            className="rounded-xl w-full max-h-[80vh] object-cover"
          />
        ) : (
          <div className="bg-white rounded-xl h-[500px] flex items-center justify-center text-2xl font-bold">
            {slide.content}
          </div>
        )}

        {/* Emoji reactions */}
        <div className="absolute bottom-4 left-4 flex gap-3">
          {emojis.map((emoji) => (
            <button
              key={emoji}
              className="text-2xl"
            >
              {emoji}
            </button>
          ))}
        </div>

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white text-xl"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
}