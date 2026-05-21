import { useState, useEffect } from "react";
import { GOLD, NAVY, STONE, CREAM, BORDER, MIST, INK } from "../../constants/theme";
import { TESTIMONIALS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionHead, StarRow } from "../ui";

export default function TestimonialsSection() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive Grid Logic
  const getGridColumns = () => {
    if (windowWidth < 768) return "1fr"; // Mobile
    if (windowWidth < 1024) return "1fr 1fr"; // Tablet
    return "repeat(3, 1fr)"; // Desktop
  };

  return (
    <section style={{ 
      background: CREAM, 
      borderBottom: `1px solid ${BORDER}`, 
      padding: windowWidth < 768 ? "60px 0" : "88px 0" 
    }}>
      {/* Container with 20px padding */}
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 20px" }}>
        
        <SectionHead linkText="Read all stories →">
          <Eyebrow label="Graduate Stories" />
          <DisplayH2>
            Heard From Those<br />
            Who <em style={{ fontStyle: "italic", color: GOLD }}>Made It.</em>
          </DisplayH2>
        </SectionHead>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: getGridColumns(), 
          gap: windowWidth < 768 ? 16 : 24,
          marginTop: windowWidth < 768 ? 32 : 0
        }}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} windowWidth={windowWidth} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t, windowWidth }) {
  return (
    <div style={{ 
      background: "white", 
      border: `1px solid ${BORDER}`, 
      borderRadius: 4, 
      padding: windowWidth < 480 ? "24px 20px" : "32px 28px", 
      display: "flex", 
      flexDirection: "column", 
      gap: 20 
    }}>
      <StarRow />

      <p style={{ 
        fontFamily: "'Playfair Display', Georgia, serif", 
        fontSize: windowWidth < 480 ? 14 : 15, 
        fontStyle: "italic", 
        color: INK, 
        lineHeight: 1.75, 
        flex: 1 
      }}>
        <span style={{ color: GOLD, fontSize: 40, lineHeight: 0, verticalAlign: -16, marginRight: 4 }}>"</span>
        {t.quote}
      </p>

      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 12, 
        paddingTop: 18, 
        borderTop: `1px solid ${BORDER}`,
        flexWrap: "wrap" // Chote screens par info wrap ho sake
      }}>
        <div style={{ 
          width: 40, height: 40, borderRadius: "50%", 
          background: NAVY, color: GOLD, 
          fontFamily: "'Playfair Display', serif", 
          fontSize: 14, fontWeight: 700, 
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
        }}>
          {t.initials}
        </div>
        
        <div style={{ flex: 1, minWidth: "100px" }}>
          <strong style={{ display: "block", fontSize: 13, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{t.name}</strong>
          <span style={{ fontSize: 11, color: STONE, display: "block" }}>{t.role}</span>
        </div>

        <div style={{ 
          fontSize: 10, 
          fontWeight: 600, 
          letterSpacing: "0.5px", 
          textTransform: "uppercase", 
          color: STONE, 
          background: MIST, 
          padding: "3px 8px", 
          borderRadius: 1, 
          whiteSpace: "nowrap",
          marginTop: windowWidth < 380 ? 8 : 0 // Very narrow phones par tag niche aa jaye
        }}>
          {t.tag}
        </div>
      </div>
    </div>
  );
}