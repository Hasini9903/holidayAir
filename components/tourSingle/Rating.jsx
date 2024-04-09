import { overallRatingData } from "@/data/tourSingleContent";
import React from "react";

export default function Rating() {
  return (
    <div className="overallRating">
      <div className="overallRating__list">
        {overallRatingData.map((elm, i) => (
          <div key={i} className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className={`${elm.icon} text-30 text-accent-1`}></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">{elm.category}</h5>
                <div className="lh-15">{elm.comment}</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">{elm.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
