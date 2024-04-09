import React from "react";
import Pagination from "../common/Pagination";
import { blogs, categories, recantBlogs, tags } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function BlogList2() {
  return (
    <section className="layout-pt-md layout-pb-xl">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-lg-8">
            <div className="row y-gap-60">
              {blogs.slice(0, 3).map((elm, i) => (
                <div key={i} className="col-12">
                  <Link
                    href={`blog-single/${elm.id}`}
                    className="blogCard -type-1"
                  >
                    <div className="blogCard__image ratio ratio-41:30">
                      <Image
                        width={616}
                        height={451}
                        src={elm.image}
                        alt="image"
                        className="img-ratio rounded-12"
                      />
                    </div>

                    <div className="blogCard__content mt-30">
                      <div className="d-flex x-gap-10 text-14">
                        <div className="lh-13">{elm.date}</div>
                        <div className="lh-13">By {elm.author}</div>
                      </div>

                      <h3 className="blogCard__title text-30 lh-15 mt-10">
                        {elm.title}
                      </h3>

                      <p className="mt-10">{elm.desc}</p>

                      <button className="fw-500 mt-10">
                        <span className="mr-10">Read More</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_142_28418)">
                            <path
                              d="M15.5553 0H5.77756C5.53189 0 5.3331 0.198792 5.3331 0.444458C5.3331 0.690125 5.53189 0.888917 5.77756 0.888917H14.4824L0.129975 15.2413C-0.0436504 15.415 -0.0436504 15.6962 0.129975 15.8698C0.216766 15.9566 0.330516 16 0.444225 16C0.557933 16 0.671641 15.9566 0.758475 15.8698L15.1109 1.51738V10.2223C15.1109 10.4679 15.3097 10.6667 15.5553 10.6667C15.801 10.6667 15.9998 10.4679 15.9998 10.2223V0.444458C15.9998 0.198792 15.801 0 15.5553 0Z"
                              fill="#05073C"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_142_28418">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="d-flex justify-center flex-column mt-60">
              <Pagination />

              <div className="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>
          </div>

          <div className="col-lg-auto">
            <div className="sidebar -type-2">
              <div className="sidebar__search">
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.20459 1.44849C4.48555 1.44849 1.45605 4.47798 1.45605 8.19703C1.45605 11.9161 4.48555 14.9515 8.20459 14.9515C9.7931 14.9515 11.254 14.3948 12.4087 13.4705L15.2197 16.28C15.3616 16.416 15.5511 16.491 15.7476 16.489C15.944 16.487 16.1319 16.4082 16.271 16.2693C16.41 16.1304 16.4892 15.9427 16.4915 15.7462C16.4937 15.5497 16.419 15.3601 16.2832 15.2181L13.4722 12.407C14.3972 11.2506 14.9546 9.78738 14.9546 8.19703C14.9546 4.47798 11.9236 1.44849 8.20459 1.44849ZM8.20459 2.94851C11.113 2.94851 13.4531 5.28866 13.4531 8.19703C13.4531 11.1054 11.113 13.4514 8.20459 13.4514C5.29621 13.4514 2.95605 11.1054 2.95605 8.19703C2.95605 5.28866 5.29621 2.94851 8.20459 2.94851Z"
                      fill="#05073C"
                    />
                  </svg>
                </i>

                <input type="text" placeholder="Search" />
              </div>

              <div className="sidebar__item">
                <h4 className="text-18 fw-500 mb-20">Blog Categories</h4>

                <div className="d-flex flex-column y-gap-5">
                  {categories.map((elm, i) => (
                    <a key={i} href={elm.href}>
                      {elm.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="sidebar__item">
                <h4 className="text-18 fw-500 mb-20">Recent Posts</h4>

                <div className="d-flex y-gap-20 flex-column">
                  {recantBlogs.map((elm, i) => (
                    <a key={i} href="#" className="d-flex align-center">
                      <div className="size-70 overflow-hidden rounded-12">
                        <Image
                          width={616}
                          height={451}
                          src={elm.image}
                          alt="image"
                          className="img-cover"
                        />
                      </div>

                      <div className="ml-20">
                        <h5 className="text-15 lh-14 fw-500">{elm.title}</h5>
                        <div className="text-14 lh-1 mt-10">{elm.date}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="sidebar__item">
                <h4 className="text-18 fw-500 mb-20">Tags</h4>

                <div className="sidebar__tags d-flex y-gap-10 x-gap-10">
                  {tags.map((elm, i) => (
                    <div key={i}>
                      <a href={elm.href}>{elm.name}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
