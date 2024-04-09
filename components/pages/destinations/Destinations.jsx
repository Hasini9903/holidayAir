import { destinations13 } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Destinations() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Trending destinations</h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              className="buttonArrow d-flex items-center "
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div className="row y-gap-30 justify-between xl:justify-center sm:justify-start pt-40 sm:pt-20 mobile-css-slider -w-160">
          {destinations13.map((elm, i) => (
            <div
              key={i}
              className="col-xl-auto col-lg-2 col-md-3 col-sm-4 col-6"
            >
              <div className="featureImage -type-1 text-center">
                <div className="featureImage__image mx-auto">
                  <Image
                    width={260}
                    height={260}
                    src={elm.imgSrc}
                    alt="image"
                    className="size-130 object-cover rounded-full"
                  />
                </div>

                <h3 className="featureImage__title text-16 fw-500 mt-20">
                  {elm.name}
                </h3>
                <p className="featureImage__text text-14">{elm.tours}+ Tours</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
