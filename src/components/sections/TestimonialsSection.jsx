import { useState, useEffect } from "react";
import heroBg from "../../assets/ofspace-llc-I96XlMeU4oY-unsplash.jpg";

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

export default function TestimonialsSection() {
  const stats = [
    { n: "2,000+", l: "Careers Transformed" },
    { n: "17+", l: "Years Running" },
    { n: "Max 10", l: "Per Batch" },
    { n: ">5", l: "Interviews to Offer" },
    { n: "30 LPA", l: "Highest Salary Offered" },
    { n: "50+", l: "Companies Hired So Far" },
  ];
  return (
    <section
      className="relative overflow-hidden min-h-[560px] flex items-center"
      style={{
        background: C.navy,
        backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${heroBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: C.gold }}
      />
      <GridBg opacity={0.06} />
      {/* Large decorative "17" — desktop only */}
      <div
        className="absolute right-10 bottom-[-20px] select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: 340,
          fontWeight: 700,
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          letterSpacing: -20,
        }}
      >
        17
      </div>

      <Wrap className="relative z-10 py-[90px] sm:py-[110px]">
        <div className="inline-flex items-center gap-2.5 mb-7 sm:mb-8">
          <div
            className="w-8 h-px flex-shrink-0"
            style={{ background: C.gold }}
          />
          <span
            className="text-[10px] sm:text-[11px] font-semibold tracking-[2.5px] uppercase"
            style={{ color: C.gold }}
          >
            Who We Are
          </span>
        </div>

        <h1
          className="font-bold leading-[1.06] tracking-[-1.5px] mb-7 text-white"
          style={{
            fontFamily: "'Playfair Display',Georgia,serif",
            fontSize: "clamp(36px,5.5vw,72px)",
          }}
        >
          Where Industry Experts
          <br />
          Carve the Next Generation
          <br />
          of <em style={{ color: C.gold }}>Professionals.</em>
        </h1>

        <p
          className="text-[15px] sm:text-[17px] leading-[1.75] font-light mb-10 max-w-[620px]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          We established CodersBloom because we couldn't find the kind of
          training we would confidently hire from. So we created it ourselves —{" "}
          <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
            for working professionals, by working professionals.
          </strong>
        </p>

        {/* Stats row — wraps on mobile */}
        {/* <div
          className="flex flex-wrap gap-y-5 pt-8 sm:pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="pr-5 sm:pr-10 mr-5 sm:mr-10 pb-2 last:border-r-0 last:pr-0 last:mr-0"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
              }}
            >
              <div
                className="font-bold text-white leading-none mb-1.5"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  fontSize: "clamp(20px,2.5vw,36px)",
                  letterSpacing: "-1px",
                }}
              >
                {s.n}
              </div>
              <div
                className="text-[11px] sm:text-[12px] leading-[1.45]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div> */}
      </Wrap>
    </section>
  );
};
