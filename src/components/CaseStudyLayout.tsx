import Image from "next/image";
import type { CSSProperties } from "react";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import type { CaseStudyContent } from "@/data/caseStudy";

/* Props for the shared case-study page shell. */
type CaseStudyLayoutProps = {
  content: CaseStudyContent;
  /** Optional slot below Find out more (e.g. D3 island). */
  children?: React.ReactNode;
};

/* Shared case-study layout: About, carousel, optional demo/video. */
export default function CaseStudyLayout({
  content,
  children,
}: CaseStudyLayoutProps) {
  const {
    about,
    cards,
    findOutMore,
    demoVideo,
    crudRoutes,
  } = content;
  const hasAside =
    Boolean(about.logoStack) ||
    Boolean(about.collaboration);

  return (
    <div className="mt-10">
      <section className="mx-auto max-w-5xl px-6">
        <div
          className={
            hasAside
              ? "grid items-start gap-10 " +
                "lg:grid-cols-[minmax(0,1fr)_14rem]"
              : undefined
          }
        >
          <div className="max-w-2xl space-y-8 leading-relaxed">
            <div>
              <h2
                className={
                  "text-2xl font-semibold tracking-wide"
                }
              >
                Role
              </h2>
              <p className="mt-4">{about.role}</p>
            </div>
            <div>
              <h2
                className={
                  "text-2xl font-semibold tracking-wide"
                }
              >
                Problem
              </h2>
              <p className="mt-4">{about.problem}</p>
            </div>
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
          ) : about.collaboration ? (
            <aside
              className={
                "flex flex-col items-center " +
                "justify-center gap-3 lg:pt-2"
              }
              aria-label={about.collaboration.label}
            >
              <p
                className={
                  "text-center text-sm tracking-wide"
                }
              >
                {about.collaboration.label}
              </p>
              <div
                className={
                  "relative h-20 w-full max-w-[14rem]"
                }
              >
                <Image
                  src={about.collaboration.logo.src}
                  alt={about.collaboration.logo.alt}
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

      {/* CRUD API strip */}
      {crudRoutes ? (
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
            {crudRoutes.title ?? "User API CRUD"}
          </h2>
          {crudRoutes.intro ? (
            <p className="mt-4 max-w-2xl leading-relaxed">
              {crudRoutes.intro}
            </p>
          ) : null}
          <ul className="mt-8 space-y-6">
            {crudRoutes.routes.map((route) => (
              <li
                key={`${route.method}-${route.path}`}
                className={
                  "rounded-2xl border border-black " +
                  "bg-white p-5"
                }
              >
                <div
                  className={
                    "flex flex-wrap items-baseline " +
                    "gap-x-3 gap-y-1"
                  }
                >
                  <span
                    className={
                      "text-xs font-semibold " +
                      "tracking-wide text-neutral-500"
                    }
                  >
                    {route.operation}
                  </span>
                  <code
                    className={
                      "text-sm font-semibold " +
                      "tracking-wide"
                    }
                  >
                    <span className="text-[var(--palette-ochre)]">
                      {route.method}
                    </span>{" "}
                    {route.path}
                  </code>
                </div>
                <p className="mt-3 text-sm leading-relaxed">
                  {route.what}
                </p>
                <p
                  className={
                    "mt-2 text-sm leading-relaxed " +
                    "text-neutral-600"
                  }
                >
                  {route.mongo}
                </p>
                <ul
                  className={
                    "mt-4 flex flex-wrap gap-2"
                  }
                >
                  {route.skills.map((skill) => (
                    <li
                      key={skill}
                      className={
                        "rounded-full border " +
                        "border-black/20 px-3 py-1 " +
                        "text-xs tracking-wide"
                      }
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Demo video section */}
      {demoVideo ? (
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
            {demoVideo.title ?? "Demo"}
          </h2>
          {demoVideo.description ? (
            <p className="mt-4 max-w-2xl leading-relaxed">
              {demoVideo.description}
            </p>
          ) : null}
          <div
            className={
              "relative mt-8 aspect-video w-full " +
              "overflow-hidden rounded-2xl " +
              "border border-black bg-black"
            }
          >
            <iframe
              className="absolute inset-0 h-full w-full"
              src={
                "https://www.youtube-nocookie.com/embed/" +
                demoVideo.youtubeId
              }
              title={demoVideo.title ?? "Demo video"}
              allow={
                "accelerometer; autoplay; encrypted-media; " +
                "gyroscope; picture-in-picture"
              }
              allowFullScreen
              loading="lazy"
              referrerPolicy={
                "strict-origin-when-cross-origin"
              }
            />
          </div>
        </section>
      ) : null}

      {children}
    </div>
  );
}
