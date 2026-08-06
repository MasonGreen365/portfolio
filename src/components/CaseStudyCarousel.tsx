"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseStudyCard } from "@/data/caseStudy";

type CaseStudyCarouselProps = {
  cards: CaseStudyCard[];
};

export default function CaseStudyCarousel({
  cards,
}: CaseStudyCarouselProps) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const card = cards[index];
  const total = cards.length;

  if (!card || total === 0) {
    return null;
  }

  function goPrev() {
    setIndex((current) => (current - 1 + total) % total);
    setExpanded(false);
  }

  function goNext() {
    setIndex((current) => (current + 1) % total);
    setExpanded(false);
  }

  function selectCard(i: number) {
    setIndex(i);
    setExpanded(false);
  }

  const canExpand =
    Boolean(card.details) ||
    (card.artifacts && card.artifacts.length > 0);

  return (
    <section
      className="mx-auto w-full max-w-5xl px-6 py-12"
      aria-roledescription="carousel"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-wide">
          Overview
        </h2>
        <div className="flex items-center gap-2">
          <span
            className="text-sm tabular-nums"
            aria-live="polite"
          >
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={goPrev}
            className={
              "flex h-10 w-10 items-center " +
              "justify-center rounded-full " +
              "border border-black text-lg " +
              "leading-none transition " +
              "hover:bg-black hover:text-white"
            }
            aria-label="Previous card"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            className={
              "flex h-10 w-10 items-center " +
              "justify-center rounded-full " +
              "border border-black text-lg " +
              "leading-none transition " +
              "hover:bg-black hover:text-white"
            }
            aria-label="Next card"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-6">
        <article
          className={
            "overflow-hidden rounded-2xl " +
            "border border-black bg-white"
          }
          aria-label={
            `${card.title} (${index + 1} of ${total})`
          }
        >
          <div
            className={
              "grid items-stretch gap-8 p-6 " +
              "sm:p-8 lg:grid-cols-2"
            }
          >
            <div className="flex flex-col justify-center">
              <p className="text-sm tracking-wide uppercase">
                {card.title}
              </p>
              <p
                className={
                  "mt-4 text-lg leading-relaxed " +
                  "sm:text-xl"
                }
              >
                {card.summary}
              </p>
            </div>
            <div
              className={
                "relative flex min-h-64 items-center " +
                "justify-center rounded-xl " +
                "bg-[var(--palette-cream)] p-6 " +
                "sm:min-h-80"
              }
            >
              {card.illustration ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={card.illustration.src}
                  alt={card.illustration.alt}
                  className={
                    "max-h-72 w-full object-contain"
                  }
                />
              ) : (
                <p className="text-sm text-neutral-500">
                  Drop unDraw SVG in{" "}
                  <code className="font-mono text-xs">
                    public/.../unDraw/
                  </code>
                </p>
              )}
            </div>
          </div>

          {canExpand ? (
            <div
              className={
                "border-t border-black/10 px-6 " +
                "pb-2 pt-4 sm:px-8"
              }
            >
              <button
                type="button"
                onClick={() =>
                  setExpanded((open) => !open)
                }
                className={
                  "mx-auto flex w-full max-w-xs " +
                  "flex-col items-center gap-1 " +
                  "py-2 text-sm tracking-wide " +
                  "transition hover:opacity-70"
                }
                aria-expanded={expanded}
                aria-controls={
                  `card-expand-${card.id}`
                }
              >
                <span>
                  {expanded
                    ? "Collapse"
                    : "Tell me more"}
                </span>
                <svg
                  viewBox="0 0 48 28"
                  className={
                    "h-8 w-12 text-black " +
                    "transition-transform " +
                    "duration-300 " +
                    (expanded ? "rotate-180" : "")
                  }
                  aria-hidden="true"
                >
                  <path
                    d={
                      "M4 6 L24 24 L44 6"
                    }
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : null}

          {canExpand && expanded ? (
            <div
              id={`card-expand-${card.id}`}
              className={
                "border-t border-black/10 " +
                "bg-[var(--palette-cream)]/40 " +
                "px-6 py-8 sm:px-8"
              }
            >
              {card.details ? (
                <div
                  className={
                    "max-w-2xl space-y-4 " +
                    "leading-relaxed"
                  }
                >
                  {card.details}
                </div>
              ) : null}
              {card.artifacts &&
              card.artifacts.length > 0 ? (
                <ul
                  className={
                    "mt-8 space-y-10 " +
                    (card.details ? "" : "mt-0")
                  }
                >
                  {card.artifacts.map((artifact) => (
                    <li key={artifact.title}>
                      <h3 className="text-lg font-medium">
                        {artifact.title}
                      </h3>
                      <p
                        className={
                          "mt-2 max-w-2xl " +
                          "leading-relaxed"
                        }
                      >
                        {artifact.description}
                      </p>
                      {artifact.image ? (
                        <figure className="mt-4">
                          <div
                            className={
                              "relative aspect-[16/10] " +
                              "w-full overflow-hidden " +
                              "rounded-xl bg-white"
                            }
                          >
                            <Image
                              src={artifact.image.src}
                              alt={artifact.image.alt}
                              fill
                              className={
                                "object-contain p-3"
                              }
                              sizes={
                                "(max-width: 1024px) " +
                                "100vw, 64rem"
                              }
                            />
                          </div>
                          {artifact.image.caption ? (
                            <figcaption
                              className={
                                "mt-2 text-sm " +
                                "leading-relaxed"
                              }
                            >
                              {artifact.image.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </article>
      </div>

      <div
        className="mt-4 flex justify-center gap-2"
        role="tablist"
      >
        {cards.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${item.title}`}
            onClick={() => selectCard(i)}
            className={
              "h-2.5 w-2.5 rounded-full " +
              "border border-black transition " +
              (i === index
                ? "bg-black"
                : "bg-transparent")
            }
          />
        ))}
      </div>
    </section>
  );
}
