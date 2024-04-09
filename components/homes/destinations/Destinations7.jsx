import { regions } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Destinations7() {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-2-05">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Top Deals Worldwide
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center "
            >
              <span>See All Travel</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 md:y-gap-20 md:x-gap-20 pt-40 sm:pt-20"
        >
          {regions.map((elm, i) => (
            <div key={i} className="col-xl-2 col-lg-3 col-md-4 col-6">
              <Link
                href="/tour-list-1"
                className="featureCard -type-8 -hover-image-scale"
              >
                <div className="featureCard__image -hover-image-scale__image">
                  <Image width={285} height={226} src={elm.image} alt="image" />
                </div>

                <div className="featureCard__badge">
                  <div>UPTO</div>
                  <div>{elm.discount}%</div>
                  <div>OFF</div>
                </div>

                <div className="featureCard__content">
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
