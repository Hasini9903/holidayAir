"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slidesData = [
  // Define an array of data for each slide
  {
    id: "01",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "02",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "03",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "04",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "05",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  // Add more data for additional slides as needed
];
export default function Hero9() {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0); // Set the initial slide to index 0
    }
  }, []);

  const handlePaginationClick = (index) => {
    setCurrentSlideIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);

    if (swiper.activeIndex >= 5) {
      setCurrentSlideIndex(swiper.activeIndex - 5);
    }
  };
  return (
    <section className="hero -type-9">
      <div
        className="hero__slider js-section-slider"
        data-gap="0"
        data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
        data-pagination="js-main-slider-pagination"
      >
        <div className="swiper-wrapper">
          <div className="swiper-wrapper">
            <Swiper
              className="w-100"
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper; // Store the Swiper instance in the ref
              }}
              onSlideChange={handleSlideChange}
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
              {slidesData.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="hero__bg">
                    <Image
                      width={1860}
                      height={900}
                      src={elm.imageSrc}
                      alt="background"
                    />
                  </div>

                  <div className="container">
                    <div className="hero__content">
                      <div className="row items-center justify-between">
                        <div className="col-xl-7 col-lg-8">
                          <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="hero__subtitle text-18 fw-500 text-white mb-10"
                          >
                            {elm.subtitle}
                          </div>

                          <h1
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="hero__title text-white"
                          >
                            {elm.title.split(" ").slice(0, 2).join(" ")}
                            <br className="lg:d-none" />
                            {elm.title.split(" ").slice(2).join(" ")}
                          </h1>

                          <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="hero__text text-white mt-10"
                          >
                            {elm.text.split(" ").slice(0, 10).join(" ")}
                            <br className="lg:d-none" />
                            {elm.text.split(" ").slice(10).join(" ")}
                          </div>

                          <Link
                            href={"/tour-list-1"}
                            className="hero__button mt-30"
                          >
                            <button className="button -md -outline-white text-white">
                              View Tour
                              <i className="icon-arrow-top-right ml-10"></i>
                            </button>
                          </Link>
                        </div>

                        <div className="col-lg-4">
                          <div className="hero__image">
                            <Image
                              width="437"
                              height="177"
                              src={elm.imageSvgSrc}
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="container -pagination">
          <div className="hero__pagination js-main-slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            {slidesData.map((elm, i) => (
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handlePaginationClick(i)}
                key={i}
                className={`pagination__item ${
                  currentSlideIndex == i ? "is-active" : ""
                }`}
              >
                {elm.id}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
