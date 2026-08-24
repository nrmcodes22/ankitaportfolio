"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";

import { VISION, PROFILE } from "../../data/content";

const images = [
  {
    src: PROFILE.heroPhoto,
    alt: "Teacher explaining mathematics",
  },
  {
    src: PROFILE.heroPortrait,
    alt: "Mathematics tutor",
  },
  {
    src: PROFILE.heroPhoto3,
    alt: "Students learning mathematics",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Mobile photo animation
   *
   * Every 3 seconds the next photograph
   * moves from behind and becomes the center image.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative mx-auto px-8 md:px-12 lg:px-20 pt-8 sm:pt-20 pb-20 sm:pb-28">

      {/* =====================================================
          MOBILE PHOTO CAROUSEL
          Hidden on desktop
      ====================================================== */}

      


      {/* =====================================================
          HERO
      ====================================================== */}

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

  {/* LEFT CONTENT */}
  <div className="order-2 md:order-1">

    <Reveal>
      <span className="hand text-2xl text-[var(--moss-deep)]">
        {PROFILE.heroGreeting}
      </span>
    </Reveal>

    <Reveal delay={80}>
      <h1 className="display text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] font-semibold mt-1">
        {PROFILE.heroHeadline.map((line, i) => (
          <span key={i}>
            {line}
            {i < PROFILE.heroHeadline.length - 1 && <br />}
          </span>
        ))}
      </h1>
    </Reveal>

    <Reveal delay={160}>
      <p className="mt-6 text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
        {PROFILE.heroSubtextStart}

        <span className="font-semibold text-[var(--moss-deep)] underline decoration-[var(--moss)] decoration-2 underline-offset-4">
          {PROFILE.heroSubtextHighlight}
        </span>

        {PROFILE.heroSubtextEnd}
      </p>
    </Reveal>

    <Reveal delay={240}>
      <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
        <Link
          href="#mywork"
          className="btn-primary px-6 py-3 rounded-full font-medium text-sm sm:text-base inline-flex items-center gap-2"
        >
          See my work
          <ArrowUpRight size={16} />
        </Link>

        <Link
          href="#contact"
          className="btn-ghost px-6 py-3 rounded-full font-medium text-sm sm:text-base"
        >
          Get in touch
        </Link>
      </div>
    </Reveal>

  </div>

  {/* PRINTED PHOTO */}
  <div className="order-1 md:order-2 w-full max-w-xl mx-auto">
    <div
      className="
        bg-[#e6edf3]
        p-3
        pb-10
        sm:p-4
        sm:pb-12
        shadow-xl
        rotate-[2deg]
        transition-all
        border
        border-[#c2c4c5]

        duration-300
        hover:rotate-0
        hover:-translate-y-1
      "
    >
      <img
        src="/images/ankita.jpeg"
        alt="Ankita Panigrahi - Mathematics Educator"
        className=" w-full h-auto object-cover"
      />
    </div>
  </div>

</div>


      {/* =====================================================
          VISION
      ====================================================== */}

      <div className="mt-20 md:mt-40 grid md:grid-cols-2 gap-2 md:gap-12 lg:gap-1 items-center">

        <Reveal className="relative order-2 md:order-1 mt-8 md:mt-0">

          <div className="relative p-3 sm:p-4 pb-10 sm:pb-12 max-w-xl mx-auto md:mx-0 bg-[#e6edf3] border border-[#c2c4c5] shadow-xl rotate-[-2deg] transition-all duration-300 hover:rotate-0 hover:-translate-y-1">

  <div className="overflow-hidden">
    <img
      src={VISION.image}
      alt="Students working through a maths problem together"
      className="w-full h-auto object-cover"
      loading="lazy"
      decoding="async"
    />
  </div>

  {/* Tape */}
  <div className="tape absolute -top-3 left-8 rotate-[-8deg]" />
  <div className="tape absolute -bottom-3 right-8 rotate-[6deg]" />

</div>

        </Reveal>


        <Reveal
          delay={100}
          className="order-1 md:order-2"
        >

          <span className="hand text-2xl text-[var(--moss-deep)]">
            {VISION.eyebrow}
          </span>


          <h2 className="display text-3xl sm:text-4xl font-semibold mt-2 leading-tight">
            {VISION.heading}
          </h2>


          <p className="mt-5 text-[var(--ink-soft)] leading-relaxed">
            {VISION.body}
          </p>


          <div className="mt-8 flex flex-wrap gap-3">

            {VISION.values.map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full border border-[var(--paper-line)] bg-[var(--paper-card)] text-sm font-medium text-[var(--moss-deep)]"
              >
                {v}
              </span>
            ))}

          </div>

        </Reveal>

      </div>

    </header>
  );
}