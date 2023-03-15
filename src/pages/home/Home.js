import React from "react";
import HeroSection from "../../components/hero-section/HeroSection.js";
import HighlightsSection from "../../components/highlights-section/HighlightsSection.js";
import TestimonialSection from "../../components/testimonials-section/TestimonialSection.js";
import AboutSection from "../../components/about-section/AboutSection.js";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <HighlightsSection></HighlightsSection>
      <TestimonialSection></TestimonialSection>
      <AboutSection></AboutSection>
    </>
  );
}
