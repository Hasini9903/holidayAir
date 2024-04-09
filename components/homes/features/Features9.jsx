import { featureCards } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features9() {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row y-gap-30 items-center justify-between">
          <div className="col-xl-4 col-lg-5">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Popular things to do
            </h2>

            <p data-aos="fade-up" data-aos-delay="" className="mt-30 md:mt-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>

            <Link
              href={"/tour-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="button -md -dark-1 bg-accent-1 text-white mt-30 md:mt-20"
            >
              See All
              <i className="icon-arrow-top-right ml-10"></i>
            </Link>
          </div>

          <div className="col-xl-6 col-lg-7">
            <div data-aos="fade-up" data-aos-delay="" className="row y-gap-30">
              {featureCards.map((elm, i) => (
                <div key={i} className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <Image
                        width="40"
                        height="41"
                        src={elm.imgSrc}
                        alt="image"
                      />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">{elm.title}</h4>
                    <div className="lh-13 mt-5">{elm.tourCount}+ Tours</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
