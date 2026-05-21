import { useState } from "react";
import { GOLD, GOLD_LT, NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { FAQS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionContainer } from "../ui";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <section
      id="faq"
      style={{
        background: CREAM,
        borderBottom: `1px solid ${BORDER}`,
        padding: "clamp(48px, 8vw, 88px) 0", // Responsive padding
      }}
    >
      <SectionContainer style={{ position: "relative", zIndex: 1 ,padding: "0 20px"}}>
        <div
          style={{
            display: "grid",
            // Switches to 1 column when the container is less than ~800px
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "start",
          }}
        >
          <FAQSidebar />
          <FAQList openIdx={openIdx} toggle={toggle} />
        </div>
      </SectionContainer>
    </section>
  );
}

function FAQSidebar() {
  return (
    <div
      style={{
        // Only sticky on larger screens where there is a sidebar
        position: "sticky",
        top: 90,
        // Prevents sticky from acting up when stacked in a single column
        alignSelf: "start",
      }}
    >
      <Eyebrow label="Common Questions" />
      <DisplayH2>
        Everything<br />
        You Need to <em style={{ fontStyle: "italic", color: GOLD }}>Know.</em>
      </DisplayH2>
      <p style={{ fontSize: 16, color: STONE, lineHeight: 1.75, fontWeight: 300, marginTop: 16 }}>
        Honest answers to the questions every prospective student asks before enrolling.
      </p>
      <div style={{ marginTop: 32, padding: 24, background: GOLD_LT, borderLeft: `3px solid ${GOLD}` }}>
        <p style={{ fontSize: 14, color: NAVY, lineHeight: 1.6, fontWeight: 300 }}>
          Still have questions? Our advisors are available for a free 30-minute call.
        </p>
        <a
          href="#enrol"
          style={{
            display: "inline-block",
            marginTop: 14,
            fontSize: 13,
            fontWeight: 700,
            color: NAVY,
            textDecoration: "none",
          }}
        >
          Schedule a free call →
        </a>
      </div>
    </div>
  );
}

function FAQList({ openIdx, toggle }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {FAQS.map((f, i) => (
        <div
          key={i}
          onClick={() => toggle(i)}
          style={{
            borderBottom: `1px solid ${BORDER}`,
            borderTop: i === 0 ? `1px solid ${BORDER}` : "none",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
              padding: "22px 0",
              fontSize: "clamp(14px, 2vw, 15px)", // Slightly smaller text on mobile
              fontWeight: 600,
              color: NAVY,
              lineHeight: 1.4,
            }}
          >
            <span style={{ flex: 1 }}>{f.q}</span>
            <div
              style={{
                width: 24,
                height: 24,
                border: `1px solid ${openIdx === i ? NAVY : BORDER}`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: openIdx === i ? "white" : STONE,
                fontSize: 18,
                fontWeight: 300,
                flexShrink: 0,
                background: openIdx === i ? NAVY : "transparent",
                transition: "all 0.12s",
                lineHeight: 1,
              }}
            >
              {openIdx === i ? "−" : "+"}
            </div>
          </div>
          {openIdx === i && (
            <div
              style={{
                fontSize: 14,
                color: STONE,
                lineHeight: 1.75,
                paddingBottom: 22,
                fontWeight: 300,
                maxWidth: 600,
              }}
            >
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}