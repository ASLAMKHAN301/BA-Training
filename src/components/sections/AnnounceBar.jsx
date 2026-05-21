import { NAVY, GOLD } from "../../constants/theme";

export default function AnnounceBar() {
  return (
    <div
      style={{
        background: NAVY, color: "rgba(255,255,255,0.8)",
        textAlign: "center", padding: "10px 24px",
        fontSize: 13, fontWeight: 400, letterSpacing: "0.2px",
      }}
    >
      Next intake opens{" "}
      <strong style={{ color: GOLD, fontWeight: 600 }}>June 2025</strong>
      {" "}— Enrolments closing soon.{" "}
      <a href="#enrol" style={{ color: "white", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}>
        Secure your place →
      </a>
    </div>
  );
}
