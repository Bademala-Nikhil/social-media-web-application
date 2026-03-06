import {
  Heart,
  MessageCircle,
  Bookmark,
  Send,
} from "lucide-react";

import { useState } from "react";
import CommentModal from "../common/CommentModal";
import { useApp } from "../../context/AppContext";

export default function PostCard({ post }) {
  const { savedItems, toggleSave } = useApp();

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(false);
  const [following, setFollowing] = useState(false);

  const saved = savedItems.find((item) => item.id === post.id);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-4 max-w-xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.avatar}
              className="w-10 h-10 rounded-full object-cover"
            />

            <h3 className="font-semibold">{post.username}</h3>
          </div>

          <button
            onClick={() => setFollowing(!following)}
            className={`text-sm font-semibold ${
              following
                ? "text-gray-500"
                : "text-blue-500"
            }`}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>

        {/* Image */}
        <img
          src={post.image}
          className="mt-4 rounded-xl w-full object-cover"
          onDoubleClick={handleLike}
        />

        {/* Actions */}
        <div className="flex justify-between mt-4">
          <div className="flex gap-4">

            <Heart
              onClick={handleLike}
              className={`cursor-pointer ${
                liked ? "fill-red-500 text-red-500" : ""
              }`}
            />

            <MessageCircle
              onClick={() => setComments(true)}
              className="cursor-pointer"
            />

            <Send className="cursor-pointer" />
          </div>

          <Bookmark
            onClick={() => toggleSave(post)}
            className={`cursor-pointer ${
              saved ? "fill-black text-black" : ""
            }`}
          />
        </div>

        {/* Likes */}
        <p className="mt-2 font-semibold">{likes} likes</p>

        {/* Caption */}
        <p className="mt-1">
          <span className="font-semibold">{post.username}</span>{" "}
          {post.caption}
        </p>
      </div>

      {comments && <CommentModal close={() => setComments(false)} />}
    </>
  );
}