import DbBooking from "@/components/dasboard/DbBooking";
import React from "react";

export const metadata = {
  title: "Dashboard-booking || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <DbBooking />
      </main>
    </>
  );
}
