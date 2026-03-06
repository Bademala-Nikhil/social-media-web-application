import { useApp } from "../../context/AppContext";

export default function FollowButton() {
  const { following, setFollowing } = useApp();

  return (
    <button
      onClick={() => setFollowing(!following)}
      className={`px-4 py-2 rounded ${
        following ? "bg-gray-300" : "bg-blue-500 text-white"
      }`}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
}