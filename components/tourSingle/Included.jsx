import { excluded, included } from "@/data/tourSingleContent";
import React from "react";

export default function Included() {
  return (
    <div className="row x-gap-130 y-gap-20 pt-20">
      <div className="col-lg-6">
        <div className="y-gap-15">
          {included.map((elm, i) => (
            <div key={i} className="d-flex">
              <i className="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
              {elm.text}
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-6">
        <div className="y-gap-15">
          {excluded.map((elm, i) => (
            <div key={i} className="d-flex">
              <i className="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
              {elm.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
