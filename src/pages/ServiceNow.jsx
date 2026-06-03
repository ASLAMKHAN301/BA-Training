import { useState, useEffect, useRef } from "react";
import heroBg from "../assets/copernico-p_kICQCOM4s-unsplash.jpg";
import objectivesBg from "../assets/microsoft-copilot-ghVMdPN33vM-unsplash.jpg";
import toolsBg from "../assets/officeImg.jpg";
import whyUsBg from "../assets/ofspace-llc-I96XlMeU4oY-unsplash.jpg";
import bottomCtaBg from "../assets/bottomCtaBg.jpg";
import Nav from "../components/layout/Nav";

// ── DATA ──────────────────────────────────────────────────────────────────────
const COMPANIES = [
  {
    name: "Accenture",
    type: "Consulting",
    logo: (
      <img
        src="https://www.vhv.rs/dpng/d/614-6144586_accenture-logo-icon-hd-png-download.png"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "Capgemini",
    type: "IT Services",
    logo: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKr5vvxXgNUB3XWwp3zY_WvJvYq7KAX2fXA&s"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "Cognizant",
    type: "Technology",
    logo: (
      <img
        src="https://companieslogo.com/img/orig/CTSH-82a8444b.png?t=1720244491"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "HCLTech",
    type: "IT Services",
    logo: (
      <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/490/non_2x/hcl-tech-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "Infosys",
    type: "Technology",
    logo: (
      <img
        src="https://w7.pngwing.com/pngs/687/655/png-transparent-infosys-logo.png"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "Wipro",
    type: "IT Services",
    logo: (
      <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/491/non_2x/wipro-glossy-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "TCS",
    type: "Technology",
    logo: (
      <img
        src="https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl"
        alt=""
        srcset=""
      />
    ),
  },
  {
    name: "DXC Technology",
    type: "ITSM",
    logo: (
      <img
        src="https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/about-us/newsroom/DXC-Full-Color.png"
        alt=""
        srcset=""
      />
    ),
  },
];

const CURRICULUM = [
  {
    title: "Platform Fundamentals & ITSM Overview",
    body: "The Now Platform architecture, navigation, and core concepts — application scope, update sets, tables, and records. We establish a clear picture of how enterprise ServiceNow environments are structured before touching any configuration.",
    tags: ["Foundation", "CSA Aligned", "ITSM Context"],
    defaultOpen: true,
  },
  {
    title: "Tables, Fields & Data Model Design",
    body: "How to design and extend the ServiceNow data model — creating custom tables, fields, and relationships, using dictionary entries, choice lists, and reference fields to build robust data structures that support business requirements.",
    tags: ["Data Modelling", "Database Design"],
  },
  {
    title: "Incident, Problem & Change Management Configuration",
    body: "End-to-end configuration of the three primary ITSM modules — setting up categories, assignment groups, priority matrices, SLA definitions, escalation rules, and approval workflows for each management process.",
    tags: ["ITSM", "SLA Design", "CIS Aligned"],
  },
  {
    title: "Flow Designer & Workflow Automation",
    body: "Building automation flows from first principles — triggers, conditions, actions, and subflows. We cover both Flow Designer and the Workflow Editor so participants are equipped for any platform version they encounter in production.",
    tags: ["Automation", "Flow Designer"],
  },
  {
    title: "Scripting — Business Rules, Client Scripts & Script Includes",
    body: "JavaScript-based platform scripting — when to use each script type, GlideRecord API, GlideSystem, and client-side scripting fundamentals. Taught through realistic scenarios directly from production environments.",
    tags: ["Scripting", "JavaScript", "CAD Aligned"],
  },
  {
    title: "Service Portal & Catalogue Configuration",
    body: "Building and customising Service Portal pages and widgets — catalogue item design, variable sets, order guides, and user criteria. Delivering portal experiences that end users actually adopt.",
    tags: [],
  },
  {
    title: "User Administration, Roles & Access Control",
    body: "User provisioning, group management, role design, and ACL configuration — applying security controls at the field, record, and table level while maintaining operational efficiency.",
    tags: [],
  },
  {
    title: "Reporting, Dashboards & Performance Analytics",
    body: "Building reports, homepages, and Performance Analytics dashboards — giving stakeholders the visibility they need while teaching participants how to translate business metrics into actionable platform data.",
    tags: [],
  },
  {
    title: "Integrations — REST, SOAP & IntegrationHub",
    body: "Connecting ServiceNow to external systems using REST and SOAP web services, import sets, transform maps, and IntegrationHub spokes — the integration patterns that every enterprise implementation demands.",
    tags: [],
  },
  {
    title: "Custom Application Development with App Engine",
    body: "Designing and deploying a scoped custom application using App Engine Studio — from requirements through to data model, UI configuration, logic scripting, and update set packaging for cross-environment deployment.",
    tags: ["CAD Aligned", "App Engine", "Capstone Module"],
  },
];

const TOOLS = [
  {
    emoji: "🟢",
    bg: "#81B5A1",
    name: "ServiceNow Studio",
    desc: "Script development, application creation, update set management, and version control",
  },
  {
    emoji: "⚡",
    bg: "#4A90D9",
    name: "Flow Designer",
    desc: "No-code and low-code workflow automation, subflows, and IntegrationHub spoke configuration",
  },
  {
    emoji: "🗂",
    bg: "#E8A838",
    name: "App Engine Studio",
    desc: "Low-code custom app builder — data models, experiences, logic, and deployment pipelines",
  },
  {
    emoji: "🔗",
    bg: "#6C63FF",
    name: "IntegrationHub",
    desc: "Spoke-based integrations with Jira, Slack, AWS, Azure, and enterprise REST/SOAP services",
  },
  {
    emoji: "📊",
    bg: "#E85D4A",
    name: "Performance Analytics",
    desc: "KPI indicators, dashboards, and time-series scoring for ITSM operations reporting",
  },
  {
    emoji: "🛡",
    bg: "#2BB0ED",
    name: "Access Control & ACLs",
    desc: "Role-based access, field-level security, data policies, and conditional record visibility",
  },
  {
    emoji: "🖥",
    bg: "#45C4B0",
    name: "Service Portal",
    desc: "Page designer, widget development, catalogue configuration, and end-user experience design",
  },
  {
    emoji: "📦",
    bg: "#F7971D",
    name: "Update Sets",
    desc: "Capturing, merging, previewing, and deploying configuration changes across environments",
  },
];

const OBJECTIVES = [
  {
    num: "01",
    dark: false,
    title: "Configure ITSM Modules End-to-End",
    desc: "Set up and configure Incident, Problem, Change, and Service Request management modules from scratch — including workflows, SLAs, assignment rules, and escalation policies.",
  },
  {
    num: "02",
    dark: true,
    title: "Build and Manage Workflows",
    desc: "Design and deploy automated workflows using Flow Designer and the legacy Workflow Editor — handling approvals, notifications, task assignments, and condition-based branching.",
  },
  {
    num: "03",
    dark: false,
    title: "Write Scripts That Work",
    desc: "Write functional Business Rules, Client Scripts, Script Includes, and UI Policies — applying scripting to extend platform behaviour and automate complex enterprise requirements.",
  },
  {
    num: "04",
    dark: true,
    title: "Manage Users, Roles & Access Control",
    desc: "Administer users, groups, and roles with precision — applying ACLs, data policies, and security restrictions to protect sensitive records while keeping workflows accessible to the right people.",
  },
  {
    num: "05",
    dark: false,
    title: "Design and Deploy Service Portals",
    desc: "Build and customise the Service Portal — configuring the service catalogue, designing widget layouts, managing request items, and creating end-user experiences that drive adoption.",
  },
  {
    num: "06",
    dark: true,
    title: "Integrate ServiceNow With External Systems",
    desc: "Configure REST and SOAP integrations, use IntegrationHub, and manage import sets — connecting ServiceNow with third-party systems, monitoring tools, and enterprise applications.",
  },
];

const PREREQUISITES = [
  {
    num: "01",
    title: "Basic IT or ITSM Experience",
    desc: "You do not need prior ServiceNow experience, but a working understanding of IT service management concepts — incidents, changes, problems, and service requests — is essential. We build from that foundation.",
  },
  {
    num: "02",
    title: "Comfort with Web-Based Applications",
    desc: "ServiceNow is a browser-based platform. You should be comfortable navigating admin portals, configuring settings through a UI, and following technical documentation. Prior coding knowledge is helpful but not required for the Admin track.",
  },
  {
    num: "03",
    title: "Logical Thinking & Problem Solving",
    desc: "Configuring workflows, writing business rules, and designing approval processes require a structured, logical mind. You do not need to be a developer — but you do need to think like one.",
  },
];

const PROFILES = [
  "IT Support Engineer",
  "System Administrator",
  "ITSM Analyst",
  "Help Desk Lead",
  "Business Analyst (IT)",
  "Junior Developer",
  "IT Operations Lead",
  "Change Coordinator",
  "Network Engineer",
  "Application Support",
];

const WHY_REASONS = [
  {
    icon: "🛠",
    title: "Trainers on Active Implementations",
    desc: "Every trainer is a working ServiceNow architect or developer on live projects. The configurations they teach are ones they deployed this month — not archived content from a course platform.",
  },
  {
    icon: "🖥",
    title: "Your Own Personal Developer Instance",
    desc: "Every participant gets their own PDI for the full duration of the programme. This is not a shared environment or a demo — it is a real ServiceNow instance you configure, break, fix, and build in.",
  },
  {
    icon: "👥",
    title: "Five Per Batch. Full Stop.",
    desc: "This is not a marketing claim. It is the structural reason our graduates perform differently in interviews and in their first six months on the job.",
  },
  {
    icon: "🎯",
    title: "Admin AND Developer Track — Without Compromise",
    desc: "Other programmes choose one. We cover both — because employers want admins who can script, and developers who understand the platform architecture from first principles.",
  },
  {
    icon: "📄",
    title: "Certification Coverage Across CSA, CIS & CAD",
    desc: "Three certifications. One programme. The curriculum is aligned to all three tracks so participants can pursue whichever certification path their target role demands — without needing to enrol in multiple courses.",
  },
  {
    icon: "🤝",
    title: "Placement, Not Just Training",
    desc: "Our placement team has active relationships with 120+ ServiceNow hiring partners. We do not hand you a certificate and wish you luck — we make introductions, prepare you for interviews, and stay involved until you have an offer.",
  },
];

const PLACEMENT_SERVICES = [
  {
    icon: "📄",
    title: "ServiceNow-Specific Resume Crafting",
    desc: "Your resume built by professionals who understand what ServiceNow hiring managers look for — your PDI work, implementation scope, and scripting capability presented in the language that earns interviews.",
  },
  {
    icon: "🎤",
    title: "Technical Interview Preparation",
    desc: "Mock ServiceNow interviews covering admin scenarios, scripting questions, and architecture discussions — practised with professionals who have interviewed ServiceNow candidates at enterprise organisations.",
  },
  {
    icon: "🌐",
    title: "Recruiter Network — 120+ Companies",
    desc: "Active introductions to hiring partners across IT services, consulting, BFSI, and product companies with active ServiceNow implementations. Direct referrals from our placement team — not job board access.",
  },
  {
    icon: "🔗",
    title: "LinkedIn & Portfolio Positioning",
    desc: "Complete LinkedIn optimisation for ServiceNow hiring — headline, skills section, featured project portfolio — so recruiters searching for certified ServiceNow professionals find you.",
  },
];

const PROGRAMME_DETAILS = [
  {
    label: "Duration",
    value: "6 Weeks",
    desc: "Intensive yet manageable — designed around the pace of real-world ServiceNow implementation projects.",
    dark: false,
  },
  {
    label: "Timings",
    value: "Evenings & Weekends",
    desc: "Scheduled so working professionals can upskill without stepping away from their current role.",
    dark: false,
  },
  {
    label: "Mode",
    value: "Live Online + LMS",
    desc: "Real-time instructor-led sessions with full recording access and downloadable resources.",
    dark: false,
  },
  {
    label: "Batch Size",
    value: "5 Students Per Batch",
    desc: "Intentionally small. Every participant receives direct mentorship and individual feedback.",
    dark: false,
  },
  {
    label: "Who Can Join?",
    value: "IT Professionals & Admins",
    desc: "Developers, system admins, ITSM analysts, and support leads moving into ServiceNow roles.",
    dark: false,
  },
  {
    label: "Programme Fee",
    value: "₹35,000",
    desc: "Zero-cost EMI from ₹5,833/month. No hidden fees. Merit-based scholarships available.",
    dark: true,
  },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────
const GoldCheckIcon = ({ size = 10 }) => (
  <svg viewBox="0 0 10 10" width={size} height={size} fill="none">
    <polyline points="2,5 4.5,7.5 8,2.5" stroke="#C9A84C" strokeWidth="1.5" />
  </svg>
);

const CheckIconDark = ({ size = 10 }) => (
  <svg viewBox="0 0 10 10" width={size} height={size} fill="none">
    <polyline
      points="2,5 4.5,7.5 8,2.5"
      stroke="#000"
      strokeWidth="1.5"
      opacity="0.6"
    />
  </svg>
);

const LogoIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <rect x="2" y="2" width="6" height="6" rx="1" fill="#C9A84C" />
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
);

const SectionLabel = ({ text, light = false }) => (
  <div className="inline-flex items-center gap-2.5 mb-4">
    <div
      className={`w-7 h-px flex-shrink-0 ${light ? "bg-amber-400/50" : "bg-amber-500"}`}
    />
    <span
      className={`text-[11px] font-semibold tracking-[2.5px] uppercase ${light ? "text-amber-400" : "text-amber-600"}`}
    >
      {text}
    </span>
  </div>
);

// ── ACCORDION ─────────────────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-[15px] font-semibold text-black">
          {item.title}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light leading-none border transition-all ${isOpen ? "bg-black text-white border-black" : "bg-transparent text-stone-400 border-stone-200"}`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 text-sm leading-[1.75] font-light text-stone-400">
          {item.body}
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2.5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold px-2.5 py-0.5 rounded-sm text-amber-600 bg-amber-50"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── MARQUEE ───────────────────────────────────────────────────────────────────
function Marquee() {
  const doubled = [...COMPANIES, ...COMPANIES];
  return (
    <div className="bg-stone-100 border-b border-stone-200">
      <div className="flex items-stretch h-[52px]">
        <div className="flex-shrink-0 flex items-center px-8 md:px-14 z-10 border-r border-stone-200 bg-stone-100">
          <span className="text-[10px] font-bold tracking-[2px] uppercase text-stone-400 whitespace-nowrap">
            Trained &amp; Placed In
          </span>
        </div>
        <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
          <div className="flex items-center h-full w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {doubled.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 h-full border-r border-stone-200 whitespace-nowrap"
              >
                <div className="w-10 h-10 sm:w-7 sm:h-7  flex items-center justify-center flex-shrink-0">
                  {c.logo}{" "}
                </div>
                <strong className="text-[13px] font-semibold text-black">
                  {c.name}
                </strong>
                <span className="text-[11px] text-stone-400">{c.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function ServiceNowTraining() {
  const [openIdx, setOpenIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    experience: "",
  });

  const toggleAcc = (i) => setOpenIdx(openIdx === i ? -1 : i);

  const handleInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="font-[Outfit,sans-serif] bg-[#FAF8F3] text-[#1C1C1C] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .playfair { font-family: 'Playfair Display', Georgia, serif; }
        .grid-overlay { background-image: linear-gradient(rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px); background-size:60px 60px; }
        .grid-overlay-faint { background-image: linear-gradient(rgba(201,168,76,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.05) 1px,transparent 1px); background-size:60px 60px; }
        .fee-grid { background-image: linear-gradient(rgba(0,0,0,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.07) 1px,transparent 1px); background-size:24px 24px; }
        input:focus, select:focus { outline: none; border-color: #000 !important; background: #fff !important; }
      `}</style>

      {/* ── TOP BANNER ── */}
      <div className="bg-black text-white/80 text-center py-2.5 px-4 text-[13px] relative z-10">
        Next intake opens{" "}
        <strong className="text-amber-400">October 2025</strong> — Limited to 5
        seats per batch.{" "}
        <a
          href="#enrol"
          className="text-white font-semibold underline underline-offset-2"
        >
          Reserve your place →
        </a>
      </div>

      {/* ── NAV ── */}
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.84),rgba(0,0,0,0.88)),#000",
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
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-400" />
        <div className="absolute inset-0 pointer-events-none grid-overlay" />

        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-[60px] relative z-10">
          {/* Left */}
          <div className="py-16 lg:py-20">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-8 h-px bg-amber-400 flex-shrink-0" />
              <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-amber-400">
                ServiceNow Training Programme — CSA · CIS · CAD
              </span>
            </div>

            <h1 className="playfair text-[clamp(32px,5vw,62px)] font-bold leading-[1.08] tracking-[-1px] mb-5 text-white">
              Configure. Automate.
              <br />
              Own the Platform.
              <br />
              <em className="text-amber-400">End to End.</em>
            </h1>

            <div className="flex flex-wrap gap-6 mb-5">
              {[
                "ITSM-Focused",
                "Admin & Developer Track",
                "Certification-Ready",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold tracking-[1.5px] uppercase text-white/50 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>

            <p className="text-[15px] leading-[1.75] font-light mb-8 max-w-[500px] text-white/60">
              Step into one of the fastest-growing platforms in enterprise IT —
              mastering the workflows, automations, and configurations that ITSM
              teams rely on daily, from initial deployment through to advanced
              application development.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#enrol"
                className="bg-amber-400 text-black text-sm font-bold px-6 py-3.5 rounded-sm no-underline hover:bg-amber-300 transition-colors"
              >
                Enroll Now
              </a>
              <a
                href="#curriculum"
                className="text-white/75 border border-white/20 text-sm font-medium px-6 py-3.5 rounded-sm no-underline hover:border-white/40 transition-colors"
              >
                Explore Curriculum
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-0 mt-10 pt-8 border-t border-white/10">
              {[
                ["34.5L+", "Highest Salary Offered"],
                ["3,200+", "Careers Transitioned"],
                ["55%", "Average Hike Offered"],
                ["185+", "Companies Hired So Far"],
              ].map(([val, label], i, arr) => (
                <div
                  key={label}
                  className={`pr-8 mr-8 ${i < arr.length - 1 ? "border-r border-white/[0.08]" : ""} mb-4`}
                >
                  <div className="playfair text-[clamp(20px,2.5vw,32px)] font-bold text-white leading-none mb-1">
                    {val}
                  </div>
                  <div className="text-[11px] text-white/45">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-5 my-10 lg:my-10">
            {/* Fee card */}
            <div className="bg-amber-400 rounded-[4px] p-7 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none fee-grid" />
              <div className="relative z-[1]">
                <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-black/50 mb-2">
                  Programme Fee
                </div>
                <div className="text-lg font-semibold text-black/35 line-through mb-1">
                  ₹1,10,000
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="playfair text-[44px] font-bold leading-none tracking-[-1.5px] text-black">
                    ₹35,000
                  </span>
                  <span className="text-[13px] font-medium mb-1.5 text-black/50">
                    / full programme
                  </span>
                </div>
                <div className="text-[13px] font-medium mb-4 text-black/60">
                  Starting at{" "}
                  <strong className="text-black">₹8,750/month</strong> —
                  zero-cost EMI
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-black/12">
                  {[
                    "Live sessions + lifetime LMS access",
                    "Hands-on labs on live ServiceNow instances",
                    "CSA exam prep & mock tests included",
                    "100% placement assistance",
                    "Merit-based scholarships available",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] font-medium text-black/70"
                    >
                      <span className="w-4 h-4 rounded-full border border-black/20 bg-black/12 inline-flex items-center justify-center flex-shrink-0">
                        <CheckIconDark />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glance card */}
            <div
              className="bg-white rounded-[4px] p-7"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}
            >
              <div className="playfair text-[17px] font-bold text-black tracking-[-0.3px] mb-1">
                Programme at a Glance
              </div>
              <div className="text-[12px] text-stone-400 mb-4">
                Everything you need to launch a ServiceNow career — in one
                structured programme.
              </div>
              <div className="flex flex-col gap-2.5">
                {[
                  "6 weeks of intensive, practitioner-led training",
                  "Batch size of 5 — mentorship, not a lecture hall",
                  "Evenings & weekends — for working professionals",
                  "CSA, CIS, CAD certification alignment",
                  "Labs on real ServiceNow PDI instances — not simulations",
                ].map((item, i) => {
                  const parts = item.split(/ — | of | for /);
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-[13px] leading-[1.55] font-light text-stone-400"
                    >
                      <span className="w-[18px] h-[18px] rounded-full border border-amber-400 bg-amber-400/12 inline-flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GoldCheckIcon />
                      </span>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
              <a
                href="#enrol"
                className="block w-full text-center bg-black text-white text-sm font-semibold py-3.5 rounded-sm no-underline mt-4 hover:bg-stone-800 transition-colors"
              >
                Book a Free Counselling Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="bg-white border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel text="What We Do" />
            <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] tracking-[-0.5px] text-black">
              We Train You to Run
              <br />
              <em className="text-amber-500 italic">
                ServiceNow. Not Just Use It.
              </em>
            </h2>
            <p className="text-[15px] leading-[1.8] font-light mt-5 mb-5 text-stone-400">
              ServiceNow is the most misunderstood platform in enterprise IT.
              Most professionals interact with it as end users — raising
              tickets, checking approvals, updating records. Real ServiceNow
              expertise is something altogether different.
            </p>
            <blockquote className="playfair text-[22px] italic leading-[1.5] pl-6 my-6 text-black border-l-[3px] border-amber-400">
              A ServiceNow professional who cannot configure the platform cannot
              claim to know it. This programme changes that.
            </blockquote>
            <p className="text-[15px] leading-[1.8] font-light mb-4 text-stone-400">
              From ITSM fundamentals and table configuration through to
              scripting, Flow Designer, and application development — every
              module is built around{" "}
              <strong className="text-black font-semibold">
                what actually happens inside enterprise ServiceNow
                implementations
              </strong>
              .
            </p>
            <p className="text-[15px] leading-[1.8] font-light text-stone-400">
              Our trainers are{" "}
              <strong className="text-black font-semibold">
                certified ServiceNow architects and developers
              </strong>{" "}
              working on active implementations across BFSI, healthcare, retail,
              and technology.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200">
            {[
              {
                val: "34.5L+",
                label: "Highest salary offered to a CodersBloom graduate",
                dark: false,
              },
              {
                val: "3,200+",
                label:
                  "ServiceNow professionals trained and placed since inception",
                dark: true,
              },
              {
                val: "55%",
                label: "Average salary hike for working professionals",
                dark: false,
              },
              {
                val: "185+",
                label: "Companies that have hired CodersBloom graduates",
                dark: false,
              },
            ].map(({ val, label, dark }) => (
              <div
                key={val}
                className={`p-7 flex flex-col gap-1.5 ${dark ? "bg-black" : "bg-[#FAF8F3]"}`}
              >
                <div
                  className={`playfair text-[clamp(26px,3vw,40px)] font-bold leading-none tracking-[-1px] ${dark ? "text-amber-400" : "text-black"}`}
                >
                  {val}
                </div>
                <div
                  className={`text-[12px] leading-[1.5] ${dark ? "text-white/50" : "text-stone-400"}`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMME DETAILS ── */}
      <section
        id="path"
        className="bg-white border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
          <SectionLabel text="Programme Details" />
          <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-black">
            Structured for the{" "}
            <em className="text-amber-500 italic">Serious Professional.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 mt-12">
            {PROGRAMME_DETAILS.map(({ label, value, desc, dark }) => (
              <div
                key={label}
                className={`p-8 flex flex-col gap-2.5 ${dark ? "bg-black" : "bg-[#FAF8F3]"}`}
              >
                <div className="text-[10px] font-bold tracking-[2px] uppercase text-amber-500">
                  {label}
                </div>
                <div
                  className={`playfair text-[clamp(17px,2vw,24px)] font-bold leading-[1.2] ${dark ? "text-white" : "text-black"}`}
                >
                  {value}
                </div>
                <div
                  className={`text-[13px] leading-[1.5] font-light ${dark ? "text-white/45" : "text-stone-400"}`}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREREQUISITES ── */}
      <section
        id="prerequisites"
        className="relative overflow-hidden py-16 lg:py-[88px]"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.84),rgba(0,0,0,0.88)),#000",
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
        }}
      >
        <div className="absolute inset-0 pointer-events-none grid-overlay-faint" />
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] relative z-10">
          <SectionLabel text="Who This Is For" light />
          <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-white mt-1">
            Before You Join,
            <br />
            <em className="text-amber-400">Know What We Expect.</em>
          </h2>
          <p className="text-[15px] leading-[1.75] font-light max-w-[520px] mt-4 text-white/50">
            This programme is not entry-level. It is designed for professionals
            ready to commit — and we are honest about what that requires.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-14 items-start">
            <div className="border-t border-white/[0.08]">
              {PREREQUISITES.map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="grid grid-cols-[40px_1fr] gap-4 py-7 border-b border-white/[0.08]"
                >
                  <div className="playfair text-[13px] font-bold text-amber-400 mt-0.5">
                    {num}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-white mb-1.5">
                      {title}
                    </h4>
                    <p className="text-sm leading-[1.65] font-light text-white/50">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg p-9 border border-white/[0.08] bg-white/[0.04]">
              <div className="playfair text-[20px] font-bold text-white tracking-[-0.4px] mb-2">
                Ideal Candidate Profiles
              </div>
              <p className="text-sm leading-[1.65] font-light mb-6 text-white/45">
                Our most successful graduates typically come from one of these
                professional backgrounds.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PROFILES.map((p) => (
                  <span
                    key={p}
                    className="text-[12px] font-semibold px-3.5 py-1.5 rounded-sm border border-amber-400/25 text-amber-400 bg-amber-400/10"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[13px] leading-[1.65] font-light mb-4 text-white/45">
                  Not sure if you qualify? Our advisors will give you an honest
                  assessment on a free 30-minute call — no obligation, no
                  pressure.
                </p>
                <a
                  href="#enrol"
                  className="inline-block text-[13px] font-bold px-5 py-2.5 rounded-sm no-underline bg-amber-400 text-black hover:bg-amber-300 transition-colors"
                >
                  Check My Eligibility →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ── */}
      <section
        id="objectives"
        className="bg-[#FAF8F3] border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
          <SectionLabel text="Programme Objectives" />
          <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-black mt-1">
            Seven Things You Will
            <br />
            Be Able to <em className="text-amber-500 italic">Do.</em>
          </h2>
          <p className="text-[15px] leading-[1.75] font-light max-w-[520px] mt-4 text-stone-400">
            These are not learning outcomes written for a brochure. They are the
            specific competencies our hiring partners verify when they interview
            our graduates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 mt-12">
            {OBJECTIVES.map(({ num, dark, title, desc }) => (
              <div
                key={num}
                className={`p-8 flex flex-col gap-3.5 ${dark ? "bg-[#111]" : "bg-white"}`}
              >
                <div className="playfair text-[13px] font-bold tracking-[1px] text-amber-400">
                  {num}
                </div>
                <div
                  className={`playfair text-[17px] font-bold leading-[1.25] ${dark ? "text-white" : "text-black"}`}
                >
                  {title}
                </div>
                <p
                  className={`text-[13px] leading-[1.65] font-light ${dark ? "text-white/75" : "text-stone-400"}`}
                >
                  {desc}
                </p>
              </div>
            ))}
            {/* Obj 07 spans full row */}
            <div className="bg-white p-8 sm:col-span-2 lg:col-span-3 border-t-2 border-amber-400 flex flex-col gap-3.5">
              <div className="playfair text-[13px] font-bold tracking-[1px] text-amber-400">
                07
              </div>
              <div className="playfair text-[20px] font-bold text-black">
                Build Custom Applications on the Now Platform
              </div>
              <p className="text-sm leading-[1.65] font-light max-w-[680px] text-stone-400">
                Design, build, and deploy scoped applications using App Engine
                Studio and traditional Studio development — from data model
                design through to UI, logic, and deployment — demonstrating the
                full CAD-level capability that separates administrators from
                developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section
        id="curriculum"
        className="bg-[#FAF8F3] border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
            {/* Sticky left */}
            <div className="lg:sticky lg:top-20">
              <SectionLabel text="Course Syllabus" />
              <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-black">
                Everything the Job
                <br />
                Demands. <em className="text-amber-500 italic">Covered.</em>
              </h2>
              <p className="text-[15px] leading-[1.75] font-light max-w-[520px] mt-4 text-stone-400">
                Ten modules covering platform fundamentals through advanced
                development — built around real implementation scenarios, not
                theoretical frameworks.
              </p>
              <div className="mt-6 p-4 flex items-center gap-4 bg-amber-50 border-l-[3px] border-amber-400">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 playfair text-[15px] font-bold text-amber-400">
                  AK
                </div>
                <div>
                  <strong className="block text-sm font-bold text-black">
                    Arjun Krishnamurthy
                  </strong>
                  <span className="text-[12px] text-stone-400">
                    Programme Lead — 12 yrs in ServiceNow Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div>
              <div className="border-t border-stone-200">
                {CURRICULUM.map((item, i) => (
                  <AccordionItem
                    key={i}
                    item={item}
                    isOpen={openIdx === i}
                    onToggle={() => toggleAcc(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section
        id="tools"
        className="relative overflow-hidden py-16 lg:py-[88px] border-b border-white/[0.08]"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.84),rgba(0,0,0,0.88)),#000",
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
        }}
      >
        <div className="absolute inset-0 pointer-events-none grid-overlay-faint opacity-80" />
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] relative z-10">
          <SectionLabel text="Tools You Will Master" light />
          <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-white mt-1">
            The <em className="text-amber-400 italic">Exact Toolkit</em>
            <br />
            Every ServiceNow Pro Needs.
          </h2>
          <p className="text-[15px] leading-[1.75] font-light max-w-[520px] mt-4 text-white/50">
            Hiring managers look for candidates who can open the platform and
            configure immediately. We ensure you can — across every tool a
            working ServiceNow professional relies on.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
            {TOOLS.map(({ emoji, bg, name, desc }) => (
              <div
                key={name}
                className="flex flex-col gap-3 p-6 rounded-lg border border-white/[0.08] bg-white/[0.04]"
              >
                <div
                  className="w-[52px] h-[52px] rounded-xl flex items-center justify-center text-[22px]"
                  style={{ background: bg }}
                >
                  {emoji}
                </div>
                <div className="text-sm font-semibold text-white">{name}</div>
                <div className="text-[12px] leading-[1.5] text-white/40">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section
        id="methodology"
        className="bg-white border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
          <div className="text-center mb-14">
            <div className="flex justify-center">
              <SectionLabel text="Our Methodology" />
            </div>
            <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-black">
              How We Build
              <br />
              <em className="text-amber-500 italic">
                ServiceNow Professionals.
              </em>
            </h2>
            <p className="text-[16px] leading-[1.75] font-light max-w-[520px] mx-auto mt-4 text-stone-400">
              Platform expertise is not a knowledge problem — it is a hands-on
              practice problem. Our methodology is built around this truth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16">
            <button className="bg-amber-400 text-black border-0 px-8 py-4 rounded text-sm font-semibold cursor-pointer hover:bg-amber-300 transition-colors">
              Download Brochure
            </button>
            <a
              href="https://wa.me/+919100151051"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] text-white border-0 px-8 py-4 rounded text-sm font-semibold text-center cursor-pointer no-underline items-center hover:bg-[#1db858] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {[
              {
                pct: "50%",
                title: "Hands-On Lab Work",
                desc: "Every concept is immediately applied in a live Personal Developer Instance. Real configuration, real tables, real workflows — the exact environment you will work in on day one of a ServiceNow role.",
                dark: false,
              },
              {
                pct: "30%",
                title: "Scenario-Based Learning",
                desc: "Real implementation scenarios drawn from active projects our trainers have delivered — requirements that are ambiguous, stakeholders that change their minds, and configurations that break under edge cases.",
                dark: true,
              },
              {
                pct: "20%",
                title: "Theory & Best Practice",
                desc: "Platform architecture principles, upgrade strategies, and certification-aligned theory — only what is necessary, and always connected immediately to a practical application.",
                dark: false,
              },
            ].map(({ pct, title, desc, dark }) => (
              <div
                key={pct}
                className={`p-9 flex flex-col gap-3 ${dark ? "bg-black" : "bg-[#FAF8F3]"}`}
              >
                <div
                  className={`playfair text-[clamp(36px,4vw,52px)] font-bold leading-none tracking-[-2px] ${dark ? "text-amber-400" : "text-black"}`}
                >
                  {pct}
                </div>
                <div
                  className={`text-[15px] font-bold ${dark ? "text-white" : "text-black"}`}
                >
                  {title}
                </div>
                <div
                  className={`text-[13px] leading-[1.65] font-light ${dark ? "text-white/45" : "text-stone-400"}`}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section
        id="why"
        className="relative overflow-hidden py-16 lg:py-[88px]"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.84),rgba(0,0,0,0.88)),#000",
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
        }}
      >
        <div className="absolute inset-0 pointer-events-none grid-overlay-faint" />
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] relative z-10">
          <SectionLabel text="Why CodersBloom ServiceNow" light />
          <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-white mt-1">
            What Separates This
            <br />
            <em className="text-amber-400 italic">From Everything Else.</em>
          </h2>
          <p className="text-[15px] leading-[1.75] font-light max-w-[520px] mt-4 text-white/50">
            There is no shortage of ServiceNow courses. There is a real shortage
            of programmes that produce graduates who can walk into an
            implementation role and contribute from week one.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {WHY_REASONS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-3 p-7 rounded-lg border border-white/[0.08] bg-white/[0.04]"
              >
                <div className="w-11 h-11 rounded-lg border border-amber-400/25 bg-amber-400/12 flex items-center justify-center text-[20px]">
                  {icon}
                </div>
                <div className="text-[15px] font-bold text-white">{title}</div>
                <div className="text-[13px] leading-[1.65] font-light text-white/45">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACEMENT ── */}
      <section
        id="placement"
        className="bg-white border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-14">
            <div>
              <SectionLabel text="Career Services" />
              <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-black">
                Assistance To Placement Is
                <br />
                <em className="text-amber-500 italic">The Promise.</em>
              </h2>
            </div>
            <p className="text-[15px] leading-[1.75] font-light max-w-[280px] text-stone-400">
              We do not hand you a certificate and wish you luck. We work
              alongside you, actively, until you have an offer worth accepting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {PLACEMENT_SERVICES.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-7 flex flex-col gap-3">
                <div className="text-[22px]">{icon}</div>
                <div className="text-sm font-bold text-black">{title}</div>
                <div className="text-[13px] leading-[1.65] font-light text-stone-400">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEARNING SUPPORT ── */}
      <section
        id="support"
        className="bg-[#FAF8F3] border-b border-stone-200 py-16 lg:py-[88px]"
      >
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-14">
            <div>
              <SectionLabel text="Learning Support" />
              <h2 className="playfair text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.12] text-black">
                Designed For
                <br />
                <em className="text-amber-500 italic">Long-Term Success.</em>
              </h2>
            </div>
            <p className="text-[15px] leading-[1.75] font-light max-w-[320px] text-stone-400">
              Support systems that help you learn effectively, revisit concepts
              when needed, and stay connected with expert guidance throughout
              your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                dark: false,
                title: "PDI Lab Access",
                desc: "Your Personal Developer Instance remains active for the full duration of the programme — so you can continue practising, building, and experimenting outside of scheduled sessions at any time.",
              },
              {
                num: "02",
                dark: true,
                title: "Free Resits, Anytime",
                desc: "Need to revisit a module or missed a session? Return at no extra cost. Learning to a fixed timeline doesn't work for everyone, and we don't pretend it does.",
              },
              {
                num: "03",
                dark: false,
                title: "Direct Faculty Support",
                desc: "Phone and email access to faculty before, during, and after the programme — when a configuration is not behaving as expected or a script is throwing errors you cannot resolve alone.",
              },
            ].map(({ num, dark, title, desc }) => (
              <div
                key={num}
                className={`border rounded p-8 flex flex-col h-full ${dark ? "bg-[#111] border-white/[0.12]" : "bg-white border-stone-200"}`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 playfair text-[20px] font-bold text-amber-400 ${dark ? "bg-[#1F1F1F] border border-white/10" : "bg-stone-100"}`}
                >
                  {num}
                </div>
                <h3
                  className={`playfair text-[24px] leading-[1.25] mb-4 ${dark ? "text-white" : "text-black"}`}
                >
                  {title}
                </h3>
                <p
                  className={`text-[15px] leading-[1.8] flex-1 ${dark ? "text-white/75" : "text-stone-400"}`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROL ── */}
      <section
        id="enrol"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.84),rgba(0,0,0,0.88)),#000",
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
        }}
      >
        <div className="absolute inset-0 pointer-events-none grid-overlay-faint" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-amber-400" />
        <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px] relative z-10">
          <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <h2 className="playfair text-[clamp(24px,3.5vw,42px)] font-bold leading-[1.12] text-white tracking-[-0.8px] mb-4">
                One Conversation
                <br />
                Can Change Your <em className="text-amber-400">Career.</em>
              </h2>
              <p className="text-[15px] leading-[1.7] font-light mb-8 text-white/50">
                Our advisors are working ServiceNow professionals who have
                navigated exactly the transition you are considering. No
                scripts, no pressure — just honest guidance about whether this
                programme is right for you.
              </p>
              <ul className="flex flex-col gap-3 list-none">
                {[
                  "Free 1:1 career counselling call (30 minutes)",
                  "Personalised programme walkthrough for your background",
                  "Salary benchmarking for ServiceNow roles in your target sector",
                  "CSA / CIS / CAD certification pathway advice",
                  "EMI & scholarship options discussed upfront",
                  "No obligation — learn everything, decide later",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <span className="w-[18px] h-[18px] rounded-full border border-amber-400 bg-amber-400/20 inline-flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GoldCheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div
              className="bg-white rounded p-9"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}
            >
              <div className="playfair text-[20px] font-bold text-black tracking-[-0.3px] mb-1">
                Book Your Free Session
              </div>
              <div className="text-[13px] text-stone-400 mb-5">
                A programme advisor will contact you within 24 hours.
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  ["firstName", "First Name", "Arjun", "text"],
                  ["lastName", "Last Name", "Sharma", "text"],
                ].map(([name, label, ph, type]) => (
                  <div key={name} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.8px] uppercase text-black">
                      {label}
                    </label>
                    <input
                      name={name}
                      type={type}
                      placeholder={ph}
                      value={formData[name]}
                      onChange={handleInput}
                      className="bg-[#FAF8F3] border border-stone-200 text-[#1C1C1C] font-[Outfit,sans-serif] rounded-sm text-sm w-full px-3.5 py-2.5"
                    />
                  </div>
                ))}
              </div>

              {[
                ["phone", "Phone / WhatsApp", "+91 98765 43210", "tel"],
                ["email", "Email Address", "arjun@example.com", "email"],
              ].map(([name, label, ph, type]) => (
                <div key={name} className="flex flex-col gap-1.5 mb-3">
                  <label className="text-[11px] font-semibold tracking-[0.8px] uppercase text-black">
                    {label}
                  </label>
                  <input
                    name={name}
                    type={type}
                    placeholder={ph}
                    value={formData[name]}
                    onChange={handleInput}
                    className="bg-[#FAF8F3] border border-stone-200 text-[#1C1C1C] font-[Outfit,sans-serif] rounded-sm text-sm w-full px-3.5 py-2.5"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5 mb-3">
                <label className="text-[11px] font-semibold tracking-[0.8px] uppercase text-black">
                  Current Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInput}
                  className="bg-[#FAF8F3] border border-stone-200 text-[#1C1C1C] font-[Outfit,sans-serif] rounded-sm text-sm w-full px-3.5 py-2.5 appearance-none"
                >
                  <option value="">Select your current role...</option>
                  {[
                    "IT Support Engineer",
                    "System Administrator",
                    "ITSM / Help Desk Analyst",
                    "Business Analyst (IT)",
                    "Junior Developer",
                    "Other IT Professional",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[11px] font-semibold tracking-[0.8px] uppercase text-black">
                  Years of Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInput}
                  className="bg-[#FAF8F3] border border-stone-200 text-[#1C1C1C] font-[Outfit,sans-serif] rounded-sm text-sm w-full px-3.5 py-2.5 appearance-none"
                >
                  <option value="">Select...</option>
                  {["1–3 years", "3–6 years", "6–10 years", "10+ years"].map(
                    (o) => (
                      <option key={o}>{o}</option>
                    ),
                  )}
                </select>
              </div>

              <button className="w-full bg-black text-white border-0 text-sm font-semibold py-3.5 rounded-sm cursor-pointer hover:bg-stone-800 transition-colors">
                Book My Free Session →
              </button>
              <p className="text-[11px] text-center mt-2.5 leading-[1.5] text-stone-400">
                🔒 No spam. No pressure. Your information is completely
                confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1C1C] border-t border-white/[0.05]">
  <div className="max-w-[1160px] mx-auto px-5 lg:px-[60px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 py-14 border-b border-white/[0.06]">
      <div>
        <a
          href="/"
          className="flex items-center gap-2.5 no-underline mb-4"
        >
          <div className="w-7 h-7 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
            <LogoIcon size={16} />
          </div>

          <strong className="playfair text-[15px] font-bold text-white">
            CodersBloom
          </strong>
        </a>

        <p className="text-[13px] leading-[1.7] font-light max-w-[280px] text-white/40">
          Practical, industry-aligned ServiceNow training — built for the
          platform role, not the exam. Training is the beginning.
          Placement is the promise.
        </p>
      </div>

      {[
        {
          heading: "Program",
          links: [
            { label: "Business Analyst", path: "/business-analyst" },
            { label: "Project Management", path: "/project-management" },
            { label: "Cyber Security", path: "/cyber-security" },
            { label: "ServiceNow Training", path: "/servicenow-training" },
            { label: "Data Science", path: "/data-science" },
          ],
        },
        {
          heading: "Institution",
          links: [
            { label: "About CodersBloom", path: "#" },
            { label: "Our Trainers", path: "#" },
            { label: "Hiring Partners", path: "#" },
            { label: "Blog & Insights", path: "#" },
          ],
        },
        {
          heading: "Contact",
          links: [
            { label: "1800-000-0000 (Free)", path: "tel:18000000000" },
            {
              label: "admissions@codersbloom.in",
              path: "mailto:admissions@codersbloom.in",
            },
            {
              label: "WhatsApp Us",
              path: "https://wa.me/919100151051",
            },
            { label: "Student Portal", path: "#" },
          ],
        },
      ].map((section) => (
        <div key={section.heading}>
          <h4 className="text-[10px] font-bold tracking-[2px] uppercase text-amber-400 mb-4">
            {section.heading}
          </h4>

          <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  className="text-[13px] font-light text-white/40 no-underline hover:text-white/70 transition-colors"
                  target={
                    link.path.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    link.path.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 py-5 text-[12px] text-white/25">
      <p>
        © 2025 CodersBloom. All rights reserved. Training is the
        beginning. Placement is the promise.™
      </p>

      <div className="flex gap-6">
        {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="text-white/25 no-underline hover:text-white/50 transition-colors"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  </div>
</footer>

      {/* ── MOBILE STICKY BAR ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[200] bg-black border-t-2 border-amber-400 px-4 py-3 flex items-center justify-between">
        <p className="text-[12px] font-medium text-white/75 mr-3">
          Free career counselling available
        </p>
        <a
          href="#enrol"
          className="bg-amber-400 text-black text-[13px] font-bold px-4 py-2 rounded-sm no-underline whitespace-nowrap flex-shrink-0 hover:bg-amber-300 transition-colors"
        >
          Book Now →
        </a>
      </div>
    </div>
  );
}
