"use client";

import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { blogs, continents } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

export default function BlogList1() {
  const [currentActiveTab, setCurrentActiveTab] = useState("All Guide");
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    if (currentActiveTab == "All Guide") {
      setFilteredItems(blogs);
    } else {
      setFilteredItems([
        ...blogs.filter((elm) => elm.continent == currentActiveTab),
      ]);
    }
  }, [currentActiveTab, setFilteredItems]);

  return (
    <section className="layout-pt-md layout-pb-xl">
      <div className="container">
        <div className="tabs -pills-3 pt-30 js-tabs">
          <div className="tabs__controls row x-gap-10 y-gap-10 justify-center js-tabs-controls">
            {continents.map((elm, i) => (
              <div
                key={i}
                className="col-auto"
                onClick={() => setCurrentActiveTab(elm)}
              >
                <button
                  className={`" tabs__button fw-500 rounded-200 js-tabs-button ${
                    currentActiveTab == elm ? "is-tab-el-active" : ""
                  } `}
                  data-tab-target=".-tab-item-1"
                >
                  {elm}
                </button>
              </div>
            ))}
          </div>

          <div className="tabs__content pt-30 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-tab-el-active">
              <div className="row y-gap-30">
                {filteredItems.map((elm, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
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

                        {elm.badge && (
                          <div className="blogCard__badge">{elm.badge}</div>
                        )}
                      </div>

                      <div className="blogCard__content mt-30">
                        <div className="blogCard__info text-14">
                          <div className="lh-13">{elm.date}</div>
                          <div className="blogCard__line"></div>
                          <div className="lh-13">By {elm.author}</div>
                        </div>

                        <h3 className="blogCard__title text-18 fw-500 mt-10">
                          {elm.title}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-center flex-column mt-60">
          <Pagination />

          <div className="text-14 text-center mt-20">
            Showing results 1-30 of 1,415
          </div>
        </div>
      </div>
    </section>
  );
}
