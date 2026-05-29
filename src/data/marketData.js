export const targetSchools = [
  {
    id: 1,
    name: '深圳职业技术大学',
    type: '职业院校',
    tag: '双高计划 A 档 / 职业本科',
    coreMajors: ['人工智能技术应用', '计算机网络技术', '软件技术', '云计算技术应用'],
    partnerships: '与腾讯合作共建AI产业学院，与华为深度共建ICT现代产业学院及实训基地，开展端侧AI联合实训。',
    staffAndStudents: {
      teachers: '1,850+ 人',
      students: '32,000+ 人'
    },
    salesperson: '王大伟'
  },
  {
    id: 2,
    name: '南京工业职业技术大学',
    type: '职业院校',
    tag: '全国首个公立职业本科',
    coreMajors: ['智能控制技术', '机械制造及自动化', '嵌入式技术应用', '物联网应用技术'],
    partnerships: '与三一重工合作共建智能制造协同创新中心，与科大讯飞联合开发智慧教育AI教学系统。',
    staffAndStudents: {
      teachers: '1,320+ 人',
      students: '22,400+ 人'
    },
    salesperson: null // 暂无销售员
  },
  {
    id: 3,
    name: '浙江大学',
    type: '公立院校',
    tag: '双一流 / 985 / 211',
    coreMajors: ['计算机科学与技术', '控制科学与工程', '软件工程', '数据科学与大数据技术'],
    partnerships: '与阿里巴巴达摩院深度共建前沿AI联合实验室，与百度飞桨共建AI菁英班开展科研合作。',
    staffAndStudents: {
      teachers: '4,500+ 人',
      students: '67,000+ 人'
    },
    salesperson: '刘晓梅'
  },
  {
    id: 4,
    name: '哈尔滨工业大学',
    type: '公立院校',
    tag: '双一流 / 985 / 211',
    coreMajors: ['机器人工程', '计算机科学与技术', '航天航空工程', '智能装备与系统'],
    partnerships: '与中国航天科工集团共建空天AI实验室，与华为在昇腾算力及端侧模型算法领域深度联合研发。',
    staffAndStudents: {
      teachers: '3,200+ 人',
      students: '49,500+ 人'
    },
    salesperson: '张强'
  },
  {
    id: 5,
    name: '北京信息职业技术学院',
    type: '职业院校',
    tag: '国家示范性高职院校',
    coreMajors: ['软件技术', '大数据技术', '通信技术', '电子信息工程技术'],
    partnerships: '与百度共建“百度Apollo自动驾驶产业学院”，与联想集团共建IT智慧运维校企实训基地。',
    staffAndStudents: {
      teachers: '780+ 人',
      students: '12,500+ 人'
    },
    salesperson: null // 暂无销售员
  },
  {
    id: 6,
    name: '华中科技大学',
    type: '公立院校',
    tag: '双一流 / 985 / 211',
    coreMajors: ['光电信息科学与工程', '计算机科学与技术', '软件工程', '人工智能'],
    partnerships: '与腾讯公司成立“腾讯互联网+产学研协同基地”，与华为共建“智能基座”产教融合协同育人基地。',
    staffAndStudents: {
      teachers: '3,800+ 人',
      students: '56,000+ 人'
    },
    salesperson: '赵明'
  }
]

export const targetEnterprises = [
  {
    id: 101,
    name: '腾讯科技（深圳）有限公司',
    type: '民营互联网科技巨头',
    scale: '108,000+ 人',
    industry: '互联网、云计算、人工智能、泛娱乐',
    collabDirection: 'AI 产业学院建设、云算力生态合作、产学研协同育人',
    tag: '深度战略合作伙伴',
    salesperson: '王大伟'
  },
  {
    id: 102,
    name: '华为技术有限公司',
    type: '全球 ICT 与智能终端巨头',
    scale: '207,000+ 人',
    industry: '通信设备、智能终端、云计算、国产芯片、大模型',
    collabDirection: '昇腾国产算力池共建、“智能基座”教学改革、端侧边缘AI计算芯片联合实训',
    tag: '核心算力与底座伙伴',
    salesperson: '张强'
  },
  {
    id: 103,
    name: '科大讯飞股份有限公司',
    type: '人工智能与智能语音龙头',
    scale: '15,600+ 人',
    industry: '语音合成与识别、认知大模型、智慧教育、智慧医疗',
    collabDirection: '星火认知大模型校园端联合部署、智能辅助教学与评分系统联合研发',
    tag: '教育行业垂直合作商',
    salesperson: null // 暂无销售员
  },
  {
    id: 104,
    name: '北京百度网讯科技有限公司',
    type: '搜索引擎与AI平台领先者',
    scale: '45,000+ 人',
    industry: '搜索引擎、自动驾驶、百度智能云、飞桨深度学习平台',
    collabDirection: '飞桨深度学习实训平台共建、Apollo自动驾驶专业校企合作、AI人才师资培训',
    tag: '深度实训平台合作方',
    salesperson: '刘晓梅'
  },
  {
    id: 105,
    name: '三一重工股份有限公司',
    type: '智能制造与重工装备龙头',
    scale: '26,000+ 人',
    industry: '工程机械制造、智能装备、工业互联网',
    collabDirection: '职业院校双师型教师流动站建设、工业互联网实训仿真软件定制研发',
    tag: '产教融合示范企业',
    salesperson: null // 暂无销售员
  }
]

export const cEndUsers = [
  {
    id: 1001,
    name: '张明涛',
    identity: '高校教师 (副教授)',
    avatarSeed: 'zhang',
    affiliation: {
      type: 'school',
      name: '深圳职业技术大学',
      detail: '人工智能技术应用系主任'
    },
    preferredApps: ['98表自动填报工具', 'AI教案生成器', '智能辅助评分'],
    usageStats: {
      weeklyActiveHours: 14.5,
      docGeneratedCount: 32,
      lastActive: '10分钟前',
      status: '活跃'
    }
  },
  {
    id: 1002,
    name: '李娜珍',
    identity: '企业教研专家',
    avatarSeed: 'li',
    affiliation: {
      type: 'enterprise',
      name: '科大讯飞股份有限公司',
      detail: '教育事业部产品线经理'
    },
    preferredApps: ['算力管理', '知识中心', 'AeiViz Studio'],
    usageStats: {
      weeklyActiveHours: 26.2,
      docGeneratedCount: 58,
      lastActive: '2小时前',
      status: '高频'
    }
  },
  {
    id: 1003,
    name: '王启华',
    identity: '在读研究生',
    avatarSeed: 'wang',
    affiliation: {
      type: 'school',
      name: '浙江大学',
      detail: '计算机科学与技术学院硕士'
    },
    preferredApps: ['论文写作助手（超智科研社）', '科研项目管理', 'PoPyWaWa'],
    usageStats: {
      weeklyActiveHours: 19.8,
      docGeneratedCount: 12,
      lastActive: '1天前',
      status: '活跃'
    }
  },
  {
    id: 1004,
    name: '赵思敏',
    identity: '独立创意工作者',
    avatarSeed: 'zhao',
    affiliation: {
      type: 'none',
      name: '自由职业 / 独立工作室',
      detail: '新媒体视觉总监'
    },
    preferredApps: ['PoPyWaWa', 'DS多媒体工厂', '得乐｜DeLove'],
    usageStats: {
      weeklyActiveHours: 9.4,
      docGeneratedCount: 124,
      lastActive: '5分钟前',
      status: '活跃'
    }
  },
  {
    id: 1005,
    name: '刘洪宇',
    identity: '高职专科学生',
    avatarSeed: 'liu',
    affiliation: {
      type: 'school',
      name: '北京信息职业技术学院',
      detail: '软件技术专业大三学生'
    },
    preferredApps: ['提示词实训', '学生空间', '简历诊断'],
    usageStats: {
      weeklyActiveHours: 12.0,
      docGeneratedCount: 6,
      lastActive: '3天前',
      status: '普通'
    }
  }
]

// ----------------- 新增：分析看板专属数据集 -----------------

export const marketStats = {
  vocationalSchools: 1545,  // 全国职业院校数
  publicUniversities: 1270, // 全国公立大学数
  // 市场占有率比例数据
  vocationalShare: {
    aios: 22,
    cx: 45,
    tx: 20,
    other: 13
  },
  publicShare: {
    aios: 12,
    cx: 55,
    tx: 23,
    other: 10
  }
}

export const aiToolDemands = {
  general: [
    {
      title: '教案大纲一键重构',
      desc: '教师期望输入课程名称在 30 秒内一键适配最新的职业教育/本科国家大纲，自动排版为教案设计。',
      hotIndex: '95%'
    },
    {
      title: '主观题 AI 辅助评分',
      desc: '针对大量实训报告、作业和试卷主观题，提供多维度批改建议与秒级自动阅卷，减轻教师超 60% 工作负荷。',
      hotIndex: '88%'
    },
    {
      title: '教务评估 98 表自动生成',
      desc: '教务处最痛点硬性指标，从多维度子系统中自动检索抓取教学数据合并，规避年底高强度人工对表。',
      hotIndex: '92%'
    }
  ],
  customized: [
    {
      domain: '数控与机械制造专业',
      demand: '3D 虚拟实训辅助与操作纠错',
      desc: '结合 Web3D/XR 仿真技术，AI 实时监听学生轴承铣削等物理实操，进行毫米级虚拟红向预警及步骤打分。'
    },
    {
      domain: '电商与数字贸易专业',
      demand: 'AI 直播带货仿真与话术演练',
      desc: '提供高逼真多模态虚拟买家，学生在模拟直播间中进行交互话术对抗训练，AI 智能评估转化率和敏感词。'
    },
    {
      domain: '计算机与人工智能专业',
      demand: '国产大模型算力池统一调度',
      desc: '学校部署私有算力服务器，需要支持多学生班级的高并发大模型推理调用和细粒度 Token 额度管控。'
    }
  ],
  untapped: [
    {
      title: '国家双高/高校诊改验收数据底座',
      desc: '市面上没有能跨学院、跨系统自动抽取质量管理（诊改）评估指标的工具。多系统数据孤岛严重，打通此场景是一处蓝海金矿。',
      valuePoint: '🚀 极具溢价空间，可作为 50 万级整体方案核心卖点'
    },
    {
      title: '青年教师教学大赛 AI 备战包',
      desc: '全国各大青年教师技能大赛，对精品数字教材及交互课件要求苛刻。利用 AIGC 全套生成参赛级数字资产是一个强刚需点。',
      valuePoint: '💡 针对二级学院采购，走 3 万元直签通道极易破冰'
    }
  ]
}

export const marketShareOrbit = [
  {
    id: 'cx',
    name: '超星 / 智慧树等老牌厂商',
    share: 42,
    gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)', // 红色星体
    advantages: '教务管理教研系统垄断度极高，覆盖全国超 80% 高校，数字图书与视频课程资源历史累积极其丰厚。',
    weaknesses: '技术底层陈旧，缺乏原生 AI 基因；多为外挂拼凑型皮包大模型，无法做到跟细分专业链的深度图谱打通；交互臃肿且加载缓慢。',
    pricing: '客单价极高（通常全校级订阅 50 万~200 万/年），捆绑销售严重。采购必须走极为繁琐的省属公开招投标流程，决策周期通常长达数月，变数极多。'
  },
  {
    id: 'tx',
    name: '腾讯教育 / 阿里云智',
    share: 25,
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', // 蓝色星体
    advantages: '云计算底座与国产算力极其雄厚；SaaS 部署效率高，大厂品牌背书过硬，能直接打通腾讯会议等高粘性工具生态。',
    weaknesses: '业务场景过于通用，缺乏高校教务、诊改验收指标和细分专业实训的核心沉淀，不贴合高校教师备课的核心刚需。',
    pricing: '中等偏高（年费通常 30 万起），以算力存储与底层接口消耗计费为主。对于高校个性化的教学功能开发需要昂贵的单独定制外包费，决策复杂。'
  },
  {
    id: 'aios',
    name: '智域 AIOS (我方)',
    share: 18,
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', // 绿色高亮星体
    advantages: '场景极度精细聚焦（98表、青年备赛、大厂JD三层岗位图谱），非入侵式零硬件部署；首创 3 万元以下极速直签避标法，决策阻力彻底化零。',
    weaknesses: '初创期整体品牌背书稍逊于大厂，初期大额政采项目中需先通过“敲门砖”产品破冰建立深度信任。',
    pricing: '极其灵活机动！主打“敲门砖”服务（如 98 表、简历诊断）只需 1.8 万~2.8 万元，教研室划拨经费可自主直签；二期扩充时再通过询价或拆单进行高溢价扩充。'
  },
  {
    id: 'other',
    name: '中小微独立开发商',
    share: 15,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // 黄色星体
    advantages: '产品单价低，客户提出定制能极快响应和配合，销售手段灵活机动。',
    weaknesses: '完全无核心垂直大模型研发能力，多套用开源 API，系统在并发高时稳定性差、宕机率高；面临严苛的数据隐私等保合规合规卡点时基本无法过审。',
    pricing: '低价绞杀，客单价在 几千元至 2 万元不等，因无技术壁垒极易陷入低端同质化价格战。'
  }
]

export const regionalDistribution = [
  {
    id: 'east',
    name: '华东大区 (East China)',
    share: 35,
    provinces: '江苏、浙江、山东、上海、安徽',
    focus: '双一流与双高计划的核心集聚带，校企产学研合作土壤极其肥沃，高校信息化预算领跑全国。',
    tactics: '重点深耕大客单，以全校级 AI 中脑和仿真实验室整体解决方案（￥50-150万）为主推目标。',
    activeBadge: '主力深耕大本营',
    color: '#3b82f6'
  },
  {
    id: 'south',
    name: '华南大区 (South China)',
    share: 22,
    provinces: '广东、福建、广西、海南',
    focus: '职业教育的排头兵与创新试验区（以深职大为龙头），对产教融合与数字直播实训需求最为炽热。',
    tactics: '以“迷爪MeZa”智能项圈等旗舰 PoC 为切入点，打造省级产教融合实训示范基地。',
    activeBadge: '产教融合高地',
    color: '#10b981'
  },
  {
    id: 'north',
    name: '华北大区 (North China)',
    share: 18,
    provinces: '北京、天津、河北、山西、内蒙古',
    focus: '政治与科教中心，公立名校云集，对云安全隐私、国密等保合规及信创国产算力有着极其严苛的硬性准入标准。',
    tactics: '以等保三级云 SaaS 和单点登录极速接入为突破口，推广教务 98 表及科研项目管理。',
    activeBadge: '等保合规要塞',
    color: '#8b5cf6'
  },
  {
    id: 'midwest',
    name: '华中与西南大区 (Central & Southwest)',
    share: 15,
    provinces: '四川、重庆、湖南、湖北、江西、贵州、云南',
    focus: '政策红利倾斜地带，中西部职业本科建设的主力军，采购极度追求高性价比，重视提升毕业班初次就业率。',
    tactics: '以 3 万元以下简历诊断与模拟面试“敲门砖”工具快捷入校，帮助就业处完成硬性考核。',
    activeBadge: '性价比突破点',
    color: '#f59e0b'
  },
  {
    id: 'northwest_east',
    name: '西北与东北大区 (Northwest & Northeast)',
    share: 10,
    provinces: '陕西、黑龙江、吉林、辽宁、甘肃、新疆、青海',
    focus: '老牌工业与智能制造重镇，高校人才外流诊改重点帮扶大区，对数控机械实训仿真有强烈的传统刚需。',
    tactics: '联合本地工程重工龙头企业共建“双师型”教师流动站，提供数控实训定制化系统。',
    activeBadge: '工业仿真潜力区',
    color: '#64748b'
  }
]

