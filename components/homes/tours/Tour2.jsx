"use client";

import Stars from "@/components/common/Stars";
import { tourData } from "@/data/tours";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const ddlocations = ["New York", "London", "Paris"];

export default function Tour2() {
  const [ddActive, setDdActive] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("New York");
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-center y-gap-10">
          <div ref={dropDownContainer} className="col-auto">
            <h2 className="text-30 md:text-24">
              Best of
              <div
                className={`dropdown -type-list js-dropdown js-form-dd ${
                  ddActive ? "is-active" : ""
                } `}
                data-main-value="london"
              >
                <div
                  className="dropdown__button text-light-7 js-button"
                  onClick={() => setDdActive((pre) => !pre)}
                >
                  <span style={{ marginLeft: "8px" }} className="js-title">
                    {" "}
                    {currentLocation}
                  </span>
                  <i className="icon-chevron-down ml-5 text-18"></i>
                </div>

                <div className="dropdown__menu text-16 fw-500 border-1 js-menu-items">
                  {ddlocations.map((elm, i) => (
                    <div
                      onClick={() => {
                        setCurrentLocation(elm);
                        setDdActive(false);
                      }}
                      key={i}
                      className="dropdown__item"
                    >
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 pt-40 sm:pt-20"
        >
          {tourData
            .filter((elm) =>
              elm.location
                .toLowerCase()
                .includes(currentLocation.toLowerCase()),
            )
            .slice(0, 4)
            .map((elm, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <a
                  href="#"
                  className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
                >
                  <div className="tourCard__header">
                    <div className="tourCard__image ratio ratio-28:20">
                      <Image
                        width={421}
                        height={301}
                        src={elm.imageSrc}
                        alt="image"
                        className="img-ratio"
                      />
                    </div>

                    <button className="tourCard__favorite">
                      <i className="icon-heart"></i>
                    </button>
                  </div>

                  <div className="tourCard__content px-20 py-10">
                    <div className="tourCard__location d-flex items-center text-13 text-light-2">
                      <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                      {elm.location}
                    </div>

                    <h3 className="tourCard__title text-16 fw-500 mt-5">
                      <span>{elm.title}</span>
                    </h3>

                    <div className="tourCard__rating text-13 mt-5">
                      <div className="d-flex items-center">
                        <div className="d-flex x-gap-5">
                          <Stars star={elm.rating} />
                        </div>

                        <span className="text-dark-1 ml-10">
                          {elm.rating} ({elm.ratingCount})
                        </span>
                      </div>
                    </div>

                    <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                      <div className="d-flex items-center">
                        <i className="icon-clock text-16 mr-5"></i>
                        {elm.duration}
                      </div>

                      <div>
                        From{" "}
                        <span className="text-16 fw-500">${elm.price}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
