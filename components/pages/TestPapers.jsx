import Reveal from "../Reveal";
import { TEST_PAPERS } from "../../data/content";

export default function TestPapers() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <Reveal>
        <span className="hand text-2xl text-[var(--moss-deep)]">Graded & handed back</span>
        <h2 className="display text-3xl sm:text-4xl font-semibold mt-2">Test papers</h2>
        <p className="text-[var(--ink-soft)] mt-3 max-w-lg">A few marked papers from recent students, shared with permission.</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {TEST_PAPERS.map((p, i) => (
          <Reveal key={p.subject} delay={i * 90}>
            <div className="fold-card rule-line p-6 h-full">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="display text-xl font-semibold">{p.subject}</h3>
                  <p className="text-sm text-[var(--ink-soft)] mt-0.5">{p.grade}</p>
                </div>
                <span className="stamp text-xs px-3 py-1 shrink-0">Reviewed</span>
              </div>
              <div className="mt-4 aspect-[16/8] rounded-sm overflow-hidden border border-[var(--paper-line)]">
                <img src={`https://picsum.photos/seed/${p.img}/500/260`} alt={`${p.subject} test paper`} className="w-full h-full object-cover" />
              </div>
              <p className="hand text-xl text-[var(--moss-deep)] mt-4">"{p.note}"</p>
              <p className="text-right font-semibold mt-2 text-[var(--stamp)]">{p.mark}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
