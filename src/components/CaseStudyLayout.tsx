import Image from "next/image";
import type { CSSProperties } from "react";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import type { CaseStudyContent } from "@/data/caseStudy";

type CaseStudyLayoutProps = {
  content: CaseStudyContent;
  /** Optional slot below Find out more (e.g. D3 island). */
  children?: React.ReactNode;
};

export default function CaseStudyLayout({
  content,
  children,
}: CaseStudyLayoutProps) {
  const { about, cards, findOutMore } = content;

  return (
    <div className="mt-10">
      <section className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold tracking-wide">
          About
        </h2>
        <div
          className={
            about.logoStack
              ? "mt-6 grid items-start gap-10 " +
                "lg:grid-cols-[minmax(0,1fr)_14rem]"
              : "mt-6"
          }
        >
          <div className="max-w-2xl space-y-4 leading-relaxed">
            <p>{about.problem}</p>
            <p>{about.role}</p>
          </div>
          {about.logoStack ? (
            <aside
              className={
                "flex flex-col items-center justify-center " +
                "gap-4 lg:pt-2"
              }
              aria-label="Project partners"
            >
              <div
                className={
                  "relative h-16 w-full max-w-[14rem]"
                }
              >
                <Image
                  src={about.logoStack.top.src}
                  alt={about.logoStack.top.alt}
                  fill
                  className="object-contain"
                  sizes="14rem"
                />
              </div>
              <span
                className={
                  "select-none text-4xl font-light " +
                  "leading-none text-black"
                }
                aria-hidden="true"
              >
                +
              </span>
              <div
                className={
                  "relative h-20 w-full max-w-[14rem]"
                }
              >
                <Image
                  src={about.logoStack.bottom.src}
                  alt={about.logoStack.bottom.alt}
                  fill
                  className="object-contain"
                  sizes="14rem"
                />
              </div>
            </aside>
          ) : null}
        </div>
        <h3 className="mt-10 text-lg font-medium tracking-wide">
          Skills and technologies used
        </h3>
        <ul
          className={
            "mt-4 flex flex-wrap gap-x-5 gap-y-3 " +
            "text-sm leading-relaxed"
          }
        >
          {about.skills.map((skill) => (
            <li key={skill.label}>
              <span
                className="skill-tag"
                style={
                  {
                    "--skill-underline-hover": skill.accent,
                  } as CSSProperties
                }
              >
                {skill.label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12">
        <CaseStudyCarousel cards={cards} />
      </div>

      {findOutMore ? (
        <section
          className={
            "mx-auto max-w-5xl border-t border-black " +
            "px-6 py-12"
          }
        >
          <h2
            className={
              "text-2xl font-semibold tracking-wide"
            }
          >
            Find out more
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            {findOutMore.intro}
          </p>
          <ul className="mt-10 space-y-14">
            {findOutMore.artifacts.map((artifact) => (
              <li key={artifact.title}>
                <h3 className="text-xl font-medium">
                  {artifact.title}
                </h3>
                <p
                  className={
                    "mt-3 max-w-2xl leading-relaxed"
                  }
                >
                  {artifact.description}
                </p>
                {artifact.image ? (
                  <figure className="mt-6">
                    <div
                      className={
                        "relative aspect-[16/10] w-full " +
                        "overflow-hidden rounded-xl " +
                        "bg-neutral-100"
                      }
                    >
                      <Image
                        src={artifact.image.src}
                        alt={artifact.image.alt}
                        fill
                        className="object-contain p-3"
                        sizes={
                          "(max-width: 1024px) 100vw, " +
                          "64rem"
                        }
                      />
                    </div>
                    {artifact.image.caption ? (
                      <figcaption
                        className={
                          "mt-3 text-sm leading-relaxed"
                        }
                      >
                        {artifact.image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : (
                  <div
                    className={
                      "mt-6 flex aspect-[16/10] w-full " +
                      "items-center justify-center " +
                      "rounded-xl bg-neutral-100"
                    }
                  >
                    <p className="text-sm text-neutral-500">
                      Image placeholder
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {children}
    </div>
  );
}
