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
      title: "No More Than 10 Per Batch",
      dark: false,
      body: [
        <>
          Most programs are <Hl>built to scale.</Hl> Ours is built to work.
        </>,
        <>
          Every batch is capped at ten participants — <Hl>not as a selling point</Hl>, but as a deliberate design choice. When the group is this small, trainers can track where each person is struggling, step in before bad habits form, and give everyone the kind of attention that actually moves the needle.
        </>,
        <>
          <Hl>
            Ten learners and a great mentor can change the trajectory of ten careers. Fifty cannot.
          </Hl>
        </>,
      ],
    },
    {
      num: "02",
      title: "Practitioners, Not Presenters",
      dark: false,
      body: [
        <>
          Every person who teaches at CodersBloom is <Hl>actively employed in the field </Hl>{" "}
          — as a Project Manager, Data Scientist, Business Analyst, or
          Cybersecurity Professional.
        </>,
        <>
          They're not drawing on what they studied. They're <Hl>drawing on what they dealt with last week.</Hl>
        
        </>,
        <>
          Ask about a difficult stakeholder, a system that broke in production, a sprint that went sideways, or a deployment that nearly failed, they won't give you a textbook answer. They'll give you the story. That {" "}
          <Hl>difference is felt immediately, and it compounds over the entire program.</Hl>
        </>,
      ],
    },
    {
      num: "03",
      title: "Work That's Actually Real",
      dark: false,
      body: [
        <>
          Participants don't work on simulations, they work on {" "}
          <Hl>live projects pulled from our consulting and client engagements.
</Hl>.
        </>,
        <>
          The deliverables are genuine — dashboards, APIs, business requirement documents, automation workflows, cloud deployments, data solutions, UAT scenarios, product documentation, and more. {" "}
          <Hl>Nothing recycled. Nothing invented for the classroom.</Hl>
        </>,
        <>
          By the end, you're not describing what you learned, {" "}
          <Hl>you're describing what you built.</Hl> That's why our participants walk into interviews with a confidence most candidates can't fake.
        </>,
      ],
    },
    {
      num: "04",
      title: "We Stay Until You Land",
      dark: true,
      body: [
        <>
          Placing you isn't an afterthought, it's treated with the same seriousness as the training itself. We don't hand you a certificate and wish you luck. {" "}
          <span style={{ color: C.gold, fontWeight: 700 }}>
            We guarantee interviews, and we work alongside you until one of them converts.
          </span>
        </>,
        <>
          Before each interview, we go deep — researching the company, understanding the role, and preparing you specifically for that conversation. After each interview, we debrief honestly, identify what held you back, and {" "}
          <span style={{ color: C.gold, fontWeight: 700 }}>
            sharpen your approach before the next one.
          </span>
        </>,
        <>
          <span style={{ color: C.gold, fontWeight: 700 }}>
            Most programs stop at rehearsal. We're in it through the real thing. 
          </span>{" "}
          Refining how you present yourself, positioning your profile with intent, and putting you directly in front of the recruiters and hiring managers in our network.
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