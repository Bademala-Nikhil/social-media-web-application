export default function SavedCollections() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[...Array(6)].map((_, i) => (
        <img
          key={i}
          src={`https://picsum.photos/300/300?random=${i + 20}`}
          className="rounded-xl"
        />
      ))}
    </div>
  );
}