import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1 ">
      <div className="">
      <div className="pageHeader__bg">
        <Image
          width={1800}
          height={500}
          src="/img/pageHeader/contact.jpg"
          alt="image"
        />
        <Image
          width="1800"
          height="40"
          style={{ height: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      <div className="container bg-accent-2-05 my-10">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title">About Us</h1>

              <p className="pageHeader__text pb-15">
                A tropical paradise made for animal lovers replete with monkey
                caves, dog foundations, and dolphins in the wild.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
