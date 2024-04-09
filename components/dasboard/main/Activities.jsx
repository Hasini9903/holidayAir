import { notificationData } from "@/data/dashboard";
import React from "react";

export default function Activities() {
  return (
    <div className="row y-gap-30 pt-30">
      {notificationData.map((elm, i) => (
        <div key={i} className="col-12">
          <div className="d-flex items-center">
            <div className="flex-center size-40 bg-accent-1-05 rounded-full">
              <i className={`${elm.icon} text-16`}></i>
            </div>

            <div className="lh-14 ml-10">{elm.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
