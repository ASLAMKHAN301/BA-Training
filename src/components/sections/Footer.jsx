import { Link } from "react-router-dom";

import { GOLD, INK } from "../../constants/theme";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "../../data/content";
import { LogoMark, SectionContainer } from "../ui";

export default function Footer() {
  return (
    <footer
      style={{
        background: INK,
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <SectionContainer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "40px 60px",
            padding: "60px 0 40px",
            borderBottom:
              "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <FooterBrand />

          {FOOTER_COLUMNS.map((col) => (
            <FooterColumn
              key={col.title}
              col={col}
            />
          ))}
        </div>

        <FooterBottom />
      </SectionContainer>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div
      style={{
        maxWidth: "100%",
        marginBottom: 12,
      }}
    >
      <div style={{ maxWidth: 400 }}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
            textDecoration: "none",
          }}
        >
          <LogoMark size={30} />

          <strong
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
              fontSize: 15,
              color: "white",
              fontWeight: 700,
            }}
          >
            CodersBloom
          </strong>
        </Link>

        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Professional training and career placement
          across Business Analysis, Project
          Management, Cyber Security, and Data
          Science. Training is the beginning —
          placement is the promise.
        </p>
      </div>
    </div>
  );
}

function FooterColumn({ col }) {
  const getPath = (link) => {
    switch (link) {
      case "Business Analyst":
        return "/business-analyst";

      case "Project Management":
        return "/project-management";

      case "Cyber Security":
        return "/cyber-security";

      case "Data Science":
        return "/data-science";


      case "Our Faculty":
        return "/faculty";

      case "Hiring Partners":
        return "/partners";

      case "Blog & Insights":
        return "/blog";

      case "WhatsApp":
        return "/whatsapp";

      case "Student Portal":
        return "/portal";

      default:
        return "/";
    }
  };

  return (
    <div style={{ minWidth: 140 }}>
      <h4
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: GOLD,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: 18,
        }}
      >
        {col.title}
      </h4>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {col.links.map((link) => (
          <li key={link}>
            <Link
              to={getPath(link)}
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                fontWeight: 300,
                transition: "0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottom() {
  const getLegalPath = (item) => {
    switch (item) {
      case "Privacy Policy":
        return "/privacy-policy";

      case "Terms of Service":
        return "/terms";

      case "Refund Policy":
        return "/refund-policy";

      default:
        return "/";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 0",
        fontSize: 12,
        color: "rgba(255,255,255,0.25)",
        gap: 16,
      }}
    >
      <p style={{ margin: 0 }}>
        © 2025 CodersBloom. All rights reserved.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px 24px",
          flexWrap: "wrap",
        }}
      >
        {FOOTER_LEGAL.map((l) => (
          <Link
            key={l}
            to={getLegalPath(l)}
            style={{
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              transition: "0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.color =
                "rgba(255,255,255,0.25)";
            }}
          >
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
}