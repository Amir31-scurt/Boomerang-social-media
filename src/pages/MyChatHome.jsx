import React from "react";
import Sidebar from "../components/myChatComponents/Sidebar";
import Chat from "../components/myChatComponents/Chat";

export default function MyChatHome() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
