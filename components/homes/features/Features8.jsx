import { featuresSix } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features8() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div data-aos="fade-up" data-aos-delay="" className="row y-gap-30">
          {featuresSix.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="featureCard -type-3 -style-2">
                <div className="featureCard__image">
                  <Image
                    width={630}
                    height={401}
                    src={elm.imageSrc}
                    alt="image"
                  />
                </div>

                <div className="featureCard__content">
                  <div className="text-white">{elm.description}</div>
                  <h4 className="text-24 text-white fw-700 mt-5">
                    {elm.title.split(" ").slice(0, 2).join(" ")}
                    <br /> {elm.title.split(" ").slice(2).join(" ")}
                  </h4>

                  <button className="button -md -accent-1 bg-white">
                    <Link href={"/tour-list-1"}>
                      See activities
                      <i className="icon-arrow-top-right ml-10"></i>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
