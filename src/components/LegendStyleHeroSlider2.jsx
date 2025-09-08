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
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/480251c7-01bb-478e-a18d-dba2a8d62a39.jpeg", // popcorn / snack vibe
  },
  {
    id: 2,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/d6849f95-4dce-4655-b430-b61e141c443f.jpeg", // cinema seats
  },
  {
    id: 3,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/45fbc23f-6282-405f-9bc5-cf2dec765988.jpeg", // celebration vibe
  },
  {
    id: 4,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/bab652d6-8f39-42d8-98c5-2661fc0a3bdd.jpeg",
  },
  {
    id: 5,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/0ee58116-137c-4301-a9dd-875bb7d74bd9.jpeg",
  },
  {
    id: 6,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/c4d845c4-8144-4aff-8a05-7cee65183da3.jpeg",
  },
  {
    id: 7,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/84fe69e2-26bf-44a5-89c6-d5b31ad603ad.jpeg",
  },
  {
    id: 8,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/84b3c60b-14af-43af-985b-575a287be91b.jpeg",
  },
  {
    id: 9,
    image:
      "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/30450d10-0d3b-447e-9ba3-f074be6dd76b.jpeg",
  },
];

export default function LegendStyleHeroSlider2({ slides = DEFAULT_SLIDES }) {
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
    <section className="w-[70%] z-0 relative mt-[-31rem] m-auto ">
      <Swiper
        // Keep a ref so we can pause/resume on hover
        ref={swiperRef}
        modules={[Autoplay, Pagination, Keyboard, EffectFade, Parallax]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        effect="fade"
        speed={800}
        keyboard={{ enabled: true }}
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group relative h-[60vh min-h-[60px] w-full  rounded-2xl  md:h-[67vh] [&_.swiper-pagination-bullet]:bg-pink-600
             
             [&_.swiper-pagination-bullet-active]:bg-pink-700
            "
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id} className="relative h-[00px]">
            {/* Background Image */}
            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-swiper-parallax-scale="1.1"
            />
            {/* Cinematic Overlay + Vignette */}

            <div className="relative z-10 flex h-full items-end px-4 pb-10 sm:px-8 md:px-12 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="max-w-3xl text-white"
              ></motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
