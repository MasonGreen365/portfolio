import CalendlyEmbed from "@/components/CalendlyEmbed";
import { CALENDLY_URL } from "@/data/calendly";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-wide">Contact Me</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="border border-black p-6">
          <h2 className="text-xl font-medium">Contact Information</h2>
          <ul className="mt-4 space-y-3 leading-relaxed">
            <li>
              <span className="block text-sm tracking-wide">Email</span>
              <a href="mailto:masongreen511@gmail.com" className="interactive underline">
                masongreen511@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-sm tracking-wide">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/masonlgreen"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive underline"
              >
                linkedin.com/in/masonlgreen
              </a>
            </li>
            <li>
              <span className="block text-sm tracking-wide">Location</span>
              <span>Seattle, WA</span>
            </li>
          </ul>
        </article>

        <article className="border border-black p-6">
          <h2 className="text-xl font-medium">Schedule a Meeting</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Book a 15-minute chat, or open Calendly in a new tab.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive mt-2 inline-block text-sm underline"
          >
            Open Calendly
          </a>
          <CalendlyEmbed />
        </article>
      </div>
    </div>
  );
}
