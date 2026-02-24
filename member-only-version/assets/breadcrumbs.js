(function () {
  function getCurrentFile() {
    const path = window.location.pathname.split("?")[0];
    const last = path.substring(path.lastIndexOf("/") + 1);
    return last || "index.html";
  }

  function getRole() {
    const params = new URLSearchParams(window.location.search);
    return params.get("role") || "";
  }

  function addRole(href) {
    if (!href) return "";
    if (/^(https?:|mailto:|javascript:|#)/i.test(href)) return href;

    const role = getRole();
    const url = new URL(href, window.location.href);
    if (role && !url.searchParams.has("role")) {
      url.searchParams.set("role", role);
    }
    return `${url.pathname}${url.search}${url.hash}`;
  }

  const breadcrumbMap = {
    "index.html": [
      { label: "Home", href: "member-vault.html" }
    ],
    "member-vault.html": [
      { label: "Home", href: "member-vault.html" }
    ],
    "active-deals.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Deal Room" }
    ],
    "deal-harbor.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Deal Room", href: "active-deals.html" },
      { label: "View Full Package" }
    ],
    "deal-sunbelt.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Deal Room", href: "active-deals.html" },
      { label: "View Full Package" }
    ],
    "deal-edge.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Deal Room", href: "active-deals.html" },
      { label: "View Full Package" }
    ],
    "deal-pledge-form.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Deal Room", href: "active-deals.html" },
      { label: "I want to Pledge" }
    ],
    "deal-pledge-confirmation.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Deal Room", href: "active-deals.html" },
      { label: "Pledge Confirmation" }
    ],
    "qualified-library.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Documents" }
    ],
    "member-report.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Documents", href: "qualified-library.html" },
      { label: "Member Reports" }
    ],
    "reports.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Documents", href: "qualified-library.html" },
      { label: "Market Insight" }
    ],
    "newsletters.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Documents", href: "qualified-library.html" },
      { label: "Newsletter" }
    ],
    "faq.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "FAQ" }
    ],
    "events.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Events" }
    ],
    "event-signup.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Events", href: "events.html" },
      { label: "Sign Up" }
    ],
    "contact.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Contact" }
    ],
    "calendly-demo.html": [
      { label: "Home", href: "member-vault.html" },
      { label: "Contact", href: "contact.html" },
      { label: "Book a Meeting" }
    ]
  };

  function render(target) {
    const file = getCurrentFile();
    const crumbs = breadcrumbMap[file] || [{ label: "Home", href: "member-vault.html" }];
    if (!target || !crumbs.length) return;

    const html = crumbs
      .map((crumb, idx) => {
        const isLast = idx === crumbs.length - 1;
        if (isLast || !crumb.href) {
          return `<span class="crumb-current">${crumb.label}</span>`;
        }
        return `<a href="${addRole(crumb.href)}">${crumb.label}</a>`;
      })
      .join('<span class="crumb-sep">/</span>');

    target.innerHTML = html;
    target.style.display = "flex";
  }

  window.UfundBreadcrumbs = { render };
})();
