import React from "react";
import { X, CalendarDays, CheckCircle, User } from "lucide-react"; 

export default function Notifications() {
  const notificationsData = [
    {
      id: 1,
      type: "task_completed",
      message: "[task_name] marked as completed...",
      time: "10 mins ago",
      icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
      userAvatar: false,
    },
    {
      id: 2,
      type: "meeting_created",
      message: "New meeting [meeting_title] is created for [date_time]",
      time: "5 mins ago",
      icon: <CalendarDays className="w-5 h-5 text-purple-500" />,
      userAvatar: false,
    },
    {
      id: 3,
      type: "action_item_added",
      message: "Action Item Added [action_item_name] is added in meeting [meeting_title]",
      time: "22 May 2025", 
      icon: <CalendarDays className="w-5 h-5 text-gray-500" />, 
      userAvatar: false,
    },
    {
      id: 4,
      type: "task_assigned",
      message: "Task assigned [task_name] has been assigned to [user_name].",
      time: "2 hours ago",
      icon: <User className="w-5 h-5 text-green-500" />, 
      userAvatar: true, 
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {notificationsData.length} new
        </span>
      </div>

      <div className="space-y-3">
        {notificationsData.map((notification) => (
          <div key={notification.id} className="flex items-start justify-between p-2 hover:bg-gray-50 rounded-md">
            <div className="flex items-center space-x-3">
              {notification.userAvatar ? (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                  U
                </div>
              ) : (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  {notification.icon}
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
            <button className="flex-shrink-0 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200">
          View All
        </button>
      </div>
    </div>
  );
}