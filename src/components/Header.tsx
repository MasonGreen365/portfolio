"use client";

import AnimatedLink from "@/components/AnimatedLink";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type NavItem =
  | { kind: "hash"; hash: string; label: string }
  | { kind: "page"; href: string; label: string }
  | { kind: "external"; href: string; label: string };

const navItems: NavItem[] = [
  { kind: "hash", hash: "about", label: "ABOUT" },
  { kind: "page", href: "/projects", label: "PROJECTS" },
  { kind: "hash", hash: "resume", label: "RESUME" },
  { kind: "page", href: "/contact", label: "CONTACT ME" },
  {
    kind: "external",
    href: "https://www.linkedin.com/in/masonlgreen/",
    label: "LINKEDIN",
  },
];

const CALENDLY_URL =
  "https://calendly.com/masongreen511/chat";

function hashHref(hash: string, pathname: string): string {
  return pathname === "/" ? `#${hash}` : `/#${hash}`;
}

function navItemKey(item: NavItem): string {
  if (item.kind === "hash") return item.hash;
  return item.href;
}

/* Sticky site header: desktop nav, sm hamburger dropdown. */
export default function Header() {
  const pathname = usePathname();
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
    return () =>
      window.removeEventListener("resize", onResize);
  }, []);

  const desktopItems = navItems.filter(
    (item) =>
      !(item.kind === "page" && item.href === "/contact"),
  );

  function renderNavLink(
    item: NavItem,
    className: string,
    onNavigate?: () => void,
  ) {
    if (item.kind === "hash") {
      return (
        <a
          href={hashHref(item.hash, pathname)}
          className={className}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      );
    }
    if (item.kind === "external") {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      );
    }
    return (
      <AnimatedLink
        href={item.href}
        className={className}
        onClick={onNavigate}
      >
        {item.label}
      </AnimatedLink>
    );
  }

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
        <AnimatedLink
          href="/"
          className={
            "min-w-0 shrink text-lg font-semibold " +
            "tracking-wide"
          }
          onClick={() => setOpen(false)}
        >
          Mason Green
        </AnimatedLink>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden sm:block"
        >
          <ul className="flex items-center gap-6 text-sm tracking-wide">
            {desktopItems.map((item) => (
              <li key={navItemKey(item)}>
                {renderNavLink(
                  item,
                  "interactive hover:underline",
                )}
              </li>
            ))}
            <li className="group relative">
              <AnimatedLink
                href="/contact"
                className="hover:underline"
                aria-haspopup="true"
              >
                CONTACT ME
              </AnimatedLink>
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
                    "interactive block border border-black " +
                    "bg-white px-4 py-2 text-center " +
                    "hover:underline"
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
            "interactive inline-flex h-10 w-10 " +
            "shrink-0 items-center justify-center " +
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
          className={
            "border-t border-black bg-white " +
            "motion-safe:animate-fade-in " +
            "motion-safe:animate-duration-fast " +
            "sm:hidden"
          }
        >
          <ul
            className={
              "mx-auto flex max-w-5xl flex-col " +
              "text-sm tracking-wide"
            }
          >
            {navItems.map((item) => (
              <li
                key={navItemKey(item)}
                className={
                  "border-t border-black/10 first:border-t-0"
                }
              >
                {renderNavLink(
                  item,
                  "interactive block px-6 py-3 hover:underline",
                  () => setOpen(false),
                )}
              </li>
            ))}
            <li className="border-t border-black/10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "interactive block px-6 py-3 " +
                  "hover:underline"
                }
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
