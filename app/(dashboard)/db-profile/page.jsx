import Profile from "@/components/dasboard/Profile";
import React from "react";

export const metadata = {
  title:
    "Dashboard-my-profile || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Profile />
      </main>
    </>
  );
}
