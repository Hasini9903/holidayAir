import RangeSlider from "@/components/common/RangeSlider";
import React from "react";

export default function Range() {
  return (
    <>
      <div className="text-22 fw-500 mb-30 mt-60">Range Slider</div>

      <div className="col-lg-8">
        <div className="js-price-rangeSlider">
          <div className="px-5">
            <RangeSlider />
          </div>
        </div>
      </div>
    </>
  );
}
