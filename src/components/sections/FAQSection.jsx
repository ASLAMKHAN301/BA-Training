import { useState } from "react";
import bottomctaBg from "../../assets/bottomctaBg.jpg";

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const C = {
  navy: "#000000",
  navyMid: "#1A1A1A",
  gold: "#C9A84C",
  goldLt: "#F5EDD6",
  cream: "#FAF8F3",
  white: "#FFFFFF",
  ink: "#1C1C1C",
  mist: "#F0EDE6",
  stone: "#7A7060",
  border: "#E2DDD4",
  hl: "#B8540A",
};

/* ─── Shared atoms ───────────────────────────────────────────────────────────── */
const Wrap = ({ children, className = "" }) => (
  <div
    className={`max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] ${className}`}
  >
    {children}
  </div>
);

const Eyebrow = ({ label, dark = false, center = false }) => (
  <div
    className={`inline-flex items-center gap-2.5 mb-4 ${center ? "justify-center" : ""}`}
  >
    <div
      className="w-7 h-px flex-shrink-0"
      style={{ background: dark ? "rgba(201,168,76,0.5)" : C.gold }}
    />
    <span
      className="text-[11px] font-semibold tracking-[2.5px] uppercase"
      style={{ color: C.gold }}
    >
      {label}
    </span>
  </div>
);

const Display = ({ children, light = false, className = "" }) => (
  <h2
    className={`font-bold leading-[1.12] tracking-tight ${className}`}
    style={{
      fontFamily: "'Playfair Display',Georgia,serif",
      fontSize: "clamp(26px,3.5vw,44px)",
      color: light ? "#fff" : C.navy,
    }}
  >
    {children}
  </h2>
);

const Em = ({ children }) => (
  <em style={{ color: C.gold, fontStyle: "italic" }}>{children}</em>
);
const Hl = ({ children }) => (
  <strong style={{ color: C.hl, fontWeight: 700 }}>{children}</strong>
);

const Lead = ({ children, light = false, className = "" }) => (
  <p
    className={`text-base leading-[1.75] font-light max-w-[540px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}
  >
    {children}
  </p>
);

const LogoMark = ({ size = 34 }) => (
  <div
    className="flex items-center justify-center flex-shrink-0 rounded-sm"
    style={{ width: size, height: size, background: C.navy }}
  >
    <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
      <rect x="2" y="2" width="6" height="6" rx="1" fill={C.gold} />
      <rect
        x="10"
        y="2"
        width="6"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.4)"
      />
      <rect
        x="2"
        y="10"
        width="6"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.4)"
      />
      <rect
        x="10"
        y="10"
        width="6"
        height="6"
        rx="1"
        fill="rgba(255,255,255,0.2)"
      />
    </svg>
  </div>
);

const GridBg = ({ opacity = 0.05, size = 60 }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(rgba(201,168,76,${opacity}) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,${opacity}) 1px,transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }}
  />
);

const Stars = () => (
  <div className="flex gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 12 12" width="13" height="13" fill={C.gold}>
        <path d="M6 1l1.5 3L11 4.5l-2.5 2.4.6 3.4L6 8.6l-3.1 1.7.6-3.4L1 4.5 4.5 4z" />
      </svg>
    ))}
  </div>
);

const GoldCheckPill = () => (
  <span
    className="inline-flex flex-shrink-0 items-center justify-center w-4 h-4 rounded-full border"
    style={{ background: "rgba(201,168,76,0.15)", borderColor: C.gold }}
  >
    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
    </svg>
  </span>
);

const secPy = "py-16 md:py-[88px]";


export default function FAQSection() {
  const pills = [
    "Max 10 per batch",
    "Active industry trainers",
    "Real project deliverables",
    "Placement until placed",
    "17 years of outcomes",
  ];
  return (
    <section
      id="enrol"
      className="relative overflow-hidden"
      style={{ background: C.navy ,
        backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${bottomctaBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
      }}
    >
      <GridBg opacity={0.05} />
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: C.gold }}
      />
      <Wrap>
        <div className="relative z-10 py-16 sm:py-[88px] text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 justify-center">
            <div
              className="w-7 h-px flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.5)" }}
            />
            <span
              className="text-[11px] font-semibold tracking-[2.5px] uppercase"
              style={{ color: C.gold }}
            >
              Ready to Build Your Career in Tech?
            </span>
          </div>

          <h2
            className="font-bold text-white leading-[1.1] tracking-[-1px] mb-5"
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(28px,4vw,52px)",
            }}
          >
            Small Batches.
            <br />
            Industry Practitioners.
            <br />
            <em style={{ color: C.gold }}>Real Project Work from Day One.</em>
          </h2>

          <p
            className="text-[15px] sm:text-[16px] leading-[1.7] font-light mb-12 mx-auto max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            One conversation with a working professional from our team is all it
            takes to know whether CodersBloom is the right move for you. No
            obligation. No pressure. Just honesty.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
            {pills.map((p) => (
              <span
                key={p}
                className="flex items-center gap-2.5 text-[12px] sm:text-[13px]"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <GoldCheckPill />
                {p}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href="#"
              className="inline-block text-[14px] font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm no-underline transition-colors duration-150"
              style={{
                background: C.gold,
                color: C.navy,
                letterSpacing: "0.2px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#d4b060")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
            >
              Book a Free Counselling Call
            </a>
            <a
              href="#"
              className="inline-block text-[14px] font-medium px-7 sm:px-8 py-3.5 sm:py-4 rounded-sm no-underline border transition-colors duration-150"
              style={{
                color: "rgba(255,255,255,0.7)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              Explore All Programmes
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
};
