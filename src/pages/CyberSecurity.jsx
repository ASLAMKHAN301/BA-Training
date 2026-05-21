import { useState } from "react";
import heroBg from "../assets/christin-hume-mfB1B1s4sMc-unsplash.jpg";
import objectivesBg  from "../assets/ofspace-llc-VKdu4XuAIfM-unsplash.jpg";
import toolsBg  from "../assets/priscilla-du-preez-OEdkPaxYMXU-unsplash .jpg";
import whyUsBg  from "../assets/surface-CqQWt4a-XfY-unsplash.jpg";
import bottomCtaBg  from "../assets/syful-islam-sW1_Yx5b54k-unsplash.jpg";
import Nav from "../components/layout/Nav";

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const C = {
  navy:    "#000000",
  navyMid: "#1A1A1A",
  gold:    "#C9A84C",
  goldLt:  "#F5EDD6",
  cream:   "#FAF8F3",
  white:   "#FFFFFF",
  ink:     "#1C1C1C",
  mist:    "#F0EDE6",
  stone:   "#7A7060",
  border:  "#E2DDD4",
};

/* ─── Shared atoms ───────────────────────────────────────────────────────────── */

const Eyebrow = ({ label, dark = false }) => (
  <div className="inline-flex items-center gap-2.5 mb-4">
    <div className="w-7 h-px flex-shrink-0" style={{ background: dark ? "rgba(201,168,76,0.5)" : C.gold }} />
    <span className="text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: C.gold }}>{label}</span>
  </div>
);

const Display = ({ children, light = false, className = "" }) => (
  <h2 className={`font-bold leading-[1.12] tracking-tight ${className}`}
    style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,3.5vw,44px)", color: light ? "#fff" : C.navy }}>
    {children}
  </h2>
);

const Em = ({ children }) => <em style={{ color: C.gold, fontStyle: "italic" }}>{children}</em>;

const SectionLead = ({ children, light = false, className = "" }) => (
  <p className={`text-base leading-[1.75] font-light max-w-[520px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}>{children}</p>
);

const GoldCheck = () => (
  <span className="inline-flex flex-shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full border mt-[2px]"
    style={{ background: "rgba(201,168,76,0.12)", borderColor: C.gold }}>
    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
    </svg>
  </span>
);

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 12 12" width="13" height="13" fill={C.gold}>
        <path d="M6 1l1.5 3L11 4.5l-2.5 2.4.6 3.4L6 8.6l-3.1 1.7.6-3.4L1 4.5 4.5 4z" />
      </svg>
    ))}
  </div>
);

const LogoMark = ({ size = 34 }) => (
  <div className="flex items-center justify-center flex-shrink-0 rounded-sm"
    style={{ width: size, height: size, background: C.navy }}>
    <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
      <rect x="2" y="2" width="6" height="6" rx="1" fill={C.gold} />
      <rect x="10" y="2" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="2" y="10" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="10" y="10" width="6" height="6" rx="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  </div>
);

const GridOverlay = ({ opacity = 0.05 }) => (
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: `linear-gradient(rgba(201,168,76,${opacity}) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,${opacity}) 1px,transparent 1px)`,
    backgroundSize: "60px 60px",
  }} />
);

/* Shared horizontal padding wrapper */
const Wrap = ({ children, className = "" }) => (
  <div className={`max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] ${className}`}>{children}</div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   ANNOUNCE BANNER
══════════════════════════════════════════════════════════════════════════════ */
const AnnounceBanner = () => (
  <div className="text-center px-4 py-2.5 text-[12px] sm:text-[13px]"
    style={{ background: C.navy, color: "rgba(255,255,255,0.8)" }}>
    Next intake opens{" "}
    <strong className="font-semibold" style={{ color: C.gold }}>September 2025</strong>
    {" "}— Only 5 seats per batch.{" "}
    <a href="#enrol" className="text-white font-semibold underline underline-offset-[3px]">Secure your place →</a>
  </div>
);


/* ══════════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const stats = [
    { num: "28L+", lbl: "Highest Package" },
    { num: "1,400+", lbl: "Trained" },
    { num: "92%", lbl: "Placed" },
    { num: "120+", lbl: "Partners" },
  ];
  const features = [
    "Live sessions + lifetime LMS access",
    "2 real-world project implementations",
    "Industry certification prep included",
    "100% placement assistance",
    "Merit-based scholarships available",
  ];
  const overviewPoints = [
    { bold: "20 weeks", text: " of intensive, practitioner-led training" },
    { bold: "Batch size of 5", text: " — mentorship, not a lecture hall" },
    { bold: "Evenings & weekends", text: " — for working professionals" },
    { bold: "CEH, Security+, SOC Analyst", text: " certification alignment" },
    { bold: null, text: "Live labs on real infrastructure — not sandboxes" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: C.navy,
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
     }}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: C.gold }} />
      <GridOverlay opacity={0.06} />

      {/* Desktop: 2-col grid   Mobile: single column */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] relative z-10
                      grid grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-[60px]">

        {/* LEFT – always visible */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-8 h-px flex-shrink-0" style={{ background: C.gold }} />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: C.gold }}>
              Cybersecurity Professional Programme
            </span>
          </div>

          <h1 className="font-bold leading-[1.08] tracking-[-1px] mb-5 text-white"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,5vw,62px)" }}>
            Defend. Detect.<br />Respond. With<br />
            <em style={{ color: C.gold }}>Real Expertise.</em>
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
            {["Hands-On", "Threat-Focused", "Industry-Certified"].map((t) => (
              <span key={t} className="text-[11px] font-semibold tracking-[1.5px] uppercase flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.gold }} />{t}
              </span>
            ))}
          </div>

          <p className="text-[14px] sm:text-[15px] leading-[1.75] font-light mb-8 max-w-[500px]"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Build the skills to protect enterprise infrastructure, detect active threats, and respond to incidents — trained by security professionals working in the field today.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#enrol"
              className="inline-block text-[14px] font-bold px-6 py-3 rounded-sm no-underline transition-colors duration-150"
              style={{ background: C.gold, color: C.navy }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d4b060")}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}>
              Enroll Now
            </a>
            <a href="#curriculum"
              className="inline-block text-[14px] font-medium px-6 py-3 rounded-sm no-underline border transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
              Explore Curriculum
            </a>
          </div>

          {/* Stats – wrap on small screens */}
          <div className="flex flex-wrap gap-y-4 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i} className="pr-5 sm:pr-8 mr-5 sm:mr-8 last:border-r-0 last:pr-0 last:mr-0"
                style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(20px,2.5vw,32px)" }}>
                  {s.num}
                </div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL – desktop only */}
        <div className="hidden lg:flex flex-col gap-5 my-10 xl:my-12 relative z-10">
          {/* Price block */}
          <div className="relative overflow-hidden rounded p-7" style={{ background: C.gold }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            <div className="relative z-10">
              <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-2" style={{ color: "rgba(0,0,0,0.5)" }}>Programme Fee</div>
              <div className="text-lg font-semibold mb-1 line-through" style={{ color: "rgba(0,0,0,0.35)" }}>₹1,20,000</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-bold leading-none tracking-[-1.5px]"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 44, color: C.navy }}>₹89,999</span>
                <span className="text-[13px] font-medium mb-1.5" style={{ color: "rgba(0,0,0,0.5)" }}>/ full programme</span>
              </div>
              <div className="text-[13px] font-medium mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>
                Starting at <strong style={{ color: C.navy }}>₹7,500/month</strong> — zero-cost EMI
              </div>
              <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[13px] font-medium" style={{ color: "rgba(0,0,0,0.7)" }}>
                    <span className="inline-flex flex-shrink-0 items-center justify-center w-4 h-4 rounded-full border"
                      style={{ background: "rgba(0,0,0,0.12)", borderColor: "rgba(0,0,0,0.2)" }}>
                      <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
                        <polyline points="2,5 4.5,7.5 8,2.5" stroke="#000" strokeWidth="1.5" opacity="0.6" />
                      </svg>
                    </span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overview block */}
          <div className="bg-white rounded p-7" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
            <div className="font-bold text-[17px] tracking-[-0.3px] mb-1"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>Programme at a Glance</div>
            <div className="text-[12px] mb-4" style={{ color: C.stone }}>
              Everything you need to launch a cybersecurity career — in one structured programme.
            </div>
            <div className="flex flex-col gap-2.5">
              {overviewPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] leading-[1.55] font-light" style={{ color: C.stone }}>
                  <GoldCheck />
                  <span>
                    {p.bold && <strong style={{ color: C.navy, fontWeight: 600 }}>{p.bold}</strong>}
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
            <a href="#enrol"
              className="block w-full text-center text-[14px] font-semibold text-white no-underline py-3.5 rounded-sm mt-4 transition-colors duration-150"
              style={{ background: C.navy }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.navyMid)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.navy)}>
              Book a Free Counselling Call →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile price strip – shown below hero text on small screens */}
      <div className="lg:hidden px-5 sm:px-8 pb-10 relative z-10">
        <div className="rounded p-5 sm:p-6" style={{ background: C.gold }}>
          <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
            <span className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "rgba(0,0,0,0.5)" }}>Programme Fee</span>
            <span className="text-[13px] font-semibold line-through" style={{ color: "rgba(0,0,0,0.35)" }}>₹1,20,000</span>
          </div>
          <div className="font-bold tracking-[-1px] leading-none mb-1"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(28px,8vw,36px)", color: C.navy }}>₹89,999</div>
          <div className="text-[13px] mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>
            Zero-cost EMI from <strong>₹7,500/month</strong>
          </div>
          <a href="#enrol"
            className="block text-center text-[14px] font-bold py-3 rounded-sm no-underline"
            style={{ background: C.navy, color: "#fff" }}>
            Book Free Counselling Call →
          </a>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TRUST STRIP  — infinite marquee on all screen sizes
   • Label pinned left, edge-faded marquee scrolls to the right
   • Pauses on hover; respects prefers-reduced-motion
══════════════════════════════════════════════════════════════════════════════ */
const TrustStrip = () => {
  const companies = [
    {
      name: "HDFC Bank",
      sector: "Banking",
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0knfosma2F1AIrXUEyWgR8cVpK5GfX8G2Hg&s"
        alt=""
        srcset=""
      />
      ,
    },
    {
      name: "TCS",
      sector: "Technology",
      logo: <img
        src="https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl"
        alt=""
        srcset=""
      />,
    },
    {
      name: "Infosys",
      sector: "IT Services",
      logo: <img
        src="https://w7.pngwing.com/pngs/687/655/png-transparent-infosys-logo.png"
        alt=""
        srcset=""
      />,
    },
    {
      name: "Deloitte",
      sector: "Consulting",
      logo: <img
        src="https://media.tenor.com/YEFYngr6qwUAAAAe/deloitte-logo.png"
        alt=""
        srcset=""
      />,
    },
    {
      name: "PwC India",
      sector: "Risk Advisory",
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP9XVqDZOSzShCO6XMTya8wqxH4I3BLsSBYg&s"
        alt=""
        srcset=""
      />,
    },
    {
      name: "Paytm",
      sector: "Fintech",
      logo: <img
        src="https://images.seeklogo.com/logo-png/50/1/paytm-logo-png_seeklogo-501241.png"
        alt=""
        srcset=""
      />,
    },
    {
      name: "Wipro",
      sector: "IT Services",
      logo: <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
        alt=""
        srcset=""
      />,
    },
    {
      name: "Accenture",
      sector: "Consulting",
      logo: <img
        src="https://www.vhv.rs/dpng/d/614-6144586_accenture-logo-icon-hd-png-download.png"
        alt=""
        srcset=""
      />,
    },
  ];

  /* Duplicate so the seam is invisible */
  const items = [...companies, ...companies];

  return (
    <div className="border-b relative" style={{ background: C.mist, borderColor: C.border }}>
      {/* ── keyframes & pause-on-hover injected once ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-track { animation-play-state: paused !important; }
        }
        .trust-wrap:hover .trust-track { animation-play-state: paused; }
      `}</style>

      <div className="flex items-stretch" style={{ height: 56 }}>

        {/* ── Pinned label ── */}
        <div
          className="flex-shrink-0 flex items-center px-4 sm:px-6 lg:px-[60px] z-10 border-r"
          style={{
            background: C.mist,
            borderColor: C.border,
            /* subtle right fade so label blends into track */
            boxShadow: `6px 0 12px 0 ${C.mist}`,
          }}
        >
          <span
            className="text-[10px] font-bold tracking-[2px] uppercase whitespace-nowrap"
            style={{ color: C.stone }}
          >
            Placed &amp; Hired At
          </span>
        </div>

        {/* ── Marquee viewport ── */}
        <div
          className="trust-wrap flex-1 overflow-hidden relative"
          /* left + right edge fade */
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div
            className="trust-track flex items-center h-full"
            style={{
              width: "max-content",
              animation: "marquee 28s linear infinite",
            }}
          >
            {items.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 sm:px-7 h-full whitespace-nowrap"
                style={{
                  borderRight: `1px solid ${C.border}`,
                }}
              >
                {/* Badge */}
                <div
                  className="w-7 h-7 flex items-center justify-center"
                  
                >
                  {c.logo}
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

/* ══════════════════════════════════════════════════════════════════════════════
   ABOUT
══════════════════════════════════════════════════════════════════════════════ */
const About = () => {
  const stats = [
    { num: "28L+", lbl: "Highest package secured", dark: false },
    { num: "1,400+", lbl: "Professionals trained", dark: true },
    { num: "92%", lbl: "Placement rate in 90 days", dark: false },
    { num: "120+", lbl: "Hiring companies", dark: false },
  ];
  return (
    <section id="about" className="py-14 md:py-[88px] border-b" style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          <div>
            <Eyebrow label="What We Do" />
            <Display>We Train You for the<br /><Em>Threat. Not the Theory.</Em></Display>
            <p className="text-[15px] leading-[1.8] font-light mt-5 mb-5" style={{ color: C.stone }}>
              Our Cybersecurity Programme is built around one idea: the gap between passing a certification exam and actually being effective on a security team is enormous. We close that gap. Every module is designed around what practitioners in active SOC teams, red teams, and GRC functions encounter every day.
            </p>
            <blockquote className="text-[18px] sm:text-[22px] font-serif italic leading-[1.5] pl-5 sm:pl-6 my-6 sm:my-8"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy, borderLeft: `3px solid ${C.gold}` }}>
              Cybersecurity is not learned from slides. It is forged through adversarial thinking and hands-on defence.
            </blockquote>
            <p className="text-[15px] leading-[1.8] font-light mb-4" style={{ color: C.stone }}>
              From network reconnaissance to incident response — every part of the programme is built around{" "}
              <strong style={{ color: C.navy, fontWeight: 600 }}>live technical application</strong>.
            </p>
            <p className="text-[15px] leading-[1.8] font-light" style={{ color: C.stone }}>
              Our trainers are <strong style={{ color: C.navy, fontWeight: 600 }}>full-time security professionals</strong> — analysts, penetration testers, and GRC leads from active engagements across banking, healthcare, and critical infrastructure. Not retired practitioners.
            </p>
          </div>

          {/* 2×2 stats grid */}
          <div className="grid grid-cols-2 gap-px" style={{ background: C.border, border: `1px solid ${C.border}` }}>
            {stats.map((s, i) => (
              <div key={i} className="p-6 sm:p-7 flex flex-col gap-1.5" style={{ background: i === 1 ? C.navy : C.cream }}>
                <div className="font-bold leading-none tracking-[-1px]"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(28px,3vw,40px)", color: i === 1 ? C.gold : C.navy }}>
                  {s.num}
                </div>
                <div className="text-[12px] leading-[1.5]" style={{ color: i === 1 ? "rgba(255,255,255,0.5)" : C.stone }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   PATH / LOGISTICS
══════════════════════════════════════════════════════════════════════════════ */
const Path = () => {
  const cards = [
    { label: "Duration", value: "20 Weeks", sub: "Intensive programme designed around real security operations timelines — not exam calendars.", dark: false },
    { label: "Timings", value: "Evenings & Weekends", sub: "Built for working professionals. No need to leave your current job while you upskill.", dark: false },
    { label: "Mode", value: "Live Online + Lab Access", sub: "Real-time sessions with 24×7 cloud lab access and full LMS recording library.", dark: false },
    { label: "Batch Size", value: "5 Students Per Batch", sub: "Small cohorts mean every participant gets genuine mentorship, not just lecture access.", dark: false },
    { label: "Who Can Join?", value: "IT Grads & Career Changers", sub: "Basic networking knowledge preferred. All technical foundations built in-programme.", dark: false },
    { label: "Programme Fee", value: "₹89,999", sub: "Zero-cost EMI from ₹7,500/month. No hidden fees. Scholarships available.", dark: true },
  ];
  return (
    <section id="path" className="py-14 md:py-[88px] border-b" style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <Eyebrow label="Programme Details" />
        <Display>Structured for the<br /><Em>Real World.</Em></Display>
        {/* 1-col → 2-col → 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-10 sm:mt-12"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {cards.map((c, i) => (
            <div key={i} className="p-6 sm:p-7 lg:p-8 flex flex-col gap-2" style={{ background: c.dark ? C.navy : C.cream }}>
              <div className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: C.gold }}>{c.label}</div>
              <div className="font-bold leading-[1.2] tracking-[-0.5px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(17px,2vw,24px)", color: c.dark ? "#fff" : C.navy }}>
                {c.value}
              </div>
              <div className="text-[13px] leading-[1.5] font-light" style={{ color: c.dark ? "rgba(255,255,255,0.45)" : C.stone }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   OBJECTIVES
══════════════════════════════════════════════════════════════════════════════ */
const Objectives = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "Build an unshakeable foundation in how attackers think and how systems fail. From networking fundamentals and cryptography to attacker methodologies, threat vectors, and the frameworks that govern enterprise security programmes." },
    { num: "02", title: "Attack & Defend", desc: "Move through both sides of the security equation — hands-on penetration testing, vulnerability exploitation, log analysis, SIEM operations, and incident response in live lab environments that mirror real enterprise infrastructure." },
    { num: "03", title: "Deploy", desc: "Execute two complete real-world security engagements — one offensive, one defensive — producing deliverables that match industry standards. Leave with a portfolio that speaks louder than any certificate alone." },
  ];
  return (
    <section id="objectives" className="relative overflow-hidden py-14 md:py-[88px]" style={{ background: C.navy,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${objectivesBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
     }}>
      <GridOverlay opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Programme Objectives" dark />
        <Display light>Three Pillars of a<br /><Em>Complete Security Career.</Em></Display>
        <SectionLead light className="mt-4">A deliberate progression — from foundational knowledge through adversarial thinking to professional readiness.</SectionLead>

        {/* 1-col on mobile → 3-col on md, with class-based borders */}
        <div className="obj-grid grid grid-cols-1 md:grid-cols-3 mt-10 sm:mt-14"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {steps.map((s, i) => (
            <div key={i} className={`obj-step obj-step-${i} flex flex-col gap-3.5 py-8 md:py-10`}>
              <div className="font-bold leading-none tracking-[-2px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(42px,5vw,56px)", color: "rgba(255,255,255,0.06)" }}>
                {s.num}
              </div>
              <div className="w-2 h-2 rounded-full" style={{ background: C.gold }} />
              <h3 className="font-bold text-[20px] sm:text-[24px] text-white tracking-[-0.5px] leading-[1.2]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>{s.title}</h3>
              <p className="text-[14px] leading-[1.75] font-light" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   CURRICULUM (Accordion)
══════════════════════════════════════════════════════════════════════════════ */
const Curriculum = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const modules = [
    { title: "Networking & Security Fundamentals", body: "OSI and TCP/IP models, routing and switching, DNS, HTTP/S, firewalls, VPNs, and common network protocols — with an emphasis on how each layer can be exploited and protected.", tags: ["Foundation", "Networking", "Protocols"] },
    { title: "Linux & Windows Security Administration", body: "Command-line mastery, user and privilege management, log collection, hardening benchmarks (CIS), and service configuration — across both Linux and Windows Server environments.", tags: ["Linux", "Windows", "Hardening"] },
    { title: "Ethical Hacking & Penetration Testing", body: "Reconnaissance, scanning with Nmap, enumeration, vulnerability identification using OpenVAS and Nessus, exploitation with Metasploit, post-exploitation, and professional report writing aligned to CEH and OSCP standards.", tags: ["CEH Aligned", "Metasploit", "Kali Linux"] },
    { title: "Web Application Security & OWASP Top 10", body: "SQL injection, XSS, CSRF, broken authentication, and more. Lab exercises using Burp Suite, DVWA, and deliberately vulnerable applications to build both offensive and defensive fluency.", tags: ["OWASP", "Burp Suite", "API Security"] },
    { title: "SOC Operations, SIEM & Threat Detection", body: "Alert triage, log analysis, correlation rule development, and incident escalation workflows. Hands-on with Splunk and IBM QRadar. MITRE ATT&CK framework application.", tags: ["Splunk", "QRadar", "MITRE ATT&CK"] },
    { title: "Incident Response & Digital Forensics", body: "Full IR lifecycle — preparation, identification, containment, eradication, recovery, and lessons learned. Memory analysis, disk imaging, and chain of custody using Autopsy and Volatility.", tags: ["IR Playbooks", "Volatility", "Forensics"] },
    { title: "Cloud Security (AWS & Azure)", body: "IAM in cloud environments, shared responsibility models, misconfiguration risks, cloud-native monitoring, and security group / policy design across AWS and Azure.", tags: ["AWS Security", "Azure AD", "IAM"] },
    { title: "GRC — Governance, Risk & Compliance", body: "ISO 27001, NIST CSF, GDPR, RBI cybersecurity guidelines, and SOC 2 — communicating risk in business terms, conducting audits, and participating in compliance programmes.", tags: ["ISO 27001", "NIST", "GDPR"] },
  ];
  return (
    <section id="curriculum" className="py-14 md:py-[88px] border-b" style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        {/* Sticky sidebar only on lg, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[80px]">
            <Eyebrow label="Course Syllabus" />
            <Display>The Most Complete<br />Security Curriculum.<br /><Em>Full Stop.</Em></Display>
            <SectionLead className="mt-4">Covering the technical depth employers demand and the practical fluency that separates candidates who can do the job.</SectionLead>
            <div className="mt-6 p-4 sm:p-5 flex items-center gap-4" style={{ background: C.goldLt, borderLeft: `3px solid ${C.gold}` }}>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[15px]"
                style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>AK</div>
              <div>
                <strong className="block text-[14px] font-bold" style={{ color: C.navy }}>Arjun Kapoor</strong>
                <span className="text-[12px]" style={{ color: C.stone }}>Programme Lead — 11 yrs in Active Security Operations</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {modules.map((m, i) => (
              <div key={i} className="cursor-pointer border-b"
                style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="flex items-center justify-between gap-4 py-4 sm:py-5 text-[14px] sm:text-[15px] font-semibold"
                  style={{ color: C.navy }}>
                  {m.title}
                  <span className="flex-shrink-0 w-7 h-7 border rounded-full flex items-center justify-center text-[18px] font-light leading-none transition-all duration-150"
                    style={{ borderColor: openIdx === i ? C.navy : C.border, background: openIdx === i ? C.navy : "transparent", color: openIdx === i ? "#fff" : C.stone }}>
                    {openIdx === i ? "−" : "+"}
                  </span>
                </div>
                {openIdx === i && (
                  <div className="pb-5 text-[13px] sm:text-[14px] leading-[1.75] font-light" style={{ color: C.stone }}>
                    {m.body}
                    <div className="flex gap-2 flex-wrap mt-2.5">
                      {m.tags.map((t) => (
                        <span key={t} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-sm"
                          style={{ color: C.gold, background: C.goldLt }}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TOOLS
══════════════════════════════════════════════════════════════════════════════ */
const Tools = () => {
  const tools = [
    { icon: <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/1280px-Kali-dragon-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
        alt=""
        srcset=""
      />, name: "Kali Linux", desc: "The professional OS for ethical hacking and penetration testing engagements" },
    { icon:  <img
        src="https://play-lh.googleusercontent.com/PjfzpTbZMKywkKDtX1dLkzZroAZCLTwGrwIL3acVg_-DGeP4dYkKt_Z6R8bpaOReLQ=w240-h480-rw"
        alt=""
        srcset=""
      />, name: "Metasploit", desc: "Industry-standard exploitation framework for vulnerability research and red team ops" },
    { icon:  <img
        src="https://media.licdn.com/dms/image/sync/v2/D4D27AQEdAB2dVddRlg/articleshare-shrink_800/articleshare-shrink_800/0/1732611581747?e=2147483647&v=beta&t=NU2TcFaI3V-O0ifuk9BcRDJbIZLUTql23f8UYHs1_oQ"
        alt=""
        srcset=""
      />, name: "Burp Suite", desc: "Web application security testing — proxy, scanner, intruder, and repeater workflows" },
    { icon:  <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMu8ushpqeiuRhmg6Wl6YFWDNo5lXciO9WLw&s"
        alt=""
        srcset=""
      />, name: "Wireshark", desc: "Network packet analysis and protocol dissection for offense and forensics" },
    { icon:  <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTuGg_FgSBeGRi9YaUo7Xvs_Qw4haHLpLYQ&sg"
        alt=""
        srcset=""
      />, name: "Splunk", desc: "Enterprise SIEM — log ingestion, search, dashboards, and correlation rules" },
    { icon:  <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxru52r9oV5RfU8DCCfsI772sKxha1NpoSQ&s"
        alt=""
        srcset=""
      />, name: "Nessus / OpenVAS", desc: "Vulnerability scanning and assessment for enterprise infrastructure audits" },
    { icon:  <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyX3JYr04P9gNoMTx2pD3JK5wFczhjRncw_Q&s"
        alt=""
        srcset=""
      />, name: "Volatility", desc: "Memory forensics framework for malware analysis and incident investigation" },
    { icon:  <img
        src="https://www.devopsschool.com/blog/wp-content/uploads/2023/09/image-569.png"
        alt=""
        srcset=""
      />, name: "AWS Security Hub", desc: "Cloud security posture management, findings aggregation, and automated compliance checks" },
  ];
  return (
    <section id="tools" className="relative overflow-hidden py-14 md:py-[88px] border-b"
      style={{ background: C.navy, borderColor: "rgba(255,255,255,0.08)",
        backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${toolsBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
       }}>
      <GridOverlay opacity={0.04} />
      <Wrap className="relative z-10">
        <Eyebrow label="Tools You Will Master" dark />
        <Display light className="mt-1">The <Em>Exact Toolkit</Em><br />Employers Expect.</Display>
        <SectionLead light className="mt-4">Every tool here is actively used in enterprise security teams today — not chosen for a syllabus, but because the industry demands fluency.</SectionLead>
        {/* 2-col → 3-col → 4-col */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-12">
          {tools.map((t, i) => (
            <div key={i} className="flex flex-col items-start gap-3 p-4 sm:p-5 lg:p-6 rounded-lg border cursor-default transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}>
              <div className="w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] sm:text-[24px] leading-none">{t.icon}</span>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-white leading-[1.3]">{t.name}</div>
              <div className="text-[11px] sm:text-[12px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.4)" }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   METHODOLOGY
══════════════════════════════════════════════════════════════════════════════ */
const Methodology = () => {
  const bars = [
    { pct: "40%", title: "Concept & Framework", desc: "Building the mental models — threat landscapes, attack taxonomies, security architecture, and compliance frameworks — that make everything else coherent.", dark: false },
    { pct: "45%", title: "Hands-On Lab Work", desc: "Live attack simulations, CTF-style exercises, SOC alert triage sessions, and penetration test engagements in cloud lab environments.", dark: true },
    { pct: "15%", title: "Reporting & Communication", desc: "Producing security deliverables that non-technical stakeholders can act on. Because findings that aren't communicated clearly don't get fixed.", dark: false },
  ];
  return (
    <section id="methodology" className="py-14 md:py-[88px] border-b" style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center"><Eyebrow label="Our Methodology" /></div>
          <Display>How We Build<br /><Em>Security Professionals.</Em></Display>
          <SectionLead className="mt-4 mx-auto text-center">Security competence is not a knowledge problem — it is a practice problem. Our methodology is built around this truth.</SectionLead>
        </div>

        <blockquote className="text-center text-[16px] sm:text-[20px] font-serif italic leading-[1.6] max-w-[640px] mx-auto mb-10 sm:mb-14 px-4 sm:px-8 relative"
          style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>
          <span className="text-[50px] sm:text-[80px] leading-none align-[-20px] sm:align-[-32px] mr-1" style={{ color: C.gold }}>"</span>
          The best security professionals do not think like defenders who study attacks. They think like attackers who choose to defend.
          <cite className="block not-italic text-[11px] sm:text-[12px] font-semibold tracking-[1.5px] uppercase mt-4"
            style={{ fontFamily: "'Outfit',sans-serif", color: C.stone }}>
            — Programme Philosophy, CodersBloom Security
          </cite>
        </blockquote>

        {/* 1-col → 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {bars.map((b, i) => (
            <div key={i} className="p-7 sm:p-9 flex flex-col gap-3" style={{ background: b.dark ? C.navy : C.cream }}>
              <div className="font-bold leading-none tracking-[-2px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(36px,4vw,52px)", color: b.dark ? C.gold : C.navy }}>
                {b.pct}
              </div>
              <div className="text-[14px] sm:text-[15px] font-bold" style={{ color: b.dark ? "#fff" : C.navy }}>{b.title}</div>
              <div className="text-[13px] leading-[1.65] font-light" style={{ color: b.dark ? "rgba(255,255,255,0.45)" : C.stone }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   SECTORS
══════════════════════════════════════════════════════════════════════════════ */
const Sectors = () => {
  const [hov, setHov] = useState(null);
  const domains = [
    { icon: "🏦", title: "Banking & Financial Services", desc: "SOC analysts, threat intelligence leads, and fraud prevention specialists at banks and NBFCs. Heavily regulated, high-demand, and well-compensated.", tags: ["SOC Analyst", "Threat Intel", "Fraud Prevention"] },
    { icon: "💻", title: "IT Services & Consulting", desc: "Penetration testers, security consultants, and GRC analysts embedded within major Indian IT service firms and global consultancies.", tags: ["Pen Testing", "GRC", "Security Consulting"] },
    { icon: "☁️", title: "Cloud & Product Companies", desc: "Cloud security engineers and DevSecOps professionals at SaaS and product companies — one of the fastest-growing cybersecurity hiring segments.", tags: ["Cloud Security", "DevSecOps", "IAM"] },
    { icon: "🏥", title: "Healthcare", desc: "Protecting patient data, medical devices, and hospital infrastructure against ransomware — healthcare is one of the most targeted sectors globally.", tags: ["HIPAA", "OT/IoT Security", "Compliance"] },
    { icon: "🏛", title: "Government & Defence", desc: "Critical infrastructure protection, national cybersecurity initiatives, and CERT-In aligned roles across central and state government programmes.", tags: ["CERT-In", "Critical Infrastructure", "NCIIPC"] },
    { icon: "⚡", title: "Fintech & Payments", desc: "Application security engineers and payment fraud analysts at India's rapidly growing fintech platforms — where security is existential, not optional.", tags: ["AppSec", "PCI-DSS", "Payment Fraud"] },
  ];
  return (
    <section id="sectors" className="py-14 md:py-[88px] border-b" style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        {/* Header: stacked on mobile → side-by-side on md */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <Eyebrow label="Industry Sectors" />
            <Display>Where Our Graduates<br /><Em>Go to Work.</Em></Display>
          </div>
          <SectionLead className="md:max-w-[300px]">Cybersecurity roles exist in every industry. Our graduates are placed across six high-demand sectors.</SectionLead>
        </div>
        {/* 1-col → 2-col → 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {domains.map((d, i) => (
            <div key={i} className="relative overflow-hidden flex flex-col gap-3.5 p-6 sm:p-8 transition-colors duration-200 cursor-default"
              style={{ background: hov === i ? C.cream : C.white }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                style={{ background: C.gold, transform: hov === i ? "scaleX(1)" : "scaleX(0)" }} />
              <div className="w-10 h-10 sm:w-11 sm:h-11 border rounded-sm flex items-center justify-center text-[18px] sm:text-[20px]"
                style={{ borderColor: C.border, background: C.cream }}>{d.icon}</div>
              <div className="font-bold text-[16px] sm:text-[17px] tracking-[-0.3px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>{d.title}</div>
              <p className="text-[13px] leading-[1.65] font-light" style={{ color: C.stone }}>{d.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {d.tags.map((t) => (
                  <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-sm" style={{ color: C.stone, background: C.mist }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   WHY US
══════════════════════════════════════════════════════════════════════════════ */
const WhyUs = () => {
  const cards = [
    { icon: "👨‍💻", title: "Trainers Who Still Do the Work", desc: "Every trainer is an active security professional — conducting pen tests, running SOC shifts, or advising enterprise GRC programmes. Current knowledge because it is lived." },
    { icon: "🔬", title: "Live Labs, Not Sandboxes", desc: "Cloud-hosted lab environments modelled on real enterprise infrastructure — not pre-configured sandbox VMs that make everything artificially easy." },
    { icon: "👥", title: "Five Per Batch. Not Fifty.", desc: "A deliberate constraint. Every participant's work gets reviewed. Every question gets a complete answer. No one falls behind unnoticed." },
    { icon: "📁", title: "A Portfolio Employers Can Verify", desc: "You leave with two completed security engagement reports — a penetration test and an incident response exercise — that employers can actually evaluate." },
    { icon: "🎯", title: "Certification Alignment Built In", desc: "The curriculum maps directly to CEH, CompTIA Security+, and SOC Analyst frameworks — so learning builds towards recognised credentials from day one." },
    { icon: "🤝", title: "Placement Until You're Placed", desc: "A dedicated placement manager, active recruiter network, interview coaching, and ongoing support until you have an offer in hand." },
  ];
  return (
    <section id="why" className="relative overflow-hidden py-14 md:py-[88px]" style={{ background: C.navy ,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${whyUsBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
    }}>
      <GridOverlay opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Why CodersBloom Security" dark />
        <Display light className="mt-1">What Makes This<br /><Em>Different.</Em></Display>
        <SectionLead light className="mt-4">There is no shortage of cybersecurity courses. There is a significant shortage of programmes that produce graduates ready to work on Day 1.</SectionLead>
        {/* 1-col → 2-col → 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 sm:p-7 rounded-lg border transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.07)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-[18px] sm:text-[20px] border"
                style={{ background: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.25)" }}>{c.icon}</div>
              <div className="text-[14px] sm:text-[15px] font-bold text-white leading-[1.3]">{c.title}</div>
              <div className="text-[12px] sm:text-[13px] leading-[1.65] font-light" style={{ color: "rgba(255,255,255,0.45)" }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════════════════════════════════════════ */
const Projects = () => {
  const steps = [
    { num: "01", title: "Offensive Engagement — Full Penetration Test", body: "Conduct a complete external and internal penetration test against a simulated enterprise environment. Scope definition, reconnaissance, exploitation, privilege escalation, lateral movement, and a professional-grade report with risk ratings and remediation recommendations." },
    { num: "02", title: "Defensive Exercise — Incident Response Simulation", body: "Respond to a live simulated breach — triage SIEM alerts, identify the attacker's footprint, contain the incident, perform basic forensic collection, and produce a post-incident report aligned to NIST IR framework." },
    { num: "03", title: "Portfolio Review & Presentation", body: "Present your work to a panel of working security professionals. Receive structured feedback on technical accuracy, communication quality, and professional presentation — exactly as you would in a real client or employer context." },
  ];
  const outcomes = [
    "A complete penetration test report — professional format, executable findings",
    "An incident response post-mortem document — structured, board-ready",
    "CEH, Security+, and SOC Analyst certification readiness",
    "Active lab access for 6 months post-programme",
    "LinkedIn profile optimised for security hiring managers",
    "Direct introductions to our recruiter network",
    "A cohort of 4 peers who went through the same journey",
  ];
  return (
    <section id="projects" className="py-14 md:py-[88px] border-b" style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        {/* 1-col → 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start">
          <div>
            <Eyebrow label="Real Project Work" />
            <Display>Two Engagements.<br /><Em>Real Deliverables.</Em></Display>
            <SectionLead className="mt-4">Certificates tell employers you attended. A penetration test report and an IR exercise deliverable tell them you can do the job.</SectionLead>
            <div className="flex flex-col mt-4">
              {steps.map((s, i) => (
                <div key={i} className="grid gap-4 py-5 sm:py-6 border-b items-start"
                  style={{ gridTemplateColumns: "36px 1fr", borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}>
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center font-bold text-[13px] flex-shrink-0 mt-0.5"
                    style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>{s.num}</div>
                  <div>
                    <h4 className="text-[14px] sm:text-[15px] font-bold mb-1.5" style={{ color: C.navy }}>{s.title}</h4>
                    <p className="text-[13px] sm:text-[14px] leading-[1.65] font-light" style={{ color: C.stone }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome panel */}
          <div className="relative overflow-hidden rounded p-7 sm:p-11" style={{ background: C.navy }}>
            <GridOverlay opacity={0.06} />
            <div className="relative z-10">
              <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: C.gold }}>What You Walk Away With</div>
              <div className="font-bold text-[22px] sm:text-[26px] text-white leading-[1.2] tracking-[-0.5px] mb-6"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
                A Profile That<br /><em style={{ color: C.gold }}>Speaks for Itself.</em>
              </div>
              <div className="flex flex-col gap-3">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[1.5]"
                    style={{ color: "rgba(255,255,255,0.7)" }}>
                    <GoldCheck />{o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   CAREER SERVICES
══════════════════════════════════════════════════════════════════════════════ */
const CareerServices = () => {
  const [hov, setHov] = useState(null);
  const cards = [
    { icon: "📄", title: "Security-Specific Resume Building", desc: "Your resume written by a team that knows what security hiring managers actually look for — not a generic template with keywords inserted." },
    { icon: "🎤", title: "Technical Interview Preparation", desc: "Mock technical interviews with working practitioners covering both hands-on questions and scenario-based walkthroughs." },
    { icon: "🌐", title: "Recruiter Network Access", desc: "Direct introductions to our network of 120+ hiring partners across banking, IT services, consulting, fintech, and cloud companies." },
    { icon: "🔗", title: "LinkedIn & Profile Optimisation", desc: "Profile reviewed and optimised for security roles — with guidance on how to present your project work to attract inbound recruiter interest." },
  ];
  return (
    <section id="career" className="py-14 md:py-[88px] border-b" style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <Eyebrow label="Career Services" />
            <Display>Placement Is<br /><Em>The Promise.</Em></Display>
          </div>
          <SectionLead className="md:max-w-[280px]">Training is only half the equation. We stand alongside every graduate until they have an offer in hand.</SectionLead>
        </div>
        {/* 1-col → 2-col → 4-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {cards.map((c, i) => (
            <div key={i} className="relative overflow-hidden flex flex-col gap-3 p-6 sm:p-7 transition-colors duration-200 cursor-default"
              style={{ background: hov === i ? C.mist : C.white }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                style={{ background: C.gold, transform: hov === i ? "scaleX(1)" : "scaleX(0)" }} />
              <div className="text-[20px] sm:text-[22px] leading-none">{c.icon}</div>
              <div className="text-[13px] sm:text-[14px] font-bold leading-[1.3]" style={{ color: C.navy }}>{c.title}</div>
              <div className="text-[12px] sm:text-[13px] leading-[1.65] font-light" style={{ color: C.stone }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════════════════════════════════════ */
const Testimonials = () => {
  const cards = [
    { initials: "RS", name: "Rohan Sharma", role: "SOC Analyst L2, Infosys", sector: "IT Services", quote: "I came in as a network admin with zero offensive security experience. Six months later I was in a SOC analyst role at a major IT services firm. The lab work was what made it real — I had actually done these things, not just read about them." },
    { initials: "PM", name: "Preethi Menon", role: "Junior Pen Tester, Deloitte Cyber", sector: "Consulting", quote: "The pen testing module was the most intense and most valuable thing I have ever done professionally. My trainer was conducting live engagements while teaching us. I walked into my Deloitte interview completely prepared." },
    { initials: "AT", name: "Anika Tiwari", role: "IS GRC Lead, HDFC Life", sector: "Insurance", quote: "I was a risk analyst with no technical background. The GRC module gave me a language for what I already understood, and the technical modules gave me the credibility I was missing. Salary difference was 68%." },
  ];
  return (
    <section id="testimonials" className="py-14 md:py-[88px] border-b" style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <Eyebrow label="Graduate Outcomes" />
            <Display>What Happens<br /><Em>After the Programme.</Em></Display>
          </div>
          <SectionLead className="md:max-w-[280px]">Outcomes in their own words — from professionals who started exactly where you are now.</SectionLead>
        </div>
        {/* 1-col → 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded border" style={{ background: C.white, borderColor: C.border }}>
              <Stars />
              <div className="font-serif italic text-[14px] sm:text-[15px] leading-[1.75] flex-1"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.ink }}>
                <span className="text-[36px] sm:text-[40px] leading-none align-[-14px] sm:align-[-16px] mr-1" style={{ color: C.gold }}>"</span>
                {c.quote}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: C.border }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[13px]"
                  style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>{c.initials}</div>
                <div className="flex-1 min-w-0">
                  <strong className="block text-[13px] font-semibold leading-[1.3] truncate" style={{ color: C.navy }}>{c.name}</strong>
                  <span className="text-[11px] sm:text-[12px] block truncate" style={{ color: C.stone }}>{c.role}</span>
                </div>
                <span className="text-[10px] font-semibold tracking-[0.5px] uppercase px-2 py-0.5 rounded-sm whitespace-nowrap flex-shrink-0"
                  style={{ color: C.stone, background: C.mist }}>{c.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════════════════════════════════════ */
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: "Do I need a technical background to enrol?", a: "A basic understanding of how networks work is helpful — but the programme is not restricted to Computer Science graduates. We welcome IT professionals transitioning into security, graduates from technology-adjacent fields, and career changers with strong analytical ability. Our intake process includes a brief technical readiness assessment." },
    { q: "Can I study while working full-time?", a: "Yes — the programme is designed for working professionals. All live sessions run on weekday evenings and weekends. Every session is recorded and accessible on LMS. The lab environment is available 24×7. Most participants maintain their current roles throughout all 20 weeks." },
    { q: "What certifications does this programme prepare me for?", a: "The curriculum aligns to CEH (Certified Ethical Hacker), CompTIA Security+, and EC-Council's Certified SOC Analyst (CSA). Exam prep sessions and mock exams for all three are built into the course. Vouchers can be bundled at enrolment at a discounted rate." },
    { q: "What makes this different from online cybersecurity courses?", a: "Three things. First, our trainers are active practitioners — their knowledge is lived, not revisited. Second, the batch size of 5 means you receive mentorship, not content delivery. Third, you produce real deliverables — a penetration test report and an IR exercise document — that employers can evaluate." },
    { q: "What is the placement process and how long does it take?", a: "Placement support begins in the final 4 weeks — covering resume preparation, LinkedIn optimisation, and mock interviews. After graduation, a dedicated placement manager supports you actively until you receive an offer. Average time to first offer is 6–8 weeks. We do not close a placement case until an offer is accepted." },
    { q: "What are the payment and financing options?", a: "The programme fee is ₹89,999. Zero-cost EMI is available across major credit cards starting at ₹7,500 per month. Direct bank transfer and UPI payment are also available. Merit-based scholarships of up to 20% are available. There are no hidden fees." },
  ];
  return (
    <section id="faq" className="py-14 md:py-[88px] border-b" style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        {/* 1-col → 2-col on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[80px]">
            <Eyebrow label="Common Questions" />
            <Display>Everything You<br />Need to <Em>Know.</Em></Display>
            <SectionLead className="mt-4">Honest answers to the questions every prospective student asks before committing.</SectionLead>
            <div className="mt-6 p-5 sm:p-6" style={{ background: C.goldLt, borderLeft: `3px solid ${C.gold}` }}>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] font-light" style={{ color: C.navy }}>
                Still uncertain? Our advisors are available for a free 30-minute call — no obligation, no pitch, just honest guidance.
              </p>
              <a href="#enrol" className="inline-block mt-3 text-[13px] font-bold no-underline transition-colors duration-150"
                style={{ color: C.navy }}
                onMouseEnter={(e) => (e.target.style.color = C.gold)}
                onMouseLeave={(e) => (e.target.style.color = C.navy)}>Schedule a free call →</a>
            </div>
          </div>

          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <div key={i} className="cursor-pointer border-b"
                style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="flex items-start justify-between gap-4 py-4 sm:py-5 text-[13px] sm:text-[15px] font-semibold leading-[1.4]"
                  style={{ color: C.navy }}>
                  {f.q}
                  <span className="flex-shrink-0 w-6 h-6 border rounded-full flex items-center justify-center text-[18px] font-light leading-none transition-all duration-150 mt-[1px]"
                    style={{ borderColor: openIdx === i ? C.navy : C.border, background: openIdx === i ? C.navy : "transparent", color: openIdx === i ? "#fff" : C.stone }}>
                    {openIdx === i ? "−" : "+"}
                  </span>
                </div>
                {openIdx === i && (
                  <div className="pb-5 text-[13px] sm:text-[14px] leading-[1.75] font-light max-w-[600px]" style={{ color: C.stone }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   BOTTOM CTA / ENROL FORM
══════════════════════════════════════════════════════════════════════════════ */
const BottomCTA = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", track: "", status: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const checklist = [
    "Free 1:1 career counselling call (30 minutes)",
    "Personalised programme walkthrough for your background",
    "Salary benchmarking for your target security role",
    "Certification pathway advice specific to your goals",
    "EMI & scholarship options discussed upfront",
    "No obligation — learn everything, decide later",
  ];

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(form).forEach((k) => { if (!form[k]) newErrors[k] = true; });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  const inputBase = {
    background: C.cream,
    color: C.ink,
    fontFamily: "'Outfit',sans-serif",
    borderRadius: "2px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    padding: "11px 14px",
    border: "1px solid",
    appearance: "none",
  };
  const inputStyle = (key) => ({ ...inputBase, borderColor: errors[key] ? C.gold : C.border });

  return (
    <section id="enrol" className="relative overflow-hidden" style={{ background: C.navy,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${bottomCtaBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
     }}>
      <GridOverlay opacity={0.05} />
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: C.gold }} />
      <Wrap>
        {/* 1-col → 2-col on lg */}
        <div className="relative z-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          {/* Left copy */}
          <div>
            <h2 className="font-bold leading-[1.12] tracking-[-0.8px] text-white mb-4"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(24px,3.5vw,42px)" }}>
              One Conversation<br />Can Change Your <em style={{ color: C.gold }}>Career.</em>
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] font-light mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our advisors are security professionals who have made transitions similar to yours. No scripts, no pressure — just honest guidance about whether this programme is the right move for you.
            </p>
            <ul className="flex flex-col gap-3 list-none">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] sm:text-[14px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span className="inline-flex flex-shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full border mt-[2px]"
                    style={{ background: "rgba(201,168,76,0.2)", borderColor: C.gold }}>
                    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
                      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form panel */}
          <div className="bg-white rounded p-6 sm:p-9" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
            <div className="font-bold text-[18px] sm:text-[20px] tracking-[-0.3px] mb-1"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>Book Your Free Session</div>
            <div className="text-[12px] sm:text-[13px] leading-[1.5] mb-5" style={{ color: C.stone }}>
              A programme advisor will contact you within 24 hours.
            </div>

            {/* Name row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[{ label: "First Name", key: "firstName", placeholder: "Arjun" }, { label: "Last Name", key: "lastName", placeholder: "Mehta" }].map((f) => (
                <div key={f.key} className="flex flex-col gap-1.5">
                  <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>{f.label}</label>
                  <input style={inputStyle(f.key)} placeholder={f.placeholder} value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = C.navy)}
                    onBlur={(e) => (e.target.style.borderColor = errors[f.key] ? C.gold : C.border)} />
                </div>
              ))}
            </div>

            {[
              { label: "Phone / WhatsApp", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
              { label: "Email Address", key: "email", type: "email", placeholder: "arjun@example.com" },
            ].map((f) => (
              <div key={f.key} className="flex flex-col gap-1.5 mb-3">
                <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>{f.label}</label>
                <input type={f.type} style={inputStyle(f.key)} placeholder={f.placeholder} value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = C.navy)}
                  onBlur={(e) => (e.target.style.borderColor = errors[f.key] ? C.gold : C.border)} />
              </div>
            ))}

            <div className="flex flex-col gap-1.5 mb-3">
              <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Track of Interest</label>
              <select style={inputStyle("track")} value={form.track}
                onChange={(e) => setForm({ ...form, track: e.target.value })}>
                <option value="">Select a track...</option>
                <option>Ethical Hacking / Pen Testing</option>
                <option>SOC Analysis & Threat Detection</option>
                <option>GRC — Governance, Risk & Compliance</option>
                <option>Cloud Security</option>
                <option>Help me decide</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mb-4">
              <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Current Status</label>
              <select style={inputStyle("status")} value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option value="">Select...</option>
                <option>Final Year / Recent Graduate</option>
                <option>IT Professional (1–3 yrs)</option>
                <option>IT Professional (3+ yrs)</option>
                <option>Non-IT Professional (Career Change)</option>
                <option>Currently in Cybersecurity</option>
              </select>
            </div>

            <button onClick={handleSubmit} disabled={submitted}
              className="w-full text-white border-none text-[14px] font-semibold py-3.5 rounded-sm cursor-pointer transition-colors duration-150"
              style={{ background: submitted ? "#16A34A" : C.navy }}
              onMouseEnter={(e) => { if (!submitted) e.currentTarget.style.background = C.navyMid; }}
              onMouseLeave={(e) => { if (!submitted) e.currentTarget.style.background = submitted ? "#16A34A" : C.navy; }}>
              {submitted ? "✓ We'll be in touch within 24 hours" : "Book My Free Session →"}
            </button>
            <p className="text-[11px] text-center mt-2.5 leading-[1.5]" style={{ color: C.stone }}>
              🔒 No spam. No pressure. Your information is completely confidential.
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════════════════ */
const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
  };
  const cols = [
    { title: "Programme", links: [{ label: "Curriculum", id: "curriculum" }, { label: "Tools Covered", id: "tools" }, { label: "Methodology", id: "methodology" }, { label: "Project Work", id: "projects" }] },
    { title: "Institution", links: [{ label: "About CodersBloom", href: "#" }, { label: "Our Trainers", href: "#" }, { label: "Hiring Partners", href: "#" }, { label: "Blog & Insights", href: "#" }] },
    { title: "Contact", links: [{ label: "1800-000-0000 (Free)", href: "tel:+911800000000" }, { label: "admissions@codersbloom.in", href: "mailto:admissions@codersbloom.in" }, { label: "WhatsApp Us", href: "#" }, { label: "Student Portal", href: "#" }] },
  ];
  return (
    <footer style={{ background: C.ink, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <Wrap>
        {/* 2-col on sm (brand full-width), 4-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 py-10 sm:py-14 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>

          {/* Brand — full width on small screens */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <LogoMark size={28} />
              <strong className="font-bold text-[15px] text-white" style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>CodersBloom</strong>
            </a>
            <p className="text-[13px] leading-[1.7] font-light max-w-[280px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Practical, industry-aligned Cybersecurity training — built for the job, not the exam. Training is the beginning. Placement is the promise.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold tracking-[2px] uppercase mb-4" style={{ color: C.gold }}>{col.title}</h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.id ? (
                      <button onClick={() => scrollTo(l.id)}
                        className="text-[12px] sm:text-[13px] font-light bg-transparent border-none cursor-pointer p-0 text-left transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.target.style.color = "#fff")}
                        onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}>{l.label}</button>
                    ) : (
                      <a href={l.href} className="text-[12px] sm:text-[13px] font-light no-underline transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.target.style.color = "#fff")}
                        onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.4)")}>{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar – stacks on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-5 text-[11px] sm:text-[12px]"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          <p>© 2025 CodersBloom. All rights reserved. Training is the beginning. Placement is the promise.™</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((t) => (
              <a key={t} href="#" className="no-underline transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.25)")}>{t}</a>
            ))}
          </div>
        </div>
      </Wrap>
    </footer>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   STICKY MOBILE BAR
══════════════════════════════════════════════════════════════════════════════ */
const StickyMob = () => (
  <div className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-5 py-3 lg:hidden"
    style={{ background: C.navy, borderTop: `2px solid ${C.gold}` }}>
    <p className="text-[12px] font-medium mr-3" style={{ color: "rgba(255,255,255,0.75)" }}>Free career counselling available</p>
    <a href="#enrol" className="text-[12px] sm:text-[13px] font-bold px-4 py-2 rounded-sm no-underline whitespace-nowrap flex-shrink-0"
      style={{ background: C.gold, color: C.navy }}>Book Now →</a>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════════════════════════════════════════ */
export default function CyberSecurity() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          background: #FAF8F3;
          color: #1C1C1C;
          overflow-x: hidden;
        }
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }

        /* Objectives grid — responsive column borders via CSS classes */
        .obj-grid { border-top: 1px solid rgba(255,255,255,0.08); }
        .obj-step { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .obj-step:last-child { border-bottom: none; }
        @media (min-width: 768px) {
          .obj-step { border-bottom: none; }
          .obj-step-0 { padding-right: 36px; border-right: 1px solid rgba(255,255,255,0.08); }
          .obj-step-1 { padding-left: 36px; padding-right: 36px; border-right: 1px solid rgba(255,255,255,0.08); }
          .obj-step-2 { padding-left: 36px; }
        }

        /* Add bottom padding on mobile/tablet so sticky bar doesn't cover content */
        @media (max-width: 1023px) { body { padding-bottom: 60px; } }

        /* Form focus ring */
        input:focus, select:focus {
          outline: none;
          border-color: #000 !important;
          background: #fff !important;
        }
      `}</style>

      <div className="relative">
        <AnnounceBanner />
        <Nav />
        <Hero />
        <TrustStrip />
        <About />
        <Path />
        <Objectives />
        <Curriculum />
        <Tools />
        <Methodology />
        <Sectors />
        <WhyUs />
        <Projects />
        <CareerServices />
        <Testimonials />
        <FAQ />
        <BottomCTA />
        <Footer />
        <StickyMob />
      </div>
    </>
  );
}
