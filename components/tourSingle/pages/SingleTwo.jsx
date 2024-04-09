import React from "react";
import TourSingleSidebar from "../TourSingleSidebar";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import CommentBox from "../CommentBox";
import Map from "@/components/tours/Map";
import DateCalender from "../DateCalender";
import RoadMap from "../RoadMap";
import Overview from "../Overview";
import Included from "../Included";
import OthersInformation from "../OthersInformation";
import MainInformation from "../MainInformation";
import Gallery2 from "../Galleries/Gallery2";

export default function SingleTwo({ tour }) {
  return (
    <>
      <Gallery2 />
      <section className="pt-30">
        <div className="container">
          <MainInformation tour={tour} />
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

              <div className="mt-30">
                <RoadMap />
              </div>

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
