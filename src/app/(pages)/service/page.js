import Breadcrum from "@/app/_components/Breadcrum";
import Cta from "@/app/_components/Cta";
import Services from "@/app/_components/Services";
import ServiceStandOut from "@/app/_components/ServiceStandOut";
import Spacer from "@/app/_components/Spacer";
import React from "react";

export default function page() {
  return (
    <>
      <Breadcrum page="Services" />
      <Services />
      <Spacer />
      <Cta />
      <Spacer />
      <ServiceStandOut />
    </>
  );
}
