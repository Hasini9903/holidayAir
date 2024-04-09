import Image from "next/image";
import React from "react";

export default function BannerFour() {
  return (
    <section className="layout-pt-xxl layout-pb-xxl relative">
      <div className="sectionBg">
        <Image
          src="/img/cta/3/1.png"
          width={1920}
          height={700}
          alt="image"
          className="img-ratio"
        />
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-70 md:text-40 sm:text-30 text-white fw-700"
            >
              Keep things flexible
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay=""
              className="text-white mt-20"
            >
              Use Reserve Now & Pay Later to secure the activities you
              <br className="md:d-none" /> don't want to miss without being
              locked in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
