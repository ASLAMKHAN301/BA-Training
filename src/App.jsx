import { useState } from "react";

const curriculumData = [
  {
    id: "01",
    tag: "Foundation Module",
    title: "Business Analyst Introduction",
    topics: [
      "Business Analyst Introduction",
      "Business Analysis Overview & Origin",
      "What is Business Analysis",
      "Who is a Business Analyst",
      "Types of IT Companies",
      "IT Hierarchy",
      "Roles and Responsibilities of a BA",
      "Do's and Don'ts of a BA",
    ],
  },
  {
    id: "02",
    tag: "Methodology Module",
    title: "Waterfall Methodology",
    topics: [
      "Identifying Stakeholders",
      "Stakeholder Management",
      "RACI Matrix",
      "Defining Roles and Responsibilities",
      "Types of Requirements",
      "Role of the BA in Requirements",
      "Elicitation Techniques",
      "Introduction to Requirements",
      "Importance of Documentation",
      "Business Requirements Document (BRD)",
      "Functional Requirements Document (FRD)",
      "Software Requirements Specification (SRS)",
      "Requirements Traceability Matrix (RTM)",
      "Use Case Document",
    ],
  },
  {
    id: "03",
    tag: "Advanced Module",
    title: "Agile / Scrum",
    topics: [
      "Introduction to Agile",
      "Agile Frameworks",
      "Scrum",
      "Waterfall vs Scrum",
      "Scrum Events & Epics",
      "User Stories",
      "Velocity and Prioritization",
      "Story Estimations",
      "Planning Poker",
      "T-Shirt Sizing",
    ],
  },
];

const items = [
  {
    title: "Industry Mentors",
    subtitle: "Practising BAs",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.8l-3.8 2 .7-4.3L1.8 5.5l4.3-.6z" />
      </svg>
    ),
  },
  {
    title: "Live + Recorded",
    subtitle: "Flexible learning",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-.5 12L3 7.5l1.4-1.4 3.1 3.1 5.1-5.1L14 5.5 7.5 12z" />
      </svg>
    ),
  },
  {
    title: "Real Case Studies",
    subtitle: "Industry projects",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zM7 11L4 8l1.4-1.4L7 8.2l3.6-3.6L12 6l-5 5z" />
      </svg>
    ),
  },
  {
    title: "IIBA-Aligned",
    subtitle: "Globally recognised",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 0l2 6h6l-5 3.6 1.9 5.9L8 12l-4.9 3.5L5 9.6 0 6h6z" />
      </svg>
    ),
  },
  {
    title: "100% Placement",
    subtitle: "Assistance assured",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current">
        <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm1 10H7V7h2v4zm0-6H7V3h2v2z" />
      </svg>
    ),
  },
];

const myths = [
  {
    myth: "You need a technical background to become a Business Analyst.",
    reality:
      "Business Analysis is fundamentally about communication, requirements gathering, and bridging business and technology. Domain knowledge and analytical thinking matter far more than writing code. Our graduates come from commerce, humanities, science, and everything in between.",
  },
  {
    myth: "It is very difficult to start a career as a BA without a technical background.",
    reality:
      "Thousands of BAs worldwide started their careers with zero IT background. The role is designed to be the bridge — not the engineer. Our curriculum equips you with the vocabulary, tools, and frameworks to operate confidently in any IT environment from day one.",
  },
  {
    myth: "A fresher cannot become a Business Analyst.",
    reality:
      "Freshers are actively hired as junior or associate BAs across the industry. Organisations value structured training and fresh perspectives. Our placement track record includes hundreds of candidates placed directly out of college.",
  },
  {
    myth: "We don't need a Business Analyst — we have SMEs.",
    reality:
      "Subject Matter Experts bring domain depth. Business Analysts bring process: structured elicitation, documentation, traceability, and stakeholder alignment. The two roles are complementary — not interchangeable. Projects without a BA consistently suffer from scope creep and miscommunication.",
  },
];

const outcomes = [
  {
    title: "Role and importance",
    text: "of a Business Analyst within an IT project lifecycle",
  },
  {
    title: "Plan BA requirements activities",
    text: "from stakeholder identification to sign-off",
  },
  {
    title: "Elicit requirements",
    text: "from stakeholders, with an emphasis on interviews and workshops",
  },
  {
    title: "Analyse stated requirements",
    text: "with an overview of key modelling techniques",
  },
  {
    title: "Document requirements",
    text: "for Waterfall, Agile, and hybrid project types",
  },
  {
    title: "Write and validate requirements",
    text: "to industry-standard quality benchmarks",
  },
  {
    title: "Requirements management and communication",
    text: "— the BA's end-to-end role",
  },
];

const stats = [
  {
    number: "94%",
    label: "of graduates placed within 90 days of completion",
    dark: false,
  },
  {
    number: "3×",
    label: "average salary increase vs prior role",
    dark: true,
  },
  {
    number: "37+",
    label: "topics covered across three core modules",
    dark: false,
  },
  {
    number: "100%",
    label: "placement assistance until you land your offer",
    dark: true,
  },
];

const tools = [
  "Jira",
  "Confluence",
  "MS Visio",
  "Balsamiq",
  "Lucidchart",
  "Excel / Sheets",
  "BRD Templates",
  "Use Case Docs",
];

const steps = [
  {
    number: "01",
    title: "Free Counselling Call",
    description:
      "Speak with an advisor who has worked as a BA. They'll assess your background, goals, and whether this program is the right fit — honestly, with no hard sell.",
  },
  {
    number: "02",
    title: "Live Training Begins",
    description:
      "Weekday evenings and weekend batches. Every session is recorded so working professionals never fall behind. Direct access to your instructor throughout.",
  },
  {
    number: "03",
    title: "Projects & Portfolio",
    description:
      "Build real BRDs, FRDs, use-case documents, and Agile artefacts using live case studies. Graduate with a portfolio that demonstrates what you can do, not just what you've studied.",
  },
  {
    number: "04",
    title: "Placement Support",
    description:
      "Resume builds, mock interviews, LinkedIn optimisation, and active employer introductions — dedicated support until you receive your offer letter.",
  },
];

const testimonials = [
  {
    initials: "SR",
    name: "Sunita Reddy",
    role: "Junior BA — Wipro, Hyderabad",
    tag: "Non-Tech",
    quote:
      "I had zero IT background — I was in retail management for four years. Within eight weeks of completing the program I had my first BA interview, and within twelve I had an offer. The curriculum is genuinely practical.",
  },
  {
    initials: "AM",
    name: "Arjun Mehta",
    role: "Associate BA — TCS, Pune",
    tag: "Fresher",
    quote:
      "The Waterfall module alone transformed my understanding of documentation. I was writing BRDs from week three. My hiring manager told me I came in better prepared than most candidates with two years of experience.",
  },
  {
    initials: "KP",
    name: "Kavya Pillai",
    role: "Business Analyst — Infosys, Bengaluru",
    tag: "Career Switch",
    quote:
      "The Agile and Scrum module was what made me stand out. Every company I interviewed at was running Scrum, and I was the only candidate who could talk about planning poker, velocity, and user story refinement with confidence.",
  },
];
function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-[14px] h-[14px] fill-[#c7a86d]">
      <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.8l-3.8 2 .7-4.3L1.8 5.5l4.3-.6z" />
    </svg>
  );
}

const faqs = [
  {
    question: "Do I need any technical knowledge to enrol?",
    answer:
      "No technical background is required. The program starts from absolute fundamentals, including what a BA is, how IT companies are structured, and the SDLC. Analytical thinking and communication skills matter far more than coding experience.",
  },
  {
    question: "Can a fresher get a job as a Business Analyst?",
    answer:
      "Yes. A significant share of our placements are fresh graduates. Companies actively recruit junior and associate BAs. What they look for is structured training, documentation skills, and a confident grasp of requirements processes — all of which this program delivers.",
  },
  {
    question: "Can I study this program while working full-time?",
    answer:
      "Absolutely — this is how the majority of our students enrol. Classes run on weekday evenings and weekends. Every session is recorded, so if you miss a live class you can catch up on your own schedule. The workload is designed around employed professionals.",
  },
  {
    question: "What tools will I learn during the program?",
    answer:
      "You will get hands-on exposure to the tools BAs use daily in industry — Jira for Agile project tracking, Confluence for documentation, Lucidchart and MS Visio for process modelling, Balsamiq for wireframing, and Excel for requirement matrices. All tool work is embedded within real case studies.",
  },
  {
    question: "What certifications will I receive?",
    answer:
      "You will receive the Edtech Academy program completion certificate, plus intensive preparation materials and mock exams aligned to the IIBA Certification of Competency in Business Analysis (CCBA) — a globally recognised professional credential for Business Analysts.",
  },
  {
    question: "What does placement assistance actually involve?",
    answer:
      "You will be assigned a named placement manager who will work with you on your resume, LinkedIn profile, mock interviews, and employer introductions. This support is active and ongoing — not a job board subscription — and continues until you receive an offer. 94% of graduates receive at least one offer within 90 days of completing the program.",
  },
];
export default function CyberSecurityPage() {
  const [openModule, setOpenModule] = useState("01");
  const [openIndex, setOpenIndex] = useState(0);

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="bg-[#FAF8F3] text-[#1C1C1C] overflow-x-hidden">
      {/* Announcement */}
      <div className="bg-black text-white/80 text-center py-3 px-4 text-sm">
        <span className="text-[#C9A84C] font-semibold">
          New Batch Starting Soon
        </span>{" "}
        — SOC Analyst seats are limited.
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F3] border-b border-[#E2DDD4]">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 h-[70px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-[#C9A84C]" />
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/20" />
              </div>
            </div>

            <div>
              <h1 className="font-serif text-lg font-bold text-black">
                Edtech Academy
              </h1>
              <p className="text-[10px] tracking-[2px] uppercase text-[#7A7060]">
                Professional Training
              </p>
            </div>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <li className="text-[#7A7060] hover:text-black">
              <a href="#">Programs</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#curriculum">Curriculum</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#outcomes">Outcomes</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#faq">FAQ</a>
            </li>

            <li>
              <a
                href="#enrol"
                className="bg-black text-white px-5 py-2 rounded-sm"
              >
                Enrol Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-black relative overflow-hidden">
        <div className="max-w-7xl  mx-auto px-5 lg:px-12 py-10 lg:py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="uppercase tracking-[3px] text-[#C9A84C] text-xs font-semibold">
                Cybersecurity Program
              </span>
            </div>

            <h1 className="text-white font-serif text-3xl lg:text-7xl leading-tight font-bold">
              Become a{" "}
              <span className="italic text-[#C9A84C]">Business Analyst</span>
              <br />
              from Scratch.
            </h1>

            <p className="text-white/60 text-lg leading-8 mt-8 max-w-xl">
              A structured, industry-aligned curriculum spanning BA
              fundamentals, Waterfall methodology, and Agile/Scrum — designed to
              get you interview-ready with real skills and real confidence.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "BA Introduction & SDLC",
                "Waterfall Methodology",
                "Agile / Scrum",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] px-4 py-2 text-xs rounded-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#C9A84C] text-black px-8 py-4 font-semibold rounded-sm">
                Book Free Counselling →
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-sm">
                View Curriculum
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 border-t border-white/10 mt-14 pt-10">
              {[
                { number: "3", label: "Core modules" },
                { number: "37+", label: "Topic sessions" },
                { number: "100%", label: "Placement support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h2 className="text-white w-[150px] md:w-full text-4xl font-serif font-bold">
                    {stat.number}
                  </h2>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-md p-8 shadow-2xl">
            <h2 className="font-serif text-3xl font-bold text-black">
              Book a Free Session
            </h2>

            <p className="text-gray-500 mt-2">
              A career advisor will reach out within 24 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none mt-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none mt-4"
            />

            <select className="w-full bg-[#FAF8F3] border border-[#E2DDD4] p-3 outline-none mt-4">
              <option>Select Current Status</option>
              <option>Student</option>
              <option>Graduate</option>
              <option>Working Professional</option>
            </select>

            <button className="w-full bg-black text-white py-4 mt-6 font-semibold">
              Book My Free Session →
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 No spam. No pressure.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- TRUST STRIP --> */}
      <div className="w-full bg-[#F0EDE6] border-y border-[#E2DDD4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-6 py-5 px-5">
          {/* Label */}
          <div className="text-[#7A7060] font-bold text-lg whitespace-nowrap">
            Why Edtech
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-black text-[#C9A84C] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-black font-semibold text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {<!-- MYTHS & ASSUMPTIONS -->} */}
      <section className="bg-black">
        <div className="max-w-7xl  mx-auto px-5 lg:px-12 py-10 lg:py-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-[#C9A84C]" />
                <span className="uppercase tracking-[0.18em] text-[11px] font-semibold text-[#C9A84C]">
                  Myths & Assumptions
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[38px] sm:text-[52px] leading-[1.05] tracking-[-0.04em] font-semibold text-white font-serif">
                Misconceptions That
                <br />
                Hold People{" "}
                <em className="italic text-[#c9a84c] font-serif">Back.</em>
              </h2>
            </div>

            {/* Lead */}
            <p className="max-w-[520px] text-[15px] leading-8 text-[#5f6b76] font-light lg:text-left">
              The BA profession is surrounded by myths. Let's clear them up —
              because they might be the only thing standing between you and a
              career you love.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-7">
            {myths.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-lg p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                {/* Top label */}
                <div className="mb-5">
                  <span className="inline-block bg-yellow-400/10 text-[#5f6b76] text-xs font-semibold px-3 py-1 rounded-sm tracking-wide uppercase">
                    myth
                  </span>
                </div>

                {/* Myth */}
                <h3 className="text-[22px] sm:text-[25px] leading-[1.45] tracking-[-0.02em] text-[#5f6b76] font-medium mb-8 italic">
                  “{item.myth}”
                </h3>

                {/* Reality */}
                <div className="border-t border-[#ece7de] pt-6">
                  <span className="block text-[#c9a84c] text-[13px] tracking-[0.12em] uppercase font-semibold mb-3">
                    The Reality
                  </span>

                  <p className="text-[15px] leading-8 text-[#5f6b76] font-light">
                    {item.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="bg-[#F8F5EF]">
        <div className="max-w-7xl  mx-auto px-5 lg:px-12 py-10 lg:py-24">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-[#C9A84C]" />
                <span className="uppercase tracking-[0.2em] text-sm text-[#C9A84C] font-medium">
                  Course Content
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-black">
                Everything You Need.
                <br />
                <em className="font-serif italic text-[#C9A84C]">
                  Nothing You Don't.
                </em>
              </h2>
            </div>

            <p className="max-w-xl text-[#5B6470] text-lg leading-relaxed">
              Three comprehensive modules covering the full lifecycle of
              business analysis — from fundamentals to advanced Agile practices.
            </p>
          </div>

          {/* Modules */}
          <div className="space-y-6">
            {curriculumData.map((module) => {
              const isOpen = openModule === module.id;

              return (
                <div
                  key={module.id}
                  className="border-t overflow-hidden transition-all duration-300 shadow-sm"
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <div className="flex items-center gap-5">
                      {/* Number */}
                      <div className="w-12 h-12 bg-black text-[#C9A84C] flex items-center justify-center font-serif font-bold">
                        {module.id}
                      </div>

                      {/* Info */}
                      <div>
                        <div className="text-sm uppercase tracking-widest text-[#C9A84C] font-semibold mb-1">
                          {module.tag}
                        </div>

                        <h3 className="text-2xl font-bold text-black font-serif">
                          {module.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-5">
                      <span className="text-[#6B7280] font-medium">
                        {module.topics.length} topics
                      </span>

                      <div className="w-8 h-8 rounded-full border flex items-center justify-center text-2xl bg-black text-[#C9A84C]">
                        <div className="md:pb-[4px]">{isOpen ? "−" : "+"}</div>
                      </div>
                    </div>
                  </button>

                  {/* Body */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[1200px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <div className="grid md:grid-cols-2 gap-4">
                        {module.topics.map((topic, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 bg-[#FAF8F3] border border-[#ECE4D7] rounded-2xl p-4"
                          >
                            <div className="min-w-[38px] h-[38px] rounded-full bg-[#C9A84C] text-white flex items-center justify-center text-sm font-semibold">
                              {index + 1}
                            </div>

                            <p className="text-[#1F2937] leading-relaxed">
                              {topic}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <!-- WHAT YOU'LL LEARN + TOOLS --> */}
      <section id="outcomes" className="bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-10 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-[#C9A84C]" />
                <span className="uppercase tracking-[0.2em] text-sm text-[#C9A84C] font-medium">
                  What You'll Learn
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black font-serif mb-6">
                Skills That
                <br />
                Actually{" "}
                <em className="font-serif italic text-[#C9A84C]">
                  Get You Hired.
                </em>
              </h2>

              {/* Description */}
              <p className="text-[#B7C0CC] text-lg leading-relaxed max-w-2xl mb-10">
                By the end of this program, you won't just understand business
                analysis — you'll be able to practise it confidently in any
                organisation.
              </p>

              {/* Outcomes List */}
              <div className="space-y-5">
                {outcomes.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />

                    <p className="text-black leading-relaxed text-base md:text-lg">
                      <strong className="text-black">{item.title}</strong>{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid sm:grid-cols-2 gap-5">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`rounded-3xl p-6 border transition hover:-translate-y-1 font-serif ${
                      stat.dark
                        ? "bg-black text-[#C9A84C] border-gray-800"
                        : "bg-[#F0EDE6] text-gray-900 border-gray-200"
                    }`}
                  >
                    <div className="text-4xl font-bold">{stat.number}</div>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        stat.dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tools Card */}
              <div className="bg-white rounded-3xl p-7 md:p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0E1A2B] mb-4">
                  Tools & Case Studies
                </h3>

                <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-6">
                  Industrial-standard tools and real-world case studies are
                  woven throughout the program so you graduate with a portfolio,
                  not just a certificate.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-[#F5F1E8] border border-[#E8DDC7] text-[#7A6330] text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- HOW IT WORKS --> */}
      <section className="bg-black overflow-hidden">
        <div className="max-w-[1280px]  mx-auto px-5 lg:px-12 py-10 lg:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

            <span className="uppercase tracking-[2px] text-[12px] font-medium text-[#C9A84C]">
              How It Works
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-2px] font-semibold font-serif text-white max-w-[760px]">
            From Enrolment to{" "}
            <em className="italic font-light text-[#C9A84C]">Offer Letter.</em>
          </h2>

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-black border border-white/10 rounded-sm p-8 min-h-[360px] flex flex-col"
              >
                {/* Large Number */}
                <div className="text-[72px] leading-none font-bold font-serif tracking-[-4px]">
                  {step.number}
                </div>

                {/* Marker */}
                <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-6"></div>

                {/* Title */}
                <h3 className="mt-6 text-[24px] leading-[1.3] font-semibold text-white font-serif">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-[1.9] text-gray-400 font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIALS --> */}
      <section className="bg-[#f8f6f1]">
        <div className="max-w-[1280px]  mx-auto px-5 lg:px-12 py-10 lg:py-24">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

              <span className="uppercase tracking-[2px] text-[12px] font-medium text-[#C9A84C]">
                Student Stories
              </span>
            </div>

            <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-2px] font-semibold font-serif text-[#111111]">
              Real People.{" "}
              <em className="italic font-light text-[#C9A84C]">
                Real Careers.
              </em>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e7e1d8] rounded-lg p-8 flex flex-col justify-between min-h-[420px]"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[17px] leading-[1.9] text-[#1a1a1a] font-light font-serif flex-1 italic">
                  {item.quote}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between gap-4 mt-5 pt-6 border-t border-[#ece7de]">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="flex items-center justify-center">
                      <div className="w-[52px] h-[52px] rounded-full font-serif bg-[#111111] text-[#C9A84C] text-[14px] font-semibold tracking-[1px] flex items-center justify-center">
                        {item.initials}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col">
                      <strong className="text-[15px] font-semibold text-[#111111]">
                        {item.name}
                      </strong>

                      <span className="text-[13px] leading-[1.6] text-[#7a7670] font-light">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="hidden sm:flex px-4 py-2 border border-[#ddd6cb] bg-[#faf8f3] text-[11px] uppercase tracking-[1px] text-[#6d6a66] font-medium whitespace-nowrap">
                    {item.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- FAQ --> */}
      <section id="faq" className="bg-[#f8f6f1]">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-10 lg:py-24">
          <div className="grid lg:grid-cols-[0.95fr_1.2fr] gap-14 lg:gap-20">
            {/* Left Side */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#C9A84C]" />
                <span className="uppercase tracking-[0.18em] text-[11px] font-semibold text-[#C9A84C]">
                  Common Questions
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[#0b1727] text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] tracking-[-0.03em]">
                Everything You
                <br />
                Need to <em className="italic text-[#C9A84C]">Know.</em>
              </h2>

              {/* Description */}
              <p className="mt-7 text-[15px] sm:text-[16px] leading-8 text-[#6d6a63] font-light max-w-md">
                Honest answers to the questions every prospective SOC analyst
                asks before enrolling.
              </p>

              {/* CTA Card */}
              <div className="mt-10 border border-[#e6dfd2] bg-white rounded-[24px] p-7 shadow-sm">
                <p className="text-[15px] leading-7 text-[#5d5a54] font-light">
                  Still have questions? Our advisors are available for a free
                  30-minute call — no obligation, no sales pitch.
                </p>

                <a
                  href="#enrol"
                  className="inline-flex items-center mt-5 text-[#0b1727] text-sm font-semibold tracking-wide hover:text-[#c7a463] transition-colors"
                >
                  Schedule a free call →
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border rounded-[22px] transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#0b1727] border-[#0b1727]"
                        : "bg-white border-[#e6dfd2]"
                    }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-5 text-left px-7 py-6"
                    >
                      <h3
                        className={`text-[16px] sm:text-[17px] leading-7 font-medium transition-colors ${
                          isOpen ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {faq.question}
                      </h3>

                      <span
                        className={`text-2xl leading-none transition-colors ${
                          isOpen ? "text-[#c7a463]" : "text-[#9b8d74]"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`px-7 pb-7 text-[15px] leading-8 font-light ${
                            isOpen ? "text-[#d7dce2]" : "text-[#6d6a63]"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- BOTTOM CTA --> */}
      <section id="enrol" className="bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-10 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_520px] gap-14 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="pt-2">
              <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light font-serif leading-[1.08] tracking-[-0.03em]">
                One Conversation
                <br />
                Can Change Your{" "}
                <em className="italic text-[#C9A84C]">Career.</em>
              </h2>

              <p className="mt-8 text-[15px] sm:text-[16px] leading-8 text-[#b6c0cb] font-light max-w-2xl">
                Our advisors are practising Business Analysts who have been
                exactly where you are. No scripts, no pressure — just honest
                guidance about whether this program is right for you.
              </p>

              {/* Checklist */}
              <ul className="mt-10 space-y-5">
                {[
                  "Free 1:1 career counselling call (30 minutes)",
                  "Personalised assessment of your cybersecurity readiness",
                  "Salary benchmarking for SOC roles in your city",
                  "EMI and scholarship options discussed upfront",
                  "No obligation — learn everything, decide later",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-[#c7a463]/20 border border-[#c7a463] flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#c7a463]" />
                    </div>

                    <span className="text-[#d7dce2] text-[15px] sm:text-[16px] leading-7 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form Panel */}
            <div className="bg-white rounded-lg p-7 sm:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              {/* Header */}
              <div>
                <h3 className="text-[#0b1727] text-[28px] font-medium tracking-[-0.02em]">
                  Book Your Free Session
                </h3>

                <p className="mt-2 text-[14px] leading-7 text-[#6d6a63] font-light">
                  A career advisor will call you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form className="mt-8 space-y-5">
                {/* Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="Arjun"
                      className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Mehta"
                      className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    Phone / WhatsApp
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="arjun@example.com"
                    className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all"
                  />
                </div>

                {/* Current Status */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    Current Status
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all text-[#111827]">
                    <option value="">Select...</option>
                    <option>Final Year Student</option>
                    <option>Recent Graduate (0–2 yrs)</option>
                    <option>Working Professional (2–5 yrs)</option>
                    <option>Working Professional (5+ yrs)</option>
                    <option>Career Break / Returning to Work</option>
                  </select>
                </div>

                {/* Source */}
                <div>
                  <label className="block mb-2 text-[13px] font-medium text-[#111827]">
                    How Did You Hear About Us
                  </label>

                  <select className="w-full h-14 rounded-2xl border border-[#e6dfd2] px-5 text-[15px] outline-none bg-[#faf8f3] focus:border-[#c7a463] transition-all text-[#111827]">
                    <option value="">Select...</option>
                    <option>LinkedIn</option>
                    <option>Google Search</option>
                    <option>Friend / Colleague</option>
                    <option>YouTube</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-14 rounded-2xl bg-black text-white text-[15px] font-semibold tracking-wide hover:bg-[#b89454] transition-all duration-300"
                >
                  Book My Free Session →
                </button>

                {/* Note */}
                <p className="text-center text-[13px] leading-6 text-[#8b8b84] font-light">
                  🔒 No spam. No pressure. Your information is completely
                  confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <footer className="bg-black border-t border-white/10">
        {/* Top Footer */}
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-10 lg:py-24">
          <div className="grid lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.9fr] gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <a href="#" className="inline-flex items-center gap-4">
                {/* Logo */}
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    className="w-full h-full"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#C9A84C"
                    />
                    <rect
                      x="10"
                      y="2"
                      width="6"
                      height="6"
                      rx="1"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <rect
                      x="2"
                      y="10"
                      width="6"
                      height="6"
                      rx="1"
                      fill="rgba(255,255,255,0.3)"
                    />
                    <rect
                      x="10"
                      y="10"
                      width="6"
                      height="6"
                      rx="1"
                      fill="rgba(255,255,255,0.1)"
                    />
                  </svg>
                </div>

                <strong className="text-white text-[20px] tracking-[-0.02em] font-semibold">
                  Edtech Academy
                </strong>
              </a>

              <p className="mt-6 max-w-md text-[15px] leading-8 text-[#aeb8c4] font-light">
                Professional training and career placement across Business
                Analysis, Project Management, Cyber Security, and Data Science.
                Training is the beginning — placement is the promise.
              </p>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white text-[15px] font-semibold tracking-wide mb-6">
                Programs
              </h4>

              <ul className="space-y-4">
                {[
                  "Business Analyst",
                  "Project Management",
                  "Cyber Security",
                  "Data Science",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institution */}
            <div>
              <h4 className="text-white text-[15px] font-semibold tracking-wide mb-6">
                Institution
              </h4>

              <ul className="space-y-4">
                {[
                  "About Us",
                  "Our Faculty",
                  "Hiring Partners",
                  "Blog & Insights",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-[15px] font-semibold tracking-wide mb-6">
                Contact
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+911800000000"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    1800-000-0000 (Free)
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:admissions@edtechacademy.in"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors break-all"
                  >
                    admissions@edtechacademy.in
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-[#aeb8c4] text-[15px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    Student Portal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-[#7f8a96] text-[14px] font-light text-center md:text-left">
              © 2025 Edtech Academy. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[#7f8a96] text-[14px] font-light hover:text-[#c9a84c] transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
