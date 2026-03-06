import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

import { reels } from "../data/dummyData";

import {
  Heart,
  MessageCircle,
  Bookmark,
  Send,
} from "lucide-react";

import { useState } from "react";

import CommentModal from "../components/common/CommentModal";
import { useApp } from "../context/AppContext";

export default function Reels() {
  const { savedItems, toggleSave } = useApp();

  const [liked, setLiked] = useState({});
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState(false);
  const [following, setFollowing] = useState({});

  const handleLike = (id) => {
    setLiked({
      ...liked,
      [id]: !liked[id],
    });

    setLikes({
      ...likes,
      [id]: liked[id]
        ? (likes[id] || 100) - 1
        : (likes[id] || 100) + 1,
    });
  };

  return (
    <div className="h-screen bg-black flex overflow-hidden">

      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-20 lg:ml-64 flex justify-center">
        <div className="w-full max-w-md h-screen overflow-y-auto snap-y snap-mandatory">

          {reels.map((reel) => {
            const saved = savedItems.find(
              (item) => item.id === reel.id
            );

            return (
              <div
                key={reel.id}
                className="h-screen snap-start relative"
              >
                <img
                  src={reel.image}
                  className="w-full h-full object-cover"
                  onDoubleClick={() => handleLike(reel.id)}
                />

                {/* Actions */}
                <div className="absolute bottom-24 right-4 flex flex-col gap-6 text-white">

                  <div className="flex flex-col items-center">
                    <Heart
                      onClick={() => handleLike(reel.id)}
                      className={
                        liked[reel.id]
                          ? "fill-red-500 text-red-500 cursor-pointer"
                          : "cursor-pointer"
                      }
                    />
                    <span className="text-sm">
                      {likes[reel.id] || 100}
                    </span>
                  </div>

                  <MessageCircle
                    onClick={() => setComments(true)}
                    className="cursor-pointer"
                  />

                  <Send className="cursor-pointer" />

                  <Bookmark
                    onClick={() => toggleSave(reel)}
                    className={
                      saved
                        ? "fill-white cursor-pointer"
                        : "cursor-pointer"
                    }
                  />
                </div>

                {/* Username + Follow */}
                <div className="absolute bottom-10 left-4 text-white flex items-center gap-3">
                  <p className="font-bold">{reel.username}</p>

                  <button
                    onClick={() =>
                      setFollowing({
                        ...following,
                        [reel.id]: !following[reel.id],
                      })
                    }
                    className="text-sm font-semibold"
                  >
                    {following[reel.id]
                      ? "Following"
                      : "Follow"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {comments && <CommentModal close={() => setComments(false)} />}

      <MobileNav />
    </div>
  );
}