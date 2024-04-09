import { featuresSeven } from "@/data/features";
import { testimonialsSix } from "@/data/testimonials";
import Image from "next/image";
import React from "react";

export default function TestimonialsSix() {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              What our Travelers are saying
            </h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 md:pt-30">
          {testimonialsSix.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="bg-white py-30 px-30 rounded-12">
                <h4 className="text-18 fw-500 text-accent-1">{elm.comment}</h4>
                <div className="fw-500 mt-15">“{elm.desc}”</div>

                <div className="line mt-20 mb-20"></div>

                <div className="d-flex items-center">
                  <Image
                    width={105}
                    height={106}
                    src={elm.img}
                    alt="image"
                    className="size-60 object-cover rounded-full"
                  />

                  <div className="ml-20">
                    <div className="fw-500 lh-15">{elm.name}</div>
                    <div className="text-14 lh-15">{elm.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 pt-40 md:pt-30"
        >
          {featuresSeven.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <h4 className="text-30 fw-700">{elm.value}</h4>
              <div className="mt-5">{elm.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
