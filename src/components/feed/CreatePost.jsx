import { useState } from "react";
import { useApp } from "../../context/AppContext";

export default function CreatePost() {
  const { posts, setPosts } = useApp();
  const [caption, setCaption] = useState("");

  const addPost = () => {
    if (!caption) return;

    const newPost = {
      id: Date.now(),
      username: "You",
      caption,
      likes: 0,
      image: "https://picsum.photos/500/400",
      avatar: "https://picsum.photos/100",
    };

    setPosts([newPost, ...posts]);
    setCaption("");
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow">
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write something..."
        className="w-full border rounded p-3"
      />

      <button
        onClick={addPost}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Post
      </button>
    </div>
  );
}