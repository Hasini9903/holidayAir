import FooterOne from "../../../components/layout/footers/FooterTwo";
import Header1 from "../../../components/layout/header/Header6";
import Hero from "../../../components/pages/contact/Hero";
import ContactForm from "../../../components/pages/contact/ContactForm";
import Locations from "../../../components/pages/contact/Locations";
import Map from "../../../components/pages/contact/Map";
import React from "react";

export const metadata = {
  title: "Contact || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <Hero/>
        <Locations />
        <Map />
        <ContactForm />

        <FooterOne />
      </main>
    </>
  );
}
