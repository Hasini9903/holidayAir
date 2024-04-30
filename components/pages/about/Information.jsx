import React from "react";

export default function Information() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between">
          <div className="col-lg-6">
            <h2 className="text-30 fw-700">
            We are known for our quality and service. We make the most of all our customers.
            </h2>
          </div>

          <div className="col-lg-5">
            <p>
            Holiday Air Travel is a leading travel agency operating a lean and an efficient business, which has allowed us to retain a competitive advantage for the benefit of our customers.  We take great pride and care to ensure that all our customers are fully satisfied with their experiences. Indeed, our growth is driven by repeat customers and their recommendations.
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
