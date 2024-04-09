import DBListing from "@/components/dasboard/DBListing";
import React from "react";

export const metadata = {
  title: "Dashboard-listing || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <DBListing />
      </main>
    </>
  );
}
