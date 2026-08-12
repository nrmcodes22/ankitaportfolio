"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";


import { VISION,PROFILE } from "../../data/content";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);


  return (
    <header className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-20 sm:pb-28">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
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
            <p className="mt-6 text-[var(--ink-soft)] text-base sm:text-lg max-w-md leading-relaxed">
              {PROFILE.heroSubtext}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/test-papers"
                className="btn-primary px-6 py-3 rounded-full font-medium text-sm sm:text-base inline-flex items-center gap-2"
              >
                See my work
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="btn-ghost px-6 py-3 rounded-full font-medium text-sm sm:text-base"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        {/* RIGHT IMAGE STACK */}
        <Reveal
          delay={200}
          className="relative h-72 sm:h-96 hidden sm:block"
        >
          <div className="hero-image-stack">

            {images.map((image, index) => {
              /*
               * Calculate where this image should sit
               * relative to the current top image.
               */
              const position =
                (index - activeIndex + images.length) % images.length;

              return (
                <div
                  key={image.src}
                  className={`hero-stack-card hero-stack-position-${position}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable="false"
                  />
                </div>
              );
            })}

          </div>

          {/* EXPERIENCE BADGE */}
          <div className="stamp absolute bottom-2 right-2 w-24 h-24 flex items-center justify-center text-center text-sm font-semibold z-20 bg-[var(--paper)]">
            {PROFILE.badgeLines[0]}
            <br />
            {PROFILE.badgeLines[1]}
          </div>
        </Reveal>

      </div>
       {/* Vision */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <Reveal className="relative order-2 md:order-1">
            <div className="fold-card p-2 max-w-sm mx-auto md:mx-0">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src={VISION.image}
                  alt="Students working through a maths problem together"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="tape -top-3 left-8 rotate-[-8deg]" />
              <div className="tape -bottom-3 right-8 rotate-[6deg]" />
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 md:order-2">
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
      </section>
    </header>
  );
}