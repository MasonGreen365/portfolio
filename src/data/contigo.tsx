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
          Being a non-profit organization, KIND has limited resources to support 
          their clients. We crafted a constrained conversational AI that integrated
          both with the main method of client communication, WhatsApp, and could ingest information from KIND's existing knowledge base to support
          client-facing services without interupting staff workflows. 
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
            KIND’s simplified child-facing docs made RAG Q&A
            pairs fast to build.
          </li>
          <li>
            Clients already used WhatsApp to communicate, so we built our solution to support this communication method instead of creating a new app.
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
          To best understand the needs of KIND staff, we created user personas to describe needs and conducted interviews with staff to understand their workflows. We compiled these into collaborative boards to help us understand the needs of the clients and the staff and where a technology solution could fit in.
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
            Legal guidance shifts often, requiring frequent rebasing of the knowledge base.
          </li>
          <li>
            Case managers needed to be able to easily triage clients who needed to speak with them, without interupting their workflows. 
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
            rebased that corpus, and standardizing KIND’s
            information wholesale needed more institutional
            resources than we had, which prompted us to focus on a more constrained knowledge base and require a case manager stay involved in the conversation through reciepts sent via email.
          </p>
          <p>
            Deciding when a client needed their case manager
            was hard without a human in the loop. We settled
            on escalating after two layers of inquiry. Weekly
            standups kept that tradeoff visible while we
            iterated on WhatsApp deploy, data cleaning, and
            sponsor expectations in short cycles.
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
        <>
          Delivered a working WhatsApp service with 100 Q&A pairs, multilingual support, and reciept generation for KIND staff to monitor the service. Additionally, we provided a detailed roadmap, architecture diagram, and
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
              I created a cost projection for the project to help KIND understand the resources required to maintain the service.
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
