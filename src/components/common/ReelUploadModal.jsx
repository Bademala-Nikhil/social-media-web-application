import { motion } from "framer-motion";

export default function ReelUploadModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold">Upload Reel</h2>

        <input type="file" className="mt-4" />

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>

        <button
          onClick={close}
          className="mt-3 block text-gray-500"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
}