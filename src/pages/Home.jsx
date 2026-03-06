import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

import Stories from "../components/feed/Stories";
import PostCard from "../components/feed/PostCard";
import ReelsSection from "../components/feed/ReelsSection";

import MessengerPanel from "../components/common/MessengerPanel";
import NotificationsDropdown from "../components/common/NotificationsDropdown";
import FloatingButton from "../components/common/FloatingButton";

import { posts, reels } from "../data/dummyData";

import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white flex">

      {/* Sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-screen z-40">
        <Sidebar />
      </div>

      {/* Center Feed */}
      <div className="flex-1 md:ml-20 lg:ml-64 lg:mr-80 flex justify-center">
        <div className="w-full max-w-2xl h-screen overflow-y-auto px-4 pb-24">

          {/* Sticky Header */}
          <div className="sticky top-0 bg-gray-100 py-4 z-30">

            {/* Mobile Top Bar */}
            <div className="flex justify-between items-center md:hidden mb-4">
              <h2 className="text-xl font-bold">SocialPro</h2>

              <Link to="/notifications" className="relative">
                <Heart />

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                  3
                </span>
              </Link>
            </div>

            {/* Stories */}
            <Stories />
          </div>

          {/* Feed */}
          <div className="space-y-6 mt-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}

            <ReelsSection reels={reels} />

            {posts.map((post) => (
              <PostCard key={`more-${post.id}`} post={post} />
            ))}

            <ReelsSection reels={reels} />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden lg:flex fixed right-0 top-0 h-screen w-80 p-4 flex-col gap-4">
        <NotificationsDropdown />
        <MessengerPanel />
      </div>

      {/* Floating Button */}
      <FloatingButton
        openStory={() => alert("Open Story")}
        openPost={() => alert("Open Post")}
        openReel={() => alert("Open Reel")}
      />

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}