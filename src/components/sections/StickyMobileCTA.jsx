import { GOLD, NAVY } from "../../constants/theme";

export default function StickyMobileCTA() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: NAVY,
        borderTop: `2px solid ${GOLD}`,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      {/* Text */}
      <p
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(255,255,255,0.75)",
          margin: 0,
          flex: 1,
          minWidth: 180,
          lineHeight: 1.5,
        }}
      >
        Free career counselling available
      </p>

      {/* Button */}
      <a
        href="#enrol"
        style={{
          background: GOLD,
          color: NAVY,
          fontSize: 13,
          fontWeight: 700,
          padding: "10px 18px",
          borderRadius: 6,
          textDecoration: "none",
          whiteSpace: "nowrap",
          textAlign: "center",
          flexShrink: 0,
        }}
      >
        Book Now →
      </a>
    </div>
  );
}