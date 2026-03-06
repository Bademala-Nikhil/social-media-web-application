import Sidebar from "../components/layout/Sidebar";
import MobileNav from "../components/layout/MobileNav";

import ProfileTabs from "../components/profile/ProfileTabs";
import FollowButton from "../components/profile/FollowButton";
import ProfileEditModal from "../components/profile/ProfileEditModal";
import my from "../assets/my.png";

import { useState } from "react";

export default function Profile() {
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-4 md:p-6 pb-24">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src= {my}
            className="w-28 h-28 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">Nani14</h2>

            <div className="flex gap-6 mt-3 text-sm md:text-base">
              <p>12 Posts</p>
              <p>1.4K Followers</p>
              <p>500 Following</p>
            </div>

            <div className="flex gap-3 mt-4">
              <FollowButton />

              <button
                onClick={() => setEdit(true)}
                className="bg-black text-white px-4 py-2 rounded"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <ProfileTabs />

        {edit && <ProfileEditModal close={() => setEdit(false)} />}
      </div>

      <MobileNav />
    </div>
  );
}