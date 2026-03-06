export default function SavedPosts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {[...Array(6)].map((_, i) => (
        <img
          key={i}
          src={`https://picsum.photos/300/300?random=${i}`}
          className="rounded-xl"
        />
      ))}
    </div>
  );
}