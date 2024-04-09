import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner14 from "@/components/homes/banners/Banner14";
import Banner15 from "@/components/homes/banners/Banner15";
import TrendingDestinations4 from "@/components/homes/destinations/TrendingDestinations4";
import Features10 from "@/components/homes/features/Features10";
import Features11 from "@/components/homes/features/Features11";
import Features8 from "@/components/homes/features/Features8";
import Features9 from "@/components/homes/features/Features9";
import Hero10 from "@/components/homes/heros/Hero10";
import TestimonialsSix from "@/components/homes/testimonials/TestimonialsSix";
import Tour2 from "@/components/homes/tours/Tour2";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header9 from "@/components/layout/header/Header9";
import React from "react";

export const metadata = {
  title: "Home-1 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Hero10 />
        <Tour2 />
        <Features8 />
        <Features9 />
        <TrendingDestinations4 />
        <Features10 />
        <Features11 />
        <Banner14 />
        <TestimonialsSix />
        <ArticlesOne />
        <Banner15 />
        <FooterFour />
      </main>
    </>
  );
}
