import { GOLD, INK } from "../../constants/theme";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "../../data/content";
import { LogoMark, SectionContainer } from "../ui";

export default function Footer() {
  return (
    <footer style={{ background: INK, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <SectionContainer style={{ position: "relative", zIndex: 1 ,padding: "0 20px"}}>
        <div 
          style={{ 
            display: "grid", 
            // 2fr for brand, 1fr for others on desktop; stacks automatically on mobile
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", 
            gap: "40px 60px", 
            padding: "60px 0 40px", 
            borderBottom: "1px solid rgba(255,255,255,0.06)" 
          }}
        >
          <FooterBrand />
          {FOOTER_COLUMNS.map((col) => <FooterColumn key={col.title} col={col} />)}
        </div>
        <FooterBottom />
      </SectionContainer>
    </footer>
  );
}

function FooterBrand() {
  return (
    /* grid-column span ensures the brand takes more space on larger screens */
    <div style={{ maxWidth: "100%", marginBottom: 12 }}>
      <div style={{ maxWidth: 400 }}> {/* Constrain brand width for better readability */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, textDecoration: "none" }}>
          <LogoMark size={30} />
          <strong style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 15, color: "white", fontWeight: 700 }}>
            CodersBloom
          </strong>
        </a>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, fontWeight: 300 }}>
          Professional training and career placement across Business Analysis, Project Management, Cyber Security, and Data
          Science. Training is the beginning — placement is the promise.
        </p>
      </div>
    </div>
  );
}

function FooterColumn({ col }) {
  return (
    <div style={{ minWidth: 140 }}>
      <h4 style={{ fontSize: 10, fontWeight: 700, color: GOLD, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 18 }}>
        {col.title}
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {col.links.map((link) => (
          <li key={link}>
            <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontWeight: 300 }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottom() {
  return (
    <div 
      style={{ 
        display: "flex", 
        // Stack links under copyright on mobile
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "24px 0", 
        fontSize: 12, 
        color: "rgba(255,255,255,0.25)",
        gap: 16
      }}
    >
      <p style={{ margin: 0 }}>© 2025 Edtech Academy. All rights reserved.</p>
      <div style={{ display: "flex", gap: "16px 24px", flexWrap: "wrap" }}>
        {FOOTER_LEGAL.map((l) => (
          <a key={l} href="#" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l}</a>
        ))}
      </div>
    </div>
  );
}