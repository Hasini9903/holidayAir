import { progressBar } from "@/data/uiElements";
import React from "react";

export default function ProgressBar() {
  return (
    <div className="col-lg-6">
      <div className="text-18 lh-1 text-dark-1 fw-500 mb-40">Progress bars</div>

      {progressBar.map((elm, i) => (
        <div key={i} className="progressBar">
          <div className="mt-30">
            <div className="progressBar__bg bg-border"></div>
            <div
              className="progressBar__bar bg-accent-1"
              style={{ width: `${elm}%` }}
            >
              <span>{elm}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
