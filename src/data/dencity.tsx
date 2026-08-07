import type { CaseStudyContent } from "@/data/caseStudy";

const processImg = "/images/projects/dencity/process";

export const dencityCaseStudy: CaseStudyContent = {
  about: {
    problem: (
      <>
        After WA House Bill 1110 opened middle-housing in
        urban centers, homeowners and builders still had no
        clear way to see which parcels were eligible—or how
        policy and finance could unlock them. I founded
        <strong> Dencity</strong> to turn that gap into a
        geospatial MVP: a dashboard that makes regional
        parcel data usable for people deciding where to build.
      </>
    ),
    role: (
      <>
        I <strong>conceptualized Dencity as founder</strong>
        {" "}and brought a team of four together to ship an
        MVP—front-end, data science, and full-stack partners
        alongside my product lead. Together we mapped
        <strong> threat vectors</strong>, chose the
        <strong> tech stack</strong>, and scoped a first
        release that could prove the idea without waiting on
        a full production platform.
      </>
    ),
    skills: [
      {
        label: "Founding / product vision",
        accent: "var(--palette-olive)",
      },
      {
        label: "Threat modeling",
        accent: "var(--palette-olive-dark)",
      },
      {
        label: "Tech stack design",
        accent: "var(--palette-forest)",
      },
      {
        label: "GeoJSON / GIS data",
        accent: "var(--palette-sage)",
      },
      {
        label: "PSRC data partnership",
        accent: "var(--palette-sand)",
      },
      {
        label: "MVP scoping",
        accent: "var(--palette-ochre)",
      },
      {
        label: "Cross-functional leadership",
        accent: "var(--palette-rust)",
      },
    ],
    collaboration: {
      label: "In collaboration with",
      logo: {
        src: `${processImg}/psrcLogo.png`,
        alt:
          "Puget Sound Regional Council (PSRC) logo",
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
            Prove that middle-housing opportunity could be
            explored on a map-first MVP, not a policy PDF.
          </li>
          <li>
            Align a four-person build around threat vectors,
            stack choices, and a shippable first cut.
          </li>
        </ul>
      ),
      illustration: {
        src: `${processImg}/01-introduction.jpg`,
        alt:
          "Dencity introduction slide on middle-housing " +
          "and HB 1110",
      },
      details: (
        <p>
          The founding goal was not a finished city platform
          on day one. It was to validate Dencity: can we
          ingest regional parcel data, surface eligibility
          honestly, and give stakeholders something they can
          click—while the larger corpus and production site
          come later.
        </p>
      ),
      artifacts: [
        {
          title: "Project introduction",
          description: (
            <>
              Early framing for incentivizing middle-housing
              development in Seattle after HB 1110—the problem
              space that sparked Dencity.
            </>
          ),
          image: {
            src: `${processImg}/01-introduction.jpg`,
            alt: "Dencity project introduction slide",
            caption: "Introduction — founding context",
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
            Policy moved first; tooling to inspect parcels and
            incentives lagged behind.
          </li>
          <li>
            PSRC held the layers we needed—if we could obtain,
            interpret, and ship them as product.
          </li>
        </ul>
      ),
      illustration: {
        src: `${processImg}/03-frame-12.jpg`,
        alt: "Definition of middle-housing slide",
      },
      details: (
        <>
          <p>
            Middle housing sits between single-family homes and
            large apartments. HB 1110 and state ordinances
            created legal room to build; almost nothing helped
            a homeowner or developer see their lot in that
            new landscape.
          </p>
          <p>
            Founding Dencity meant treating that gap as a
            product opportunity: partner with the people who
            hold the data, define what “good enough” looks like
            for an MVP, and bring engineers who could turn
            ArcGIS-derived GeoJSON into something interactive.
          </p>
        </>
      ),
      artifacts: [
        {
          title: "What is middle housing?",
          description: (
            <>
              Definition and design archetypes we used to
              explain the missing middle while recruiting
              collaborators and scoping the MVP.
            </>
          ),
          image: {
            src: `${processImg}/03-frame-12.jpg`,
            alt: "Middle-housing definition graphic",
            caption: "Middle-housing definition",
          },
        },
        {
          title: "Development strategies",
          description: (
            <>
              Strategy language—plexify, missing-middle,
              multiply, legalize—that shaped how we talked
              about denser options on the dashboard.
            </>
          ),
          image: {
            src: `${processImg}/04-frame-16.jpg`,
            alt: "Strategies for development graphic",
            caption: "Strategies for development",
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
            GeoJSON at parcel scale is heavy, messy, and easy
            to misread without domain help.
          </li>
          <li>
            Getting clean, understandable data meant working
            directly with the PSRC technology team.
          </li>
        </ul>
      ),
      illustration: {
        src: `${processImg}/02-features-dashboard.jpg`,
        alt:
          "Features of the data-dashboard process slide",
      },
      details: (
        <>
          <p>
            The hardest work was not drawing a map—it was
            earning and understanding the data. We
            conceptualized threat vectors (privacy, misuse of
            eligibility claims, brittle pipelines) and a stack
            that could grow, then spent the bulk of delivery
            wrestling GeoJSON volume, attribute meaning, and
            refresh reality.
          </p>
          <p>
            Partnering with the Puget Sound Regional Council
            technology team was essential: their portal and
            ArcGIS packages were the source of truth, and their
            guidance determined what we could honestly show in
            an MVP versus what had to wait for a fuller
            deployment.
          </p>
        </>
      ),
      artifacts: [
        {
          title: "Dashboard feature flow",
          description: (
            <>
              How we framed the path from PSRC data → filtered
              parcels → interactive dashboard → incentive
              pathways while still proving the concept.
            </>
          ),
          image: {
            src: `${processImg}/02-features-dashboard.jpg`,
            alt: "Features of the data-dashboard slide",
            caption: "Data-dashboard feature flow",
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
            Shipped an MVP with a four-person team—enough map
            and stack to validate the founding idea.
          </li>
          <li>
            Portfolio demo stays sparse on purpose; the full
            parcel corpus ships with a later production site.
          </li>
        </ul>
      ),
      illustration: {
        src: `${processImg}/11-frame-23.jpg`,
        alt: "Dencity process artifact slide",
      },
      details: (
        <p>
          We proved Dencity could exist: threat model, stack,
          and a working Leaflet experience over cleaned
          parcels. What you see below is only a
          <strong> fraction</strong> of the available data—a
          sparse preview for this portfolio. A working website
          with the full parcel set will be deployed later.
        </p>
      ),
      artifacts: [
        {
          title: "Process artifact",
          description: (
            <>
              Workshop and research framing from the build
              that turned the founding brief into an MVP.
            </>
          ),
          image: {
            src: `${processImg}/11-frame-23.jpg`,
            alt: "Dencity process frame",
            caption: "Process frame",
          },
        },
        {
          title: "Research board",
          description: (
            <>
              Supporting exploration captured while we aligned
              threat vectors, stack, and data partnership work.
            </>
          ),
          image: {
            src: `${processImg}/12-frame-24.jpg`,
            alt: "Dencity research frame",
            caption: "Research frame",
          },
        },
      ],
    },
  ],
};
