const roles = {
  resource: { label: "Resource Visitor (Level 1)", level: 1 },
  qualified: { label: "Qualified Lead (Level 2)", level: 2 },
  member: { label: "Active Club Member (Level 3)", level: 3 }
};

const pages = {
  "start-here": {
    title: "Start Here",
    subtitle: "How to use the portal and what each level can access.",
    minLevel: 1,
    navLabel: "Start Here",
    sections: [
      { h: "Level 1: Resource Center", p: "Newsletters, videos, reports, events." },
      { h: "Level 2: Qualified Library", p: "Track record summary, club intro, GFD and join process." },
      { h: "Level 3: Member Vault", p: "Active deals, full package rooms, pipeline watchlist, priority Q&A." }
    ]
  },
  "resource-center": {
    title: "Resource Center",
    subtitle: "Premium, structured library with clear access rules.",
    minLevel: 1,
    navLabel: "Resource Center",
    sections: [
      { h: "Newsletter Room", p: "Weekly newsletters and updates by topic/date." },
      { h: "Video Hub", p: "Curated YouTube playlists (strategy, market, Q&A)." },
      { h: "Events & Notifications", p: "Calendar, RSVP links, and replay access." },
      { h: "Reports Library", p: "2026 report and research notes." }
    ]
  },
  "qualified-library": {
    title: "Qualified Library",
    subtitle: "Expanded content with credibility resources and sign-up path.",
    minLevel: 2,
    navLabel: "Qualified Library",
    sections: [
      { h: "Track Record (Summary)", p: "Standardized one-page project summaries." },
      { h: "How to Read Track Record", p: "Definitions, context, and disclaimers." },
      { h: "Sample Full Package Index", p: "Preview-only folder structure and document types." },
      { h: "Club / GFD Guide", p: "Refundable deposit process, boundaries, and join steps." }
    ]
  },
  "member-vault": {
    title: "Club Member Vault",
    subtitle: "Member-only channels and full package data rooms.",
    minLevel: 3,
    navLabel: "Member Library",
    sections: [
      { h: "Member Status & Benefits", p: "Priority access and update cadence." },
      { h: "Welcome Package", p: "New member checklist and onboarding actions." },
      { h: "Priority Q&A", p: "Single entry channel with response expectations." },
      { h: "Active Deals", p: "Deal index + per-deal package rooms." }
    ]
  },
  newsletters: {
    title: "Newsletter Room",
    subtitle: "Archive of market and execution updates.",
    minLevel: 1,
    sections: [
      { h: "2026-02 Market Pulse", p: "Industrial logistics and data infrastructure trends." },
      { h: "2026-01 Execution Notes", p: "Underwriting thresholds and review cadence." },
      { h: "2025-Q4 Recap", p: "Dealflow quality framework and gating criteria." }
    ]
  },
  youtube: {
    title: "YouTube Video Hub",
    subtitle: "Curated playlists and topic navigation.",
    minLevel: 1,
    sections: [
      { h: "Market Primer", p: "Core framework videos for new leads." },
      { h: "Deal Deep Dive", p: "Recorded mock diligence walkthroughs." },
      { h: "Member Q&A Highlights", p: "Selected Q&A clips with policy boundaries." }
    ]
  },
  events: {
    title: "Events & Notifications",
    subtitle: "Calendar, RSVP, and replay entry points.",
    minLevel: 1,
    sections: [
      { h: "2026-03-04 Outlook Webinar", p: "RSVP: demo.ufund/events/outlook" },
      { h: "2026-03-18 Office Hours", p: "Replay posted within 24h." },
      { h: "Replay Library", p: "Indexed by topic and difficulty." }
    ]
  },
  reports: {
    title: "Reports Library",
    subtitle: "2026 report and whitepapers.",
    minLevel: 1,
    sections: [
      { h: "UFUND 2026 Report", p: "Strategy, governance, and process disclosures." },
      { h: "Whitepaper: Risk Layering", p: "Downside controls in private transactions." },
      { h: "Note: Liquidity Planning", p: "Allocation pacing and commitment timing." }
    ]
  },
  portfolio: {
    title: "Project Portfolio / Track Record",
    subtitle: "Standardized one-page summaries.",
    minLevel: 2,
    sections: [
      { h: "Harbor Logistics (2024)", p: "Status: Operating. Summary metrics only." },
      { h: "Sunbelt Multifamily (2023)", p: "Status: Exited. Process transparency sample." },
      { h: "Edge Data Infra (2025)", p: "Status: In execution. No forecast guarantee." }
    ]
  },
  "trackrecord-guide": {
    title: "How to Read Track Record",
    subtitle: "Definitions and boundary disclaimers.",
    minLevel: 2,
    sections: [
      { h: "Definitions", p: "MOIC, hold period, realization state, gross vs net framing." },
      { h: "Context", p: "Vintage year and market conditions matter." },
      { h: "Boundary", p: "Past examples are not predictive of future outcomes." }
    ]
  },
  "sample-package": {
    title: "Sample Full Package Index (Preview)",
    subtitle: "Folder structure and doc types only.",
    minLevel: 2,
    sections: [
      { h: "01 Overview", p: "Project summary and sponsor profile." },
      { h: "02 Diligence", p: "Risk map and scenario notes." },
      { h: "03 Legal", p: "PPM/subscription/disclosures (if applicable)." },
      { h: "04 Updates", p: "Dated changelog entries." }
    ]
  },
  "club-system": {
    title: "Club System Introduction",
    subtitle: "What membership is and what it includes.",
    minLevel: 2,
    sections: [
      { h: "Model", p: "Structured access with priority channels." },
      { h: "Privileges", p: "Member library, active deals, watchlist, and Q&A queue." },
      { h: "Policy", p: "All communication follows disclosure and suitability rules." }
    ]
  },
  gfd: {
    title: "GFD FAQ & Process",
    subtitle: "Refundable deposit guidance.",
    minLevel: 2,
    sections: [
      { h: "Nature", p: "Refundable deposit, not a fee." },
      { h: "Boundary", p: "Cannot be used directly as investment subscription capital." },
      { h: "Refund", p: "Request form -> compliance check -> refund to original remitter." }
    ]
  },
  signup: {
    title: "How to Join / Sign-up",
    subtitle: "Information required and expected timeline.",
    minLevel: 2,
    sections: [
      { h: "Required Info", p: "Identity, jurisdiction, investor profile, contact details." },
      { h: "Timeline", p: "1-2 business days for initial review." },
      { h: "Next", p: "Receive onboarding pack and status confirmation." }
    ]
  },
  "member-status": {
    title: "Member Status & Benefits",
    subtitle: "Special status and privileges.",
    minLevel: 3,
    sections: [
      { h: "Status", p: "Active Club Member." },
      { h: "Benefits", p: "Priority updates, full package rooms, and watchlist access." },
      { h: "Cadence", p: "Weekly digest plus event reminders." }
    ]
  },
  welcome: {
    title: "Club Member Welcome Package",
    subtitle: "Start-here for new members.",
    minLevel: 3,
    sections: [
      { h: "Day 1", p: "Read notices and set account preferences." },
      { h: "Day 3", p: "Review track record guide and package index." },
      { h: "Day 7", p: "Attend onboarding webinar and submit first Q&A." }
    ]
  },
  "priority-qa": {
    title: "Priority Q&A Channel",
    subtitle: "Unified entry and service boundaries.",
    minLevel: 3,
    navLabel: "Priority Q&A",
    sections: [
      { h: "Entry", p: "demo.ufund/member/qa-ticket (mock)." },
      { h: "Target SLA", p: "Initial reply within 24 business hours." },
      { h: "Boundary", p: "Complex legal/tax matters routed to formal documents." }
    ]
  },
  "active-deals": {
    title: "Active Deals Index",
    subtitle: "Route into each project full package.",
    minLevel: 3,
    navLabel: "Active Deals",
    sections: [
      {
        h: "Harbor Logistics I",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="deal-harbor.html?role={{role}}">Open full package room</a> | Stage: Open for review`
      },
      {
        h: "Sunbelt Multifamily Select",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="deal-sunbelt.html?role={{role}}">Open full package room</a> | Stage: Priority review`
      },
      {
        h: "Edge Data Infra",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="deal-edge.html?role={{role}}">Open full package room</a> | Stage: Member due diligence`
      }
    ],
    links: [
      { label: "Open Harbor Room", route: "deal-harbor" },
      { label: "Open Sunbelt Room", route: "deal-sunbelt" },
      { label: "Open Edge Room", route: "deal-edge" }
    ]
  },
  "deal-harbor": {
    title: "Deal Room: Harbor Logistics I",
    subtitle: "Per-deal full package (demo).",
    minLevel: 3,
    sections: [
      {
        h: "Project Brochure",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/brochure.html">Open brochure</a>`
      },
      {
        h: "Pledge Link",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/pledge.html">Open pledge form</a>`
      },
      {
        h: "Webinar Recording",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/webinar.html">Watch replay page</a>`
      },
      {
        h: "Offering Docs",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/ppm.html">PPM</a> | <a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/subscription.html">Subscription Agreement</a> | <a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/risk.html">Risk Disclosure</a>`
      },
      {
        h: "Changelog",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/changelog.html">Open update log</a>`
      }
    ]
  },
  "deal-sunbelt": {
    title: "Deal Room: Sunbelt Multifamily Select",
    subtitle: "Per-deal full package (demo).",
    minLevel: 3,
    sections: [
      {
        h: "Project Brochure",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/brochure.html">Open brochure</a>`
      },
      {
        h: "Subscription Link",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/subscription-link.html">Open subscription page</a>`
      },
      {
        h: "Webinar Recording",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/webinar.html">Watch replay page</a>`
      },
      {
        h: "Risk Docs",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/risk.html">Open risk disclosure</a>`
      },
      {
        h: "Changelog",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/changelog.html">Open update log</a>`
      }
    ]
  },
  "deal-edge": {
    title: "Deal Room: Edge Data Infra",
    subtitle: "Per-deal full package (demo).",
    minLevel: 3,
    sections: [
      {
        h: "Project Brochure",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/brochure.html">Open brochure</a>`
      },
      {
        h: "Pledge Link",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/pledge.html">Open pledge form</a>`
      },
      {
        h: "Webinar Recording",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/webinar.html">Watch replay page</a>`
      },
      {
        h: "Offering Docs",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/offering.html">Open offering docs</a> | <a class="inline-link" target="_blank" rel="noopener" href="mock/edge/risk.html">Risk disclosure</a>`
      },
      {
        h: "Changelog",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/changelog.html">Open update log</a>`
      }
    ]
  },
  pipeline: {
    title: "Pipeline Watchlist",
    subtitle: "Theme-level direction only (no promises/terms).",
    minLevel: 3,
    sections: [
      { h: "Cold Chain Logistics", p: "Stage: screening | Criteria: occupancy resilience." },
      { h: "Workforce Housing", p: "Stage: IC prep | Criteria: DSCR and sponsor quality." },
      { h: "Edge Data", p: "Stage: mapping | Criteria: power certainty and demand anchors." }
    ]
  },
  "past-deals": {
    title: "Past Deals Library",
    subtitle: "Summary archive first; full package by approval.",
    minLevel: 3,
    sections: [
      { h: "2023-07 Metro Storage", p: "Closeout summary and lessons." },
      { h: "2024-02 Green Industrial", p: "Underwriting checkpoints." },
      { h: "2024-11 Urban Workforce", p: "Operating milestone review." }
    ]
  },
  settings: {
    title: "Settings",
    subtitle: "Demo profile and notification preferences.",
    minLevel: 1,
    navLabel: "Settings",
    sections: [
      { h: "Email Digest", p: "Weekly updates enabled." },
      { h: "Event Alerts", p: "24h reminder enabled." },
      { h: "Data Room Access", p: "Role-based entitlements are enforced by membership level." }
    ]
  }
};

const dashboards = {
  resource: {
    route: "resource-center",
    badge: "Unlocked after questionnaire",
    cards: [
      {
        wide: true,
        title: "Want deeper materials?",
        desc: "Complete a 1-on-1 consultation (or verify prior investment history) to unlock Qualified Library.",
        actions: [{ label: "Request 15-min Fit Call", route: "signup" }]
      },
      {
        title: "Newsletter Room",
        desc: "Weekly newsletters and updates organized by topic and date.",
        actions: [{ label: "Open", route: "newsletters" }]
      },
      {
        title: "Reports Library",
        desc: "2026 report and research notes.",
        actions: [{ label: "View", route: "reports" }]
      },
      {
        title: "Video Hub",
        desc: "Curated YouTube playlists with quick topic navigation.",
        actions: [{ label: "Watch", route: "youtube" }]
      },
      {
        title: "Events & Notifications",
        desc: "Livestream calendar, RSVP links, and replay access.",
        actions: [{ label: "Calendar", route: "events" }]
      }
    ]
  },
  qualified: {
    route: "qualified-library",
    badge: "Qualified access",
    cards: [
      {
        wide: true,
        title: "Member Full Package access",
        desc: "Become a Club Member to unlock Deal Data Rooms (Full Package) and member-only library.",
        actions: [{ label: "Become a Member", route: "club-system" }]
      },
      {
        title: "Newsletter Room",
        desc: "Weekly newsletters and updates organized by topic and date.",
        actions: [{ label: "Open", route: "newsletters" }]
      },
      {
        title: "Reports Library",
        desc: "2026 report + research notes.",
        actions: [{ label: "View", route: "reports" }]
      },
      {
        title: "Video Hub",
        desc: "Curated YouTube playlists (strategy, market, Q&A).",
        actions: [{ label: "Watch", route: "youtube" }]
      },
      {
        title: "Events & Notifications",
        desc: "Upcoming events, RSVP links, and replay access.",
        actions: [{ label: "Calendar", route: "events" }]
      },
      {
        title: "Track Record (Summary)",
        desc: "Standardized 1-page summaries showing key milestones.",
        actions: [{ label: "Browse", route: "portfolio" }]
      },
      {
        title: "Club / GFD Guide",
        desc: "How club membership works and GFD process details.",
        actions: [
          { label: "Read", route: "gfd" },
          { label: "Sign Up", route: "signup", secondary: true }
        ]
      }
    ]
  },
  member: {
    route: "member-vault",
    badge: "Active Club Member",
    cards: [
      {
        wide: true,
        title: "Your member privileges are active",
        desc: "Priority updates, deal package rooms, and member Q&A are available.",
        actions: [{ label: "Go to Active Deals", route: "active-deals" }]
      },
      {
        title: "Active Deals (Full Package)",
        desc: "Project brochure, pledge link, webinar recording, official docs.",
        actions: [{ label: "Enter", route: "active-deals", newTab: true }]
      },
      {
        title: "Member Library",
        desc: "Due diligence framework, risk map, and member reading guide.",
        actions: [{ label: "Open", route: "welcome" }]
      },
      {
        title: "Priority Q&A",
        desc: "Submit questions through member priority queue.",
        actions: [{ label: "Submit", route: "priority-qa" }]
      },
      {
        title: "Pipeline Watchlist",
        desc: "Theme-level pipeline and selection standards (no promises).",
        actions: [{ label: "Explore", route: "pipeline" }]
      },
      {
        title: "Past Deals Library",
        desc: "Summary archive with controlled historical materials.",
        actions: [{ label: "Browse", route: "past-deals" }]
      }
    ]
  }
};

const fixedNav = [
  { label: "Start Here", route: "start-here", minLevel: 1 },
  { label: "Resource Center", route: "resource-center", minLevel: 1 },
  { label: "Qualified Library", route: "qualified-library", minLevel: 2 },
  { label: "Active Deals", route: "active-deals", minLevel: 3 },
  { label: "Member Library", route: "member-vault", minLevel: 3 },
  { label: "Priority Q&A", route: "priority-qa", minLevel: 3 },
  { label: "Settings", route: "settings", minLevel: 1 }
];

const ui = {
  roleSelect: document.getElementById("roleSelect"),
  roleHint: document.getElementById("roleHint"),
  sideNav: document.getElementById("sideNav"),
  statusBadge: document.getElementById("statusBadge"),
  pageTitle: document.getElementById("pageTitle"),
  pageSubtitle: document.getElementById("pageSubtitle"),
  cards: document.getElementById("quickCards"),
  breadcrumb: document.getElementById("breadcrumb"),
  content: document.getElementById("content")
};

function routeToFile(route, role) {
  return `${route}.html?role=${encodeURIComponent(role)}`;
}

function getRoute() {
  return document.body.dataset.route || "start-here";
}

function getRoleFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const role = params.get("role");
  if (role && roles[role]) return role;
  return null;
}

function getRole() {
  return ui.roleSelect.value;
}

function getLevel(role) {
  return roles[role].level;
}

function canAccess(route, role) {
  const page = pages[route];
  if (!page) return false;
  if (role !== "member" && ["active-deals", "pipeline"].includes(route)) return false;
  return page.minLevel <= getLevel(role);
}

function setRole(role) {
  localStorage.setItem("ufund_demo_role", role);
  ui.roleSelect.value = role;
}

function resolveInitialRole() {
  const queryRole = getRoleFromQuery();
  const savedRole = localStorage.getItem("ufund_demo_role");
  const role = queryRole || (savedRole && roles[savedRole] ? savedRole : "qualified");
  setRole(role);
  return role;
}

function renderHeader(route, role) {
  const page = pages[route];
  ui.pageTitle.textContent = page.title;
  ui.pageSubtitle.textContent = page.subtitle;
  ui.statusBadge.textContent = dashboards[role].badge;

  if (role === "member") {
    ui.roleHint.textContent = "Full access enabled: active deals and pipeline watchlist are open.";
  } else if (role === "qualified") {
    ui.roleHint.textContent = "Qualified access: Active Deals and Pipeline Watchlist remain locked.";
  } else {
    ui.roleHint.textContent = "Resource access only: complete qualification to unlock deeper materials.";
  }
}

function renderNav(route, role) {
  const level = getLevel(role);
  ui.sideNav.innerHTML = fixedNav
    .filter((item) => item.minLevel <= Math.max(level, 1))
    .map((item) => {
      const locked = !canAccess(item.route, role);
      const cls = ["nav-item", route === item.route ? "active" : "", locked ? "locked" : ""]
        .filter(Boolean)
        .join(" ");
      const href = locked ? "javascript:void(0)" : routeToFile(item.route, role);
      const suffix = locked ? " (Locked)" : "";
      return `<a class="${cls}" href="${href}">${item.label}${suffix}</a>`;
    })
    .join("");
}

function renderCards(route, role) {
  const dashboardRoute = dashboards[role].route;
  if (route !== dashboardRoute) {
    ui.cards.style.display = "none";
    ui.cards.innerHTML = "";
    return;
  }

  ui.cards.style.display = "grid";
  const config = dashboards[role];
  ui.cards.innerHTML = config.cards
    .map((card) => {
      const cls = ["card", card.wide ? "wide" : ""].filter(Boolean).join(" ");
      const actions = card.actions
        .map((action) => {
          const locked = action.route ? !canAccess(action.route, role) : false;
          const btnCls = ["btn", action.secondary ? "secondary" : "", locked ? "locked" : ""]
            .filter(Boolean)
            .join(" ");
          const href = locked
            ? "javascript:void(0)"
            : action.href
              ? action.href.replaceAll("{{role}}", role)
              : routeToFile(action.route, role);
          const target = "";
          return `<a class="${btnCls}" href="${href}"${target}>${action.label}${locked ? " (Locked)" : ""}</a>`;
        })
        .join(" ");
      return `<article class="${cls}"><h3>${card.title}</h3><p>${card.desc}</p><div class="actions">${actions}</div></article>`;
    })
    .join("");
}

function renderContent(route, role) {
  const page = pages[route];
  ui.breadcrumb.textContent = `Home / ${page.title}`;

  if (!canAccess(route, role)) {
    ui.content.innerHTML = `
      <div class="lock-panel">
        <h3>Access Restricted</h3>
        <p>This module is not available for your current role. Use <strong>How to Join</strong> to upgrade access.</p>
      </div>
      <div class="disclosure">Demo rule: qualified but unpaid users cannot open Active Deals and Pipeline Watchlist.</div>
    `;
    return;
  }

  const list = page.sections
    .map((s) => {
      const p = s.p
        .replaceAll("{{role}}", role)
        .replaceAll(' target="_blank" rel="noopener"', "");
      return `<div class="item"><h4>${s.h}</h4><p>${p}</p></div>`;
    })
    .join("");

  const actions = (page.links || [])
    .map((link) => `<a class="btn" href="${routeToFile(link.route, role)}">${link.label}</a>`)
    .join(" ");

  ui.content.innerHTML = `
    <h3>${page.title}</h3>
    <div class="list">${list}</div>
    ${actions ? `<div style="margin-top: 12px; display:flex; gap:8px; flex-wrap: wrap;">${actions}</div>` : ""}
    <div class="disclosure">Informational only. Not investment advice. Official offering/subscription documents govern where applicable.</div>
  `;
}

function bootstrap() {
  const route = getRoute();
  const role = resolveInitialRole();
  const path = window.location.pathname;
  const isIndexPage = path.endsWith("/index.html") || path === "/" || path === "";
  const isStartHerePage = path.endsWith("/start-here.html");

  if (isIndexPage || isStartHerePage) {
    const homeRoute = dashboards[role].route;
    window.location.href = routeToFile(homeRoute, role);
    return;
  }

  if (!pages[route]) {
    window.location.href = routeToFile("start-here", role);
    return;
  }

  ui.roleSelect.innerHTML = Object.entries(roles)
    .map(([value, info]) => `<option value="${value}">${info.label}</option>`)
    .join("");
  ui.roleSelect.value = role;

  if (!canAccess(route, role)) {
    const fallback = dashboards[role].route;
    window.location.href = routeToFile(fallback, role);
    return;
  }

  ui.roleSelect.addEventListener("change", (e) => {
    const nextRole = e.target.value;
    setRole(nextRole);
    const nextRoute = canAccess(route, nextRole) ? route : dashboards[nextRole].route;
    window.location.href = routeToFile(nextRoute, nextRole);
  });

  renderHeader(route, role);
  renderNav(route, role);
  renderCards(route, role);
  renderContent(route, role);
}

bootstrap();
