import { motion } from "framer-motion";

export default function AIFeed() {
  const aiPosts = [
    "AI suggests this trending post for you ✨",
    "Recommended creators based on your activity 🤖",
    "Trending photography near your interests 📸",
  ];

  return (
    <div className="space-y-4">
      {aiPosts.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow p-4"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}