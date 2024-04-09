"use client";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { clients } from "@/data/clients";
import Image from "next/image";
import React from "react";

export default function BrandsOne() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Trusted by all the largest travel brands
            </h2>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="" className="pt-40 sm:pt-20">
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
