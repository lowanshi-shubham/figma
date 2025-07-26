import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, MessageCircle, User, LogOut, Settings } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<header className="w-full bg-white flex justify-between items-center px-6 py-4 shadow relative">
  <h2 className="text-xl font-semibold whitespace-nowrap">
    <img src="/logo.png" alt="Logo" className="h-12" />
  </h2>

  <div className="flex-1 flex justify-center">
    <div className="relative w-full max-w-md">
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.75-4.4a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search meetings, users, etc..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
      />
    </div>
  </div>

  <div className="flex items-center gap-4">
    <MessageCircle
      className="w-5 h-5 text-gray-600 cursor-pointer"
      onClick={() => navigate("/chat")}
    />
    <Bell
      className="w-5 h-5 text-gray-600 cursor-pointer"
      onClick={() => navigate("/notifications")}
    />
    <div className="relative" ref={profileRef}>
      <img
        src="/id.jpg"
        alt="user"
        className="rounded-full w-8 h-8 cursor-pointer"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
      />
      {showProfileMenu && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow z-10">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer border-t">
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  </div>
</header>

  );
}
