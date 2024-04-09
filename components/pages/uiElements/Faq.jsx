"use client";

import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";

export default function Faq() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <div className="col-lg-6">
      <div className="text-22 fw-500">Accordions</div>

      <div className="accordion -simple row y-gap-20 pt-30 js-accordion">
        {faqData.map((elm, i) => (
          <div key={i} className="col-12">
            <div
              className={`accordion__item px-20 py-15 border-1 rounded-12 ${
                currentActiveFaq == i ? "is-active" : ""
              } `}
            >
              <div
                className="accordion__button d-flex items-center justify-between"
                onClick={() =>
                  setCurrentActiveFaq((pre) => (pre == i ? -1 : i))
                }
              >
                <div className="button text-16 text-dark-1">{elm.question}</div>

                <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                  <i className="icon-plus"></i>
                  <i className="icon-minus"></i>
                </div>
              </div>

              <div
                className="accordion__content"
                style={currentActiveFaq == i ? { maxHeight: "150px" } : {}}
              >
                <div className="pt-20">
                  <p>{elm.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
