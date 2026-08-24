"use client"
import Reveal from "../Reveal";
import { VIDEOS } from "../../data/content";

export default function Videos() {
  return (
    <section className="mx-auto px-8 md:px-12 lg:px-20 py-16 sm:py-24">
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">
          Learning in action
        </span>

        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">
          See my students solve
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {VIDEOS.map((v, i) => (
          <Reveal key={v.title} delay={i * 100}>
            <div className="video-card fold-card overflow-hidden bg-[var(--paper)]">

              {/* Video */}
              <div className="relative aspect-[9/16] bg-[var(--ink)]">
                <video
                  className="absolute inset-0 w-full h-full object-contain"
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  preload="metadata"
                  playsInline
                >
                  <source src={v.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="font-semibold leading-snug">
                  {v.title}
                </h3>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}