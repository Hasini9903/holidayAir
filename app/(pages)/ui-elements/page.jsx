import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import UiElements from "@/components/pages/uiElements";
import PageHeader from "@/components/pages/uiElements/PageHeader";
import React from "react";

export const metadata = {
  title: "UI-elements || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header1 />
        <PageHeader />
        <UiElements />
        <FooterOne />
      </main>
    </>
  );
}
