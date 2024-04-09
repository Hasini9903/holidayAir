import React from "react";

export default function Buttons() {
  return (
    <div className="col-12">
      <div className="text-22 fw-500">Buttons</div>

      <div className="row x-gap-30 y-gap-20 pt-20">
        <div className="col-auto">
          <button className="button -md -accent-1-dark bg-accent-1 text-white">
            Button 1<i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>

        <div className="col-auto">
          <button className="button -md -accent-1 bg-accent-1-dark text-white">
            Button 1 Hover
            <i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>

        <div className="col-auto">
          <button className="button -md -outline-accent-1 text-accent-1">
            Button 2<i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>

        <div className="col-auto">
          <button className="button -md -dark-1 bg-accent-1 text-white">
            Button 2 Hover
            <i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>

        <div className="col-auto">
          <button className="button -md -outline-accent-1 bg-accent-1-05 text-accent-1">
            Button 3<i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>

        <div className="col-auto">
          <button className="button -md -dark-1 bg-accent-1 text-white">
            Button 3 Hover
            <i className="icon-arrow-top-right text-16 ml-10"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
