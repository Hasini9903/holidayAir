import { destinations11 } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Destinations8() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Trending destinations
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
          {destinations11.map((elm, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
              <Link href="/tour-list-1" className="featureCard -type-9">
                <div className="featureCard__image">
                  <Image
                    width={165}
                    height={165}
                    src={elm.imageSrc}
                    alt="image"
                  />
                </div>

                <div className="featureCard__content ml-20">
                  <h4 className="text-18 fw-500">{elm.name}</h4>
                  <div className="text-14 lh-13 mt-5">
                    {elm.toursCount}+ Tours
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
