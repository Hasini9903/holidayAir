import { destinationsTwo } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DestinationsTwo() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Trending Destinations
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between xl:justify-center sm:justify-start pt-40 sm:pt-20 mobile-css-slider -w-160"
        >
          {destinationsTwo.map((elm, i) => (
            <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-6">
              <Link href="/tour-list-1" className="-hover-image-scale">
                <div className="ratio ratio-19:21 rounded-12 -hover-image-scale__image">
                  <Image
                    width={260}
                    height={260}
                    src={elm.imgSrc}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>

                <h3 className="text-18 fw-500 mt-20">{elm.title}</h3>
                <p className="text-14">{elm.tours}+ Tours</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
