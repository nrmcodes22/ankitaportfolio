import { Star } from "lucide-react";
import Reveal from "../Reveal";
import { FEEDBACK } from "../../data/content";

export default function Feedback() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">From parents & students</span>
        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">Feedback</h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {FEEDBACK.map((f, i) => (
          <Reveal key={f.name} delay={i * 100}>
            <div className="fold-card p-6 h-full flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: f.rating }).map((_, idx) => (
                  <Star key={idx} size={15} className="text-[var(--gold)]" fill="currentColor" />
                ))}
              </div>
              <p className="hand text-2xl leading-snug text-[var(--ink)]">"{f.quote}"</p>
              <div className="mt-auto pt-5">
                <p className="font-semibold text-sm">{f.name}</p>
                <p className="text-xs text-[var(--ink-soft)]">{f.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
