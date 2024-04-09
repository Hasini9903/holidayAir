import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner10 from "@/components/homes/banners/Banner10";
import BrandsThree from "@/components/homes/brands/BrandsThree";
import TrendingDestinations3 from "@/components/homes/destinations/TrendingDestinations3";
import Features5 from "@/components/homes/features/Features5";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero6 from "@/components/homes/heros/Hero6";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialsThree from "@/components/homes/testimonials/TestimonialsThree";
import TourTypes3 from "@/components/homes/tourTypes/TourTypes3";
import TourSlider3 from "@/components/homes/tours/TourSlider3";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header5 from "@/components/layout/header/Header5";
import React from "react";

export const metadata = {
  title: "Home-6 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header5 />
        <Hero6 />
        <FeaturesOne />
        <TrendingDestinations3 />
        <TourTypes3 />
        <TourSlider3 />
        <Features5 />
        <TestimonialsThree />
        <div className=" bg-light-1">
          <ArticlesOne />
        </div>
        <SpacialOffer />
        <BrandsThree />
        <Banner10 />
        <FooterFour />
      </main>
    </>
  );
}
