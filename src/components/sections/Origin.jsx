import { useState } from "react";
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
    className={`px-5 sm:px-8 lg:px-[105px] ${className}`}
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

export default function Origin () {
  const reality = [
    {
      before: "They could define Agile.",
      after: "They couldn't survive a sprint planning meeting.",
    },
    {
      before: "They had learned SQL.",
      after: "They had never solved a real business problem with data.",
    },
    {
      before: "They understood security frameworks.",
      after: "They had never triaged a live vulnerability.",
    },
    {
      before: "They knew project methodology.",
      after: "They had never recovered a plan that was already behind.",
    },
  ];
  return (
    <section
      id="origin"
      className={`${secPy} border-b`}
      style={{ background: C.white, borderColor: C.border }}
    >
      <Wrap>
        <div className="max-w-[1160px] grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-[100px] items-start" >
          {/* LEFT — sticky on desktop */}
          <div className="lg:sticky lg:top-[88px]">
            {/* Year */}
            <div
              className="font-bold leading-[0.85] tracking-[-4px] mb-6 select-none"
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontSize: "clamp(80px,10vw,120px)",
                color: C.mist,
              }}
            >
              2009
            </div>

            <div className="mb-8">
              <span
                className="block text-[13px] font-bold tracking-[1.5px] uppercase mb-1"
                style={{ color: C.navy }}
              >
                Hyderabad, Telangana
              </span>
              <span
                className="text-[13px] font-light"
                style={{ color: C.stone }}
              >
                India's fastest-growing technology &amp; startup ecosystem
              </span>
            </div>

            {/* Dot line */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: C.gold }}
              />
              <div className="flex-1 h-px" style={{ background: C.border }} />
            </div>

            {/* Aside box */}
            <div
              className="relative overflow-hidden rounded p-6 sm:p-7"
              style={{ background: C.navy }}
            >
              <GridBg opacity={0.06} size={30} />
              <div className="relative z-10">
                <div
                  className="text-[10px] font-bold tracking-[2px] uppercase mb-3"
                  style={{ color: C.gold }}
                >
                  Still True Today
                </div>
                <p
                  className="text-[13px] leading-[1.7] font-light"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Seventeen years and 2,000+ successful career transitions
                  later, the philosophy remains unchanged. We still train people
                  the way we'd want our own teams trained.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="pt-1 sm:pt-2">
            <Eyebrow label="Our Origin" />
            <Display className="mb-8">
              Why CodersBloom
              <br />
              <Em>Was Built.</Em>
            </Display>

            <div
              className="flex flex-col gap-5 text-[15px] sm:text-[16px] leading-[1.85] font-light"
              style={{ color: C.stone }}
            >
              <p>
                CodersBloom began as an <Hl>internal upskilling initiative</Hl>.
                inside a working consulting practice. Our teams were delivering projects across business analysis, cybersecurity, project management, data science, and AI — and we kept running into the same problem:{" "}
                <Hl>
                  candidates who understood concepts but struggled the moment they entered a real project environment.
.
                </Hl>
              </p>

              {/* Reality comparison table */}
              <div
                className="flex flex-col my-2"
                style={{
                  borderTop: `1px solid ${C.border}`,
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                {reality.map((r, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-0 py-4 sm:py-5"
                    style={{
                      borderBottom:
                        i < reality.length - 1
                          ? `1px solid ${C.border}`
                          : "none",
                    }}
                  >
                    {/* Before */}
                    <div
                      className="flex items-start gap-3 text-[14px] font-light pb-3 sm:pb-0 sm:pr-6"
                      style={{
                        color: C.stone,
                        borderBottom: "1px solid " + C.border,
                        borderRight: "none",
                      }}
                      /* sm border-right handled via className override below */
                    >
                      <span className="text-[16px] leading-none mt-0.5 flex-shrink-0">
                        📖
                      </span>
                      <span className="sm:border-r sm:border-[#E2DDD4]">
                        {r.before}
                      </span>
                    </div>
                    {/* After */}
                    <div
                      className="flex items-start gap-3 text-[14px] font-medium pt-3 sm:pt-0 sm:pl-6"
                      style={{ color: C.navy }}
                    >
                      <span className="text-[16px] leading-none mt-0.5 flex-shrink-0">
                        ⚡
                      </span>
                      {r.after}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote
                className="text-[19px] sm:text-[22px] font-serif italic leading-[1.55] my-2 pl-5 sm:pl-6"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: C.navy,
                  borderLeft: `3px solid ${C.gold}`,
                }}
              >
                "So we built our own training to close that gap."
              </blockquote>

              <p>
                First for our own consultants, then opened it to outside professionals once people around us saw the difference.
              </p>
              <p>
                Every CodersBloom trainer is{" "}
                <Hl>
                  an active practitioner from our own consulting ecosystem
                </Hl>{" "}
                — not a full-time instructor teaching from slides. Every project participants work through is drawn from{" "}
                <Hl>real business problems, not classroom simulations.</Hl>  And every batch stays intentionally small — because the kind of{" "}
                <Hl>transformation we're talking about doesn't happen in a crowded room.</Hl>
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
};