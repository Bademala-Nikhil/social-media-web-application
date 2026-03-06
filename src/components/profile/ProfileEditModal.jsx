import { motion } from "framer-motion";

export default function ProfileEditModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold">Edit Profile</h2>

        <input
          className="w-full border p-3 mt-4 rounded"
          placeholder="Name"
        />

        <textarea
          className="w-full border p-3 mt-4 rounded"
          placeholder="Bio"
        />

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Save
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