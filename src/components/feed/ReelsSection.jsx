import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ReelsSection() {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="font-bold text-xl mb-4">Reels</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={i}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={`https://picsum.photos/400/600?random=${i}`}
              className="h-72 w-full object-cover"
            />

            <Play className="absolute bottom-4 right-4 text-white" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}