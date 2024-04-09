import { articles } from "@/data/articles";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArticlesTwo() {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-dark-1 ">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24 text-white"
            >
              Travel Articles
            </h2>
          </div>

          <div className="col-auto">
            <Link
              href={"/blog-list-1"}
              data-aos="fade-right"
              data-aos-delay=""
              className="buttonArrow d-flex items-center  text-white"
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 pt-40 sm:pt-20"
        >
          {blogs.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <Link
                href={`/blog-single/${elm.id}`}
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

                  <div className="blogCard__badge">{elm.badge}</div>
                </div>

                <div className="blogCard__content mt-30">
                  <div className="blogCard__info text-14">
                    <div className="lh-13 text-white">{elm.date}</div>
                    <div className="blogCard__line"></div>
                    <div className="lh-13 text-white">By {elm.author}</div>
                  </div>

                  <h3 className="blogCard__title text-white text-18 fw-500 mt-10">
                    {elm.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
