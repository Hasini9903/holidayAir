import { destinationsFour } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DestinationsThree() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" className="text-30">
              Popular things to do
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

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {destinationsFour.map((elm, i) => (
            <div key={i} className="col-lg-2 col-md-3 col-6">
              <Link
                href="/tour-list-1"
                className="featureCard -type-2 -hover-image-scale"
              >
                <div className="featureCard__image ratio ratio-19:22 -hover-image-scale__image rounded-12">
                  <Image
                    width={284}
                    height={327}
                    src={elm.image}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>

                <div className="featureCard__content text-center">
                  <h4 className="text-white text-18">{elm.title}</h4>
                  <div className="text-14 text-white">{elm.count}+ Tours</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
