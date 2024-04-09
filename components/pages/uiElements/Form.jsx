import React from "react";
import ProgressBar from "./ProgressBar";
import Range from "./RangeSlider";
import Tooltips from "./Tooltips";
import SelectWithSearch from "./SelectWithSearch";
import MultipleSelectBox from "./MultipleSelectBox";

export default function Form() {
  return (
    <section className="contactForm layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-22 fw-500">Form</div>
          </div>
        </div>

        <div className="row x-gap-60 y-gap-30 pt-30">
          <div className="col-lg-6">
            <div className="fw-500 mb-10">Input</div>

            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Your Name</label>
            </div>

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10 mt-40">
              Search Select boxes, Hover
            </label>
            <SelectWithSearch />
          </div>

          <div className="col-lg-6">
            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
              Select boxes
            </label>
            <SelectWithSearch />

            <label className="text-16 lh-1 fw-500 text-dark-1 mb-10 mt-40">
              Multiple Select Boxes, Hover
            </label>
            <MultipleSelectBox />
          </div>

          <div className="col-lg-6">
            <div className="fw-500 mb-10">Textarea</div>

            <div className="form-input ">
              <textarea required rows="4"></textarea>
              <label className="lh-1 text-16 text-light-1">
                Write Your Comment
              </label>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-4">
                <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
                  Radiobox
                </div>
                <div className="row y-gap-15">
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="text-14 lh-1 ml-10">items</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="text-14 lh-1 ml-10">items</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="text-14 lh-1 ml-10">items</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" name="name" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="text-14 lh-1 ml-10">items</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
                  Checkbox
                </div>

                <div className="d-flex items-center">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-14 lh-12 ml-10">Items</div>
                </div>

                <div className="d-flex mt-15">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-14 lh-12 ml-10">Items</div>
                </div>

                <div className="d-flex mt-15">
                  <div className="form-checkbox ">
                    <input type="checkbox" name="name" />
                    <div className="form-checkbox__mark">
                      <div className="form-checkbox__icon">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-14 lh-12 ml-10">Items</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-16 lh-12 text-dark-1 fw-500 mb-30">
                  Switch
                </div>

                <div className="form-switch d-flex items-center">
                  <div className="switch">
                    <input type="checkbox" />
                    <span className="switch__slider"></span>
                  </div>
                  <div className="text-13 lh-1 text-dark-1 ml-10">Items</div>
                </div>

                <div className="form-switch d-flex items-center mt-20">
                  <div className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="switch__slider"></span>
                  </div>
                  <div className="text-13 lh-1 text-dark-1 ml-10">Items</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row y-gap-30 justify-between mt-50">
          <div className="col-lg-6">
            <Tooltips />

            <Range />
          </div>

          <ProgressBar />
        </div>
      </div>
    </section>
  );
}
