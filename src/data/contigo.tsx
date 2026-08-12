import type { CaseStudyContent } from "@/data/caseStudy";

const processImg = "/images/projects/contigo/process";
const undrawImg = "/images/projects/contigo/unDraw";

/* Contigo case-study content for /projects/contigo. */
export const contigoCaseStudy: CaseStudyContent = {
  about: {
    role: (
      <>
        I was the <strong>technical project manager</strong>{" "}
        and a <strong>software engineer</strong> on a
        five-person UW iSchool capstone team (
        <em>Jan–May 2024</em>), sponsored by Kids in Need of
        Defense (KIND). I guided our development process
        regarding AI use, designed the technology stack based
        off client needs, and wrote the{" "}
        <strong>Flask</strong> application. The MVP was
        shipped and designed to fufill the needs of 10
        clients and their case-managers as a
        proof-of-concept.
      </>
    ),
    problem: (
      <>
        Navigating asylum and legal services is high-stakes
        for Unaccompanied Alien Children. KIND needed a
        low-cost, multilingual channel that answers questions
        based off their written existing knowledge base,
        capable of escalating issues to case managers when
        appropriate, and can be institutionally adopted
        without signifigant staffing requirements.
      </>
    ),
    skills: [
      {
        label: "Technical project management",
        accent: "var(--palette-olive)",
      },
      {
        label: "Retrieval-Augmented Generation",
        accent: "var(--palette-olive-dark)",
      },
      {
        label: "LLM output evaluation",
        accent: "var(--palette-forest)",
      },
      {
        label: "WhatsApp Cloud API",
        accent: "var(--palette-sage)",
      },
      {
        label: "Python / Flask",
        accent: "var(--palette-sand)",
      },
      {
        label: "MongoDB",
        accent: "var(--palette-ochre)",
      },
      {
        label: "Azure App Service",
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
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Ship a WhatsApp Service for KIND clients: Q&A +
            issue escalation, 24/7, multilingual.
          </li>
          <li>
            Constrained cost-per-user and knowledge-base using
            LLM techniques.
          </li>
          <li>
            Capstone window: Jan–May 2024, 5-person team.
          </li>
        </ul>
      ),
      illustration: {
        src: `${undrawImg}/goal.svg`,
        alt: "unDraw illustration for Contigo goal",
      },
      details: (
        <p>
          Being a non-profit, KIND has limited resources to
          support clients. We built a constrained
          conversational AI on WhatsApp that can ingest
          KIND’s knowledge base and support client-facing
          answers without interrupting staff workflows.
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
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Clients already on WhatsApp → no new client app
          </li>
          <li>
            KIND’s client-facing docs → fast path to RAG Q&A
            pairs
          </li>
          <li>
            User research with staff (personas + interviews)
            to fit real workflows
          </li>
        </ul>
      ),
      illustration: {
        src: `${undrawImg}/opportunity.svg`,
        alt:
          "unDraw illustration for Contigo opportunity",
      },
      details: (
        <p>
          To understand KIND staff needs, we built personas,
          interviewed staff, and compiled collaborative
          boards so we could see where a technology solution
          fit for clients and case managers.
        </p>
      ),
      artifacts: [
        {
          title: "Feasibility framing",
          description: (
            <>
              Early workshop mapping chatbot style, project
              domain, ethics, AI feasibility, platforms, and
              KIND’s organizational roles before build.
            </>
          ),
          image: {
            src:
              `${processImg}/feasibility-diagram-contigo.png`,
            alt:
              "Contigo feasibility diagram with sticky notes " +
              "on chatbot style, domain, ethics, AI, " +
              "platforms, and KIND organization",
            caption: "Feasibility workshop diagram",
          },
        },
      ],
    },
    {
      id: "challenge",
      title: "Challenge",
      summary: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Legal guidance changes often → frequent
            knowledge-base rebases
          </li>
          <li>
            Escalate to case managers without breaking their
            workflow
          </li>
          <li>
            Institutional resources constrained feature
            development, had to add verifable email receipts
            for documentation purposes.
          </li>
          <li>
            In-house LLM underperformed vs OpenAI on knowledge
            rebases, and was difficult to absract tuning
            process so that staff could reproduce it, forcing
            OpenAI API adoption.
          </li>
        </ul>
      ),
      illustration: {
        src: `${undrawImg}/challenge.svg`,
        alt:
          "unDraw illustration for Contigo challenge",
      },
      details: (
        <>
          <p>
            Chatbot accuracy depended on how we refreshed and
            constrained the knowledge base. An in-house LLM
            underperformed OpenAI’s agent when we repeatedly
            refreshed the models context base, and
            standardizing KIND’s information wholesale needed
            more institutional resources than we had. We
            narrowed the scope of the project and returned
            some duty back to case managers by keeping them in
            loop via email receipts and issue escalation.
          </p>
          <p>
            Deciding when a client needed their case manager
            was hard without a human in the loop. We escalated
            after two layers of inquiry. Weekly standups kept
            that tradeoff visible while we iterated on
            WhatsApp deploy, data cleaning, and sponsor
            expectations.
          </p>
        </>
      ),
      artifacts: [
        {
          title: "Weekly delivery board",
          description: (
            <>
              Standup board from the rapid iteration
              cadence—priorities, blockers, and next-week
              owners as we adjusted escalation rules, knowledge
              base scope, and WhatsApp deploy week to week.
            </>
          ),
          image: {
            src:
              `${processImg}/01-weekly-standup-board.png`,
            alt:
              "Weekly standup board with tasks and blockers",
            caption:
              "Rapid iteration standup — April 2024",
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
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Working WhatsApp service:{" "}
            <strong>~100 Q&A pairs</strong>, multilingual
            support, receipt email for staff monitoring
          </li>
          <li>
            Handoff: roadmap, architecture, and
            maintain/extend docs
          </li>
          <li>
            Cost projection prepared for KIND to plan ongoing
            run cost
          </li>
        </ul>
      ),
      illustration: {
        src: `${undrawImg}/outcome.svg`,
        alt: "unDraw illustration for Contigo outcome",
      },
      details: (
        <p>
          The team handed KIND a working MVP plus materials to
          understand, maintain, and extend it. A demo video is
          available at the bottom of the page.
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
              I created a cost projection for the project to
              help KIND understand the resources required to
              maintain the service.
            </>
          ),
          image: {
            src: `${processImg}/05-cost-projection.png`,
            alt: "Contigo demo screenshot",
            caption: "Cost projection for the project",
          },
        },
      ],
    },
  ],
  demoVideo: {
    title: "Demo",
    youtubeId: "kmd0yD5MJWk",
    description: (
      <>
        Capstone walkthrough of Contigo’s WhatsApp chatbot
        proof of concept for KIND.
      </>
    ),
  },
};
