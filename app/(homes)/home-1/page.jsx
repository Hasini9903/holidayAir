import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner from "@/components/homes/banners/Banner";
import Banner11 from "@/components/homes/banners/Banner11";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
import Hero7 from "@/components/homes/heros/Hero7";

import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import TourSlider3 from "@/components/homes/tours/TourSlider3";
import TourSlider4 from "@/components/homes/tours/TourSlider4";
import TourSlider5 from "@/components/homes/tours/TourSlider5";
import FooterFive from "@/components/layout/footers/FooterFive";
import Header6 from "@/components/layout/header/Header6";
import React from "react";

export default function Home() {
  return (
    <main>
       <Header6 />
        <Hero7 />
        <TourSlider4 />
        <TourSlider3 />
        <TourSlider2 />
        <PopulerTours />
        <TrendingDestinations />
        <Banner />
        <TopAttractions />
        <div className="bg-accent-1-05">
          <TestimonialOne />
        </div>
       
        <Banner11 />
        <ArticlesOne />
        <FooterFive />
    </main>
  );
}
