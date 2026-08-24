"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import { FEEDBACK } from "../../data/content";

export default function Feedback() {
  /* =====================================================
     MOBILE STATE
  ===================================================== */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileTransition, setMobileTransition] = useState(true);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [mobilePaused, setMobilePaused] = useState(false);

  /* =====================================================
     DESKTOP / TABLET STATE
  ===================================================== */
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [desktopTransition, setDesktopTransition] = useState(true);
  const [desktopExpanded, setDesktopExpanded] = useState({});
  const [desktopPaused, setDesktopPaused] = useState(false);

  /* =====================================================
     MOBILE AUTO CAROUSEL
  ===================================================== */
  useEffect(() => {
    if (mobilePaused) return;

    const timer = setInterval(() => {
      setMobileIndex((current) => current + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [mobilePaused]);

  /* =====================================================
     MOBILE RESET AFTER DUPLICATE SLIDE
  ===================================================== */
  useEffect(() => {
    if (mobileIndex === FEEDBACK.length) {
      const timeout = setTimeout(() => {
        setMobileTransition(false);
        setMobileIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }

    setMobileTransition(true);
  }, [mobileIndex]);

  /* =====================================================
     MOBILE NEXT
  ===================================================== */
  const mobileNext = () => {
    setMobileExpanded(false);
    setMobilePaused(false);
    setMobileTransition(true);

    setMobileIndex((current) => current + 1);
  };

  /* =====================================================
     MOBILE PREVIOUS
  ===================================================== */
  const mobilePrevious = () => {
    setMobileExpanded(false);
    setMobilePaused(false);

    if (mobileIndex === 0) {
      setMobileTransition(false);
      setMobileIndex(FEEDBACK.length - 1);

      setTimeout(() => {
        setMobileTransition(true);
      }, 50);
    } else {
      setMobileIndex((current) => current - 1);
    }
  };

  /* =====================================================
     MOBILE READ MORE
  ===================================================== */
  const mobileReadMore = () => {
    if (!mobileExpanded) {
      setMobileExpanded(true);
      setMobilePaused(true);

      setTimeout(() => {
        setMobilePaused(false);
      }, 3000);
    } else {
      setMobileExpanded(false);
    }
  };

  /* =====================================================
     MOBILE SLIDES
  ===================================================== */
  const mobileSlides = [...FEEDBACK, FEEDBACK[0]];


  /* =====================================================
     DESKTOP / TABLET AUTO CAROUSEL
  ===================================================== */
  useEffect(() => {
    if (desktopPaused) return;

    const timer = setInterval(() => {
      setDesktopIndex((current) => current + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [desktopPaused]);

  /* =====================================================
     DESKTOP / TABLET RESET
  ===================================================== */
  useEffect(() => {
    if (desktopIndex >= FEEDBACK.length) {
      const timeout = setTimeout(() => {
        setDesktopTransition(false);
        setDesktopIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }

    setDesktopTransition(true);
  }, [desktopIndex]);

  /* =====================================================
     DESKTOP / TABLET NEXT
  ===================================================== */
  const desktopNext = () => {
    setDesktopExpanded({});
    setDesktopPaused(false);
    setDesktopTransition(true);

    setDesktopIndex((current) => {
      if (current >= FEEDBACK.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  /* =====================================================
     DESKTOP / TABLET PREVIOUS
  ===================================================== */
  const desktopPrevious = () => {
    setDesktopExpanded({});
    setDesktopPaused(false);
    setDesktopTransition(true);

    setDesktopIndex((current) => {
      if (current === 0) {
        return FEEDBACK.length - 1;
      }

      return current - 1;
    });
  };

  /* =====================================================
     DESKTOP / TABLET READ MORE
  ===================================================== */
  const desktopReadMore = (index) => {
    const currentlyExpanded = desktopExpanded[index];

    setDesktopExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    if (!currentlyExpanded) {
      setDesktopPaused(true);

      setTimeout(() => {
        setDesktopPaused(false);
      }, 3000);
    }
  };

  /* =====================================================
     DESKTOP / TABLET SLIDES

     Duplicate first 3 cards so the carousel
     can move smoothly.
  ===================================================== */
  const desktopSlides = [
    ...FEEDBACK,
    ...FEEDBACK.slice(0, 3),
  ];


  return (
    <section className="mx-auto px-8 md:px-12 lg:px-20 py-16 sm:py-24">

      {/* =================================================
          HEADING
      ================================================= */}
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">
          From parents & students
        </span>

        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">
          Feedback
        </h2>
      </Reveal>


      {/* =================================================
          MOBILE VERSION
          Visible only below md
      ================================================= */}
      <div className="block md:hidden">

        <Reveal delay={100}>

          <div className="relative max-w-3xl mx-auto mt-10">

            <div className="overflow-hidden">

              <div
                className="flex"
                style={{
                  transform: `translateX(-${mobileIndex * 100}%)`,
                  transition: mobileTransition
                    ? "transform 500ms ease-in-out"
                    : "none",
                }}
              >

                {mobileSlides.map((feedback, index) => (

                  <div
                    key={`${feedback.name}-${index}`}
                    className="min-w-full px-1"
                  >

                    <div
                      className="
                        fold-card
                        p-7
                        sm:p-10
                        min-h-[300px]
                        flex
                        flex-col
                      "
                    >

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-5">
                        {Array.from({
                          length: feedback.rating,
                        }).map((_, idx) => (

                          <Star
                            key={idx}
                            size={17}
                            className="text-[var(--gold)]"
                            fill="currentColor"
                          />

                        ))}
                      </div>


                      {/* Quote */}
                      <div className="flex-1">

                        <p
                          className={`
                            hand
                            text-2xl
                            sm:text-3xl
                            leading-snug
                            text-[var(--ink)]
                            ${
                              !mobileExpanded
                                ? "line-clamp-6"
                                : ""
                            }
                          `}
                        >
                          "{feedback.quote}"
                        </p>


                        {/* Read More */}
                        {feedback.quote.length > 180 && (
                          <button
                            onClick={mobileReadMore}
                            className="
                              mt-3
                              text-sm
                              font-semibold
                              text-[var(--moss-deep)]
                              hover:underline
                            "
                          >
                            {mobileExpanded
                              ? "Read less"
                              : "Read more"}
                          </button>
                        )}

                      </div>


                      {/* Person */}
                      <div className="mt-auto pt-8">

                        <p className="font-semibold text-sm">
                          {feedback.name}
                        </p>

                        <p className="text-xs text-[var(--ink-soft)] mt-1">
                          {feedback.role}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* Mobile Previous */}
            <button
              onClick={mobilePrevious}
              aria-label="Previous feedback"
              className="
                absolute
                left-[-18px]
                sm:left-[-24px]
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-[var(--paper)]
                border
                border-[var(--paper-line)]
                shadow-sm
                flex
                items-center
                justify-center
                hover:-translate-x-1
                transition-transform
                z-10
              "
            >
              <ChevronLeft size={19} />
            </button>


            {/* Mobile Next */}
            <button
              onClick={mobileNext}
              aria-label="Next feedback"
              className="
                absolute
                right-[-18px]
                sm:right-[-24px]
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-[var(--paper)]
                border
                border-[var(--paper-line)]
                shadow-sm
                flex
                items-center
                justify-center
                hover:translate-x-1
                transition-transform
                z-10
              "
            >
              <ChevronRight size={19} />
            </button>

          </div>

        </Reveal>


        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-8">

          {FEEDBACK.map((_, index) => (

            <button
              key={index}
              onClick={() => {
                setMobileExpanded(false);
                setMobilePaused(false);
                setMobileTransition(true);
                setMobileIndex(index);
              }}
              aria-label={`Show feedback ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  index === mobileIndex % FEEDBACK.length
                    ? "w-7 bg-[var(--moss-deep)]"
                    : "w-2 bg-[var(--paper-line)]"
                }
              `}
            />

          ))}

        </div>

      </div>


      {/* =================================================
          TABLET + DESKTOP VERSION
          Visible md and above
      ================================================= */}
      <div className="hidden md:block">

        <Reveal delay={100}>

          <div className="relative max-w-7xl mx-auto mt-10">

            {/* Previous */}
            <button
              onClick={desktopPrevious}
              aria-label="Previous feedback"
              className="
                absolute
                left-[-25px]
                lg:left-[-35px]
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-[var(--paper)]
                border
                border-[var(--paper-line)]
                shadow-sm
                flex
                items-center
                justify-center
                hover:-translate-x-1
                transition-transform
                z-20
              "
            >
              <ChevronLeft size={19} />
            </button>


            {/* Cards */}
            <div className="overflow-hidden">

              <div
                className="flex"
                style={{
                  transform:
                    `translateX(-${desktopIndex * (100 / 3)}%)`,
                  transition: desktopTransition
                    ? "transform 500ms ease-in-out"
                    : "none",
                }}
              >

                {desktopSlides.map((feedback, index) => {

                  const feedbackIndex =
                    index % FEEDBACK.length;

                  const isExpanded =
                    desktopExpanded[feedbackIndex];

                  return (

                    <div
                      key={`${feedback.name}-${index}`}
                      className="
                        min-w-[33.333333%]
                        px-2
                      "
                    >

                      <div
                        className="
                          fold-card
                          p-7
                          lg:p-8
                          h-[360px]
                          lg:h-[370px]
                          flex
                          flex-col
                        "
                      >

                        {/* Stars */}
                        <div className="flex gap-0.5 mb-5 shrink-0">

                          {Array.from({
                            length: feedback.rating,
                          }).map((_, idx) => (

                            <Star
                              key={idx}
                              size={16}
                              className="text-[var(--gold)]"
                              fill="currentColor"
                            />

                          ))}

                        </div>


                        {/* Quote */}
                        <div className="flex-1 min-h-0">

                          <p
                            className={`
                              hand
                              text-xl
                              lg:text-2xl
                              leading-snug
                              text-[var(--ink)]
                              ${
                                !isExpanded
                                  ? "line-clamp-6"
                                  : ""
                              }
                            `}
                          >
                            "{feedback.quote}"
                          </p>


                          {/* Read More */}
                          {feedback.quote.length > 180 && (

                            <button
                              onClick={() =>
                                desktopReadMore(
                                  feedbackIndex
                                )
                              }
                              className="
                                mt-3
                                text-sm
                                font-semibold
                                text-[var(--moss-deep)]
                                hover:underline
                              "
                            >
                              {isExpanded
                                ? "Read less"
                                : "Read more"}
                            </button>

                          )}

                        </div>


                        {/* Person */}
                        <div className="mt-auto pt-5 shrink-0">

                          <p className="font-semibold text-sm">
                            {feedback.name}
                          </p>

                          <p className="text-xs text-[var(--ink-soft)] mt-1">
                            {feedback.role}
                          </p>

                        </div>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>


            {/* Next */}
            <button
              onClick={desktopNext}
              aria-label="Next feedback"
              className="
                absolute
                right-[-25px]
                lg:right-[-35px]
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-full
                bg-[var(--paper)]
                border
                border-[var(--paper-line)]
                shadow-sm
                flex
                items-center
                justify-center
                hover:translate-x-1
                transition-transform
                z-20
              "
            >
              <ChevronRight size={19} />
            </button>

          </div>

        </Reveal>


        {/* Desktop / Tablet Dots */}
        <div className="flex justify-center gap-2 mt-8">

          {FEEDBACK.map((_, index) => (

            <button
              key={index}
              onClick={() => {
                setDesktopExpanded({});
                setDesktopPaused(false);
                setDesktopTransition(true);
                setDesktopIndex(index);
              }}
              aria-label={`Show feedback ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  index === desktopIndex % FEEDBACK.length
                    ? "w-7 bg-[var(--moss-deep)]"
                    : "w-2 bg-[var(--paper-line)]"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
}