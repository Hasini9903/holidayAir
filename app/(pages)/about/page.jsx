
import BannerOne from "../../../components/homes/banners/BannerOne";
import BrandsOne from "../../../components/homes/brands/BrandsOne";
import FeaturesOne from "../../../components/homes/features/FeaturesOne";
import FeturesTwo from "../../../components/homes/features/FeturesTwo";
import TestimonialOne from "../../../components/homes/testimonials/TestimonialOne";
import FooterOne from "../../../components/layout/footers/FooterTwo";
import Header1 from "../../../components/layout/header/Header6";
import Banner from "../../../components/pages/about/Banner";
import Hero from "../../../components/pages/about/Hero";
import Information from "../../../components/pages/about/Information";
import Team from "../../../components/pages/about/Team";
import React from "react";

export const metadata = {
  title: "About || Holiday-Air Travel",
  description: "Holiday-Air Travel",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Hero />
        <Information />
        <Banner />
        <FeaturesOne />
        <div className="mt-60">
          <FeturesTwo />
        </div>
        
        <Team />
        <BrandsOne />
        <FooterOne />
      </main>
    </>
  );
}
