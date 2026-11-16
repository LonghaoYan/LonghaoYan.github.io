const translate = (key) => window.siteI18n?.t(key) ?? key;

const publicationFilterButtons = document.querySelectorAll("[data-publication-filter]");
const publicationCards = document.querySelectorAll(".publication-list [data-paper]");
const publicationMoreButton = document.querySelector("[data-publication-more]");
const publicationMoreLabel = document.querySelector("[data-publication-more-label]");
const publicationPreviewLimit = 6;
let activePublicationFilter = "all";
let publicationExpanded = false;

function updatePublicationMore() {
  if (!publicationMoreButton || !publicationMoreLabel) return;
  publicationMoreButton.parentElement.hidden = activePublicationFilter !== "all";
  publicationMoreButton.setAttribute("aria-expanded", String(publicationExpanded));
  publicationMoreLabel.textContent = translate(publicationExpanded ? "publicationsShowLess" : "publicationsShowAll");
}

const applyPublicationVisibility = () => {
  let visibleIndex = 0;

  publicationCards.forEach((card) => {
    const matchesFilter = activePublicationFilter === "all" || card.dataset.category === activePublicationFilter;
    const withinPreview = activePublicationFilter !== "all" || publicationExpanded || visibleIndex < publicationPreviewLimit;
    const visible = matchesFilter && withinPreview;
    card.hidden = !visible;
    if (matchesFilter) visibleIndex += 1;
  });

  updatePublicationMore();
};

publicationFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePublicationFilter = button.dataset.publicationFilter;
    publicationExpanded = false;

    publicationFilterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    applyPublicationVisibility();
  });
});

publicationMoreButton?.addEventListener("click", () => {
  publicationExpanded = !publicationExpanded;
  applyPublicationVisibility();

  if (!publicationExpanded) {
    document.querySelector("#publications")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }
});

const publicationArchive = document.querySelector(".publication-archive");
const contactSection = document.querySelector("#contact");

if (publicationArchive && contactSection) {
  publicationArchive.classList.add("is-standalone");
  contactSection.before(publicationArchive);

  const hashTarget = window.location.hash.slice(1);
  if (["systems", "more", "all-publications", "contact"].includes(hashTarget)) {
    const realignHashTarget = () => window.requestAnimationFrame(() => {
      const target = document.getElementById(hashTarget);
      if (!target) return;
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      target.scrollIntoView({ block: "start" });
      window.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      });
    });

    const scheduleHashRealignment = () => {
      realignHashTarget();
      window.setTimeout(realignHashTarget, 700);
    };

    if (document.readyState === "complete") scheduleHashRealignment();
    else window.addEventListener("load", scheduleHashRealignment, { once: true });
  }
}

const archiveSearchInput = document.querySelector("[data-publication-search]");
const archiveFilterButtons = document.querySelectorAll("[data-archive-filter]");
const archiveEntries = document.querySelectorAll("[data-archive-entry]");
const archiveYearSections = document.querySelectorAll("[data-archive-year]");
const archiveResults = document.querySelector("[data-publication-results]");
const archiveEmpty = document.querySelector("[data-publication-empty]");
const archiveMoreButton = document.querySelector("[data-publication-archive-more]");
const archiveMoreLabel = document.querySelector("[data-publication-archive-more-label]");
const archivePreviewLimit = 3;
let activeArchiveFilter = "all";
let archiveExpanded = false;

const updateArchiveResults = (visible) => {
  if (!archiveResults) return;
  archiveResults.textContent = translate("publicationArchiveResults")
    .replace("{visible}", String(visible))
    .replace("{total}", String(archiveEntries.length));
};

const applyArchiveFilters = () => {
  const query = archiveSearchInput?.value.trim().toLocaleLowerCase() ?? "";
  const previewMode = activeArchiveFilter === "all" && !query;
  let visibleCount = 0;
  let matchingIndex = 0;

  archiveEntries.forEach((entry) => {
    const roles = entry.dataset.role?.split(" ").filter(Boolean) ?? [];
    const matchesCategory = activeArchiveFilter === "all"
      || entry.dataset.type === activeArchiveFilter
      || roles.includes(activeArchiveFilter);
    const year = entry.closest("[data-archive-year]")?.dataset.archiveYear ?? "";
    const searchText = `${year} ${entry.textContent}`.toLocaleLowerCase();
    const matches = matchesCategory && (!query || searchText.includes(query));
    const withinPreview = !previewMode || archiveExpanded || matchingIndex < archivePreviewLimit;
    const visible = matches && withinPreview;
    entry.hidden = !visible;
    if (visible) visibleCount += 1;
    if (matches) matchingIndex += 1;
  });

  archiveYearSections.forEach((section) => {
    section.hidden = !section.querySelector("[data-archive-entry]:not([hidden])");
  });

  if (archiveEmpty) archiveEmpty.hidden = visibleCount !== 0;
  if (archiveMoreButton && archiveMoreLabel) {
    archiveMoreButton.parentElement.hidden = !previewMode;
    archiveMoreButton.setAttribute("aria-expanded", String(archiveExpanded));
    archiveMoreLabel.textContent = translate(archiveExpanded ? "publicationArchiveShowLess" : "publicationArchiveShowAll");
  }
  updateArchiveResults(visibleCount);
};

archiveFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeArchiveFilter = button.dataset.archiveFilter;
    archiveExpanded = false;
    archiveFilterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    applyArchiveFilters();
  });
});

archiveSearchInput?.addEventListener("input", applyArchiveFilters);

archiveMoreButton?.addEventListener("click", () => {
  archiveExpanded = !archiveExpanded;
  applyArchiveFilters();

  if (!archiveExpanded) {
    publicationArchive?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }
});

const updatePublicationArchiveLanguage = () => {
  if (archiveSearchInput) {
    archiveSearchInput.placeholder = translate("publicationArchiveSearchPlaceholder");
  }
  applyArchiveFilters();
};

window.addEventListener("site-language-change", () => {
  updatePublicationMore();
  updatePublicationArchiveLanguage();
});
updatePublicationMore();
applyPublicationVisibility();
updatePublicationArchiveLanguage();
