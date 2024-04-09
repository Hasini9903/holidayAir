import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BannerFive() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row y-gap-30">
          <div className="col-md-6">
            <div className="featureCard -type-3">
              <div className="featureCard__image">
                <Image
                  src="/img/cta/5/1.jpg"
                  width={630}
                  height={401}
                  alt="image"
                />
              </div>

              <div className="featureCard__content">
                <div
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="text-white"
                >
                  Enjoy these cool staycation promotions in Singapore
                </div>
                <h4
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="text-30 text-white fw-700 lg:mt-10"
                >
                  Best staycation
                  <br /> deals
                </h4>

                <button
                  data-aos="fade-right"
                  data-aos-delay=""
                  className="button -md -accent-1 bg-white"
                >
                  <Link href={"/tour-list-1"}>
                    See activities
                    <i className="icon-arrow-top-right ml-10"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="featureCard -type-3">
              <div className="featureCard__image">
                <Image
                  width={630}
                  height={401}
                  src="/img/cta/5/2.jpg"
                  alt="image"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="featureCard__content"
              >
                <div className="text-white">
                  Don&#39;t forget to check out these activities while
                  you&#39;re here
                </div>
                <h4
                  data-aos="fade-up"
                  data-aos-delay=""
                  className="text-30 text-white fw-700 lg:mt-10"
                >
                  All Time Favourite
                  <br /> Activities in Dubai
                </h4>

                <button
                  data-aos="fade-left"
                  data-aos-delay=""
                  className="button -md -accent-1 bg-white"
                >
                  <Link href={"/tour-list-1"}>
                    See activities
                    <i className="icon-arrow-top-right ml-10"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
