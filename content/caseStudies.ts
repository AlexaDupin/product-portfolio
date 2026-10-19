import { weswapcardsScreens } from "./screens";
import { caseStudyPath, links } from "./site";
import type { CaseStudy, PageMeta } from "./types";

export const caseStudiesMeta: PageMeta = {
  title: "Case studies",
  description:
    "Case studies in technical troubleshooting, bug triage, user research, documentation and onboarding, from Booking.com and WeSwapCards.",
};

export const caseStudiesPage = {
  eyebrow: "Case studies",
  title: "Case studies from support, testing and my own app.",
  lead: "Each story covers the problem, my part in it, what I did and what changed. Start with the four below, or filter by theme.",
  featuredTitle: "Start here",
  filterLabel: "Filter case studies by theme",
  allLabel: "All",
};

export const caseStudyLabels = {
  role: "Role",
  context: "Context",
  timeline: "Timeline",
  tools: "Tools",
  details: "Project details",
  problem: "The problem",
  responsibility: "My responsibility",
  whatIDid: "What I did",
  outcome: "What changed",
  approach: "How I work",
  communication: "Communication",
  skills: "Skills shown",
  metrics: "In numbers",
  next: "Next case study",
  back: "All case studies",
  loading: "Loading case study",
};

/** Order matters: these appear on the home page and first on the Case studies page. */
export const featuredSlugs = [
  "login-redirects",
  "release-bug-triage",
  "training-testers",
  "production-outage",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "login-redirects",
    status: "live",
    category: "resolve-issues",
    title: "Fixing a sign-in loop on desktop",
    summary:
      "Users who had just signed in kept landing back on the login page. I helped each one with troubleshooting steps, spotted the pattern across several reports, then fixed the root cause.",
    tags: ["User support", "Troubleshooting", "Root cause analysis", "Authentication", "React", "Clerk"],
    image: weswapcardsScreens.desktopChapters,
    meta: {
      title: "Fixing a sign-in loop on desktop",
      description:
        "How I helped WeSwapCards users stuck in a sign-in loop on desktop, spotted the pattern across several reports, and fixed how the app handled missing account data.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards web app",
      timeline: "October to November 2025",
      tools: "React, Clerk, Node.js",
    },
    problem: [
      "Several users reported they couldn't use WeSwapCards on desktop. Even after signing in, they were sent back to the login page, so they couldn't manage their collections or message other collectors.",
    ],
    responsibility: [
      "I own the whole product, so I handled the reports, the investigation and the fix.",
    ],
    headlines: {
      problem: "Users couldn't access the app after signing in",
      responsibility: "I owned it from first report to fix",
      whatIDid: "I helped each user first, then fixed the root cause.",
      outcome: "After the fix, the emails about this issue stopped.",
    },
    steps: [
      {
        title: "Helped each user",
        text: "I answered each email with step-by-step troubleshooting guidance, so people had something to try right away.",
      },
      {
        title: "Spotted the pattern",
        text: "Several users reported the same problem, so it wasn't an isolated case. I started looking for the cause in the app itself.",
      },
      {
        title: "Mapped every redirect",
        text: "I reviewed every path that could redirect a user to sign-in, across the React app, Clerk and the backend API.",
      },
      {
        title: "Found the weak point",
        text: "The app relied on an account ID stored locally and treated missing account data as if the user were signed out.",
      },
      {
        title: "Redesigned the flow",
        text: "The app now tells signed-out visitors apart from signed-in users whose account data hasn't loaded yet. I added background account recovery and opened several pages to visitors without an account.",
      },
    ],
    beforeAfter: {
      beforeLabel: "Before",
      afterLabel: "After",
      rows: [
        {
          before: "Missing account data was treated as signed out.",
          after: "Signed-in users whose account data hasn't loaded yet are handled separately from signed-out visitors.",
        },
        {
          before: "About 13 automatic redirect paths to sign-in in the code.",
          after: "4 automatic redirect paths to sign-in in the code.",
        },
        {
          before: "Several pages were closed to visitors without an account.",
          after: "Those pages are open, so visitors can explore parts of the product before signing up.",
        },
      ],
    },
    metricsTitle: "Result",
    metrics: [
      {
        value: "~13 → 4",
        label: "Automatic sign-in redirect paths in the code",
        note: "Code paths, not user incidents.",
      },
    ],
    outcome: [
      "The new background account recovery lets users restore missing account data without losing their session. It runs alongside the older redirect flow, which still exists and still contains a forced sign-out path.",
    ],
    communication: {
      title: "Guidance users could follow without technical knowledge",
      paragraphs: [
        "Before changing anything in the code, I replied to each user with step-by-step troubleshooting guidance they could follow on their own.",
        "The first step doubled as a test. If signing in worked in a private window, the problem likely came from data stored in their browser, which is where the root cause turned out to be.",
      ],
    },
    excerpt: {
      title: "The troubleshooting steps I sent",
      icon: "mail",
      items: [
        "Try signing in from a private (incognito) window.",
        "Clear your browser's cookies and cache, then sign in again.",
        "If you're still sent back to the login page, reply with your username, browser and device.",
      ],
    },
    approach: [
      "I reply to each user with steps they can try right away. When several users report the same problem, I investigate the cause in the product and fix it there. Here, the cause was how the app handled missing account data, rather than sign-in itself.",
    ],
  },
  {
    slug: "sentry-login-alert",
    status: "live",
    category: "resolve-issues",
    title: "A Sentry login alert, from triage to fix",
    summary:
      "Sentry flagged 11 login verification failures with no error details. I narrowed them down to one user on one iPhone over 36 seconds, then removed a single point of failure in how logins are verified.",
    tags: ["Bug triage", "Sentry", "Log analysis", "Root cause analysis", "Working safely in production"],
    image: {
      label: "Recreated Sentry alert",
      alt: "Recreated Sentry alert: \"Login verification failed\" on the live API, high priority, 11 events from 1 user, shown as a single spike on the chart",
      tone: "pink",
      src: "/images/sentry-alert-recreated.svg",
      width: 1600,
      height: 1000,
      blurInHero: true,
    },
    meta: {
      title: "A Sentry login alert, from triage to fix",
      description:
        "How I triaged a high-priority Sentry alert about login verification failures on WeSwapCards, narrowed it down with production evidence, and removed a single point of failure.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards",
      timeline: "October 14–19, 2026",
      tools: "Sentry, Clerk, Node.js",
    },
    problem: [
      "On October 14, 2026, Sentry raised a high-priority alert: 11 login verification failures on the live API, with no error details, because Clerk discards them for this error type.",
      "This was a separate, much smaller issue than the July outage: one user, 36 seconds, resolved on its own. I use it here to show how I handle a Sentry alert from start to finish.",
    ],
    responsibility: [
      "I own the product, so I triaged the alert, led the investigation and decided on the fix. I worked with an AI coding assistant and approved every step that touched production.",
    ],
    headlines: {
      problem: "An urgent alert with no error details",
      responsibility: "I triaged it and decided on the fix",
      whatIDid: "I narrowed it down step by step before changing anything.",
      outcome: "Login checks no longer depend on a network call to Clerk.",
    },
    steps: [
      {
        title: "Read the report",
        text: "I traced the error to the login check in the API and listed the two possible causes: a network failure while fetching Clerk's signing key, or a bad login token from one device.",
      },
      {
        title: "Narrowed it down",
        text: "All the failures arrived at once, from one user on one iPhone, while their dashboard was loading. It was one person reloading a few times, not a problem spread over days.",
      },
      {
        title: "Checked the evidence on production, read-only",
        text: "The server access log showed the failures lasted 36 seconds. Public pages kept working, no other signed-in user was affected, and these were the only login failures that month. The user kept using the app normally afterward.",
      },
      {
        title: "Removed a single point of failure",
        text: "On October 19, I configured Clerk to verify logins with a locally stored public key instead of downloading it each time, which removes the network dependency. It was a setting change, with no code changes.",
      },
      {
        title: "Tested before trusting",
        text: "I ran Clerk's real verification code against a test key in several formats, plus a wrong key that had to be rejected, to settle which format was safe. Then I verified the deployed value matched, checked the health endpoint, and tested real logins on web and mobile.",
      },
    ],
    outcome: [
      "The root cause wasn't proven. The change removes one of the two possible causes, so a network problem while fetching Clerk's key can no longer fail a login.",
      "This alert existed because of the monitoring I added after the July outage.",
    ],
    approach: [
      "When the evidence is thin, I narrow it down step by step, test my assumptions before acting, and choose the fix that removes risk without creating new problems.",
    ],
    links: {
      outcome: { label: "Read how I added that monitoring", href: caseStudyPath("monitoring-after-outage") },
    },
  },
  {
    slug: "release-bug-triage",
    status: "live",
    category: "resolve-issues",
    title: "Triaging app release bugs for 42 language teams",
    summary:
      "For five years I triaged localization bugs on Booking.com's iOS and Android releases, every two weeks, so they could be fixed before each release reached the stores.",
    tags: ["Bug triage", "Jira", "SLAs", "Escalation", "Documentation", "Process improvement"],
    image: {
      label: "Release triage board",
      alt: "Hands typing on a laptop on a wooden desk",
      tone: "sand",
      src: "/images/photo-laptop-typing.jpg",
      width: 1600,
      height: 1067,
    },
    meta: {
      title: "Release bug triage at Booking.com",
      description:
        "Five years of triaging localization bugs on Booking.com's biweekly iOS and Android releases, reported by 42 language teams in Jira, under a 48-hour SLA.",
    },
    header: {
      role: "Localization Specialist, Mobile Support Team",
      context: "Booking.com iOS and Android apps",
      timeline: "5 years of biweekly releases",
      tools: "Jira, team inbox, chat",
    },
    problem: [
      "Booking.com shipped iOS and Android releases every two weeks. Language teams tested each release and reported localization bugs and improvements in Jira.",
      "Bugs had a 48-hour SLA so they could be fixed before the release reached the stores. Each ticket had to be real, complete and in the right hands quickly.",
    ],
    responsibility: [
      "I triaged the tickets reported by 42 language teams: 20 to 100 bug and improvement tickets per release. I also answered the teams' questions through the team inbox and chat.",
    ],
    headlines: {
      problem: "Bugs had to be fixed before each release reached the stores",
      responsibility: "I triaged the tickets from 42 language teams",
      whatIDid: "I triaged every ticket the same way and kept track of what kept going wrong.",
      outcome: "Engineers and copywriters received tickets that were already checked.",
    },
    steps: [
      { title: "Reproduce", text: "I reproduced each reported issue to confirm it and see exactly what happened." },
      { title: "Check", text: "I checked the ticket was complete before passing it on." },
      { title: "Route", text: "I routed it to engineers or copywriters, depending on what needed fixing." },
      { title: "Follow up", text: "When a ticket was unclear, I followed up with the reporter in chat." },
      {
        title: "Document recurring issues",
        text: "I gathered the most common problems in bug reporting, such as tickets missing information and issues teams ran into while testing, and added them to the app testing FAQ and runbook.",
      },
    ],
    metrics: [
      { value: "5 years", label: "of triage on biweekly app releases" },
      { value: "42", label: "language teams reporting" },
      { value: "20–100", label: "tickets per release in Jira" },
      { value: "48 h", label: "SLA for bug fixes" },
    ],
    communication: {
      title: "Working with non-technical reporters",
      paragraphs: [
        "Most of the people I supported weren't technical. When a ticket was unclear, I followed up with the reporter directly in chat.",
        "I answered the teams' questions through the team inbox and chat, and I wrote the testing guides they used.",
      ],
    },
    outcome: [
      "Reporters had someone to ask when something wasn't clear.",
      "The most common problems were written up in the app testing FAQ and runbook, where teams could look them up.",
    ],
    approach: [
      "I check that each ticket has what the engineer or copywriter needs to fix it, I follow up with the reporter when something is unclear, and I add recurring problems to the documentation.",
    ],
  },
  {
    slug: "training-testers",
    status: "live",
    category: "enable-users",
    title: "Training new testers around the world",
    summary:
      "I trained new linguists worldwide in mobile app testing through live video sessions, and onboarded 20+ new hires on my own team.",
    tags: ["Onboarding", "Training", "Mobile app testing", "Remote collaboration"],
    image: {
      label: "Training session",
      alt: "A person on a group video call, with several participants on a laptop screen",
      tone: "pink",
      src: "/images/photo-video-call.jpg",
      width: 1600,
      height: 1280,
    },
    meta: {
      title: "Training international testers",
      description:
        "How I trained new linguists worldwide in mobile app testing through live video sessions, and onboarded 20+ new hires at Booking.com.",
    },
    header: {
      role: "Localization Specialist, Mobile Support Team",
      context: "Booking.com mobile app testing",
      tools: "Live video sessions",
    },
    problem: [
      "New linguists joined from around the world and needed to test mobile apps. Many were nervous about the technical side.",
    ],
    responsibility: [
      "I trained new linguists worldwide in mobile app testing, onboarded 20+ new hires on my own team, and was the team's go-to person for app and technical issues.",
    ],
    headlines: {
      problem: "New testers were nervous about the technical side",
      responsibility: "I trained new linguists and onboarded new hires",
      whatIDid: "I ran the training as live video sessions.",
      outcome: "New testers started with a test they'd already walked through.",
    },
    steps: [
      {
        title: "Scheduled across time zones",
        text: "I set up sessions at times that worked for people from Asia to South America.",
      },
      {
        title: "Ran a live test together",
        text: "Each session walked through a real test with the new testers, step by step.",
      },
      {
        title: "Stayed the go-to person",
        text: "After training, I remained the team's go-to person for app and technical issues.",
      },
    ],
    metrics: [{ value: "20+", label: "new hires onboarded on my own team" }],
    communication: {
      title: "Explaining technical steps to non-technical people",
      paragraphs: [
        "Many new linguists were nervous about the technical side. Walking through a live test together meant they saw each step happen on screen and could ask questions as they came up, instead of working it out alone from written instructions.",
      ],
    },
    outcome: [
      "New testers started with a test they'd already walked through once, and knew who to ask when something technical got in the way.",
    ],
    approach: [
      "I teach technical steps by going through them with people, and I answer their questions as they come up.",
    ],
  },
  {
    slug: "production-outage",
    status: "live",
    category: "resolve-issues",
    title: "Production outage after a host upgrade",
    summary:
      "Signed-in pages stopped returning data while the server looked healthy. I narrowed it down one step at a time to a runtime change on the host.",
    tags: ["Incident response", "Root cause analysis", "Monitoring", "Node.js", "Sentry"],
    image: {
      label: "Monitoring dashboard",
      alt: "A laptop screen showing performance charts and graphs",
      tone: "sand",
      src: "/images/photo-dashboard.jpg",
      width: 1600,
      height: 1067,
    },
    meta: {
      title: "Production outage after a host upgrade",
      description:
        "How I traced a WeSwapCards production outage to a runtime change on the host, fixed it and added monitoring so the next failure shows up sooner.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards production API",
      timeline: "July 2026",
      tools: "Node.js, Clerk, Sentry",
    },
    problem: [
      "Authenticated pages on WeSwapCards stopped returning data. The server looked healthy, and nothing had changed in my code or settings.",
    ],
    responsibility: ["I run WeSwapCards solo, so finding and fixing the outage was on me."],
    headlines: {
      problem: "Signed-in pages stopped returning data",
      responsibility: "Finding and fixing the outage was on me",
      whatIDid: "I worked from the symptom to the cause, ruling things out one at a time.",
      outcome: "Signed-in pages worked again, with more visibility into the API.",
    },
    steps: [
      {
        title: "Ruled things out",
        text: "I checked the token, the keys and the network one by one.",
      },
      {
        title: "Found the root cause",
        text: "The host had upgraded Node. An old node-fetch polyfill in my code was overriding the new built-in fetch and breaking Clerk's token verification. The cause was in the runtime, not my application logic.",
      },
      { title: "Fixed it", text: "A one-line guard fixed it." },
      {
        title: "Prevented a repeat",
        text: "I added Sentry tracing and a health endpoint that checks dependencies.",
      },
    ],
    communication: {
      title: "In plain terms",
      paragraphs: [
        "An old add-on in my code replaced something the new version of Node already had built in. The sign-in check depended on the built-in version, so signed-in requests failed even though everything else looked normal.",
      ],
    },
    outcome: [
      "Authenticated pages returned data again after the fix. Sentry tracing and the health endpoint now give me more visibility into the API and the services it depends on.",
    ],
    approach: [
      "When something breaks without a code change, I also check the environment: the host, the runtime and the services the app depends on. I test one possible cause at a time.",
    ],
    deepDive: {
      label: "Read the full technical deep-dive on my developer portfolio",
      href: links.weswapcardsDeepDive,
      external: true,
    },
    links: {
      end: { label: "Read what I added after the outage: monitoring", href: caseStudyPath("monitoring-after-outage") },
    },
  },
  {
    slug: "user-reports-to-fixes",
    status: "live",
    category: "understand-users",
    title: "Turning user reports into product fixes",
    summary:
      "I handle all WeSwapCards support and user reports myself. Here are reports that turned into changes in the product.",
    tags: ["User feedback", "Support", "Product improvement", "Bug fixing"],
    image: weswapcardsScreens.iosChapters,
    meta: {
      title: "User reports to fixes on WeSwapCards",
      description:
        "Examples of WeSwapCards user reports that I turned into product changes, from search results to a missing Forgot password link.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards web and mobile apps",
      timeline: "Since launch in February 2025",
    },
    problem: [
      "Collectors use WeSwapCards to find trade partners and message each other. When something gets in their way, they report it to me.",
    ],
    responsibility: [
      "I handle all WeSwapCards support and user reports myself, from reading the report to shipping the change.",
    ],
    headlines: {
      problem: "Collectors tell me when something gets in their way",
      responsibility: "I handle all support and user reports myself",
      whatIDid: "I turned reports into changes in the product.",
      outcome: "Five reports led to five changes in the product.",
    },
    beforeAfter: {
      beforeLabel: "What users reported",
      afterLabel: "What I changed",
      rows: [
        {
          before: "The swap-partner search listed users with only one copy of a card.",
          after: "The search now requires a duplicate, so it only lists people who can actually trade.",
        },
        {
          before: "Input sanitization blocked apostrophes.",
          after: "Text with apostrophes now goes through.",
        },
        {
          before: "Cards in the same chapter were hard to find.",
          after: "Cards in the same chapter are easier to find.",
        },
        {
          before: "Messages were duplicated when sent too fast.",
          after: "Sending quickly no longer creates duplicate messages.",
        },
        {
          before: "The apps had no \"Forgot password\" link.",
          after: "The apps now have a \"Forgot password\" link.",
        },
      ],
    },
    outcome: [
      "Each of these is a change I implemented in response to a report. They're fixes, not measured outcomes.",
    ],
    approach: [
      "I read each support report for what it says about the product, and I fix the things that get in users' way.",
    ],
  },
  {
    slug: "usability-research",
    status: "live",
    category: "understand-users",
    title: "Usability research at Booking.com",
    summary:
      "I moderated 30+ usability sessions with real users of the website and apps, and scripted sessions with hotel partners.",
    tags: ["User research", "Usability testing", "Moderation", "Task scripting"],
    image: {
      label: "Usability session",
      alt: "Two women at a table, one using a laptop while the other watches and talks with her",
      tone: "sand",
      src: "/images/photo-usability.jpg",
      width: 1600,
      height: 1067,
    },
    meta: {
      title: "Usability research at Booking.com",
      description:
        "How I moderated 30+ usability sessions with Booking.com users and scripted task-based sessions with hotel partners.",
    },
    header: {
      role: "Session moderator",
      context: "Booking.com website, apps and partner platform",
    },
    problem: [
      "Product teams wanted to see where real people struggled with the website, the apps and the partner platform.",
    ],
    responsibility: [
      "I moderated 30+ sessions with real users of the website and apps, and scripted sessions with hotel partners on the partner platform.",
    ],
    headlines: {
      problem: "Product teams wanted to see where people struggled",
      responsibility: "I moderated user sessions and scripted partner sessions",
      whatIDid: "Each session was built around tasks, so we could watch what people actually did.",
      outcome: "Insights went to the product team.",
    },
    steps: [
      {
        title: "Scripted the tasks",
        text: "For hotel partner sessions, I scripted tasks for partners to complete on the partner platform.",
      },
      {
        title: "Moderated the sessions",
        text: "I asked participants to complete tasks and watched where they struggled.",
      },
      { title: "Shared insights", text: "Insights from the sessions went to the product team." },
    ],
    metrics: [{ value: "30+", label: "usability sessions moderated" }],
    outcome: [
      "My part was to surface where people struggled and pass those insights to the product team, who decided what to change.",
    ],
    approach: ["I watch people use the product, note where they struggle and pass it on to the team that can change it."],
    confirm: [
      "The kinds of friction you saw in sessions, described in general terms with no internal data.",
    ],
  },
  {
    slug: "testing-guides",
    status: "live",
    category: "prevent-repeats",
    title: "Testing guides for 42 language teams",
    summary:
      "I wrote the iOS and Android app testing guides for all 42 language teams, from installing the beta app to reporting bugs in Jira.",
    tags: ["Documentation", "Knowledge base", "Jira", "Bug reporting"],
    image: {
      label: "Checklist",
      alt: "A hand writing a checklist in a notebook",
      tone: "sand",
      src: "/images/photo-checklist.jpg",
      width: 1600,
      height: 1000,
    },
    meta: {
      title: "Testing guides for 42 language teams",
      description:
        "The iOS and Android app testing guides I wrote for 42 language teams at Booking.com, and a sample on writing bug reports engineers can act on.",
    },
    header: {
      role: "Localization Specialist, Mobile Support Team",
      context: "Booking.com iOS and Android app testing",
      tools: "Jira",
    },
    problem: [
      "Testers in 42 language teams needed one clear reference for setting up the apps, testing them and reporting what they found.",
    ],
    responsibility: ["I wrote the iOS and Android app testing guides for all 42 language teams."],
    headlines: {
      problem: "42 language teams needed one clear testing reference",
      responsibility: "I wrote the guides for all 42 teams",
      whatIDid: "The guides covered the whole path, from installing the app to filing a ticket.",
      outcome: "Noticeably fewer incomplete tickets, by my own observation.",
    },
    steps: [
      { title: "Install", text: "Installing the beta app." },
      { title: "Set up", text: "Getting the app and device ready for testing." },
      { title: "Test", text: "Running test scenarios efficiently." },
      {
        title: "Report",
        text: "Reporting bugs and improvements in Jira with the information engineers and copywriters need.",
      },
    ],
    excerpt: {
      title: "How to write a bug report engineers can act on",
      label: "Sample written for this portfolio, not taken from the original guides",
      icon: "document",
      items: [
        "Give it a title that says what's wrong and where, for example: \"Button text cut off on the payment screen (French, iOS)\".",
        "List the steps to reproduce it, starting from opening the app.",
        "Say what you expected to happen and what happened instead.",
        "Add the device, the operating system version and the app version.",
        "Attach a screenshot or a short screen recording.",
        "Report one problem per ticket.",
      ],
    },
    outcome: [
      "After the guides were in use, I saw noticeably fewer incomplete tickets. That's my own observation from triaging them, not a measured figure.",
    ],
    approach: [
      "When people ask the same question more than once, I add the answer to a guide.",
    ],
  },
  {
    slug: "tool-rollout",
    status: "live",
    category: "enable-users",
    title: "Rolling out a new tool at a translation agency",
    summary: "I rolled out SDL Trados across a translation agency, wrote the user guide and trained the team.",
    tags: ["Tool rollout", "Training", "Documentation"],
    image: {
      label: "Team training",
      alt: "A trainer presenting to colleagues seated around a table in a meeting room",
      tone: "pink",
      src: "/images/photo-team-training.jpg",
      width: 1600,
      height: 1000,
    },
    meta: {
      title: "Tool rollout at a translation agency",
      description: "How I rolled out SDL Trados across a translation agency, wrote the user guide and trained the team.",
    },
    header: {
      role: "Translation Project Manager",
      context: "Translation agency",
      tools: "SDL Trados",
    },
    problem: ["The agency moved to SDL Trados, and the whole team needed to learn it."],
    responsibility: ["I rolled out the tool across the agency, wrote the user guide and trained the team."],
    headlines: {
      problem: "The whole team needed to learn a new tool",
      responsibility: "I handled the rollout, the guide and the training",
      whatIDid: "The rollout came with two things people could rely on: training and a written guide.",
      outcome: "The team had training and a guide to come back to.",
    },
    steps: [
      { title: "Rolled it out", text: "I rolled out SDL Trados across the agency." },
      { title: "Wrote the guide", text: "I wrote the user guide." },
      { title: "Trained the team", text: "I trained the team to use it." },
    ],
    outcome: ["The team had both training and a written guide to come back to."],
    approach: ["When I roll out a tool, I train people on it and give them a written guide to refer back to."],
  },
  {
    slug: "product-deep-dive",
    status: "coming-soon",
    category: "understand-users",
    title: "Product deep dive",
    summary:
      "A hands-on teardown of one public SaaS product: how it works, what changes with each setting, where users are likely to get stuck, and a short explainer for a new user.",
    tags: ["Product analysis", "Documentation"],
    image: { label: "Laptop work", alt: "A person typing on a laptop at a desk", tone: "pink", src: "/images/photo-laptop-work.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "duplicate-data-cleanup",
    status: "coming-soon",
    category: "resolve-issues",
    title: "Duplicate data cleanup",
    summary:
      "Found 350+ duplicate rows in PostgreSQL caused by a race condition in check-then-insert code, and fixed it with upserts and a unique index.",
    tags: ["PostgreSQL", "Root cause analysis"],
    image: { label: "Data blocks", alt: "An abstract grid of blue blocks", tone: "sand", src: "/images/photo-data-blocks.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "api-debugging",
    status: "coming-soon",
    category: "resolve-issues",
    title: "API debugging walkthrough",
    summary:
      "Reproducing an expired token, a bad payload and a rejected webhook signature, step by step, in an API client.",
    tags: ["APIs", "Troubleshooting"],
    image: { label: "Code on screen", alt: "Code on a computer screen", tone: "pink", src: "/images/photo-code-screen.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "monitoring-after-outage",
    status: "live",
    category: "prevent-repeats",
    title: "Adding monitoring after a production outage",
    summary:
      "After a silent outage, I added error tracking and a health check so the next failure shows up right away.",
    tags: ["Monitoring", "Sentry", "Error handling", "Root cause analysis", "Prevention", "API"],
    image: {
      label: "Server rack",
      alt: "A server rack with network cables and status lights",
      tone: "sand",
      src: "/images/photo-server-rack.jpg",
      width: 1600,
      height: 1000,
    },
    meta: {
      title: "Adding monitoring after a production outage",
      description:
        "How I added Sentry error tracking, a health check and centralized error handling to WeSwapCards after a silent production outage, and what that monitoring does and doesn't cover.",
    },
    header: {
      role: "Solo developer and owner",
      context: "WeSwapCards (web + mobile, one Node.js/Express API, hosted on o2switch)",
      timeline: "July–August 2026",
      tools: "Sentry, Node.js, Express",
    },
    problem: [
      "In July 2026, a host runtime upgrade broke sign-in-protected pages. The server looked healthy, nothing in my code had changed, and nothing alerted me. I had to find the cause from the symptoms alone.",
      "Beyond the bug itself, I had no way to see a failure as it happened or to quickly check the server's state.",
    ],
    responsibility: [
      "I own the whole product, so after fixing the outage I decided what monitoring the project needed and built it.",
    ],
    headlines: {
      problem: "The outage gave no warning",
      responsibility: "I decided what monitoring the project needed",
      whatIDid: "I added error tracking, a health check and one place to handle errors.",
      outcome: "Backend errors now show up in Sentry instead of going unnoticed.",
    },
    steps: [
      {
        title: "Added error tracking",
        text: "I added Sentry error tracking to the backend, so API errors, including server errors (500s), are recorded with their context instead of failing silently.",
      },
      {
        title: "Added a health check",
        text: "I added a /api/health endpoint that confirms the server is up and the settings the app needs are present.",
      },
      {
        title: "Centralized error handling",
        text: "Errors in the API are handled in one place, reported to Sentry, and users get a consistent error response.",
      },
    ],
    communication: {
      title: "In plain terms",
      paragraphs: [
        "Sentry is a service that records errors on the server as they happen, with enough detail to find the cause.",
        "The health check is an address on the server I can open to confirm it's running and has the settings it needs.",
      ],
    },
    usage: {
      title: "How I use it",
      items: [
        { title: "During normal use", text: "Sentry reports backend errors as they happen." },
        {
          title: "On demand",
          text: "I open /api/health to confirm a deploy is live, or to check the server when something looks wrong.",
        },
        {
          title: "The limit",
          text: "If the server is completely down, no errors reach Sentry. An external uptime check on /api/health would cover that.",
        },
        { title: "Coverage", text: "Sentry covers the backend only, not the website or the mobile apps." },
      ],
    },
    outcome: [
      "I can check the server's state in seconds instead of guessing from symptoms.",
      "In October 2026, Sentry flagged a separate, much smaller sign-in issue: one user, for 36 seconds. I followed it from the alert to a preventive change.",
    ],
    approach: [
      "After fixing a bug, I also make sure the next failure will be visible, and I'm clear about what my monitoring does and doesn't cover.",
    ],
    links: {
      problem: { label: "Read the outage case study", href: caseStudyPath("production-outage") },
      outcome: { label: "Read the Sentry alert case study", href: caseStudyPath("sentry-login-alert") },
    },
    deepDive: {
      label: "Technical details on my developer portfolio",
      href: links.weswapcardsDeepDive,
      external: true,
    },
  },
  {
    slug: "help-center-articles",
    status: "coming-soon",
    category: "prevent-repeats",
    title: "Help center articles, EN + FR",
    summary: "Short articles for WeSwapCards users on sign-in issues, failed trades and account deletion.",
    tags: ["Knowledge base", "Documentation"],
    image: { label: "Reading on a tablet", alt: "A person holding a tablet", tone: "pink", src: "/images/photo-tablet-reading.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "onboarding-video",
    status: "coming-soon",
    category: "enable-users",
    title: "Onboarding video",
    summary: "A 3-minute walkthrough of one WeSwapCards feature for a first-time user.",
    tags: ["Onboarding", "Video"],
    image: { label: "Recording desk", alt: "A desk set up for recording, with a monitor and a studio light", tone: "sand", src: "/images/photo-recording-desk.jpg", width: 1600, height: 1000 },
  },
];
