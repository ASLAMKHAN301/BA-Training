import { useState, useEffect, useRef } from "react";
import { GOLD, NAVY, gridBg } from "../../constants/theme";
import {
  SUCCESS_TABS,
  SUCCESS_STORIES,
  COHORT_STATS,
} from "../../data/content";

import {
  Eyebrow,
  DisplayH2,
  SectionContainer,
} from "../ui";

/* Background Image */
import bgImage from "../../assets/redmind.jpg";
const infiniteStories = [
  ...SUCCESS_STORIES,
  ...SUCCESS_STORIES,
  ...SUCCESS_STORIES,
];

export default function SuccessSection() {
  const [activeTab] = useState("All Programs");
  const scrollRef = useRef(null);

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let animationId;

  // Start from middle copy
  const singleSetWidth = container.scrollWidth / 3;
  container.scrollLeft = singleSetWidth;

  const autoScroll = () => {
    container.scrollLeft += 1.5; // speed

    // Jab third copy ke paas pahunch jaaye,
    // middle copy me wapas le aao
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft = singleSetWidth;
    }

    animationId = requestAnimationFrame(autoScroll);
  };

  animationId = requestAnimationFrame(autoScroll);

  return () => cancelAnimationFrame(animationId);
}, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(48px, 8vw, 88px) 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.78),
            rgba(0, 0, 0, 0.82)
          ),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...gridBg,
          pointerEvents: "none",
        }}
      />

      <SectionContainer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 20px",
        }}
      >
        <Eyebrow label="Graduate Outcomes" dark />

        <DisplayH2 light>
          Real People.
          <br />
          Real{" "}
          <em
            style={{
              fontStyle: "italic",
              color: GOLD,
            }}
          >
            Transitions.
          </em>
        </DisplayH2>

        {/* Auto Scroll Cards */}
        <div
  ref={scrollRef}
  style={{
    display: "flex",
    gap: 20,
    overflow: "hidden",
    marginBottom: 28,
  }}
>
  {infiniteStories.map((s, index) => (
    <div
      key={index}
      style={{
        minWidth: "350px",
        maxWidth: "350px",
        flexShrink: 0,
      }}
    >
      <StoryCard story={s} />
    </div>
  ))}
</div>

        <CohortStats />
      </SectionContainer>
    </section>
  );
}

function StoryCard({ story: s }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 10,
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        backdropFilter: "blur(6px)",
        minHeight: 380,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "#1a1a1a",
            border: "2px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            color: GOLD,
            flexShrink: 0,
          }}
        >
          {s.initials}
        </div>

        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "white",
          }}
        >
          {s.name}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 14px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "white",
            }}
          >
            {s.from.company}
          </div>

          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {s.from.role}
          </div>
        </div>

        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M10 5l3 3-3 3"
            stroke={GOLD}
            strokeWidth="1.5"
          />
        </svg>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "white",
            }}
          >
            {s.to.company}
          </div>

          <div
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            {s.to.role}
          </div>
        </div>
      </div>

      <p
        style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {s.quote}
      </p>
    </div>
  );
}

function CohortStats() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: 52,
      }}
    >
      <div
        style={{
          fontFamily:
            "'Playfair Display', Georgia, serif",
          fontSize: "clamp(22px, 2.5vw, 32px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.15,
          letterSpacing: "-0.5px",
          marginBottom: 32,
        }}
      >
        How Your Avg Cohort Looks Like
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {COHORT_STATS.map((c) => (
          <div
            key={c.num}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10,
              padding: "28px 24px",
              backdropFilter: "blur(6px)",
            }}
          >
            <div
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
                fontSize: 44,
                fontWeight: 700,
                color: c.color,
                lineHeight: 1,
                letterSpacing: "-1px",
                marginBottom: 4,
              }}
            >
              {c.num}
            </div>

            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.4,
              }}
            >
              {c.lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}