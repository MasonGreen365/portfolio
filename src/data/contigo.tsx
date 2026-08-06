import type { CaseStudyContent } from "@/data/caseStudy";

const processImg = "/images/projects/contigo/process";
const undrawImg = "/images/projects/contigo/unDraw";

export const contigoCaseStudy: CaseStudyContent = {
  about: {
    problem: (
      <>
        Navigating the legal system is complex, intimidating, and
        high-stakes for Unaccompanied Alien Children (UAcs) seeking
        asylum in the United States. Kids in Need of Defense sponsored
        our Informatics Capstone Team in 2024 to ideate, build, and
        deliver a working prototype to support their ongoing
        communications with their clients. Through extensive research,
        we developed a WhatsApp chatbot that answers relevant
        questions, raises issues to that clients case manager, and
        triages ongoing issues for institutional knowledge. The
        chatbot is low-cost, multilingual, and derived from
        standardized knowledge bases KIND already uses internally.
      </>
    ),
    role: (
      <>
        I was the <strong>technical project manager</strong> and{" "}
        <strong>software engineer</strong> on our five-person UW
        iSchool capstone team (<em>Jan–May 2024</em>). I guided our
        development process regarding <strong>LLM/AI</strong> use,
        designed the technology stack, set technical deliverables in
        sprints, and wrote the <strong>Flask</strong> application
        backend to serve the chatbot.
      </>
    ),
    skills: [
      {
        label: "Python / Flask",
        accent: "var(--palette-olive)",
      },
      {
        label: "WhatsApp Cloud API",
        accent: "var(--palette-olive-dark)",
      },
      {
        label: "LangChain + LLM comparasions",
        accent: "var(--palette-forest)",
      },
      {
        label: "OpenAI",
        accent: "var(--palette-sage)",
      },
      {
        label: "MongoDB",
        accent: "var(--palette-sand)",
      },
      {
        label: "Azure App Service",
        accent: "var(--palette-ochre)",
      },
      {
        label: "Technical project management",
        accent: "var(--palette-rust)",
      },
    ],
    logoStack: {
      top: {
        src: `${processImg}/logo-275897680.png`,
        alt: "Kids in Need of Defense (KIND) logo",
      },
      bottom: {
        src:
          `${processImg}/` +
          "university-of-washington-information-school-" +
          "logo-vector.png",
        alt:
          "University of Washington Information School logo",
      },
    },
  },
  cards: [
    {
      id: "goal",
      title: "Goal",
      summary: (
        <>
          Ship a proof-of-concept communication service that
          answers immigration and service questions for KIND
          clients 24/7, in multiple languages, knowledge and
          cost constrained.
        </>
      ),
      illustration: {
        src: `${undrawImg}/goal.svg`,
        alt: "unDraw illustration for Contigo goal",
      },
      details: (
        <p>
          Contigo aimed to show KIND how AI could support
          client-facing services without replacing staff
          judgment—accessible on WhatsApp, useful in natural
          language, and light enough to update as guidance
          changes.
        </p>
      ),
      artifacts: [
        {
          title: "Product roadmap",
          description: (
            <>
              Sequencing for WhatsApp integration, knowledge
              base work, and AI pipeline milestones across the
              capstone.
            </>
          ),
          image: {
            src: `${processImg}/03-product-roadmap.jpg`,
            alt: "Contigo product roadmap",
            caption: "Product roadmap",
          },
        },
      ],
    },
    {
      id: "opportunity",
      title: "Opportunity",
      summary: (
        <>
          KIND already had substantial PDF guidance. Contigo’s
          opportunity was to make that corpus conversational on
          WhatsApp—meeting clients where they are and cutting
          repetitive staff lookups.
        </>
      ),
      illustration: {
        src: `${undrawImg}/opportunity.svg`,
        alt:
          "unDraw illustration for Contigo opportunity",
      },
      details: (
        <p>
          Young clients already lived in messaging apps. The
          win was turning existing KIND documents into a
          conversational channel instead of another downloadable
          packet.
        </p>
      ),
      artifacts: [
        {
          title: "Design workshop board",
          description: (
            <>
              Team design activity capturing early framing for
              Contigo’s client experience and service
              categories.
            </>
          ),
          image: {
            src:
              `${processImg}/04-design-activity-board.jpg`,
            alt: "Team design activity board",
            caption: "INFO 380 design activity",
          },
        },
      ],
    },
    {
      id: "challenge",
      title: "Challenge",
      summary: (
        <>
          Trustworthy answers over messy documents, under cost
          and timeline constraints: ingest KIND PDFs safely,
          wire WhatsApp + Azure + MongoDB + an LLM as one path,
          and avoid overclaiming legal advice.
        </>
      ),
      illustration: {
        src: `${undrawImg}/challenge.svg`,
        alt:
          "unDraw illustration for Contigo challenge",
      },
      details: (
        <p>
          Delivery meant balancing retrieval quality, cost, and
          a production messaging stack while parallel
          workstreams competed for limited weeks before
          handoff.
        </p>
      ),
      artifacts: [
        {
          title: "Weekly delivery board",
          description: (
            <>
              Standup snapshot from April 2024—sponsor
              coordination, WhatsApp deploy priorities, and
              blockers around data cleaning and handoff
              expectations.
            </>
          ),
          image: {
            src:
              `${processImg}/01-weekly-standup-board.png`,
            alt:
              "Weekly standup board with tasks and blockers",
            caption: "Weekly standup — April 2024",
          },
        },
        {
          title: "System architecture",
          description: (
            <>
              WhatsApp → Flask on Azure → OpenAI + MongoDB
              path used for the proof of concept.
            </>
          ),
          image: {
            src:
              `${processImg}/02-system-architecture.png`,
            alt: "Contigo system architecture diagram",
            caption: "System architecture",
          },
        },
      ],
    },
    {
      id: "outcome",
      title: "Outcome",
      summary: (
        <>
          Delivered a working WhatsApp PoC with retrieval over
          KIND docs, multilingual replies, and chat
          history—plus sponsor-ready architecture, roadmap, and
          handoff materials for continued use.
        </>
      ),
      illustration: {
        src: `${undrawImg}/outcome.svg`,
        alt: "unDraw illustration for Contigo outcome",
      },
      details: (
        <p>
          The team handed KIND a working channel plus the
          materials to understand, maintain, and extend it.
        </p>
      ),
      artifacts: [
        {
          title: "Feature roadmap snapshot",
          description: (
            <>
              README-facing feature map used to communicate
              scope—LLM, multilingual support, document
              ingestion, and messaging.
            </>
          ),
          image: {
            src: `${processImg}/07-readme-roadmap.jpg`,
            alt: "Feature roadmap from project README",
            caption: "Feature roadmap",
          },
        },
        {
          title: "Working demo",
          description: (
            <>
              Validation screenshot from the live WhatsApp
              proof of concept.
            </>
          ),
          image: {
            src: `${processImg}/05-demo-screenshot.png`,
            alt: "Contigo demo screenshot",
            caption: "Demo screenshot",
          },
        },
      ],
    },
  ],
};
