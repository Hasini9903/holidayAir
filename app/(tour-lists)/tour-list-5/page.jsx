import Hero1 from "@/components/homes/heros/Hero1";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import TourList4 from "@/components/tours/TourList4";
import React from "react";

export const metadata = {
  title: "Tour-list-5 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Hero1 />

        <div className="mt-50">
          <TourList4 />
        </div>

        <FooterOne />
      </main>
    </>
  );
}
