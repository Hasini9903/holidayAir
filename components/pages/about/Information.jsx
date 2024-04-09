import React from "react";

export default function Information() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <h2 className="text-30 fw-700">
              Hello. Our agency has been present for over 29 years in the
              market. We make the most of all our customers.
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
