import { sections } from "@/data/help";
import Image from "next/image";
import React from "react";

export default function Activity() {
  return (
    <section className="layout-pt-md">
      <div className="container">
        <div className="row y-gap-30">
          {sections.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <Image
                  width="60"
                  height="60"
                  src={elm.imgSrc}
                  alt="image"
                  className="mb-20"
                />

                <h3 className="text-18 fw-500">{elm.title}</h3>

                <div className="mt-10">{elm.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
