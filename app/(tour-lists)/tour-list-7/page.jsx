import Hero1 from "@/components/homes/heros/Hero1";
import TourSlderOne from "@/components/homes/tours/TourSlderOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Destinations from "@/components/tours/Destinations";
import TourList4 from "@/components/tours/TourList4";
import TourSlder from "@/components/tours/TourSlider";
import React from "react";

export const metadata = {
  title: "Tour-list-7 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Hero1 />

        <Destinations />
        <TourSlder />

        <TourList4 />

        <FooterOne />
      </main>
    </>
  );
}
