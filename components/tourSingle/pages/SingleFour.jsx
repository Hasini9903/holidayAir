"use client";

import React, { useState } from "react";
import MainInformation from "../MainInformation";
import Gallery1 from "../Galleries/Gallery1";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import RoadMap from "../RoadMap";
import DateCalender from "../DateCalender";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import CommentBox from "../CommentBox";
import TourSingleSidebar from "../TourSingleSidebar";

export default function SingleFour({ tour }) {
  const [activeAcorditions, setActiveAcorditions] = useState([]);
  return (
    <>
      <section className="">
        <div className="container">
          <MainInformation tour={tour} />

          <Gallery1 />
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-center layout-pb-md">
                <OthersInformation />
              </div>

              <Overview />

              <div className="accordion -tour-single row y-gap-20 pt-60 md:pt-30 js-accordion">
                <div className="col-12">
                  <div
                    className={`accordion__item py-30 border-1-top ${
                      activeAcorditions.includes("included") ? "is-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setActiveAcorditions((pre) =>
                          pre.includes("included")
                            ? [...pre.filter((elm) => elm != "included")]
                            : [...pre, "included"],
                        )
                      }
                      className="accordion__button d-flex items-center justify-between"
                    >
                      <div className="text-30 md:text-20 lh-13 fw-700">
                        What's included
                      </div>

                      <div className="accordion__icon size-30 text-24 flex-center">
                        <i className="icon-chevron-down"></i>
                        <i className="icon-chevron-up"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        activeAcorditions.includes("included")
                          ? { maxHeight: "500px" }
                          : {}
                      }
                    >
                      <div className="pt-20">
                        <Included />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion__item py-30 border-1-top ${
                      activeAcorditions.includes("roadmap") ? "is-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setActiveAcorditions((pre) =>
                          pre.includes("roadmap")
                            ? [...pre.filter((elm) => elm != "roadmap")]
                            : [...pre, "roadmap"],
                        )
                      }
                      className="accordion__button d-flex items-center justify-between"
                    >
                      <div className="text-30 md:text-20 lh-13 fw-700">
                        Itinerary
                      </div>

                      <div className="accordion__icon size-30 text-24 flex-center">
                        <i className="icon-chevron-down"></i>
                        <i className="icon-chevron-up"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        activeAcorditions.includes("roadmap")
                          ? { maxHeight: "500px" }
                          : {}
                      }
                    >
                      <div className="pt-20">
                        <RoadMap />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion__item py-30 border-1-top ${
                      activeAcorditions.includes("calender") ? "is-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setActiveAcorditions((pre) =>
                          pre.includes("calender")
                            ? [...pre.filter((elm) => elm != "calender")]
                            : [...pre, "calender"],
                        )
                      }
                      className="accordion__button d-flex items-center justify-between"
                    >
                      <div className="text-30 md:text-20 lh-13 fw-700">
                        Availability Calendar
                      </div>

                      <div className="accordion__icon size-30 text-24 flex-center">
                        <i className="icon-chevron-down"></i>
                        <i className="icon-chevron-up"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        activeAcorditions.includes("calender")
                          ? { maxHeight: "500px" }
                          : {}
                      }
                    >
                      <div className="pt-20">
                        <DateCalender />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion__item py-30 border-1-top ${
                      activeAcorditions.includes("faq") ? "is-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setActiveAcorditions((pre) =>
                          pre.includes("faq")
                            ? [...pre.filter((elm) => elm != "faq")]
                            : [...pre, "faq"],
                        )
                      }
                      className="accordion__button d-flex items-center justify-between"
                    >
                      <div className="text-30 md:text-20 lh-13 fw-700">FAQ</div>

                      <div className="accordion__icon size-30 text-24 flex-center">
                        <i className="icon-chevron-down"></i>
                        <i className="icon-chevron-up"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        activeAcorditions.includes("faq")
                          ? { maxHeight: "500px" }
                          : {}
                      }
                    >
                      <div className="pt-20">
                        <div className="accordion -simple row y-gap-20 js-accordion">
                          <Faq />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`accordion__item py-30 border-1-top ${
                      activeAcorditions.includes("review") ? "is-active" : ""
                    }`}
                  >
                    <div
                      onClick={() =>
                        setActiveAcorditions((pre) =>
                          pre.includes("review")
                            ? [...pre.filter((elm) => elm != "review")]
                            : [...pre, "review"],
                        )
                      }
                      className="accordion__button d-flex items-center justify-between"
                    >
                      <div className="text-30 md:text-20 lh-13 fw-700">
                        Customer Reviews
                      </div>

                      <div className="accordion__icon size-30 text-24 flex-center">
                        <i className="icon-chevron-down"></i>
                        <i className="icon-chevron-up"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        activeAcorditions.includes("review")
                          ? { maxHeight: "500px" }
                          : {}
                      }
                    >
                      <div className="pt-20">
                        <Rating />
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
              </div>
            </div>

            <div className="col-lg-4">
              <div
                style={{ position: "sticky", top: "10px" }}
                className="d-flex justify-end"
              >
                <TourSingleSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
