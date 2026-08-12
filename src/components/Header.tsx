"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#resume", label: "RESUME" },
  { href: "/contact", label: "CONTACT ME" },
];

const CALENDLY_URL =
  "https://calendly.com/masongreen511/chat";

/* Sticky site header: desktop nav, sm hamburger dropdown. */
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (
        target &&
        rootRef.current &&
        !rootRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener(
        "mousedown",
        onPointerDown,
      );
      document.removeEventListener(
        "touchstart",
        onPointerDown,
      );
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 640px)").matches) {
        setOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      ref={rootRef}
      className="sticky top-0 z-50 border-b border-black bg-white"
    >
      <div
        className={
          "mx-auto flex max-w-5xl items-center " +
          "justify-between px-6 py-4"
        }
      >
        <Link
          href="/"
          className={
            "min-w-0 shrink text-lg font-semibold " +
            "tracking-wide"
          }
          onClick={() => setOpen(false)}
        >
          Mason Green
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden sm:block"
        >
          <ul className="flex items-center gap-6 text-sm tracking-wide">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="group relative">
              <Link
                href="/contact"
                className="inline-block hover:underline"
                aria-haspopup="true"
              >
                CONTACT ME
              </Link>
              <div
                className={
                  "invisible absolute left-1/2 top-full " +
                  "z-50 w-max -translate-x-1/2 pt-2 " +
                  "opacity-0 transition " +
                  "group-hover:visible group-hover:opacity-100 " +
                  "group-focus-within:visible " +
                  "group-focus-within:opacity-100"
                }
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "block border border-black bg-white " +
                    "px-4 py-2 text-center hover:underline"
                  }
                >
                  Calendly
                </a>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={
            "inline-flex h-10 w-10 shrink-0 " +
            "items-center justify-center " +
            "border border-black sm:hidden"
          }
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <span
              aria-hidden="true"
              className="text-xl leading-none"
            >
              ×
            </span>
          ) : (
            <span
              aria-hidden="true"
              className="flex w-5 flex-col gap-1.5"
            >
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
              <span className="block h-0.5 w-full bg-black" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open ? (
        <nav
          id={menuId}
          aria-label="Primary mobile"
          className="border-t border-black bg-white sm:hidden"
        >
          <ul
            className={
              "mx-auto flex max-w-5xl flex-col " +
              "text-sm tracking-wide"
            }
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="border-t border-black/10 first:border-t-0"
              >
                <Link
                  href={link.href}
                  className="block px-6 py-3 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-black/10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 hover:underline"
                onClick={() => setOpen(false)}
              >
                CALENDLY
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
