"use client";

import { ddoptions } from "@/data/uiElements";
import React, { useState } from "react";

export default function MultipleSelectBox() {
  const [selected, setSelected] = useState([]);
  const [isActiveDD, setIsActiveDD] = useState(false);
  return (
    <div className="select js-multiple-select">
      <button className="select__button js-button">
        <span
          onClick={() => setIsActiveDD((pre) => !pre)}
          className="js-button-title"
        >
          {selected.length ? <>{selected.join(", ")}</> : "Default"}
        </span>
        <i className="select__icon" data-feather="chevron-down"></i>
      </button>

      <div
        className={`select__dropdown js-dropdown js-form-dd ${
          isActiveDD ? "-is-visible" : ""
        } `}
      >
        <div className="select__options js-options">
          {ddoptions.map((elm, i) => (
            <div
              onClick={() =>
                setSelected((pre) =>
                  pre.includes(elm.label)
                    ? [...pre.filter((el) => el != elm.label)]
                    : [...pre, elm.label],
                )
              }
              key={i}
              className="select__options__button"
            >
              <div className="form-checkbox pointer-events-none">
                <input
                  readOnly
                  checked={selected.includes(elm.label)}
                  type="checkbox"
                />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check text-white"></div>
                </div>
              </div>

              <span className="ml-10 js-target-title">{elm.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
