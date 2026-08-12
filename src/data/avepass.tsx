import type { CaseStudyContent } from "@/data/caseStudy";

/* AvePass case-study copy and user-API CRUD strip. */
export const avepassCaseStudy: CaseStudyContent = {
  about: {
    role: (
      <>
        Backend developer on a student food-ordering startup.
        I owned consumer-user REST routes in{" "}
        <strong>Node.js / Express</strong> against a shared
        Mongoose <code>User</code> model—create, read, update,
        and delete keyed by Firebase UID—plus contracts,
        tests, and release with the team. (Restaurant accounts
        were managed separately.)
      </>
    ),
    problem: (
      <>
        The mobile app needed predictable auth and profile
        APIs on MongoDB after Firebase signup. With frequent
        student turnover, the users backend also needed clear
        structure and shared rules so feature work (settings,
        promotions, search) could continue without breaking
        existing clients.
      </>
    ),
    skills: [
      {
        label: "Node.js",
        accent: "var(--palette-ochre)",
      },
      {
        label: "Express",
        accent: "var(--palette-ochre)",
      },
      {
        label: "MongoDB / Mongoose",
        accent: "var(--palette-olive)",
      },
      {
        label: "Firebase Auth",
        accent: "var(--palette-forest)",
      },
      {
        label: "Joi",
        accent: "var(--palette-ochre)",
      },
      {
        label: "REST APIs",
        accent: "var(--palette-olive)",
      },
    ],
  },
  cards: [
    {
      id: "goal",
      title: "Goal",
      summary: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Maintain/extend the consumer-user API as features
            landed
          </li>
          <li>
            Core surface: create users, edit settings,
            promotions, search, account teardown
          </li>
          <li>
            Auth-scoped reads/writes via{" "}
            <code>firebaseId</code>
          </li>
        </ul>
      ),
      details: (
        <p>
          Keep the consumer-user API reliable for the client
          team while new product features shipped—same
          collection, clear CRUD contracts, no guesswork on
          “get my profile” vs admin or restaurant users.
        </p>
      ),
    },
    {
      id: "opportunity",
      title: "Opportunity",
      summary: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            One MongoDB User collection keyed by{" "}
            <code>firebaseId</code>
          </li>
          <li>
            Clear CRUD made auth + profile behavior
            predictable for other student developers
          </li>
          <li>
            Learned Agile delivery: contracts, testing,
            release to users
          </li>
        </ul>
      ),
      details: (
        <p>
          Consumer users live in one collection. Standardizing
          route shape and validation let the rest of the team
          build on top of create/read/update/delete without
          inventing parallel user stores.
        </p>
      ),
    },
    {
      id: "challenge",
      title: "Challenge",
      summary: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            High turnover → needed shared API rules and
            maintainable structure
          </li>
          <li>
            Updates: Joi validation + username uniqueness
          </li>
          <li>
            Delete: Firebase Auth + MongoDB dual cleanup;
            search: projection + friend/invite enrichment
            without leaking sensitive fields
          </li>
        </ul>
      ),
      details: (
        <p>
          I worked with teammates to standardize rules around
          the API and practiced writing code that the next
          student developer could extend. Harder routes
          weren’t one-field patches—they mixed validation,
          uniqueness, external auth delete, and collection
          queries with field projection.
        </p>
      ),
    },
    {
      id: "outcome",
      title: "Outcome",
      summary: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Shipped authenticated routes in{" "}
            <code>avepass-backend-users</code> (create, scoped
            read, <code>editSettings</code>, dual-store
            delete, projected search)
          </li>
          <li>
            Stronger habits: Agile process, API contracts,
            tests before release
          </li>
          <li>
            Portfolio strip below documents five
            representative CRUD routes
          </li>
        </ul>
      ),
      details: (
        <p>
          Those routes supported ongoing feature development
          on the consumer app. The User API CRUD section below
          is the concrete evidence—method, path, MongoDB move,
          and skills—without pasting secrets from config.
        </p>
      ),
    },
  ],
  crudRoutes: {
    title: "User API CRUD",
    intro: (
      <>
        Here are five example routes I wrote for the
        consumer-user API from <code>routes/users.js</code>{" "}
        against the shared <code>User</code> model (app users,
        not restaurant accounts). Each card describes the
        method and its path, what it does, the MongoDB
        operation, and the skills that were required to
        implement it.
      </>
    ),
    routes: [
      {
        operation: "CREATE",
        method: "POST",
        path: "/api/users/newUser",
        what: (
          <>
            After Firebase signup, look up the user by{" "}
            <code>firebaseId</code>. If missing, build a{" "}
            <code>new User</code> (anonymous or named),
            optionally generate a unique username, then
            persist.
          </>
        ),
        mongo: (
          <>
            MongoDB: <code>findOne</code> →{" "}
            <code>new Model</code> → <code>save()</code>.
            Idempotent first write into the User collection.
          </>
        ),
        skills: [
          "Mongoose findOne",
          "new Model + save",
          "Firebase UID as key",
          "Duplicate-guard responses",
        ],
      },
      {
        operation: "READ",
        method: "GET",
        path: "/api/users/",
        what: (
          <>
            Load the authenticated caller&apos;s document via{" "}
            <code>firebaseId</code> from{" "}
            <code>req.user.uid</code>, validate, return JSON (
            <code>success</code> + <code>user</code>).
          </>
        ),
        mongo: (
          <>
            MongoDB: auth-scoped <code>User.findOne</code> +
            shared <code>validateUser</code> guard—“get my
            profile.”
          </>
        ),
        skills: [
          "Auth-scoped query",
          "validateUser guard",
          "JSON API shape",
        ],
      },
      {
        operation: "UPDATE",
        method: "POST",
        path: "/api/users/editSettings",
        what: (
          <>
            Joi-validate an <code>updates</code> object
            (email, username, names, receipts, privacy). Load
            the user, enforce username uniqueness, apply
            fields, save.
          </>
        ),
        mongo: (
          <>
            MongoDB: <code>findOne</code> (user) +{" "}
            <code>findOne</code> (username clash) → mutate
            fields → <code>save()</code>.
          </>
        ),
        skills: [
          "Joi body validation",
          "Uniqueness query",
          "Field-level rules",
          "save after mutate",
        ],
      },
      {
        operation: "DELETE",
        method: "DELETE",
        path: "/api/users/",
        what: (
          <>
            Find by <code>firebaseId</code>, delete the
            Firebase Auth user, then remove the MongoDB
            document—dual cleanup for account teardown.
          </>
        ),
        mongo: (
          <>
            MongoDB: <code>findOne</code> → document{" "}
            <code>remove()</code>, coordinated with the
            auth-provider delete.
          </>
        ),
        skills: [
          "findOne + remove",
          "External auth + DB delete",
          "Async error reporting",
        ],
      },
      {
        operation: "READ",
        method: "GET",
        path: "/api/users/search:query",
        what: (
          <>
            List active users with a field projection, filter
            named profiles, fuzzy-match name / username, then
            annotate friend and invite state from the
            caller&apos;s document.
          </>
        ),
        mongo: (
          <>
            MongoDB: <code>find</code> +{" "}
            <code>select</code> projection, then enrich from
            another doc&apos;s arrays (friendships / invites).
          </>
        ),
        skills: [
          "find + select",
          "Active-user filter",
          "Result enrichment",
          "Collection query (not only by id)",
        ],
      },
    ],
  },
};
