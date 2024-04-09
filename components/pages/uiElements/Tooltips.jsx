import React from "react";

export default function Tooltips() {
  return (
    <>
      <div className="text-22 fw-500 mb-10">Tooltips</div>

      <div className="row x-gap-10 y-gap-10">
        <div className="col-auto">
          <div className="tooltip -top px-30 py-10 bg-light-1 rounded-12">
            Top
            <div className="tooltip__content">Top</div>
          </div>
        </div>

        <div className="col-auto">
          <div className="tooltip -bottom px-30 py-10 bg-light-1 rounded-12 ml-10">
            Bottom
            <div className="tooltip__content">Bottom</div>
          </div>
        </div>

        <div className="col-auto">
          <div className="tooltip -left px-30 py-10 bg-light-1 rounded-12 ml-10">
            Left
            <div className="tooltip__content">Left</div>
          </div>
        </div>

        <div className="col-auto">
          <div className="tooltip -right px-30 py-10 bg-light-1 rounded-12 ml-10">
            Right
            <div className="tooltip__content">Right</div>
          </div>
        </div>
      </div>
    </>
  );
}
