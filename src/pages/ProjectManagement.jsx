import { useState } from "react";
import heroBg from "../assets/annie-spratt-QckxruozjRg-unsplash.jpg";
import preRequisitesBg from "../assets/israel-andrade-YI_9SivVt_s-unsplash.jpg";
import toolsBg from "../assets/kyle-loftus-PFC2fY9LE_g-unsplash.jpg";
import whyUsBg from "../assets/saad-manzoor-c3FaSSL1xj0-unsplash.jpg";
import bottomCtaBg from "../assets/phyo-min-A9qQ8vE1Bmw-unsplash.jpg";
import Nav from "../components/layout/Nav";
import { useNavigate } from "react-router-dom";

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
const Wrap = ({ children, className = "" }) => (
  <div className={`max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] ${className}`}>{children}</div>
);

const Eyebrow = ({ label, dark = false }) => (
  <div className="inline-flex items-center gap-2.5 mb-4">
    <div className="w-7 h-px flex-shrink-0"
      style={{ background: dark ? "rgba(201,168,76,0.5)" : C.gold }} />
    <span className="text-[11px] font-semibold tracking-[2.5px] uppercase"
      style={{ color: C.gold }}>{label}</span>
  </div>
);

const Display = ({ children, light = false, className = "" }) => (
  <h2 className={`font-bold leading-[1.12] tracking-tight ${className}`}
    style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,3.5vw,44px)", color: light ? "#fff" : C.navy }}>
    {children}
  </h2>
);

const Em = ({ children }) => <em style={{ color: C.gold, fontStyle: "italic" }}>{children}</em>;

const Lead = ({ children, light = false, className = "" }) => (
  <p className={`text-[15px] sm:text-base leading-[1.75] font-light max-w-[520px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}>{children}</p>
);

const GoldCheck = ({ dark = false }) => (
  <span className="inline-flex flex-shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full border mt-[2px]"
    style={{ background: dark ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.12)", borderColor: C.gold }}>
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

const GridBg = ({ opacity = 0.05 }) => (
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: `linear-gradient(rgba(201,168,76,${opacity}) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,${opacity}) 1px,transparent 1px)`,
    backgroundSize: "60px 60px",
  }} />
);

const SectionLead = ({ children, light = false, className = "" }) => (
  <p className={`text-base leading-[1.75] font-light max-w-[520px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}>{children}</p>
);
const sectionBase = "py-16 md:py-[88px]";
const secPy = "py-16 sm:py-24";
/* ══════════════════════════════════════════════════════════════════════════════
   ANNOUNCE
══════════════════════════════════════════════════════════════════════════════ */
const AnnounceBanner = () => (
  <div className="text-center px-4 py-2.5 text-[12px] sm:text-[13px] relative z-10"
    style={{ background: C.navy, color: "rgba(255,255,255,0.8)" }}>
    Next intake opens{" "}
    <strong style={{ color: C.gold }}>October 2025</strong>
    {" "}— Limited to 5 seats per batch.{" "}
    <a href="#enrol" className="font-semibold text-white underline underline-offset-[3px]">
      Reserve your place →
    </a>
  </div>
);


/* ══════════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const stats = [
    { num: "32L+", lbl: "Highest Package Offered" },
    { num: "2,100+", lbl: "PMs Trained & Placed" },
    { num: "60%", lbl: "Avg. Salary Hike" },
    { num: "150+", lbl: "Hiring Partners" },
  ];
  const features = [
    "Live sessions + lifetime LMS access",
    "2 end-to-end project simulations",
    "PMP exam prep & mock tests included",
    "100% placement assistance",
    "Merit-based scholarships available",
  ];
  const overviewPoints = [
    { bold: "4 weeks", text: " of intensive, practitioner-led training" },
    { bold: "Batch size of 5", text: " — mentorship, not a lecture hall" },
    { bold: "Evenings & weekends", text: " — for working professionals" },
    { bold: "CEH, Security+, SOC Analyst", text: " certification alignment" },
    { bold: null, text: "Live labs on real infrastructure — not sandboxes" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: C.navy ,
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
      <GridBg opacity={0.06} />
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] relative z-10
                      grid grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-[60px]">
        {/* LEFT */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-8 h-px flex-shrink-0" style={{ background: C.gold }} />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: C.gold }}>
              Project Management Programme — PMP
            </span>
          </div>
          <h1 className="font-bold leading-[1.08] tracking-[-1px] mb-5 text-white"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,5vw,62px)" }}>
            Lead. Deliver.<br />Own the Outcome.<br /><em style={{ color: C.gold }}>End to End.</em>
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
            {["Delivery-Focused", "Leadership-Ready", "Agile & Waterfall"].map(t => (
              <span key={t} className="text-[11px] font-semibold tracking-[1.5px] uppercase flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.gold }} />{t}
              </span>
            ))}
          </div>
          <p className="text-[14px] sm:text-[15px] sm:text-base leading-[1.75] font-light mb-8 max-w-[500px]"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Step into the role that sits at the centre of every successful software project — bridging business expectations, development teams, and stakeholder confidence, from kickoff to go-live.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#enrol"
              className="inline-block text-[14px] font-bold px-6 py-3 rounded-sm no-underline transition-colors duration-150"
              style={{ background: C.gold, color: C.navy }}
              onMouseEnter={e => e.currentTarget.style.background = "#d4b060"}
              onMouseLeave={e => e.currentTarget.style.background = C.gold}>Enroll Now</a>
            <a href="#curriculum"
              className="inline-block text-[14px] font-medium px-6 py-3 rounded-sm no-underline border transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
              Explore Curriculum
            </a>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap gap-y-4 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i} className="pr-5 sm:pr-8 mr-5 sm:mr-8 last:border-r-0 last:pr-0 last:mr-0"
                style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(20px,2.5vw,32px)" }}>{s.num}</div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — desktop only */}
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
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 44, color: C.navy }}>₹32,000</span>
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

      {/* Mobile price strip */}
      <div className="lg:hidden px-5 sm:px-8 pb-10 relative z-10">
        <div className="rounded p-5 sm:p-6" style={{ background: C.gold }}>
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
            <span className="text-[11px] font-bold tracking-[2px] uppercase" style={{ color: "rgba(0,0,0,0.5)" }}>Programme Fee</span>
            <span className="text-[13px] font-semibold line-through" style={{ color: "rgba(0,0,0,0.35)" }}>₹95,000</span>
          </div>
          <div className="font-bold tracking-[-1px] leading-none mb-1"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(28px,8vw,36px)", color: C.navy }}>₹32,000</div>
          <div className="text-[13px] mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>Zero-cost EMI from <strong>₹5,833/month</strong></div>
          <a href="#enrol" className="block text-center text-[14px] font-bold py-3 rounded-sm no-underline"
            style={{ background: C.navy, color: "#fff" }}>Book Free Counselling Call →</a>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TRUST STRIP — infinite marquee
══════════════════════════════════════════════════════════════════════════════ */
const TrustStrip = () => {
  const companies = [
    { name: "Accenture", sector: "Consulting" ,
      logo: <img
        src="https://www.vhv.rs/dpng/d/614-6144586_accenture-logo-icon-hd-png-download.png"
        alt=""
        srcset=""
      />
    },
    { name: "Capgemini", sector: "IT Services" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKr5vvxXgNUB3XWwp3zY_WvJvYq7KAX2fXA&s"
        alt=""
        srcset=""
      />
    },
    { name: "Cognizant", sector: "Technology" ,
      logo: <img
        src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1720244491"
        alt=""
        srcset=""
      />
    },
    { name: "HCLTech", sector: "IT Services" ,
      logo: <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/490/non_2x/hcl-tech-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    },
    { name: "ICICI Bank", sector: "Banking" ,
      logo: <img
        src="https://e7.pngegg.com/pngimages/988/978/png-clipart-icici-bank-logo-thumbnail-bank-logos-thumbnail.png"
        alt=""
        srcset=""
      />
    },
    { name: "Razorpay", sector: "Fintech" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EvJxYike5wLY78TG6Nr5s5f6_mwOFmf4Bw&s"
        alt=""
        srcset=""
      />
    },
    { name: "Wipro", sector: "IT Services" ,
      logo: <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/491/non_2x/wipro-glossy-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    },
    { name: "Infosys", sector: "Technology" ,
      logo: <img
        src="https://w7.pngwing.com/pngs/687/655/png-transparent-infosys-logo.png"
        alt=""
        srcset=""
      />
    },
  ];
  const items = [...companies, ...companies];
  
  return (
    <div className="border-b relative" style={{ background: C.mist, borderColor: C.border }}>
      <style>{`
        @keyframes marquee-pm { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @media(prefers-reduced-motion:reduce){.pm-track{animation-play-state:paused!important}}
        .pm-wrap:hover .pm-track{animation-play-state:paused}
      `}</style>
      <div className="flex items-stretch" style={{ height: 52 }}>
        <div className="flex-shrink-0 flex items-center px-4 sm:px-6 lg:px-[60px] z-10 border-r"
          style={{ background: C.mist, borderColor: C.border, boxShadow: `6px 0 12px 0 ${C.mist}` }}>
          <span className="text-[10px] font-bold tracking-[2px] uppercase whitespace-nowrap" style={{ color: C.stone }}>
            Trained &amp; Placed In
          </span>
        </div>
        <div className="pm-wrap flex-1 overflow-hidden relative"
          style={{ maskImage: "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)", WebkitMaskImage: "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)" }}>
          <div className="pm-track flex items-center h-full" style={{ width: "max-content", animation: "marquee-pm 26s linear infinite" }}>
            {items.map((c, i) => (
              <div key={i} className="flex items-center gap-2 px-4 sm:px-6 h-full whitespace-nowrap"
                style={{ borderRight: `1px solid ${C.border}` }}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  >{c.logo}</div>
                <strong className="text-[12px] sm:text-[13px] font-semibold" style={{ color: C.navy }}>{c.name}</strong>
                <span className="text-[11px] hidden sm:inline" style={{ color: C.stone }}>{c.sector}</span>
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
    { num: "32L+", lbl: "Highest package offered to a programme graduate", dark: false },
    { num: "2,100+", lbl: "Project managers trained and placed since inception", dark: true },
    { num: "60%", lbl: "Average salary hike for working professionals", dark: false },
    { num: "150+", lbl: "Companies actively hiring from our PM network", dark: false },
  ];
  return (
    <section id="about" className={`${sectionBase} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          <div>
            <Eyebrow label="What We Do" />
            <Display>We Train You to Lead<br /><Em>Delivery. Not Just Manage It.</Em></Display>
            <p className="text-[15px] leading-[1.8] font-light mt-5 mb-5" style={{ color: C.stone }}>
              Project Management is the most misunderstood role in software delivery. Most organisations confuse it with coordination — scheduling meetings, updating Jira boards, and chasing status updates. Real project management is something altogether different.
            </p>
            <blockquote className="text-[18px] sm:text-[22px] font-serif italic leading-[1.5] pl-5 sm:pl-6 my-6"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy, borderLeft: `3px solid ${C.gold}` }}>
              A project manager who cannot lead the room cannot lead the project. This programme changes that.
            </blockquote>
            <p className="text-[15px] leading-[1.8] font-light mb-4" style={{ color: C.stone }}>
              From inception and planning through delivery, stakeholder management, risk governance, and change control — every module is designed around <strong style={{ color: C.navy, fontWeight: 600 }}>what actually happens on active software delivery projects</strong>.
            </p>
            <p className="text-[15px] leading-[1.8] font-light" style={{ color: C.stone }}>
              Our trainers are <strong style={{ color: C.navy, fontWeight: 600 }}>full-time project managers</strong> running live delivery programmes across banking, insurance, healthcare, and technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px" style={{ background: C.border, border: `1px solid ${C.border}` }}>
            {stats.map((s, i) => (
              <div key={i} className="p-6 sm:p-7 flex flex-col gap-1.5" style={{ background: i === 1 ? C.navy : C.cream }}>
                <div className="font-bold leading-none tracking-[-1px]"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: i === 1 ? C.gold : C.navy }}>
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
    { label: "Duration", value: "4 Weeks", sub: "Intensive but manageable — designed around the pace of real project delivery cycles.", dark: false },
    { label: "Timings", value: "Evenings & Weekends", sub: "Scheduled so working professionals can upskill without stepping away from their current role.", dark: false },
    { label: "Mode", value: "Live Online + LMS", sub: "Real-time instructor-led sessions with full recording access and downloadable resources.", dark: false },
    { label: "Batch Size", value: "5 Students Per Batch", sub: "Intentionally small. Every participant receives direct mentorship and individual feedback.", dark: false },
    { label: "Who Can Join?", value: "IT Professionals & Leads", sub: "Developers, testers, BAs, and team leads moving into delivery leadership.", dark: false },
    { label: "Programme Fee", value: "₹32,000", sub: "Zero-cost EMI from ₹5,833/month. No hidden fees. Merit-based scholarships available.", dark: true },
  ];
  return (
    <section id="path" className={`${sectionBase} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <Eyebrow label="Programme Details" />
        <Display>Structured for the <Em>Serious Professional.</Em></Display>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-10 sm:mt-12"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {cards.map((c, i) => (
            <div key={i} className="p-6 sm:p-7 lg:p-8 flex flex-col gap-2.5" style={{ background: c.dark ? C.navy : C.cream }}>
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
   PREREQUISITES
══════════════════════════════════════════════════════════════════════════════ */
const Prerequisites = () => {
  const items = [
    { num: "01", title: "Strong Communication Skills", desc: "A project manager lives and dies by how clearly they communicate — with stakeholders, development teams, senior leadership, and clients. You do not need to be a natural speaker; you need to be a committed one. We build on what you have." },
    { num: "02", title: "Team Management Experience", desc: "You should have worked alongside developers, testers, or business analysts. Direct people management experience is not mandatory, but an understanding of how cross-functional teams operate is essential." },
    { num: "03", title: "Business Process Understanding", desc: "A project manager who cannot grasp the business problem cannot manage the solution. You should be comfortable engaging with business stakeholders and translating client expectations into delivery direction." },
  ];
  const tags = ["Senior Developer", "Business Analyst", "QA / Test Lead", "Scrum Master", "IT Team Lead", "Product Owner", "Technical Lead", "Delivery Coordinator", "Operations Manager (IT)", "Programme Analyst"];
  return (
    <section id="prerequisites" className={`relative overflow-hidden ${sectionBase}`} style={{ background: C.navy ,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${preRequisitesBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
    }}>
      <GridBg opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Who This Is For" dark />
        <Display light className="mt-1">Before You Join,<br /><Em>Know What We Expect.</Em></Display>
        <Lead light className="mt-4">This programme is not entry-level. It is designed for professionals ready to step up — and we are honest about what that requires.</Lead>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] mt-10 sm:mt-14 items-start">
          {/* List */}
          <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {items.map((it, i) => (
              <div key={i} className="grid gap-4 sm:gap-5 py-6 sm:py-7 items-start"
                style={{ gridTemplateColumns: "40px 1fr", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="font-bold text-[13px] mt-0.5" style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.gold }}>{it.num}</div>
                <div>
                  <h4 className="text-[15px] font-bold text-white mb-1.5">{it.title}</h4>
                  <p className="text-[14px] leading-[1.65] font-light" style={{ color: "rgba(255,255,255,0.5)" }}>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Panel */}
          <div className="rounded-lg p-7 sm:p-9 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="font-bold text-[18px] sm:text-[20px] text-white tracking-[-0.4px] mb-2"
              style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>Ideal Candidate Profiles</div>
            <p className="text-[14px] leading-[1.65] font-light mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              Our most successful graduates typically come from one of these professional backgrounds.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map(t => (
                <span key={t} className="text-[12px] font-semibold px-3.5 py-1.5 rounded-sm border"
                  style={{ color: C.gold, background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.25)" }}>{t}</span>
              ))}
            </div>
            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-[13px] leading-[1.65] font-light mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                Not sure if you qualify? Our advisors will give you an honest assessment on a free 30-minute call — no obligation, no pressure.
              </p>
              <a href="#enrol" className="inline-block text-[13px] font-bold px-5 py-2.5 rounded-sm no-underline transition-colors duration-150"
                style={{ background: C.gold, color: C.navy }}
                onMouseEnter={e => e.currentTarget.style.background = "#d4b060"}
                onMouseLeave={e => e.currentTarget.style.background = C.gold}>Check My Eligibility →</a>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   OBJECTIVES
══════════════════════════════════════════════════════════════════════════════ */
const Objectives = () => {
  const [hov, setHov] = useState(null);
  const objs = [
    { num: "01", title: "Own End-to-End Software Delivery", desc: "Lead a project from the first stakeholder conversation through to post-implementation review — with full accountability for scope, timeline, budget, and quality." },
    { num: "02", title: "Direct a Development Team", desc: "Provide clear direction to developers, testers, and BAs — resolving blockers, managing dependencies, and keeping delivery momentum without becoming a bottleneck." },
    { num: "03", title: "Manage Business Relationships", desc: "Build and sustain productive working relationships with the business side — translating ambiguity into clarity, managing expectations, and communicating project status with confidence." },
    { num: "04", title: "Navigate Conflict & Stay on Track", desc: "Handle conflict between stakeholders, within teams, and across delivery boundaries — while maintaining focus on outcomes and keeping every party aligned to the shared goal." },
    { num: "05", title: "Lead with Credibility", desc: "Demonstrate the leadership qualities that earn a team's trust — decisiveness, presence, clear communication, and the ability to make difficult calls under pressure." },
    { num: "06", title: "Govern Scope, Risk & Budget", desc: "Apply structured governance frameworks to manage the three constraints that determine whether projects succeed or fail — preventing scope creep, identifying risk early, and controlling cost." },
  ];
  return (
    <section id="objectives" className={`${sectionBase} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <Eyebrow label="Programme Objectives" />
        <Display className="mt-1">Seven Things You Will<br />Be Able to <Em>Do.</Em></Display>
        <Lead className="mt-4">These are not learning outcomes written for a brochure. They are the specific competencies our hiring partners verify when they interview our graduates.</Lead>
        {/* 1→2→3 col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-10 sm:mt-12"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {objs.map((o, i) => {
  const isDark = i % 2 !== 0;

  return (
    <div
      key={i}
      className="relative overflow-hidden flex flex-col gap-3.5 p-6 sm:p-7 lg:p-8 transition-colors duration-200 cursor-default"
      style={{
        background:
          hov === i
            ? C.cream
            : isDark
            ? "#111111"
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

      <div
        className="text-[13px] font-bold tracking-[1px]"
        style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          color: C.gold,
        }}
      >
        {o.num}
      </div>

      <div
        className="font-bold text-[16px] sm:text-[17px] tracking-[-0.3px] leading-[1.25]"
        style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          color:
            hov === i
              ? C.navy
              : isDark
              ? "#ffffff"
              : C.navy,
        }}
      >
        {o.title}
      </div>

      <p
        className="text-[13px] leading-[1.65] font-light"
        style={{
          color:
            hov === i
              ? C.stone
              : isDark
              ? "rgba(255,255,255,0.75)"
              : C.stone,
        }}
      >
        {o.desc}
      </p>
    </div>
  );
})}
          {/* Full-width 7th card */}
          <div
  className="sm:col-span-2 lg:col-span-3 flex flex-col gap-3.5 p-6 sm:p-7 lg:p-8"
  style={{
    background: C.white,
    borderTop: `2px solid ${C.gold}`,
  }}
>
  <div
    className="text-[13px] font-bold tracking-[1px]"
    style={{
      fontFamily: "'Playfair Display',Georgia,serif",
      color: C.gold,
    }}
  >
    07
  </div>

  <div
    className="font-bold text-[18px] sm:text-[20px] tracking-[-0.3px]"
    style={{
      fontFamily: "'Playfair Display',Georgia,serif",
      color: C.navy,
    }}
  >
    Adapt to Change Without Losing Direction
  </div>

  <p
    className="text-[14px] leading-[1.65] font-light max-w-[680px]"
    style={{
      color: C.stone,
    }}
  >
    Manage scope changes, shifting priorities, and evolving stakeholder
    requirements without derailing delivery — using structured change
    control processes and agile principles in equal measure.
  </p>
</div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   CURRICULUM
══════════════════════════════════════════════════════════════════════════════ */
const Curriculum = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const modules = [
    { title: "Introduction to Project Management in Software Delivery", body: "What project management actually means inside a technology organisation — how it differs from general management, where the PM sits within the project structure, and what the role demands day to day. We challenge misconceptions early and establish a clear picture of the function participants are preparing for.", tags: ["Foundation", "Role Clarity", "SDLC Context"] },
    { title: "Project — Definition, Inception & Evolution", body: "How projects begin — the business case, feasibility assessment, project charter, and initial stakeholder identification. Understanding what transforms a business problem into a funded project with defined scope and measurable outcomes.", tags: ["Project Charter", "Feasibility", "Stakeholder ID"] },
    { title: "Project Life Cycle — End-to-End Delivery", body: "The full project lifecycle from initiation through planning, execution, monitoring, and closure. Each phase examined in depth — what decisions are made, what documents are produced, who is involved, and what causes projects to fail at each stage.", tags: ["Initiation", "Execution", "Closure", "PMI Aligned"] },
    { title: "Agile Project Management — Scrum & Kanban", body: "A practical, non-theoretical guide to Agile in enterprise environments. Scrum roles, ceremonies, and artefacts — sprint planning, daily standups, retrospectives, backlog refinement — and how a PM leads within and around the Scrum framework. Kanban flow management, WIP limits, and board design.", tags: ["Scrum", "Kanban", "Sprint Planning", "Backlog"] },
    { title: "Project Planning & Stakeholder Management", body: "Building a project plan that reflects reality — WBS, dependency mapping, effort estimation, resource planning, and critical path analysis. Stakeholder identification, power-interest mapping, communication planning, and the practical skills required to manage competing interests.", tags: ["WBS", "Critical Path", "Stakeholder Matrix"] },
    { title: "Primary Constraints — Scope, Time, Budget & Quality", body: "The iron triangle — and the fourth dimension of quality that PM textbooks often underweight. Scope definition and change control, schedule management and earned value, budget tracking and variance analysis, and quality assurance processes.", tags: ["Scope Control", "Earned Value", "Budget Variance", "QA"] },
    { title: "Project Manager Roles & Responsibilities", body: "A granular examination of what a PM actually does at each project stage — across planning, execution, escalation, reporting, vendor coordination, and team leadership. Conflict resolution frameworks, escalation protocols, and the interpersonal dynamics of leading teams.", tags: ["Leadership", "Conflict Resolution", "Escalation", "Reporting"] },
    { title: "Project Management Tools & Software", body: "Hands-on practice with the tools real delivery teams use — MS Project for traditional planning, Jira for agile delivery management, Confluence for documentation, and communication tools including Slack and Teams.", tags: ["MS Project", "Jira", "Confluence", "Gantt Charts"] },
    { title: "Change Management", body: "The science and practice of managing change — both at the project level (scope, requirements, and technical change requests) and at the organisational level (navigating change resistance, communication strategy, and adoption). Structured change control processes and impact assessment frameworks.", tags: ["Change Control", "Impact Assessment", "Organisational Change"] },
  ];
  return (
    <section id="curriculum" className={`${sectionBase} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[80px]">
            <Eyebrow label="Course Syllabus" />
            <Display>Everything the Job<br />Demands. <Em>Covered.</Em></Display>
            <Lead className="mt-4">Nine modules that build from first principles through to advanced delivery leadership — covering both the rigour of structured PM and the agility modern teams require.</Lead>
            <div className="mt-6 p-4 sm:p-5 flex items-center gap-4"
              style={{ background: C.goldLt, borderLeft: `3px solid ${C.gold}` }}>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[15px]"
                style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>SV</div>
              <div>
                <strong className="block text-[14px] font-bold" style={{ color: C.navy }}>Suresh Venkat</strong>
                <span className="text-[12px]" style={{ color: C.stone }}>Programme Lead — 14 yrs in Software Delivery</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {modules.map((m, i) => (
              <div key={i} className="cursor-pointer border-b"
                style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="flex items-center justify-between gap-4 py-4 sm:py-5 text-[14px] sm:text-[15px] font-semibold" style={{ color: C.navy }}>
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
                      {m.tags.map(t => (
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
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QdGY_vcel5ypke_gomPKecM-ibedY9lU7A&s" alt="" srcset="" />, name: "MS Project", desc: "Gantt charts, resource allocation, baseline management, and critical path tracking" },
    { icon: <img src="https://w7.pngwing.com/pngs/935/1018/png-transparent-jira-cloud-macos-bigsur-icon-thumbnail.png" alt="" srcset="" />, name: "Jira", desc: "Agile backlog management, sprint boards, epics, velocity tracking, and workflow configuration" },
    { icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/atlassian-confluence-icon.png" alt="" srcset="" />, name: "Confluence", desc: "Project documentation, knowledge management, requirements pages, and meeting minute templates" },
    { icon: <img src="https://cdn-icons-png.flaticon.com/512/8194/8194264.png" alt="" srcset="" />, name: "MS Excel / Sheets", desc: "RAID logs, budget tracking, stakeholder registers, and project reporting dashboards" },
    { icon: <img src="https://www.uctoday.com/wp-content/uploads/2019/10/MicrosoftTeamsKillingSlack.jpg" alt="" srcset="" />, name: "Slack & Teams", desc: "Communication protocols, channel structuring, status update cadence, and escalation pathways" },
    { icon: <img src="https://e7.pngegg.com/pngimages/26/74/png-clipart-trello-logo-slack-atlassian-trello-blue-text-thumbnail.png" alt="" srcset="" />, name: "Trello / Asana", desc: "Lightweight project tracking — task management, deadlines, board views, and cross-team visibility" },
    { icon: <img src="https://www.shutterstock.com/image-vector/vector-illustration-database-flash-sign-260nw-435595501.jpg" alt="" srcset="" />, name: "Power BI / Dashboards", desc: "Project reporting and KPI visualisation — status dashboards that stakeholders can read and action" },
    { icon: <img src="https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-icon-svg-download-png-3029870.png" alt="" srcset="" />, name: "Azure DevOps", desc: "Work item tracking, pipeline visibility, and sprint management in Microsoft-stack environments" },
  ];
  return (
    <section id="tools" className={`relative overflow-hidden ${sectionBase} border-b`}
      style={{ background: C.navy, borderColor: "rgba(255,255,255,0.08)" ,
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
      <GridBg opacity={0.04} />
      <Wrap className="relative z-10">
        <Eyebrow label="Tools You Will Master" dark />
        <Display light className="mt-1">The <Em>Exact Toolkit</Em><br />Every PM Needs.</Display>
        <Lead light className="mt-4">Hiring managers do not just look for methodology knowledge. They look for candidates who can open the tools and get to work. We ensure you can.</Lead>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-12">
          {tools.map((t, i) => (
            <div key={i} className="flex flex-col items-start gap-3 p-4 sm:p-5 lg:p-6 rounded-lg border cursor-default transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}>
              <div className="w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-[18px] sm:text-[24px] leading-none">{t.icon}</span>
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
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const bars = [
    {
      pct: "40%",
      title: "Case Studies & Discussion",
      desc: "We use real project cases to create meaningful exercises and practical understanding. Every case is drawn from actual engagements our trainers have delivered.",
      dark: false,
    },
    {
      pct: "30%",
      title: "Simulation & Games",
      desc: "People learn best when they engage deeply. Our simulations create decision-making under realistic project conditions — ambiguity, pressure, conflicting stakeholders.",
      dark: true,
    },
    {
      pct: "30%",
      title: "Theory & Application",
      desc: "We use theory only where it adds value — and immediately connect it to application. No isolated concepts. No passive memorization. Only what matters.",
      dark: false,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  window.open("/brochure.pdf", "_blank");

  setFormData({
    name: "",
    email: "",
    phone: "",
  });

  setShowModal(false);
};

  return (
    <section
      id="methodology"
      className={`${secPy} border-b`}
      style={{ background: C.white, borderColor: C.border }}
    >
      <Wrap>
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center">
            <Eyebrow label="Our Methodology" />
          </div>

          <Display>
            How We Build
            <br />
            <Em>Security Professionals.</Em>
          </Display>

          <SectionLead className="mt-4 mx-auto text-center">
            Security competence is not a knowledge problem — it is a
            practice problem. Our methodology is built around this
            truth.
          </SectionLead>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 rounded text-[14px] font-semibold text-center
             bg-yellow-500 text-slate-900
             hover:bg-yellow-600 hover:text-white
             transition-all duration-300"
          >
            Download Brochure
          </button>

          <a
            href="https://wa.me/919100151051"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded text-[14px] font-semibold text-center text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>


        {/* Percentage bars */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{
            background: C.border,
            border: `1px solid ${C.border}`,
          }}
        >
          {bars.map((b, i) => (
            <div
              key={i}
              className="p-7 sm:p-9 flex flex-col gap-3"
              style={{
                background: b.dark ? C.navy : C.cream,
              }}
            >
              <div
                className="font-bold leading-none tracking-[-2px]"
                style={{
                  fontFamily:
                    "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(36px,4vw,52px)",
                  color: b.dark ? C.gold : C.navy,
                }}
              >
                {b.pct}
              </div>

              <div
                className="text-[14px] sm:text-[15px] font-bold"
                style={{
                  color: b.dark ? "#fff" : C.navy,
                }}
              >
                {b.title}
              </div>

              <div
                className="text-[13px] leading-[1.65] font-light"
                style={{
                  color: b.dark
                    ? "rgba(255,255,255,0.45)"
                    : C.stone,
                }}
              >
                {b.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: C.navy }}
              >
                Download Brochure
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Please enter your details to receive the
                brochure.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3 outline-none"
                />

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-lg font-semibold"
                    style={{
                      background: C.gold,
                      color: C.navy,
                    }}
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-3 rounded-lg border font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   WHY US
══════════════════════════════════════════════════════════════════════════════ */
const WhyUs = () => {
  const cards = [
    { icon: "🏗", title: "Trainers Running Live Projects", desc: "Every trainer is a working project manager with active delivery responsibilities. The scenarios they teach from are ones they navigated this quarter — not archived case studies." },
    { icon: "⚡", title: "Both Agile and Waterfall — Without Compromise", desc: "Most programmes pick a side. Real delivery environments do not. We train participants to operate confidently across Agile, hybrid, and structured waterfall environments." },
    { icon: "👥", title: "Five Per Batch. Full Stop.", desc: "This is not a marketing claim. It is the structural reason our graduates perform differently in interviews and in their first six months on the job." },
    { icon: "🎭", title: "Leadership Is Trained, Not Mentioned", desc: "We simulate it — conflict resolution role-plays, escalation exercises, and stakeholder management scenarios that build genuine capability, not confidence without substance." },
    { icon: "📁", title: "Deliverables That Prove the Work", desc: "Graduates leave with two completed project artefact sets — a full project plan for a waterfall engagement and a sprint-complete Agile delivery." },
    { icon: "🤝", title: "Placement Until You Are Placed", desc: "A dedicated placement manager, active recruiter network of 150+ companies, mock interview coaching, and post-offer support — sustained until you have an offer you are ready to accept." },
  ];
  return (
    <section id="why" className={`relative overflow-hidden ${sectionBase}`} style={{ background: C.navy ,
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
      <GridBg opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Why CodersBloom PM" dark />
        <Display light className="mt-1">What Separates This<br /><Em>From Everything Else.</Em></Display>
        <Lead light className="mt-4">There is no shortage of project management courses. There is a real shortage of programmes that produce graduates who can actually walk into a delivery leadership role.</Lead>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 sm:p-7 rounded-lg border transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.07)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
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
   CASE STUDIES / PROJECTS
══════════════════════════════════════════════════════════════════════════════ */
const Projects = () => {
  const steps = [
    { num: "01", title: "Full Waterfall Delivery — End-to-End Project Plan", body: "Take a defined business problem through the complete traditional project lifecycle — charter, WBS, detailed project plan with Gantt, RAID log, stakeholder communication plan, risk register, and a mock steering committee presentation." },
    { num: "02", title: "Agile Sprint Delivery — Scrum Simulation", body: "Run three full Scrum sprints on a simulated software product — backlog creation and prioritisation, sprint planning, daily standups, sprint review, retrospective facilitation, and velocity tracking." },
    { num: "03", title: "Panel Review & Professional Presentation", body: "Present both project artefacts to a panel of working project managers and receive structured professional feedback — on technical accuracy, decision quality, communication clarity, and stakeholder management." },
  ];
  const outcomes = [
    "A complete waterfall project plan — charter, WBS, Gantt, RAID, stakeholder matrix",
    "Three-sprint Agile delivery report — backlog, sprint summaries, velocity chart, retrospective",
    "PMP and Scrum certification exam readiness",
    "Jira and MS Project proficiency — practical, not theoretical",
    "A PM profile that hiring managers can evaluate, not just read",
    "Direct access to our 150+ company hiring partner network",
    "A batch of four peers — built-in professional network from day one",
  ];
  return (
    <section id="projects" className={`${sectionBase} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start">
          <div>
            <Eyebrow label="Real Project Work" />
            <Display>Two Projects.<br /><Em>Real Artefacts.</Em></Display>
            <Lead className="mt-4">Project management cannot be assessed through multiple-choice tests. It is demonstrated through the quality of the work you produce under realistic conditions.</Lead>
            <div className="flex flex-col mt-6">
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
          <div className="relative overflow-hidden rounded p-7 sm:p-10" style={{ background: C.navy }}>
            <GridBg opacity={0.06} />
            <div className="relative z-10">
              <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: C.gold }}>What You Walk Away With</div>
              <div className="font-bold text-[22px] sm:text-[26px] text-white leading-[1.2] tracking-[-0.5px] mb-6"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
                A Profile That<br /><em style={{ color: C.gold }}>Earns the Interview.</em>
              </div>
              <div className="flex flex-col gap-3">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[1.5]"
                    style={{ color: "rgba(255,255,255,0.7)" }}>
                    <GoldCheck dark />{o}
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
const Career = () => {
  const [hov, setHov] = useState(null);
  const cards = [
    { icon: "📄", title: "PM-Specific Resume Crafting", desc: "Your resume built by professionals who know what PM hiring managers look for — framing your prior experience in delivery terms, not generic job description language." },
    { icon: "🎤", title: "Technical & Behavioural Interview Prep", desc: "Mock PM interviews covering both scenario-based questions and situational leadership — practised with working professionals who have sat on both sides of the hiring table." },
    { icon: "🌐", title: "Recruiter Network — 150+ Companies", desc: "Active introductions to hiring partners across IT services, banking, fintech, consulting, and product companies. Not job board access — direct referrals from our placement team." },
    { icon: "🔗", title: "LinkedIn & Profile Positioning", desc: "Complete LinkedIn optimisation for PM hiring — headline, summary, experience framing, and project portfolio section — so recruiters find you, not just the other way around." },
  ];
  return (
    <section id="career" className={`${sectionBase} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <Eyebrow label="Career Services" />
            <Display>Assistance To Placement Is<br /><Em>The Promise.</Em></Display>
          </div>
          <Lead className="md:max-w-[280px]">We do not hand you a certificate and wish you luck. We work alongside you, actively, until you have an offer worth accepting.</Lead>
        </div>
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
    {
      title: "Video Learning Support",
      description:
        "Live sessions are reinforced with video tutorials you can revisit on your own schedule to sharpen understanding and improve retention.",
    },
    {
      title: "Free Resits, Anytime",
      description:
        "Need to revisit a topic or missed a session? Come back at no extra cost. Learning on a fixed timeline doesn't work for everyone, and we don't pretend it does.",
    },
    {
      title: "Direct Faculty Support",
      description:
        "Phone and email access to faculty before, during, and after the program — guidance available when it's actually needed, not just during class hours.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-14 md:py-[88px] border-b"
      style={{
        background: C.cream,
        borderColor: C.border,
      }}
    >
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-14">
          <div>
            <Eyebrow label="Learning Support" />
            <Display>
              Designed For
              <br />
              <Em>Long-Term Success.</Em>
            </Display>
          </div>

          <SectionLead className="md:max-w-[320px]">
            Comprehensive support systems that help you learn effectively,
            revisit concepts when needed, and stay connected with expert
            guidance throughout your journey.
          </SectionLead>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card, i) => {
            const isDark = i % 2 !== 0;

            return (
              <div
                key={i}
                className="p-6 sm:p-8 rounded border flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: isDark ? "#111111" : C.white,
                  borderColor: isDark
                    ? "rgba(255,255,255,0.12)"
                    : C.border,
                }}
              >
                {/* Number Badge */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: isDark
                      ? "#1f1f1f"
                      : C.mist,
                    color: C.gold,
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                  }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{
                      fontFamily:
                        "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-[22px] sm:text-[24px] leading-tight mb-4"
                  style={{
                    color: isDark ? "#ffffff" : C.navy,
                    fontFamily:
                      "'Playfair Display', Georgia, serif",
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[15px] leading-[1.8] flex-1"
                  style={{
                    color: isDark
                      ? "rgba(255,255,255,0.75)"
                      : C.stone,
                  }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   BOTTOM CTA / ENROL FORM
══════════════════════════════════════════════════════════════════════════════ */
const BottomCTA = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", role: "", exp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const checklist = [
    "Free 1:1 career counselling call (30 minutes)",
    "Personalised programme walkthrough for your background",
    "Salary benchmarking for your target PM role and sector",
    "PMP certification pathway advice",
    "EMI & scholarship options discussed upfront",
    "No obligation — learn everything, decide later",
  ];

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(form).forEach(k => { if (!form[k]) newErrors[k] = true; });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  const fldStyle = (key) => ({
    background: C.cream, borderColor: errors[key] ? C.gold : C.border,
    color: C.ink, fontFamily: "'Outfit',sans-serif",
    borderRadius: "2px", fontSize: "14px", outline: "none",
    width: "100%", padding: "11px 14px", border: "1px solid", appearance: "none",
    transition: "border-color 0.12s",
  });

  return (
    <section id="enrol" className="relative overflow-hidden" style={{ background: C.navy ,
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
      <GridBg opacity={0.05} />
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: C.gold }} />
      <Wrap>
        <div className="relative z-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          {/* Left */}
          <div>
            <h2 className="font-bold leading-[1.12] tracking-[-0.8px] text-white mb-4"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(24px,3.5vw,42px)" }}>
              One Conversation<br />Can Change Your <em style={{ color: C.gold }}>Career.</em>
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] font-light mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our advisors are working project managers who have navigated exactly the transition you are considering. No scripts, no pressure — just honest guidance about whether this programme is right for you.
            </p>
            <ul className="flex flex-col gap-3 list-none">
              {checklist.map(item => (
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
          {/* Form */}
          <div className="bg-white rounded p-6 sm:p-9" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
            <div className="font-bold text-[18px] sm:text-[20px] tracking-[-0.3px] mb-1"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>Book Your Free Session</div>
            <div className="text-[12px] sm:text-[13px] mb-5" style={{ color: C.stone }}>A programme advisor will contact you within 24 hours.</div>
            {/* Name row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {[{ label: "First Name", key: "firstName", placeholder: "Suresh" }, { label: "Last Name", key: "lastName", placeholder: "Kumar" }].map(f => (
                <div key={f.key} className="flex flex-col gap-1.5">
                  <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>{f.label}</label>
                  <input style={fldStyle(f.key)} placeholder={f.placeholder} value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={e => e.target.style.borderColor = C.navy}
                    onBlur={e => e.target.style.borderColor = errors[f.key] ? C.gold : C.border} />
                </div>
              ))}
            </div>
            {[
              { label: "Phone / WhatsApp", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
              { label: "Email Address", key: "email", type: "email", placeholder: "suresh@example.com" },
            ].map(f => (
              <div key={f.key} className="flex flex-col gap-1.5 mb-3">
                <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>{f.label}</label>
                <input type={f.type} style={fldStyle(f.key)} placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  onFocus={e => e.target.style.borderColor = C.navy}
                  onBlur={e => e.target.style.borderColor = errors[f.key] ? C.gold : C.border} />
              </div>
            ))}
            <div className="flex flex-col gap-1.5 mb-3">
              <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Current Role</label>
              <select style={fldStyle("role")} value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                <option value="">Select your current role...</option>
                <option>Senior Developer / Tech Lead</option>
                <option>Business Analyst</option>
                <option>QA / Test Lead</option>
                <option>Scrum Master / Agile Coach</option>
                <option>IT Team Lead / Manager</option>
                <option>Other IT Professional</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 mb-4">
              <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Years of Experience</label>
              <select style={fldStyle("exp")} value={form.exp} onChange={e => setForm({ ...form, exp: e.target.value })}>
                <option value="">Select...</option>
                <option>2–4 years</option>
                <option>4–7 years</option>
                <option>7–10 years</option>
                <option>10+ years</option>
              </select>
            </div>
            <button onClick={handleSubmit} disabled={submitted}
              className="w-full text-white border-none text-[14px] font-semibold py-3.5 rounded-sm cursor-pointer transition-colors duration-150"
              style={{ background: submitted ? "#16A34A" : C.navy }}
              onMouseEnter={e => { if (!submitted) e.currentTarget.style.background = C.navyMid; }}
              onMouseLeave={e => { if (!submitted) e.currentTarget.style.background = submitted ? "#16A34A" : C.navy; }}>
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
  const navigate = useNavigate();
  
  const cols = [
    {
    title: "Program",
    links: [
      { label: "Business Analyst", path: "/business-analyst" },
      { label: "Project Management", path: "/project-management" },
      { label: "Cyber Security", path: "/cyber-security" },
      { label: "ServiceNow Training", path: "/servicenow-training" },
      { label: "Data Science", path: "/data-science" },
    ],
  },
    { title: "Institution", links: [{ label: "About CodersBloom", href: "#" }, { label: "Our Trainers", href: "#" }, { label: "Hiring Partners", href: "#" }, { label: "Blog & Insights", href: "#" }] },
    { title: "Contact", links: [{ label: "1800-000-0000 (Free)", href: "tel:+911800000000" }, { label: "admissions@codersbloom.in", href: "mailto:admissions@codersbloom.in" }, { label: "WhatsApp Us", href: "#" }, { label: "Student Portal", href: "#" }] },
  ];
  return (
    <footer style={{ background: C.ink, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <Wrap>
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 py-10 sm:py-14 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <LogoMark size={28} />
              <strong className="font-bold text-[15px] text-white" style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>CodersBloom</strong>
            </a>
            <p className="text-[13px] leading-[1.7] font-light max-w-[280px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Practical, industry-aligned Project Management training — built for the delivery role, not the exam. Training is the beginning. Placement is the promise.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold tracking-[2px] uppercase mb-4" style={{ color: C.gold }}>{col.title}</h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map(l => (
                  <li key={l.label}>
                    {l.path ? (
                      <button
                        onClick={() => navigate(l.path)}
                        className="text-[12px] sm:text-[13px] font-light bg-transparent border-none cursor-pointer p-0 text-left transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "#fff")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color =
                            "rgba(255,255,255,0.4)")
                        }
                      >
                        {l.label}
                      </button>
                    ) : (
                      <a
                        href={l.href}
                        className="text-[12px] sm:text-[13px] font-light no-underline transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "#fff")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color =
                            "rgba(255,255,255,0.4)")
                        }
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-5 text-[11px] sm:text-[12px]"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          <p>© 2025 CodersBloom. All rights reserved. Training is the beginning. Placement is the promise.™</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(t => (
              <a key={t} href="#" className="no-underline transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}>{t}</a>
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
export default function ProjectManagement() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: #FAF8F3; color: #1C1C1C; overflow-x: hidden; }
        body::before {
          content: ''; position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
        input:focus, select:focus { outline: none; border-color: #000 !important; background: #fff !important; }
        @media (max-width: 1023px) { body { padding-bottom: 60px; } }
      `}</style>
      <div className="relative">
        <AnnounceBanner />
        <Nav />
        <Hero />
        <TrustStrip />
        <About />
        <Path />
        <Prerequisites />
        <Objectives />
        <Curriculum />
        <Tools />
        <Methodology />
        <WhyUs />
        <Projects />
        <Career />
        <Testimonials />
        <BottomCTA />
        <Footer />
        <StickyMob />
      </div>
    </>
  );
}
