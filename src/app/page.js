import React from "react";
import FAQ from "./_components/Faq";
import Services from "./_components/Services";
// import Slider from "./_components/Slider";
import Skills from "./_components/Skills";
import ServiceStandOut from "./_components/ServiceStandOut";
import Testimonial from "./_components/Testimonials";
import Counter from "./_components/Counter";
import AboutUs from "./_components/AboutUs";
import Cta from "./_components/Cta";
import Spacer from "./_components/Spacer";
import HeroBanner from "./_components/Banner";

export default function page() {
  return (
    <>
      <HeroBanner />
      {/* <Slider /> */}
      <AboutUs page="home" />
      <Counter />
      <Services page="home" />
      <Spacer />
      <Skills />
      <Spacer />
      <ServiceStandOut />
      <Spacer />
      <Cta />
      <Spacer />
      <Testimonial />
      <Spacer />
      <FAQ />
    </>
  );
}
