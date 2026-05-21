import { GOLD, NAVY, gridBg } from "../../constants/theme";

import {
  PLACEMENT_FEATURES,
  PLACEMENT_STATS,
} from "../../data/content";

import {
  Eyebrow,
  DisplayH2,
  SectionContainer,
} from "../ui";

// Background Image
import placementBg from "../../assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg";

export default function PlacementSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0px",

        /* Background Image */
        backgroundImage: `
          linear-gradient(
    rgba(0, 0, 0, 0.78),
    rgba(0, 0, 0, 0.82)
  ),
          url(${placementBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...gridBg,
          pointerEvents: "none",
        }}
      />

      {/* Optional Blur Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(2px)",
          background: "rgba(0,0,0,0.15)",
        }}
      />

      <SectionContainer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 20px",
        }}
      >
        {/* Responsive Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 50,
            alignItems: "center",
          }}
        >
          <PlacementLeft />
          <PlacementCard />
        </div>
      </SectionContainer>
    </section>
  );
}

function PlacementLeft() {
  return (
    <div>
      <Eyebrow label="Placement Support" dark />

      <DisplayH2 light>
        We Don't Stop at
        <br />
        <em
          style={{
            fontStyle: "italic",
            color: GOLD,
          }}
        >
          Graduation.
        </em>
      </DisplayH2>

      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.8,
          maxWidth: 520,
          fontWeight: 300,
          marginTop: 16,
          marginBottom: 40,
        }}
      >
        100% placement assistance means exactly that —
        dedicated, active support until you receive an
        offer.
      </p>

      {/* Features Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
        }}
      >
        {PLACEMENT_FEATURES.map((f) => (
          <div
            key={f.title}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                background: "rgba(201,168,76,0.12)",
                border:
                  "1px solid rgba(201,168,76,0.25)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill={GOLD}
              >
                <circle cx="11" cy="11" r="9" />
              </svg>
            </div>

            {/* Title */}
            <h4
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "white",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {f.title}
            </h4>

            {/* Description */}
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlacementCard() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 14,
        padding: "36px 28px",
        width: "100%",
        boxSizing: "border-box",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Top Label */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: GOLD,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Placement Track Record
      </div>

      {/* Heading */}
      <div
        style={{
          fontFamily:
            "'Playfair Display', Georgia, serif",
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.3,
          letterSpacing: "-0.5px",
          marginBottom: 30,
        }}
      >
        The numbers behind our{" "}
        <em
          style={{
            fontStyle: "italic",
            color: GOLD,
          }}
        >
          promise.
        </em>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 18,
          marginBottom: 30,
        }}
      >
        {PLACEMENT_STATS.map((s) => (
          <div
            key={s.num}
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "20px 16px",
            }}
          >
            <div
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
                fontSize: 30,
                fontWeight: 700,
                color: GOLD,
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {s.num}
            </div>

            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.5,
              }}
            >
              {s.lbl}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#enrol"
        style={{
          display: "block",
          textAlign: "center",
          background: GOLD,
          color: NAVY,
          fontSize: 14,
          fontWeight: 700,
          padding: "14px 20px",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Start Your Placement Journey →
      </a>
    </div>
  );
}