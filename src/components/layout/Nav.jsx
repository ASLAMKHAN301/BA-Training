import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { LogoMark } from "../ui";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        position: "sticky",
        top: 0,
        zIndex: 1000,
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
              {/* About Us */}
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: STONE,
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    display: "block",
                  }}
                >
                  About Us
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li
                style={{ position: "relative" }}
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <div
                  style={{
                    color: STONE,
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "8px 14px",
                    cursor: "pointer",
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
                    <Link
                      to="/business-analyst"
                      style={dropdownItem}
                    >
                      Business Analyst Program
                    </Link>

                    <Link
                      to="/cyber-security"
                      style={dropdownItem}
                    >
                      Cybersecurity Program
                    </Link>

                    <Link
                      to="/project-management"
                      style={dropdownItem}
                    >
                      Project Management Program
                    </Link>

                    <Link
                      to="/data-science"
                      style={dropdownItem}
                    >
                      Data Science, AI, and ML Program
                    </Link>
                  </div>
                )}
              </li>

              {/* CTA */}
              <li>
                <Link
                  to="/"
                  style={{
                    background: NAVY,
                    color: "white",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "10px 22px",
                    borderRadius: 4,
                    textDecoration: "none",
                    marginLeft: 10,
                    display: "block",
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

const dropdownItem = {
  display: "block",
  padding: "14px 18px",
  textDecoration: "none",
  color: NAVY,
  fontSize: 14,
  fontWeight: 500,
  borderBottom: `1px solid ${BORDER}`,
  transition: "0.2s",
};

const mobileLink = {
  textDecoration: "none",
  color: NAVY,
  fontSize: 14,
  fontWeight: 500,
  padding: "10px 0",
  display: "block",
};