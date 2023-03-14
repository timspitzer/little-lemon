import "./App.css";
import HighlightsSection from "./components/highlights-section/HighlightsSection.js";
import TestimonialSection from "./components/testimonials-section/TestimonialSection.js";
import AboutSection from "./components/about-section/AboutSection.js";
import Layout from "./layouts/layout/Layout.js";
import HeroSection from "./components/hero-section/HeroSection.js";

function App() {
  return (
    <Layout>
      <HeroSection></HeroSection>
      <HighlightsSection></HighlightsSection>
      <TestimonialSection></TestimonialSection>
      <AboutSection></AboutSection>
    </Layout>
  );
}

export default App;
