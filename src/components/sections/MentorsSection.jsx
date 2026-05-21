import { useState } from "react";
import { MENTORS } from "../../data/content";
import { Eyebrow, DisplayH2, SectionHead } from "../ui";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 14 14" width="14" height="14" fill="white">
      <path d="M1.5 4.5H4V13H1.5V4.5ZM2.75 3.5C1.95 3.5 1.5 2.95 1.5 2.3 1.5 1.65 1.95 1.1 2.8 1.1 3.65 1.1 4.05 1.65 4.05 2.3 4.05 2.95 3.6 3.5 2.75 3.5ZM13 13H10.5V8.5C10.5 7.4 10.1 6.65 9.1 6.65 8.35 6.65 7.9 7.15 7.7 7.65 7.6 7.9 7.55 8.2 7.55 8.5V13H5.05V4.5H7.55V5.6C7.9 5 8.65 4.35 9.75 4.35 11.15 4.35 13 5.3 13 8.15V13Z" />
    </svg>
  );
}

function MentorCard({ mentor }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      className={`bg-[#FDFCF9] border border-[#EBEBEB] rounded-xl p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden transition-all duration-500
        ${hovered ? "shadow-[0_30px_60px_rgba(0,0,0,0.08)] -translate-y-2" : ""}`}
    >
      {/* Top Hover Line */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-[#C9A84C] origin-left transition-transform duration-500 ${hovered ? "scale-x-100" : "scale-x-0"}`} />
      
      {/* LinkedIn positioned in Top Right */}
      <a href="#" aria-label="LinkedIn"
        className={`absolute top-6 right-6 w-8 h-8 bg-[#0077B5] rounded-md flex items-center justify-center transition-all duration-300 z-10 ${hovered ? "scale-110 shadow-lg" : "opacity-80"}`}>
        <LinkedInIcon />
      </a>

      {/* Profile Section */}
      <div className="flex flex-col gap-5">
        <div className="w-16 h-16 rounded-full bg-[#0A192F] text-[#C9A84C] font-serif text-xl font-bold flex items-center justify-center border-[3px] border-[#EBEBEB] shrink-0">
          {mentor.initials}
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="font-serif text-[19px] font-bold text-[#0A192F] leading-tight">
            {mentor.name}
          </div>
          <div className="text-[11px] uppercase tracking-widest text-[#757575] font-bold">
            {mentor.role}
          </div>
          
          <div className="mt-2">
            <span className="inline-flex items-center gap-2 bg-white border border-[#EBEBEB] rounded-full px-3 py-1.5 text-[11px] font-bold"
              style={{ color: mentor.companyColor }}>
              <span className="w-2 h-2 rounded-full" style={{ background: mentor.companyColor }} />
              {mentor.company}
            </span>
          </div>
        </div>
      </div>

      <p className="text-[14.5px] text-[#555] leading-[1.8] font-light italic border-t border-[#EBEBEB] pt-5 mt-auto">
        "{mentor.bio}"
      </p>
    </div>
  );
}

export default function MentorsSection() {
  return (
    <section id="mentors" className="bg-white border-b border-[#EBEBEB] py-20 lg:py-32">
      {/* Container with your specific style requirements */}
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 20px' }} className="relative">
        
        {/* Header Spacing */}
        <div className="mb-16 lg:mb-24">
          <SectionHead linkText="View all mentors →">
            <Eyebrow label="Industry Mentors" />
            <DisplayH2>
              Get Personalised Feedback<br />
              from <em className="italic text-[#C9A84C]">Mentors.</em>
            </DisplayH2>
          </SectionHead>
        </div>

        {/* Grid Spacing: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {MENTORS.map((m) => (
            <MentorCard key={m.name} mentor={m} />
          ))}
        </div>

        {/* Callback Banner: Increased padding and rounded corners for "Better Look" */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#FDFCF9] border border-[#C9A84C]/30 rounded-[24px] p-8 sm:p-12 text-center lg:text-left shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#0A192F] flex items-center justify-center shrink-0 shadow-xl shadow-gold/10">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="#C9A84C">
                <path d="M15.5 13.5c-.8-.9-1.7-1.4-2.6-1.4-.9 0-1.8.5-2.6 1.4-.2.2-.4.3-.6.3s-.5-.1-.7-.3c-1.5-1.1-2.8-2.4-3.9-3.9-.4-.5-.4-1.2.1-1.6.9-.8 1.4-1.7 1.4-2.6 0-.9-.5-1.8-1.4-2.6C4.9 2.5 4.2 2 3.5 2c-.7 0-1.4.5-2.1 1.4C.5 4.5 0 5.7 0 7c0 1.3.5 2.8 1.6 4.4 1 1.5 2.2 2.9 3.7 4.2 1.5 1.3 3 2.3 4.6 3 1.2.5 2.3.8 3.2.8 1.3 0 2.5-.5 3.6-1.4.9-.8 1.3-1.5 1.3-2.2 0-.7-.5-1.4-1.5-2.3z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A192F] tracking-tight">Talk directly to a mentor before enrolling</h4>
              <p className="text-[15px] text-[#757575] mt-1.5 font-light">Book a free 20-minute intro call — no strings attached.</p>
            </div>
          </div>
          
          <a href="#enrol" className="w-full lg:w-auto bg-[#C9A84C] text-[#0A192F] text-[16px] font-bold px-12 py-5 rounded-full no-underline hover:bg-[#B3933B] transition-all shadow-lg active:scale-95 whitespace-nowrap">
            Request a Callback
          </a>
        </div>
      </div>
    </section>
  );
}