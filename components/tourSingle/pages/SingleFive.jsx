"use client";

import React, { useState } from "react";
import TourSingleSidebar from "../TourSingleSidebar";
import CommentBox from "../CommentBox";
import Reviews from "../Reviews";
import Rating from "../Rating";
import Faq from "../Faq";
import DateCalender from "../DateCalender";
import RoadMap from "../RoadMap";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Gallery4 from "../Galleries/Gallery4";

const tabButtons = [
  "Overview",
  "included",
  "Itinerary",
  "calendar",
  "FAQ",
  "Reviews",
];

export default function SingleFive({ tour }) {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <Gallery4 tour={tour} />

      <section className="layout-pt-md js-pin-container">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <div className="tabs -tourSingle js-tabs">
                <div className="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">
                  {tabButtons.map((elm, i) => (
                    <div
                      onClick={() => setActiveTab(elm)}
                      key={i}
                      className="col-auto"
                    >
                      <button
                        className={`tabs__button text-30 md:text-20 fw-700 js-tabs-button ${
                          elm == activeTab ? "is-tab-el-active" : ""
                        }`}
                        data-tab-target=".-tab-item-1"
                      >
                        {elm}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="tabs__content pt-40 js-tabs-content">
                  <div
                    className={`tabs__pane ${
                      activeTab == "Overview" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <div className="row y-gap-20 justify-between items-center layout-pb-md">
                      <OthersInformation />
                    </div>

                    <Overview />
                  </div>

                  <div
                    className={`tabs__pane ${
                      activeTab == "included" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <h2 className="text-30">What's included</h2>

                    <div className="row x-gap-130 y-gap-20 pt-20">
                      <div className="col-lg-6">
                        <div className="y-gap-15">
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Beverages, drinking water, morning tea and buffet
                            lunch
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Local taxes
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Hotel pickup and drop-off by air-conditioned minivan
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            InsuranceTransfer to a private pier
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Soft drinks
                          </div>
                          <div className="d-flex">
                            <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Tour Guide
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="y-gap-15">
                          <div className="d-flex">
                            <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Towel
                          </div>
                          <div className="d-flex">
                            <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Tips
                          </div>
                          <div className="d-flex">
                            <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Alcoholic Beverages
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      activeTab == "Itinerary" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <h2 className="text-30">Itinerary</h2>

                    <div className="mt-30">
                      <RoadMap />
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      activeTab == "calendar" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <h2 className="text-30">Availability Calendar</h2>

                    <DateCalender />
                  </div>

                  <div
                    className={`tabs__pane ${
                      activeTab == "FAQ" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <h2 className="text-30">FAQ</h2>

                    <div className="accordion -simple row y-gap-20 mt-30 js-accordion">
                      <Faq />
                    </div>
                  </div>

                  <div
                    className={`tabs__pane ${
                      activeTab == "Reviews" ? "is-tab-el-active" : ""
                    }`}
                  >
                    <h2 className="text-30">Customer Reviews</h2>

                    <div className="mt-30">
                      <Rating />
                    </div>

                    <Reviews />

                    <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                      See more reviews
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>

                    <CommentBox />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{ height: "100%" }}
                className="d-flex justify-end toursingle5"
              >
                <div
                  style={{ position: "sticky", top: "10px" }}
                  className="-top-320"
                >
                  <TourSingleSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
