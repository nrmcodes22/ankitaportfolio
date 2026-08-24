"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../Reveal";
import { FEEDBACK } from "../../data/content";

export default function Feedback() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [expandedQuotes, setExpandedQuotes] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  // Automatic carousel
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Reset expanded state whenever slide changes
  useEffect(() => {
    setExpandedQuotes({});
    setIsPaused(false);
  }, [activeIndex]);

  // When we reach duplicated first slide,
  // silently jump back to the real first slide.
  useEffect(() => {
    if (activeIndex === FEEDBACK.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }

    setIsTransitioning(true);
  }, [activeIndex]);

  const nextFeedback = () => {
    setExpandedQuotes({});
    setIsPaused(false);
    setActiveIndex((current) => current + 1);
  };

  const previousFeedback = () => {
    setExpandedQuotes({});
    setIsPaused(false);

    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(FEEDBACK.length - 1);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    } else {
      setActiveIndex((current) => current - 1);
    }
  };

  const toggleReadMore = (index) => {
    const isCurrentlyExpanded = expandedQuotes[index];

    setExpandedQuotes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    // If Read More is clicked, pause the carousel
    // for 3 additional seconds.
    if (!isCurrentlyExpanded) {
      setIsPaused(true);

      setTimeout(() => {
        setIsPaused(false);
      }, 3000);
    }
  };

  // Duplicate first slide for infinite carousel
  const slides = [...FEEDBACK, FEEDBACK[0]];

  return (
    <section className="mx-auto px-8 md:px-12 lg:px-20 py-16 sm:py-24">

      {/* Heading */}
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">
          From parents & students
        </span>

        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">
          Feedback
        </h2>
      </Reveal>

      {/* Carousel */}
      <Reveal delay={100}>
        <div className="relative max-w-3xl mx-auto mt-10">

          <div className="overflow-hidden">

            <div
              className="flex"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: isTransitioning
                  ? "transform 500ms ease-in-out"
                  : "none",
              }}
            >

              {slides.map((feedback, index) => {
                const feedbackIndex = index % FEEDBACK.length;
                const isExpanded = expandedQuotes[feedbackIndex];

                return (
                  <div
                    key={`${feedback.name}-${index}`}
                    className="min-w-full px-1"
                  >

                    <div className="fold-card p-7 sm:p-10 min-h-[330px] flex flex-col">

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-5 shrink-0">
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
                          className={`hand text-2xl sm:text-3xl leading-snug text-[var(--ink)] ${
                            !isExpanded ? "line-clamp-7" : ""
                          }`}
                        >
                          "{feedback.quote}"
                        </p>

                        {/* Read More */}
                        {feedback.quote.length > 180 && (
                          <button
                            onClick={() =>
                              toggleReadMore(feedbackIndex)
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
                      <div className="mt-auto pt-6">
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

          {/* Previous */}
          <button
            onClick={previousFeedback}
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

          {/* Next */}
          <button
            onClick={nextFeedback}
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

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {FEEDBACK.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setExpandedQuotes({});
              setIsPaused(false);
              setIsTransitioning(true);
              setActiveIndex(index);
            }}
            aria-label={`Show feedback ${index + 1}`}
            className={`
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                index === activeIndex % FEEDBACK.length
                  ? "w-7 bg-[var(--moss-deep)]"
                  : "w-2 bg-[var(--paper-line)]"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}