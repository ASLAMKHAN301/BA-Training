import { useState, useEffect } from "react";
import { GOLD, NAVY, STONE, CREAM, BORDER, INK } from "../../constants/theme";
import { OUTCOME_BULLETS, OUTCOME_STATS } from "../../data/content";
import { Eyebrow, DisplayH2 } from "../ui";

export default function OutcomesSection() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 991;

  return (
    <section id="outcomes" style={{ background: "white", borderBottom: `1px solid ${BORDER}`, padding: isMobile ? "60px 0 0 0" : "88px 0 0 0" }}>
      {/* Container with 20px padding */}
      <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ 
          display: "grid", 
          // Mobile par 1 column, Desktop par 2 columns
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
          gap: isMobile ? 48 : 80, 
          alignItems: "start" 
        }}>
          <OutcomesLeft isMobile={isMobile} />
          <OutcomesRight isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
}

function OutcomesLeft({ isMobile }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div>
        <Eyebrow label="Track Record" />
        <DisplayH2>
          Numbers That<br />
          Speak for <em style={{ fontStyle: "italic", color: GOLD }}>Themselves.</em>
        </DisplayH2>
      </div>
      <p style={{ fontSize: isMobile ? 15 : 16, color: STONE, lineHeight: 1.75, maxWidth: 520, fontWeight: 300 }}>
        We measure success by how quickly you get hired and what you earn — not by enrolment numbers or vanity metrics.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 8 }}>
        {OUTCOME_BULLETS.map((text, i) => (
          <div
            key={i}
            style={{
              display: "grid", gridTemplateColumns: "20px 1fr", gap: 14,
              alignItems: "flex-start", padding: "16px 0",
              borderBottom: `1px solid ${BORDER}`,
              borderTop: i === 0 ? `1px solid ${BORDER}` : "none",
            }}
          >
            <div style={{ width: 8, height: 8, background: GOLD, borderRadius: "50%", marginTop: 6, flexShrink: 0 }} />
            <p style={{ fontSize: 14, color: INK, lineHeight: 1.6 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomesRight({ isMobile }) {
  return (
    <div>
      {/* Stats Card */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          background: BORDER,
          border: `1px solid ${BORDER}`,
          borderRadius: 12,
          // overflow: "hidden",
        }}
      >
        {OUTCOME_STATS.map((s) => (
          <div
            key={s.num}
            style={{
              background: s.dark ? NAVY : CREAM,
              padding: isMobile ? "20px 16px" : "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
              minHeight: 170,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? 32 : 38,
                fontWeight: 700,
                color: s.dark ? GOLD : NAVY,
                lineHeight: 1,
                letterSpacing: "-1px",
              }}
            >
              {s.num}
            </div>

            <div
              style={{
                fontSize: 11,
                color: s.dark
                  ? "rgba(255,255,255,0.5)"
                  : STONE,
                lineHeight: 1.4,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}