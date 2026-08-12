"use client"
import { Mail, MapPin } from "lucide-react";
import Reveal from "../Reveal";
import { CONTACT } from "../../data/content";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="fold-card p-6 sm:p-10 grid md:grid-cols-2 gap-10">
        <Reveal>
          <span className="hand text-2xl text-[var(--moss-deep)]">{CONTACT.eyebrow}</span>
          <h2 className="display text-3xl sm:text-4xl font-semibold mt-2 leading-tight">{CONTACT.heading}</h2>
          <p className="text-[var(--ink-soft)] mt-4 leading-relaxed">{CONTACT.body}</p>
          <div className="mt-6 flex items-center gap-2 text-sm text-[var(--ink-soft)]">
            <MapPin size={16} /> {CONTACT.location}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="px-4 py-3 rounded-md bg-[var(--paper)] border border-[var(--paper-line)] focus:outline-none focus:border-[var(--moss-deep)] text-sm" />
            <input type="email" placeholder="Email address" className="px-4 py-3 rounded-md bg-[var(--paper)] border border-[var(--paper-line)] focus:outline-none focus:border-[var(--moss-deep)] text-sm" />
            <textarea placeholder="What would you like help with?" rows={4} className="px-4 py-3 rounded-md bg-[var(--paper)] border border-[var(--paper-line)] focus:outline-none focus:border-[var(--moss-deep)] text-sm resize-none" />
            <button type="submit" className="btn-primary rounded-full px-6 py-3 font-medium text-sm inline-flex items-center justify-center gap-2">
              Send message <Mail size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
