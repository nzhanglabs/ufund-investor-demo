(function () {
  // Demo mode: allow direct page access without login/session checks.

  const params = new URLSearchParams(window.location.search);
  const role = params.get("role") || "member";
  const page = document.body.dataset.page || "home";

  document.querySelectorAll("[data-role-link]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (href.startsWith("http") || href.startsWith("mailto:")) return;
    const join = href.includes("?") ? "&" : "?";
    a.setAttribute("href", `${href}${join}role=${encodeURIComponent(role)}`);
  });

  document.querySelectorAll(".top-nav a").forEach((a) => {
    if (a.dataset.page === page) a.classList.add("active");
  });

  const disclaimerHost = document.querySelector("main.page") || document.body;
  if (disclaimerHost && !document.querySelector(".page-disclaimer") && !document.getElementById("globalDisclosure")) {
    const disclaimer = document.createElement("section");
    disclaimer.id = "globalDisclosure";
    disclaimer.className = "page-disclaimer";
    disclaimer.innerHTML = `
      <p><strong>Disclaimer:</strong> UFUND Investment LLC and its affiliates do not endorse or guarantee the performance of any specific investment opportunity. Investments offered through our platform are speculative in nature and involve substantial risk. You should not invest unless you can bear the risk of loss of capital, including the potential for total loss. Diversification does not ensure a profit or protect against loss.</p>
      <p>All investors should carefully consider their individual financial situation and consult with a professional advisor before making any investment decision. Private placements are illiquid investments and are intended for investors who do not require a liquid investment.</p>
      <p>Performance information provided through our platform has not been audited or independently verified. Any open investments are available exclusively to accredited investors.</p>
    `;
    disclaimerHost.appendChild(disclaimer);
  }

  const logout = document.getElementById("logoutBtn");
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("ufund_auth_session");
      window.location.href = "member-vault.html?role=member";
    });
  }
})();
