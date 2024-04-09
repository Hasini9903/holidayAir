import Image from "next/image";
import React from "react";

export default function BannerSeven() {
  return (
    <section className="cta -type-3">
      <div className="cta__bg">
        <Image src="/img/cta/6/bg.jpg" width={1920} height={500} alt="image" />
      </div>

      <div className="container">
        <div className="row justify-between">
          <div className="col-xl-5 col-lg-6">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 md:text-24 lh-13 text-white"
              >
                Get 5% off your 1st
                <br className="lg:d-none" />
                app booking
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay=""
                className="mt-10 text-white"
              >
                Booking's better on the app. Use promo code
                <br className="lg:d-none" />
                "TourBooking" to save!
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay=""
                className="text-18 text-white mt-40 md:mt-20"
              >
                Get a magic link sent to your email
              </div>

              <div data-aos="fade-up" data-aos-delay="" className="mt-10">
                <div className="singleInput -type-2 row x-gap-10 y-gap-10">
                  <div className="col-md-auto col-12">
                    <input type="email" placeholder="Email" className="" />
                  </div>
                  <div className="col-md-auto col-12">
                    <button className="button -md -dark-1 bg-white col-12 text-accent-2">
                      Send
                      <i className="icon-arrow-top-right ml-10 text-16"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="" className="cta__image">
              <Image
                width={667}
                height={500}
                src="/img/cta/1/1.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
