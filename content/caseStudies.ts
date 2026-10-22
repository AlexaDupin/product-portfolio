import { weswapcardsScreens } from "./screens";
import { caseStudyPath } from "./site";
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
  example: "Example",
  flow: "How the new process worked",
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
  "in-app-bug-reporting",
  "training-testers",
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
      "The mobile support team had a 48-hour SLA on these bugs, so they could be fixed before the release reached the stores. Each ticket had to be real, complete and in the right hands quickly.",
    ],
    responsibility: [
      "I triaged the tickets reported by 42 language teams: 20 to 100 bug and improvement tickets per release. I also answered the teams' questions through the team inbox and chat.",
    ],
    headlines: {
      problem: "Bugs had to be fixed before each release reached the stores",
      responsibility: "I triaged the tickets from 42 language teams",
      whatIDid: "I triaged every ticket the same way and kept track of what kept going wrong.",
      outcome: "About 90% of localization bugs were fixed before release.",
    },
    steps: [
      { title: "Reproduce", text: "I reproduced each reported issue to confirm it and see exactly what happened." },
      {
        title: "Complete and clarify",
        text: "I completed missing details and edited unclear tickets, so the engineer or copywriter could act on them right away.",
      },
      { title: "Route", text: "I routed it to engineers or copywriters, depending on what needed fixing." },
      { title: "Follow up", text: "When something was missing, I went back to the reporter before passing the ticket on." },
      {
        title: "Document recurring issues",
        text: "I gathered the most common problems in bug reporting, such as tickets missing information and issues teams ran into while testing, and added them to the app testing FAQ and runbook.",
      },
    ],
    metrics: [
      { value: "5 years", label: "of triage on biweekly app releases" },
      { value: "42", label: "language teams reporting" },
      { value: "20–100", label: "tickets per release in Jira" },
      { value: "48 h", label: "SLA for the mobile support team" },
    ],
    communication: {
      title: "Working with non-technical reporters",
      paragraphs: [
        "Most reporters were linguists rather than engineers, so I asked for missing details in plain terms, in chat.",
        "Between releases, the testing guides I wrote gave them a reference to check before asking.",
      ],
    },
    outcome: [
      "Each ticket reached the right engineer or copywriter, complete and clear enough to act on, so they could fix it before the release went out.",
    ],
    approach: [
      "I check that each ticket has what the engineer or copywriter needs to fix it, I follow up with the reporter when something is unclear, and I add recurring problems to the documentation.",
    ],
    links: {
      end: [{ label: "The Jira process started as a spreadsheet", href: caseStudyPath("in-app-bug-reporting") }],
    },
  },
  {
    slug: "in-app-bug-reporting",
    status: "live",
    category: "improve-processes",
    title: "Moving bug reporting from a spreadsheet to an in-app tool",
    summary:
      "I worked with an engineer to replace manual bug reporting in Google Sheets with an in-app tool that creates Jira tickets automatically, then rolled it out to 42 language teams.",
    tags: [
      "Process improvement",
      "Cross-team collaboration",
      "Jira",
      "User acceptance testing",
      "Rollout",
      "Training",
      "Documentation",
    ],
    image: {
      label: "Testing on a phone",
      alt: "Hands holding a phone with an app open, in front of a laptop on a desk",
      tone: "pink",
      src: "/images/photo-phone-testing.jpg",
      width: 1600,
      height: 1200,
      blurInHero: true,
    },
    meta: {
      title: "Moving bug reporting from a spreadsheet to an in-app tool",
      description:
        "How I worked with an engineer at Booking.com to replace spreadsheet bug reporting with an in-app tool that creates Jira tickets, and rolled it out to 42 language teams.",
    },
    header: {
      role: "Localization Specialist, Mobile Support Team",
      context: "Booking.com iOS and Android apps, biweekly releases, 42 language teams",
      tools: "Jira, Google Sheets, in-app reporting tool, Workplace",
    },
    problem: [
      "Language teams reported localization bugs in a shared Google Sheet. Every report took manual work: taking a screenshot, creating a short link for it, then typing in the device, app version and other technical details.",
      "Engineers didn't check the sheet consistently, so many localization bugs were missed and carried over from one release to the next.",
    ],
    responsibility: [
      "I represented the localization side, tested the tool and rolled it out to the language teams. The engineer built it.",
    ],
    headlines: {
      problem: "Bug reports sat in a sheet engineers didn't check consistently",
      responsibility: "I represented the people reporting the bugs",
      whatIDid: "I presented the process, tested every build and rolled the tool out.",
      outcome: "Localization bugs moved into the engineers' sprint.",
    },
    steps: [
      {
        title: "Presented the process",
        text: "I presented the reporting process to the language teams and stakeholders at the team's annual meeting in Amsterdam. An engineer's questions in the Q&A led to the idea of an in-app tool.",
      },
      {
        title: "Explained what reporting needed",
        text: "I explained what localization reporting needed: what a useful bug report had to include for engineers and copywriters to act on it.",
      },
      {
        title: "Tested every build",
        text: "I tested each build and gave feedback to fine-tune the tool, then tested the final version before it went to the language teams.",
      },
      {
        title: "Rolled it out",
        text: "I rolled it out with the app testing guide I wrote, an announcement on Workplace and training sessions. All 42 language teams switched to the new process.",
        link: { label: "Read about the testing guides", href: caseStudyPath("testing-guides") },
      },
    ],
    flow: {
      headline: "From a shake of the phone to a fix before release",
      label: "The new reporting process, step by step",
      nodes: [
        { title: "Shake the app", detail: "A reporting tool pops up." },
        { title: "Report the bug", detail: "The screenshot, device and app version are added automatically." },
        { title: "Jira ticket", detail: "Submitting the report creates it." },
        { title: "Review", detail: "Each ticket is reviewed and assigned to an engineer or a copywriter." },
        { title: "Engineer or copywriter", detail: "They fix the bug or the copy." },
        { title: "Fixed before release", detail: "Fixing localization bugs became part of the engineers' sprint." },
      ],
    },
    beforeAfter: {
      beforeLabel: "Before",
      afterLabel: "After",
      rows: [
        { before: "Bugs listed in a shared Google Sheet.", after: "Bugs reported from inside the app, with a shake." },
        {
          before: "Screenshots and short links made by hand, technical details typed in.",
          after: "Screenshot and technical details added automatically.",
        },
        {
          before: "Engineers didn't check the sheet consistently.",
          after: "A Jira ticket is created, reviewed and assigned.",
        },
        {
          before: "Many localization bugs missed and carried over between releases.",
          after: "Localization bugs are part of the engineers' sprint.",
        },
      ],
    },
    outcome: [
      "Reporting a bug no longer meant taking screenshots or typing technical details by hand.",
      "About 90% of localization bugs were fixed before release. I tracked this in Jira by filtering unresolved bugs by release version.",
      "Reports reached engineers in Jira, where they already worked. Fixing localization bugs became part of the engineers' sprint, to be done before each store release instead of carried over.",
    ],
    approach: [
      "I look for where a process breaks, explain the need clearly to the people who can fix it, and make sure the change works for everyone who has to use it.",
    ],
    links: {
      end: [
        { label: "Read about the testing guides I wrote", href: caseStudyPath("testing-guides") },
        { label: "Read how I triaged the tickets in Jira", href: caseStudyPath("release-bug-triage") },
      ],
    },
  },
  {
    slug: "sentry-login-alert",
    status: "live",
    category: "resolve-issues",
    title: "A Sentry login alert, investigated end to end",
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
      title: "A Sentry login alert, investigated end to end",
      description:
        "How I triaged a high-priority Sentry alert about login verification failures on WeSwapCards, narrowed it down with production evidence, and removed a single point of failure.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards",
      timeline: "October 2026",
      tools: "Sentry, Clerk, Node.js",
    },
    problem: [
      "Sentry raised a high-priority alert: 11 login verification failures on the live API, with no error details, because Clerk discards them for this error type.",
      "A small issue, separate from the July outage: one user, 36 seconds, resolved on its own. I investigated it right away.",
    ],
    responsibility: [
      "I own the product, so I triaged the alert, led the investigation and decided what to change. I worked with an AI coding assistant and approved every step that touched production.",
    ],
    headlines: {
      problem: "An urgent alert with no error details",
      responsibility: "I triaged it and decided what to change",
      whatIDid: "I checked the priority first, then narrowed it down before changing anything.",
      outcome: "Login checks no longer depend on a network call to Clerk.",
    },
    steps: [
      {
        title: "Assessed the priority",
        text: "Sentry labeled it high priority, but the report showed a single user and a short burst that had already stopped. No one was blocked, so I had time to dig into the root cause.",
      },
      {
        title: "Read the report",
        text: "I traced the error to the login check in the API. Two possible causes: a network failure while fetching Clerk's signing key, or a bad login token from one device.",
      },
      {
        title: "Narrowed it down",
        text: "All the failures came at once, from one user on one iPhone, while their dashboard loaded.",
      },
      {
        title: "Checked the evidence on production, read-only",
        text: "The server access log showed the failures lasted 36 seconds. No other user was affected, and the user kept using the app normally.",
      },
      {
        title: "Removed a single point of failure",
        text: "I set Clerk to verify logins with a locally stored public key instead of downloading it each time. A setting change, with no code changes.",
      },
      {
        title: "Tested before trusting",
        text: "I tested the key format against Clerk's own verification code, then checked the deployed value, the health endpoint and real logins on web and mobile.",
      },
    ],
    outcome: [
      "I confirmed it was a one-off issue that cleared on its own. The root cause wasn't proven, so I removed one of the two possible causes: a network problem can no longer fail a login.",
      "This alert existed because of the monitoring I added after the July outage.",
    ],
    approach: [
      "I assess the priority first. Then I narrow it down step by step, test my assumptions before acting, and choose the change that removes risk without creating new problems.",
    ],
    usage: {
      title: "How priority shapes my response",
      items: [
        {
          title: "Users are blocked",
          text: "I work on it right away, to get them back to using the app.",
        },
        {
          title: "No one is blocked",
          text: "I take the time to find the root cause, so the same issue doesn't happen again.",
        },
      ],
    },
    links: {
      outcome: { label: "Read how I added that monitoring", href: caseStudyPath("monitoring-after-outage") },
    },
  },
  {
    slug: "duplicate-data-cleanup",
    status: "live",
    category: "resolve-issues",
    title: "Cleaning up duplicate card records",
    summary:
      "I removed 250+ duplicate records from the database and fixed the code that let them happen, so they can't come back.",
    tags: ["PostgreSQL", "SQL", "Data integrity", "Data cleaning", "Root cause analysis", "Concurrency"],
    image: { label: "Data blocks", alt: "An abstract grid of blue blocks", tone: "sand", src: "/images/photo-data-blocks.jpg", width: 1600, height: 1000 },
    meta: {
      title: "Cleaning up duplicate card records",
      description:
        "How I found and removed 250+ duplicate records in the WeSwapCards PostgreSQL database, then fixed the cause in the app and in the database so duplicates can't be inserted again.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards (web + mobile, Node.js/Express API, PostgreSQL)",
      timeline: "August–September 2025",
      tools: "PostgreSQL, SQL, Node.js",
    },
    problem: [
      "WeSwapCards stores each user's card collection in one table: which cards they own and whether they have duplicates to trade. Nothing in the database stopped the same card from being saved twice for the same user.",
      "The app checked whether a card existed before inserting it, in two separate steps. If two requests arrived at almost the same time, both could find no card and both could insert one. Some database operations were also launched without waiting for them to finish, which made this more likely. The result was duplicate records in users' collections.",
    ],
    responsibility: ["I own the whole product, so I investigated the data, cleaned it up and fixed the cause."],
    headlines: {
      problem: "The same card could be saved twice for one user",
      responsibility: "I cleaned up the data and fixed the cause",
      whatIDid: "I removed the duplicates, then blocked new ones in the app and in the database.",
      outcome: "The same card can no longer be saved twice.",
    },
    steps: [
      {
        title: "Investigated the data",
        text: "I looked through the collections table in PostgreSQL and found 250+ duplicate records.",
      },
      { title: "Removed the duplicates", text: "I deleted them in bulk with a SQL query, run directly in the database." },
      {
        title: "Made saving a card one step",
        text: "I replaced the two-step check-then-insert with a single database operation (an upsert) that creates the record or updates the existing one. For single cards, it also skips the update when the value hasn't changed. Bulk updates of a whole chapter use the same create-or-update approach.",
      },
      {
        title: "Added a rule in the database",
        text: "I added a unique index on the user and card combination, so the database itself rejects any duplicate, whatever part of the app tries to insert it.",
      },
    ],
    metricsTitle: "Result",
    metrics: [{ value: "250+", label: "duplicate records removed" }],
    beforeAfter: {
      beforeLabel: "Before",
      afterLabel: "After",
      rows: [
        {
          before: "Two separate steps: check, then insert.",
          after: "One upsert that creates or updates the record.",
        },
        {
          before: "No rule in the database against duplicates.",
          after: "A unique index on the user and card combination.",
        },
      ],
    },
    outcome: [
      "The 250+ duplicates are gone, and the unique index confirms none remained when it was created.",
      "The app handles repeated or simultaneous requests safely, and repeating the same operation no longer creates extra records.",
    ],
    approach: [
      "When I clean up bad data, I also find out why it got there and fix the cause at the level where it can't be bypassed.",
    ],
  },
  {
    slug: "user-reports-to-fixes",
    status: "live",
    category: "understand-users",
    title: "Turning user reports into product fixes",
    summary:
      "I sort every WeSwapCards report by priority, then fix bugs and improve the product. Here are five reports that became changes.",
    tags: ["User feedback", "Support", "Prioritization", "Product improvement", "Bug fixing"],
    image: weswapcardsScreens.iosChapters,
    meta: {
      title: "User reports to fixes on WeSwapCards",
      description:
        "How I prioritize WeSwapCards user reports, and five that became changes in the product, from bulk card entry to a missing Forgot password link.",
    },
    header: {
      role: "Solo developer and support",
      context: "WeSwapCards web and mobile apps",
      timeline: "Since launch in February 2025",
    },
    problem: [
      "Collectors use WeSwapCards to find trade partners and message each other. When something gets in their way, they report it to me.",
    ],
    responsibility: ["I read every report, decide what to do with it and ship the change."],
    headlines: {
      problem: "Collectors tell me when something gets in their way",
      responsibility: "I handle every report, from triage to release",
      whatIDid: "I sort each report, then act on it by priority.",
      outcome: "Five reports, five changes in the product.",
    },
    steps: [
      { title: "Fix bugs", text: "I fix bugs in order of how much they block users." },
      { title: "Prioritize improvements", text: "I rank improvements by how people actually use the app." },
      { title: "Keep the rest", text: "Other suggestions go on an ideas list for later." },
    ],
    beforeAfter: {
      priorityLabel: "Priority",
      beforeLabel: "What users reported",
      afterLabel: "What I changed",
      rows: [
        {
          priority: { level: "high", label: "High" },
          before: "Entering cards one by one put off new users, and some stopped using the app. One wrote to me about it.",
          after: "I added bulk actions: add all the cards of a chapter at once, or mark them all as duplicates.",
        },
        {
          priority: { level: "moderate", label: "Moderate" },
          before: "Finding several cards meant searching one at a time, with the page reloading after each search.",
          after: "Each chapter now lists all its cards, so users can pick several in a few clicks.",
        },
        {
          priority: { level: "moderate", label: "Moderate" },
          before: "The mobile apps had no \"Forgot password\" link: the sign-in component used on the web doesn't exist on mobile.",
          after: "I added the link to the mobile apps.",
        },
        {
          priority: { level: "low", label: "Low" },
          before: "Tapping Send twice quickly sent the same message twice.",
          after: "The Send button is disabled until the message has gone through.",
        },
        {
          priority: { level: "low", label: "Low" },
          before: "Adding cards and updating their status happened on two separate pages. A user suggested combining them.",
          after: "I merged them into one page.",
        },
      ],
    },
    outcome: [],
    approach: ["I read each report for what it says about the product, and I work first on what affects users most."],
  },
  {
    slug: "training-testers",
    status: "live",
    category: "enable-users",
    title: "Training testers around the world",
    summary:
      "I trained 30+ localization specialists worldwide and 15 people on my own team in app testing, over live video and on site.",
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
        "How I trained 30+ localization specialists worldwide in Booking.com's app testing process through live video sessions, and 15 people on my own team on site.",
    },
    header: {
      role: "Localization Specialist, Mobile Support Team",
      context: "Booking.com mobile app testing",
      tools: "On-site and live video sessions",
    },
    problem: [
      "Localization specialists around the world had to test each biweekly iOS and Android release in their language: install the beta app, set up their device, run the tests and report bugs in Jira. Most were linguists rather than engineers, and the process could feel daunting.",
    ],
    responsibility: [
      "I ran the app testing training for teams abroad and for my own team.",
    ],
    headlines: {
      problem: "Testers were nervous about the technical side",
      responsibility: "I was the team's go-to person for app testing",
      whatIDid: "I ran the training on site for my team and over live video for teams abroad.",
      outcome: "Testers could work on their own, and knew who to ask.",
    },
    steps: [
      {
        title: "Scheduled across time zones",
        text: "I set up sessions at times that worked for people from Asia to South America.",
      },
      {
        title: "Trained full teams, then newcomers",
        text: "I trained whole teams first, then individual people as they joined.",
      },
      {
        title: "Ran a live test together",
        text: "Each session walked through a real test, step by step.",
      },
      {
        title: "Answered testing questions",
        text: "Once they were testing on their own, they came to me with app and technical questions.",
      },
    ],
    metrics: [
      { value: "30+", label: "localization specialists trained worldwide in app testing" },
      { value: "15", label: "people on my own team trained in app testing" },
    ],
    communication: {
      title: "Explaining technical steps to non-technical people",
      paragraphs: [
        "Walking through a live test together meant they saw each step happen on screen and could ask questions as they came up, instead of working it out alone from written instructions.",
      ],
    },
    outcome: [
      "Language teams could run the check in the recommended hour, so they met their 48-hour testing deadline.",
      "After the guide and the training sessions, non-actionable tickets dropped sharply.",
    ],
    approach: [
      "I adapt how I teach to the people I'm training: on site when I can, over video across time zones, with time for questions either way.",
    ],
    links: {
      outcome: { label: "Read about the testing guide", href: caseStudyPath("testing-guides") },
    },
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
      "The outage lasted about 12 hours. At first I took it for a hosting issue on o2switch's side and expected it to clear on its own. Once I started investigating, I found the cause in the server logs and fixed it within an hour.",
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
        text: "The host had upgraded Node. An old add-on in my code (a node-fetch polyfill) replaced a tool the new Node already had built in, and the sign-in check depended on the built-in one. Signed-in requests failed while everything else looked normal.",
      },
      { title: "Fixed it", text: "A one-line guard makes the old add-on load only when Node has no built-in fetch." },
      {
        title: "Added monitoring",
        text: "I added Sentry error tracking and a health endpoint that checks the services the API depends on.",
      },
    ],
    outcome: [
      "Authenticated pages returned data again after the fix. The hours lost before I started investigating are why I added monitoring: Sentry tracing and the health endpoint now give me more visibility into the API and the services it depends on.",
    ],
    approach: [
      "When something breaks without a code change, I also check the environment: the host, the runtime and the services the app depends on. I test one possible cause at a time.",
    ],
    links: {
      end: [{ label: "Read what I added after the outage: monitoring", href: caseStudyPath("monitoring-after-outage") }],
    },
  },
  {
    slug: "testing-guides",
    status: "live",
    category: "improve-processes",
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
      "Each release, language teams had 48 hours to check the app in their language. Testers in 42 teams needed one clear reference for setting up the apps, testing them and reporting what they found.",
    ],
    responsibility: ["I wrote the iOS and Android app testing guides for all 42 language teams."],
    headlines: {
      problem: "42 language teams needed one clear testing reference",
      responsibility: "I wrote the guides for all 42 teams",
      whatIDid: "The guides covered the whole path, from installing the app to filing a ticket.",
      outcome: "Teams met the 48-hour deadline and asked fewer questions.",
    },
    steps: [
      { title: "Install", text: "Installing the beta app." },
      { title: "Set up", text: "Getting the app and device ready for testing." },
      { title: "Test", text: "Running the test scenarios. The guide recommended about an hour for the check." },
      {
        title: "Report",
        text: "Reporting bugs and improvements in Jira with the information engineers and copywriters need.",
      },
    ],
    excerpt: {
      title: "How to write a bug report engineers can act on",
      icon: "document",
      items: [
        {
          text: "Start the title with the platform, app version, language, funnel and a short description of what's wrong.",
          example: "Example: \"iOS 7.8 | FR | Payment | Button text cut off\"",
        },
        {
          text: "List the steps to reproduce it, including the search you made if relevant.",
          example: "Example: one room in Paris, October 20 to 22, for 2 people.",
        },
        "Say what you expected to happen and what happened instead.",
        "For a translation issue, add the string's tag name, the English source text and a back translation from your language.",
      ],
    },
    outcome: [
      "The guide helped language teams meet their 48-hour deadline, and they asked our team fewer questions.",
      "After the guide and the training sessions, non-actionable tickets dropped sharply.",
    ],
    approach: [
      "When people ask the same question more than once, I add the answer to a guide.",
    ],
    links: {
      end: [
        {
          label: "The guide also covered the in-app reporting tool: read how it replaced a spreadsheet",
          href: caseStudyPath("in-app-bug-reporting"),
        },
      ],
    },
  },
  {
    slug: "monitoring-after-outage",
    status: "live",
    category: "improve-processes",
    title: "Adding monitoring after a production outage",
    summary:
      "After a silent outage, I added error tracking and a health check, so backend errors are recorded in Sentry and I can check the server's state on demand.",
    tags: ["Monitoring", "Sentry", "Error handling", "API"],
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
        "How I added Sentry error tracking and a health check to the WeSwapCards API after a silent production outage, and what that monitoring does and doesn't cover.",
    },
    header: {
      role: "Solo developer and support",
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
      whatIDid: "I added error tracking and a health check, and started handling errors in one place.",
      outcome: "Backend errors now show up in Sentry instead of going unnoticed.",
    },
    steps: [
      {
        title: "Added error tracking",
        text: "I added Sentry, a service that records server errors as they happen, to the backend. API errors, including server errors (500s), are now recorded with enough detail to find the cause, and a share of requests is traced to show where time goes.",
      },
      {
        title: "Added a health check",
        text: "I added /api/health, an address I can open to check the server. It tests the database, the settings the app needs and Clerk's sign-in service, and reports whether the server is healthy or degraded.",
      },
      {
        title: "Started centralizing error handling",
        text: "I added one error handler that reports to Sentry and returns a consistent response. Part of the API uses it so far; other routes still return their own errors.",
      },
    ],
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
      "Since then, Sentry has reported one backend error. I investigated it as soon as it came in and confirmed it was a one-off issue that didn't recur.",
    ],
    approach: [
      "After fixing a bug, I also make sure the next failure will be visible, and I'm clear about what my monitoring does and doesn't cover.",
    ],
    links: {
      problem: { label: "Read the outage case study", href: caseStudyPath("production-outage") },
      outcome: { label: "Read the Sentry alert case study", href: caseStudyPath("sentry-login-alert") },
    },
  },
  {
    slug: "tool-rollout",
    status: "live",
    category: "enable-users",
    title: "Rolling out a new tool at a translation agency",
    summary:
      "I rolled out SDL Trados at a translation agency and trained the team. Using its word counts and repetition analysis cut quote preparation time by 40 to 60%.",
    tags: ["Tool rollout", "Training", "Documentation", "Process improvement"],
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
      description:
        "How I rolled out SDL Trados at a translation agency, trained a team of four and cut quote preparation time by 40 to 60%.",
    },
    header: {
      role: "Translation Project Manager",
      context: "Translation agency, team of four",
      tools: "SDL Trados",
    },
    problem: ["The agency moved to SDL Trados, and the team of four needed to learn it."],
    responsibility: ["I led the rollout across the agency, wrote the user guide and trained the team."],
    headlines: {
      problem: "A team of four had to switch to a new tool",
      responsibility: "I led the rollout, from setup to training",
      whatIDid: "I connected the tool to our quoting, then taught the team to use it.",
      outcome: "Quotes took 40 to 60% less time to prepare.",
    },
    steps: [
      {
        title: "Brought it into quoting",
        text: "I integrated the tool's word counts and repetition analysis into how we prepared quotes.",
      },
      { title: "Wrote the guide", text: "I wrote a user guide the team could refer to after training." },
      { title: "Trained the team", text: "I trained my colleagues to use it in their daily work." },
    ],
    metricsTitle: "Result",
    metrics: [{ value: "40–60%", label: "less time to prepare a quote" }],
    outcome: [
      "With the word counts and repetition analysis built in, preparing a quote took 40 to 60% less time. After the training, the team also had a written guide to come back to.",
    ],
    approach: ["When I roll out a tool, I connect it to the work people already do, then train them and leave a guide behind."],
  },
  {
    slug: "usability-research",
    status: "live",
    category: "understand-users",
    title: "Usability research at Booking.com",
    summary:
      "I moderated 30+ usability sessions with French-speaking users to find friction in the localized product, and helped turn it into hypotheses to test.",
    tags: ["User research", "Usability testing", "Moderation", "Localization"],
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
        "How I prepared and moderated 30+ usability sessions with French-speaking Booking.com users to find friction in the localized product, and helped turn it into hypotheses to test.",
    },
    header: {
      role: "Usability session moderator, French Localization Specialist",
      context: "Booking.com website, apps and partner platform",
    },
    problem: [
      "Product teams ran usability studies on specific topics, such as ski trips or single-unit accommodations. The sessions looked for friction in the localized product, which could come from the translation or from the product itself.",
    ],
    responsibility: [
      "After a three-day moderator training, I moderated the sessions with French-speaking users. The product team wrote the scripts; I prepared and ran each session, then contributed to the hypotheses that came out of it as a French expert.",
    ],
    headlines: {
      problem: "Friction could come from the translation or the product",
      responsibility: "I led the French-speaking sessions",
      whatIDid: "I prepared each session with the product team, ran it and helped read the results.",
      outcome: "Product teams trusted me to lead the French sessions.",
    },
    steps: [
      {
        title: "Understood the goal",
        text: "I met with the product team to understand the pain point and what they wanted to learn.",
      },
      { title: "Prepared the journey", text: "From the scenario they gave me, I prepared the user's journey before each session." },
      {
        title: "Led the session",
        text: "I led the session in French, asked participants to complete tasks and watched where they struggled.",
      },
      {
        title: "Suggested what to test",
        text: "I turned user behavior into hypotheses to test, including A/B tests when the wording might be causing friction.",
      },
    ],
    example: {
      title: "Free cancellation dates",
      paragraphs: [
        "In one session, a French-speaking user was asked what \"free cancellation until September 25\" meant. They weren't sure whether they could still cancel for free on September 25 itself. I agreed the wording was unclear: a guest who guessed wrong could pay an unexpected fee or contact customer service to check.",
        "I suggested an A/B test to the copywriter and product team, comparing the current wording with \"before September 25\". The product team ran it across all languages and tracked conversion, cancellations and customer service tickets. The test was conclusive, and the team applied the change to the English source text and every other language.",
      ],
    },
    metrics: [{ value: "30+", label: "usability sessions moderated" }],
    outcomeLabel: "My impact",
    outcome: [
      "The product teams didn't speak French, so they relied on me to lead each session and make it as useful as possible.",
      "Their feedback on my work was consistently positive.",
      "One of my suggestions led to new cancellation wording in every language on the site.",
    ],
    approach: ["I prepare with the team that owns the question, so I know what to watch for during the session."],
  },
  {
    slug: "help-center-articles",
    status: "coming-soon",
    hidden: true,
    category: "enable-users",
    title: "Help center articles",
    summary: "Short English articles for WeSwapCards users on sign-in issues, failed trades and account deletion.",
    tags: ["Knowledge base", "Documentation"],
    image: { label: "Reading on a tablet", alt: "A person holding a tablet", tone: "pink", src: "/images/photo-tablet-reading.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "api-debugging",
    status: "coming-soon",
    hidden: true,
    category: "resolve-issues",
    title: "API debugging walkthrough",
    summary:
      "Reproducing an expired token, a bad payload and a rejected webhook signature, step by step, in an API client.",
    tags: ["APIs", "Troubleshooting"],
    image: { label: "Code on screen", alt: "Code on a computer screen", tone: "pink", src: "/images/photo-code-screen.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "product-deep-dive",
    status: "coming-soon",
    hidden: true,
    category: "understand-users",
    title: "Product deep dive",
    summary:
      "A hands-on teardown of one public SaaS product: how it works, what changes with each setting, where users are likely to get stuck, and a short explainer for a new user.",
    tags: ["Product analysis", "Documentation"],
    image: { label: "Laptop work", alt: "A person typing on a laptop at a desk", tone: "pink", src: "/images/photo-laptop-work.jpg", width: 1600, height: 1000 },
  },
  {
    slug: "onboarding-video",
    status: "coming-soon",
    hidden: true,
    category: "enable-users",
    title: "Onboarding video",
    summary: "A 3-minute walkthrough of one WeSwapCards feature for a first-time user.",
    tags: ["Onboarding", "Video"],
    image: { label: "Recording desk", alt: "A desk set up for recording, with a monitor and a studio light", tone: "sand", src: "/images/photo-recording-desk.jpg", width: 1600, height: 1000 },
  },
];
