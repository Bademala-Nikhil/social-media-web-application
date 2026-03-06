import { useState } from "react";
import { useApp } from "../../context/AppContext";


import {
  Grid3X3,
  Bookmark,
  Tag,
} from "lucide-react";

export default function ProfileTabs() {
  const [tab, setTab] = useState("posts");

  const { savedItems } = useApp();

  const userPosts = [
    {
      id: 1,
      image: "https://picsum.photos/300/300?random=1",
    },
    {
      id: 2,
      image: "https://picsum.photos/300/300?random=2",
    },
    {
      id: 3,
      image: "https://picsum.photos/300/300?random=3",
    },
    {
      id: 4,
      image: "https://picsum.photos/300/300?random=4",
    },
    {
      id: 5,
      image: "https://picsum.photos/300/300?random=5",
    },
    {
      id: 6,
      image: "https://picsum.photos/300/300?random=6",
    },
  ];

  return (
    <div className="mt-6">

      {/* Tabs */}
      <div className="flex justify-around border-t border-b py-3">

        <button
          onClick={() => setTab("posts")}
          className={`flex items-center gap-2 ${
            tab === "posts"
              ? "font-bold text-black"
              : "text-gray-500"
          }`}
        >
          <Grid3X3 size={20} />
        </button>

        <button
          onClick={() => setTab("saved")}
          className={`flex items-center gap-2 ${
            tab === "saved"
              ? "font-bold text-black"
              : "text-gray-500"
          }`}
        >
          <Bookmark size={20} />
        </button>

        <button
          onClick={() => setTab("tagged")}
          className={`flex items-center gap-2 ${
            tab === "tagged"
              ? "font-bold text-black"
              : "text-gray-500"
          }`}
        >
          <Tag size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">

        {/* Posts */}
        {tab === "posts" && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {userPosts.map((post) => (
              <img
                key={post.id}
                src={post.image}
                className="w-full aspect-square object-cover"
              />
            ))}
          </div>
        )}

        {/* Saved */}
        {tab === "saved" && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {savedItems.length ? (
              savedItems.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  className="w-full aspect-square object-cover"
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500 mt-10">
                No saved items yet
              </p>
            )}
          </div>
        )}

        {/* Tagged */}
        {tab === "tagged" && (
          <div className="flex justify-center items-center h-40 text-gray-500">
            No tagged posts yet
          </div>
        )}
      </div>
    </div>
  );
}