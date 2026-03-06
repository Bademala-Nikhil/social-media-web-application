import { motion } from "framer-motion";

export default function NotificationsDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-4 w-72"
    >
      <p>❤️ Alex liked your post</p>
      <p className="mt-3">💬 Emma commented</p>
      <p className="mt-3">👤 New follower request</p>
    </motion.div>
  );
}