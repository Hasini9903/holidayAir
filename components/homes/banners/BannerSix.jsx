import Image from "next/image";
import React from "react";

export default function BannerSix() {
  return (
    <section className="layout-pt-xl layout-pb-xl relative">
      <div className="sectionBg">
        <Image
          width={1920}
          height={501}
          src="/img/cta/4/1.png"
          alt="image"
          className="img-cover"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 text-white fw-700"
            >
              Subscribe To Our Mailing List
              <br className="md:d-none" /> And Stay Up To Date
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay=""
              className="text-white mt-30"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="singleInput type-1 mt-30">
              <input type="text" placeholder="Your email" />
              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
