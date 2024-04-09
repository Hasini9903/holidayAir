import Image from "next/image";
import React from "react";

export default function Banner13() {
  return (
    <section className="cta -type-4 -style-2">
      <div className="container">
        <div className="cta__content">
          <div className="row justify-between">
            <div className="col-xl-7 col-lg-8">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-24 lh-13"
              >
                Keep on Planning
              </h2>

              <p data-aos="fade-up" data-aos-delay="" className="mt-10">
                What to do, where to eat & more trip inspo.
              </p>

              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -accent-1 bg-dark-1 text-white mt-10"
              >
                See More
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="cta__image">
              <Image
                src="/img/cta/12/1.jpg"
                width={750}
                height={375}
                alt="image"
              />
              <Image
                src="/img/cta/12/shape.svg"
                width="22"
                height="254"
                style={{ height: "100%", width: "auto" }}
                alt="image"
              />
              <Image
                src="/img/cta/12/mobileShape.svg"
                width="254"
                height="22"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
