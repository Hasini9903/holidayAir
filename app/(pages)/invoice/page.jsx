import Invoice from "@/components/Invoice";
import React from "react";

export const metadata = {
  title: "Invoice || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Invoice />
      </main>
    </>
  );
}
