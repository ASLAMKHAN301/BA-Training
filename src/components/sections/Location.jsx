import { useState } from "react";
import locationBg from "../../assets/ofspace-llc-pG_ke9wE4sQ-unsplash.jpg";

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

/* ══════════════════════════════════════════════════════════════════════════════
   LOCATIONS
══════════════════════════════════════════════════════════════════════════════ */
export default function Locations() {
  const [hovCity, setHovCity] = useState(null);
  const cities = [
    "Hyderabad",
    "Bangalore",
    "Pune",
    "Mumbai",
    "Chennai",
    "Noida",
    "Gurgaon",
    "Ahmedabad",
    "Kochi",
    "Vizag",
    "Coimbatore",
    "Chandigarh",
    "Jaipur",
    "Kolkata",
    "Indore",
    "Trivandrum",
    "New Delhi",
  ];
  return (
    <section
      id="locations"
      className={`relative overflow-hidden ${secPy} border-b`}
      style={{
        background: C.navy,
        borderColor: "rgba(255,255,255,0.05)",
        backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.82),
              rgba(0,0,0,0.88)
            ),
            url(${locationBg})
          `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
      }}
    >
      <GridBg opacity={0.05} />
      <Wrap className="max-w-[1160px] relative z-10">
        <Eyebrow label="Where We Operate" dark />
        <Display light className="mt-1">
          Training Across
          <br />
          <Em>India's Major Tech Cities.</Em>
        </Display>

        {/* 1→2 col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-[80px] items-start mt-10 sm:mt-14">
          {/* HQ Card */}
          <div
            className="relative overflow-hidden rounded p-7 sm:p-9"
            style={{ background: C.gold }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <div
                className="text-[10px] font-bold tracking-[2.5px] uppercase mb-3.5"
                style={{ color: "rgba(0,0,0,0.45)" }}
              >
                Headquarters
              </div>
              <div
                className="font-bold leading-none tracking-[-1px] mb-2"
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  fontSize: "clamp(28px,3vw,36px)",
                  color: C.navy,
                }}
              >
                Hyderabad
              </div>
              <div
                className="text-[13px] leading-[1.5] mb-5"
                style={{ color: "rgba(0,0,0,0.55)" }}
              >
                Hitech City, Hyderabad, Telangana
                <br />
                India's fastest-growing technology and startup ecosystem
              </div>
              <div
                className="inline-flex items-center gap-2 rounded-sm px-3.5 py-1.5 border text-[12px] font-semibold"
                style={{
                  background: "rgba(0,0,0,0.1)",
                  borderColor: "rgba(0,0,0,0.15)",
                  color: C.navy,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: C.navy }}
                />
                Primary Training Hub
              </div>
            </div>
          </div>

          {/* Cities grid */}
          <div className="pt-1">
            <div
              className="text-[10px] font-bold tracking-[2px] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Training Cities Across India
            </div>
            <div className="flex flex-wrap gap-2.5">
              {cities.map((city) => {
                const isHQ = city === "Hyderabad";
                const isHov = hovCity === city;
                return (
                  <span
                    key={city}
                    className="text-[12px] sm:text-[13px] font-medium px-3.5 sm:px-4 py-2 rounded-sm border cursor-default transition-all duration-150"
                    style={{
                      color: isHQ
                        ? C.gold
                        : isHov
                          ? "#fff"
                          : "rgba(255,255,255,0.7)",
                      background: isHQ
                        ? "rgba(201,168,76,0.15)"
                        : isHov
                          ? "rgba(201,168,76,0.12)"
                          : "rgba(255,255,255,0.06)",
                      borderColor: isHQ
                        ? "rgba(201,168,76,0.35)"
                        : isHov
                          ? "rgba(201,168,76,0.3)"
                          : "rgba(255,255,255,0.1)",
                      fontWeight: isHQ ? 600 : 500,
                    }}
                    onMouseEnter={() => setHovCity(city)}
                    onMouseLeave={() => setHovCity(null)}
                  >
                    {city}
                  </span>
                );
              })}
            </div>
            <div
              className="mt-8 pt-7"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="text-[13px] leading-[1.7] font-light max-w-[440px]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                All programmes are available online with live instructor-led
                sessions, making location secondary. In-person attendance is
                available at our Hyderabad headquarters and selected partner
                locations.
              </p>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
};