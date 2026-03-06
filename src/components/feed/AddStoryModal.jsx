import { motion } from "framer-motion";
import { useState } from "react";

export default function AddStoryModal({ close, addStory }) {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSend = () => {
    if (preview) {
      addStory(preview);
      close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold">Add Story</h2>

        <input
          type="file"
          onChange={handleImage}
          className="mt-4"
        />

        {preview && (
          <img
            src={preview}
            className="mt-4 rounded-xl max-h-80 object-cover"
          />
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>

          <button
            onClick={close}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            className="bg-black text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}