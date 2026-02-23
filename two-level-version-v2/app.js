const roles = {
  qualified: { label: "Qualified Access(Limited)", level: 2 },
  member: { label: "Club Member", level: 3 }
};

const APP_STATE_ENDPOINT = "mock/api/state.json";
const appState = {
  hasActiveDeal: true
};

const pipelineWatchlistData = [
  {
    name: "Sunbelt Multifamily - Atlanta",
    location: "Atlanta, GA",
    assetType: "Multifamily",
    stage: "Underwriting",
    status: "Under review",
    theme: "Value-add multifamily in a high-growth suburban corridor.",
    profile: "Renovation + operational optimization.",
    updated: "Updated this month."
  },
  {
    name: "Workforce Housing - Houston",
    location: "Houston, TX",
    assetType: "Multifamily",
    stage: "Initial DD",
    status: "Under review",
    theme: "Workforce housing demand near employment hubs.",
    profile: "Core-plus / income-focused.",
    updated: "Updated this month."
  },
  {
    name: "Last-Mile Industrial - DFW",
    location: "Dallas-Fort Worth, TX",
    assetType: "Industrial",
    stage: "IC Review",
    status: "Under review",
    theme: "Logistics / last-mile industrial near major transportation corridors.",
    profile: "Stabilized / core-plus.",
    updated: "Updated this month."
  },
  {
    name: "Light Industrial Flex - Phoenix",
    location: "Phoenix, AZ",
    assetType: "Industrial",
    stage: "Sourcing",
    status: "Under review",
    theme: "Small-bay flex serving local businesses.",
    profile: "Value-add leasing strategy.",
    updated: "Updated this month."
  },
  {
    name: "Essential Retail - Tampa",
    location: "Tampa, FL",
    assetType: "Commercial",
    stage: "Underwriting",
    status: "Under review",
    theme: "Necessity-based retail in dense residential markets.",
    profile: "Stabilized cash flow.",
    updated: "Updated this month."
  },
  {
    name: "Medical Office (MOB) - Nashville",
    location: "Nashville, TN",
    assetType: "Commercial",
    stage: "Initial DD",
    status: "Under review",
    theme: "Healthcare-related demand and long-term tenancy dynamics.",
    profile: "Core-plus.",
    updated: "Updated this month."
  },
  {
    name: "Mixed-Use Infill - Charlotte",
    location: "Charlotte, NC",
    assetType: "Mixed-Use",
    stage: "Sourcing",
    status: "Under review",
    theme: "Infill mixed-use near employment and transit nodes.",
    profile: "Development / value-add.",
    updated: "Updated this month."
  }
];

const activeDealsIndexData = [
  {
    name: "Harbor Logistics I",
    dealKey: "harbor",
    location: "Savannah Metro, GA",
    assetType: "Industrial",
    stage: "Open for review",
    route: "deal-harbor",
    pledgeHref: "deal-pledge-form",
    brochureHref: "mock/harbor/brochure.html",
    webinarHref: "mock/harbor/webinar.html",
    theme: "Logistics-oriented strategy in a major port-linked distribution corridor.",
    profile: "Stabilized / value-add mix.",
    updated: "Updated this month."
  },
  {
    name: "Sunbelt Multifamily Select",
    dealKey: "sunbelt",
    location: "Dallas-Fort Worth, TX",
    assetType: "Multifamily",
    stage: "Priority review",
    route: "deal-sunbelt",
    pledgeHref: "deal-pledge-form",
    brochureHref: "mock/sunbelt/brochure.html",
    webinarHref: "mock/sunbelt/webinar.html",
    theme: "Multifamily opportunity in a high-growth metro with operating upside focus.",
    profile: "Core-plus / operational optimization.",
    updated: "Updated this month."
  },
  {
    name: "Edge Data Infra",
    dealKey: "edge",
    location: "Phoenix Metro, AZ",
    assetType: "Industrial",
    stage: "Member due diligence",
    route: "deal-edge",
    pledgeHref: "deal-pledge-form",
    brochureHref: "mock/edge/brochure.html",
    webinarHref: "mock/edge/webinar.html",
    theme: "Infrastructure-adjacent opportunity tied to long-term digital demand themes.",
    profile: "Specialized / diligence-intensive.",
    updated: "Updated this month."
  }
];

async function loadAppState() {
  try {
    const res = await fetch(APP_STATE_ENDPOINT, { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    if (typeof data.hasActiveDeal === "boolean") {
      appState.hasActiveDeal = data.hasActiveDeal;
    }
  } catch (_) {
    // Keep default in-memory fallback when API/file is unavailable.
  }
}

const pages = {
  "start-here": {
    title: "Start Here",
    subtitle: "How to use the portal and what each level can access.",
    minLevel: 1,
    navLabel: "Start Here",
    sections: [
      { h: "Qualified Access(Limited)", p: "Resource Center + Qualified Library access: newsletters, videos, reports, events, track record summary, GFD and join process." },
      { h: "Club Member", p: "Includes all Qualified Access(Limited) documents, plus Active Deals full package rooms, Pipeline Watchlist, Past Deals, and Member Reports." }
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
      { h: "Market Insights", p: "2026 report and research notes." }
    ]
  },
  "qualified-library": {
    title: "Qualified Access(Limited) Library",
    subtitle: "Expanded content with credibility resources and sign-up path.",
    minLevel: 2,
    navLabel: "Qualified Access(Limited)",
    sections: [
      { h: "Track Record (Summary)", p: "Standardized one-page project summaries." },
      { h: "How to Read Track Record", p: "Definitions, context, and disclaimers." },
      { h: "Sample Full Package Index", p: "Preview-only folder structure and document types." },
      { h: "Club / GFD Guide", p: "Refundable deposit process, boundaries, and join steps." }
    ]
  },
  "member-vault": {
    title: "Club Member Portal",
    subtitle: "Includes all Qualified Access(Limited) documents plus member-only channels and full package data rooms.",
    minLevel: 2,
    navLabel: "Investor Education (General Information)",
    sections: [
      { h: "Member Status & Benefits", p: "Priority access and update cadence." },
      { h: "Welcome Package", p: "New member checklist and onboarding actions." },
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
      { h: "Replay Library", p: "Indexed by topic and difficulty." },
      { h: "Sign-up for Events", p: `<a class="inline-link" href="event-signup.html?role={{role}}">Click to open event sign-up demo</a>` }
    ],
    links: [{ label: "Sign Up for Events", route: "event-signup" }]
  },
  "event-signup": {
    title: "Event Sign-up Demo",
    subtitle: "Demo confirmation after investor event registration.",
    minLevel: 2,
    sections: [
      { h: "Registration Submitted", p: "Thank you. Your RSVP has been recorded for the next UFUND investor event." },
      { h: "Confirmation Email", p: "A confirmation email with event time, access link, and reminder schedule was sent." },
      { h: "Next Step", p: "Use Contact Us if you need to change attendee details or request replay-only access." }
    ]
  },
  reports: {
    title: "Market Insights",
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
      { h: "04 Updates", p: "Dated update entries." }
    ]
  },
  "club-system": {
    title: "Club System Introduction",
    subtitle: "What membership is and what it includes.",
    minLevel: 2,
    sections: [
      { h: "Model", p: "Structured access with priority channels." },
      { h: "Privileges", p: "Member library, active deals, watchlist, and member reports." },
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
      { h: "Refund", p: "Request form -> compliance check -> refund to original remitter." },
      { h: "Club Membership FAQ", p: "Need full membership FAQ details? Open the dedicated FAQ page for eligibility, deposit usage, active status, and support guidance." }
    ],
    links: [
      { label: "Become Member", route: "gfd-signup" },
      { label: "Club Membership FAQ", route: "club-membership-faq" }
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
  "gfd-signup": {
    title: "Become Member",
    subtitle: "Club membership onboarding: agreement and GFD payment steps.",
    minLevel: 2,
    sections: [
      { h: "Step 1: Sign GFD Agreement", p: "Review and sign the GFD agreement before activation review." },
      { h: "Step 2: Pay GFD", p: "Follow payment instruction to submit refundable GFD deposit." },
      { h: "Step 3: Activation", p: "After verification, your access level is upgraded to Club Member." }
    ],
    links: [
      { label: "Sign GFD Agreement", route: "gfd-agreement" },
      { label: "Club Membership FAQ", route: "club-membership-faq" }
    ]
  },
  "gfd-agreement": {
    title: "GFD Agreement",
    subtitle: "Demo signature page for membership agreement.",
    minLevel: 2,
    sections: [
      { h: "Agreement Scope", p: "Defines membership access boundaries, refundable deposit terms, and communication policy." },
      { h: "Required Fields", p: "Legal name, contact details, jurisdiction, and acknowledgement of risk disclosures." },
      { h: "Submission", p: "Submit signed agreement to investor@ufundinvestment.com for processing." }
    ]
  },
  "gfd-payment": {
    title: "Pay GFD Instruction",
    subtitle: "Demo payment instruction for refundable GFD deposit.",
    minLevel: 2,
    sections: [
      { h: "Payment Method", p: "Wire transfer to designated account listed in onboarding email." },
      { h: "Reference Format", p: "Use: INVESTOR_NAME + GFD + DATE for reconciliation." },
      { h: "Confirmation", p: "Send remittance slip to investor@ufundinvestment.com for verification." }
    ]
  },
  "gfd-confirmation": {
    title: "Membership Request Received",
    subtitle: "Confirmation after submitting Sign GFD Agreement form.",
    minLevel: 2,
    sections: [
      { h: "Thank You", p: "We have received your request and sent the DocuSign agreement to your email." },
      { h: "Next Step", p: "Complete DocuSign and follow the final-page wire instruction for GFD." },
      { h: "Activation", p: "Once signed documents and GFD are received, Club access will be activated." }
    ]
  },
  faq: {
    title: "FAQ",
    subtitle: "General investor FAQ.",
    minLevel: 2,
    sections: [
      { h: "What does UFUND do?", p: "UFUND provides a structured investor access platform with educational resources, track record summaries, and member data rooms under clear disclosure rules." },
      { h: "How does investing here work?", p: "Typical journey: onboarding call -> materials review -> suitability/compliance checks -> subscription documentation (if applicable) -> periodic updates." },
      { h: "What is the minimum investment amount?", p: "Minimum ticket size varies by project. In this demo, most opportunities show a sample minimum range of USD 50,000 to USD 100,000." },
      { h: "How often are reports and updates shared?", p: "Qualified resources are updated on a regular cadence. Club Member updates include additional deal-room update entries and event reminders." },
      { h: "What unlocks Club Member access?", p: "Club enrollment and verification completion unlock member-only areas such as Active Deals full packages, Pipeline Watchlist, Past Deals, and Member Reports." },
      { h: "Can Qualified Access(Limited) users see Active Deals?", p: "Qualified users can view the Club Member Access preview, but full deal package files remain restricted until membership is activated." }
    ]
  },
  "club-membership-faq": {
    title: "Club Membership FAQ (Demo)",
    subtitle: "Membership-specific FAQ for Club Member policies.",
    minLevel: 2,
    sections: [
      { h: "1) What is UFUND Club Membership?", p: "UFUND Club Membership provides members-only access to our Investor Relations support, resources, and member portal features. It's designed to streamline communication and updates for active members." },
      { h: "2) How much is the Club Membership deposit/fee?", p: "The Club Membership requires a $5,000 membership deposit (or the current amount specified in your invitation). Please refer to your membership details for the exact figure." },
      { h: "3) Is the membership deposit refundable?", p: "Yes - the membership deposit is refundable, subject to the Club's terms and process. If you have questions, contact the IR team for details." },
      { h: "4) Can the membership deposit be used to subscribe to a project?", p: "No. The Club membership deposit cannot be applied toward a project subscription. Project subscriptions are separate and are handled through the official offering documents." },
      { h: "5) What happens if I use the deposit for a project subscription?", p: "If the deposit is applied/used for a project subscription, your Club Membership will be considered closed, and you will no longer have access to the Club Member portal as an active member (unless reactivated per policy)." },
      { h: "6) How do I keep my Club Membership active?", p: "Your membership remains active as long as the membership deposit is maintained and your account remains in good standing under the Club terms." },
      { h: "7) Does membership guarantee an investment opportunity or allocation?", p: "No. Club Membership does not guarantee access to or allocation in any specific investment. All investments are subject to eligibility, availability, and final approval via offering documents." },
      { h: "8) Who can I contact if I have questions?", p: "Club Members have Priority Contact access. Please use the \"Member Priority Contact\" section to email the IR team or book time on our calendars." }
    ]
  },
  contact: {
    title: "Contact Us",
    subtitle: "Investor relations contact channels.",
    minLevel: 2,
    sections: [
      { h: "General IR Contact", p: `<a class="inline-link" href="mailto:investor@ufundinvestment.com">investor@ufundinvestment.com</a>` },
      { h: "Book a Meeting", p: `<a class="inline-link" href="https://calendly.com/ufund-investor-relations">Open Calendly booking page</a>` },
      { h: "Response Window", p: "General inquiries are typically acknowledged within 1 business day." }
    ]
  },
  "member-status": {
    title: "Member Status & Benefits",
    subtitle: "Special status and privileges.",
    minLevel: 3,
    sections: [
      { h: "Status", p: "Club Member." },
      { h: "Benefits", p: "Priority updates, full package rooms, and watchlist access." },
      { h: "Cadence", p: "Weekly digest plus event reminders." }
    ]
  },
  welcome: {
    title: "Investor Education (General Information)",
    subtitle: "General educational content for Club Members.",
    minLevel: 3,
    sections: [
      { h: "Investment Review (Overview)", p: "Private fund opportunities are assessed based on each investor's objectives, time horizon, and risk tolerance. Information is typically evaluated in context-including strategy, assumptions, and alignment-rather than as a single standardized score." },
      { h: "Due Diligence (General Considerations)", p: "Due diligence approaches vary by fund, strategy, and investor. Common areas of review may include sponsor background, deal structure, underwriting assumptions, and material risk factors, as applicable to the opportunity." },
      { h: "Risk & Uncertainty", p: "Private real estate investing involves meaningful uncertainty, including illiquidity, market and financing risk, execution risk, and timing considerations. Outcomes may differ materially from expectations, including the possibility of loss of principal." },
      { h: "Offering Documents", p: "Private offerings are governed by formal documentation. Investors typically rely on the applicable offering documents and their own independent evaluation when making an investment decision." },
      { h: "Investor Responsibility", p: "Private offerings are generally available to eligible investors who are responsible for conducting their own review and determining suitability. Investors may also consult their legal, tax, and financial advisors as appropriate for their circumstances." },
      { h: "Market Cycles", p: "Real estate markets operate in cycles that can influence valuations, liquidity, and exit timing. Market conditions may shift over time and can materially affect investment outcomes." }
    ]
  },
  "active-deals": {
    title: "Active Deals Room",
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
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/brochure.html">View project brochure</a>`
      },
      {
        h: "Webinar Recording",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/harbor/webinar.html">Watch replay</a>`
      },
      {
        h: "Pledge Link",
        p: `<a class="btn" href="deal-pledge-form.html?role={{role}}&deal=harbor">I want to Pledge</a>`
      },
      
    ]
  },
  "deal-sunbelt": {
    title: "Deal Room: Sunbelt Multifamily Select",
    subtitle: "Per-deal full package (demo).",
    minLevel: 3,
    sections: [
      {
        h: "Project Brochure",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/brochure.html">View project brochure</a>`
      },
      {
        h: "Webinar Recording",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/sunbelt/webinar.html">Watch replay</a>`
      },
      {
        h: "Pledge Link",
        p: `<a class="btn" href="deal-pledge-form.html?role={{role}}&deal=sunbelt">I want to Pledge</a>`
      },
      
    ]
  },
  "deal-edge": {
    title: "Deal Room: Edge Data Infra",
    subtitle: "Per-deal full package (demo).",
    minLevel: 3,
    sections: [
      {
        h: "Project Brochure",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/brochure.html">View project brochure</a>`
      },
      {
        h: "Webinar Recording",
        p: `<a class="inline-link" target="_blank" rel="noopener" href="mock/edge/webinar.html">Watch replay</a>`
      },
      {
        h: "Pledge Link",
        p: `<a class="btn" href="deal-pledge-form.html?role={{role}}&deal=edge">I want to Pledge</a>`
      },
     
    ]
  },
  "deal-pledge-form": {
    title: "Pledge Form",
    subtitle: "Submit your indication of interest.",
    minLevel: 3,
    sections: []
  },
  "deal-pledge-confirmation": {
    title: "Pledge Confirmation",
    subtitle: "Confirmation after submitting pledge form.",
    minLevel: 3,
    sections: []
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
  "member-report": {
    title: "Member Reports",
    subtitle: "Monthly and annual updates exclusive to Club Members.",
    minLevel: 3,
    sections: [
      { h: "Monthly Report", p: "Monthly portfolio and operating update center." },
      { h: "Year-End Report Center", p: "Annual review package, year-end summary, and archived annual reports." }
    ],
    links: [
      { label: "Enter Monthly Report", route: "monthly-report" },
      { label: "Enter Year-End Report Center", route: "year-end-report-center" }
    ]
  },
  "monthly-report": {
    title: "Monthly Report",
    subtitle: "Monthly update center for Club Members.",
    minLevel: 3,
    sections: [
      { h: "Current Month Snapshot", p: "Operating highlights, key metrics, and notable changes for this month." },
      { h: "Portfolio Notes", p: "Manager commentary, risk observations, and update timeline." },
      { h: "Action Items", p: "Upcoming milestones and expected update cadence." }
    ]
  },
  "year-end-report-center": {
    title: "Year-End Report Center",
    subtitle: "Annual review center for Club Members.",
    minLevel: 3,
    sections: [
      { h: "Annual Performance Summary", p: "Year-end review of portfolio progress and key outcomes." },
      { h: "Year-End Letter", p: "Management commentary and strategy outlook for the next year." },
      { h: "Archive", p: "Previous annual report files and historical summary notes." }
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
  qualified: {
    route: "start-here",
    badge: "Qualified Access(Limited)",
    cards: [
      {
        title: "Qualified Access(Limited) Start Guide",
        desc: "View exactly what you can access now and what unlocks after membership.",
        actions: [{ label: "Open Guide", route: "qualified-library" }]
      },
      {
        title: "Need Help?",
        desc: "Contact IR team or schedule a fit call for next-step guidance.",
        actions: [{ label: "Contact Us", route: "contact" }, { label: "FAQ", route: "faq", secondary: true }]
      }
    ]
  },
  member: {
    route: "member-vault",
    badge: "Club Member",
    cards: [
      {
        wide: true,
        title: "Welcome to Club Member Portal",
        desc: "Your Member privileges are active. You can access all Qualified Access(Limited) documents, plus priority updates and full deal package rooms.",
        actions: []
      },
      {
        title: "Active Deals (Full Package)",
        desc: "Project brochure, pledge link, webinar recording, official docs.",
        actions: [{ label: "Enter", route: "active-deals", newTab: true }]
      },
      {
        title: "Investor Education (General Information)",
        desc: "General educational guidance on investment review, due diligence, and risk context.",
        actions: [{ label: "Open", route: "welcome" }]
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

const memberOnlyRoutes = new Set([
  "active-deals",
  "pipeline",
  "past-deals",
  "member-report",
  "monthly-report",
  "year-end-report-center",
  "welcome",
  "member-status",
  "deal-harbor",
  "deal-sunbelt",
  "deal-edge"
]);

const navSections = [
  { label: "Start Here", route: "start-here" },
  {
    label: "Qualified Access(Limited)",
    route: "qualified-library",
    children: [
      { label: "Club / GFD Guide", route: "gfd" },
      { label: "Events & Notifications", route: "events", badge: "NEW" },
      { label: "Market Insights", route: "reports" },
      { label: "Newsletter Room", route: "newsletters" },
      { label: "Video Hub", route: "youtube", badge: "NEW" },
      { label: "Track Record", route: "portfolio" },
      { label: "FAQ", route: "faq" }
    ]
  },
  {
    label: "Club Member Access",
    route: "member-vault",
    children: [
      { label: "Active Deals", route: "active-deals", memberOnly: true },
      { label: "Member Reports", route: "member-report", memberOnly: true },
      { label: "Pipeline Watchlist", route: "pipeline", memberOnly: true },
      { label: "Past Deals Library", route: "past-deals", memberOnly: true },
      { label: "Investor Education (General Information)", route: "welcome", memberOnly: true }
    ]
  },
  { label: "Contact Us", route: "contact" },
  { label: "Settings", route: "settings" }
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

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
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
  if (role === "member" && route === "start-here") return false;
  if (!appState.hasActiveDeal && (route === "deal-harbor" || route === "deal-sunbelt" || route === "deal-edge")) {
    return false;
  }
  if (role === "member") return page.minLevel <= getLevel(role);
  if (route === "member-vault") return true;
  if (memberOnlyRoutes.has(route)) return false;
  return page.minLevel <= 2;
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
  if (route === "member-vault" && role === "member") {
    ui.pageTitle.textContent = "";
    ui.pageSubtitle.textContent = "";
    ui.statusBadge.textContent = dashboards[role].badge;
    ui.roleHint.textContent = "Club Member includes all Qualified Access(Limited) documents and adds Active Deals + Pipeline Watchlist.";
    return;
  }

  ui.pageTitle.textContent = route === "start-here" && role === "qualified" ? "Welcome to Qualified Access" : page.title;
  ui.pageSubtitle.textContent = page.subtitle;
  ui.statusBadge.textContent = dashboards[role].badge;

  if (role === "qualified" && route === "member-vault") {
    ui.roleHint.textContent = "Only Club Members can access member-only data rooms. Preview is shown for reference.";
  } else if (role === "member") {
    ui.roleHint.textContent = "Club Member includes all Qualified Access(Limited) documents and adds Active Deals + Pipeline Watchlist.";
  } else {
    ui.roleHint.textContent = "Qualified Access(Limited): Resource Center + Qualified Library are open. Active Deals and Pipeline Watchlist remain locked.";
  }
}

function renderNav(route, role) {
  let sections = navSections;
  if (role === "member") {
    const clubSection = navSections.find((item) => item.route === "member-vault");
    const qualifiedSection = navSections.find((item) => item.route === "qualified-library");
    const others = navSections.filter((item) => item.route !== "start-here" && item.route !== "member-vault" && item.route !== "qualified-library");
    sections = [clubSection, qualifiedSection, ...others].filter(Boolean);
  }

  ui.sideNav.innerHTML = sections
    .map((item) => {
      const displayLabel = item.route === "contact" && role === "member" ? "Priority Member Support" : item.label;
      const itemLocked = item.memberOnly && role !== "member";
      const parentLocked = !itemLocked && !canAccess(item.route, role);
      const locked = itemLocked || parentLocked;
      const parentCls = ["nav-item", route === item.route ? "active" : "", locked ? "locked" : ""]
        .concat(role === "member" && item.route === "qualified-library" ? ["with-separator"] : [])
        .concat(role === "member" && item.route === "contact" ? ["with-separator"] : [])
        .filter(Boolean)
        .join(" ");
      const parentHref = locked ? "javascript:void(0)" : routeToFile(item.route, role);

      const childHtml = (item.children || [])
        .filter((child) => !(role === "member" && item.route === "qualified-library" && child.route === "gfd"))
        .map((child) => {
          const childLocked = (child.memberOnly && role !== "member") || !canAccess(child.route, role);
          const childCls = ["nav-sub-item", route === child.route ? "active" : "", childLocked ? "locked" : ""]
            .filter(Boolean)
            .join(" ");
          const childHref = childLocked ? "javascript:void(0)" : routeToFile(child.route, role);
          const isActiveDealsLive = child.route === "active-deals" && appState.hasActiveDeal;
          const dynamicBadge = isActiveDealsLive ? "LIVE" : child.badge;
          const liveBadge = dynamicBadge ? `<span class="new-pill">${dynamicBadge}</span>` : "";
          const pledgeBadge = isActiveDealsLive ? `<span class="new-pill pledge-pill">PLEDGE AVAILABLE</span>` : "";
          const badgeContent = `${liveBadge}${pledgeBadge}`;
          const badge = badgeContent ? `<span class="nav-badges">${badgeContent}</span>` : "";
          const suffix = childLocked ? " (Locked)" : "";
          return `<a class="${childCls}" href="${childHref}">${child.label}${suffix}${badge}</a>`;
        })
        .join("");

      return `<div class="nav-block"><a class="${parentCls}" href="${parentHref}">${displayLabel}${locked ? " (Locked)" : ""}</a>${childHtml}</div>`;
    })
    .join("");
}

function renderCards(route, role) {
  if (role === "member" && route === "member-vault") {
    ui.cards.style.display = "none";
    ui.cards.innerHTML = "";
    return;
  }

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

function renderPipelineWatchlist() {
  ui.content.innerHTML = `
    <h3>Pipeline Watchlist</h3>
    <p class="pipeline-intro">A high-level view of opportunities currently under review.</p>
    <p class="pipeline-intro">Items listed here are exploratory and may change or be withdrawn at any time.</p>
    <p class="pipeline-intro">This page is for informational purposes only and is not an offer or solicitation.</p>
    <div id="pipelineGrid" class="pipeline-grid" style="margin-top:14px;"></div>

    <div class="pipeline-disclaimer">
      <strong>Important Notice (Pipeline Watchlist)</strong>
      <p>The Pipeline Watchlist is provided for informational purposes only and reflects opportunities currently under review.</p>
      <p>Items listed are exploratory, may change materially, and may be paused or declined at any time.</p>
      <p>This is not an offer or solicitation. Any offering, if made, will be made solely through applicable offering documents.</p>
    </div>
  `;

  const grid = document.getElementById("pipelineGrid");

  grid.innerHTML = pipelineWatchlistData
    .map((item) => {
      return `
        <article class="pipeline-card">
          <div class="pipeline-card-head">
            <h4>${item.name}</h4>
            <span class="not-offer">Not an offer</span>
          </div>
          <p class="pipeline-location">${item.location}</p>
          <div class="pipeline-badges">
            <span class="pipeline-badge asset">${item.assetType}</span>
          </div>
          <ul class="pipeline-points">
            <li><strong>Theme:</strong> ${item.theme}</li>
            <li><strong>Profile:</strong> ${item.profile}</li>
            <li><strong>Updated:</strong> ${item.updated}</li>
          </ul>
        </article>
      `;
    })
    .join("");
}

function renderActiveDealsIndex(role) {
  ui.content.innerHTML = `
    <h3>Active Deals Room</h3>
    <p class="pipeline-intro">A member-only view of currently active deal rooms.</p>
    <p class="pipeline-intro">Choose a room to continue your review. Information may be revised as diligence progresses.</p>
    <p class="pipeline-intro">For orientation only. This page is not an offer or solicitation.</p>
    <div class="pipeline-grid" style="margin-top:14px;">
      ${activeDealsIndexData
        .map((deal) => {
          return `
            <article class="pipeline-card">
              <div class="pipeline-card-head">
                <h4>${deal.name}</h4>
              </div>
              <p class="pipeline-location">${deal.location}</p>
              <div class="pipeline-badges">
                <span class="pipeline-badge asset">${deal.assetType}</span>
              </div>
              <ul class="pipeline-points">
                <li><strong>Theme:</strong> ${deal.theme}</li>
                <li><strong>Profile:</strong> ${deal.profile}</li>
                <li><strong>Updated:</strong> ${deal.updated}</li>
              </ul>
              <div class="deal-actions">
                <a class="btn" href="${routeToFile(deal.pledgeHref, role)}&deal=${deal.dealKey}">I want to Pledge</a>
                <a class="btn" href="${routeToFile(deal.route, role)}">View Full Package</a>
              </div>
              <p class="deal-cta-note">Access is for information review only. Final terms are governed by applicable offering documents.</p>
            </article>
          `;
        })
        .join("")}
    </div>
    <div class="pipeline-disclaimer">
      <strong>Important Notice</strong>
      <p>This Active Deal Room contains preliminary and informational materials only. Any offering, if made, will be made exclusively through the applicable offering documents, which shall control in the event of any inconsistency.</p>
      <p>Prospective investors are responsible for their own review and should consult appropriate advisors. Investments involve risk, including possible loss of principal.</p>
      <p>No offer or solicitation shall be deemed made until the applicable offering documents are delivered and executed.</p>
    </div>
  `;
}

function renderContent(route, role) {
  const page = pages[route];
  if (route === "member-vault" && role === "member") {
    ui.breadcrumb.innerHTML = `
      <div class="portal-crumb">
        <div class="portal-crumb-title">Welcome to Club Member Portal</div>
        <div class="portal-crumb-subtitle">Your member privileges are active. You have full access to Qualified Access(Limited) resources and member-only modules.</div>
      </div>
    `;
  } else {
    ui.breadcrumb.textContent = `Home / ${page.title}`;
  }

  if (route === "start-here") {
    if (role === "qualified") {
      ui.content.innerHTML = `
        <h3>Next Step- Unlock Club Member Access</h3>
        <div class="list">
          <div class="item"><h4>What You Can Access Now</h4><p>Newsletter Room, Market Insights, Video Hub, Events & Notifications, Track Record, Club / GFD Guide, FAQ, and Contact Us.</p></div>
          <div class="item"><h4>What Club Member Unlocks</h4><p>Active Deals full package rooms, Pipeline Watchlist, Past Deals Library, and Member Reports.</p></div>
          <div class="item"><h4>How to Upgrade</h4><p>Use the primary action below to start the Club Member enrollment process.</p></div>
        </div>
        <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
          <a class="btn" href="${routeToFile("gfd-signup", role)}">Become Member</a>
          <a class="btn secondary" href="${routeToFile("club-membership-faq", role)}">Club Membership FAQ</a>
        </div>
        <div class="disclosure">Informational only. Not investment advice. Official offering/subscription documents govern where applicable.</div>
      `;
      return;
    }

    ui.content.innerHTML = `
      <h3>Welcome to Club Member Access</h3>
      <div class="list">
        <div class="item"><h4>Full Access Enabled</h4><p>Your account has full access to all Qualified Access(Limited) materials and all Club Member-only modules.</p></div>
      </div>
      <h3 style="margin-top:16px;">Your Accessible Modules</h3>
      <div class="list">
        <div class="item"><h4>Active Deals</h4><p>Member-only active deal room access.</p><div style="margin-top:8px;"><a class="btn" href="${routeToFile("active-deals", role)}">Enter</a></div></div>
        <div class="item"><h4>Member Reports</h4><p>Monthly and year-end reports for Club Members.</p><div style="margin-top:8px;"><a class="btn" href="${routeToFile("member-report", role)}">Enter</a></div></div>
        <div class="item"><h4>Pipeline Watchlist</h4><p>High-level themes currently under review.</p><div style="margin-top:8px;"><a class="btn" href="${routeToFile("pipeline", role)}">Enter</a></div></div>
        <div class="item"><h4>Past Deals Library</h4><p>Historical summary archive.</p><div style="margin-top:8px;"><a class="btn" href="${routeToFile("past-deals", role)}">Enter</a></div></div>
        <div class="item"><h4>Investor Education (General Information)</h4><p>General educational materials and guidance.</p><div style="margin-top:8px;"><a class="btn" href="${routeToFile("welcome", role)}">Enter</a></div></div>
      </div>
      <div class="disclosure">Informational only. Not investment advice. Official offering/subscription documents govern where applicable.</div>
    `;
    return;
  }

  if (route === "member-vault" && role === "qualified") {
    ui.content.innerHTML = `
      <div class="lock-panel">
        <h3>Only Club Members Can Access</h3>
        <p>You are currently in Qualified Access(Limited). The modules below are preview-only and become available after Club Member activation.</p>
      </div>
      <h3 style="margin-top:14px;">Club Member Library Preview</h3>
      <div class="qa-grid">
        <article class="qa-card"><h4>Active Deals (Full Package)</h4><p>Project brochure, pledge/subscription links, webinar recordings, official docs.</p><div class="qa-actions"><a class="btn locked" href="javascript:void(0)">Enter (Locked)</a></div></article>
        <article class="qa-card"><h4>Member Reports</h4><p>Monthly and annual updates exclusive to Club Members.</p><div class="qa-actions"><a class="btn locked" href="javascript:void(0)">Enter (Locked)</a></div></article>
        <article class="qa-card"><h4>Pipeline Watchlist</h4><p>Theme-level pipeline and selection standards.</p><div class="qa-actions"><a class="btn locked" href="javascript:void(0)">Enter (Locked)</a></div></article>
        <article class="qa-card"><h4>Past Deals Library</h4><p>Historical deal summaries and selected archived materials.</p><div class="qa-actions"><a class="btn locked" href="javascript:void(0)">Enter (Locked)</a></div></article>
        <article class="qa-card"><h4>Investor Education (General Information)</h4><p>General educational guidance on review approach, diligence, risk, and market cycles.</p><div class="qa-actions"><a class="btn locked" href="javascript:void(0)">Enter (Locked)</a></div></article>
      </div>
      <div style="margin-top:12px;">
        <a class="btn" href="${routeToFile("gfd-signup", role)}">Become Member</a>
      </div>
      <div class="disclosure">Preview only. Member-only content is restricted until Club Member activation.</div>
    `;
    return;
  }

  if (route === "qualified-library") {
    if (role === "member") {
      ui.content.innerHTML = `
        <h3>Qualified Access(Limited) Library</h3>
        <div class="qa-grid">
          <article class="qa-card">
            <h4>Events & Notifications</h4>
            <p>Upcoming livestream/events, RSVP links, and replay access.</p>
            <div class="qa-actions">
              <a class="btn" href="${routeToFile("events", role)}">View</a>
            </div>
          </article>
          <article class="qa-card">
            <h4>Market Insights</h4>
            <p>2026 report and research notes.</p>
            <div class="qa-actions">
              <a class="btn" href="${routeToFile("reports", role)}">View</a>
            </div>
          </article>
          <article class="qa-card">
            <h4>Newsletter Room</h4>
            <p>Weekly newsletters and updates organized by topic and date.</p>
            <div class="qa-actions">
              <a class="btn" href="${routeToFile("newsletters", role)}">View</a>
            </div>
          </article>
          <article class="qa-card">
            <h4>Video Hub</h4>
            <p>Curated YouTube playlists with quick topic navigation.</p>
            <div class="qa-actions">
              <a class="btn" href="${routeToFile("youtube", role)}">View</a>
            </div>
          </article>
          <article class="qa-card">
            <h4>Track Record</h4>
            <p>Standardized one-page summaries for strategy and execution review.</p>
            <div class="qa-actions">
              <a class="btn" href="${routeToFile("portfolio", role)}">View</a>
            </div>
          </article>
          <article class="qa-card">
            <h4>FAQ</h4>
            <p>Common investor questions and operating assumptions.</p>
            <div class="qa-actions">
              <a class="btn" href="${routeToFile("faq", role)}">View</a>
            </div>
          </article>
        </div>
        <div class="disclosure">Informational only. Not investment advice. Official offering/subscription documents govern where applicable.</div>
      `;
      return;
    }

    ui.content.innerHTML = `
      <h3>Qualified Access(Limited) Library</h3>
      <div class="qa-grid">
        <article class="qa-card">
          <h4>Club / GFD Guide</h4>
          <p>How the club works, refundable GFD rules, and sign-up path.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("gfd", role)}">View</a>
            <a class="btn" href="${routeToFile("gfd-signup", role)}">Become Memeber</a>
          </div>
        </article>
        <article class="qa-card">
          <h4>Events & Notifications</h4>
          <p>Upcoming livestream/events, RSVP links, and replay access.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("events", role)}">View</a>
          </div>
        </article>
        <article class="qa-card">
          <h4>Market Insights</h4>
          <p>2026 report and research notes.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("reports", role)}">View</a>
          </div>
        </article>
        <article class="qa-card">
          <h4>Newsletter Room</h4>
          <p>Weekly newsletters and updates organized by topic and date.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("newsletters", role)}">View</a>
          </div>
        </article>
        <article class="qa-card">
          <h4>Video Hub</h4>
          <p>Curated YouTube playlists with quick topic navigation.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("youtube", role)}">View</a>
          </div>
        </article>
        <article class="qa-card">
          <h4>Track Record</h4>
          <p>Standardized one-page summaries for strategy and execution review.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("portfolio", role)}">View</a>
          </div>
        </article>
        <article class="qa-card">
          <h4>FAQ</h4>
          <p>Common investor questions and operating assumptions.</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("faq", role)}">View</a>
          </div>
        </article>
      </div>
      <div class="disclosure">Informational only. Not investment advice. Official offering/subscription documents govern where applicable.</div>
    `;
    return;
  }

  if (route === "events") {
    ui.content.innerHTML = `
      <h3>Events & Notifications</h3>
      <div class="list">
        <div class="item">
          <h4>2026-03-04 Webinar: Real Asset Outlook</h4>
          <p>Status: Upcoming | RSVP open</p>
          <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a class="btn" href="${routeToFile("event-signup", role)}">Sign Up for Event</a>
          </div>
        </div>
        <div class="item">
          <h4>2026-03-18 Office Hours</h4>
          <p>Status: Upcoming | Limited seats</p>
          <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a class="btn" href="${routeToFile("event-signup", role)}">Sign Up for Event</a>
          </div>
        </div>
        <div class="item">
          <h4>2026-01-22 Market Briefing (Past)</h4>
          <p>Status: Closed | Replay available in library</p>
          <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a class="btn locked" href="javascript:void(0)">Sign Up Closed</a>
          </div>
        </div>
        <div class="item">
          <h4>2025-12-11 Portfolio Q&A (Past)</h4>
          <p>Status: Closed | Replay posted</p>
          <div style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;">
            <a class="btn locked" href="javascript:void(0)">Sign Up Closed</a>
          </div>
        </div>
      </div>
      <div class="disclosure">Demo behavior: past events have disabled sign-up buttons and cannot be clicked.</div>
    `;
    return;
  }

  if (route === "contact" && role === "qualified") {
    ui.content.innerHTML = `
      <h3>Contact Us</h3>
      <div class="list">
        <div class="item">
          <h4>Email</h4>
          <p><a class="inline-link" href="mailto:investor@ufundinvestment.com">investor@ufundinvestment.com</a></p>
        </div>
        <div class="item">
          <h4>Calendly Booking</h4>
          <p>Book a quick call with investor relations.</p>
          <div style="margin-top:8px;"><a class="btn" href="https://calendly.com/ufund-investor-relations">Schedule via Calendly</a></div>
        </div>
      </div>
      <div class="disclosure">For faster onboarding support, include your investor profile and target timeline in your message.</div>
    `;
    return;
  }

  if (route === "faq") {
    ui.content.innerHTML = `
      <h3>General FAQ</h3>
      <div class="list">
        <div class="item"><h4>What does UFUND do?</h4><p>UFUND organizes investor materials, due diligence resources, and member data rooms under clear communication boundaries.</p></div>
        <div class="item"><h4>How does investment onboarding work?</h4><p>Typical process: onboarding call -> qualified access review -> suitability checks -> subscription documents (if applicable) -> update cadence.</p></div>
        <div class="item"><h4>What is the minimum investment amount?</h4><p>Minimums depend on project terms. Demo range is typically USD 50,000 to USD 100,000.</p></div>
        <div class="item"><h4>When are reports shared?</h4><p>Qualified content updates are periodic; Club Member updates include deeper deal-room milestone alerts and updates.</p></div>
        <div class="item"><h4>What extra access does Club Member provide?</h4><p>Club Member includes Active Deals full package rooms, Pipeline Watchlist, Past Deals library, and Member Reports.</p></div>
      </div>
      <div class="disclosure">Demo FAQ for orientation only. Final terms are governed by official offering/subscription documents.</div>
    `;
    return;
  }

  if (route === "club-membership-faq") {
    ui.content.innerHTML = `
      <h3>Club Membership FAQ (Demo)</h3>
      <div class="list">
        <div class="item"><h4>1) What is UFUND Club Membership?</h4><p>UFUND Club Membership provides members-only access to our Investor Relations support, resources, and member portal features. It's designed to streamline communication and updates for active members.</p></div>
        <div class="item"><h4>2) How much is the Club Membership deposit/fee?</h4><p>The Club Membership requires a $5,000 membership deposit (or the current amount specified in your invitation). Please refer to your membership details for the exact figure.</p></div>
        <div class="item"><h4>3) Is the membership deposit refundable?</h4><p>Yes - the membership deposit is refundable, subject to the Club's terms and process. If you have questions, contact the IR team for details.</p></div>
        <div class="item"><h4>4) Can the membership deposit be used to subscribe to a project?</h4><p>No. The Club membership deposit cannot be applied toward a project subscription. Project subscriptions are separate and are handled through the official offering documents.</p></div>
        <div class="item"><h4>5) What happens if I use the deposit for a project subscription?</h4><p>If the deposit is applied/used for a project subscription, your Club Membership will be considered closed, and you will no longer have access to the Club Member portal as an active member (unless reactivated per policy).</p></div>
        <div class="item"><h4>6) How do I keep my Club Membership active?</h4><p>Your membership remains active as long as the membership deposit is maintained and your account remains in good standing under the Club terms.</p></div>
        <div class="item"><h4>7) Does membership guarantee an investment opportunity or allocation?</h4><p>No. Club Membership does not guarantee access to or allocation in any specific investment. All investments are subject to eligibility, availability, and final approval via offering documents.</p></div>
        <div class="item"><h4>8) Who can I contact if I have questions?</h4><p>Club Members have Priority Contact access. Please use the \"Member Priority Contact\" section to email the IR team or book time on our calendars.</p></div>
      </div>
      <div class="disclosure">Demo FAQ for orientation only. Final terms are governed by official offering/subscription documents.</div>
    `;
    return;
  }

  if (route === "welcome") {
    ui.content.innerHTML = `
      <h3>Investor Education (General Information)</h3>
      <div class="list">
        <div class="item"><h4>Investment Review (Overview)</h4><p>Private fund opportunities are assessed based on each investor's objectives, time horizon, and risk tolerance. Information is typically evaluated in context-including strategy, assumptions, and alignment-rather than as a single standardized score.</p></div>
        <div class="item"><h4>Due Diligence (General Considerations)</h4><p>Due diligence approaches vary by fund, strategy, and investor. Common areas of review may include sponsor background, deal structure, underwriting assumptions, and material risk factors, as applicable to the opportunity.</p></div>
        <div class="item"><h4>Risk & Uncertainty</h4><p>Private real estate investing involves meaningful uncertainty, including illiquidity, market and financing risk, execution risk, and timing considerations. Outcomes may differ materially from expectations, including the possibility of loss of principal.</p></div>
        <div class="item"><h4>Offering Documents</h4><p>Private offerings are governed by formal documentation. Investors typically rely on the applicable offering documents and their own independent evaluation when making an investment decision.</p></div>
        <div class="item"><h4>Investor Responsibility</h4><p>Private offerings are generally available to eligible investors who are responsible for conducting their own review and determining suitability. Investors may also consult their legal, tax, and financial advisors as appropriate for their circumstances.</p></div>
        <div class="item"><h4>Market Cycles</h4><p>Real estate markets operate in cycles that can influence valuations, liquidity, and exit timing. Market conditions may shift over time and can materially affect investment outcomes.</p></div>
      </div>
      <div class="important-notice">
        <strong>Important Notice</strong>
        <div style="margin-top:8px;">This page is for general educational purposes only.</div>
        <div style="margin-top:4px;">It is not investment, legal, or tax advice.</div>
        <div style="margin-top:8px;">Please note:</div>
        <div style="margin-top:4px;">1. Nothing here is an offer or solicitation.</div>
        <div style="margin-top:4px;">2. Any offering, if made, is made only through the applicable offering documents.</div>
        <div style="margin-top:4px;">3. Past performance is not indicative of future results.</div>
      </div>
    `;
    return;
  }

  if (route === "member-vault" && role === "member") {
    const memberStatus = "Active";
    const memberSince = localStorage.getItem("ufund_member_since") || "January 2026 (Demo)";
    const accessLevel = "Club Member";
    const pledgeBadge = appState.hasActiveDeal ? `<span class="new-pill pledge-pill">PLEDGE AVAILABLE</span>` : "";

    ui.content.innerHTML = `
      <div class="member-hero-grid">
        <article class="qa-card member-featured">
          <h4>Active Deals (Featured) ${pledgeBadge}</h4>
          <p>${appState.hasActiveDeal ? "Current active opportunities are available in your deal room." : "No live deal is currently open. You can still open the deal room status page."}</p>
          <div class="qa-actions">
            <a class="btn" href="${routeToFile("active-deals", role)}">Enter</a>
          </div>
        </article>
        <article class="qa-card member-status-card">
          <h4>Account Status</h4>
          <div class="status-list">
            <div class="status-row"><span>Member Status</span><strong>${memberStatus}</strong></div>
            <div class="status-row"><span>Member Since</span><strong>${memberSince}</strong></div>
            <div class="status-row"><span>Access Level</span><strong>${accessLevel}</strong></div>
          </div>
        </article>
      </div>
      <h3 style="margin-top:14px;">More Member Modules</h3>
      <p style="margin:0 0 10px; color:#5f7390;">Active Deals is shown in the featured card above. Use modules below for the rest of your member resources.</p>
      <div class="qa-grid">
        <article class="qa-card"><h4>Member Reports</h4><p>Monthly and annual updates exclusive to Club Members.</p><div class="qa-actions"><a class="btn" href="${routeToFile("member-report", role)}">Enter</a></div></article>
        <article class="qa-card"><h4>Pipeline Watchlist</h4><p>Theme-level pipeline and selection standards.</p><div class="qa-actions"><a class="btn" href="${routeToFile("pipeline", role)}">Enter</a></div></article>
        <article class="qa-card"><h4>Past Deals Library</h4><p>Summary archive with controlled historical materials.</p><div class="qa-actions"><a class="btn" href="${routeToFile("past-deals", role)}">Enter</a></div></article>
        <article class="qa-card"><h4>Investor Education (General Information)</h4><p>General educational guidance on review approach, diligence, risk, and market cycles.</p><div class="qa-actions"><a class="btn" href="${routeToFile("welcome", role)}">Enter</a></div></article>
      </div>
      <div class="disclosure">Informational only. Not investment advice. Official offering/subscription documents govern where applicable.</div>
    `;
    return;
  }

  if (route === "active-deals") {
    if (!appState.hasActiveDeal) {
      ui.content.innerHTML = `
        <h3>Active Deals Room</h3>
        <div class="lock-panel">
          <h3 style="margin:0 0 6px;">No Active Deals Right Now</h3>
          <p style="margin:0;">There are currently no live deals open for review. Please check Pipeline Watchlist and Member Reports for updates.</p>
        </div>
        <div class="disclosure">Status is controlled by \`hasActiveDeal\` state.</div>
      `;
      return;
    }
    renderActiveDealsIndex(role);
    return;
  }

  if (route === "pipeline") {
    renderPipelineWatchlist();
    return;
  }

  if (route === "contact" && role === "member") {
    ui.content.innerHTML = `
      <h3>Priority Member Support</h3>
      <div class="list">
        <div class="item"><h4>Lisa</h4><p><a class="inline-link" href="mailto:lisa@ufundinvestment.com">lisa@ufundinvestment.com</a></p><div style="margin-top:8px;"><a class="btn" href="https://calendly.com/lisa-ufund">Book with Lisa</a></div></div>
        <div class="item"><h4>Moyin</h4><p><a class="inline-link" href="mailto:moyin@ufundinvestment.com">moyin@ufundinvestment.com</a></p><div style="margin-top:8px;"><a class="btn" href="https://calendly.com/moyin-ufund">Book with Moyin</a></div></div>
        <div class="item"><h4>Jackie</h4><p><a class="inline-link" href="mailto:jiaqi@ufundinvestment.com">jiaqi@ufundinvestment.com</a></p><div style="margin-top:8px;"><a class="btn" href="https://calendly.com/jackie-ufund">Book with Jackie</a></div></div>
      </div>
      <div class="disclosure">Use the calendar tabs above to schedule a call with your preferred IR contact.</div>
    `;
    return;
  }

  if (route === "monthly-report") {
    ui.content.innerHTML = `
      <h3>Monthly Report Center</h3>
      <div class="list">
        <div class="item"><h4>2026-03 Monthly Report</h4><p>Portfolio highlights, operations update, and key risk notes.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/monthly-2026-03.html">Open Report</a></div></div>
        <div class="item"><h4>2026-02 Monthly Report</h4><p>Pipeline progress, event summary, and portfolio metrics overview.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/monthly-2026-02.html">Open Report</a></div></div>
        <div class="item"><h4>2026-01 Monthly Report</h4><p>Quarter kickoff commentary and operating trend snapshot.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/monthly-2026-01.html">Open Report</a></div></div>
      </div>
      <h3 style="margin-top:14px;">Archived</h3>
      <div class="list">
        <div class="item"><h4>2025-12 Monthly Report</h4><p>Year-end monthly summary and execution update.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/monthly-2025-12.html">Open Report</a></div></div>
      </div>
      <div class="disclosure">Demo list: monthly report links for Club Members.</div>
    `;
    return;
  }

  if (route === "year-end-report-center") {
    ui.content.innerHTML = `
      <h3>Year-End Report Center</h3>
      <div class="list">
        <div class="item"><h4>2025 Year-End Report</h4><p>Annual portfolio review, operating summary, and year-end outlook.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/year-end-2025.html">Open Report</a></div></div>
        <div class="item"><h4>2024 Year-End Report</h4><p>Annual execution recap and performance context.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/year-end-2024.html">Open Report</a></div></div>
        <div class="item"><h4>2023 Year-End Report</h4><p>Annual summary of portfolio progress and key milestones.</p><div style="margin-top:8px;"><a class="btn" href="mock/member-report/year-end-2023.html">Open Report</a></div></div>
      </div>
      <div class="disclosure">Demo list: year-end report links for Club Members.</div>
    `;
    return;
  }

  if (route === "deal-pledge-form") {
    const dealKey = getQueryParam("deal") || "harbor";
    const dealMap = {
      harbor: { name: "Harbor Logistics I", route: "deal-harbor" },
      sunbelt: { name: "Sunbelt Multifamily Select", route: "deal-sunbelt" },
      edge: { name: "Edge Data Infra", route: "deal-edge" }
    };
    const deal = dealMap[dealKey] || dealMap.harbor;

    ui.content.innerHTML = `
      <h3>${deal.name} - Pledge Form</h3>
      <p style="margin:0 0 12px; color:#5f7390;">Submit your indication of interest below. This is for demo workflow only.</p>
      <form id="dealPledgeForm" class="pledge-form">
        <div class="pledge-grid">
          <div class="pledge-field">
            <label>Subscriber First Name</label>
            <input required name="first_name" type="text" />
          </div>
          <div class="pledge-field">
            <label>Last Name</label>
            <input required name="last_name" type="text" />
          </div>
          <div class="pledge-field">
            <label>Email Address</label>
            <input required name="email" type="email" />
          </div>
          <div class="pledge-field">
            <label>Phone #</label>
            <input required name="phone" type="tel" />
          </div>
          <div class="pledge-field">
            <label>Project Name</label>
            <input required name="project_name" type="text" value="${deal.name}" />
          </div>
          <div class="pledge-field">
            <label>Pledge Amount</label>
            <input required name="pledge_amount" type="text" placeholder="e.g. USD 100,000" />
          </div>
          <div class="pledge-field pledge-full">
            <label>Street Address (Line 1)</label>
            <input required name="street_1" type="text" />
          </div>
          <div class="pledge-field pledge-full">
            <label>Street Address (Line 2)</label>
            <input name="street_2" type="text" />
          </div>
          <div class="pledge-field">
            <label>City</label>
            <input required name="city" type="text" />
          </div>
          <div class="pledge-field">
            <label>State</label>
            <input required name="state" type="text" />
          </div>
          <div class="pledge-field">
            <label>Zip Code</label>
            <input required name="zip_code" type="text" />
          </div>
          <div class="pledge-field">
            <label>Country</label>
            <input required name="country" type="text" />
          </div>
          <div class="pledge-field pledge-full">
            <label>Note (field for additional information)</label>
            <textarea name="note"></textarea>
          </div>
        </div>
        <div class="pledge-submit">
          <button type="submit" class="btn pledge-submit-btn">Submit</button>
        </div>
      </form>
    `;
    const form = document.getElementById("dealPledgeForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = `${routeToFile("deal-pledge-confirmation", role)}&deal=${encodeURIComponent(dealKey)}`;
      });
    }
    return;
  }

  if (route === "deal-pledge-confirmation") {
    const dealKey = getQueryParam("deal") || "harbor";
    const backMap = {
      harbor: "deal-harbor",
      sunbelt: "deal-sunbelt",
      edge: "deal-edge"
    };
    const backRoute = backMap[dealKey] || "deal-harbor";
    ui.content.innerHTML = `
      <h3>Pledge Confirmation</h3>
      <div class="list">
        <div class="item"><p>Thank you for submitting your pledge.</p></div>
        <div class="item"><p>Your indication of interest has been received and recorded.</p></div>
        <div class="item"><p>Please note that submission of a pledge does not guarantee allocation in this offering. Allocations are determined on a first-come, first-served basis, subject to availability and final approval.</p></div>
        <div class="item"><p>If the offering becomes fully subscribed, your pledge may be placed on a waitlist. We will notify you of your allocation status once confirmed. Final participation is subject to review and execution of the applicable offering documents.</p></div>
      </div>
      <div style="margin-top:12px;"><a class="btn" href="${routeToFile(backRoute, role)}">Back to Deal page</a></div>
    `;
    return;
  }

  if (route === "gfd-agreement") {
    ui.content.innerHTML = `
      <h3>Sign GFD Agreement</h3>
      <p style="margin:0 0 12px; color:#5f7390;">To become a member, please submit your details below. We will send your GFD Agreement to your email via DocuSign.</p>
      <form id="gfdAgreementForm" class="list" style="max-width:560px;">
        <div class="item">
          <h4>First Name</h4>
          <p><input required name="first_name" type="text" style="width:100%; padding:10px; border:1px solid #d8e2ef; border-radius:8px;" /></p>
        </div>
        <div class="item">
          <h4>Last Name</h4>
          <p><input required name="last_name" type="text" style="width:100%; padding:10px; border:1px solid #d8e2ef; border-radius:8px;" /></p>
        </div>
        <div class="item">
          <h4>Email Address</h4>
          <p><input required name="email" type="email" style="width:100%; padding:10px; border:1px solid #d8e2ef; border-radius:8px;" /></p>
        </div>
        <div>
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
      <div class="disclosure">
        After clicking Submit, you will receive the agreement via DocuSign in your email.<br />
        In the final page of the DocuSign document, there will be wire instructions for the Good Faith Deposit (GFD).<br />
        If you do not receive the DocuSign email, please check your spam/junk folder.<br />
        If still not received, contact us at investor@ufundinvestment.com.
      </div>
    `;
    const form = document.getElementById("gfdAgreementForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = routeToFile("gfd-confirmation", role);
      });
    }
    return;
  }

  if (route === "gfd-confirmation") {
    ui.content.innerHTML = `
      <h3>Thank You - Your Membership Request Is Received</h3>
      <p style="margin:0 0 12px; color:#5f7390;">Welcome, and thank you for your interest in becoming a member. We have received your request, and your DocuSign agreement has been sent to your email.</p>
      <div class="list">
        <div class="item"><h4>Next Step 1</h4><p>Open the DocuSign email and complete signing.</p></div>
        <div class="item"><h4>Next Step 2</h4><p>Follow the wire instructions in the final page to submit the Good Faith Deposit (GFD).</p></div>
        <div class="item"><h4>Next Step 3</h4><p>Once documents are signed and GFD is received, we will activate your Club access.</p></div>
      </div>
      <div class="disclosure">If you have any questions, contact investor@ufundinvestment.com.</div>
    `;
    return;
  }

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

async function bootstrap() {
  await loadAppState();
  const route = getRoute();
  const role = resolveInitialRole();
  const path = window.location.pathname;
  const isIndexPage = path.endsWith("/index.html") || path === "/" || path === "";

  if (isIndexPage) {
    const homeRoute = role === "member" ? "member-vault" : "start-here";
    window.location.href = routeToFile(homeRoute, role);
    return;
  }

  if (!pages[route]) {
    const fallbackRoute = role === "member" ? "member-vault" : "start-here";
    window.location.href = routeToFile(fallbackRoute, role);
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
    const nextRoute = nextRole === "qualified" ? "start-here" : (canAccess(route, nextRole) ? route : dashboards[nextRole].route);
    window.location.href = routeToFile(nextRoute, nextRole);
  });

  renderHeader(route, role);
  renderNav(route, role);
  renderCards(route, role);
  renderContent(route, role);
}

bootstrap();
