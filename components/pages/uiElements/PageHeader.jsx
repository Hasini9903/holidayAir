import React from "react";

export default function PageHeader() {
  return (
    <section className="mt-header pt-30">
      <div className="container">
        <div className="breadcrumbs mb-30 md:mb-15">
          <span className="breadcrumbs__item">
            <a href="#">Home</a>
          </span>
          <span>{">"}</span>
          <span className="breadcrumbs__item">
            <a href="#">Tours</a>
          </span>
          <span>{">"}</span>
          <span className="breadcrumbs__item">
            <a href="#">Phuket</a>
          </span>
        </div>

        <h1 className="text-30">UI Elements</h1>
      </div>
    </section>
  );
}
