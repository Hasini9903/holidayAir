import Stars from "@/components/common/Stars";
import { tourDataTwo } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Style6() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">List Style v6</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {tourDataTwo.slice(0, 2).map((elm, i) => (
            <div key={i} className="col-md-9">
              <div className="tourCard -type-2">
                <div className="tourCard__image">
                  <Image
                    width={420}
                    height={390}
                    src={elm.imageSrc}
                    alt="image"
                  />

                  {elm.badgeText && (
                    <div className="tourCard__badge">
                      <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
                        {elm.badgeText}
                      </div>
                    </div>
                  )}

                  <div className="tourCard__favorite">
                    <button className="button -accent-1 size-35 bg-white rounded-full flex-center">
                      <i className="icon-heart text-15"></i>
                    </button>
                  </div>
                </div>

                <div className="tourCard__content">
                  <div className="tourCard__location">
                    <i className="icon-pin"></i>
                    {elm.location}
                  </div>

                  <h3 className="tourCard__title mt-5">
                    <span>{elm.title}</span>
                  </h3>

                  <div className="d-flex items-center mt-5">
                    <div className="d-flex items-center x-gap-5">
                      <Stars star={elm.rating} font={12} />
                    </div>

                    <div className="text-14 ml-10">
                      <span className="fw-500">{elm.rating}</span> (
                      {elm.ratingCount})
                    </div>
                  </div>

                  <p className="tourCard__text mt-5">{elm.description}</p>

                  <div className="row x-gap-20 y-gap-5 pt-30">
                    {elm.features.map((elm2, i2) => (
                      <div key={i2} className="col-auto">
                        <div className="text-14 text-accent-1">
                          <i className={`${elm2.icon} mr-10`}></i>
                          {elm2.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tourCard__info">
                  <div>
                    <div className="d-flex items-center text-14">
                      <i className="icon-clock mr-10"></i>
                      {elm.duration}
                    </div>

                    <div className="tourCard__price">
                      <div>${elm.fromPrice}</div>

                      <div className="d-flex items-center">
                        From{" "}
                        <span className="text-20 fw-500 ml-5">
                          ${elm.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="button -outline-accent-1 text-accent-1">
                    <Link href={`/tour-single-1/${elm.id}`}>
                      View Details
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
