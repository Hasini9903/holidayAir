import React from "react";
import TourSingleSidebar from "../TourSingleSidebar";
import CommentBox from "../CommentBox";
import Reviews from "../Reviews";
import Rating from "../Rating";
import Faq from "../Faq";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import MainInformation2 from "./MainInformation2";
import Gallery3 from "../Galleries/Gallery3";
import DateCalender from "../DateCalender";
import Map from "@/components/tours/Map";

export default function SingleThree({ tour }) {
  return (
    <section className="pt-30 js-pin-container">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-lg-8">
            <MainInformation2 tour={tour} />

            <Gallery3 />

            <div className="row y-gap-20 justify-between items-center layout-pb-md pt-60 md:pt-30">
              <OthersInformation />
            </div>

            <Overview />

            <div className="line mt-60 mb-60"></div>

            <h2 className="text-30">What's included</h2>

            <Included />

            <div className="line mt-60 mb-60"></div>

            <h2 className="text-30">Itinerary</h2>

            <div className="mt-30">
              <div className="roadmap">
                <div className="roadmap__item">
                  <div className="roadmap__iconBig">
                    <i className="icon-pin"></i>
                  </div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">Day 1: Airport Pick Up</div>
                  </div>
                </div>

                <div className="roadmap__item">
                  <div className="roadmap__icon"></div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">
                      Day 2: Temples & River Cruise
                    </div>
                    <div className="roadmap__content">
                      Like on all of our trips, we can collect you from the
                      airport when you land and take you directly to your hotel.
                      The first Day is just a check-in Day so you have this
                      freedom to explore the city and get settled in.
                    </div>
                  </div>
                </div>

                <div className="roadmap__item">
                  <div className="roadmap__icon"></div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">
                      Day 3: Massage &amp; Overnight Train
                    </div>
                  </div>
                </div>

                <div className="roadmap__item">
                  <div className="roadmap__icon"></div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">
                      Day 4: Khao Sok National Park
                    </div>
                  </div>
                </div>

                <div className="roadmap__item">
                  <div className="roadmap__icon"></div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">
                      Day 5: Travel to Koh Phangan
                    </div>
                  </div>
                </div>

                <div className="roadmap__item">
                  <div className="roadmap__icon"></div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">
                      Day 6: Morning Chill &amp; Muay Thai Lesson
                    </div>
                  </div>
                </div>

                <div className="roadmap__item">
                  <div className="roadmap__iconBig">
                    <i className="icon-flag"></i>
                  </div>
                  <div className="roadmap__wrap">
                    <div className="roadmap__title">
                      Day 7: Island Boat Trip
                    </div>
                  </div>
                </div>
              </div>
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
  );
}
