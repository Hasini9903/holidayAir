"use client";

import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";

export default function Faq() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(0);
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-30 md:text-24">Frequently Asked Questions</h2>
          </div>
        </div>

        <div className="row justify-center pt-40">
          <div className="col-xl-8 col-lg-10">
            <div className="accordion -simple row y-gap-20 js-accordion">
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
                      <div className="button text-16 text-dark-1">
                        {elm.question}
                      </div>

                      <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div
                      className="accordion__content"
                      style={
                        currentActiveFaq == i ? { maxHeight: "150px" } : {}
                      }
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
        </div>
      </div>
    </section>
  );
}
