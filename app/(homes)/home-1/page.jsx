import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import ArticlesThree from "@/components/homes/articles/ArticlesThree";
import ArticlesTwo from "@/components/homes/articles/ArticlesTwo";
import Banner from "@/components/homes/banners/Banner";
import Banner11 from "@/components/homes/banners/Banner11";
import BrandsFour from "@/components/homes/brands/BannerFour";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import BrandsThree from "@/components/homes/brands/BrandsThree";
import BrandsTwo from "@/components/homes/brands/BrandsTwo";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
import Hero7 from "@/components/homes/heros/Hero7";

import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";

import PopulerTours from "@/components/homes/tours/PopulerTours";
import TourSlider2 from "@/components/homes/tours/TourSlider2";
import TourSlider3 from "@/components/homes/tours/TourSlider3";
import TourSlider4 from "@/components/homes/tours/TourSlider4";

import FooterTwo from "@/components/layout/footers/FooterTwo";
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
        <BrandsFour/>
        
        <TrendingDestinations />
        <Banner />
        <ArticlesOne />
        {/* <TopAttractions /> */}
        <div className="bg-accent-1-05">
          <TestimonialOne />
          {/* <TestimonialsThree /> */}

        </div>
        
        <BrandsOne/>
        
        <FooterTwo />
        
    </main>
  );
}
