import React from "react";

export default function MessageBoxes() {
  return (
    <div className="col-lg-6">
      <div className="text-22 fw-500">Message Boxes</div>

      <div className="row y-gap-20 pt-30">
        <div className="col-12">
          <div className="d-flex items-center justify-between bg-info-1 pl-30 pr-20 py-30 rounded-8">
            <div className="text-info-2 lh-1 fw-500">
              Info: User pending action
            </div>
            <div className="text-info-2 text-14 icon-close"></div>
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex items-center justify-between bg-warning-1 pl-30 pr-20 py-30 rounded-8">
            <div className="text-warning-2 lh-1 fw-500">
              Info: User pending action
            </div>
            <div className="text-warning-2 text-14 icon-close"></div>
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex items-center justify-between bg-error-1 pl-30 pr-20 py-30 rounded-8">
            <div className="text-error-2 lh-1 fw-500">
              Info: User pending action
            </div>
            <div className="text-error-2 text-14 icon-close"></div>
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex items-center justify-between bg-success-1 pl-30 pr-20 py-30 rounded-8">
            <div className="text-success-2 lh-1 fw-500">
              Info: User pending action
            </div>
            <div className="text-success-2 text-14 icon-close"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
