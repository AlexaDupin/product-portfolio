import { weswapcardsScreens } from "./screens";
import { links } from "./site";
import type { CaseStudy, PageMeta } from "./types";

export const caseStudiesMeta: PageMeta = {
  title: "Case studies",
  description:
    "Case studies in technical troubleshooting, bug triage, user research, documentation and onboarding, from Booking.com and WeSwapCards.",
};

export const caseStudiesPage = {
  eyebrow: "Case studies",
  title: "How I work, one problem at a time.",
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
    title: "When signed-in users kept getting sent back to login",
    summary:
      "Users who had just signed in kept landing back on the login page. I traced every redirect path and changed how the app tells signed-out visitors apart from signed-in users.",
    tags: ["Troubleshooting", "Root cause analysis", "Authentication", "React", "Clerk"],
    image: weswapcardsScreens.desktopChapters,
    meta: {
      title: "Login troubleshooting on WeSwapCards",
      description:
        "How I investigated reports of signed-in users being sent back to login on WeSwapCards, found the weak point and redesigned the flow.",
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
    whatIDid: [
      "I turned the reports into a technical investigation and looked at every way the app could send someone to sign in.",
    ],
    steps: [
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
    metrics: [
      {
        value: "~13 → 4",
        label: "automatic redirect paths to sign-in in the code (code paths, not user incidents)",
      },
    ],
    outcome: [
      "Automatic redirect paths to sign-in in the code went from about 13 to 4. That's a count of code paths, not of user incidents.",
      "The new background account recovery lets users restore missing account data without losing their session. It's a new path alongside the older redirect flow, which still exists and still contains a forced sign-out path.",
      "Visitors can now explore parts of the product before signing up.",
    ],
    approach: [
      "\"I can't log in\" isn't always an authentication failure. I look at the whole user journey, test my assumptions and fix the underlying behavior, not just the symptom.",
    ],
  },
  {
    slug: "release-bug-triage",
    status: "live",
    category: "resolve-issues",
    title: "Triaging app release bugs for 42 language teams",
    summary:
      "For five years I triaged localization bugs on Booking.com's iOS and Android releases, every two weeks, so they could be fixed before each release reached the stores.",
    tags: ["Bug triage", "Jira", "SLAs", "Escalation", "Multilingual support"],
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
      role: "French Localization Specialist, release triage",
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
    whatIDid: [
      "Every ticket went through the same four steps before it reached the person who would fix it.",
    ],
    steps: [
      { title: "Reproduce", text: "I reproduced each reported issue to confirm it and see exactly what happened." },
      { title: "Check", text: "I checked the ticket was complete before passing it on." },
      { title: "Route", text: "I routed it to engineers or copywriters, depending on what needed fixing." },
      { title: "Follow up", text: "When a ticket was unclear, I followed up with the reporter in chat." },
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
        "During high-volume incidents, I also regularly handled customer service tickets in French, English and Spanish.",
      ],
    },
    outcome: [
      "Engineers and copywriters received tickets that had already been reproduced and checked, and reporters had someone to ask when something wasn't clear.",
    ],
    approach: [
      "I make sure the person fixing a problem has the full picture, and the person who reported it gets a clear answer.",
    ],
    confirm: [
      "A concrete, anonymized example of how you clarified an unclear ticket or instruction for a non-technical reporter.",
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
      role: "French Localization Specialist, trainer",
      context: "Booking.com mobile app testing",
      tools: "Live video sessions",
    },
    problem: [
      "New linguists joined from around the world and needed to test mobile apps. Many were nervous about the technical side.",
    ],
    responsibility: [
      "I trained new linguists worldwide in mobile app testing, onboarded 20+ new hires on my own team, and was the team's go-to person for app and technical issues.",
    ],
    whatIDid: [
      "I ran the training as live video sessions rather than sending people a document to read alone.",
    ],
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
      "I explain technical steps by showing them in context, so people can act on them.",
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
      tools: "Node.js, Clerk, Sentry",
    },
    problem: [
      "Authenticated pages on WeSwapCards stopped returning data. The server looked healthy, and nothing had changed in my code or settings.",
    ],
    responsibility: ["I run WeSwapCards alone, so finding and fixing the outage was on me."],
    whatIDid: [
      "I worked from the symptom to the cause by ruling things out one at a time.",
    ],
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
      "When nothing in my own code has changed, I look at what changed around it. I rule causes out one at a time instead of guessing.",
    ],
    deepDive: {
      label: "Read the full technical deep-dive on my developer portfolio",
      href: links.weswapcardsDeepDive,
      external: true,
    },
    confirm: ["When the outage happened (month and year)."],
  },
  {
    slug: "user-reports-to-fixes",
    status: "live",
    category: "understand-users",
    title: "Turning user reports into product fixes",
    summary:
      "I handle all WeSwapCards support and user reports myself. Here are reports that turned into changes in the product.",
    tags: ["User feedback", "Support", "Product improvement", "Bug fixing"],
    image: {
      label: "WeSwapCards on phone",
      alt: "Placeholder for a screenshot of the WeSwapCards mobile app",
      tone: "pink",
    },
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
    whatIDid: ["These are reports that turned into changes I implemented."],
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
      "I treat a support report as information about the product, not just a ticket to close.",
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
      label: "Booking.com website (public)",
      alt: "Placeholder for a screenshot of the public Booking.com website",
      tone: "sand",
      caption: "Booking.com website (public version)",
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
    whatIDid: ["Each session was built around tasks, so we could watch what people actually did."],
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
    approach: ["I learn the most about a product by watching people use it."],
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
      label: "Guide structure (diagram)",
      alt: "Placeholder for a diagram of the testing guide's structure",
      tone: "sand",
    },
    meta: {
      title: "Testing guides for 42 language teams",
      description:
        "The iOS and Android app testing guides I wrote for 42 language teams at Booking.com, and a sample on writing bug reports engineers can act on.",
    },
    header: {
      role: "Author",
      context: "Booking.com iOS and Android app testing",
      tools: "Jira",
    },
    problem: [
      "Testers in 42 language teams needed one clear reference for setting up the apps, testing them and reporting what they found.",
    ],
    responsibility: ["I wrote the iOS and Android app testing guides for all 42 language teams."],
    whatIDid: ["The guides covered the whole path from installing the app to filing a ticket."],
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
      "When the same question keeps coming up, I write the answer down once so the next person doesn't have to ask.",
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
      label: "User guide (diagram)",
      alt: "Placeholder for a diagram of the user guide",
      tone: "pink",
    },
    meta: {
      title: "Tool rollout at a translation agency",
      description: "How I rolled out SDL Trados across a translation agency, wrote the user guide and trained the team.",
    },
    header: {
      role: "Translation project manager",
      context: "Translation agency",
      tools: "SDL Trados",
    },
    problem: ["The agency moved to SDL Trados, and the whole team needed to learn it."],
    responsibility: ["I rolled out the tool across the agency, wrote the user guide and trained the team."],
    whatIDid: ["The rollout came with two things people could rely on: training and a written guide."],
    steps: [
      { title: "Rolled it out", text: "I rolled out SDL Trados across the agency." },
      { title: "Wrote the guide", text: "I wrote the user guide." },
      { title: "Trained the team", text: "I trained the team to use it." },
    ],
    outcome: ["The team had both training and a written guide to come back to."],
    approach: ["A new tool only helps once people know how to use it, so I pair training with documentation."],
  },
  {
    slug: "product-deep-dive",
    status: "coming-soon",
    category: "understand-users",
    title: "Product deep dive",
    summary:
      "A hands-on teardown of one public SaaS product: how it works, what changes with each setting, where users are likely to get stuck, and a short explainer for a new user.",
    tags: ["Product analysis", "Documentation"],
    image: { label: "Product teardown", alt: "Placeholder for a product teardown image", tone: "pink" },
  },
  {
    slug: "duplicate-data-cleanup",
    status: "coming-soon",
    category: "resolve-issues",
    title: "Duplicate data cleanup",
    summary:
      "Found 350+ duplicate rows in PostgreSQL caused by a race condition in check-then-insert code, and fixed it with upserts and a unique index.",
    tags: ["PostgreSQL", "Root cause analysis"],
    image: { label: "Database diagram", alt: "Placeholder for a database diagram", tone: "sand" },
  },
  {
    slug: "api-debugging",
    status: "coming-soon",
    category: "resolve-issues",
    title: "API debugging walkthrough",
    summary:
      "Reproducing an expired token, a bad payload and a rejected webhook signature, step by step, in an API client.",
    tags: ["APIs", "Troubleshooting"],
    image: { label: "API request and response", alt: "Placeholder for an API request and response", tone: "pink" },
  },
  {
    slug: "monitoring-after-outage",
    status: "coming-soon",
    category: "prevent-repeats",
    title: "Monitoring after the outage",
    summary: "What I added so the next failure shows up right away.",
    tags: ["Monitoring", "Sentry"],
    image: { label: "Health check", alt: "Placeholder for a health check screenshot", tone: "sand" },
  },
  {
    slug: "help-center-articles",
    status: "coming-soon",
    category: "prevent-repeats",
    title: "Help center articles, EN + FR",
    summary: "Short articles for WeSwapCards users on sign-in issues, failed trades and account deletion.",
    tags: ["Knowledge base", "Documentation"],
    image: { label: "Help article", alt: "Placeholder for a help center article", tone: "pink" },
  },
  {
    slug: "onboarding-video",
    status: "coming-soon",
    category: "enable-users",
    title: "Onboarding video",
    summary: "A 3-minute walkthrough of one WeSwapCards feature for a first-time user.",
    tags: ["Onboarding", "Video"],
    image: { label: "Video still", alt: "Placeholder for a still from the onboarding video", tone: "sand" },
  },
];
