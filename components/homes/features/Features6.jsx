import { featuresFour } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features6() {
  return (
    <section className="relative">
      <div className="sectionBg -type-1">
        <div className="bg-accent-1-05 rounded-24"></div>
        <Image
          width={717}
          height={700}
          src="/img/about/3/1.jpg"
          alt="image"
          className="rounded-24"
        />
      </div>

      <div className="container">
        <div className="aboutSection -type-1">
          <div className="row">
            <div className="col-xl offset-xl-5 col-lg-7 offset-lg-5">
              <div className="aboutSection__text">
                <h2
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="text-30 md:text-24 fw-700"
                >
                  Why choose Tourz
                </h2>
                <p data-aos="fade-up" data-aos-delay="">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl offset-xl-2 col-lg-7 offset-lg-5">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="row y-gap-30"
              >
                {featuresFour.map((elm, i) => (
                  <div key={i} className="col-xl-4 col-lg-6 col-sm-6">
                    <div className="featureIcon -type-1 px-40 py-40 rounded-24 bg-white shadow-1">
                      <div className="featureIcon__icon">
                        <Image
                          width="60"
                          height="60"
                          src={elm.iconSrc}
                          alt="icon"
                        />
                      </div>

                      <h3 className="featureIcon__title text-18 fw-500 mt-30">
                        {elm.title}
                      </h3>
                      <p className="featureIcon__text mt-10">{elm.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
