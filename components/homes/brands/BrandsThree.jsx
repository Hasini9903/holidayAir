"use client";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { clients } from "@/data/clients";
import Image from "next/image";
import React from "react";

export default function BrandsThree() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div data-aos="fade-up" data-aos-delay="" className="">
              Trusted by the world'’'s best
            </div>
          </div>
        </div>

        <div className="pt-60 md:pt-30">
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
            {clients.map((elm, i) => (
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
