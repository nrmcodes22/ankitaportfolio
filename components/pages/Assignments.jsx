import Reveal from "../Reveal";
import { ASSIGNMENTS } from "../../data/content";

export default function Assignments() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">Homework, worksheets, projects</span>
        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">Assignments</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {ASSIGNMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 80}>
            <div className="fold-card p-5 h-full flex flex-col">
              <div className="aspect-square rounded-sm overflow-hidden mb-4">
                <img src={`https://picsum.photos/seed/${a.img}/300/300`} alt={a.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--moss-deep)]">{a.type}</span>
              <h3 className="font-semibold mt-1 leading-snug">{a.title}</h3>
              <p className="text-sm text-[var(--ink-soft)] mt-auto pt-3">{a.subject}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
