import React from "react";

const logosRow1 = [
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-10.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-9.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-11.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-12.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-22.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-29.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-25.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-26.png",
];

const logosRow2 = [
  "https://bacentric.com/wp-content/uploads/2025/12/width_200.jpg",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-14.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-15.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-17.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-30.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-31.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-32.png",
  "https://bacentric.com/wp-content/uploads/2025/12/width_200-33.png",
];

function LogoSlider({ logos, reverse = false }) {
  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex w-max gap-5 md:gap-10 ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex h-36 min-w-[80px] md:min-w-[150px] items-center justify-center"
          >
            <img
              src={logo}
              alt="company-logo"
              className="h-6 md:h-14 w-full object-contain transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CorporatePartners() {
  return (
    <section className="w-full overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-black md:text-5xl">
          Corporates we worked with
        </h2>

        <LogoSlider logos={logosRow1} />
        <LogoSlider logos={logosRow2} reverse />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll 25s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}