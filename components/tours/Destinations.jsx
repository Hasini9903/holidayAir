import { destinations12 } from "@/data/destinations";
import Image from "next/image";
import React from "react";

export default function Destinations() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-30 mobile-css-slider-2">
          {destinations12.map((elm, i) => (
            <div key={i} className="col-lg-2 col-md-3 col-6">
              <a href="#" className="-hover-opacity">
                <div className="ratio ratio-19:22">
                  <Image
                    width={284}
                    height={326}
                    src={elm.imgSrc}
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>

                <div className="mt-20">
                  <h4 className="text-18 fw-500 lh-11">{elm.name}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
