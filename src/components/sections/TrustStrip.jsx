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
    className={`inline-flex items-center gap-2.5 mb-4 ${center ? "justify-center w-full" : ""}`}
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

const Lead = ({ children, light = false, className = "" }) => (
  <p
    className={`text-base leading-[1.75] font-light max-w-[520px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}
  >
    {children}
  </p>
);

const GoldCheck = () => (
  <span
    className="inline-flex flex-shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full border mt-[2px]"
    style={{ background: "rgba(201,168,76,0.15)", borderColor: C.gold }}
  >
    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
    </svg>
  </span>
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

const secPy = "py-16 md:py-[88px]";

/* shared input style helper */
const inputStyle = (err) => ({
  background: C.cream,
  borderColor: err ? C.gold : C.border,
  color: C.ink,
  fontFamily: "'Outfit',sans-serif",
  borderRadius: "2px",
  fontSize: "14px",
  outline: "none",
  width: "100%",
  padding: "11px 14px",
  border: "1px solid",
  appearance: "none",
});

export default function  TrustStrip () {
  const companies = [
    {
      name: "ICICI Bank",
      sector: "Banking",
      logo: (
        <img
          src="https://e7.pngegg.com/pngimages/988/978/png-clipart-icici-bank-logo-thumbnail-bank-logos-thumbnail.png"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Bajaj Allianz",
      sector: "Insurance",
      logo: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dBGBxGxlv32ru2f2G1QiH2oTv7VL_T0bzw&s"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Apollo Hospitals",
      sector: "Healthcare",
      logo: (
        <img
          src="https://thumbnail.imgbin.com/13/1/14/imgbin-apollo-hospitals-city-centre-apollo-hospital-indraprastha-health-care-hospital-rREpSfLCiSpmaYWSwtDsi4qAz_t.jpg"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Wipro",
      sector: "Technology",
      logo: (
        <img
          src="https://static.vecteezy.com/system/resources/previews/075/561/491/non_2x/wipro-glossy-logo-transparent-background-free-png.png"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Razorpay",
      sector: "Fintech",
      logo: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EvJxYike5wLY78TG6Nr5s5f6_mwOFmf4Bw&s"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Max Life",
      sector: "Insurance",
      logo: (
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR6Q5tn_dfh_YYlDv0VsT6QbYA9AFGqcecfSVoVte8UXyhrJRQ9HqEAe1ly-8JLglHwWiFJNZ36jt2-a2pXWtvd2yQk35ph3iZqSsI4blsTeSGqCRQTGgOuIEDB5JL3JdYx86C6yes_Vv4/s1600/max-life-insurance.jpg"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Infosys",
      sector: "Technology",
      logo: (
        <img
          src="https://w7.pngwing.com/pngs/687/655/png-transparent-infosys-logo.png"
          alt=""
          srcset=""
        />
      ),
    },
    {
      name: "Capgemini",
      sector: "Consulting",
      logo: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKr5vvxXgNUB3XWwp3zY_WvJvYq7KAX2fXA&s"
          alt=""
          srcset=""
        />
      ),
    },
  ];
  const items = [...companies, ...companies];

  return (
    <div
      className="border-b relative"
      style={{ background: C.mist, borderColor: C.border }}
    >
      <style>{`
        @keyframes marquee-ba { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @media(prefers-reduced-motion:reduce){.ba-track{animation-play-state:paused!important}}
        .ba-wrap:hover .ba-track{animation-play-state:paused}
      `}</style>
      <div className="flex items-stretch" style={{ height: 52 }}>
        <div
          className="flex-shrink-0 flex items-center px-4 sm:px-6 lg:px-[60px] z-10 border-r"
          style={{
            background: C.mist,
            borderColor: C.border,
            boxShadow: `6px 0 12px 0 ${C.mist}`,
          }}
        >
          <span
            className="text-[10px] font-bold tracking-[2px] uppercase whitespace-nowrap"
            style={{ color: C.stone }}
          >
            Trained &amp; Placed In
          </span>
        </div>
        <div
          className="ba-wrap flex-1 overflow-hidden relative"
          style={{
            maskImage:
              "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)",
          }}
        >
          <div
            className="ba-track flex items-center h-full"
            style={{
              width: "max-content",
              animation: "marquee-ba 28s linear infinite",
            }}
          >
            {items.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 sm:px-6 h-full whitespace-nowrap"
                style={{ borderRight: `1px solid ${C.border}` }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0">
                  {c.logo}{" "}
                </div>
                <strong
                  className="text-[12px] sm:text-[13px] font-semibold"
                  style={{ color: C.navy }}
                >
                  {c.name}
                </strong>
                <span
                  className="text-[11px] hidden sm:inline"
                  style={{ color: C.stone }}
                >
                  {c.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};