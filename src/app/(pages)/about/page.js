import AboutUs from "@/app/_components/AboutUs";
import Breadcrum from "@/app/_components/Breadcrum";
import Counter from "@/app/_components/Counter";
import Cta from "@/app/_components/Cta";
import FAQ from "@/app/_components/Faq";
import Mission from "@/app/_components/Mission";
import Spacer from "@/app/_components/Spacer";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrum page="About" />
      <AboutUs />
      <Counter />
      <Mission />
      <Spacer />
      <Cta />
      <Spacer />
      <FAQ />
    </>
  );
}
