"use client";

import { useState, useEffect, useRef } from "react";
import Calender from "../common/dropdownSearch/Calender";
import RangeSlider from "../common/RangeSlider";
import { tourDataThree, tourDataTwo } from "@/data/tours";
import Stars from "../common/Stars";
import Pagination from "../common/Pagination";
import Map from "./Map";
import { speedFeatures } from "@/data/tourFilteringOptions";
import ToggleSidebar from "./ToggleSidebar";
import Image from "next/image";
import Link from "next/link";

export default function TourList7() {
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropDownContainer = useRef();
  const dropDownContainer2 = useRef();

  const [curentDD, setCurentDD] = useState("");

  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActives(false);
      }
      if (
        dropDownContainer2.current &&
        !dropDownContainer2.current.contains(event.target)
      ) {
        setCurentDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <section className="halfMap -type-1 -wide">
        <div className="halfMap__content">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">
                Explore all things to do in Phuket
              </h2>
            </div>
          </div>

          <div className="row  custom-dd-container y-gap-20 justify-between items-center pt-30 md:pt-10 mb-30">
            <div className="col-auto">
              <div className="row  custom-dd-container x-gap-10 y-gap-10 items-center">
                <div className="col-auto">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="button -h-50 px-20 -outline-dark-1 text-dark-1"
                  >
                    <i className="icon-sort-down text-18 mr-10"></i>
                    All Filter
                  </button>
                </div>

                <div className="col-auto">
                  <div
                    className="dropdown -base -date js-calendar js-form-dd js-dropdown js-dont-close"
                    data-main-value=""
                  >
                    <div className="dropdown__button h-50 min-w-auto js-button">
                      <div>
                        <span className="js-first-date">
                          <Calender />
                        </span>
                        <span className="js-last-date"></span>
                      </div>
                      <i className="icon-chevron-down ml-10"></i>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div
                    ref={dropDownContainer2}
                    className={` dropdown -base -price js-dropdown js-form-dd  ${
                      curentDD == "priceFilter1" ? "is-active" : ""
                    } `}
                  >
                    <div
                      onClick={() => {
                        setCurentDD((pre) =>
                          pre == "priceFilter1" ? "" : "priceFilter1",
                        );
                      }}
                      className="dropdown__button h-50 min-w-auto js-button"
                    >
                      <span className="js-title">Price</span>
                      <i className="icon-chevron-down ml-10"></i>
                    </div>

                    <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                      <h5 className="text-18 fw-500">Filter Price</h5>
                      <div className="pt-20">
                        <RangeSlider />
                      </div>
                      <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-30">
                        Apply
                        <i className="icon-arrow-top-right text-16 ml-10"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div ref={dropDownContainer} className="col-auto">
              <div
                className={`dropdown -type-2 js-dropdown js-form-dd ${
                  ddActives ? "is-active" : ""
                } `}
                data-main-value=""
              >
                <div
                  className="dropdown__button js-button"
                  onClick={() => setDdActives((pre) => !pre)}
                >
                  <span>Sort by: </span>
                  <span className="js-title">
                    {sortOption ? sortOption : "Featured"}
                  </span>
                  <i className="icon-chevron-down"></i>
                </div>

                <div className="dropdown__menu js-menu-items">
                  {speedFeatures.map((elm, i) => (
                    <div
                      onClick={() => {
                        setSortOption((pre) => (pre == elm ? "" : elm));
                        setDdActives(false);
                      }}
                      key={i}
                      className="dropdown__item"
                      data-value="fast"
                    >
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="halfMap__cards">
            <div className="row y-gap-30">
              {tourDataTwo.map((elm, i) => (
                <div className="col-12" key={i}>
                  <div className="tourCard -type-2">
                    <div className="tourCard__image">
                      <Image
                        width={420}
                        height={390}
                        src={elm.imageSrc}
                        alt="image"
                      />

                      {elm.badgeText && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            {elm.badgeText}
                          </div>
                        </div>
                      )}

                      {elm.featured && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            FEATURED
                          </div>
                        </div>
                      )}
                      <div className="tourCard__favorite">
                        <button className="button -accent-1 size-35 bg-white rounded-full flex-center">
                          <i className="icon-heart text-15"></i>
                        </button>
                      </div>
                    </div>

                    <div className="tourCard__content">
                      <div className="tourCard__location">
                        <i className="icon-pin"></i>
                        {elm.location}
                      </div>

                      <h3 className="tourCard__title mt-5">
                        <span>{elm.title}</span>
                      </h3>

                      <div className="d-flex items-center mt-5">
                        <div className="d-flex items-center x-gap-5">
                          <Stars star={elm.rating} font={12} />
                        </div>

                        <div className="text-14 ml-10">
                          <span className="fw-500">{elm.rating}</span> (
                          {elm.ratingCount})
                        </div>
                      </div>

                      <p className="tourCard__text mt-5">{elm.description}</p>

                      <div className="row x-gap-20 y-gap-5 pt-30">
                        {elm.features.map((elm2, i2) => (
                          <div key={i2} className="col-auto">
                            <div className="text-14 text-accent-1">
                              <i className={`${elm2.icon} mr-10`}></i>
                              {elm2.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="tourCard__info">
                      <div>
                        <div className="d-flex items-center text-14">
                          <i className="icon-clock mr-10"></i>
                          {elm.duration}
                        </div>

                        <div className="tourCard__price">
                          <div>${elm.fromPrice}</div>

                          <div className="d-flex items-center">
                            From{" "}
                            <span className="text-20 fw-500 ml-5">
                              ${elm.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button className="button -outline-accent-1 text-accent-1">
                        <Link href={`/tour-single-1/${elm.id}`}>
                          View Details
                          <i className="icon-arrow-top-right ml-10"></i>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-center flex-column mt-30">
            <Pagination />

            <div className="text-14 text-center mt-20">
              Showing results 1-30 of 1,415
            </div>
          </div>
        </div>

        <div className="halfMap__map">
          <Map />
        </div>
      </section>
      <ToggleSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </>
  );
}
