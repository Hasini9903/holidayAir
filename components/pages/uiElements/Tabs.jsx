"use client";

import { tab1, tab2, tabContent } from "@/data/uiElements";
import React, { useState } from "react";

export default function Tabs() {
  const [activeTabOne, setActiveTabOne] = useState(0);
  const [activeTabTwo, setActiveTabTwo] = useState(0);
  return (
    <div className="col-lg-6">
      <div className="text-22 fw-500">Tabs</div>

      <div className="tabs -pills-3 pt-30 js-tabs">
        <div className="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls">
          {tab1.map((elm, i) => (
            <div
              className="col-auto"
              key={i}
              onClick={() => setActiveTabOne(i)}
            >
              <button
                className={`tabs__button fw-500 rounded-200 js-tabs-button  ${
                  i == activeTabOne ? "is-tab-el-active" : ""
                } `}
              >
                Art and culture
              </button>
            </div>
          ))}
        </div>

        <div className="tabs__content pt-15 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <p>
              {tabContent[activeTabOne].map((elm, i) => (
                <span key={i}>
                  {elm}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="tabs -underline-2 pt-60 lg:pt-40 sm:pt-30 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tab2.map((elm, i) => (
            <div
              className="col-auto"
              key={i}
              onClick={() => setActiveTabTwo(i)}
            >
              <button
                className={`tabs__button fw-500 px-5 pb-5 lg:pb-0 js-tabs-button ${
                  activeTabTwo == i ? "is-tab-el-active" : ""
                }`}
              >
                {elm}
              </button>
            </div>
          ))}
        </div>

        <div className="tabs__content pt-20 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <p>
              {tabContent[activeTabTwo].map((elm, i) => (
                <span key={i}>
                  {elm}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
