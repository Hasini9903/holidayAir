"use client";

import React from "react";
import Sidebar from "./Sidebar";

export default function ToggleSidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={`tourPagesSidebar ${sidebarOpen ? "-is-active" : ""} `}>
      <div className="tourPagesSidebar__overlay"></div>
      <div className="tourPagesSidebar__content">
        <div className="tourPagesSidebar__header d-flex items-center justify-between">
          <div className="text-20 fw-500">All filters</div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="button -dark-1 size-40 rounded-full bg-light-1"
          >
            <i className="icon-cross text-10"></i>
          </button>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
