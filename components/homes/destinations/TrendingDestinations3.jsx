import { destinationCards2 } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TrendingDestinations3() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-15 justify-between items-end">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Trending destinations
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-up"
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
          className="row y-gap-30 pt-40 sm:pt-20"
        >
          {destinationCards2.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <Link
                href="/tour-list-1"
                className="featureCard -type-6 -hover-image-scale"
              >
                <div className="featureCard__image -hover-image-scale__image rounded-12">
                  <Image
                    width={450}
                    height={270}
                    src={elm.imgSrc}
                    alt="image"
                  />
                </div>

                <div className="featureCard__content">
                  <h3 className="text-16 fw-500 text-white">{elm.title}</h3>
                  <p className="text-white lh-16">{elm.tourCount}+ Tours</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
