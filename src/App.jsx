import { useState } from "react";
import iconBank from "./assets/iconBank.svg";

const items = [
  {
    title: "ICICI Bank",
    subtitle: "Banking",
    icon: <img src={iconBank} alt="" srcset="" />,
  },
  {
    title: "Bajaj Allianz",
    subtitle: "Insurance",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dBGBxGxlv32ru2f2G1QiH2oTv7VL_T0bzw&s"
        alt=""
        srcset=""
      />
    ),
  },
  {
    title: "Apollo Hospitals",
    subtitle: "Healthcare",
    icon: (
      <img
        src="https://thumbnail.imgbin.com/13/1/14/imgbin-apollo-hospitals-city-centre-apollo-hospital-indraprastha-health-care-hospital-rREpSfLCiSpmaYWSwtDsi4qAz_t.jpg"
        alt=""
        srcset=""
      />
    ),
  },
  {
    title: "Wipro",
    subtitle: "Technology",
    icon: (
      <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/491/non_2x/wipro-glossy-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    ),
  },
  {
    title: "Razorpay",
    subtitle: "Fintech",
    icon: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EvJxYike5wLY78TG6Nr5s5f6_mwOFmf4Bw&s"
        alt=""
        srcset=""
      />
    ),
  },
  {
    title: "Max Life",
    subtitle: "Insurance",
    icon: (
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR6Q5tn_dfh_YYlDv0VsT6QbYA9AFGqcecfSVoVte8UXyhrJRQ9HqEAe1ly-8JLglHwWiFJNZ36jt2-a2pXWtvd2yQk35ph3iZqSsI4blsTeSGqCRQTGgOuIEDB5JL3JdYx86C6yes_Vv4/s1600/max-life-insurance.jpg"
        alt=""
        srcset=""
      />
    ),
  },
];

const testimonials = [
  {
    initials: "AM",
    name: "Ananya Mehta",
    role: "Business Analyst, ICICI Bank",
    tag: "Bankingh",
    quote:
      "I came in with zero BA experience and left with two full project implementations on my portfolio. Within six weeks of completing the program I had three offers. BACentric doesn't just train you — they build you.",
  },
  {
    initials: "RS",
    name: "Rohan Shetty",
    role: "Senior BA, Bajaj Allianz",
    tag: "Insurance",
    quote:
      "After 7 years in operations I thought switching to BA would take years of effort. The batch of 5 model meant I got personal attention every class. The mentor feedback on my documents was what actually made the difference.",
  },
  {
    initials: "KR",
    name: "Kavya Reddy",
    role: "Product BA, Razorpay",
    tag: "Fintech",
    quote:
      "The GenAI integration in the curriculum was something no other program offered. I walked into interviews talking about how I use AI tools to accelerate documentation — and the interviewers were genuinely impressed. Got a 68% hike.",
  },
];
function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-[14px] h-[14px] fill-[#c7a86d]">
      <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.8l-3.8 2 .7-4.3L1.8 5.5l4.3-.6z" />
    </svg>
  );
}

const pathData = [
  {
    label: "Duration",
    value: "12–16 Weeks",
    sub: "Intensive program designed to match real project timelines, not classroom calendars.",
  },
  {
    label: "Timings",
    value: "Weekday Evenings & Weekends",
    sub: "Schedules built for working professionals. Study without leaving your current job.",
    dark: true,
  },
  {
    label: "Mode",
    value: "Live Online + LMS",
    sub: "Real-time live sessions with 24×7 LMS access for recorded content and resources.",
  },
  {
    label: "Batch Size",
    value: "5 Students Per Class",
    sub: "Small batches ensure every participant receives focused mentorship and personal attention.",
  },
  {
    label: "Who Can Join?",
    value: "All Graduates Welcome",
    sub: "No technical background required. Open to freshers, career changers, and working professionals.",
  },
  {
    label: "Course Fee",
    value: "EMI Available",
    sub: "Zero-cost EMI across all major credit cards. No hidden fees. Scholarship options available.",
    dark: true,
  },
];

const objectives = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build strong hands-on exposure to Business Analysis essentials and develop a solid professional foundation — from requirements elicitation to stakeholder management and SDLC frameworks.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Every concept you learn is reinforced through workshops, simulations, and practical exercises that mirror real project scenarios. Because mastery is built through repetition — not observation.",
  },
  {
    number: "03",
    title: "Work",
    description:
      "Execute 2 complete end-to-end project implementations as a Business Analyst and gain the kind of experience employers value most — regardless of what's on your resume today.",
  },
];

const syllabusData = [
  {
    title: "Introduction to Business Analysis",
    content:
      "Understand what a Business Analyst actually does inside a real organization. We go beyond job descriptions — you will learn how BA fits within project structures, how to navigate cross-functional teams, and what it means to be the bridge between business and technology.",
    tags: ["Foundation", "Role Clarity"],
  },
  {
    title: "Requirements Elicitation & Elicitation Techniques",
    content:
      "Master the art of drawing out accurate, complete requirements from stakeholders who don't always know what they want. Covers interviews, workshops, prototyping, observation, and document analysis — applied through live simulation exercises.",
    tags: ["Core Skill", "Stakeholder Management"],
  },
  {
    title: "SDLC — Waterfall & Agile Frameworks",
    content:
      "Learn how software delivery actually works — from traditional Waterfall to modern Agile delivery. Understand where the BA role shifts in each model, and how to adapt your approach for the environment you're placed in.",
    tags: ["Waterfall", "Agile", "Scrum"],
  },
  {
    title: "Scrum Framework in Practice",
    content:
      "Go beyond reading the Scrum guide. Participate in sprint ceremonies, write user stories that developers can actually build from, manage backlogs under time pressure, and understand the Product Owner–BA dynamic from the inside.",
    tags: ["Scrum", "User Stories", "Backlog"],
  },
  {
    title: "Requirement Documentation",
    content:
      "Write BRDs, FRDs, SRS documents, and use-case specifications the way senior BAs produce them — with precision, traceability, and zero ambiguity. Every document you produce is reviewed and refined until it meets professional standards.",
    tags: ["BRD", "FRD", "Use Cases"],
  },
  {
    title: "Software Testing for Business Analysts",
    content:
      "Understand how testing connects to BA responsibilities. Learn to write test cases, participate in UAT, raise and track defects, and communicate with QA teams — skills that make you far more valuable in any project environment.",
    tags: ["UAT", "Test Cases", "Defect Tracking"],
  },
  {
    title: "Operational Challenges & Post-Implementation Support",
    content:
      "Most courses end at go-live. We train you for what happens after — handling change requests, managing stakeholder expectations post-delivery, and navigating the operational realities that define a BA's long-term credibility.",
    tags: ["Change Management", "Post-Go-Live"],
  },
  {
    title: "Elective — SQL for Business Analysts",
    content:
      "A practical introduction to SQL designed for BAs — not developers. Learn to query databases, understand data structures, and validate business logic through data, so you can have intelligent conversations with technical teams and make better decisions.",
    tags: ["Elective", "SQL", "Data Analysis"],
  },
  {
    title: "Elective — Power BI for Business Analysts",
    content:
      "Learn to build dashboards and reports that communicate business insights to stakeholders. In an environment where data-driven decision making is standard, Power BI fluency is rapidly becoming an expected BA skill across industries.",
    tags: ["Elective", "Power BI", "Data Visualization"],
  },
];

const tools = [
  {
    icon: <img src="https://w7.pngwing.com/pngs/935/1018/png-transparent-jira-cloud-macos-bigsur-icon-thumbnail.png" alt="" srcset="" />,
    name: "JIRA",
    desc: "Backlog management, sprint tracking, user story creation and defect logging in Agile projects.",
  },
  {
    icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/atlassian-confluence-icon.png" alt="" srcset="" />,
    name: "Confluence",
    desc: "Documentation collaboration, requirement pages, and knowledge management across project teams.",
  },
  {
    icon: <img src="https://images.softwaresuggest.com/software_logo/1649329367_5246_mock.png" alt="" srcset="" />,
    name: "Balsamiq",
    desc: "Rapid wireframing and low-fidelity prototyping to communicate UI requirements to developers.",
  },
  {
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby45tq6mdmiBFtf2UefYQtrdudg_0LZlAsg&s" alt="" srcset="" />,
    name: "MS Visio",
    desc: "Process flow diagrams, swimlane charts, and UML modelling for requirements documentation.",
  },
  {
    icon: <img className="h-full w-full" src="https://www.shutterstock.com/image-vector/vector-illustration-database-flash-sign-260nw-435595501.jpg" alt="" srcset="" />,
    name: "Power BI",
    desc: "Building stakeholder dashboards and data visualizations that turn business data into decisions.",
  },
  {
    icon: <img src="https://gimgs.nohat.cc/thumb/f/640/mysql-logo-database-microsoft-sql-server-proprietary-background--5855662718320640.jpg" alt="" srcset="" />,
    name: "SQL",
    desc: "Querying and validating data to support requirements analysis, testing, and business reporting.",
  },
  {
    icon: <img src="https://cdn-icons-png.flaticon.com/512/8194/8194264.png" alt="" srcset="" />,
    name: "MS Excel",
    desc: "Advanced data analysis, gap analysis matrices, traceability documents and requirement tracking.",
  },
  {
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwp189ShNf3hz93R0lWV6ribtm1ECdvs8YSg&s" alt="" srcset="" />,
    name: "GenAI Tools",
    desc: "Leveraging AI to accelerate documentation, requirements drafting, and stakeholder communication.",
  },
];

const methods = [
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

const domains = [
  {
    icon: "🏦",
    title: "Banking",
    tags: ["Retail", "Corporate", "Wealth", "Credit", "Investment"],
  },
  {
    icon: "🛡️",
    title: "Insurance",
    tags: ["Life", "P&C", "General Insurance"],
  },
  {
    icon: "🏥",
    title: "Healthcare",
    tags: ["RCM", "Medical Coding", "EMR/EHR", "Operations"],
  },
  {
    icon: "⚙️",
    title: "Operations",
    tags: ["BPO", "KPO", "Risk Management", "Fraud Investigation"],
  },
  {
    icon: "💻",
    title: "Technology",
    tags: ["CRM/ERP", "HCM", "Fintech", "Mobile Apps", "Salesforce"],
  },
  {
    icon: "📈",
    title: "Finance",
    tags: ["Capital Markets", "Trade Finance", "Forex", "Mutual Funds"],
  },
];

const step = [
  {
    number: "01",
    title: "Assignment",
    description:
      "Real project case studies are explained in detail and assigned to participants for practical execution — across banking, insurance, healthcare, and technology domains.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Once participants submit their work, our mentors review every detail and provide structured feedback during live sessions — not automated suggestions.",
  },
  {
    number: "03",
    title: "Revise / Rework",
    description:
      "Based on mentor feedback, participants improve their documentation, correct mistakes, and strengthen their approach. This is where real learning happens.",
  },
  {
    number: "04",
    title: "Adapt",
    description:
      "This process continues until participants naturally adopt the working style, thinking process, and professional discipline of a Business Analyst.",
  },
];

const panelItems = [
  "2 complete end-to-end project implementations as a Business Analyst",
  "BRD, FRD, and SRS documents reviewed to professional standard",
  "Stakeholder workshop simulations with live role-playing",
  "Sprint ceremonies and backlog grooming exercises in real Scrum format",
  "UAT planning and test case writing against real business scenarios",
  "Domain-specific capstone projects — banking, insurance, healthcare, and tech",
  "Post-implementation review and change request handling",
];

const features = [
  {
    icon: "🏋️",
    title: "Professional Workshop",
    desc: "Completely practical. Real-time. A strong BA foundation built through actual project work across every major responsibility of the role.",
  },
  {
    icon: "🎯",
    title: "Hands-On Experience",
    desc: "Our facilitators are experienced professionals with deep project delivery experience as practicing Business Analysts — not part-time educators.",
  },
  {
    icon: "👁️",
    title: "Personal Attention",
    desc: "We limit every batch to 5 students to ensure every participant receives focused mentorship based on their individual learning needs.",
  },
  {
    icon: "🕐",
    title: "24×7 LMS Access",
    desc: "Access premium learning resources including articles, white papers, case studies, frameworks, and practical reference material throughout the year.",
  },
  {
    icon: "📹",
    title: "Video Tutorials Included",
    desc: "Beyond live sessions, visual learning support helps reinforce concepts and improve retention on your own schedule.",
  },
  {
    icon: "🔄",
    title: "Resit Anytime for Free",
    desc: "Missed sessions or need deeper clarity? You can revisit the course anytime at no additional cost — because learning doesn't stop on a fixed date.",
  },
  {
    icon: "📱",
    title: "Phone & Email Support",
    desc: "Ongoing support from faculty whenever guidance is needed — before, during, and after the program.",
  },
  {
    icon: "📚",
    title: "100+ Lessons Included",
    desc: "Extensive learning modules and practical resources built to strengthen your long-term career growth, not just your first 90 days.",
  },
  {
    icon: "✅",
    title: "100% Placement Assistance",
    desc: "Training is only the beginning. We actively support placement outcomes by strengthening both your capability and your employability.",
  },
];

const careerServices = [
  {
    icon: "🤝",
    title: "One-to-One Mentoring",
    desc: "Every career journey is different. We provide personalized mentoring based on your background, goals, and transition path.",
  },
  {
    icon: "🧭",
    title: "Career Coaching",
    desc: "Our dedicated career coaches help define a clear strategy for your next professional move — not a generic job search plan.",
  },
  {
    icon: "📄",
    title: "Portfolio & Resume",
    desc: "Build a strong professional profile that reflects your capability, credibility, and project readiness.",
  },
  {
    icon: "🔗",
    title: "Recruitment & Profile Marketing",
    desc: "We actively market participant profiles through alumni networks, corporate HRs, and recruitment firms across India.",
  },
  {
    icon: "🎤",
    title: "Mock Interview Events",
    desc: "Practice with mentors and industry professionals so real interviews feel familiar — not intimidating.",
  },
  {
    icon: "🔍",
    title: "Interview Analysis",
    desc: "We prepare you based on real job descriptions and analyze your interview performance so every attempt becomes stronger.",
  },
  {
    icon: "🏗️",
    title: "Capstone Projects",
    desc: "Domain-specific projects across banking, insurance, healthcare, fintech, operations, HR, and technology for your portfolio.",
  },
  {
    icon: "🛡️",
    title: "Job Support",
    desc: "Our support continues after placement. Because the first few months on the job matter just as much as getting hired.",
  },
];

const faqs = [
  {
    question: "Do I need a technical background to enroll?",
    answer:
      "No. The Business Analyst program is open to all graduates regardless of background. We train engineers, MBAs, commerce graduates, science graduates, and working professionals from non-IT roles. Our curriculum is designed to build your technical fluency from the ground up — alongside your BA skills.",
  },
  {
    question: "Can I study while working full-time?",
    answer:
      "Yes — this is how the majority of our students enroll. All sessions run on weekday evenings and weekends. Every live session is recorded and accessible via LMS, so if you miss a class you can catch up on your own schedule. The workload is designed around employed professionals.",
  },
  {
    question: "What is the batch size and why does it matter?",
    answer:
      "We limit every batch to 5 students. This is not a marketing claim — it is central to our training model. With 5 participants, every person's assignment gets reviewed in detail, every question gets answered fully, and your mentor can adapt the session to your specific challenges. No one gets left behind.",
  },
  {
    question: "What makes this different from other BA training programs?",
    answer:
      "Three things: our trainers are full-time working BA professionals from active delivery teams (not part-time educators), our batch size is capped at 5 for genuine mentorship, and participants execute 2 complete end-to-end project implementations — not just case study exercises. We prepare you for the interview, the onboarding, and the first year on the job.",
  },
  {
    question: "Is placement assistance included? What does it cover?",
    answer:
      "Yes. 100% placement assistance is included — meaning dedicated, active support from your assigned placement manager until you receive an offer. This covers resume building, profile marketing through our recruiter network, mock interview preparation, job description analysis, and post-placement support for your first few months.",
  },
  {
    question: "What payment and financing options are available?",
    answer:
      "We offer zero-cost EMI across all major credit cards, direct bank transfer, and merit-based scholarships for eligible candidates. There are no hidden fees. Your advisor will walk you through all options during your counselling call so you can make a fully informed decision without any pressure.",
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
        — Limited seats available. Reserve your spot →
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
                CodersBloom
              </h1>
              <p className="text-[10px] tracking-[2px] uppercase text-[#7A7060]">
                Business Analyst Training
              </p>
            </div>
            <div className="border h-10 border-l-2 border-gray-700"></div>
            <div>
              <h1 className="font-serif text-lg font-bold text-black">17+</h1>
              <p className="text-[10px] tracking-[2px] uppercase text-[#7A7060]">
                Years
              </p>
            </div>
          </div>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <li className="text-[#7A7060] hover:text-black">
              <a href="#curriculum">Curriculum</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#tools">Tools</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#methodology">Methodology</a>
            </li>
            <li className="text-[#7A7060] hover:text-black">
              <a href="#careerServices">Career Services</a>
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
                Business Analyst Training with GenAI
              </span>
            </div>

            <h1 className="text-white font-serif text-3xl lg:text-6xl leading-tight font-bold">
              Master Business Analysis Through <br />
              <span className="italic text-[#C9A84C]">Real Practice.</span>
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-6 mt-5">
              {["Practical", "Industry-Aligned", "Experience-Driven"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex gap-2 text-white/60 py-2 text-lg"
                  >
                    <div className="w-[5px] h-[5px] rounded-full bg-[#C9A84C] mt-[12px] " />
                    {item}
                  </div>
                ),
              )}
            </div>

            <p className="text-white/60 text-lg leading-8 mt-5 max-w-xl">
              Build the confidence to lead projects independently from day one —
              with hands-on training designed for today's project environments,
              not just certification exams.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#C9A84C] text-black px-8 py-4 font-semibold rounded-sm">
                Enroll Now
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-sm">
                Explore Curriculum
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 border-t border-white/10 mt-14 pt-10">
              {[
                { number: "34.5L", label: "Highest Salary Offered" },
                { number: "3,200+", label: "Careers Transitioned" },
                { number: "55%", label: "Average Hike Offered" },
                { number: "185+", label: "Companies Hired So Far" },
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
          <div className="text-[#7A7060] font-bold text-lg whitespace-nowrap uppercase">
            Trained & Placed In
          </div>

          {/* Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="w-10 h-10">
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

      {/* <!-- ABOUT --> */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-[#C9A84C]"></div>
                <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
                  What We Do
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-6 font-serif">
                We Train You for the
                <br />
                <em className="italic text-[#C9A84C]">Job. Not the Exam.</em>
              </h2>

              {/* Paragraphs */}
              <p className="text-[#4B5563] leading-8 text-lg mb-6">
                Our Business Analyst Training with GenAI is built to deliver
                what the industry actually expects from a modern Business
                Analyst — clarity of thinking, structured problem-solving,
                stakeholder management, and the ability to drive projects with
                confidence.
              </p>

              {/* Highlight Box */}
              <div className="border-l-4 border-[#C9A84C] bg-white p-5 rounded-xl shadow-sm mb-6">
                <p className="text-[#0E1A2B] text-lg font-medium leading-8">
                  True Business Analysis cannot be learned from slides alone. It
                  is built through experience.
                </p>
              </div>

              <p className="text-[#4B5563] leading-8 text-lg mb-6">
                From requirements elicitation and documentation to stakeholder
                communication, project delivery, and post-implementation support
                — every part of the program is designed around{" "}
                <strong className="text-black">practical application</strong>.
              </p>

              <p className="text-[#4B5563] leading-8 text-lg">
                Unlike conventional institutes that rely on textbook-heavy
                teaching and part-time trainers, our programs are led by{" "}
                <strong className="text-black">
                  full-time working professionals
                </strong>{" "}
                from our in-house delivery teams — experts who have successfully
                delivered projects across insurance, fintech, banking, mobile
                applications, and US healthcare.
              </p>
            </div>

            {/* Right Stats */}
            <div className="grid sm:grid-cols-2 ">
              <div className="bg-[#FFF8E8] border-[1px] border-gray-300 p-8 shadow-md">
                <div className="text-4xl font-bold text-black font-serif mb-3">
                  34.5L
                </div>
                <p className="text-[#4B5563] leading-7">
                  Highest salary offered to a BACentric graduate
                </p>
              </div>

              <div className="bg-black border-[1px] border-gray-300 p-8 shadow-md">
                <div className="text-4xl font-bold text-[#C9A84C] mb-3 font-serif">
                  3,200+
                </div>
                <p className="text-[#4B5563] leading-7">
                  Careers successfully transitioned since inception
                </p>
              </div>

              <div className="bg-[#FFF8E8] border-[1px] border-gray-300 p-8 shadow-md">
                <div className="text-4xl font-bold text-black mb-3 font-serif">
                  55%
                </div>
                <p className="text-[#4B5563] leading-7">
                  Average salary hike for working professionals
                </p>
              </div>

              <div className="bg-[#FFF8E8] border-[1px] border-gray-300 p-8 shadow-md">
                <div className="text-4xl font-bold text-black mb-3 font-serif">
                  185+
                </div>
                <p className="text-[#4B5563] leading-7">
                  Companies that have hired BACentric graduates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* <!-- PATH / LOGISTICS --> */}
      <section id="path" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A84C]"></div>
            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
              Program Details
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-black font-serif mb-14 leading-tight">
            Your Path to <em className="text-[#C9A84C] italic">Success.</em>
          </h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathData.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-md transition duration-300 hover:-translate-y-1 ${
                  item.dark ? "bg-black" : "bg-[#FFF8E8]"
                }`}
              >
                {/* Label */}
                <div
                  className={`text-sm uppercase tracking-[2px] font-semibold mb-4 ${
                    item.dark ? "text-[#C9A84C]" : "text-[#C9A84C]"
                  }`}
                >
                  {item.label}
                </div>

                {/* Value */}
                <div
                  className={`text-2xl font-bold leading-snug mb-4 font-serif ${
                    item.dark ? "text-white" : "text-black"
                  }`}
                >
                  {item.value}
                </div>

                {/* Description */}
                <p
                  className={`leading-7 text-base ${
                    item.dark ? "text-white/60" : "text-[#4B5563]"
                  }`}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- PROGRAM OBJECTIVES --> */}
      <section id="objectives" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A84C]"></div>
            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
              Program Objectives
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight mb-6">
            Three Areas to Work
            <br />
            Towards <em className="text-[#C9A84C] italic">Success.</em>
          </h2>

          {/* Lead Text */}
          <p className="text-lg leading-8 text-[#4B5563] max-w-3xl mb-16">
            This is not a random list of topics. It is a carefully structured
            experience designed to build competence, confidence, and
            credibility.
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((item, index) => (
              <div
                key={index}
                className="relative bg-black border-[1px] border-[#4B5563] rounded-xl p-8  hover:-translate-y-1 transition duration-300"
              >
                {/* Number */}
                <div className="text-5xl font-bold text-[#C9A84C]/20 mb-6 font-serif">
                  {item.number}
                </div>

                {/* Marker */}
                <div className="w-2 h-2 bg-[#C9A84C] rounded-full mb-6"></div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5 font-serif">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] leading-8 text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- CURRICULUM --> */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-14">
            {/* Left Side */}
            <div className="lg:sticky lg:top-24 h-fit">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-[#C9A84C]"></div>
                <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
                  Course Syllabus
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black font-serif">
                The Most
                <br />
                Comprehensive
                <br />
                Curriculum. <em className="text-[#C9A84C] italic">Period.</em>
              </h2>

              {/* Lead */}
              <p className="text-lg leading-8 text-[#4B5563] mt-6 mb-10">
                We bridge every gap that conventional programs leave open —
                combining traditional BA foundations with modern project
                realities and future-ready thinking.
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black text-[#C9A84C] flex items-center justify-center font-bold text-lg">
                  RA
                </div>

                <div className="flex flex-col">
                  <strong className="text-black text-lg">Reeti Ahuja</strong>
                  <span className="text-[#6B7280]">
                    Program Lead, BACentric
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-5">
              {syllabusData.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left p-6"
                    >
                      <h3 className="text-lg md:text-xl font-semibold text-black leading-7">
                        {item.title}
                      </h3>

                      <span className="text-3xl text-[#C9A84C] ml-4">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "max-h-[500px] opacity-100 pb-6 px-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[#4B5563] leading-8 mb-5">
                        {item.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-[#F4EFE2] text-[#C9A84C] text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- TOOLS --> */}
      <section id="tools" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
              Tools We Cover
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white font-serif mb-6">
            Professional <em className="text-[#C9A84C] italic">Readiness,</em>
            <br />
            Not Just Familiarity.
          </h2>

          {/* Lead Text */}
          <p className="max-w-3xl text-lg leading-8 text-[#4B5563] mb-16">
            You must know how to use tools confidently under real project
            conditions. Our participants leave with the practical confidence to
            contribute from day one.
          </p>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-black border border-[#4B5563] rounded-xl p-8 shadow-md hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#F4EFE2] flex items-center justify-center mb-6">
                  <div className="text-3xl">{tool.icon}</div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] leading-7 text-base">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- METHODOLOGY --> */}
      <section id="methodology" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Header */}
          <div className="mb-16 text-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-1 md:gap-3 mb-5 justify-center">
              <div className="w-10 h-[1px] bg-[#C9A84C] "></div>

              <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C] w-full">
                Our Learning Methodology
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight font-serif text-black">
              How Real{" "}
              <em className="text-[#C9A84C] not-italic">Professionals</em>
              <br />
              Are Made.
            </h2>
          </div>

          {/* Learning Cycle */}
          <div className="bg-white p-6 md:p-10 overflow-x-auto mb-16">
            <svg
              className="w-[480px] md:w-full"
              viewBox="0 0 780 340"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path
                    d="M2 1L8 5L2 9"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              {/* Arrows */}
              <path
                d="M 178 128 Q 260 60 322 128"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
                opacity="0.7"
              />

              <path
                d="M 422 170 Q 490 230 422 258"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
                opacity="0.7"
              />

              <path
                d="M 322 258 Q 260 320 178 258"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
                opacity="0.7"
              />

              <path
                d="M 78 170 Q 10 95 78 95"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.8"
                strokeDasharray="5 4"
                markerEnd="url(#arrow)"
                opacity="0.9"
              />

              {/* Center Text */}
              <text
                x="250"
                y="192"
                textAnchor="middle"
                fontSize="13"
                fill="#C9A84C"
                opacity="0.6"
                fontStyle="italic"
              >
                continuous
              </text>

              <text
                x="250"
                y="208"
                textAnchor="middle"
                fontSize="13"
                fill="#C9A84C"
                opacity="0.6"
                fontStyle="italic"
              >
                cycle
              </text>

              {/* Node 1 */}
              <rect
                x="18"
                y="110"
                width="120"
                height="80"
                rx="6"
                fill="#000000"
              />

              <rect
                x="18"
                y="110"
                width="120"
                height="3"
                rx="2"
                fill="#C9A84C"
              />

              <text
                x="78"
                y="147"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="#C9A84C"
                fontFamily="serif"
              >
                Experiment
              </text>

              <text
                x="78"
                y="164"
                textAnchor="middle"
                fontSize="11"
                fill="rgba(255,255,255,0.5)"
              >
                Try it in practice
              </text>

              {/* Node 2 */}

              <rect
                x="322"
                y="95"
                width="124"
                height="80"
                rx="6"
                fill="#1A1A1A"
                stroke="#C9A84C"
                strokeOpacity="0.3"
              />

              <text
                x="384"
                y="132"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="white"
                fontFamily="serif"
              >
                Experience
              </text>

              <text
                x="384"
                y="149"
                textAnchor="middle"
                fontSize="11"
                fill="rgba(255,255,255,0.45)"
              >
                Concrete encounter
              </text>

              {/* Node 3 */}
              <rect
                x="322"
                y="225"
                width="124"
                height="80"
                rx="6"
                fill="#1A1A1A"
                stroke="#C9A84C"
                strokeOpacity="0.3"
              />

              <text
                x="384"
                y="262"
                textAnchor="middle"
                fontSize="16"
                fontWeight="700"
                fill="white"
                fontFamily="serif"
              >
                Reflect
              </text>

              <text
                x="384"
                y="279"
                textAnchor="middle"
                fontSize="11"
                fill="rgba(255,255,255,0.45)"
              >
                Observe & review
              </text>

              {/* Node 4 */}
              <rect
                x="18"
                y="225"
                width="120"
                height="80"
                rx="6"
                fill="#1A1A1A"
                stroke="#C9A84C"
                strokeOpacity="0.3"
              />

              <text
                x="78"
                y="259"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="white"
                fontFamily="serif"
              >
                Conceptualize
              </text>

              <text
                x="78"
                y="276"
                textAnchor="middle"
                fontSize="11"
                fill="rgba(255,255,255,0.45)"
              >
                Form new ideas
              </text>

              {/* Attribution */}
              <text
                x="390"
                y="320"
                textAnchor="middle"
                fontSize="12"
                fill="rgba(201,168,76,0.45)"
                fontStyle="italic"
              >
                Based on Kolb's Experiential Learning Cycle
              </text>
            </svg>
          </div>

          {/* Method Bars */}
          <div className="grid md:grid-cols-3 gap-6">
            {methods.map((item, index) => (
              <div
                key={index}
                className={`border border-[#C9A84C]/10 rounded-2xl p-8 hover:-translate-y-1 transition duration-300 ${
                  item.dark ? "bg-black" : "bg-[#F8F5EE]"
                }`}
              >
                {/* Percentage */}
                <div
                  className={`text-5xl font-bold  mb-5 font-serif  ${
                    item.dark ? "text-[#C9A84C]" : "text-black"
                  }`}
                >
                  {item.pct}
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    item.dark ? "text-white" : "text-black"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-4 leading-8 ${
                    item.dark ? "text-slate-400" : "text-slate-900"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />

      {/* <!-- DOMAINS --> */}
      <section id="domains" className="py-20 bg-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

                <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
                  Domain Expertise
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black font-serif">
                We Work Across
                <br />
                Every Major <em className="text-[#C9A84C] italic">Industry.</em>
              </h2>
            </div>

            {/* Lead Text */}
            <p className="max-w-md text-lg leading-8 text-[#4B5563]">
              Our trainers have delivered projects in these domains — and they
              bring that lived experience into every session.
            </p>
          </div>

          {/* Domains Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#F4EFE2] flex items-center justify-center text-3xl mb-6">
                  {domain.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-5">
                  {domain.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {domain.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#F8F5EE] text-[#0E1A2B] text-sm font-medium border border-[#E7DFC8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />

      {/* <!-- CASE STUDIES & ASSIGNMENTS --> */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            {/* Left Content */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

                <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
                  Case Studies & Assignments
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black font-serif mb-6">
                Built Through
                <br />
                <em className="text-[#C9A84C] italic">Doing,</em> Not Watching.
              </h2>

              {/* Lead */}
              <p className="text-lg leading-8 text-[#4B5563] max-w-3xl mb-14">
                Mastery is built through repetition — not observation. Every
                assignment cycle takes you closer to operating like a
                professional.
              </p>

              {/* Steps */}
              <div className="space-y-8">
                {step.map((step, index) => (
                  <div key={index} className="flex gap-5 items-start">
                    {/* Number Badge */}
                    <div className="w-14 h-14 rounded-full bg-black text-[#C9A84C] flex items-center justify-center font-bold text-lg shrink-0 shadow-md">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-2xl font-bold text-black mb-3">
                        {step.title}
                      </h4>

                      <p className="text-[#4B5563] leading-8">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="bg-black rounded-sm p-8 lg:p-10 sticky top-24 shadow-xl">
              {/* Label */}
              <div className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C] mb-5">
                What You'll Work On
              </div>

              {/* Headline */}
              <h3 className="text-4xl font-bold leading-tight font-serif text-white mb-10">
                Beyond
                <br />
                <em className="text-[#C9A84C] italic">Theoretical Classes.</em>
              </h3>

              {/* Items */}
              <div className="space-y-5">
                {panelItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start border-b border-white/10 pb-5"
                  >
                    {/* Bullet */}
                    <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>

                    {/* Text */}
                    <p className="text-white/75 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- WHY US --> */}
      <section id="why" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

            <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
              Why BACentric
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white font-serif mb-6">
            What Makes
            <br />
            Us <em className="text-[#C9A84C] italic">Different.</em>
          </h2>

          {/* Lead Text */}
          <p className="max-w-3xl text-lg leading-8 text-[#4B5563] mb-16">
            We train you to become the kind of Business Analyst we would trust
            on our own projects. That standard shows in everything we do.
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-[#4B5563] rounded-xl p-8 shadow-md hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-zinc-500 flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] leading-8 text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- CAREER SERVICES --> */}
      <section id="career" className="py-20 bg-[#F8F5EE]">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

                <span className="uppercase tracking-[3px] text-sm font-semibold text-[#C9A84C]">
                  Career Services
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black font-serif">
                From Job Search
                <br />
                to <em className="text-[#C9A84C] not-italic">Job Success.</em>
              </h2>
            </div>

            {/* Lead */}
            <p className="max-w-md text-lg leading-8 text-[#4B5563]">
              BACentric connects top talent with recruiters across India. Our
              participants have been hired by leading global enterprises and
              consulting firms.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerServices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#F4EFE2] flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] leading-8 text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />

      {/* <!-- TESTIMONIALS --> */}
      <section className="bg-[#f8f6f1]">
        <div className="max-w-[1280px]  mx-auto px-5 lg:px-12 py-10 lg:py-24">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#C9A84C]"></div>

              <span className="uppercase tracking-[2px] text-[12px] font-medium text-[#C9A84C]">
                What Our Graduates Say
              </span>
            </div>

            <h2 className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-2px] font-semibold font-serif text-[#111111]">
              Real Careers. <br />
              <em className="italic font-light text-[#C9A84C]">
                Real Results.
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
      <hr />

      {/* <!-- FAQ --> */}
      <section id="faq" className="bg-white">
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
                Our advisors are working professionals who have been exactly
                where you are. No scripts, no hard sell — just honest guidance
                about whether this program is right for you and your goals.
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
