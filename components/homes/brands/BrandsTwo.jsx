"use client";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { clients } from "@/data/clients";
import Image from "next/image";
import React from "react";

export default function BrandsTwo() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div data-aos="fade-up" data-aos-delay="" className="">
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
