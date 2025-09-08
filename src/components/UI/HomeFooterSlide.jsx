import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  A11y,
  EffectFade,
  Parallax,
} from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const DEFAULT_SLIDES = [
  {
    id: 1,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/f9f7cf67-20fc-45e6-9e38-d24aecee9fa1.jpeg", // popcorn / snack vibe
    titleEn: "Chocolate ",
    titleKm: "Popcorn Combo –",
    subtitle:
      "Try our new Chocolate Popcorn. Each piece is coated with rich chocolate for a crunchy and sweet movie snack.",
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: 2,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/189fa652-6846-40a4-a7d9-03df5bbb1275.jpeg", // cinema seats
    titleEn: "Diamond Member Perks Unlocked",
    titleKm: "អត្ថប្រយោជន៍សមាជិក Diamond",
    subtitle: "Priority seats, exclusive deals, and more.",
    cta: { label: "Join Now", href: "#" },
  },
  {
    id: 3,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/24f5e3a1-3c99-4544-90d5-0f77be765276.jpeg", // celebration vibe
    titleEn: "Festival Week Specials",
    titleKm: "ពិសេសសប្ដាហ៍ពិធីបុណ្យ",
    subtitle: "Collect stamps & redeem sweet rewards.",
    cta: { label: "See Offers", href: "#" },
  },
  {
    id: 4,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5bb25e91-4c54-4dc4-acbb-a1c6f7474c9d.jpeg", // celebration vibe
    titleEn: "Festival Week Specials",
    titleKm: "ពិសេសសប្ដាហ៍ពិធីបុណ្យ",
    subtitle: "Collect stamps & redeem sweet rewards.",
    cta: { label: "See Offers", href: "#" },
  },
  {
    id: 5,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/42704358-5548-4d22-aab5-023fe818d6a7.jpeg", // celebration vibe
    titleEn: "Festival Week Specials",
    titleKm: "ពិសេសសប្ដាហ៍ពិធីបុណ្យ",
    subtitle: "Collect stamps & redeem sweet rewards.",
    cta: { label: "See Offers", href: "#" },
  },
];

export default function HomeFooterSlide({ slides = DEFAULT_SLIDES }) {
  const swiperRef = useRef(null);
  const [isHovering, setHovering] = useState(false);

  const onMouseEnter = () => {
    setHovering(true);
    const swiper = swiperRef.current?.swiper;
    if (swiper?.autoplay) swiper.autoplay.stop();
  };

  const onMouseLeave = () => {
    setHovering(false);
    const swiper = swiperRef.current?.swiper;
    if (swiper?.autoplay) swiper.autoplay.start();
  };

  return (
    <section className="relative w-[1040px] m-auto mt-28 top-0">
      <h2 className="text-white text-4xl font-extrabold ">What's new?</h2>
      <Swiper
        // Keep a ref so we can pause/resume on hover
        ref={swiperRef}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          Keyboard,
          A11y,
          EffectFade,
          Parallax,
        ]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        effect="fade"
        speed={800}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group relative mt-10 h-[60vh] min-h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[20vh]"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id} className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 "
              aria-hidden
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-swiper-parallax-scale="1.1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 via-transparent to-transparent"></div>

            {/* Cinematic Overlay + Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-end px-4 pb-10 sm:px-8 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="max-w-3xl text-white"
              >
                {/* English Title */}
                <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-5xl">
                  {s.titleEn}
                </h2>
                {/* Khmer Title (optional) */}
                {s.titleKm && (
                  <p className="mt-2 text-lg font-semibold leading-snug md:text-2xl">
                    {s.titleKm}
                  </p>
                )}
                {/* Subtitle */}
                {s.subtitle && (
                  <p className="mt-3 max-w-sm text-sm/6 opacity-90 md:text-base/7">
                    {s.subtitle}
                  </p>
                )}

                {/* CTA */}
                {s.cta && (
                  <div className="mt-6">
                    <a
                      href={s.cta.href}
                      className="inline-flex items-center gap-2 rounded-2xl bg-white/95 px-5 py-3 font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:translate-y-[-1px] hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60 active:translate-y-[0]"
                    >
                      {s.cta.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden
                      >
                        <path d="M13.5 4.5a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.5a1 1 0 1 1-2 0V7.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L17.586 6H14.5a1 1 0 0 1-1-1Z" />
                        <path d="M3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 1 1 2 0v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Z" />
                      </svg>
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
