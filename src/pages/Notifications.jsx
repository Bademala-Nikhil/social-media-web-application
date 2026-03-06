import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

const notifications = [
  {
    id: 1,
    user: "dhoni7",
    action: "liked your post ❤️",
  },
  {
    id: 2,
    user: "hp33",
    action: "commented: Amazing 🔥",
  },
  {
    id: 3,
    user: "nani14",
    action: "started following you",
  },
  {
    id: 4,
    user: "nikhil2001",
    action: "saved your reel",
  },
];

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="flex-1 md:ml-20 lg:ml-64 max-w-2xl mx-auto p-4 pb-24">
        <h2 className="text-2xl font-bold mb-6">Notifications</h2>

        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4"
            >
              <p>
                <span className="font-bold">{item.user}</span>{" "}
                {item.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      <MobileNav />
    </div>
  );
}