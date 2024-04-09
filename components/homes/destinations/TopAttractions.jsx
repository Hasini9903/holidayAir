import { destinationsThree } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopAttractions() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Top Attractions
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
          className="row y-gap-30 justify-between pt-40 sm:pt-20"
        >
          {destinationsThree.map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <Link
                href="/tour-list-1"
                className="d-flex items-center -hover-image-scale"
              >
                <div className="size-100 relative rounded-12 -hover-image-scale__image">
                  <Image
                    width={100}
                    height={100}
                    src={elm.imgSrc}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>

                <div className="ml-30">
                  <h3 className="text-18 fw-500">{elm.title}</h3>
                  <p className="text-14">{elm.tours}+ Tours</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
