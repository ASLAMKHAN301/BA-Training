import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Background Image
import bgImage from "../../assets/priscilla-du-preez-OEdkPaxYMXU-unsplash.jpg";

// First Row Images
const firstRow = [
  "/gallery/g01.jpg",
  "/gallery/g02.jpg",
  "/gallery/g03.jpg",
  "/gallery/g04.jpg",
  "/gallery/g05.jpg",
  "/gallery/g06.jpg",
];

// Second Row Images
const secondRow = [
  "/gallery/g07.jpg",
  "/gallery/g08.jpg",
  "/gallery/g09.jpg",
  "/gallery/g10.jpg",
  "/gallery/g11.jpg",
  "/gallery/g12.jpg",
];

export default function GallerySection() {
  return (
    <section
      className="relative py-10 overflow-x-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
    rgba(0, 0, 0, 0.78),
    rgba(0, 0, 0, 0.82)
  ),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Optional Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center py-14">
          <h2 className="text-white text-4xl md:text-5xl font-bold pb-5">
            The Coders Bloom Class
          </h2>

          <p className="text-white/70 text-center text-lg mx-auto">
            Connect with like-minded peers and enjoy the learning process.
          </p>
        </div>

        {/* First Slider */}
        <div className="mb-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={20}
            speed={5000}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
          >
            {firstRow.map((img, index) => (
              <SwiperSlide
                key={index}
                className="!w-[280px] md:!w-[380px]"
              >
                <div className="h-[220px] md:h-[280px] rounded-xl overflow-hidden group">
                  <img
                    src={img}
                    alt="life"
                    className="
                      w-full
                      h-full
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                      group-hover:scale-110
                      transition-all
                      duration-700
                      rounded-xl
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Second Slider */}
        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={20}
            speed={5000}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            className="!overflow-visible"
          >
            {secondRow.map((img, index) => (
              <SwiperSlide
                key={index}
                className="!w-[280px] md:!w-[380px]"
              >
                <div className="h-[220px] md:h-[280px] rounded-xl overflow-hidden group">
                  <img
                    src={img}
                    alt="life"
                    className="
                      w-full
                      h-full
                      object-cover
                      grayscale
                      group-hover:grayscale-0
                      group-hover:scale-110
                      transition-all
                      duration-700
                      rounded-xl
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}