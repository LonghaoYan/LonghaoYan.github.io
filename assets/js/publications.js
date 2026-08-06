const paperDetails = {
  "science-2026": {
    abstract: "High-fidelity geometry for physical-world modeling demands real-time, dense, and differentiable deformation fields on manifolds. Neural dynamical systems using adaptive stepsize integration with embedded neural networks excel at these tasks but still suffer latency on the order of hundreds of milliseconds. This work reports a sub-10-millisecond neural dynamical system that leverages the precisely controlled conductance drift and multilevel compute-in-memory capabilities of phase-change memristors. A 40-nm chip achieves 2.12-ms single-iteration latency at an error tolerance of 10⁻⁷, delivering 3.82× to 36.27× higher speed and 11.75× to 24.73× lower power than state-of-the-art neural dynamical system hardware.",
    captions: ["Fig. 1 · 神经动力系统的整体架构与硬件实现", "Fig. 2 · 相变存储器件表征与原位步长搜索"],
    captionsEn: ["Fig. 1 · Neural dynamical system architecture and hardware implementation", "Fig. 2 · Phase-change memory characterization and in-situ stepsize search"]
  },
  "iedm-2025-learning": {
    abstract: "Embodied self-supervised learning enables intelligent agents to adapt autonomously to changing environments, but conventional architectures incur high energy and latency from frequent data movement. This work presents an 8-Mb learning-aware RRAM compute-in-memory accelerator fabricated in 40 nm. A two-stage analog weight programming unit enables fast, precise and relaxation-mitigated conductance programming, while a neural-optimized gradient-aware scheduler supports adaptive, lifetime-aware programming. The chip improves programming speed by 10.2× and system lifetime by 11.7×. On a quadruped robot terrain-adaptation task, it achieves 347× higher energy efficiency and 8.7× lower latency than a GPU baseline.",
    captions: ["Fig. 1–2 · 学习感知 RRAM 存算一体加速器设计", "Fig. 15–17 · 芯片、测试系统与四足机器人部署"],
    captionsEn: ["Fig. 1–2 · Learning-aware RRAM compute-in-memory accelerator", "Fig. 15–17 · Chip, test system, and quadruped-robot deployment"]
  },
  "iedm-2025-multimodal": {
    abstract: "Multimodal models are central to advanced artificial intelligence, yet their deployment on edge devices faces substantial algorithmic and hardware constraints. This work fabricates a 9-Mb, 64-core PCM compute-in-memory processor in 40 nm and introduces intelligent predictive programming that realizes diverse conductance distributions while predicting pre-drift target ranges. Programming accuracy improves by 26.3% over conventional drift models. A software-hardware co-design exploits analog and stochastic PCM characteristics to implement positive-incentive distributions for semantic fusion. In a medical-instrument detection task, the system achieves 587× higher energy efficiency and 85× lower latency than a conventional GPU.",
    captions: ["Fig. 1–4 · 多模态融合方法与 64 核 PCM 处理器架构", "Fig. 21–22 · 芯片系统与医疗器械检测任务"],
    captionsEn: ["Fig. 1–4 · Multimodal fusion method and 64-core PCM processor", "Fig. 21–22 · Chip system and medical-instrument detection task"]
  },
  "iedm-2025-mixed": {
    abstract: "Embodied AI requires multiple mixed-precision models to run on one chip, creating challenges in memory density, data types, energy efficiency and robustness. This work presents a 40-nm PCM compute-in-memory chip that fuses analog and digital compute-in-memory to support mixed integer and floating-point precision. Analog adaptive write-verify circuits provide fast, accurate conductance programming, while a hardware-software co-designed adaptive drift-compensation scheme improves robustness. The chip reduces computational loss caused by conductance drift by 13.1× and achieves energy efficiencies of 0.821 TFLOPS/W in digital mode and 67.97 TOPS/W in analog mode.",
    captions: ["Fig. 1 · 混合精度模拟/数字存算一体芯片设计", "Fig. 22–24 · 机械臂任务部署与性能评估"],
    captionsEn: ["Fig. 1 · Mixed-precision analog/digital compute-in-memory chip", "Fig. 22–24 · Robotic-arm deployment and performance evaluation"]
  },
  "iedm-2024-manifold": {
    abstract: "Neural manifold learning is important for intelligent edge brain-computer interfaces, but conventional platforms struggle with the computing demand of massive neural data. This work designs a 288-Kb dual-mode PCM compute-in-memory chip in 40 nm and uses its two cores for vector-matrix multiplication and true random number generation. The resulting system is the first PCM-based implementation of neural manifold learning. An adaptive drift-compensation scheme mitigates PCM conductance drift and improves vector-matrix multiplication accuracy. Compared with a CPU running the same tasks, the chip improves energy efficiency by 476× and throughput by 264×.",
    captions: ["Fig. 1–2 · 神经流形学习系统与双模 PCM 芯片方案", "Fig. 17–18 · 芯片测试平台与神经流形学习部署"],
    captionsEn: ["Fig. 1–2 · Neural manifold learning system and dual-mode PCM chip", "Fig. 17–18 · Chip test platform and neural manifold learning deployment"]
  },
  "iedm-2021-uncertainty": {
    abstract: "This work combines the multilevel conductance and intrinsic stochasticity of a 4-Mb phase-change memory chip to implement convolutional and stochastic layers for uncertainty quantification. The device stochasticity is used directly to capture model uncertainty, while heater-electrode size is varied to control the phase-change volume and device characteristics. Devices with larger heaters show lower conductance drift, reduced state variation and improved linearity. On uncertainty-quantification benchmarks, the PCM implementation improves time efficiency by 557× and energy efficiency by 1.73×10⁶ over a GPU.",
    captions: ["Fig. 1–2 · 不确定性量化任务与系统框架", "Fig. 26 / Table 2 · 任务精度与软硬件性能基准"],
    captionsEn: ["Fig. 1–2 · Uncertainty-quantification task and system framework", "Fig. 26 / Table 2 · Accuracy and hardware/software performance benchmarks"]
  },
  "afm-2023": {
    abstract: "Neural architecture search can automatically design high-performance models, but software-based search requires substantial time and energy. This work fabricates 4-Mb PCM chips that enable two in-memory operations: multiply-accumulate and ranking. The influence of coating-layer material on blade-type heater devices is analyzed, and the resulting analog and stochastic device properties support hardware neural architecture search. Using 512 × 512 arrays fabricated in a 40-nm CMOS process, the system finds models that are 25–53× smaller than manually designed networks while improving energy efficiency by 4779× and time efficiency by 123× over GPU-based search.",
    captions: ["Fig. 1 · 存内神经架构搜索概念与相变存储器特性", "Fig. 3 · 存内乘累加、存内排序与搜索流程"],
    captionsEn: ["Fig. 1 · In-memory neural architecture search and PCM characteristics", "Fig. 3 · In-memory MAC, ranking, and search workflow"]
  },
  "advs-2025": {
    abstract: "Object detection demands both classification and localization and places heavy computing requirements on edge systems. This work fabricates a 128-Mb C-doped Ge₂Sb₂Te₅ phase-change memory chip in 40 nm with a memory yield of 99.99999% and uses it for in-memory vector-matrix multiplication and max computation. A mixed-precision weight-mapping strategy reduces the energy consumption of analog-to-digital converters by up to 22.3× while preserving network performance. The resulting memristive in-memory object-detection system achieves 4,180× higher energy efficiency and 228× greater computational throughput than GPU implementations.",
    captions: ["Fig. 1 · 存内目标检测系统与软硬件协同架构", "Fig. 2 · 128-Mb PCM 芯片与器件编程特性"],
    captionsEn: ["Fig. 1 · In-memory object-detection system and hardware-software co-design", "Fig. 2 · 128-Mb PCM chip and device-programming characteristics"]
  },
  "esserc-2025": {
    abstract: "Conventional ReRAM compute-in-memory designs based on current- or voltage-mode computation suffer from limited array parallelism, direct-current overhead, IR drop and nonlinearity. This work fabricates a 40-nm charge-mode compute-in-memory chip using a 4T2R2C differential ReRAM cell and FIA-based charge-domain analog accumulation. The design increases the on/off signal ratio, reduces direct current and improves computational linearity to an R² of 0.9992. It achieves a peak throughput of 53.47 TOPS and a normalized peak energy efficiency of 1308.24 TOPS/W.",
    captions: ["Fig. 2 · 电荷域 ReRAM 存算宏架构", "Fig. 7 · 芯片测试平台与面积、能耗构成"],
    captionsEn: ["Fig. 2 · Charge-domain ReRAM compute-in-memory macro", "Fig. 7 · Chip test platform, area, and energy breakdown"]
  },
  "esserc-2026-hybrid": {
    abstract: "Efficient edge AI requires both high precision and low power, while conventional RRAM compute-in-memory systems are limited by DC power, IR drop and transistor mismatch. This work proposes a heterogeneous analog/digital hybrid system with hierarchical co-optimization. A 4T2R1C charge-domain cell eliminates steady-state DC conduction and reduces energy by 15.6× over current-domain designs. At system level, reinforcement-learning-driven mixed-precision deployment coordinates INT8 analog and FP16 digital clusters. Spatial core replication and temporal inter-core streaming bridge their throughput disparity and deliver a 3.3× system-level speedup.",
    captions: ["Fig. 1 · 混合模拟/数字 RRAM 系统的分层协同设计", "Fig. 6 · ACIM/DCIM 芯片显微图与核心布局"],
    captionsEn: ["Fig. 1 · Hierarchical co-design of a hybrid analog/digital RRAM system", "Fig. 6 · ACIM/DCIM chip micrographs and core layout"]
  },
  "esserc-2026-wear": {
    abstract: "Aerial embodied intelligence requires autonomous drones to perform edge on-chip learning under strict energy, latency and reliability constraints. This work presents a 40-nm, 8-Mb, 16-core RRAM compute-in-memory processor that addresses device- and system-level wear. Overshoot-optimized programming reduces programming latency by 2.1×, write stress by up to 5× and correction overhead by 5×. Lightweight compute-aware wear leveling extends block lifetime by 15.3× with less than 6.3% throughput overhead. Together, the techniques extend chip lifetime by 87×. In adaptive drone cruise control, the system reduces energy by 12× and latency by 140× versus an NVIDIA Jetson AGX Orin.",
    captions: ["Fig. 1 · 面向片上学习的耐磨损机制与处理器设计", "Fig. 6 · 16 核芯片、无人机系统与任务验证"],
    captionsEn: ["Fig. 1 · Wear-aware mechanisms and processor for on-chip learning", "Fig. 6 · 16-core chip, drone system, and task validation"]
  },
  "esserc-2026-foveated": {
    abstract: "This work proposes a 40-nm PCM chip for low-latency, reliable and energy-efficient edge real-time rendering. It combines a hardware-software co-designed mixed-precision foveated neural radiance field system with analog/digital compute-in-memory, PCM-oriented error-correction codes with a redundant ADC, and a two-level sparsity-aware multiply-accumulate method. The chip achieves 2.38 FPS/mm² and 3.58 mJ/frame for edge real-time rendering, with high area and energy efficiency and nearly no loss in image quality.",
    captions: ["Fig. 1 · 混合精度注视点渲染与可靠性设计", "Fig. 7 · 芯片测试平台与注视点渲染效果"],
    captionsEn: ["Fig. 1 · Mixed-precision foveated rendering and reliability design", "Fig. 7 · Chip test platform and foveated-rendering results"]
  }
};

const translate = (key) => window.siteI18n?.t(key) ?? key;
const getLanguage = () => window.siteI18n?.getLanguage() ?? "zh-CN";
const getCaptions = (paper) => getLanguage() === "en" ? paper.captionsEn : paper.captions;

const closeCard = (card) => {
  const button = card.querySelector(".paper-toggle");
  const detail = card.querySelector(".paper-detail");
  card.classList.remove("is-open");
  button.setAttribute("aria-expanded", "false");
  button.querySelector("span").textContent = translate("paperOpen");
  detail.hidden = true;
};

document.querySelectorAll(".publication-list [data-paper]").forEach((card) => {
  const slug = card.dataset.paper;
  const paper = paperDetails[slug];
  if (!paper) return;

  const title = card.querySelector("h3").textContent.trim();
  const detailId = `paper-detail-${slug}`;
  const detail = document.createElement("div");
  detail.className = "paper-detail";
  detail.id = detailId;
  detail.hidden = true;
  detail.innerHTML = `
    <div class="paper-abstract">
      <p class="detail-label">${translate("abstractLabel")}</p>
      <p>${paper.abstract}</p>
    </div>
    <div class="paper-gallery">
      ${getCaptions(paper).map((caption, index) => `
        <figure>
          <a href="assets/images/papers/${slug}/figure-${index + 1}.jpg?v=6" target="_blank" rel="noopener" data-figure-index="${index}" aria-label="${translate("figureOpen")} ${index + 1}: ${title}">
            <picture>
              <source media="(max-width: 640px)" srcset="assets/images/papers/${slug}/figure-${index + 1}-640.webp?v=7">
              <img src="assets/images/papers/${slug}/figure-${index + 1}.webp?v=7" data-figure-index="${index}" alt="${title}: ${caption}" loading="lazy" decoding="async">
            </picture>
          </a>
          <figcaption><span class="caption-number">0${index + 1}</span><span class="caption-text">${caption}</span></figcaption>
        </figure>
      `).join("")}
    </div>
  `;

  const toggle = document.createElement("button");
  toggle.className = "paper-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", detailId);
  toggle.innerHTML = `<span>${translate("paperOpen")}</span><i aria-hidden="true"></i>`;

  card.append(toggle, detail);

  const toggleCard = () => {
    const willOpen = !card.classList.contains("is-open");
    document.querySelectorAll(".publication-list li.is-open").forEach(closeCard);
    if (willOpen) {
      card.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.querySelector("span").textContent = translate("paperClose");
      detail.hidden = false;
    }
  };

  toggle.addEventListener("click", toggleCard);
  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button, .paper-detail")) return;
    toggleCard();
  });
});

const updatePublicationLanguage = () => {
  document.querySelectorAll(".publication-list [data-paper]").forEach((card) => {
    const paper = paperDetails[card.dataset.paper];
    if (!paper) return;

    const title = card.querySelector("h3").textContent.trim();
    const captions = getCaptions(paper);
    card.querySelector(".detail-label").textContent = translate("abstractLabel");
    card.querySelector(".paper-toggle span").textContent = translate(card.classList.contains("is-open") ? "paperClose" : "paperOpen");
    card.querySelectorAll(".paper-gallery figure").forEach((figure, index) => {
      const caption = captions[index];
      figure.querySelector(".caption-text").textContent = caption;
      figure.querySelector("a").setAttribute("aria-label", `${translate("figureOpen")} ${index + 1}: ${title}`);
      figure.querySelector("img").setAttribute("alt", `${title}: ${caption}`);
    });
  });
  updatePublicationMore();
};

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
    if (!visible && card.classList.contains("is-open")) closeCard(card);
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
  if (["experience", "more", "all-publications", "contact"].includes(hashTarget)) {
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
  updatePublicationLanguage();
  updatePublicationArchiveLanguage();
});
updatePublicationLanguage();
applyPublicationVisibility();
updatePublicationArchiveLanguage();
