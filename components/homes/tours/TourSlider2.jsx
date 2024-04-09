"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import Stars from "@/components/common/Stars";
import { filterTour } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
const travelStayles = ["Fast", "Steady", "Furious", "Grind"];
export default function TourSlider2() {
  const [ddActive, setDdActive] = useState(false);
  const [travelStyle, setTravelStyle] = useState("");
  const [filtered, setFiltered] = useState(filterTour);
  useEffect(() => {
    if (travelStyle) {
      setFiltered([...filterTour.filter((elm) => elm.spead == travelStyle)]);
    } else {
      setFiltered(filterTour);
    }
  }, [travelStyle]);

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
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Featured Trips
            </h2>
          </div>

          <div ref={dropDownContainer} className="col-auto">
            <div
              className={`dropdown -type-1 js-dropdown js-form-dd ${
                ddActive ? "is-active" : ""
              } `}
              data-main-value=""
            >
              <div
                className="dropdown__button  js-button"
                onClick={() => setDdActive((pre) => !pre)}
              >
                <span className="js-title">
                  {travelStyle ? travelStyle : "By Travel Style"}
                </span>
                <i className="icon-chevron-down ml-10"></i>
              </div>

              <div className="dropdown__menu js-menu-items">
                {travelStayles.map((elm, i) => (
                  <div
                    key={i}
                    className="dropdown__item"
                    onClick={() => {
                      setTravelStyle((pre) => (pre == elm ? "" : elm));
                      setDdActive(false);
                    }}
                  >
                    {elm}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-40 sm:pt-20">
          <div className="overflow-hidden js-section-slider">
            <div
              data-aos="fade-right"
              data-aos-delay=""
              className="swiper-wrapper "
            >
              <Swiper
                spaceBetween={30}
                className="w-100"
                navigation={{
                  prevEl: ".js-slider1-prev",
                  nextEl: ".js-slider1-next",
                }}
                modules={[Navigation, Pagination]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {filtered.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      href={`/tour-single-1/${elm.id}`}
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

                        <div className="tourCard__rating d-flex items-center text-13 mt-5">
                          <div className="d-flex x-gap-5">
                            <Stars star={elm.rating} />
                          </div>

                          <span className="text-dark-1 ml-10">
                            {elm.rating} ({elm.ratingCount})
                          </span>
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
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-slider1-prev">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-slider1-next">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
