import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import StoryViewer from "./StoryViewer";
import AddStoryModal from "./AddStoryModal";

import my from "../../assets/my.png";
import dp1 from "../../assets/dp1.webp";
import dp2 from "../../assets/dp2.jpeg";
import post2 from "../../assets/post2.jpg";
import post3 from "../../assets/post3.jpg";

const initialStories = [
  {
    id: 1,
    name: "dhoni7",
    viewed: false,
    slides: [
      {
        type: "image",
        content: dp1,
      },
    ],
    viewers: ["nani14", "hp33"],
  },
  {
    id: 2,
    name: "hp33",
    viewed: false,
    slides: [
      {
        type: "image",
        content: dp2,
      },
    ],
    viewers: ["nani"],
  },
  {
    id: 3,
    name: "nani14",
    viewed: false,
    slides: [
      {
        type: "image",
        content: post2,
      },
    ],
    viewers: [],
  },
  {
    id: 4,
    name: "nikhil2001",
    viewed: false,
    slides: [
      {
        type: "image",
        content: post3,
      },
    ],
    viewers: [],
  },
];

export default function Stories() {
  const [stories, setStories] = useState(initialStories);
  const [selected, setSelected] = useState(null);
  const [addOpen, setAddOpen] = useState(false);

  const addStory = (slide) => {
    if (stories.length >= 10) return;

    const newStory = {
      id: Date.now(),
      name: "You",
      viewed: false,
      slides: [slide],
      viewers: [],
    };

    setStories([newStory, ...stories]);
  };

  const openStory = (story) => {
    setSelected(story);

    setStories((prev) =>
      prev.map((s) =>
        s.id === story.id ? { ...s, viewed: true } : s
      )
    );
  };

  return (
    <>
      <div className="flex gap-4 overflow-x-auto scroll-smooth bg-white/80 backdrop-blur-md rounded-xl p-4 shadow">

        {/* Your Story */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setAddOpen(true)}
          className="flex flex-col items-center min-w-[75px] cursor-pointer"
        >
          <div className="relative">
            <img
              src={my}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
            />

            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
              <Plus size={12} color="white" />
            </div>
          </div>

          <p className="text-sm mt-1">Your Story</p>
        </motion.div>

        {/* Stories */}
        {stories.slice(0, 10).map((story) => (
          <motion.div
            key={story.id}
            whileHover={{ scale: 1.08 }}
            onClick={() => openStory(story)}
            className="flex flex-col items-center min-w-[75px] cursor-pointer"
          >
            <div
              className={`p-[2px] rounded-full ${
                story.viewed
                  ? "bg-gray-300"
                  : "bg-red-500 animate-pulse"
              }`}
            >
              <img
                src={story.slides[0].content}
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
            </div>

            <p className="text-sm mt-1">{story.name}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <StoryViewer
          story={selected}
          close={() => setSelected(null)}
        />
      )}

      {addOpen && (
        <AddStoryModal
          close={() => setAddOpen(false)}
          addStory={addStory}
        />
      )}
    </>
  );
}