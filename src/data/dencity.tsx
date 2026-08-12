import type { CaseStudyContent } from "@/data/caseStudy";

const processImg = "/images/projects/dencity/process";
const diagramImg = "/images/projects/dencity/diagrams";
const prototypeImg = "/images/projects/dencity/prototype";

/* Dencity case-study content for /projects/dencity. */
export const dencityCaseStudy: CaseStudyContent = {
  about: {
    role: (
      <>
        I founded Dencity after a tech-policy research project
        proved to be a viable solution to expand upon.
        Recruiting three Informatics classmates, I led the
        project as PM / lead SWE and organized a sprint to
        develop an MVP of the project. During this time, I
        fleshed out the tech-stack, found a collaborative
        opporunitiy with the Puget Sound Regional Council
        (PSRC) on sourcing parcel data, and shipped a first
        MVP that shows parcels and middle-housing plans
        without a full production deploy.
      </>
    ),
    problem: (
      <>
        After WA House Bill 1110 opened middle housing in
        single-family zones, owners, developers, and cities
        still lacked a clear way to see which lots are
        eligible and worth encouraging for denser types.
        Inspired by ADUniverse (ADUs), Dencity targets that
        gap for middle-housing plans in King County /
        Seattle, showing properties competitive for
        redevelopment based of PSRC metrics.
      </>
    ),
    skills: [
      {
        label: "Founding / product vision",
        accent: "var(--palette-olive)",
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
        label: "Collaborative Data Partnership",
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
      {
        label: "Software Engineering",
        accent: "var(--palette-olive-dark)",
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
            Developed core feature and refine: find eligible
            lots + compare middle-housing plan types
          </li>
          <li>
            Led 4-person team: Task assignment and sequencing
            + coordinating revisions based off feedback
          </li>
          <li>
            Created value for stakeholders: focusing MVP on
            only owners exploring options + developers scoping
            sites
          </li>
        </ul>
      ),
      illustration: {
        src: `${prototypeImg}/wireframes.png`,
        alt:
          "Dencity wireframes for map search, plans, " +
          "parcel detail, about, and contact",
      },
      details: (
        <p>
          Product brief: help redevelop single-family homes
          into middle housing with parcel search, interactive
          maps, plan exploration, and pointers to rules and
          financial programs. Clickable MVP first; fuller site
          with the complete parcel set later.
        </p>
      ),
      artifacts: [
        {
          title: "Sequence diagram",
          description: (
            <>
              End-to-end property-manager flow: load the app,
              filter parcels on the map, open detail, then
              trends or plan/contact lookup. Error branches
              cover empty search and missing contacts.
            </>
          ),
          image: {
            src: `${diagramImg}/sequence.png`,
            alt:
              "UML sequence diagram of property manager " +
              "interactions with Dencity",
            caption: (
              <>
                User ↔ system: search parcels, open detail,
                trends, and plan/contact lookup—including
                empty-result paths.
              </>
            ),
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
            ADUniverse proved utility; we widened scope to
            duplex → larger plex plan types and additional
            ways to create value
          </li>
          <li>
            One place for Seattle / King County ordinance
            context + lot-level exploration
          </li>
          <li>
            Clear MVP surface: who the lot is for, what can be
            built, how it sits in regional GIS
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
            Landing copy split two audiences: owners exploring
            options and developers scoping sites under local
            ordinances. Resources listed concrete plan
            types—duplex, triplex, fourplex, and
            similar—with unit counts and rough plan costs.
            That kept the MVP about showing options on a map,
            not a long policy PDF.
          </p>
        </>
      ),
      artifacts: [
        {
          title: "Dual map views",
          description: (
            <>
              Side-by-side: all parcels touched by HB 1110 vs
              parcels PSRC criteria mark as likely to
              redevelop. That gap is why owners and developers
              need a filterable dashboard, not a static
              ordinance PDF.
            </>
          ),
          image: {
            src: `${processImg}/06-frame-18.jpg`,
            alt:
              "Dashboard comparing HB 1110–affected parcels " +
              "to PSRC likely-to-develop parcels",
            caption: (
              <>
                Affected vs likely-to-develop parcels—why
                ordinance context and lot filters belong
                together.
              </>
            ),
          },
        },
        {
          title: "Development strategies",
          description: (
            <>
              Plan-type and denser-option notes used to explain
              what can be built once a lot is in scope.
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
            Parcel GeoJSON is large and easy to misread without
            data dictionary, requiring lots of
            technical-knowledge
          </li>
          <li>
            Found partnership with{" "}
            <strong>PSRC</strong> tech team to obtain /
            interpret layers before trusting
            government-supplied map and its features.
          </li>
          <li>
            Process rigor: threat model, personas,
            sequence/component diagrams, requirements. Clean
            attributes were difficult to create.
          </li>
        </ul>
      ),
      illustration: {
        src: `${diagramImg}/threat-attack-tree.png`,
        alt:
          "Threat modeling attack tree for compromising " +
          "the Dencity platform",
      },
      details: (
        <>
          <p>
            Early docs included a threat model, personas,
            sequence and component diagrams, and a
            requirements list. The slow part was still data:
            cleaning GeoJSON, reading attributes correctly,
            and knowing what we could show honestly in an MVP.
            PSRC’s portal and ArcGIS packages were the source
            of truth and guided development in the first
            sprint.
          </p>
        </>
      ),
      artifacts: [
        {
          title: "UML component diagram",
          description: (
            <>
              Architecture blocks for the web UI,
              map/search/eligibility visualizations, and
              database integrity. Anchors the PSRC data
              partnership in a concrete system shape.
            </>
          ),
          image: {
            src: `${diagramImg}/component.png`,
            alt:
              "UML component diagram of Dencity web " +
              "interface, visualizations, and database",
            caption: (
              <>
                Web interface, visualizations/reporting, and
                database blocks around parcel GIS and
                integrity.
              </>
            ),
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
            Shipped Flask site: landing, about, resources
            (plans), contact, Leaflet properties map
          </li>
          <li>
            Portfolio demo ={" "}
            <strong>sparse parcel sample</strong> only; full
            set planned for later production site
          </li>
          <li>
            Determined viability of solution: search for
            parcels → read status/zoning → browse plan types
          </li>
        </ul>
      ),
      illustration: {
        src: `${prototypeImg}/landing.png`,
        alt:
          "Dencity landing prototype — Middle Housing " +
          "Made Easy",
      },
      details: (
        <p>
          The MVP proved that loop end-to-end. Below (on the
          live page) is a <strong>fraction</strong> of
          available parcels for preview. Full data ships with
          a later production website.
        </p>
      ),
      artifacts: [
        {
          title: "Properties map prototype",
          description: (
            <>
              Interactive Leaflet map with parcel
              popups—proof the MVP loop works end-to-end.
            </>
          ),
          image: {
            src: `${prototypeImg}/properties-map.png`,
            alt:
              "Dencity properties page with Leaflet parcel " +
              "map and popup",
            caption: (
              <>
                Parcel map with address / name / year-built
                popup—search → read → browse.
              </>
            ),
          },
        },
      ],
    },
  ],
};
