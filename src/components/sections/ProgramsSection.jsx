import { useState, useEffect } from "react";
import { GOLD, GOLD_LT, NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { PROGRAMS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionHead, ArrowIcon } from "../ui";

export default function ProgramsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991); // Switch to 1 column below 991px
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="programs" style={{ background: CREAM, borderBottom: `1px solid ${BORDER}`, padding: "88px 0" }}>
      {/* Container with updated 20px padding */}
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 20px" }}>
        
        <SectionHead linkText="View all program details →">
          <Eyebrow label="Our Curriculum" />
          <DisplayH2>
            Four Programs.<br />
            One Promise: <em style={{ fontStyle: "italic", color: GOLD }}>Employment.</em>
          </DisplayH2>
        </SectionHead>

        <div style={{ 
          display: "grid", 
          // Strictly 2 columns on desktop, 1 on mobile
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
          gap: 1, 
          background: BORDER, 
          border: `1px solid ${BORDER}` 
        }}>
          {PROGRAMS.map((p) => <ProgramCard key={p.title} program={p} isMobile={isMobile} />)}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program, isMobile }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <a
      href="#enrol"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? CREAM : "white",
        padding: isMobile ? "24px" : "36px 36px 32px",
        display: "flex", 
        flexDirection: "column", 
        gap: 16,
        textDecoration: "none", 
        color: "inherit",
        position: "relative", 
        overflow: "hidden", 
        transition: "background 0.18s",
      }}
    >
      {/* Hover Line */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: GOLD,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left", transition: "transform 0.25s ease",
        }}
      />

      {/* Header: Icon & Badge */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ 
          width: 48, height: 48, border: `1px solid ${BORDER}`, 
          borderRadius: 2, background: CREAM, 
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill={NAVY}><rect x="3" y="4" width="16" height="14" rx="1" /></svg>
        </div>
        <span style={{ 
          fontSize: 10, fontWeight: 700, letterSpacing: "1px", 
          textTransform: "uppercase", color: GOLD, background: GOLD_LT, 
          padding: "4px 10px", borderRadius: 1 
        }}>
          {program.badge}
        </span>
      </div>

      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, letterSpacing: "-0.3px", lineHeight: 1.2 }}>
        {program.title}
      </div>

      <p style={{ fontSize: 14, color: STONE, lineHeight: 1.7, fontWeight: 300, flex: 1 }}>
        {program.desc}
      </p>

      {/* Footer Details */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        paddingTop: 18, 
        borderTop: `1px solid ${BORDER}`,
        gap: 12,
        flexWrap: "wrap" 
      }}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{program.duration}</span>
          <span style={{ fontSize: 12, color: STONE }}>Weekend &amp; Evening</span>
          <span style={{ fontSize: 12, color: STONE }}>{program.cert}</span>
        </div>
        
        <div
          style={{
            width: 32, height: 32, border: `1px solid ${hovered ? GOLD : BORDER}`,
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
            background: hovered ? GOLD : "transparent", transition: "all 0.15s", flexShrink: 0,
            marginLeft: "auto"
          }}
        >
          <ArrowIcon color={hovered ? "white" : STONE} />
        </div>
      </div>
    </a>
  );
}