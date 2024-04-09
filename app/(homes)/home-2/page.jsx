import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import BannerFour from "@/components/homes/banners/BannerFour";
import BannerTwo from "@/components/homes/banners/BannerTwo";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import DestinationsTwo from "@/components/homes/destinations/DestinationsTwo";
import OfferDestinations from "@/components/homes/destinations/OfferDestinations";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import FeaturesThree from "@/components/homes/features/FeaturesThree";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import Hero2 from "@/components/homes/heros/Hero2";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import Header2 from "@/components/layout/header/Header2";
import React from "react";

export const metadata = {
  title: "Home-2 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header2 />
        <Hero2 />
        <OfferDestinations />
        <TourSlider2 />
        <FeturesTwo />
        <DestinationsTwo />
        <BannerTwo />
        <TopAttractions />
        <div className="bg-accent-1-05">
          <TestimonialOne />
        </div>
        <BannerFour />
        <FeaturesThree />
        <ArticlesOne />
        <BrandsOne />
        <FooterTwo />
      </main>
    </>
  );
}
