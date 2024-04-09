import React from "react";
import MainInformation from "../MainInformation";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import Map from "@/components/tours/Map";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import TourSingleSidebar from "../TourSingleSidebar";
import Gallery1 from "../Galleries/Gallery1";
import DateCalender from "../DateCalender";
import RoadMap2 from "../Roadmap2";
import CommentBox from "../CommentBox";

export default function SingleOne({ tour }) {
  return (
    <>
      <section className="">
        <div className="container">
          <MainInformation tour={tour} />
          <Gallery1 />
        </div>
      </section>

      <section className="layout-pt-md js-pin-container">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <div className="row y-gap-20 justify-between items-center layout-pb-md">
                <OthersInformation />
              </div>

              <Overview />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">What's included</h2>

              <Included />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">Itinerary</h2>

              <RoadMap2 />

              <h2 className="text-30 mt-60 mb-30">Tour Map</h2>
              <div className="mapTourSingle">
                <Map />
              </div>

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">Availability Calendar</h2>
              <DateCalender />

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">FAQ</h2>

              <div className="accordion -simple row y-gap-20 mt-30 js-accordion">
                <Faq />
              </div>

              <div className="line mt-60 mb-60"></div>

              <h2 className="text-30">Customer Reviews</h2>

              <div className="mt-30">
                <Rating />
              </div>

              <Reviews />

              <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                See more reviews
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>
              <CommentBox />
            </div>

            <div className="col-lg-4">
              <div className="d-flex justify-end js-pin-content">
                <TourSingleSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
