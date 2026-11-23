const translations = {
  "zh-CN": {
    aboutHighlightsLabel: "论文与成果",
    aboutProjectsLabel: "科研项目与合作",
    archiveShortcut: "完整论文档案 ↗",
    skipLink: "跳至主要内容",
    brandHome: "返回首页",
    navOpen: "打开导航菜单",
    navClose: "关闭导航菜单",
    navHome: "首页",
    primaryNav: "主导航",
    navAbout: "简介",
    navResearch: "研究",
    navSystems: "芯片",
    navPublications: "成果",
    navPublicationsShort: "成果",
    navExperience: "经历",
    navExperienceShort: "经历",
    navMore: "更多",
    navContact: "联系",
    mobileNavOverview: "栏目快速导航",
    mobileNavGoTo: "前往{section}",
    heroEyebrow: "新型存储 · 存算一体 · 智能计算",
    heroNamePrimary: "闫龙皞",
    heroNameSecondary: "Longhao Yan",
    heroLead: "大算力、高能效存算一体 AI 芯片",
    heroSummary: "围绕器件工艺、存算电路、芯片架构与算法应用开展交叉研究，探索从新型存储器件到智能系统的完整技术链路。",
    heroScrollHint: "向下探索",
    portraitAlt: "闫龙皞的个人照片",
    portraitAffiliation: "北京大学 · 博士后",
    portraitRole: "新型存储与存算一体芯片",
    aboutTitle: "从新型存储器到高能效智能计算",
    aboutParagraph1: "面向高能效智能计算，开展存算一体芯片的器件—电路—架构—算法跨层协同研究，贯通核心技术创新、芯片工程实现与系统应用验证。",
    aboutHighlights: "研究成果包括国际顶尖期刊与会议论文 31 篇，其中以第一作者或通讯作者（含共同）身份发表 20 篇，包括 Science（IF=47.3）、IEDM（8 篇一作）、Advanced Functional Materials（IF=19.9，封面）、Advanced Science（IF=14.1）、ESSERC（4 篇）、EDTM（3 篇）等；合作成果包括 Nature Electronics（IF=40.9）、Nature Communications（IF=15.7）、Advanced Materials（IF=26.8）等。",
    aboutProjects: "主持国家自然科学基金青年基金 C 类、国家自然科学基金联合基金重点项目（课题）和中国博士后科学基金面上项目等科研任务，参与国家重点研发计划、基金委重大研究计划集成项目、新基石研究员项目，以及多项与华为、国家电网、中芯国际和阿里巴巴达摩院等合作应用项目。",
    aboutParagraph2: "相关研究成果持续获得学术界和工业界认可。本人在微电子领域旗舰会议 IEDM 上以第一作者（含共同）发表或已接收 8 篇论文，获选 Top Ranked Student Paper（IEDM 2021、2026）、Technical Highlight（IEDM 2025）和 Best Paper Award Finalist（ICTA 2025）。《科学》杂志高度评价神经动力学工作“代表了一种物理驱动计算的理念转变”（Science 2026）。相关合作工作入选智源人工智能研究院发布的“2020 年人工智能十大进展”（IEDM 2020），被《Nature Reviews Electrical Engineering》权威综述列为存内计算硬件感知神经架构搜索的代表性框架（Sci. China Inf. Sci. 2021），被 IBM Research & IEEE Fellow 的 Abu Sebastian 教授列为存内动力学计算的典型技术案例（Adv. Mater. 2022）。与华为合作研究成果获得华为计算产品线最佳技术合作奖（MICRO 2024）。",
    aboutProgressAlt: "忆阻存算一体 AI 芯片研究进展",
    aboutMore: "展开更多",
    aboutLess: "收起内容",
    paperSummary1: "利用相变忆阻器的可控电导漂移与存内计算，将器件物理过程转化为神经动力学求解资源，实现毫秒级高精度计算，为实时物理世界建模提供硬件路径。",
    paperSummary2: "通过两阶段精密编程与梯度感知调度，兼顾 RRAM 权重更新的速度、精度和寿命，并在四足机器人上验证自监督学习，推动存算芯片从静态推理走向在线适应。",
    paperSummary3: "协同利用 PCM 的多级电导与内禀随机性，在存储阵列中实现神经网络计算和不确定性量化，使器件随机性成为评估模型预测可信度的计算资源。",
    paperSummary4: "通过器件包覆层优化，结合存内乘累加与存内排序实现神经架构搜索，降低模型自动设计的计算开销，拓展忆阻计算从模型执行到模型生成的应用边界。",
    paperSummary5: "针对大模型 KV 缓存的数据搬运、写入磨损与漂移问题，构建三级存算架构并引入低应力编程，在多卡原型上验证 7B 模型推理，兼顾端侧部署的能效与可靠性。",
    paperSummary6: "将 RRAM 感知决策处理器与 VO₂ 神经刺激芯片协同集成，贯通人工感知、策略生成与生物运动控制，在生物混合机器人上验证低功耗闭环智能。",
    paperSummary7: "以中场斜率读出和列级自参考分别抑制多级存储与存内计算中的漂移误差，结合身份认证与居家辅助任务，验证面向隐私敏感端侧智能的可靠存算方案。",
    paperSummary8: "结合预测式编程与器件随机性，在 64 核 PCM 处理器上实现多模态语义融合，并通过医疗器械检测验证，将存储器物理特性转化为跨模态计算优势。",
    paperSummary9: "利用双模 PCM 芯片协同实现矩阵运算与真随机数生成，并通过自适应漂移补偿保障计算精度，为脑机接口中的高维神经信号流形学习提供高能效硬件。",
    paperSummary10: "融合模拟与数字存算，支持整数和浮点混合精度，并以自适应漂移补偿提高长期计算稳定性，为具身智能中不同精度模型的统一芯片部署提供支撑。",
    paperSummary11: "以 128-Mb PCM 芯片实现存内矩阵运算与最大值计算，结合混合精度权重映射降低模数转换开销，推动忆阻计算从分类拓展到兼具识别与定位的目标检测。",
    paperSummary12: "提出差分存储单元与电荷域模拟累加电路，缓解传统电流域存算的静态功耗、压降和非线性限制，为高并行、高能效的 RRAM 存算宏提供电路基础。",
    paperSummary13: "将低静态功耗的电荷域模拟存算与数字浮点计算结合，通过强化学习分配混合精度任务并优化核间流水，在计算精度、能效和系统吞吐之间实现协同优化。",
    paperSummary14: "从低过冲编程与计算感知磨损均衡两层协同延长 RRAM 芯片寿命，并在无人机自适应巡航中验证片上学习，为长期运行的具身智能提供可靠硬件基础。",
    paperSummary15: "将注视点感知的混合精度渲染与模拟／数字 PCM 存算协同设计，结合纠错和稀疏计算减少能耗，在保持图像质量的同时提升边缘神经渲染效率。",
    researchTitle: "研究方向",
    researchIntro: "面向高能效、自适应智能计算，贯通器件创新、芯片架构与算法系统，以应用需求牵引跨层协同设计。",
    researchFlowLabel: "器件、芯片与算法系统双向协同",
    flowDevices: "器件与工艺",
    flowChips: "电路与架构",
    flowApplications: "算法与系统",
    researchCard1Title: "新型存储器件与集成工艺",
    researchCard1Text: "围绕新型存储器件的物理机制、多态调控与阵列集成，研究精度、能耗及可靠性的耦合规律，建立电路与架构协同设计的模型体系和计算原语。",
    researchCard1Future: "拟进一步探索低功耗可塑性器件、三维集成与感存算融合，以系统需求牵引材料、器件和工艺的协同设计。",
    researchCard2Title: "可扩展存算一体芯片",
    researchCard2Text: "面向器件特性与任务需求，研究模拟、数字及混合精度存算架构，协同优化数据流、片上互联与存储层次，构建可扩展、高能效的计算平台。",
    researchCard2Future: "拟进一步探索三维异构集成、可重构计算与片上学习，协同优化算法映射与资源调度，拓展芯片的任务适应能力。",
    researchCard3Title: "算法—硬件协同与智能系统",
    researchCard3Text: "面向大模型、具身智能与神经接口，研究硬件感知学习和物理动力学计算，将器件非理想性与芯片资源约束纳入算法设计，形成端到端协同优化。",
    researchCard3Future: "拟进一步探索持续学习、多模态闭环决策与可信边缘智能，以真实任务验证计算范式，反向牵引器件与架构创新。",
    chipCoreArea: "计算核心面积",
    chipDieSize: "芯片尺寸",
    chipRramDieSize: "RRAM 芯片",
    systemsTitle: "芯片与应用",
    systemsIntro: "芯片原型与应用验证，贯通架构设计与真实智能系统。",
    systemsChipsIntro: "从存储器件到存算架构，呈现芯片原型与硬件实现。",
    systemsApplicationsIntro: "面向真实智能任务，展示从芯片到系统的应用验证。",
    systemsFilterChips: "芯片展示",
    systemsFilterApplications: "应用系统",
    systemsOpenPaper: "打开对应论文官网",
    systemsShowAllChips: "查看全部 13 款芯片",
    systemsShowAllApplications: "查看全部 11 类应用",
    systemsShowLess: "收起展示",
    levelSoC: "SoC 级",
    levelMacro: "Macro 级",
    levelArray: "Array 级",
    chip13Capacity: "8 Mb + 24 器件",
    chip01Title: "面向多模态融合的忆阻存算一体芯片",
    chip02Title: "面向具身学习的忆阻存算一体芯片",
    chip03Title: "面向混合精度计算的忆阻存算一体芯片",
    chip04Title: "耐磨损高可靠性忆阻存算一体芯片",
    chip05Title: "面向脑机解码的忆阻存算一体芯片",
    chip06Title: "第一代电荷域高能效忆阻存算一体芯片",
    chip07Title: "第二代电荷域高能效忆阻存算一体芯片",
    chip08Title: "面向神经动力学的忆阻存算一体芯片",
    showcaseDescriptionC01: "高保真曲面重建需要反复求解神经动力学，速度与精度缺一不可。芯片利用相变忆阻器的可控电导漂移搜索时间步，并在阵列内执行神经网络运算，使单次迭代在 10⁻⁷ 的误差容限下仅需 2.12 毫秒。",
    showcaseDescriptionC02: "让长上下文推理不再受制于单一存储层。这颗 288-Mb 处理器将冷热 KV 缓存分配到 SRAM、数字 PCM 和模拟 PCM，并以低应力编程压低写入代价。论文实验中，注意力输出误差降低 66.9%，写入能耗降低 68.5%。",
    showcaseDescriptionC03: "两颗异构忆阻芯片，贯通从感知到生物运动的信号链。8-Mb RRAM 处理器在片上生成动作策略，VO₂ 芯片将策略转换为电荷平衡的神经刺激脉冲，让感知、决策和执行真正形成闭环。",
    showcaseDescriptionC04: "一颗 PCM 芯片，同时解决「存得住」和「算得准」两道漂移难题。中场斜率读出稳定多级存储，列级自参考抑制模拟计算误差，让同一阵列兼顾长期数据保持与高精度本地推理。",
    showcaseDescriptionC05: "把图像和语义的联合推理带进存储阵列。64 核 PCM 处理器通过预测式编程写入权重，并把器件随机性用于语义融合，为端侧多模态系统提供一条从器件特性到跨模态计算的硬件路径。",
    showcaseDescriptionC06: "让存算芯片从「执行模型」走向「更新模型」。两阶段精密编程与梯度感知调度协同工作，使编程速度达到传统方案的 10.2 倍、系统寿命达到 11.7 倍，并支持四足机器人开展片上自监督学习。",
    showcaseDescriptionC07: "一套芯片架构，承接不同精度的具身智能模型。模拟存算提供并行度，数字存算支持更高精度的整数与浮点运算；自适应补偿将实验中的漂移计算损失压至原来的约十三分之一。",
    showcaseDescriptionC08: "把神经流形学习所需的两类核心运算放到一颗芯片上：矩阵计算负责提取神经活动结构，真随机数生成支持采样。双模 PCM 架构再以硬件自适应补偿稳定精度，为高维脑信号解码提供专用算力。",
    showcaseDescriptionC09: "让芯片输出预测，也给出预测有多可信。4-Mb PCM 阵列用多级电导执行神经网络运算，用器件内禀随机性完成采样，把原本难以控制的物理波动转化为不确定性量化所需的计算资源。",
    showcaseDescriptionC10: "持续学习不该被最先磨损的一小部分单元拖住。16 核 RRAM 芯片同时优化单次写入与跨核磨损分配：前者抑制过冲，后者按负载重分配更新。论文评估中，整芯片寿命达到基线 RRAM 存算设计的 87 倍。",
    showcaseDescriptionC11: "1308 TOPS/W 的宏单元能效，来自对模拟累加方式的重构。4T2R2C 差分单元配合电荷域累加，减少传统电流域方案的静态功耗和压降影响，为大规模并行模拟存算提供电路基础。",
    showcaseDescriptionC12: "第二代电荷域 RRAM 芯片把模拟存算做成混合精度系统中的高并行计算模块。4T2R1C 差分单元承担适合模拟执行的运算，数字浮点路径处理精度敏感的部分，让两类算力在同一推理流程中互补。",
    showcaseDescriptionC13: "阵列越大，计算电容的面积代价越不能忽略。这颗 PCM 宏让电容复用，并将并行计算划分到可扩展的局部单元，在 ICTA 论文的测试条件下达到 617.7 TOPS/W，为电荷域架构扩展提供了具体方案。",
    showcaseDescriptionA01: "从脑影像恢复准确的三维皮层，难点在于穿过复杂沟回仍能保住灰质与白质表面的拓扑。忆阻神经动力学将这一曲面重建过程映射到专用硬件，让高保真皮层形态比较和脑影像定量分析获得专用算力。",
    showcaseDescriptionA02: "四卡忆阻存算原型实际运行了 Qwen2.5-7B 和 LLaMA2-7B，每 token 能耗约为论文中 A100 基线的 1/235 至 1/297。把 7B 模型推理做到多卡协同且大幅降低能耗，让本地部署获得了更大的硬件设计空间。",
    showcaseDescriptionA03: "热目标导航成功率从 18% 跃升至 94%，平均任务时间从 108 秒缩短到 54 秒。实验的关键是让生物混合机器人根据环境信号在片上决策，再由神经刺激驱动运动，完成自主导航的反馈闭环。",
    showcaseDescriptionA04: "把身份认证和跌倒检测同时留在端侧，让居家照护既能主动感知风险，又能减少敏感信息外传。该原型将访问控制与智能感知纳入同一嵌入式系统，展示了隐私保护与本地辅助协同设计的价值。",
    showcaseDescriptionA05: "外观相近的医疗器械，单靠图像往往难以区分。系统让视觉与语义线索共同决定识别结果，并在存算一体硬件上验证了检测流程，展示了如何把细粒度跨模态识别带到受功耗约束的终端。",
    showcaseDescriptionA06: "让四足机器人在运行中学习地形，而不只依赖预训练模型。原型用自身采集的数据开展端侧自监督更新；对应任务中，相比论文的 GPU 基线，系统能效达到 347 倍，延迟约为其 1/8.7。",
    showcaseDescriptionA07: "把在线学习装进无人机的机载预算。自适应巡航实验中，耐磨损 RRAM 系统相较 Jetson AGX Orin 基线，能耗降至约 1/12、延迟降至约 1/140，展示了持续更新与低功耗飞行任务兼顾的可能。",
    showcaseDescriptionA08: "在神经流形学习任务上，系统达到论文 CPU 基线的 476 倍能效与 264 倍吞吐。它从高维神经活动中提取可解码的低维表征，让脑机接口在本地处理大规模神经信号有了更充足的算力空间。",
    showcaseDescriptionA09: "注视点三维渲染每帧仅耗 3.58 mJ。系统让高精度计算追随视线，在视觉最敏感的区域保留细节，同时减少外围计算，展示了注视策略与存算硬件协同降低端侧渲染能耗的效果。",
    showcaseDescriptionA10: "从「识别是什么」走向「识别并定位在哪里」。128-Mb PCM 原型在存储阵列内执行卷积网络所需的矩阵运算和最大值计算，验证了存算一体能够承担包含类别判断与位置预测的目标检测流程。",
    showcaseDescriptionA11: "多芯片加速的关键，在于让高并行模拟算力和高精度数字算力串联后不相互拖慢。系统用强化学习分配算子精度，再以流水调度匹配执行节奏；两者协同获得 3.3 倍系统级加速。",
    chip09Title: "可扩展电荷域忆阻存算一体芯片",
    chip10Title: "面向不确定性量化的忆阻存储芯片",
    chip11Title: "面向大语言模型推理的忆阻存算一体芯片",
    chip13Title: "面向智能感知决策的 RRAM 忆阻存算处理器与高仿生 VO₂ 忆阻神经刺激芯片",
    chip14Title: "面向端侧隐私敏感计算的忆阻存算一体芯片",
    application01Title: "面向脑疾病检测的脑皮层重建",
    application02Title: "面向智慧医疗的医疗器械检测",
    application03Title: "面向具身智能的自适应地形机器人",
    application04Title: "面向具身智能的自主巡航无人机",
    application05Title: "面向脑机解码的神经流形学习",
    application06Title: "面向三维重建的神经辐射场",
    application07Title: "基于卷积神经网络的目标检测",
    application08Title: "基于 AI 智慧部署的多芯片互联存算一体系统",
    application09Title: "面向端侧大模型推理的多卡忆阻存算系统",
    application11Title: "基于异构忆阻系统的生物混合机器人",
    application12Title: "面向居家养老的安全智能辅助机器人系统",
    publicationsTitle: "代表性成果",
    publicationsIntro: "以第一作者或通讯作者（含共同）身份发表的论文成果",
    publicationFilterLabel: "论文分类筛选",
    publicationFilterHint: "点击筛选",
    publicationsShowAll: "查看全部 15 篇论文",
    publicationsShowLess: "收起论文列表",
    filterSelected: "精选",
    filterAll: "全部",
    filterJournals: "期刊",
    filterConferences: "会议",
    roleFirst: "第一作者",
    roleCorresponding: "通讯作者",
    coverArticle: "封面文章",
    accepted: "已接收",
    publicationArchiveTitle: "全部论文",
    publicationArchiveIntro: "完整收录期刊与会议论文，按年份倒序排列。",
    publicationArchiveSearchLabel: "搜索论文题目、作者、期刊或年份",
    publicationArchiveSearchPlaceholder: "搜索题目、作者、期刊或年份",
    publicationArchiveFilterLabel: "完整论文筛选",
    publicationArchiveResults: "显示 {visible} / {total} 篇论文",
    publicationArchiveEmpty: "没有符合当前条件的论文。",
    publicationArchiveShowAll: "查看全部 31 篇论文",
    publicationArchiveShowLess: "收起论文列表",
    experienceTitle: "教育与工作经历",
    experiencePostdocTime: "2023.07 — 至今",
    experiencePostdocTitle: "北京大学 · 博士后",
    experiencePostdocAdvisorPrefix: "合作导师：",
    experiencePostdocAdvisorName: "杨玉超",
    experiencePostdocAdvisorSuffix: "（国家杰青、",
    experiencePostdocAdvisorCornerstone: "新基石研究员",
    experiencePostdocAdvisorEnd: "）",
    experiencePhdTitle: "北京大学 · 博士",
    experiencePhdAdvisorPrefix: "博士导师：",
    experiencePhdAdvisorName: "黄如",
    experiencePhdAdvisorSuffix: "（中国科学院院士、",
    experiencePhdAdvisorNdrc: "NDRC副主任",
    experiencePhdAdvisorEnd: "）",
    experienceBachelorTitle: "江南大学 · 学士",
    moreTitle: "更多学术信息",
    moreIntro: "科研项目、学术认可与完整论文档案",
    projectsTitle: "科研项目",
    project1Meta: "2025 — 2027 · 主持",
    project1Title: "国家自然科学基金青年基金 C 类",
    project1Text: "基于电荷域计算的忆阻存算一体芯片研究",
    project2Meta: "2026 — 2029 · 课题负责人",
    project2Title: "国家自然科学基金联合基金重点项目",
    project2Text: "面向脑机接口神经康复的忆阻器感存算一体芯片研究",
    project3Meta: "2024 — 至今 · 主持",
    project3Title: "中国博士后科学基金面上项目",
    project3Text: "面向浮点数计算的数字型忆阻存算一体芯片研究",
    recognitionTitle: "学术认可",
    contactTitle: "欢迎围绕新型存储与存算一体研究交流合作",
    footerTagline: "面向研究、合作与开放交流而构建。",
    paperOpen: "摘要与图示",
    paperClose: "收起详情",
    abstractLabel: "摘要",
    figureOpen: "打开精选图",
    metaDescription: "闫龙皞（Longhao Yan），北京大学博士后，研究新型存储器、存算一体芯片与智能应用。",
    languageSwitchLabel: "Switch to English"
  },
  en: {
    skipLink: "Skip to main content",
    brandHome: "Back to homepage",
    navOpen: "Open navigation menu",
    navClose: "Close navigation menu",
    navHome: "Home",
    primaryNav: "Primary navigation",
    navAbout: "About",
    navResearch: "Research",
    navSystems: "Chips",
    navPublications: "Publications",
    navPublicationsShort: "Papers",
    navExperience: "Experience",
    navExperienceShort: "Career",
    navMore: "More",
    navContact: "Contact",
    mobileNavOverview: "Section quick navigation",
    mobileNavGoTo: "Go to {section}",
    aboutHighlightsLabel: "Publications & contributions",
    aboutProjectsLabel: "Projects & collaborations",
    archiveShortcut: "Complete publication record ↗",
    heroEyebrow: "EMERGING MEMORY · COMPUTE-IN-MEMORY · INTELLIGENT COMPUTING",
    heroNamePrimary: "Longhao Yan",
    heroNameSecondary: "闫龙皞",
    heroLead: "High-Performance, Energy-Efficient Compute-in-Memory AI Chips",
    heroSummary: "I work across device technology, compute-in-memory circuits, chip architecture, and algorithms to build a complete path from emerging memory devices to intelligent systems.",
    heroScrollHint: "Scroll to explore",
    portraitAlt: "Portrait of Longhao Yan",
    portraitAffiliation: "Peking University",
    portraitRole: "Postdoctoral Researcher",
    aboutTitle: "From Emerging Memory to Energy-Efficient Intelligent Computing",
    aboutParagraph1: "My research advances energy-efficient intelligent computing through cross-layer co-design of devices, circuits, architectures, and algorithms for compute-in-memory chips, spanning core technology innovation, chip implementation, and system-level validation.",
    aboutHighlights: "My research includes 31 papers in leading journals and conferences, with 20 as first, co-first, or corresponding author, including Science (IF 47.3), eight first- or co-first-author IEDM papers, Advanced Functional Materials (IF 19.9, cover article), Advanced Science (IF 14.1), four ESSERC papers, and three EDTM papers. Collaborative work has appeared in Nature Electronics (IF 40.9), Nature Communications (IF 15.7), and Advanced Materials (IF 26.8).",
    aboutProjects: "I lead projects supported by the National Natural Science Foundation of China and the China Postdoctoral Science Foundation, and have contributed to national research programs and industry collaborations with Huawei, State Grid, SMIC, and Alibaba DAMO Academy.",
    aboutParagraph2: "My research has received recognition from both academia and industry. I have authored eight published or accepted first- or co-first-author papers at IEDM, including Top Ranked Student Papers (IEDM 2021 and 2026) and a Technical Highlight (IEDM 2025), and was a Best Paper Award Finalist at ICTA 2025. Science described our neural-dynamics work as representing a paradigm shift toward physically driven computing (Science 2026). Related collaborative work was selected among the Beijing Academy of Artificial Intelligence's Top 10 AI Advances of 2020 (IEDM 2020), identified by Nature Reviews Electrical Engineering as a representative framework for hardware-aware neural architecture search in in-memory computing (Sci. China Inf. Sci. 2021), and highlighted by IBM Research and IEEE Fellow Prof. Abu Sebastian as a representative case of in-memory dynamical computing (Adv. Mater. 2022). Our collaboration with Huawei received the Best Technical Collaboration Award from Huawei's Computing Product Line (MICRO 2024).",
    aboutProgressAlt: "Research progress in memristive compute-in-memory AI chips",
    aboutMore: "Read More",
    aboutLess: "Show Less",
    paperSummary1: "Combines controlled conductance drift with in-memory computation to turn PCM device physics into a resource for solving neural dynamical systems, enabling millisecond-scale, high-precision computation for real-time physical-world modeling.",
    paperSummary2: "Combines two-stage precision programming with gradient-aware scheduling to balance RRAM update speed, accuracy, and endurance. Self-supervised learning on a quadruped robot demonstrates a path from static inference to on-device adaptation.",
    paperSummary3: "Uses PCM multilevel conductance and intrinsic stochasticity for neural-network computation and uncertainty quantification, turning device randomness into a computing resource for assessing confidence in model predictions.",
    paperSummary4: "Combines coating-layer-optimized PCM with in-memory multiply-accumulate and ranking for neural architecture search, reducing the cost of automated model design and extending memristive computing beyond executing predefined networks.",
    paperSummary5: "Addresses KV-cache data movement, write wear, and drift through a tri-tier PCM computing architecture and low-stress programming. A multi-board prototype demonstrates 7B-model inference with improved energy efficiency and reliability.",
    paperSummary6: "Integrates an RRAM perception-to-policy processor with a VO₂ neural-stimulation chip, connecting artificial perception and decision-making to biological actuation and demonstrating low-power closed-loop biohybrid intelligence.",
    paperSummary7: "Uses intermediate-field slope readout and column-level self-reference to suppress drift errors in multilevel storage and in-memory computation, demonstrated through authentication and home-assistance tasks for privacy-sensitive edge intelligence.",
    paperSummary8: "Combines predictive programming with device stochasticity for multimodal semantic fusion on a 64-core PCM processor. Medical-instrument detection demonstrates how memory physics can support efficient cross-modal computation.",
    paperSummary9: "Combines matrix computation and true random-number generation on a dual-mode PCM chip, with adaptive drift compensation preserving accuracy, to support energy-efficient neural manifold learning for brain–computer interfaces.",
    paperSummary10: "Fuses analog and digital compute-in-memory for mixed integer and floating-point precision, using adaptive drift compensation to improve stability and support models with different precision requirements on one embodied-AI chip.",
    paperSummary11: "Implements in-memory matrix and max operations on a 128-Mb PCM chip, with mixed-precision weight mapping reducing ADC overhead, extending memristive computation from classification to object detection with localization.",
    paperSummary12: "Combines differential memory cells with charge-domain analog accumulation to mitigate DC power, IR drop, and nonlinearity in current-domain computing, providing a circuit foundation for highly parallel, energy-efficient RRAM macros.",
    paperSummary13: "Combines low-DC-power charge-domain analog computing with digital floating-point computation. Reinforcement-learning-driven precision allocation and inter-core pipelining jointly optimize accuracy, energy efficiency, and system throughput.",
    paperSummary14: "Combines overshoot-optimized programming with compute-aware wear leveling to extend RRAM chip lifetime, demonstrating on-chip learning in adaptive drone cruise control and supporting reliable, long-running embodied intelligence.",
    paperSummary15: "Co-designs foveated mixed-precision rendering with analog/digital PCM computing, combining error correction and sparsity-aware computation to reduce energy while preserving image quality in edge neural rendering.",
    researchTitle: "Research Directions",
    researchIntro: "Advancing energy-efficient, adaptive intelligence through cross-layer co-design of devices, chips, and algorithms, guided by real-world applications.",
    researchFlowLabel: "Bidirectional co-design across devices, chips, and intelligent systems",
    flowDevices: "Devices & Processes",
    flowChips: "Circuits & Architectures",
    flowApplications: "Algorithms & Systems",
    researchCard1Title: "Emerging Devices & Integration",
    researchCard1Text: "Investigating the physics, multilevel control, and array integration of emerging memory devices, with emphasis on coupled accuracy, energy, and reliability limits, to develop modeling frameworks and computing primitives for circuit–architecture co-design.",
    researchCard1Future: "Future directions include low-power plastic devices, 3D integration, and integrated sensing–memory–computing, with system requirements guiding the co-design of materials, devices, and fabrication processes.",
    researchCard2Title: "Scalable Compute-in-Memory Chips",
    researchCard2Text: "Research on analog, digital, and mixed-precision compute-in-memory architectures links device capabilities to workloads, co-optimizing dataflows, on-chip interconnects, and memory hierarchies for scalable, energy-efficient chips.",
    researchCard2Future: "Future directions include 3D heterogeneous integration, reconfigurable computing, and on-chip learning, co-optimizing algorithm mapping and resource scheduling to support adaptation across evolving models and workloads.",
    researchCard3Title: "Algorithms & Intelligent Systems",
    researchCard3Text: "Investigating hardware-aware learning and physical dynamical computing for large models, embodied intelligence, and neural interfaces, incorporating device nonidealities and chip resource constraints into algorithms for end-to-end co-optimization.",
    researchCard3Future: "Future directions include continual learning, multimodal closed-loop decision-making, and trustworthy edge intelligence, using real-world tasks to evaluate computing paradigms and guide device and architecture innovation.",
    chipCoreArea: "Compute core area",
    chipDieSize: "Die size",
    chipRramDieSize: "RRAM die",
    systemsTitle: "Chips & Applications",
    systemsIntro: "Chip prototypes and application demos connect architecture design with real-world intelligent systems.",
    systemsChipsIntro: "Chip prototypes and hardware implementations, from memory devices to compute-in-memory architectures.",
    systemsApplicationsIntro: "System-level demonstrations that bring chip capabilities to real-world intelligent tasks.",
    systemsFilterChips: "Chip Gallery",
    systemsFilterApplications: "Application Systems",
    systemsOpenPaper: "Open the related publication",
    systemsShowAllChips: "View all 13 chip prototypes",
    systemsShowAllApplications: "View all 11 application systems",
    systemsShowLess: "Show fewer",
    levelSoC: "SoC Scale",
    levelMacro: "Macro Scale",
    levelArray: "Array Scale",
    chip13Capacity: "8 Mb + 24 devices",
    chip01Title: "Memristive Compute-in-Memory Chip for Multimodal Fusion",
    chip02Title: "Memristive Compute-in-Memory Chip for Embodied Learning",
    chip03Title: "Memristive Compute-in-Memory Chip for Mixed-Precision Computing",
    chip04Title: "Wear-Resilient, High-Reliability Memristive Compute-in-Memory Chip",
    chip05Title: "Memristive Compute-in-Memory Chip for Brain-Machine Decoding",
    chip06Title: "First-Generation Charge-Domain Energy-Efficient Memristive Compute-in-Memory Chip",
    chip07Title: "Second-Generation Charge-Domain Energy-Efficient Memristive Compute-in-Memory Chip",
    chip08Title: "Memristive Compute-in-Memory Chip for Neural Dynamics",
    showcaseDescriptionC01: "High-fidelity surface reconstruction calls for fast, accurate neural dynamics. The chip uses controlled PCM conductance drift to select the time step and runs the neural network in memory, completing one iteration in 2.12 ms at a 10⁻⁷ error tolerance.",
    showcaseDescriptionC02: "One memory tier cannot meet every demand of long-context inference. This 288-Mb processor routes KV-cache data across SRAM, digital PCM, and analog PCM and uses low-stress programming to cut the cost of writes. In the reported experiments, attention-output error fell by 66.9% and write energy by 68.5%.",
    showcaseDescriptionC03: "Two heterogeneous memristive chips connect sensing to biological motion. An 8-Mb RRAM processor generates action policies on-chip, and a VO₂ chip converts them into charge-balanced neural stimulation pulses, closing the loop between perception, decision-making, and actuation.",
    showcaseDescriptionC04: "One PCM chip tackles two distinct drift problems: retaining multilevel data and computing accurately. Intermediate-field slope readout stabilizes storage, while column-level self-reference suppresses analog computation errors, enabling one array to serve both long-term retention and local inference.",
    showcaseDescriptionC05: "This 64-core PCM processor brings joint visual and semantic inference into the memory array. Predictive programming handles weight updates, while device stochasticity supports semantic fusion, turning memory-device behavior into a resource for edge multimodal computing.",
    showcaseDescriptionC06: "This chip moves compute-in-memory from running models to updating them. Two-stage precision programming and gradient-aware scheduling deliver 10.2× the programming speed and 11.7× the system lifetime of conventional schemes, supporting on-chip self-supervised learning for a quadruped robot.",
    showcaseDescriptionC07: "One architecture serves embodied-AI models with different precision demands. Analog compute-in-memory provides parallelism and digital compute-in-memory supports higher-precision integer and floating-point operations. Adaptive compensation cuts drift-induced computation loss to about one-thirteenth of its original value in the reported experiment.",
    showcaseDescriptionC08: "This chip brings together two core operations for neural manifold learning: matrix computation to extract structure from neural activity and true random-number generation for sampling. Adaptive hardware compensation stabilizes accuracy, providing dedicated compute for decoding high-dimensional brain signals.",
    showcaseDescriptionC09: "This 4-Mb PCM array computes predictions and estimates how confident they are. Multilevel conductance supports neural-network operations, while intrinsic device randomness supplies samples, turning physical variability into a resource for uncertainty quantification.",
    showcaseDescriptionC10: "A small fraction of heavily used cells can limit continual learning. This 16-core RRAM chip suppresses write overshoot and redistributes updates across cores according to load. In the paper’s evaluation, overall chip lifetime reached 87× that of the baseline RRAM compute-in-memory designs.",
    showcaseDescriptionC11: "This macro reaches 1,308 TOPS/W by rethinking analog accumulation. Its 4T2R2C differential cells and charge-domain accumulation mitigate the static power and voltage-drop penalties of current-domain designs, laying a circuit foundation for parallel analog computing.",
    showcaseDescriptionC12: "The second-generation charge-domain RRAM chip provides parallel analog compute for mixed-precision systems. Its 4T2R1C differential cells execute operations suited to analog hardware, while the digital floating-point path handles precision-sensitive work within the same inference pipeline.",
    showcaseDescriptionC13: "As arrays grow, the area cost of compute capacitors becomes harder to ignore. This PCM macro reuses capacitors and partitions parallel computation into scalable local units. It reaches 617.7 TOPS/W under the reported ICTA conditions, demonstrating a concrete route to scaling charge-domain computing.",
    showcaseDescriptionA01: "Reconstructing the cortex requires recovering gray- and white-matter surfaces without losing their topology through complex folds. Memristive neural dynamics maps this reconstruction onto dedicated hardware, supplying focused compute for quantitative neuroimaging and high-fidelity comparisons of cortical shape.",
    showcaseDescriptionA02: "A four-board prototype ran Qwen2.5-7B and LLaMA2-7B at roughly 1/235 to 1/297 of the energy per token of the paper’s A100 baseline. Demonstrating 7B inference across memory-compute boards at this energy cost expands the design space for local deployment.",
    showcaseDescriptionA03: "In thermal-target navigation, success rose from 18% to 94%, and mean completion time fell from 108 to 54 seconds. On-chip decisions translate environmental signals into neural stimulation, demonstrating closed-loop autonomous navigation in a biohybrid robot.",
    showcaseDescriptionA04: "Keeping authentication and fall detection on-device lets a home-care system respond to risks while limiting sensitive data transfer. The prototype brings access control and intelligent sensing into one embedded system, demonstrating how privacy and local assistance can be designed together.",
    showcaseDescriptionA05: "Similar-looking medical instruments can be hard to distinguish visually. This system combines visual and semantic cues and demonstrates the detection pipeline on compute-in-memory hardware, showing how fine-grained multimodal recognition can run on power-constrained devices.",
    showcaseDescriptionA06: "The quadruped learns terrain during operation instead of relying solely on a pretrained model. It updates on-device using self-collected data. On the reported task, it achieved 347× the energy efficiency and about 1/8.7 the latency of the paper’s GPU baseline.",
    showcaseDescriptionA07: "This prototype brings online learning within a drone’s onboard budget. In adaptive cruise control, its wear-resilient RRAM system used about 1/12 the energy and 1/140 the latency of the Jetson AGX Orin baseline, showing how onboard updates can coexist with power-constrained flight tasks.",
    showcaseDescriptionA08: "On the reported neural manifold learning task, the system achieved 476× the energy efficiency and 264× the throughput of the CPU baseline. It extracts compact, decodable representations from high-dimensional activity, giving local brain–computer interfaces more headroom for neural signal processing.",
    showcaseDescriptionA09: "Foveated 3D rendering takes just 3.58 mJ per frame. The system follows the viewer’s gaze with higher-precision compute, preserving detail where the eye is most sensitive and reducing peripheral work. It demonstrates the energy value of co-designing gaze-aware rendering and compute-in-memory hardware.",
    showcaseDescriptionA10: "This 128-Mb PCM prototype advances from recognizing what an object is to locating where it appears. It executes the matrix and max operations needed by a convolutional network in memory, demonstrating an object detection pipeline that combines classification and localization.",
    showcaseDescriptionA11: "Multi-chip inference gains depend on keeping parallel analog compute and precise digital compute from holding each other back. The system assigns operator precision with reinforcement learning and balances execution through pipelining, yielding a 3.3× system-level speedup.",
    chip09Title: "Scalable Charge-Domain Memristive Compute-in-Memory Chip",
    chip10Title: "Memristive Memory Chip for Uncertainty Quantification",
    chip11Title: "Memristive Compute-in-Memory Chip for Large-Language-Model Inference",
    chip13Title: "RRAM Perception-to-Policy Compute-in-Memory Processor and Bioinspired VO₂ Neural Stimulation Chip",
    chip14Title: "Memristive Compute-in-Memory Chip for Privacy-Sensitive Edge Intelligence",
    application01Title: "Cortical Reconstruction for Brain Disease Detection",
    application02Title: "Medical Instrument Detection for Intelligent Healthcare",
    application03Title: "Adaptive Terrain Robot for Embodied Intelligence",
    application04Title: "Autonomous Navigation Drone for Embodied Intelligence",
    application05Title: "Neural Manifold Learning for Brain-Machine Decoding",
    application06Title: "Neural Radiance Fields for 3D Reconstruction",
    application07Title: "Convolutional-Neural-Network-Based Object Detection",
    application08Title: "Multi-Chip Interconnected Compute-in-Memory System for AI Deployment",
    application09Title: "Multi-Board Memristive Compute-in-Memory System for On-Device Large-Model Inference",
    application11Title: "Biohybrid Robot Based on a Heterogeneous Memristive System",
    application12Title: "Safety-Aware Intelligent Home-Assistance Robot for Elderly Care",
    publicationsTitle: "Selected Publications",
    publicationsIntro: "Publications as first author (including co-first author) or corresponding author (including co-corresponding author)",
    publicationFilterLabel: "Filter publications by category",
    publicationFilterHint: "Click to filter",
    publicationsShowAll: "View all 15 publications",
    publicationsShowLess: "Show fewer publications",
    filterSelected: "Selected",
    filterAll: "All",
    filterJournals: "Journals",
    filterConferences: "Conferences",
    roleFirst: "First Author",
    roleCorresponding: "Corresponding Author",
    coverArticle: "Cover Article",
    accepted: "Accepted",
    publicationArchiveTitle: "All Publications",
    publicationArchiveIntro: "A complete record of journal and conference papers, organized in reverse chronological order.",
    publicationArchiveSearchLabel: "Search publications by title, author, venue, or year",
    publicationArchiveSearchPlaceholder: "Search title, author, venue, or year",
    publicationArchiveFilterLabel: "Filter all publications",
    publicationArchiveResults: "Showing {visible} of {total} publications",
    publicationArchiveEmpty: "No publications match the current filters.",
    publicationArchiveShowAll: "View all 31 publications",
    publicationArchiveShowLess: "Show fewer publications",
    experienceTitle: "Education & Experience",
    experiencePostdocTime: "2023.07 — Present",
    experiencePostdocTitle: "Peking University · Postdoctoral Researcher",
    experiencePostdocAdvisorPrefix: "Host: ",
    experiencePostdocAdvisorName: "Prof. Yuchao Yang",
    experiencePostdocAdvisorSuffix: " (NSFC Distinguished Young Scholar; ",
    experiencePostdocAdvisorCornerstone: "New Cornerstone Investigator",
    experiencePostdocAdvisorEnd: ")",
    experiencePhdTitle: "Peking University · Ph.D.",
    experiencePhdAdvisorPrefix: "Advisor: ",
    experiencePhdAdvisorName: "Prof. Ru Huang",
    experiencePhdAdvisorSuffix: " (Academician, Chinese Academy of Sciences; ",
    experiencePhdAdvisorNdrc: "Vice Chairman of NDRC",
    experiencePhdAdvisorEnd: ")",
    experienceBachelorTitle: "Jiangnan University · B.Eng.",
    moreTitle: "More Academic Information",
    moreIntro: "Research projects, academic recognition, and the complete publication archive",
    projectsTitle: "Research Projects",
    project1Meta: "2025 — 2027 · Principal Investigator",
    project1Title: "NSFC Young Scientists Fund, Category C",
    project1Text: "Charge-domain memristive compute-in-memory chip research",
    project2Meta: "2026 — 2029 · Subproject Lead",
    project2Title: "NSFC Joint Fund Key Program",
    project2Text: "Memristive sensing-and-computing chip for brain-computer-interface neurorehabilitation",
    project3Meta: "2024 — Present · Principal Investigator",
    project3Title: "China Postdoctoral Science Foundation General Program",
    project3Text: "Digital memristive compute-in-memory chips for floating-point computation",
    recognitionTitle: "Recognition",
    contactTitle: "Open to Research Collaboration on Emerging Memory and Compute-in-Memory",
    footerTagline: "Built for research, collaboration, and open exchange.",
    paperOpen: "Abstract & figures",
    paperClose: "Close details",
    abstractLabel: "ABSTRACT",
    figureOpen: "Open featured figure",
    metaDescription: "Longhao Yan is a postdoctoral researcher at Peking University working on emerging memory, compute-in-memory chips, and intelligent applications.",
    languageSwitchLabel: "切换至中文"
  }
};

const supportedLanguages = new Set(Object.keys(translations));
const queryLanguage = new URLSearchParams(window.location.search).get("lang");
let currentLanguage = supportedLanguages.has(queryLanguage)
  ? queryLanguage
  : "zh-CN";

const primaryBrowserLanguage = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
const shouldSuggestEnglish = !queryLanguage && primaryBrowserLanguage.startsWith("en");

const t = (key) => translations[currentLanguage][key] ?? key;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageSuggestion = document.querySelector("[data-language-suggestion]");
const languageSuggestionAction = document.querySelector("[data-language-suggestion-action]");
const languageSuggestionClose = document.querySelector("[data-language-suggestion-close]");
const mobileSectionWindow = document.querySelector("[data-mobile-section-window]");
const mobileSectionTrack = document.querySelector("[data-mobile-section-track]");
const mobileNavItems = [...document.querySelectorAll("[data-mobile-nav-item]")];
const aboutToggle = document.querySelector(".about-toggle");
const aboutMore = document.querySelector("#about-more");
const showcaseItems = document.querySelectorAll("[data-showcase-item]");
const showcaseMoreButtons = document.querySelectorAll("[data-showcase-more]");
const navSectionLinks = [...(primaryNav?.querySelectorAll('a[href^="#"]') ?? [])]
  .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
  .filter(({ section }) => section);
const archiveSection = document.querySelector("#all-publications");
const moreNavLink = primaryNav?.querySelector('a[href="#more"]');
if (archiveSection && moreNavLink) {
  navSectionLinks.push({ link: moreNavLink, section: archiveSection });
}
const showcasePreviewLimits = { chips: 6, applications: 6 };
const showcaseExpanded = { chips: false, applications: false };
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

document.documentElement.classList.add("motion-ready");

const initializeMotionDesign = () => {
  const hero = document.querySelector(".hero");
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => hero?.classList.add("is-ready")));

  const revealSelector = ".about-heading, #research .section-heading, .showcase-heading, #publications > .container > .section-heading, .archive-heading, #experience .section-heading, .more-heading, .contact-inner > div:first-child";
  const revealTargets = [...document.querySelectorAll(revealSelector)];
  revealTargets.forEach((element) => {
    element.classList.add("ui-reveal");
    if (element.matches(".about-heading, .section-heading, .archive-heading")) {
      element.classList.add("ui-reveal-line");
    }
  });

  if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -7% 0px" });

  revealTargets.forEach((element) => observer.observe(element));
};

const dismissFilterCoachmark = (name) => {
  const coachmark = document.querySelector(`[data-filter-coachmark="${name}"]`);
  if (!coachmark || coachmark.hidden) return;
  coachmark.classList.add("is-dismissed");
  window.setTimeout(() => { coachmark.hidden = true; }, 200);
};

const setAboutOpen = (open) => {
  if (!aboutToggle || !aboutMore) return;
  aboutMore.hidden = !open;
  aboutToggle.setAttribute("aria-expanded", String(open));
  aboutToggle.querySelector("span").textContent = t(open ? "aboutLess" : "aboutMore");
};

const setNavigationOpen = (open) => {
  header?.classList.toggle("is-nav-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
  navToggle?.setAttribute("aria-label", t(open ? "navClose" : "navOpen"));
  const currentMobileItem = mobileNavItems.find((item) => item.classList.contains("is-current"));
  currentMobileItem?.setAttribute("aria-expanded", String(open));
  currentMobileItem?.setAttribute("aria-label", t(open ? "navClose" : "navOpen"));
};

const updateShowcaseCollections = () => {
  const indices = { chips: 0, applications: 0 };
  showcaseItems.forEach((item) => {
    const group = item.dataset.showcaseItem;
    item.hidden = !showcaseExpanded[group] && indices[group] >= showcasePreviewLimits[group];
    indices[group] += 1;
  });
  showcaseMoreButtons.forEach((button) => {
    const group = button.dataset.showcaseMore;
    button.setAttribute("aria-expanded", String(showcaseExpanded[group]));
    button.querySelector("[data-showcase-more-label]").textContent = t(showcaseExpanded[group]
      ? "systemsShowLess"
      : group === "chips" ? "systemsShowAllChips" : "systemsShowAllApplications");
  });
};

const updateMobileNavigation = (activeLink, position) => {
  if (!mobileNavItems.length || !mobileSectionTrack) return;

  const items = mobileNavItems.map((element) => ({
    element,
    href: element.getAttribute("href")
  }));
  const activeHref = activeLink?.getAttribute("href") || "#top";
  const activeIndex = Math.max(0, items.findIndex(({ href }) => href === activeHref));
  const navIsOpen = header?.classList.contains("is-nav-open") ?? false;
  const currentSection = document.querySelector(activeHref);
  const nextSection = items[activeIndex + 1] ? document.querySelector(items[activeIndex + 1].href) : null;
  const currentOffset = currentSection?.offsetTop ?? 0;
  const nextOffset = nextSection?.offsetTop ?? currentOffset;
  const sectionProgress = nextOffset > currentOffset
    ? Math.min(1, Math.max(0, (position - currentOffset) / (nextOffset - currentOffset)))
    : 1;
  const continuousIndex = Math.min(items.length - 1, activeIndex + sectionProgress);
  const itemWidth = Number.parseFloat(window.getComputedStyle(items[0].element).width) || 62;
  mobileSectionTrack.style.transform = `translate3d(${-((activeIndex + 0.5) * itemWidth)}px, 0, 0)`;

  items.forEach(({ element, href }, index) => {
    const distance = Math.abs(index - continuousIndex);
    const opacity = Math.max(0.24, 1 - distance * 0.46);
    const scale = Math.max(0.94, 1 - Math.min(distance, 1.5) * 0.035);
    const isCurrent = href === activeHref;
    const isNearby = distance < 1.7;

    element.style.setProperty("--mobile-item-opacity", opacity.toFixed(3));
    element.style.setProperty("--mobile-item-scale", scale.toFixed(3));
    element.classList.toggle("is-current", isCurrent);
    if (isNearby) element.removeAttribute("aria-hidden");
    else element.setAttribute("aria-hidden", "true");
    element.tabIndex = isNearby ? 0 : -1;
    if (isCurrent) {
      element.setAttribute("aria-current", "location");
      element.setAttribute("aria-controls", "primary-nav");
      element.setAttribute("aria-expanded", String(navIsOpen));
      element.setAttribute("aria-label", t(navIsOpen ? "navClose" : "navOpen"));
    } else {
      element.removeAttribute("aria-current");
      element.removeAttribute("aria-controls");
      element.removeAttribute("aria-expanded");
      element.setAttribute("aria-label", t("mobileNavGoTo").replace("{section}", element.textContent.trim()));
    }
  });
};

const updateActiveNavigation = () => {
  const position = window.scrollY + (header?.offsetHeight ?? 0) + Math.min(window.innerHeight * 0.28, 220);
  const orderedSections = [...navSectionLinks].sort((a, b) => a.section.offsetTop - b.section.offsetTop);
  let activeLink = null;

  orderedSections.forEach(({ link, section }) => {
    if (section.offsetTop <= position) activeLink = link;
  });

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeLink = orderedSections.at(-1)?.link ?? activeLink;
  }

  navSectionLinks.forEach(({ link }) => {
    const active = link === activeLink;
    link.classList.toggle("is-current", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });

  updateMobileNavigation(activeLink, position);
};

const applyLanguage = (language, { updateUrl = false } = {}) => {
  currentLanguage = supportedLanguages.has(language) ? language : "zh-CN";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.language = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", t("metaDescription"));
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", t("metaDescription"));
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", currentLanguage === "en" ? "en_US" : "zh_CN");

  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "en" ? "中" : "EN";
    languageToggle.setAttribute("aria-label", t("languageSwitchLabel"));
    languageToggle.setAttribute("title", t("languageSwitchLabel"));
  }
  if (currentLanguage === "en" && languageSuggestion) {
    languageSuggestion.hidden = true;
  }
  setAboutOpen(aboutToggle?.getAttribute("aria-expanded") === "true");
  setNavigationOpen(false);
  updateShowcaseCollections();
  updateActiveNavigation();

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLanguage);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  window.dispatchEvent(new CustomEvent("site-language-change", { detail: { language: currentLanguage } }));
};

window.siteI18n = {
  getLanguage: () => currentLanguage,
  t
};

const preloadPrimaryShowcaseImage = () => {
  const connection = navigator.connection;
  if (connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType)) return;

  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = "low";
  image.src = window.matchMedia("(max-width: 640px)").matches
    ? "assets/images/chips/chip-08-800.webp?v=2"
    : "assets/images/chips/chip-08.webp?v=2";
};

window.addEventListener("load", () => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preloadPrimaryShowcaseImage, { timeout: 3000 });
  } else {
    window.setTimeout(preloadPrimaryShowcaseImage, 1800);
  }
}, { once: true });

navToggle?.addEventListener("click", () => {
  setNavigationOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

mobileSectionWindow?.addEventListener("click", (event) => {
  const item = event.target.closest("[data-mobile-nav-item]");
  if (!item) return;
  if (item.classList.contains("is-current")) {
    event.preventDefault();
    setNavigationOpen(!header?.classList.contains("is-nav-open"));
  } else {
    setNavigationOpen(false);
  }
});

primaryNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNavigationOpen(false));
});

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "zh-CN" : "en", { updateUrl: true });
});

languageSuggestionAction?.addEventListener("click", () => {
  applyLanguage("en", { updateUrl: true });
});

languageSuggestionClose?.addEventListener("click", () => {
  languageSuggestion.hidden = true;
  try {
    window.sessionStorage.setItem("english-language-suggestion-dismissed", "true");
  } catch (_) {
    // Dismissal still works for the current page when storage is unavailable.
  }
});

aboutToggle?.addEventListener("click", () => {
  setAboutOpen(aboutToggle.getAttribute("aria-expanded") !== "true");
});

showcaseMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.showcaseMore;
    showcaseExpanded[group] = !showcaseExpanded[group];
    updateShowcaseCollections();
    if (!showcaseExpanded[group]) {
      button.closest(".showcase-collection").scrollIntoView({ behavior: "auto", block: "start" });
    }
  });
});

document.querySelectorAll("[data-publication-filter]").forEach((button) => {
  button.addEventListener("click", () => dismissFilterCoachmark("publications"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNavigationOpen(false);
});

document.addEventListener("click", (event) => {
  if (header?.classList.contains("is-nav-open") && !header.contains(event.target)) {
    setNavigationOpen(false);
  }
});

let navigationFrame = 0;
const requestNavigationUpdate = () => {
  if (navigationFrame) return;
  navigationFrame = window.requestAnimationFrame(() => {
    navigationFrame = 0;
    updateActiveNavigation();
  });
};

window.addEventListener("scroll", requestNavigationUpdate, { passive: true });
window.addEventListener("resize", requestNavigationUpdate);

initializeMotionDesign();
applyLanguage(currentLanguage);
updateActiveNavigation();

if (shouldSuggestEnglish && languageSuggestion) {
  let suggestionDismissed = false;
  try {
    suggestionDismissed = window.sessionStorage.getItem("english-language-suggestion-dismissed") === "true";
  } catch (_) {
    // Show the suggestion when session storage is unavailable.
  }
  languageSuggestion.hidden = suggestionDismissed;
}
