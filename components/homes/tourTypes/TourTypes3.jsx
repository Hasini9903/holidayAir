import { featureCards } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TourTypes3() {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Popular things to do
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
          className="row y-gap-20 pt-40"
        >
          {featureCards.map((elm, i) => (
            <div key={i} className="col-xl-2 col-md-4 col-6">
              <Link
                href={"/tour-list-1"}
                className="featureCard -type-5 -hover-accent-1"
              >
                <div className="featureCard__icon">
                  <Image width="40" height="41" src={elm.imgSrc} alt="image" />
                </div>

                <h4 className="text-18 fw-500 mt-20">{elm.title}</h4>
                <div className="lh-13 mt-5">{elm.tourCount}+ Tours</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
