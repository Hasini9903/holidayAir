import { states } from "@/data/dashboard";
import React from "react";

export default function States() {
  return (
    <div className="row y-gap-30 pt-60 md:pt-30">
      {states.map((elm, i) => (
        <div key={i} className="col-xl-3 col-sm-6">
          <div className="rounded-12 bg-white shadow-2 px-30 py-30 h-full">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div>{elm.title}</div>
                <div className="text-30 fw-700">{elm.amount}</div>

                <div>
                  <span className="text-accent-1">{elm.today}</span> Today
                </div>
              </div>

              <div className="col-auto">
                <div className="size-80 flex-center bg-accent-1-05 rounded-full">
                  <i className={`text-30 ${elm.iconClass}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
