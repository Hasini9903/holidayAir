"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
const images = [
  "/img/tourSingle/2/1.png",
  "/img/tourSingle/2/2.png",
  "/img/tourSingle/2/3.png",
];
export default function Gallery3() {
  return (
    <div className="row justify-center pt-30">
      <div className="col-12">
        <div className="relative overflow-hidden js-section-slider">
          <div className="swiper-wrapper" style={{ height: "438px" }}>
            <Swiper
              spaceBetween={10}
              className="w-100 overflow-visible"
              style={{ maxWidth: "100%" }}
              loop={true}
              navigation={{
                prevEl: ".js-slider1-prev8",
                nextEl: ".js-slider1-next8",
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
            >
              {images.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide">
                    <Image
                      width={850}
                      height={510}
                      src={elm}
                      alt="image"
                      className="img-cover rounded-12"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="navAbsolute -type-2">
            <button className="navAbsolute__button bg-white js-sliderMain-prev js-slider1-prev8">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navAbsolute__button bg-white js-sliderMain-next js-slider1-next8">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
