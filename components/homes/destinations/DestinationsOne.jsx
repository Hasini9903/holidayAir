"use client";

import { destinations } from "@/data/destinations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DestinationsOne() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30 md:text-24">
              Trending destinations
            </h2>
          </div>

          <div data-aos="fade-up" className="col-auto">
            <Link
              href={"/tour-list-1"}
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="overflow-hidden pt-40 sm:pt-20 js-section-slider"
        >
          <div className="swiper-wrapper">
            <Swiper
              spaceBetween={30}
              className="w-100"
              pagination={{
                el: ".pbutton1",
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 6,
                },
                1200: {
                  slidesPerView: 8,
                },
              }}
            >
              {destinations.map((elm, i) => (
                <SwiperSlide key={i}>
                  <a
                    href="#"
                    className="featureImage -type-1 text-center -hover-image-scale"
                  >
                    <div className="featureImage__image mx-auto rounded-full -hover-image-scale__image">
                      <Image
                        width={260}
                        height={260}
                        src={elm.imageSrc}
                        alt="image"
                        className="size-130 object-cover rounded-full"
                      />
                    </div>

                    <h3 className="featureImage__title text-16 fw-500 mt-20">
                      {elm.name}
                    </h3>
                    <p className="featureImage__text text-14">
                      {elm.tourCount}+ Tours
                    </p>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="pagination -type-1 justify-center pt-60 md:pt-40 js-dest-pagination swiperPagination1">
            <div className="pagination__button pbutton1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
