import {
  NAVY,
  GOLD,
  MIST,
  BORDER,
  STONE,
} from "../../constants/theme";

import { TRUST_ITEMS } from "../../data/content";

function StarIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill={GOLD}
    >
      <polygon points="6.5,1 8,5 12.5,5 9,8 10.5,13 6.5,10 2.5,13 4,8 0.5,5 5,5" />
    </svg>
  );
}

export default function TrustStrip() {
  return (
    <section
      style={{
        background: MIST,
        borderBottom: `1px solid ${BORDER}`,
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Heading */}
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: STONE,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Why CodersBloom
        </span>

        {/* Trust Items */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "white",
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                padding: "16px 18px",
                minHeight: 72,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: NAVY,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <StarIcon />
              </div>

              {/* Text */}
              <strong
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: NAVY,
                  lineHeight: 1.5,
                }}
              >
                {item}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}