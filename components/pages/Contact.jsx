"use client";

import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import Reveal from "../Reveal";
import { CONTACT } from "../../data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with the teacher's WhatsApp number.
    // India example: 919876543210
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    const whatsappMessage = `Hello Ankita,

I found your teaching portfolio and would like to get in touch.

Name: ${name}


Message:
${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="fold-card p-6 sm:p-10 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <Reveal>
          <span className="hand text-2xl text-[var(--moss-deep)]">
            {CONTACT.eyebrow}
          </span>

          <h2 className="display text-3xl sm:text-4xl font-semibold mt-2 leading-tight">
            {CONTACT.heading}
          </h2>

          <p className="text-[var(--ink-soft)] mt-4 leading-relaxed">
            {CONTACT.body}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-[var(--ink-soft)]">
            <MapPin size={16} />
            {CONTACT.location}
          </div>
        </Reveal>

        {/* RIGHT SIDE */}
        <Reveal delay={100}>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-4 py-3 rounded-md bg-[var(--paper)] border border-[var(--paper-line)] focus:outline-none focus:border-[var(--moss-deep)] text-sm"
            />

           

            <textarea
              placeholder="What would you like help with?"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="px-4 py-3 rounded-md bg-[var(--paper)] border border-[var(--paper-line)] focus:outline-none focus:border-[var(--moss-deep)] text-sm resize-none"
            />

            <button
              type="submit"
              className="btn-primary rounded-full px-6 py-3 font-medium text-sm inline-flex items-center justify-center gap-2"
            >
              Send message
              <Mail size={16} />
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  );
}