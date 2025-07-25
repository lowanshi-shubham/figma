import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
    { name: "Buyer Meeting", icon: <Calendar />, path: "/buyer-meeting" },
  ];

  return (
    <aside className="w-60 min-h-screen bg-gray-100 sticky p-4">
      <nav className="space-y-2  ">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-full  hover:bg-purple-100 ${
                isActive ? "bg-purple-200 font-semibold text-purple-500" : ""
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
