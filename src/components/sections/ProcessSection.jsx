import { useState, useEffect } from "react";
import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { PROCESS_STEPS } from "../../data/content";
import { Eyebrow, DisplayH2 } from "../ui";

/* Import Background Image */
import processBg from "../../assets/process-bg.jpg";

export default function ProcessSection() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section
      id="process"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "60px 0" : "88px 0",

        /* Background Image */
        backgroundImage: `
          linear-gradient(
    rgba(0, 0, 0, 0.78),
    rgba(0, 0, 0, 0.82)
  ),
          url(${processBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...gridBg,
          pointerEvents: "none",
        }}
      />

      {/* Wrapper */}
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Eyebrow label="Our Approach" dark />

        <DisplayH2 light>
          From Enrolment to
          <br />
          Offer Letter —{" "}
          <em style={{ fontStyle: "italic", color: GOLD }}>
            Step by Step.
          </em>
        </DisplayH2>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "1fr 1fr"
              : "repeat(4, 1fr)",

            gap: 0,
            marginTop: isMobile ? 40 : 60,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: isMobile
                  ? "32px 0"
                  : `40px ${
                      i < PROCESS_STEPS.length - 1 ? "36px" : "0"
                    } 40px ${
                      i > 0 ? "36px" : "0"
                    }`,

                borderRight:
                  !isMobile &&
                  !isTablet &&
                  i < PROCESS_STEPS.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : isTablet && i % 2 === 0
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",

                borderBottom:
                  isMobile && i < PROCESS_STEPS.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",

                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {/* Big Number */}
              <div
                style={{
                  fontFamily:
                    "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? 40 : 48,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.07)",
                  lineHeight: 1,
                  marginBottom: -8,
                  letterSpacing: "-2px",
                }}
              >
                {s.num}
              </div>

              {/* Gold Dot */}
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: GOLD,
                  marginBottom: 4,
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily:
                    "'Playfair Display', Georgia, serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                  letterSpacing: "-0.3px",
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}