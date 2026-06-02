import { useState } from "react";
import heroBg from "../assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg";
import objectivesBg from "../assets/bench-accounting-C3V88BOoRoM-unsplash.jpg";
import toolsBg from "../assets/danial-igdery-FCHlYvR5gJI-unsplash.jpg";
import whyUsBg from "../assets/microsoft-edge-TcC5qr3dpgA-unsplash.jpg";
import bottomCtaBg from "../assets/mina-rad-jdS1UfbbIA8-unsplash.jpg";
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

const Eyebrow = ({ label, dark = false, center = false }) => (
  <div className={`inline-flex items-center gap-2.5 mb-4 ${center ? "justify-center" : ""}`}>
    <div className="w-7 h-px flex-shrink-0"
      style={{ background: dark ? "rgba(201,168,76,0.5)" : C.gold }} />
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

const Lead = ({ children, light = false, className = "" }) => (
  <p className={`text-base leading-[1.75] font-light max-w-[520px] ${className}`}
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

const GridBg = ({ opacity = 0.05, size = 60 }) => (
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: `linear-gradient(rgba(201,168,76,${opacity}) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,${opacity}) 1px,transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  }} />
);

const SectionLead = ({ children, light = false, className = "" }) => (
  <p className={`text-base leading-[1.75] font-light max-w-[520px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}>{children}</p>
);

const secPy = "py-16 md:py-[88px]";

/* ══════════════════════════════════════════════════════════════════════════════
   ANNOUNCE
══════════════════════════════════════════════════════════════════════════════ */
const AnnounceBanner = () => (
  <div className="text-center px-4 py-2.5 text-[12px] sm:text-[13px]"
    style={{ background: C.navy, color: "rgba(255,255,255,0.8)" }}>
    Next intake opens <strong style={{ color: C.gold }}>September 2025</strong> — 5 seats per batch.{" "}
    <a href="#enrol" className="font-semibold text-white underline underline-offset-[3px]">Secure your place →</a>
  </div>
);


/* ══════════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const stats = [
    { n: "32 LPA", l: "Highest Salary Offered" },
    { n: "2,800+", l: "Careers Transitioned" },
    { n: "60%", l: "Average Hike Offered" },
    { n: "170+", l: "Companies Hired So Far" },
  ];
  const features = [
    "Live sessions + 24×7 LMS access",
    "2 end-to-end capstone projects",
    "100+ lessons & video tutorials included",
    "100% placement assistance",
    "Resit any session anytime, free",
  ];
  const overview = [
    { b: "Statistics → ML → AI", t: " — one continuous learning journey, not disconnected modules" },
    { b: "Python, SQL, Power BI, Scikit-Learn", t: " — the tools employers actually use" },
    { b: "5 students per batch", t: " — mentorship at a level large cohorts cannot offer" },
    { b: "Weekday evenings & weekends", t: " — designed to fit around full-time work" },
    { b: null, t: "Domain projects across banking, healthcare, fintech, and retail" },
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
        <div className="py-12 sm:py-16 lg:py-20 hero-left">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-8 h-px flex-shrink-0" style={{ background: C.gold }} />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: C.gold }}>
              Data Science, AI &amp; Machine Learning Programme
            </span>
          </div>
          <h1 className="font-bold leading-[1.08] tracking-[-1px] mb-5 text-white"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,5vw,62px)" }}>
            Learn. Build.<br />Solve with <em style={{ color: C.gold }}>Data.</em>
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
            {["Practical", "Industry-Aligned", "Experience-Driven"].map(t => (
              <span key={t} className="text-[11px] font-semibold tracking-[1.5px] uppercase flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.gold }} />{t}
              </span>
            ))}
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.75] font-light mb-8 max-w-[500px]"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Build the confidence to solve real business problems using data, machine learning, and AI — with hands-on training designed for the way the industry actually works, not just how it is taught.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#enrol"
              className="inline-block text-[14px] font-bold px-6 py-3 sm:py-3.5 rounded-sm no-underline transition-colors duration-150"
              style={{ background: C.gold, color: C.navy }}
              onMouseEnter={e => e.currentTarget.style.background = "#d4b060"}
              onMouseLeave={e => e.currentTarget.style.background = C.gold}>Enroll Now</a>
            <a href="#curriculum"
              className="inline-block text-[14px] font-medium px-6 py-3 sm:py-3.5 rounded-sm no-underline border transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
              Explore Curriculum
            </a>
          </div>
          <div className="flex flex-wrap gap-y-4 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i} className="pr-5 sm:pr-8 mr-5 sm:mr-8 last:border-r-0 last:pr-0 last:mr-0"
                style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(20px,2.5vw,32px)" }}>{s.n}</div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — desktop only */}
        <div className="hidden lg:flex flex-col gap-5 my-10 relative z-10">
          <div className="relative overflow-hidden rounded p-7" style={{ background: C.gold }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            <div className="relative z-10">
              <div className="text-[10px] font-bold tracking-[2.5px] uppercase mb-2" style={{ color: "rgba(0,0,0,0.5)" }}>Programme Fee</div>
              <div className="text-lg font-semibold mb-1 line-through" style={{ color: "rgba(0,0,0,0.35)" }}>₹1,10,000</div>
              <div className="flex items-end gap-2 mb-1">
                <span className="font-bold leading-none tracking-[-1.5px]"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 44, color: C.navy }}>₹35,000</span>
                <span className="text-[13px] font-medium mb-1.5" style={{ color: "rgba(0,0,0,0.5)" }}>/ full programme</span>
              </div>
              <div className="text-[13px] font-medium mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>
                Starting at <strong style={{ color: C.navy }}>₹6,667/month</strong> — zero-cost EMI
              </div>
              <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
                {features.map(f => (
                  <div key={f} className="flex items-center gap-2.5 text-[13px] font-medium" style={{ color: "rgba(0,0,0,0.7)" }}>
                    <span className="inline-flex flex-shrink-0 items-center justify-center w-4 h-4 rounded-full border"
                      style={{ background: "rgba(0,0,0,0.12)", borderColor: "rgba(0,0,0,0.2)" }}>
                      <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
                        <polyline points="2,5 4.5,7.5 8,2.5" stroke="#000" strokeWidth="1.5" opacity="0.6" />
                      </svg>
                    </span>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded p-7" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
            <div className="font-bold text-[17px] tracking-[-0.3px] mb-1"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>Programme at a Glance</div>
            <div className="text-[12px] mb-4" style={{ color: C.stone }}>
              Everything you need to go from data curious to data professional — in one structured programme.
            </div>
            <div className="flex flex-col gap-2.5">
              {overview.map((p, i) => (
                <div key={i} className="flex items-start gap-3 text-[13px] leading-[1.55] font-light" style={{ color: C.stone }}>
                  <GoldCheck />
                  <span>{p.b && <strong style={{ color: C.navy, fontWeight: 600 }}>{p.b}</strong>}{p.t}</span>
                </div>
              ))}
            </div>
            <a href="#enrol"
              className="block w-full text-center text-[14px] font-semibold text-white no-underline py-3.5 rounded-sm mt-4 transition-colors duration-150"
              style={{ background: C.navy }}
              onMouseEnter={e => e.currentTarget.style.background = C.navyMid}
              onMouseLeave={e => e.currentTarget.style.background = C.navy}>
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
            <span className="text-[13px] font-semibold line-through" style={{ color: "rgba(0,0,0,0.35)" }}>₹1,10,000</span>
          </div>
          <div className="font-bold tracking-[-1px] leading-none mb-1"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(28px,8vw,36px)", color: C.navy }}>₹35,000</div>
          <div className="text-[13px] mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>Zero-cost EMI from <strong>₹6,667/month</strong></div>
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
    { name: "HDFC Bank", sector: "Banking" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0knfosma2F1AIrXUEyWgR8cVpK5GfX8G2Hg&s"
        alt=""
        srcset=""
      />
    },
    { name: "PhonePe", sector: "Fintech" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo4x8kSTmPUq4PFzl4HNT0gObFuEhivHOFYg&s"
        alt=""
        srcset=""
      />
    },
    { name: "Mu Sigma", sector: "Analytics" ,
      logo: <img
        src="https://yt3.googleusercontent.com/ytc/AIdro_k-7HkbByPWjKpVPO3LCF8XYlKuQuwROO0vf3zo1cqgoaE=s900-c-k-c0x00ffffff-no-rj"
        alt=""
        srcset=""
      />
    },
    { name: "Wipro", sector: "Technology" ,
      logo: <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/491/non_2x/wipro-glossy-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    },
    { name: "Apollo Hospitals", sector: "Healthcare" ,
      logo: <img
        src="https://thumbnail.imgbin.com/13/1/14/imgbin-apollo-hospitals-city-centre-apollo-hospital-indraprastha-health-care-hospital-rREpSfLCiSpmaYWSwtDsi4qAz_t.jpg"
        alt=""
        srcset=""
      />
    },
    { name: "Flipkart", sector: "Retail" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWzGxiYGlEM-IzG4PWRrn875F0LOcXLulhQ&s"
        alt=""
        srcset=""
      />
    },
    { name: "TCS", sector: "Technology" ,
      logo: <img
        src="https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl"
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
  ];
  const items = [...companies, ...companies];
  const Star = () => (
    <svg viewBox="0 0 14 14" width="12" height="12" fill={C.gold}>
      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.1l-3.7 2.2.7-4.1-3-2.9 4.2-.7z" />
    </svg>
  );
  return (
    <div className="border-b relative" style={{ background: C.mist, borderColor: C.border }}>
      <style>{`
        @keyframes marquee-ds { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @media(prefers-reduced-motion:reduce){.ds-track{animation-play-state:paused!important}}
        .ds-wrap:hover .ds-track{animation-play-state:paused}
      `}</style>
      <div className="flex items-stretch" style={{ height: 52 }}>
        <div className="flex-shrink-0 flex items-center px-4 sm:px-6 lg:px-[60px] z-10 border-r"
          style={{ background: C.mist, borderColor: C.border, boxShadow: `6px 0 12px 0 ${C.mist}` }}>
          <span className="text-[10px] font-bold tracking-[2px] uppercase whitespace-nowrap" style={{ color: C.stone }}>
            Trained &amp; Placed In
          </span>
        </div>
        <div className="ds-wrap flex-1 overflow-hidden relative"
          style={{ maskImage: "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)", WebkitMaskImage: "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)" }}>
          <div className="ds-track flex items-center h-full"
            style={{ width: "max-content", animation: "marquee-ds 28s linear infinite" }}>
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
    { n: "32 LPA", l: "Highest salary offered to a CodersBloom Data Science graduate", dark: false },
    { n: "2,800+", l: "Careers successfully transitioned since inception", dark: true },
    { n: "60%", l: "Average salary hike for working professionals", dark: false },
    { n: "170+", l: "Companies that have hired CodersBloom graduates", dark: false },
  ];
  return (
    <section id="about" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          <div>
            <Eyebrow label="What We Do" />
            <Display>We Train You for the<br /><Em>Work. Not the Tutorial.</Em></Display>
            <p className="text-[15px] leading-[1.8] font-light mt-5 mb-5" style={{ color: C.stone }}>
              Our Data Science, AI &amp; Machine Learning Programme is built to deliver what the industry actually expects — analytical thinking, problem-solving, business understanding, model-building capability, and the confidence to turn data into decisions.
            </p>
            <blockquote className="text-[18px] sm:text-[22px] font-serif italic leading-[1.5] pl-5 sm:pl-6 my-6"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy, borderLeft: `3px solid ${C.gold}` }}>
              True expertise in Data Science is not built through tutorials alone. It is built through experimentation — messy datasets, failed models, and the ability to ask better questions.
            </blockquote>
            <p className="text-[15px] leading-[1.8] font-light mb-4" style={{ color: C.stone }}>
              From data cleaning and exploratory analysis to machine learning models, AI applications, and deployment thinking — every part is built around{" "}
              <strong style={{ color: C.navy, fontWeight: 600 }}>practical execution on real business problems</strong>.
            </p>
            <p className="text-[15px] leading-[1.8] font-light" style={{ color: C.stone }}>
              Our programmes are led by{" "}
              <strong style={{ color: C.navy, fontWeight: 600 }}>working professionals from our in-house delivery teams</strong> — experts who have delivered real-world data science projects across banking, fintech, healthcare, retail, and AI-driven business transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px" style={{ background: C.border, border: `1px solid ${C.border}` }}>
            {stats.map((s, i) => (
              <div key={i} className="p-6 sm:p-7 flex flex-col gap-1.5" style={{ background: i === 1 ? C.navy : C.cream }}>
                <div className="font-bold leading-none tracking-[-1px]"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: i === 1 ? C.gold : C.navy }}>
                  {s.n}
                </div>
                <div className="text-[12px] leading-[1.5]" style={{ color: i === 1 ? "rgba(255,255,255,0.5)" : C.stone }}>{s.l}</div>
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
    { label: "Duration", value: "6 Weeks", sub: "A structured, intensive programme paced to build real depth — not just surface familiarity with tools.", dark: false },
    { label: "Timings", value: "Evenings & Weekends", sub: "Designed for working professionals. Upskill without stepping away from your current role.", dark: false },
    { label: "Mode", value: "Live Online + LMS", sub: "Real-time instructor-led sessions with 24×7 LMS access, recordings, articles, and case study resources.", dark: false },
    { label: "Batch Size", value: "5 Students Per Class", sub: "Deliberately small. Every participant's work receives individual review and direct mentor feedback.", dark: false },
    { label: "Who Can Join?", value: "Graduates & Professionals", sub: "Open to IT professionals, engineers, analysts, and career changers with basic quantitative comfort.", dark: false },
    { label: "Programme Fee", value: "₹35,000", sub: "Zero-cost EMI from ₹6,667/month. No hidden fees. Scholarship options available.", dark: true },
  ];
  return (
    <section id="path" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <Eyebrow label="Programme Details" />
        <Display>Your Path to <Em>Success.</Em></Display>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-10 sm:mt-[52px]"
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
   OBJECTIVES
══════════════════════════════════════════════════════════════════════════════ */
const Objectives = () => {
  const steps = [
    { num: "01", title: "Hands-On Exposure", desc: "Build strong hands-on exposure to Data Science fundamentals — from statistics and Python to SQL, data wrangling, and machine learning concepts — and develop a solid professional foundation grounded in practical application." },
    { num: "02", title: "Real Business Outcomes", desc: "Every concept you learn is reinforced through real business case studies, live workshops, and simulations that mirror the messy, constraint-driven environments of actual data projects. Mastery is built through iteration — not observation." },
    { num: "03", title: "End-to-End Execution", desc: "Execute two complete end-to-end project implementations across analytics, machine learning, and AI-driven decision making — gaining the kind of hands-on experience that no certificate alone can replicate." },
  ];
  return (
    <section id="objectives" className={`relative overflow-hidden ${secPy}`} style={{ background: C.navy,
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
      <GridBg opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Programme Objectives" dark />
        <Display light className="mt-1">Three Areas to Work<br />Towards <Em>Success.</Em></Display>
        <Lead light className="mt-4">A carefully structured experience built to take you from foundational understanding to professional-grade execution — in a single continuous programme.</Lead>
        <div className="obj-grid grid grid-cols-1 md:grid-cols-3 mt-10 sm:mt-[60px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {steps.map((s, i) => (
            <div key={i} className={`obj-step-${i} obj-step flex flex-col gap-3.5 py-8 md:py-10`}>
              <div className="font-bold leading-none tracking-[-2px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(42px,5vw,56px)", color: "rgba(255,255,255,0.06)" }}>{s.num}</div>
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
   CURRICULUM
══════════════════════════════════════════════════════════════════════════════ */
const Curriculum = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const modules = [
    { title: "Introduction to Data Science & Python", body: "What Data Science actually means inside a real organisation — and how Python enables it. We begin with role clarity, then move into Python fundamentals: data types, control flow, functions, and libraries. Participants write their first data manipulation scripts within the first two sessions.", tags: ["Foundation", "Python", "NumPy", "Pandas"] },
    { title: "Statistics, Probability & Hypothesis Testing", body: "The mathematical backbone of every machine learning model and analytical decision. Descriptive statistics, probability distributions, central limit theorem, confidence intervals, A/B testing, and hypothesis testing — taught through business scenarios, not abstract theory.", tags: ["Statistics", "Probability", "A/B Testing", "Hypothesis Testing"] },
    { title: "Exploratory Data Analysis & Data Cleaning", body: "Real-world data is never clean. EDA and preprocessing are where most analytical projects are won or lost. Participants work with deliberately messy datasets — handling nulls, outliers, encoding, scaling, and distribution issues — before any model is built.", tags: ["EDA", "Data Cleaning", "Pandas", "Matplotlib"] },
    { title: "SQL for Data Analysis", body: "Every data professional must be fluent in SQL. We cover querying, joins, subqueries, window functions, aggregations, and performance considerations against real business datasets. SQL is taught as the primary language for extracting analytical value from enterprise databases.", tags: ["SQL", "Window Functions", "Query Optimisation"] },
    { title: "Data Visualisation & Power BI Dashboards", body: "Insights that cannot be communicated do not create business value. We cover visualisation principles, storytelling with data, and hands-on Power BI — from connecting data sources and building calculated measures to designing executive dashboards that non-technical stakeholders can interpret.", tags: ["Power BI", "Matplotlib", "Seaborn", "Plotly"] },
    { title: "Machine Learning Fundamentals & Supervised Learning", body: "The core of the programme. We cover the full supervised learning toolkit — linear and logistic regression, decision trees, random forests, gradient boosting, SVMs, and k-nearest neighbours — with emphasis on understanding when to use each model, how to evaluate it, and how to communicate model performance to a business audience.", tags: ["Scikit-Learn", "XGBoost", "Feature Engineering", "Cross-Validation"] },
    { title: "Unsupervised Learning & Model Evaluation", body: "Clustering, dimensionality reduction, and anomaly detection — essential for customer segmentation, fraud identification, and operational pattern recognition. Deep focus on model evaluation: precision, recall, F1, ROC-AUC, confusion matrices, and the business interpretation of each metric.", tags: ["K-Means", "PCA", "DBSCAN", "Model Evaluation"] },
    { title: "NLP, Generative AI & Prompt Engineering", body: "Natural Language Processing fundamentals — text preprocessing, sentiment analysis, topic modelling, and classification. Then a comprehensive module on Generative AI: how large language models work, how to design prompts that produce consistent high-quality outputs, and how to apply GenAI capabilities inside real business workflows.", tags: ["NLP", "Generative AI", "Prompt Engineering", "LLMs"] },
    { title: "AI Applications in Business & Capstone Projects", body: "Where everything comes together. Participants apply their full skill set to two domain-specific capstone projects — one analytics-focused, one machine learning or AI-driven — across sectors including banking, insurance, healthcare, fintech, and retail. Projects are scoped, executed, and presented to a panel of working data professionals.", tags: ["Capstone", "AI in Business", "End-to-End Pipeline", "Presentation"] },
  ];
  return (
    <section id="curriculum" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[80px]">
            <Eyebrow label="Course Syllabus" />
            <Display>The Most<br />Comprehensive<br />Curriculum. <Em>Period.</Em></Display>
            <Lead className="mt-4">Statistics, analytics, machine learning, generative AI, and business application — combined into one practical learning system.</Lead>
            <div className="mt-6 p-4 sm:p-5 flex items-center gap-4"
              style={{ background: C.goldLt, borderLeft: `3px solid ${C.gold}` }}>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[15px]"
                style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>RA</div>
              <div>
                <strong className="block text-[14px] font-bold" style={{ color: C.navy }}>Reeti Ahuja</strong>
                <span className="text-[12px]" style={{ color: C.stone }}>Programme Lead, CodersBloom</span>
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
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s" alt="" srcset="" />, name: "Python", desc: "The primary language of data science — Pandas, NumPy, Matplotlib, Seaborn, and Scikit-Learn from first principles to production use" },
    { icon: <img src="https://gimgs.nohat.cc/thumb/f/640/mysql-logo-database-microsoft-sql-server-proprietary-background--5855662718320640.jpg" alt="" srcset="" />, name: "SQL", desc: "Enterprise database querying, joins, window functions, and analytical aggregations against real business data schemas" },
    { icon: <img src="https://www.shutterstock.com/image-vector/vector-illustration-database-flash-sign-260nw-435595501.jpg" alt="" srcset="" />, name: "Power BI", desc: "Business intelligence dashboards, DAX measures, data model design, and executive-ready reporting for non-technical stakeholders" },
    { icon: <img src="https://e7.pngegg.com/pngimages/905/45/png-clipart-scikit-learn-python-scikit-logo-brand-learning-text-computer-thumbnail.png" alt="" srcset="" />, name: "Scikit-Learn", desc: "The complete ML pipeline — model training, evaluation, hyperparameter tuning, and cross-validation for supervised and unsupervised tasks" },
    { icon: <img src="https://www.cake.ai/hubfs/Components%20Logos/Type=Technology%2C%20Size=S%2C%20Label=LightGBM.png" alt="" srcset="" />, name: "XGBoost / LightGBM", desc: "Gradient boosting frameworks used in production ML systems across fintech, banking, and insurance predictive modelling" },
    { icon: <img src="https://w7.pngwing.com/pngs/571/118/png-transparent-keras-logo-thumbnail.png" alt="" srcset="" />, name: "TensorFlow / Keras", desc: "Deep learning foundations — neural network architecture, training loops, and application to classification and NLP tasks" },
    { icon: <img src="https://miro.medium.com/v2/resize:fit:1200/1*cFUtGejs4cc2W9nD0qNVUA.jpeg" alt="" srcset="" />, name: "OpenAI / LLM APIs", desc: "Prompt engineering, retrieval-augmented generation, and building AI-powered analytical tools on top of large language models" },
    { icon: <img src="https://p7.hiclipart.com/preview/230/115/799/github-user-source-code-fork-github-thumbnail.jpg" alt="" srcset="" />, name: "Jupyter & Git", desc: "The professional workflow for data scientists — reproducible notebooks, version control, and collaborative code management" },
  ];
  return (
    <section id="tools" className={`relative overflow-hidden ${secPy} border-b`}
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
      <GridBg opacity={0.04} />
      <Wrap className="relative z-10">
        <Eyebrow label="Tools You Will Master" dark />
        <Display light className="mt-1">The <Em>Exact Toolkit</Em><br />Employers Expect.</Display>
        <Lead light className="mt-4">Learning a tool is not enough. Participants leave knowing how to use each one to solve actual business problems — because professional readiness is the only standard we measure against.</Lead>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-[52px]">
          {tools.map((t, i) => (
            <div key={i} className="flex flex-col items-start gap-3 p-4 sm:p-5 lg:p-6 rounded-lg border cursor-default transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}>
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
   CASE STUDIES
══════════════════════════════════════════════════════════════════════════════ */
const CaseStudies = () => {
  const steps = [
    { num: "01", title: "Assignment", body: "Real business case studies are explained in detail and assigned to participants for practical execution — across analytics, machine learning, and AI-driven decision-making scenarios drawn from the actual sectors our graduates go on to work in." },
    { num: "02", title: "Review", body: "Once participants submit their work, our mentors review every detail and provide structured, specific feedback during live sessions. Not generic comments — line-by-line analysis of analytical decisions, code quality, and business interpretation." },
    { num: "03", title: "Revise & Rework", body: "Based on mentor feedback, participants improve their analysis, refine their models, and sharpen their problem-solving approach. This rework cycle is where the most significant professional growth happens — and where the gap between knowing and doing closes." },
    { num: "04", title: "Adapt", body: "This process continues until participants naturally adopt the mindset, workflow, and professional discipline of a Data Scientist. The goal is not assignment completion. It is the internalisation of how high-quality analytical work is actually produced." },
  ];
  const outcomes = [
    "Two completed capstone projects — an analytics delivery and an ML or AI-driven solution",
    "A GitHub portfolio with reproducible, production-ready notebooks",
    "Power BI dashboard showcasing real business intelligence deliverables",
    "Python and SQL proficiency verified through assessed project work",
    "Documented GenAI and prompt engineering experience employers can evaluate",
    "Direct introductions to our 170+ company hiring partner network",
    "A cohort of four peers — a built-in professional network from day one",
  ];
  return (
    <section id="projects" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start">
          <div>
            <Eyebrow label="How We Build Competence" />
            <Display>Assign. Review.<br />Revise. <Em>Master.</Em></Display>
            <Lead className="mt-4">Our case study methodology is the engine behind every successful graduate. Mastery is built through iteration — not observation.</Lead>
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
            <GridBg opacity={0.06} size={40} />
            <div className="relative z-10">
              <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: C.gold }}>What You Walk Away With</div>
              <div className="font-bold text-[22px] sm:text-[26px] text-white leading-[1.2] tracking-[-0.5px] mb-6"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
                A Profile That<br /><em style={{ color: C.gold }}>Speaks for Itself.</em>
              </div>
              <div className="flex flex-col gap-3.5">
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
   DOMAINS
══════════════════════════════════════════════════════════════════════════════ */
const Domains = () => {
  const [hov, setHov] = useState(null);
  const domains = [
    { icon: "🏦", title: "Banking", desc: "Where data science has the highest business stakes — from credit risk and fraud to customer intelligence and revenue forecasting.", tags: ["Risk Analytics", "Fraud Detection", "Credit Modelling", "Forecasting"] },
    { icon: "🛡️", title: "Insurance", desc: "Actuarial and claims data transformed into predictive intelligence — segmenting customers, flagging fraud, and pricing risk accurately.", tags: ["Claims Analytics", "Customer Segmentation", "Risk Prediction"] },
    { icon: "🏥", title: "Healthcare", desc: "Operational analytics, patient outcome modelling, and revenue cycle management — sectors where data quality directly affects human decisions.", tags: ["Predictive Analytics", "RCM", "Health Intelligence"] },
    { icon: "⚙️", title: "Operations", desc: "BPO, KPO, and enterprise operations — where data science drives process optimisation, risk management, and fraud investigation at scale.", tags: ["Process Optimisation", "Risk Management", "Fraud Investigation"] },
    { icon: "💻", title: "Technology", desc: "AI products, SaaS analytics, CRM/ERP intelligence, CodersBloom, fintech, and automation — the largest employer of data science talent in India.", tags: ["AI Products", "SaaS Analytics", "Automation", "Fintech"] },
    { icon: "📈", title: "Finance", desc: "Capital markets, trade finance, forex, mutual funds, and revenue forecasting — where quantitative models drive billions in decisions daily.", tags: ["Capital Markets", "Revenue Forecasting", "Trade Finance"] },
  ];
  return (
    <section id="domains" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-[52px]">
          <div>
            <Eyebrow label="Industry Domains" />
            <Display>We Have Expertise Across<br /><Em>Six Sectors.</Em></Display>
          </div>
          <Lead className="md:max-w-[300px]">Data Science roles exist in every industry. Our curriculum and capstone projects are built around the domains our graduates actually go on to work in.</Lead>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {domains.map((d, i) => {
  const isDark = i % 2 !== 0;

  return (
    <div
      key={i}
      className="relative overflow-hidden flex flex-col gap-4 p-6 sm:p-7 lg:p-8 transition-colors duration-200 cursor-default"
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
        className="w-10 h-10 sm:w-11 sm:h-11 border rounded-sm flex items-center justify-center text-[18px] sm:text-[20px]"
        style={{
          borderColor: isDark
            ? "rgba(255,255,255,0.15)"
            : C.border,
          background: isDark
            ? "#1a1a1a"
            : C.cream,
        }}
      >
        {d.icon}
      </div>

      <div
        className="font-bold text-[16px] sm:text-[17px] tracking-[-0.3px]"
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
        {d.title}
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
        {d.desc}
      </p>

      <div className="flex gap-1.5 flex-wrap">
        {d.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium px-2 py-0.5 rounded-sm"
            style={{
              color:
                hov === i
                  ? C.stone
                  : isDark
                  ? "#ffffff"
                  : C.stone,
              background:
                hov === i
                  ? C.mist
                  : isDark
                  ? "rgba(255,255,255,0.08)"
                  : C.mist,
              border: isDark
                ? "1px solid rgba(255,255,255,0.1)"
                : "none",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
})}
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // API call yahan lagegi
    // await fetch("/api/brochure", {...})

    alert(
      "Thank you! Your details have been submitted successfully."
    );

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
            className="px-8 py-4 rounded text-[14px] font-semibold text-center transition-all duration-300"
            style={{
              background: C.gold,
              color: C.navy,
            }}
          >
            Download Brochure
          </button>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded text-[14px] font-semibold text-center transition-all duration-300"
            style={{
              backgroundColor: "#25D366",
              color: "#ffffff",
            }}
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
    { icon: "🏗", title: "Completely Practical. Real-Time.", desc: "A strong Data Science foundation built through actual project work across analytics, ML, and AI applications — not slide presentations and passive observation." },
    { icon: "👨‍💻", title: "Facilitators With Deep Delivery Experience", desc: "Experienced professionals with active project histories across data science, analytics, and AI implementation. They teach from what they do — not from what they once did." },
    { icon: "👥", title: "5 Students Per Class", desc: "Small batches allow stronger mentorship, better learning outcomes, and the space to ask better questions. Personal attention is a structural commitment — not a marketing promise." },
    { icon: "📚", title: "24×7 LMS Access", desc: "Premium learning resources — articles, white papers, case studies, frameworks, and reference material — accessible throughout the year, not just during the active programme window." },
    { icon: "🔁", title: "Resit Anytime, Free", desc: "Missed a session or need deeper clarity on a module? You can revisit the course at no additional cost — because the investment is in your outcome, not just your attendance." },
    { icon: "🎯", title: "100% Placement Assistance", desc: "Training is only the beginning. We actively support placement outcomes — strengthening both capability and employability — until you have an offer you are ready to accept." },
  ];
  return (
    <section id="why" className={`relative overflow-hidden ${secPy}`} style={{ background: C.navy ,
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
        <Eyebrow label="Why CodersBloom" dark />
        <Display light className="mt-1">What Makes This<br /><Em>Different.</Em></Display>
        <Lead light className="mt-4">Our goal is not course completion. It is professional transformation. We make sure you leave as a Data Professional — not just someone who attended training.</Lead>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-10 sm:mt-[52px]">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7 rounded-lg border transition-all duration-200"
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
   CAREER SERVICES
══════════════════════════════════════════════════════════════════════════════ */
const Career = () => {
  const [hov, setHov] = useState(null);
  const cards = [
    { icon: "🧑‍🏫", title: "One-to-One Mentoring", desc: "Every career journey is different. Personalised mentoring based on your background, goals, and transition path — not a one-size-fits-all programme." },
    { icon: "🗺", title: "Career Coaching & Strategy", desc: "Dedicated career coaches help define a clear, specific strategy for your next move — positioning you for the right roles, not just any role." },
    { icon: "📁", title: "Portfolio & Resume Building", desc: "A professional profile built to reflect your capability, credibility, and project readiness — including GitHub portfolio structuring and LinkedIn optimisation." },
    { icon: "📣", title: "Profile Marketing", desc: "We actively market participant profiles through alumni networks, corporate HRs, recruitment firms, and consultancies — so opportunities come to you." },
    { icon: "🎤", title: "Mock Interview Events", desc: "Practice with mentors and industry professionals so real interviews feel familiar — not intimidating. Every attempt is followed by structured performance analysis." },
    { icon: "🌐", title: "Recruitment Network — 170+ Companies", desc: "CodersBloom connects top talent with recruiters across India. Our participants have been hired by leading global enterprises and consulting firms." },
    { icon: "🔍", title: "Interview Analysis", desc: "Preparation based on real job descriptions, plus post-interview analysis so every attempt becomes stronger than the last. We do not just prepare you — we debrief with you." },
    { icon: "🤝", title: "Post-Placement Job Support", desc: "Support continues after you join. The first few months on the job matter — and we remain available for guidance as you navigate your first real data science role." },
  ];
  return (
    <section id="career" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-[52px]">
          <div>
            <Eyebrow label="Career Services" />
            <Display>Go From Job Search<br />to <Em>Job Success.</Em></Display>
          </div>
          <Lead className="md:max-w-[280px]">Our support continues after placement — because the first few months on the job matter just as much as getting hired.</Lead>
        </div>
        {/* 1→2→4 col */}
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
   BOTTOM CTA / ENROL
══════════════════════════════════════════════════════════════════════════════ */
const BottomCTA = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", domain: "", status: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const checklist = [
    "Free 1:1 career counselling call (30 minutes)",
    "Personalised programme walkthrough for your background",
    "Role mapping — which data science titles fit your profile",
    "Salary benchmarking for your target sector",
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
          <div>
            <h2 className="font-bold leading-[1.12] tracking-[-0.8px] text-white mb-4"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(24px,3.5vw,42px)" }}>
              One Conversation<br />Can Change Your <em style={{ color: C.gold }}>Career.</em>
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] font-light mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our advisors are working data professionals who have navigated exactly the transition you are considering. No scripts, no pressure — just honest guidance about whether this programme is the right move for you right now.
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

          <div className="bg-white rounded p-6 sm:p-9" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
            <div className="font-bold text-[18px] sm:text-[20px] tracking-[-0.3px] mb-1"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>Start Your Data Science Journey</div>
            <div className="text-[12px] sm:text-[13px] mb-5" style={{ color: C.stone }}>A programme advisor will contact you within 24 hours.</div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              {[{ label: "First Name", key: "firstName", placeholder: "Priya" }, { label: "Last Name", key: "lastName", placeholder: "Sharma" }].map(f => (
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
              { label: "Email Address", key: "email", type: "email", placeholder: "priya@example.com" },
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
              <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Domain of Interest</label>
              <select style={fldStyle("domain")} value={form.domain} onChange={e => setForm({ ...form, domain: e.target.value })}>
                <option value="">Select a sector...</option>
                <option>Banking &amp; Financial Services</option>
                <option>Insurance</option>
                <option>Healthcare</option>
                <option>Technology / Fintech</option>
                <option>Retail / E-Commerce</option>
                <option>Help me decide</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5 mb-4">
              <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Current Status</label>
              <select style={fldStyle("status")} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                <option value="">Select...</option>
                <option>Final Year / Recent Graduate</option>
                <option>Working Professional — Non-Data (0–3 yrs)</option>
                <option>Working Professional — Non-Data (3+ yrs)</option>
                <option>Already in Analytics / Data (Upskilling)</option>
                <option>Career Break / Returning to Work</option>
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
      { label: "Data Science", path: "/data-science" },
    ],
  },
    { title: "Institution", links: [{ label: "About CodersBloom", href: "#" }, { label: "Our Trainers", href: "#" }, { label: "Hiring Partners", href: "#" }, { label: "Blog & Insights", href: "#" }] },
    { title: "Contact", links: [{ label: "1800-000-0000 (Free)", href: "tel:+911800000000" }, { label: "admissions@CodersBloom.in", href: "mailto:admissions@CodersBloom.in" }, { label: "WhatsApp Us", href: "#" }, { label: "Student Portal", href: "#" }] },
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
            <p className="text-[13px] leading-[1.7] font-light max-w-[260px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Practical, industry-aligned Data Science, AI &amp; ML training — built for the role, not the certificate. Enabling Enterprises Change™
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
          <p>© 2025 CodersBloom. All rights reserved. Enabling Enterprises Change™</p>
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
export default function DataScience() {
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
        /* Hero fade-up animation */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero-left > * { animation: fadeUp 0.6s ease both; }
        .hero-left > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-left > *:nth-child(2) { animation-delay: 0.2s; }
        .hero-left > *:nth-child(3) { animation-delay: 0.3s; }
        .hero-left > *:nth-child(4) { animation-delay: 0.4s; }
        .hero-left > *:nth-child(5) { animation-delay: 0.5s; }
        .hero-left > *:nth-child(6) { animation-delay: 0.6s; }
        /* Objectives responsive border */
        .obj-step { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .obj-step:last-child { border-bottom: none; }
        @media (min-width: 768px) {
          .obj-step { border-bottom: none; }
          .obj-step-0 { padding-right: 36px; border-right: 1px solid rgba(255,255,255,0.08); }
          .obj-step-1 { padding-left: 36px; padding-right: 36px; border-right: 1px solid rgba(255,255,255,0.08); }
          .obj-step-2 { padding-left: 36px; }
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
        <Objectives />
        <Curriculum />
        <Tools />
        <CaseStudies />
        <Domains />
        <Methodology />
        <WhyUs />
        <Career />
        <Testimonials />
        <BottomCTA />
        <Footer />
        <StickyMob />
      </div>
    </>
  );
}
