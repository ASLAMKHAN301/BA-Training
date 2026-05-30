// ─── Layout ──────────────────────────────────────────────────────────────────
import AnnounceBar from "../components/sections/AnnounceBar";
import Nav from "../components/layout/Nav";
import StickyMobileCTA from "../components/sections/StickyMobileCTA";
import Footer from "../components/sections/Footer";

// ─── Page Sections ───────────────────────────────────────────────────────────
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import ProgramsSection from "../components/sections/ProgramsSection";
import ToolsSection from "../components/sections/ToolsSection";
import ProcessSection from "../components/sections/ProcessSection";
import OutcomesSection from "../components/sections/OutcomesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import MentorsSection from "../components/sections/MentorsSection";
import GallerySection from "../components/sections/GallerySection";
import PartnersSection from "../components/sections/PartnersSection";
import PlacementSection from "../components/sections/PlacementSection";
import SuccessSection from "../components/sections/SuccessSection";
import FAQSection from "../components/sections/FAQSection";
import BottomCTA from "../components/sections/BottomCTA";
import Origin from "../components/sections/Origin";
import Thing from "../components/sections/Four";
import Location from "../components/sections/Location";

export default function Home() {
  return (
    <div className="font-sans bg-cream text-ink overflow-x-hidden">
      {/* Top chrome */}
      <AnnounceBar />
      <Nav />

      {/* Main content */}
      <Hero />
      <TrustStrip />
      <Origin/>
      <Thing/>
      <Location/>

      <ProgramsSection />
      <ToolsSection />
      <ProcessSection />
      <OutcomesSection />
      <TestimonialsSection />
      <MentorsSection />
      <GallerySection />       {/* Life at Edtech — photo bento grid */}
      {/* <PartnersSection /> */}
      <PlacementSection />
      <SuccessSection />
      <FAQSection />
      <BottomCTA />

      {/* Bottom chrome */}
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
