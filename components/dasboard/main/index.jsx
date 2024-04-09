"use client";

import React, { useState } from "react";
import Sidebar from "../Sidebar";
import States from "./States";
import Activities from "./Activities";
import Statistics from "./Statistics";
import Header from "../Header";

export default function DBMain() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <>
      <div
        className={`dashboard ${
          sideBarOpen ? "-is-sidebar-visible" : ""
        } js-dashboard`}
      >
        <Sidebar setSideBarOpen={setSideBarOpen} />

        <div className="dashboard__content">
          <Header setSideBarOpen={setSideBarOpen} />

          <div className="dashboard__content_content">
            <h1 className="text-30">Dashboard</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur.</p>

            <States />

            <div className="row pt-30 y-gap-30">
              <Statistics />

              <div className="col-xl-4 col-lg-12 col-md-6">
                <div className="px-30 py-25 rounded-12 bg-white shadow-2">
                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Recent Activities</div>
                  </div>

                  <Activities />

                  <div className="pt-40">
                    <button className="button -md -outline-accent-1 col-12 text-accent-1">
                      View More
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-30">
              © Copyright Viatours {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
