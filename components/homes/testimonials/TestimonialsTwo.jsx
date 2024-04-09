"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";
import { testimonialsTwo } from "@/data/testimonials";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TestimonialsTwo() {
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
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Customer Reviews
            </h2>
          </div>
        </div>

        <div className="row justify-center pt-60 md:pt-30">
          <div className="col-xl-7 col-md-8 col-sm-10">
            <div className="overflow-hidden js-testimonialsSlider_1">
              <div
                data-aos="fade-right"
                data-aos-delay=""
                className="swiper-wrapper"
              >
                <Swiper
                  spaceBetween={30}
                  className="w-100"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper; // Store the Swiper instance in the ref
                  }}
                  onSlideChange={handleSlideChange}
                  modules={[Pagination]}
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
                  {testimonialsTwo.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonials -type-2 text-center">
                        <div className="testimonials__icon">
                          <svg
                            width="60"
                            height="43"
                            viewBox="0 0 60 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.837 42.0652C11.0326 42.0652 7.6087 40.5435 4.56522 37.5C1.52174 34.3478 0 29.7283 0 23.6413C0 16.6848 1.84783 11.0326 5.54348 6.68478C9.34783 2.22825 14.7283 0 21.6848 0C24.1848 0 26.1413 0.163038 27.5543 0.489121V7.98912C26.0326 7.77173 24.0761 7.66304 21.6848 7.66304C17.9891 7.66304 15 8.91304 12.7174 11.413C10.5435 13.5869 9.29348 16.4674 8.96739 20.0543C10.3804 18.3152 12.663 17.4456 15.8152 17.4456C19.0761 17.4456 21.8478 18.587 24.1304 20.8696C26.413 23.0435 27.5543 25.9239 27.5543 29.5109C27.5543 33.2065 26.3587 36.25 23.9674 38.6413C21.5761 40.9239 18.5326 42.0652 14.837 42.0652ZM47.2826 42.0652C43.4783 42.0652 40.0543 40.5435 37.0109 37.5C33.9674 34.3478 32.4456 29.7283 32.4456 23.6413C32.4456 16.6848 34.2935 11.0326 37.9891 6.68478C41.7935 2.22825 47.1739 0 54.1304 0C56.6304 0 58.587 0.163038 60 0.489121V7.98912C58.4783 7.77173 56.5217 7.66304 54.1304 7.66304C50.4348 7.66304 47.4456 8.91304 45.163 11.413C42.9891 13.5869 41.7391 16.4674 41.413 20.0543C42.8261 18.3152 45.1087 17.4456 48.2609 17.4456C51.5217 17.4456 54.2935 18.587 56.5761 20.8696C58.8587 23.0435 60 25.9239 60 29.5109C60 33.2065 58.8043 36.25 56.413 38.6413C54.0217 40.9239 50.9783 42.0652 47.2826 42.0652Z"
                              fill="#EB662B"
                            />
                          </svg>
                        </div>

                        <div className="text-20 md:text-18 fw-500 mt-60 md:mt-30">
                          {elm.comment}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="testimonialsPagination -type-1 pt-60 md:pt-40 testimonialsSlider_1-pagination js-testimonialsSlider_1-pagination"
            >
              {testimonialsTwo.map((elm, i) => (
                <div
                  onClick={() => handlePaginationClick(i)}
                  key={i}
                  className={`testimonialsPagination__item ${
                    currentSlideIndex == i ? "is-active" : ""
                  } `}
                >
                  <Image
                    width={105}
                    height={106}
                    src={elm.image}
                    alt="person"
                  />

                  <div className="ml-20">
                    <div className="textj-16 lh-14 fw-500">{elm.name}</div>
                    <div className="text-14 lh-14">{elm.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
