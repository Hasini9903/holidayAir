import { destinationsTen } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Destinations6() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
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
          className="row y-gap-30 md:y-gap-20 pt-40 sm:pt-20"
        >
          {destinationsTen.map((elm, i) => (
            <div key={i} className="w-1/5 lg:w-1/4 md:w-1/2">
              <Link
                href="/tour-list-1"
                className="featureCard -type-7 -hover-image-scale"
              >
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <Image
                    width={351}
                    height={451}
                    src={elm.image}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>

                <div className="mt-20">
                  <h4 className="text-18 fw-500">{elm.name}</h4>
                  <div className="text-14 lh-13 mt-5">
                    {elm.tourCount}+ Tours
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
