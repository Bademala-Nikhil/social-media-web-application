import { motion } from "framer-motion";

export default function MessengerPanel() {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="bg-white rounded-2xl shadow p-4"
    >
      <h2 className="font-bold text-lg">Messages</h2>

      <div className="flex gap-1 mt-4">
  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
</div>
    </motion.div>
  );
}