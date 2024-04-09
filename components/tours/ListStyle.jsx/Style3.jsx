import Stars from "@/components/common/Stars";
import { tourData } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Style3() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">List Style v3</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">
          {tourData.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <Link
                href={`/tour-single-1/${elm.id}`}
                className="tourCard -type-3 -hover-image-scale"
              >
                <div className="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image">
                  <Image
                    width={421}
                    height={301}
                    src={elm.imageSrc}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>

                <div className="tourCard__wrap">
                  <div className="tourCard__header d-flex justify-between items-center text-13 text-white">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>
                      {elm.duration}
                    </div>

                    <button className="tourCard__favorite">
                      <i className="icon-heart"></i>
                    </button>
                  </div>

                  <div className="tourCard__content">
                    <div>
                      <div className="tourCard__location d-flex items-center text-13 text-white">
                        <i className="icon-pin d-flex text-16 text-white mr-5"></i>
                        {elm.location}
                      </div>

                      <h3 className="tourCard__title text-18 text-white fw-500 mt-5">
                        <span>{elm.title}</span>
                      </h3>

                      <div className="tourCard__rating d-flex items-center text-13 mt-5">
                        <div className="d-flex items-center x-gap-5">
                          <Stars star={elm.rating} font={12} />
                        </div>

                        <span className="text-white ml-10">
                          {elm.rating} ({elm.ratingCount})
                        </span>
                      </div>
                    </div>

                    <div className="text-right text-white">
                      <div className="text-13 lh-14">From</div>
                      <div className="text-18 fw-500">${elm.price}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
