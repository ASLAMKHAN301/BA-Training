import { GOLD, NAVY, STONE, CREAM, BORDER } from "../../constants/theme";
import { PARTNERS } from "../../data/content";
import { Eyebrow, DisplayH2 } from "../ui";

export default function PartnersSection() {
  return (
    <section 
      style={{ 
        background: "white", 
        borderBottom: `1px solid ${BORDER}` 
      }} 
      // Desktop par margin aur padding ko increase kiya gaya hai (py-20 se py-32 tak)
      className="py-16 md:py-24" 
    >
      {/* 
          Main Container Logic:
          max-width: 1160px, margin: 0 auto, padding: 0 20px 
      */}
      <div 
        style={{ 
          maxWidth: '1160px', 
          margin: '20px auto', 
          padding: '0 20px' 
        }}
      >
        {/* Gap increase kiya gaya hai desktop par (lg:gap-24) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content Area */}
          <div className="max-w-[500px]">
            <Eyebrow label="Hiring Network" />
            <div className="mt-4">
              <DisplayH2>
                150+ Companies<br />
                Actively <em style={{ fontStyle: "italic", color: GOLD }}>Hiring.</em>
              </DisplayH2>
            </div>
            <p 
              className="mt-6 text-[15px] md:text-[16px] font-light leading-relaxed" 
              style={{ color: STONE }}
            >
              Our hiring partners range from global consulting firms and IT majors to funded startups and fintech companies
              across India. We maintain active relationships — not passive job board listings.
            </p>
          </div>

          {/* Right Partners Grid */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[1px] border shadow-sm"
            style={{ background: BORDER, borderColor: BORDER }}
          >
            {PARTNERS.map((p, i) => {
              const isLast = i === PARTNERS.length - 1;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center text-center p-4 min-h-[70px] md:min-h-[90px] transition-all hover:bg-white"
                  style={{
                    background: isLast ? NAVY : CREAM,
                    fontSize: 12,
                    fontWeight: isLast ? 700 : 600,
                    color: isLast ? GOLD : NAVY,
                    fontFamily: isLast ? "'Playfair Display', Georgia, serif" : "inherit",
                    fontStyle: isLast ? "italic" : "normal",
                    letterSpacing: "0.2px",
                  }}
                >
                  {p}
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}