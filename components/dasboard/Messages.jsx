"use client";

import Pagination from "../common/Pagination";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { tourDataThree } from "@/data/tours";
import Stars from "../common/Stars";
import { useState } from "react";
import { messageSanders } from "@/data/dashboard";
import Image from "next/image";

export default function Messages() {
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
            <h1 className="text-30">Messages</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
            <div className="row y-gap-30 pt-60">
              <div className="col-lg-4">
                <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30">
                  <div className="dbSearch">
                    <i className="icon-search text-16"></i>
                    <input type="search" placeholder="Search" />
                  </div>

                  <div className="row y-gap-30 pt-30">
                    {messageSanders.map((elm, i) => (
                      <div key={i} className="col-12">
                        <div className="row x-gap-10 y-gap-10 justify-between">
                          <div className="col-auto">
                            <div className="d-flex items-center">
                              <Image
                                width={50}
                                height={50}
                                src={elm.image}
                                alt="image"
                                className="size-50 rounded-full"
                              />

                              <div className="ml-10">
                                <h5 className="text-15 lh-13 fw-500">
                                  {elm.name}
                                </h5>
                                <div className="text-14 lh-13">{elm.role}</div>
                              </div>
                            </div>
                          </div>

                          <div className="col-auto">
                            <div className="d-flex flex-column items-end md:items-start">
                              <div className="text-14">{elm.time}</div>

                              {elm.badgeText && (
                                <div
                                  className={`size-16 flex-center rounded-full ${
                                    elm.badgeColor ? elm.badgeColor : ""
                                  } text-8 text-white`}
                                >
                                  {elm.badgeText}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="rounded-12 bg-white shadow-2 px-40 pt-20 pb-30">
                  <div className="row x-gap-10 y-gap-10 justify-between items-center pb-20 border-1-bottom">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <Image
                          width={50}
                          height={50}
                          src="/img/dashboard/messages/main/4.png"
                          alt="image"
                          className="size-50 rounded-full"
                        />

                        <div className="ml-10">
                          <h5 className="text-15 lh-13 fw-500">Arlene McCoy</h5>
                          <div className="text-14 lh-13">Active</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="text-14">Delete Conversation</div>
                    </div>
                  </div>

                  <div className="row pt-40">
                    <div className="col-lg-6">
                      <div className="d-flex items-center">
                        <Image
                          width={50}
                          height={50}
                          src="/img/dashboard/messages/main/1.png"
                          alt="image"
                          className="size-50 rounded-full"
                        />
                        <h5 className="ml-10 text-15 fw-500">Albert Flores</h5>
                        <div className="text-14 ml-5">35 mins</div>
                      </div>

                      <div className="text-14 bg-light-1 rounded-12 py-20 px-30 mt-15">
                        How likely are you to recommend our company to your
                        friends and family?
                      </div>
                    </div>
                  </div>

                  <div className="row justify-end text-right pt-20">
                    <div className="col-lg-6">
                      <div className="d-flex items-center justify-end">
                        <div className="text-14 mr-5">35 mins</div>
                        <h5 className="mr-10 text-15 fw-500">Albert Flores</h5>
                        <Image
                          width={50}
                          height={50}
                          src="/img/dashboard/messages/main/3.png"
                          alt="image"
                          className="size-50 rounded-full"
                        />
                      </div>

                      <div className="text-14 bg-accent-1-05 rounded-12 py-20 px-30 mt-15">
                        How likely are you to recommend our company to your
                        friends and family?
                      </div>
                    </div>
                  </div>

                  <div className="row pt-20">
                    <div className="col-lg-6">
                      <div className="d-flex items-center">
                        <Image
                          width={50}
                          height={50}
                          src="/img/dashboard/messages/main/3.png"
                          alt="image"
                          className="size-50 rounded-full"
                        />
                        <h5 className="ml-10 text-15 fw-500">
                          Cameron Williamson
                        </h5>
                        <div className="text-14 ml-5">35 mins</div>
                      </div>

                      <div className="text-14 bg-light-1 rounded-12 py-20 px-30 mt-15">
                        Ok, Understood!
                      </div>
                    </div>
                  </div>

                  <div className="mt-40 mb-30 border-1-top"></div>

                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <input type="text" placeholder="Type a Message" />
                    </div>

                    <div className="col-auto">
                      <button className="button -md -dark-1 bg-accent-1 text-white">
                        Send Message
                        <i className="icon-arrow-top-right text-16 ml-10"></i>
                      </button>
                    </div>
                  </div>
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
