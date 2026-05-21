import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { LogoMark } from "../ui";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Hover States
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [programHover, setProgramHover] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        background: CREAM,
        borderBottom: `1px solid ${BORDER}`,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
      }}
    >
      {/* Container */}
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Navbar */}
        <div
          style={{
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <LogoMark />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? 14 : 16,
                  fontWeight: 700,
                  color: NAVY,
                  lineHeight: 1.1,
                  letterSpacing: "-0.3px",
                }}
              >
                CodersBloom
              </strong>

              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: STONE,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Training & Placement
              </span>
            </div>

            <div className="border h-10 border-l-2 border-gray-700"></div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? 14 : 16,
                  fontWeight: 700,
                  color: NAVY,
                  lineHeight: 1.1,
                  letterSpacing: "-0.3px",
                }}
              >
                17+
              </strong>

              <span
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: STONE,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Years
              </span>
            </div>
          </Link>

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 28,
                color: NAVY,
                cursor: "pointer",
              }}
            >
              ☰
            </button>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: 8,
                alignItems: "center",
                margin: 0,
                padding: 0,
              }}
            >
              {/* Home */}
              <li>
                <Link
                  to="/"
                  onMouseEnter={() => setHomeHover(true)}
                  onMouseLeave={() => setHomeHover(false)}
                  style={{
                    textDecoration: "none",
                    color: homeHover ? NAVY : STONE,
                    background: homeHover ? "#f3f4f6" : "transparent",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    borderRadius: 6,
                    display: "block",
                    transition: "all 0.15s ease",
                  }}
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li>
                <Link
                  to="/about-us"
                  onMouseEnter={() => setAboutHover(true)}
                  onMouseLeave={() => setAboutHover(false)}
                  style={{
                    textDecoration: "none",
                    color: aboutHover ? NAVY : STONE,
                    background: aboutHover ? "#f3f4f6" : "transparent",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    borderRadius: 6,
                    display: "block",
                    transition: "all 0.15s ease",
                  }}
                >
                  About Us
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li
                style={{ position: "relative" }}
                onMouseEnter={() => {
                  setMenuOpen(true);
                  setProgramHover(true);
                }}
                onMouseLeave={() => {
                  setMenuOpen(false);
                  setProgramHover(false);
                }}
              >
                <div
                  style={{
                    color: programHover ? NAVY : STONE,
                    background: programHover
                      ? "#f3f4f6"
                      : "transparent",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    borderRadius: 6,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  Programs
                </div>

                {menuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "#fff",
                      border: `1px solid ${BORDER}`,
                      minWidth: 280,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      borderRadius: 6,
                      overflow: "hidden",
                      zIndex: 999,
                    }}
                  >
                    <HoverDropdownItem
                      to="/business-analyst"
                      text="Business Analyst Program"
                    />

                    <HoverDropdownItem
                      to="/cyber-security"
                      text="Cybersecurity Program"
                    />

                    <HoverDropdownItem
                      to="/project-management"
                      text="Project Management Program"
                    />

                    <HoverDropdownItem
                      to="/data-science"
                      text="Data Science, AI, and ML Program"
                    />
                  </div>
                )}
              </li>

              {/* CTA */}
              <li>
                <Link
                  to="/"
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                  style={{
                    background: ctaHover ? "#1e293b" : NAVY,
                    color: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "10px 22px",
                    borderRadius: 4,
                    textDecoration: "none",
                    marginLeft: 10,
                    display: "block",
                    transition: "all 0.15s ease",
                    transform: ctaHover
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  }}
                >
                  Speak to an Advisor
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <ul
            style={{
              listStyle: "none",
              padding: "10px 0 20px",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              <Link to="/" style={mobileLink}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about-us" style={mobileLink}>
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/business-analyst"
                style={mobileLink}
              >
                Business Analyst Program
              </Link>
            </li>

            <li>
              <Link
                to="/cyber-security"
                style={mobileLink}
              >
                Cybersecurity Program
              </Link>
            </li>

            <li>
              <Link
                to="/project-management"
                style={mobileLink}
              >
                Project Management Program
              </Link>
            </li>

            <li>
              <Link
                to="/data-science"
                style={mobileLink}
              >
                Data Science, AI, and ML Program
              </Link>
            </li>

            <li>
              <Link
                to="/"
                style={{
                  background: NAVY,
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 20px",
                  borderRadius: 4,
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: 10,
                }}
              >
                Speak to an Advisor
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

function HoverDropdownItem({ to, text }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        padding: "14px 18px",
        textDecoration: "none",
        color: hover ? "white" : NAVY,
        background: hover ? NAVY : "white",
        fontSize: 14,
        fontWeight: 500,
        borderBottom: `1px solid ${BORDER}`,
        transition: "all 0.15s ease",
      }}
    >
      {text}
    </Link>
  );
}

const mobileLink = {
  textDecoration: "none",
  color: NAVY,
  fontSize: 14,
  fontWeight: 500,
  padding: "10px 0",
  display: "block",
};