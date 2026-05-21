import { GOLD, NAVY, gridBg } from "../../constants/theme";
import { CTA_CHECKLIST } from "../../data/content";
import { SectionContainer, CheckIcon } from "../ui";
import BookingForm from "../ui/BookingForm";

/* Background Image */
import bgImage from "../../assets/annie-spratt.jpg";

export default function BottomCTA() {
  return (
    <section
      id="enrol"
      style={{
        position: "relative",
        overflow: "hidden",

        /* Background Image */
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

      {/* Bottom Gold Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: GOLD,
        }}
      />

      <SectionContainer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 20px",
        }}
      >
        <div
          style={{
            padding: "clamp(60px, 10vw, 100px) 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "clamp(40px, 8vw, 80px)",
            alignItems: "center",
          }}
        >
          <CTACopy />

          {/* Form */}
          <div
            style={{
              width: "100%",
              maxWidth: 480,
              justifySelf: "center",
            }}
          >
            <BookingForm light />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function CTACopy() {
  return (
    <div style={{ maxWidth: 520 }}>
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.12,
          letterSpacing: "-0.8px",
          marginBottom: 16,
        }}
      >
        One Conversation
        <br />
        Can Change Your{" "}
        <em
          style={{
            fontStyle: "italic",
            color: GOLD,
          }}
        >
          Career.
        </em>
      </h2>

      <p
        style={{
          fontSize: "clamp(14px, 1.5vw, 15px)",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: 32,
        }}
      >
        Our advisors are working professionals who have been exactly where you are.
        No scripts, no hard sell — just honest guidance about which path is right
        for you and your goals.
      </p>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          padding: 0,
          margin: 0,
        }}
      >
        {CTA_CHECKLIST.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              fontSize: 14,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.4,
            }}
          >
            <div style={{ marginTop: 2 }}>
              <CheckIcon />
            </div>

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}