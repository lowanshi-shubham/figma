import React from "react";
import { X } from "lucide-react"; // Importing the close icon

export default function Chat() {
  const chatMessagesData = [
    {
      id: 1,
      userName: "user_name",
      time: "10 mins ago",
    },
    {
      id: 2,
      userName: "user_name",
      time: "10 mins ago",
    },
    {
      id: 3,
      userName: "user_name",
      time: "10 mins ago",
    },
    {
      id: 4,
      userName: "user_name",
      time: "10 mins ago",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg"> {/* Removed shadow and fixed width, assuming parent handles it */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Chat</h2>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {chatMessagesData.length} new
        </span>
      </div>

      <div className="space-y-3">
        {chatMessagesData.map((message) => (
          <div key={message.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                {/* In a real app, this would be an image: <img src="..." alt="User Avatar" /> */}
                U
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">New Message</p>
                <p className="text-xs text-gray-500">You have new messages from {message.userName}</p>
                <p className="text-xs text-gray-500">{message.time}</p>
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