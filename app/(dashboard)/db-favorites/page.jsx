import Favorites from "@/components/dasboard/Fevorite";
import React from "react";

export const metadata = {
  title: "Dashboard-favorites || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Favorites />
      </main>
    </>
  );
}
