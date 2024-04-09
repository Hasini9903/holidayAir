"use client";

import { useState } from "react";

export default function LinksList() {
  const [currentTab, setCurrentTab] = useState("Popular Cities");

  const cities = [
    {
      type: "Popular Cities",
      list: [
        ["Nashville", "Chicago", "Houston", "San Diego", "Atlanta", "Denver"],
        [
          "Las Vegas",
          "Miami",
          "Orlando",
          "Dallas",
          "New Orleans",
          "San Antonio",
        ],
        [
          "San Francisco",
          "Seattle",
          "Austin",
          "Boston",
          "Colorado Springs",
          "Los Angeles",
        ],
        [
          "Myrtle Beach",
          "Philadelphia",
          "Charleston",
          "Colorado",
          "Phoenix",
          "Pigeon Forge",
        ],
      ],
    },
    {
      type: "Popular Attractions",
      list: [
        ["Nashville", "Chicago", "Houston", "San Diego", "Atlanta", "Denver"],
        [
          "Las Vegas",
          "Miami",
          "Orlando",
          "Dallas",
          "New Orleans",
          "San Antonio",
        ],
        [
          "San Francisco",
          "Seattle",
          "Austin",
          "Boston",
          "Colorado Springs",
          "Los Angeles",
        ],
        [
          "Myrtle Beach",
          "Philadelphia",
          "Charleston",
          "Colorado",
          "Phoenix",
          "Pigeon Forge",
        ],
      ].reverse(),
    },
  ];

  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="tabs -underline-2 js-tabs">
          <div className="row">
            <div className="col-auto">
              <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
                {cities.map((elm, i) => (
                  <div
                    key={i}
                    className="col-auto"
                    onClick={() => setCurrentTab(elm.type)}
                  >
                    <button
                      className={`tabs__button text-30 md:text-20 lh-12 fw-700 pb-15 lg:pb-0 js-tabs-button ${
                        currentTab == elm.type ? "is-tab-el-active" : ""
                      }`}
                    >
                      {elm.type}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tabs__content pt-40 sm:pt-20 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-tab-el-active">
              <div className="row y-gap-30">
                {cities
                  .filter((elm) => elm.type == currentTab)[0]
                  .list.map((elm, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                      <div className="y-gap-5">
                        {elm.map((elm2, i2) => (
                          <a key={i2} href="#" className="d-block">
                            Things to do in {elm2}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
