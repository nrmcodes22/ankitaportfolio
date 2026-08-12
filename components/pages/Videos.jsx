import { Play } from "lucide-react";
import Reveal from "../Reveal";
import { VIDEOS } from "../../data/content";

export default function Videos() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">Watch a lesson</span>
        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">Sample videos</h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {VIDEOS.map((v, i) => (
          <Reveal key={v.title} delay={i * 100}>
            <div className="video-card fold-card overflow-hidden cursor-pointer">
              <div className="relative aspect-video bg-[var(--ink)] flex items-center justify-center">
                <img src={`https://picsum.photos/seed/${v.img}/500/280`} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-[var(--ink)]/25" />
                <div className="play-btn relative w-14 h-14 rounded-full bg-[var(--paper)] flex items-center justify-center shadow-lg">
                  <Play size={20} className="text-[var(--ink)] ml-0.5" fill="currentColor" />
                </div>
                <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded">{v.duration}</span>
              </div>
              <div className="p-4"><h3 className="font-semibold leading-snug">{v.title}</h3></div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
