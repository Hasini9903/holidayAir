import { featuresThree } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features7() {
  return (
    <section className="relative layout-pt-xl layout-pb-xl">
      <div className="sectionBg -mx-30 bg-accent-1-05 rounded-24"></div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24 fw-700"
            >
              Our Footprints
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row pt-40 md:pt-30"
        >
          {featuresThree.map((elm, i) => (
            <div key={i} className="col-lg-3 col-6">
              <div className="text-center py-50 md:py-20 rounded-24 -hover-bg-white">
                <Image width="60" height="61" src={elm.icon} alt="icon" />

                <h3 className="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
                  {elm.value}
                </h3>
                <p className="lh-15">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
