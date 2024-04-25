"use client";
import React from "react";
import { locations } from "@/data/searchDDLocations";
export default function Location({ active, setLocation }) {
  return (
    <div
      className={`searchFormItemDropdown -location ${
        active ? "is-active" : ""
      } `}
      data-x="location"
      data-x-toggle="is-active"
    >
      <div className="searchFormItemDropdown__container">
        <div className="searchFormItemDropdown__list sroll-bar-1">
          {locations.map((elm, i) => (
            <div
              onClick={() =>
                setLocation((pre) => (pre == elm.choice ? "" : elm.choice))
              }
              key={i}
              className="searchFormItemDropdown__item"
            >
              <button className="js-select-control-button">
                <span className="js-select-control-choice">{elm.choice}</span>
                <span>{elm.type}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
