import { useState } from "react";
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

export default function Four() {
  const [hov, setHov] = useState(null);
  const cards = [
    {
      num: "01",
      title: "Maximum 10 Per Batch",
      dark: false,
      body: [
        <>
          Most training providers <Hl>optimise for volume</Hl>. We optimise for
          outcomes.
        </>,
        <>
          We cap every batch at ten participants. This isn't a marketing line —{" "}
          <Hl>it's a structural decision</Hl>. Smaller batches allow trainers to
          track progress deeply, correct mistakes early, and mentor every
          participant individually.
        </>,
        <>
          <Hl>
            A trainer with ten learners can shape careers. A trainer with fifty
            cannot.
          </Hl>
        </>,
      ],
    },
    {
      num: "02",
      title: "Trainers Who Do the Job",
      dark: false,
      body: [
        <>
          Every CodersBloom trainer is <Hl>actively working in the industry</Hl>{" "}
          — as a Project Manager, Data Scientist, Business Analyst, or
          Cybersecurity Professional.
        </>,
        <>
          They teach <Hl>what they solved last week</Hl>, not what they
          memorised years ago.
        </>,
        <>
          When you ask about stakeholder conflicts, production failures, sprint
          bottlenecks, or deployment issues, they have{" "}
          <Hl>real stories, not theoretical answers</Hl>. That changes
          everything.
        </>,
      ],
    },
    {
      num: "03",
      title: "Real Project Work",
      dark: false,
      body: [
        <>
          Participants work on{" "}
          <Hl>actual projects from our consulting and client ecosystem</Hl>.
        </>,
        <>
          You build real deliverables — dashboards, APIs, BRDs, automation
          workflows, cloud deployments, SQL solutions, UAT scenarios, product
          documentation, and more.{" "}
          <Hl>Not dummy assignments. Not recycled classroom exercises.</Hl>
        </>,
        <>
          Work you can confidently discuss in interviews{" "}
          <Hl>because you actually built it</Hl>. This is one of the biggest
          reasons our placement outcomes are what they are.
        </>,
      ],
    },
    {
      num: "04",
      title: "Placement Until Placed",
      dark: true,
      body: [
        <>
          Getting you placed matters as much as training you. We've built a
          placement system that goes far beyond issuing a certificate.{" "}
          <span style={{ color: C.gold, fontWeight: 700 }}>
            We guarantee interviews — the offer letter is yours to earn.
          </span>
        </>,
        <>
          Before every interview, we work with you closely — understanding the
          company, the role, the expectations, and preparing you specifically
          for that opportunity. After every interview, we debrief, identify what
          worked and what didn't, and{" "}
          <span style={{ color: C.gold, fontWeight: 700 }}>
            strengthen your approach before the next one.
          </span>
        </>,
        <>
          <span style={{ color: C.gold, fontWeight: 700 }}>
            Most institutes stop at mock interviews. We stay with you through
            real interviews until you break through.
          </span>{" "}
          We refine your resume, position your profile strategically, and
          directly market you to our recruiter and hiring network.
        </>,
      ],
    },
  ];

  return (
    <section
      id="model"
      className={`${secPy} border-b`}
      style={{ background: C.cream, borderColor: C.border }}
    >
      <Wrap>
        <div className="max-w-[1160px] mb-12 sm:mb-16">
          <Eyebrow label="Our Model" />
          <Display className="mt-1 max-w-[640px]">
            Four Things That Make
            <br />
            <Em>CodersBloom Different.</Em>
          </Display>
        </div>
        {/* 1→2 col grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative overflow-hidden flex flex-col p-8 sm:p-10 lg:p-12 transition-colors duration-200 cursor-default"
              style={{
                background:
                  hov === i
                    ? c.dark
                      ? C.navyMid
                      : C.cream
                    : c.dark
                      ? C.navy
                      : C.white,
              }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                style={{
                  background: C.gold,
                  transform: hov === i ? "scaleX(1)" : "scaleX(0)",
                }}
              />
              {/* Large number */}
              <div
                className="font-bold leading-none tracking-[-3px] mb-6"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  fontSize: 80,
                  color: c.dark ? "rgba(201,168,76,0.3)" : C.mist,
                }}
              >
                {c.num}
              </div>
              <div
                className="font-bold text-[22px] sm:text-[26px] tracking-[-0.5px] leading-[1.15] mb-5"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: c.dark ? "#fff" : C.navy,
                }}
              >
                {c.title}
              </div>
              <div className="flex flex-col gap-4">
                {c.body.map((p, j) => (
                  <p
                    key={j}
                    className="text-[14px] sm:text-[15px] leading-[1.8] font-light"
                    style={{
                      color: c.dark ? "rgba(255,255,255,0.5)" : C.stone,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};