/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  // Direct smoothing scroll function with native scroll support
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="root-container"
      className="min-h-screen bg-[#08080a] text-white tracking-[-0.02em]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Dynamic and fully interactive premium navigation bar */}
      <Navigation onScrollTo={scrollToSection} />

      {/* 1. Full-screen Geology Hero Section with Anime theme values inside */}
      <HeroSection onScrollToExplore={() => scrollToSection("about-section")} />

      {/* 2. Professional interactive About Section (Ачлууны тухай танилцуулга) */}
      <AboutSection />

      {/* 3. Fully equipped responsive Contact Section */}
      <ContactSection />
    </div>
  );
}

