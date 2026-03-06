export default function SkeletonLoader() {
  return (
    <div className="bg-white rounded-xl p-4 animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      <div className="h-60 bg-gray-300 rounded mt-4"></div>
    </div>
  );
}