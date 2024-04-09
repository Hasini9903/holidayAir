import { destinationsFive } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PopulerDestinations() {
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

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="grid -type-3 pt-40 sm:pt-20"
        >
          {destinationsFive.map((elm, i) => (
            <Link
              key={i}
              href="/destinations"
              className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale"
            >
              <div className="featureCard__image -hover-image-scale__image">
                <Image
                  width={780}
                  height={780}
                  style={{ objectFit: "cover" }}
                  src={elm.imgSrc}
                  alt="image"
                />
              </div>

              <div className="featureCard__content">
                <h4 className="text-white">{elm.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
