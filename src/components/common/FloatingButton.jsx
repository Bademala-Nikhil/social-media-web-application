import {
  Plus,
  ImagePlus,
  Clapperboard,
  Camera,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

export default function FloatingButton({
  openStory,
  openPost,
  openReel,
}) {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      label: "Post",
      icon: <ImagePlus size={18} />,
      action: openPost,
    },
    {
      label: "Story",
      icon: <Camera size={18} />,
      action: openStory,
    },
    {
      label: "Reel",
      icon: <Clapperboard size={18} />,
      action: openReel,
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: index * 0.08 }}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
              className="flex items-center gap-3 bg-white shadow-xl rounded-full px-4 py-3 text-sm font-medium"
            >
              {item.icon}
              {item.label}
            </motion.button>
          ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: open ? 45 : 0 }}
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white p-4 rounded-full shadow-xl"
      >
        <Plus />
      </motion.button>
    </div>
  );
}