import React from "react";
import {  Routes, Route } from "react-router-dom";
import Sidebar from "./component2/Sidbar";
import Header from "./component2/Header";
import Dashboard from "./pages/dashboard";
import BuyerMeetings from "./pages/BuyerMeeting";
import Chat from "./components/Chat";
import Notifications from "./components/Notifications";

export default function App() {
  return (
      <div className=" min-h-screen w-full">
        
          <Header />
        <div className=" flex">
        <Sidebar />
    <main className="flex-1 bg-gray-50  ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/buyer-meeting" element={<BuyerMeetings />} />
              <Route path="/chat" element={<Chat />} />
          <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}
