"use client";
import React from "react";

export default function BrandsFour() {
  return (
    <section className="layout-pt-sm layout-pb-sm">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="d-flex flex-wrap justify-content-center align-items-center ">
            <div className="col-lg-2 col-md-3 col-sm-6 ">
              <div className="shadow-1 -hover-shadow tourCard p-3 m-2 mobile-width" style={{ height: "130px", fontSize: "11px" }}>
                <img src="/img/tourCards/1/24-hours-support.png" alt="Image description" className="my-2" style={{ height: "50px", width: "50px" }} /> <br />
                <span className="text-gray">Book Online 24/7</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
              <div className="shadow-1 -hover-shadow tourCard p-3 m-2 mobile-width" style={{ height: "130px", fontSize: "11px" ,lineHeight: "normal",}}>
                <img src="/img/tourCards/1/credit-card.png" alt="Image description" className="my-2" style={{ height: "50px", width: "50px" }} /> <br />
                <span>No fee on credit & debit card transactions</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="shadow-1 -hover-shadow tourCard p-3 m-2 mobile-width" style={{ height: "130px", fontSize: "11px" ,lineHeight: "normal",}}>
                <img src="/img/tourCards/1/destination (1).png" alt="Image description" className="my-2" style={{ height: "50px", width: "50px" }} /> <br />
                <span>Exclusive deals for hundreds of destinations</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="shadow-1 -hover-shadow tourCard p-3 m-2 mobile-width" style={{ height: "130px", fontSize: "11px" }}>
                <img src="/img/tourCards/1/best-price.png" alt="Image description" className="my-2" style={{ height: "50px", width: "50px" }} /> <br />
                <span>Right Pricing </span>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="shadow-1 -hover-shadow tourCard p-3 m-2 mobile-width" style={{ height: "130px", fontSize: "11px" }}>
                <img src="/img/tourCards/1/atol_logo.png" alt="Image description" className="my-2" style={{ height: "50px", width: "50px" }} /> <br />
                <span>ATOL Protected</span>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
              <div className="shadow-1 -hover-shadow tourCard p-3 m-2 mobile-width" style={{ height: "130px", fontSize: "11px" }}>
                <img src="/img/tourCards/1/wallet.png" alt="Image description" className="my-2" style={{ height: "50px", width: "50px" }} /> <br />
                <span>Most Economical</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
