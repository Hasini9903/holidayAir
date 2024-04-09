import { tagData } from "@/data/destinations";
import React from "react";

export default function TourTypes() {
  return (
    <div className="pl-tag__grid mobile-css-slider-2">
      {tagData.map((elm, i) => (
        <div key={i} className="">
          <a href="#" className="pl-tag">
            <div className="pl-tag__icon">
              <i className={`${elm.icon} text-24 text-accent-1`}></i>
            </div>

            <div className="pl-tag__title text-dark-1">{elm.title}</div>
          </a>
        </div>
      ))}
    </div>
  );
}
