import React from "react";
import { Bell, Calendar, Users, PlusCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="flex justify-between items-center bg-white p-4 rounded shadow">
        <h1 className="text-xl font-bold">Meeting Dashboard</h1>
        
      </header>

      <main className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="border-b pb-2">22 Jul, 2:00PM - Buyer Meeting</li>
            <li className="border-b pb-2">23 Jul, 11:00AM - Design Review</li>
            <li>24 Jul, 4:30PM - Final Approval</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Team Members</h2>
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="border-b pb-2">Ankit Rawat - Admin</li>
            <li className="border-b pb-2">Ishika Gupta - Designer</li>
            <li>Sanket Pal - Merchandiser</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <Bell className="w-5 h-5 text-red-500" />
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="border-b pb-2">Meeting with buyer rescheduled</li>
            <li className="border-b pb-2">New comment on style draft</li>
            <li>Task updated by Ishika</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow col-span-full">
          <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
            <PlusCircle className="w-5 h-5" /> Add New Meeting
          </button>
        </div>
      </main>
    </div>
    
  );
}
