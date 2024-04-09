"use client";

import { clients2 } from "@/data/clients";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Autoplay } from "swiper/modules";
import { testimonialsFive } from "@/data/testimonials";
import { featuresFive } from "@/data/features";
import Image from "next/image";

export default function TestimonialsFive() {
  return (
    <section className="relative layout-pt-lg layout-pb-lg">
      <div className="sectionBg -mx-30 bg-dark-1 rounded-24"></div>

      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-5 col-lg-6">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24 text-white fw-700"
            >
              What our Travelers
              <br />
              are saying
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              className="row x-gap-40 y-gap-30 pt-30 md:pt-10"
            >
              {featuresFive.map((elm, i) => (
                <div key={i} className="col-md-6">
                  <div className="fw-700 text-40 lh-1/1 text-white">
                    {elm.value}
                  </div>
                  <div className="text-white">{elm.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="" className="col-lg-5">
            <div className="js-testimonials-slider-1">
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30}
                  className="w-100"
                  style={{ maxWidth: "100%" }}
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor={true}
                >
                  {testimonialsFive.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="testimonials -type-2 shadow-1 bg-white rounded-24 pt-50 px-40 pb-30">
                        <div className="d-flex items-center justify-between">
                          <div className="text-18 fw-500 text-accent-1">
                            {elm.comment}
                          </div>

                          <div className="testimonials__icon">
                            <svg
                              width="37"
                              height="26"
                              viewBox="0 0 37 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.1 25.8C6.76667 25.8 4.66667 24.8667 2.8 23C0.933334 21.0667 0 18.2333 0 14.5C0 10.2333 1.13333 6.76666 3.4 4.1C5.73333 1.36667 9.03333 0 13.3 0C14.8333 0 16.0333 0.099998 16.9 0.299995V4.9C15.9667 4.76666 14.7667 4.7 13.3 4.7C11.0333 4.7 9.2 5.46666 7.8 7C6.46667 8.33333 5.7 10.1 5.5 12.3C6.36667 11.2333 7.76667 10.7 9.7 10.7C11.7 10.7 13.4 11.4 14.8 12.8C16.2 14.1333 16.9 15.9 16.9 18.1C16.9 20.3667 16.1667 22.2333 14.7 23.7C13.2333 25.1 11.3667 25.8 9.1 25.8ZM29 25.8C26.6667 25.8 24.5667 24.8667 22.7 23C20.8333 21.0667 19.9 18.2333 19.9 14.5C19.9 10.2333 21.0333 6.76666 23.3 4.1C25.6333 1.36667 28.9333 0 33.2 0C34.7333 0 35.9333 0.099998 36.8 0.299995V4.9C35.8667 4.76666 34.6667 4.7 33.2 4.7C30.9333 4.7 29.1 5.46666 27.7 7C26.3667 8.33333 25.6 10.1 25.4 12.3C26.2667 11.2333 27.6667 10.7 29.6 10.7C31.6 10.7 33.3 11.4 34.7 12.8C36.1 14.1333 36.8 15.9 36.8 18.1C36.8 20.3667 36.0667 22.2333 34.6 23.7C33.1333 25.1 31.2667 25.8 29 25.8Z"
                                fill="#E7E6E6"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="text-15 fw-500 mt-15">“{elm.desc}”</div>

                        <div className="d-flex items-center mt-20 pt-20 border-1-top">
                          <div className="testimonials__image size-60 rounded-full">
                            <Image
                              width={98}
                              height={98}
                              src={elm.img}
                              alt="image"
                            />
                          </div>

                          <div className="ml-20">
                            <div className="lh-16 text-16 fw-500">
                              {elm.name}
                            </div>
                            <div className="lh-16">{elm.role}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="pagination -type-1 justify-center pt-60 md:pt-40 js-testimonials-pagination">
                <div className="pagination__button"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-center text-center pt-60 md:pt-40">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-15 fw-400 text-white"
            >
              Trusted by all thelargest travel brands
            </h2>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="" className="pt-40">
          <Swiper
            spaceBetween={30}
            className="w-100"
            modules={[Autoplay]}
            autoplay
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {clients2.map((elm, i) => (
              <SwiperSlide key={i}>
                <div key={i} className=" d-flex justify-center items-center ">
                  <Image
                    width={140}
                    height={90}
                    style={{
                      height: "30px",
                      width: "100px",
                      objectFit: "contain",
                    }}
                    src={elm}
                    alt="image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
