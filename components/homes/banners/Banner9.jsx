import Image from "next/image";
import React from "react";

export default function Banner9() {
  return (
    <section className="cta -type-1">
      <div className="cta__bg">
        <Image width={1530} height={501} src="/img/cta/8/1.jpg" alt="image" />
      </div>

      <div className="container py-20">
        <div className="row justify-between">
          <div className="col-xl-5 col-lg-6">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-24 lh-13 text-white"
              >
                Subscribe To Our Mailing
                <br className="lg:d-none" />
                List And Stay Up To Date
              </h2>

              <p
                data-aos="fade-left"
                data-aos-delay=""
                className="mt-10 text-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div
                data-aos="fade-right"
                data-aos-delay=""
                className="singleInput type-1 mt-30"
              >
                <input type="text" placeholder="Your email" />
                <button className="button -md -dark-1 bg-accent-2 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
