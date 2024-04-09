"use client";

import Pagination from "../common/Pagination";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { tourDataThree } from "@/data/tours";
import Stars from "../common/Stars";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Favorites() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <>
      <div
        className={`dashboard ${
          sideBarOpen ? "-is-sidebar-visible" : ""
        } js-dashboard`}
      >
        <Sidebar setSideBarOpen={setSideBarOpen} />

        <div className="dashboard__content">
          <Header setSideBarOpen={setSideBarOpen} />

          <div className="dashboard__content_content">
            <h1 className="text-30">My Favorites</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur.</p>

            <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30  mt-60 ">
              <div className="row y-gap-30">
                {tourDataThree.slice(0, 8).map((elm, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                    <Link
                      href={`/tour-single-1/${elm.id}`}
                      className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                    >
                      <div className="tourCard__header">
                        <div className="tourCard__image ratio ratio-28:20">
                          <Image
                            width={421}
                            height={301}
                            src={elm.imageSrc}
                            alt="image"
                            className="img-ratio rounded-12"
                          />
                        </div>

                        <button className="tourCard__favorite">
                          <i className="icon-heart"></i>
                        </button>
                      </div>

                      <div className="tourCard__content px-10 pt-10">
                        <div className="tourCard__location d-flex items-center text-13 text-light-2">
                          <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                          {elm.location}
                        </div>

                        <h3 className="tourCard__title text-16 fw-500 mt-5">
                          <span>{elm.title}</span>
                        </h3>

                        <div className="tourCard__rating d-flex items-center text-13 mt-5">
                          <div className="d-flex x-gap-5">
                            <Stars star={elm.rating} />
                          </div>

                          <span className="text-dark-1 ml-10">
                            {elm.rating} ({elm.ratingCount})
                          </span>
                        </div>

                        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                          <div className="d-flex items-center">
                            <i className="icon-clock text-16 mr-5"></i>
                            {elm.duration}
                          </div>

                          <div>
                            From{" "}
                            <span className="text-16 fw-500">${elm.price}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-30">
                <Pagination />

                <div className="text-14 text-center mt-20">
                  Showing results 1-30 of 1,415
                </div>
              </div>
            </div>

            <div className="text-center pt-30">
              © Copyright Viatours {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
