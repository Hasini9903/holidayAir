import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleFive from "@/components/tourSingle/pages/SingleFive";
import { allTour } from "@/data/tours";

import React from "react";

export const metadata = {
  title: "Tour-single-5 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page({ params }) {
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <main>
        <Header1 />
        <PageHeader />

        <SingleFive tour={tour} />
        <TourSlider />
        <FooterOne />
      </main>
    </>
  );
}
