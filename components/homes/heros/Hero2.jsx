"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Grab up to 35% off on your favorite Destination",
    text: "Limited time offer, don't miss the opportunity",
    buttonText: "Book Now",
    imageSrc: "/img/hero/2/1.png",
  },
  {
    id: 2,
    title: "Explore Exotic Beaches and Resorts",
    text: "Discover paradise on Earth with our exclusive beach destinations.",
    buttonText: "Explore Now",
    imageSrc: "/img/hero/2/2.png",
  },
  {
    id: 3,
    title: "Adventure Awaits in the Mountains",
    text: "Embark on thrilling mountain adventures with unbeatable discounts.",
    buttonText: "Book Your Adventure",
    imageSrc: "/img/hero/2/3.png",
  },
  {
    id: 4,
    title: "Cruise into the Sunset",
    text: "Sail away on a memorable cruise experience with huge discounts.",
    buttonText: "Book Your Cruise",
    imageSrc: "/img/hero/2/4.png",
  },
  {
    id: 5,
    title: "Discover Historic Cities",
    text: "Experience the charm of historic cities with our special offers.",
    buttonText: "Explore History",
    imageSrc: "/img/hero/2/5.png",
  },
  // Add more slide objects as needed
];

export default function Hero2() {
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);

  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <section className="hero -type-2">
      <div className="hero__shape">
        <svg
          width="1920"
          height="573"
          viewBox="0 0 1920 573"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M0 0H1920V515.556C1920 515.556 1665 386.305 960 515.556C255 644.806 0 515.556 0 515.556V0Z"
            fill="#EB662B"
          />
        </svg>
      </div>

      <div className="container">
        <div ref={dropDownContainer} className="hero__filter">
          <div className="searchForm -type-1 shadow-1">
            <div className="searchForm__form">
              <div className="searchFormItem js-select-control js-form-dd">
                <div
                  className="searchFormItem__button"
                  onClick={() =>
                    setCurrentActiveDD((pre) =>
                      pre == "location" ? "" : "location",
                    )
                  }
                >
                  <div className="searchFormItem__icon size-50 rounded-12 bg-accent-1-05 flex-center">
                    <i className="text-20 icon-pin"></i>
                  </div>
                  <div className="searchFormItem__content">
                    <h5>Where</h5>
                    <div className="js-select-control-chosen">
                      {location ? location : "Search destinations"}
                    </div>
                  </div>
                </div>

                <Location
                  setLocation={setLocation}
                  active={currentActiveDD === "location"}
                />
              </div>

              <div className="searchFormItem js-select-control js-form-dd js-calendar">
                <div
                  className="searchFormItem__button"
                  onClick={() =>
                    setCurrentActiveDD((pre) =>
                      pre == "calender" ? "" : "calender",
                    )
                  }
                >
                  <div className="searchFormItem__icon size-50 rounded-12 bg-accent-1-05 flex-center">
                    <i className="text-20 icon-calendar"></i>
                  </div>
                  <div className="searchFormItem__content">
                    <h5>When</h5>
                    <div>
                      <span className="js-first-date">
                        {" "}
                        <Calender active={currentActiveDD === "calender"} />
                      </span>
                      <span className="js-last-date"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="searchFormItem js-select-control js-form-dd">
                <div
                  className="searchFormItem__button"
                  onClick={() =>
                    setCurrentActiveDD((pre) =>
                      pre == "tourType" ? "" : "tourType",
                    )
                  }
                >
                  <div className="searchFormItem__icon size-50 rounded-12 bg-accent-1-05 flex-center">
                    <i className="text-20 icon-flag"></i>
                  </div>
                  <div className="searchFormItem__content">
                    <h5>Tour Type</h5>
                    <div className="js-select-control-chosen">
                      {tourType ? tourType : "All tour"}
                    </div>
                  </div>
                </div>

                <TourType
                  setTourType={setTourType}
                  active={currentActiveDD === "tourType"}
                />
              </div>
            </div>

            <div className="searchForm__button">
              <button className="button -dark-1 bg-accent-1 text-white">
                <i className="icon-search text-16 mr-10"></i>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="hero__slider">
          <div className="hero__bg bg-accent-1">
            <Image
              width={973}
              height={500}
              src="/img/hero/2/bg.png"
              alt="image"
            />
          </div>

          <div className="overflow-hidden js-section-slider">
            <div className="hero__slides swiper-wrapper">
              <Swiper
                spaceBetween={30}
                className="w-100"
                navigation={{
                  prevEl: ".hero2prev",
                  nextEl: ".hero2next",
                }}
                modules={[Navigation]}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                  },
                }}
              >
                {slides.map((elm, i) => (
                  <SwiperSlide key={i}>
                    <div className="hero__slide swiper-slide">
                      <div className="hero__content">
                        <h1
                          className="hero__title"
                          data-aos="fade-up"
                          data-aos-delay="300"
                        >
                          Grab up to
                          <span className="hero__title_shape text-accent-1">
                            35% off
                            <span>
                              <Image
                                width="231"
                                height="56"
                                src="/img/hero/2/brush.svg"
                                alt="brush stroke"
                              />
                            </span>
                          </span>
                          <br />
                          on your favorite
                          <br />
                          Destination
                        </h1>

                        <p
                          className="hero__text"
                          data-aos="fade-up"
                          data-aos-delay="350"
                        >
                          Limited time offer, don't miss the opportunity
                        </p>

                        <button
                          data-aos="fade-right"
                          data-aos-delay="200"
                          className="button -md -dark-1 bg-white text-accent-1 mt-30"
                        >
                          <Link href="/tour-list-1">
                            <span>Book Now</span>
                            <i className="icon-arrow-top-right ml-10"></i>
                          </Link>
                        </button>
                      </div>

                      <div className="hero__image">
                        <div className="hero__image_shape">
                          <Image
                            width="40"
                            height="500"
                            src="/img/hero/2/shape.svg"
                            alt="image"
                          />
                        </div>

                        <div className="hero__image_mobileShape">
                          <Image
                            width="847"
                            height="40"
                            src="/img/hero/2/shape2.svg"
                            alt="image"
                          />
                        </div>

                        <Image
                          width={630}
                          height={500}
                          src="/img/hero/2/1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="navAbsolute">
            <button className="navAbsolute__button bg-white js-sliderMain-prev hero2prev">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-sliderMain-next hero2next">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
