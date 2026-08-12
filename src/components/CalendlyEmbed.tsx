"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_SCRIPT_SRC, CALENDLY_URL } from "@/data/calendly";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_SCRIPT_SRC}"]`,
  );

  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly script"));
    document.body.appendChild(script);
  });
}

/* Inline Calendly scheduling widget for the contact page. */
export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let cancelled = false;

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Calendly) {
          return;
        }

        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: containerRef.current,
          resize: true,
        });
      })
      .catch(() => {
        // Embed stays empty if the script fails to load.
      });

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="calendly-embed"
      ref={containerRef}
      className="mt-4 w-full min-w-[320px]"
      style={{ minHeight: 700 }}
    />
  );
}
