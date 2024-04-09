import Link from "next/link";
import React from "react";

export default function BannerTwo() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="bg-accent-1 py-50 px-50 rounded-12">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-20 fw-500 text-white"
              >
                Early Booking Discounts Up To 50%!
              </h2>
            </div>

            <div className="col-auto">
              <button
                data-aos="fade-right"
                data-aos-delay=""
                className="button -md -dark-1 bg-white text-accent-1"
              >
                <Link href="/tour-list-1">
                  Book Now
                  <i className="icon-arrow-top-right ml-10 "></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
