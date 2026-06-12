import {
  FileText,
  PenBox,
  Kanban,
  BrainCircuit,
  Workflow,
  BookOpen,
  HeartPlus,
  Bot,
  GraduationCap,
  MessageSquare,
  MapPin,
  LayoutGrid,
  Briefcase,
  Video,
  FileSearch,
  Zap,
  BarChart3,
  Share2,
  Target,
  ShieldCheck,
  TrendingUp,
  ClipboardList,
  Layers,
  Rocket
} from 'lucide-vue-next'

export const strategyTabs = [
  { id: 'summary', label: '执行摘要', icon: Zap },
  { id: 'kg', label: '图谱构建', icon: Share2 },
  { id: 'pricing', label: '定价模型', icon: BarChart3 },
  { id: 'entry', label: '进校策略', icon: Target }
]

export const strategyData = {
  summary: {
    title: '产品战略执行摘要',
    subtitle: '面向职业院校的 AI 教学平台 ToB 落地路径',
    keyPoints: [
      {
        title: '核心策略',
        desc: '采用“敲门砖进入 → 模块化升级 → 整体方案标杆”的三步走落地方案。',
        icon: Rocket,
        color: '#3b82f6'
      },
      {
        title: '价格锚点',
        desc: '以 3 万元作为关键决策分界线，利用低价工具绕过冗长招标流程。',
        icon: TrendingUp,
        color: '#10b981'
      },
      {
        title: '破冰产品',
        desc: '重点推行“98 表自动填报工具”，直击教务处填报痛点，建立初步信任。',
        icon: ClipboardList,
        color: '#f59e0b'
      }
    ]
  },
  kg: {
    title: '岗位-专业图谱构建',
    desc: '解决“专业对口”与“能力匹配”的核心逻辑模型。',
    layers: [
      { name: '岗位层', content: '实时企业用人需求 (JD 结构化拆解)' },
      { name: '专业层', content: '院校专业设置与核心课程体系' },
      { name: '能力层', content: '具体技能标签、1+X 证书及实践经验' }
    ],
    phases: [
      { name: 'Phase 1: 基础图谱', time: '1-2 个月', goal: '建立“专业-职业”静态映射矩阵 (3500+ 关联)' },
      { name: 'Phase 2: 动态图谱', time: '3-6 个月', goal: '基于学生使用反馈，反哺能力匹配与预测模型' },
      { name: 'Phase 3: 智能图谱', time: '6 个月+', goal: '实现就业预测、企业自动匹配与个性化成长路径' }
    ]
  },
  pricing: {
    title: '多层级产品价格体系',
    tiers: [
      { name: '敲门砖产品', price: '1.8 - 5 万', items: ['98 表填报工具', 'AI 教案生成器', '轻量学情分析'] },
      { name: '场景化模块', price: '8 - 30 万', items: ['教学助手全能版', '实训管理平台', '就业指导系统'] },
      { name: '整体解决方案', price: '50 - 200 万', items: ['专业群整体建设', '全校级 AI+ 教育中枢'] }
    ],
    logic: [
      { label: '预算周期', val: '常规学年制 (9月-次年8月)' },
      { label: '采购流程', val: '3万以下直签 / 10万以上公开招标' },
      { label: '心智锚点', val: '对标超星/智慧树现有服务价格' }
    ]
  },
  entry: {
    title: '进校 Playbook',
    stakeholders: [
      { role: '教务处长', focus: '评估指标、减负', fear: '替换现有系统' },
      { role: '信息中心', focus: '安全、SaaS', fear: '新增本地硬件' },
      { role: '二级院长', focus: '专业建设、产教融合', fear: '通用同质化' },
      { role: '就业中心', focus: '对口率、校企合作', fear: '单一招聘平台' }
    ],
    workflow: ['前期研究 (专业设置)', '初次接触 (政策红利)', '场景演示 (真实数据)', '试用跟进', '方案复盘', '商务结项']
  }
}

export const categories = ['基座系统', '智能助管', '智能助教', '智能助研', '智能伴学', '智能就业']

export const productsData = {
  '顾得工具': [
    {
      id: 500,
      title: 'PoPyWaWa',
      description: 'AI 驱动的智能交互与内容生成平台，连接创意与未来的超级工具。',
      iconUrl: 'https://popywawa.deshui27.cn/pic/delove/DeLove03_transparent.png',
      link: 'https://popywawa.deshui27.cn/',
      stats: '全场景创意引擎',
      color: '#3b82f6',
    },

    {
      id: 502,
      title: 'DS多媒体工厂',
      description: '一站式多媒体内容创作中枢，支持 AI 视频生成、智能剪辑与特效合成。',
      icon: Video,
      link: 'https://duomeiti.deshui27.cn/',
      stats: '专业创作引擎',
      color: '#8b5cf6',
    },
    {
      id: 503,
      title: '得乐｜DeLove',
      description: '智能情感治愈与生活陪伴。⚠️ 建议使用手机浏览器打开体验更佳。',
      icon: HeartPlus,
      link: 'https://delove.deshui27.cn/',
      stats: '移动端深度优化',
      color: '#f43f5e',
    }
  ],
  '基座系统': [
    {
      id: 101,
      title: '算力管理',
      description: '统一调度与监控算力资源，支撑大规模 AI 模型训练与推理。',
      icon: Workflow,
      link: 'https://cloudmind.deshui27.cn/',
      stats: '弹性算力调度',
      color: '#475569',
    },
    {
      id: 104,
      title: '知识中心',
      description: '构建校园级私有知识库，支持非结构化数据的智能索引与知识图谱建模。',
      icon: BookOpen,
      link: 'https://knowledge.deshui27.cn/',
      stats: '向量化精准检索',
      color: '#475569',
    },
    {
      id: 105,
      title: 'AeiViz Studio',
      description: '互动教育可视化生成工具，助力高校教学内容的创新与创造。',
      icon: Layers,
      link: 'https://aeiviz.deshui27.cn',
      stats: '互动教学可视化',
      color: '#475569',
    }
  ],
  '智能助研': [
    {
      id: 2,
      title: '论文写作助手（超智科研社）',
      description: '专业的学术与公文写作伴侣，提供段落润色、语法修正和文献引用辅助。',
      icon: PenBox,
      link: 'https://chaozhikys.deshui27.cn/',
      stats: '2.5w+ 用户使用',
      color: '#0ea5e9',
    },
    {
      id: 3,
      title: '科研项目管理',
      description: '一站式科研周期管理，协同申报、进度追踪、经费管控及结项归档。',
      icon: Kanban,
      link: 'https://xiangmu.deshui27.cn/',
      stats: '实时智能管控',
      color: '#0ea5e9',
    },
    {
      id: 4,
      title: '多媒体工坊',
      description: '深度赋能科研成果的可视化呈现，支持多模态内容智能生成。',
      icon: Video,
      link: 'https://duomeiti.deshui27.cn/',
      stats: 'AIGC 创意引擎',
      color: '#0ea5e9',
    },
    {
      id: 5,
      title: '生态价值测算',
      description: '基于地理空间数据与科研模型，提供精准的生态系统价值评估报表。',
      icon: MapPin,
      link: 'https://ncst.cailian.net/',
      stats: '量化模型驱动',
      color: '#0ea5e9',
    }
  ],
  '智能助教': [
    {
      id: 201,
      title: '数字人技术与应用',
      description: '打造可交互的 3D 数字教师，实现全天候的沉浸式智能教学体验。',
      icon: Bot,
      link: 'https://digihumanai.cailian.net/',
      stats: '虚拟仿真教学',
      color: '#8b5cf6',
    },
    {
      id: 202,
      title: '提示词实训',
      description: '系统化培训 AI 提示词工程，助力教师与学生掌握生成式 AI 核心技能。',
      icon: MessageSquare,
      link: 'https://prompt.deshui27.cn/',
      stats: '实战技能提升',
      color: '#8b5cf6',
    },
    {
      id: 203,
      title: '教师教学档案袋',
      description: '全面记录教学轨迹，支持自动化生成教学绩效评估与职称评审材料。',
      icon: FileSearch,
      link: 'https://teacher.deshui27.cn/',
      stats: '数字化成长足迹',
      color: '#8b5cf6',
    },
    {
      id: 204,
      title: '优播',
      description: '专业的直播教学与资源分发平台，集成 AI 实时翻译与智能互动。',
      icon: Video,
      link: 'https://youbo.cailian.net/',
      stats: '高清流畅直播',
      color: '#8b5cf6',
    },
    {
      id: 205,
      title: '商家管理中心（2.0）',
      description: '教育资源商城运营管理，赋能教学物资的高效流转与精准适配。',
      icon: Briefcase,
      link: 'https://aimarket.cailian.net',
      stats: '平台生态运营',
      color: '#8b5cf6',
    },
    {
      id: 206,
      title: '智能选品与营销中心',
      description: '利用大数据精准推荐教学产品，提供一站式数字化教育营销解决方案。',
      icon: Kanban,
      link: 'https://aimarketuat.cailian.net/#/smartSelection/index',
      stats: '精准数据画像',
      color: '#8b5cf6',
    },
    {
      id: 207,
      title: '智能辅助评分',
      description: '自动批改各类作业与试卷，提供多维度的反馈建议，减轻教师负担。',
      icon: PenBox,
      link: 'https://fuzhupingfen.deshui27.cn/',
      stats: '秒级自动阅卷',
      color: '#8b5cf6',
    },
    {
      id: 208,
      title: 'AI学情分析',
      description: '实时跟踪学生学习状态，通过多维建模为因材施教提供数据决策。',
      icon: GraduationCap,
      link: 'https://xueqingfenxi.deshui27.cn/',
      stats: '因材施教决策',
      color: '#8b5cf6',
    }
  ],
  '智能伴学': [
    {
      id: 7,
      title: '个化学习路径规划',
      description: '分析学生基础与目标，利用认知图谱智能生成千人千面的学习计划。',
      icon: BookOpen,
      link: 'https://xuexilujing.deshui27.cn/',
      stats: 'AI 定制导航',
      color: '#ec4899',
    },
    {
      id: 8,
      title: '心理健康顾问与生活助手',
      description: '24小时在线的数字心理伴侣，整合校园生活服务，提供全方位关怀。',
      icon: HeartPlus,
      link: 'https://health.deshui27.cn/',
      stats: '全天候心理支持',
      color: '#ec4899',
    },
    {
      id: 301,
      title: '人才成长引擎（发展管理）',
      description: '追踪学生全周期成长数据，智能匹配能力模型，驱动人才跨越式发展。',
      icon: Workflow,
      link: 'https://czyq.cailian.net',
      stats: '能力多维提升',
      color: '#ec4899',
    },
    {
      id: 302,
      title: '学生空间',
      description: '集成化的个人学习中心，整合笔记、作业、资源及社交化学习功能。',
      icon: Kanban,
      link: 'https://studentspace.deshui27.cn/',
      stats: '云端智慧空间',
      color: '#ec4899',
    },
    {
      id: 11,
      title: '学业发展预警平台',
      description: '通过数据挖掘潜在的学习危机，提供早期干预建议与补救策略。',
      icon: GraduationCap,
      link: 'https://xuexilujing.deshui27.cn/',
      stats: '护航学业轨迹',
      color: '#ec4899',
    }
  ],
  '智能助管': [
    {
      id: 401,
      title: '奖助学金申请与评审',
      description: '全流程数字化的奖助学金申报 system，确保评审过程公平、公正、透明。',
      icon: FileText,
      link: 'https://scholarship.cailian.net',
      stats: '阳光评审体系',
      color: '#10b981',
    },
    {
      id: 402,
      title: '校园设施预约与管理',
      description: '一键预约图书馆、自习室及体育场馆，提升校园公共资源利用率。',
      icon: MapPin,
      link: 'https://campusreserve.cailian.net',
      stats: '资源错峰动态调度',
      color: '#10b981',
    },
    {
      id: 403,
      title: '学校管理平台',
      description: '面向校方的数字化治理中枢，集成行政、教学、安防及舆情分析。',
      icon: LayoutGrid,
      link: 'https://schooldate.deshui27.cn/',
      stats: '智慧校园大脑',
      color: '#10b981',
    }
  ],
  '智能就业': [
    {
      id: 12,
      title: '岗位撮合与精准就业平台',
      description: '基于技能标签的双向匹配，打破信息差，让求职与招聘更智能高效。',
      icon: Briefcase,
      link: 'https://jiuye.deshui27.cn/',
      stats: '多维智能推荐',
      color: '#f59e0b',
    },
    {
      id: 13,
      title: 'AI模拟面试',
      description: '真实还原企业面试场景，提供语音对答、表情分析与结构化反馈。',
      icon: Video,
      link: 'https://mianshi.deshui27.cn/',
      stats: '专家级面试陪跑',
      color: '#f59e0b',
    },
    {
      id: 14,
      title: '简历诊断',
      description: '利用自然语言处理全面体检简历，提供针对性的内容优化与排版建议。',
      icon: FileSearch,
      link: 'https://jianli.deshui27.cn/',
      stats: '提高简历通过率',
      color: '#f59e0b',
    },
    {
      id: 15,
      title: '职业生涯规划',
      description: '深挖性格特质与行业前景，定制清晰连贯的长远职业发展蓝图。',
      icon: MapPin,
      link: 'https://guihua.deshui27.cn/',
      stats: '引领职场破局',
      color: '#f59e0b',
    }
  ]
}

export const initialDreamIdeas = [
  {
    id: 1,
    title: '迷爪MeZa',
    subtitle: '宠物情绪与行为意图多模态解码项圈纽扣',
    statusText: '旗舰PoC验证中',
    color: '#38a169',
    icon: BrainCircuit,
    isPopy: true,
    isOpen: true,
    activeScenario: 'fear',
    shakeActive: false,
    particles: [],
    scenarios: {
      fear: {
        name: '雷雨惊恐 ⛈️',
        audioFreq: '0.4s',
        appTitle: '⚠️ 突发惊恐行为预警',
        appDesc: '端侧 AI 监测到萌宠在雷雨中偏侧角抖动幅率剧增 (IMU 幅值 +320%)，心音骨传导重叠啸叫，判定处于惊恐惊吓状态，已为您自动激活舒缓助眠香氛与防走丢定位。',
        diary: '【萌宠日记 📅 5月26日 雷雨】\n天空中突然发出轰隆隆的巨响，我害怕极了。项圈上的“纽扣”开始温热，我感到有些心安。主人别担心，虽然有大怪兽在叫，但我知道你会抱紧我。'
      },
      toilet: {
        name: '蹲便上厕所 💩',
        audioFreq: '1.2s',
        appTitle: '🚽 异常排泄行为研判',
        appDesc: '端侧 AI 连续 30s 捕捉到寰椎关节向下倾角 28° (IMU 蹲便姿态占比 > 95%)，并伴有规律呼吸声谱特征，判定正在进行排泄，实时监控暂无结石梗阻风险，身体指标良好。',
        diary: '【萌宠日记 📅 5月26日 晴】\n今天肚子有点涨涨的。蹲在草丛里努力了一下，终于通畅啦！项圈静静地记录着我的每一次轻松，主人看到我的健康指数是 100 分，一定会很开心吧。'
      },
      excited: {
        name: '极度兴奋 ⚡',
        audioFreq: '0.6s',
        appTitle: '🎉 极度欢愉状态提醒',
        appDesc: '端侧 AI 监测到高频细微点头与快速奔跑惯性流 (IMU 流速 +180%)，音轨特征频段呈现极度兴奋叫声，判定其情绪指数为 98% 级极度亢奋欢愉。',
        diary: '【萌宠日记 📅 5月26日 晴】\n主人拿起牵引绳的那一刻，我开心地要飞起来了！我用尽全力在客厅里转了三圈！项圈上的绿灯亮晶晶的，今天也是超级爱主人的一天！'
      }
    }
  },
  {
    id: 2,
    title: 'EduChain成果确权链',
    subtitle: '基于区块链的高校科研与创意成果确权平台',
    statusText: '概念设计中',
    color: '#3b82f6',
    icon: ShieldCheck,
    isPopy: false,
    isOpen: false,
    painpoint: '高校师生海量科研灵感与早期作品，因缺乏简易确权机制，极易在论文发表或转化前被抄袭泄露。',
    solution: '集成轻量级以太坊侧链，一键为创意火花生成数字签名与时间戳，在链上锁定知识产权。',
    business: '预计年收益￥1.5M，对标国内版权局版权存证，收费模式为单次存证￥10元起。',
    tech: 'ERC-721/1155 确权协议、私有分布式节点群、智能合约自动化审核机制。'
  },
  {
    id: 3,
    title: 'VRLabAI仿真实验室',
    subtitle: '基于 AIGC 与大模型的生成式虚拟实验教学系统',
    statusText: '架构设计中',
    color: '#8b5cf6',
    icon: Workflow,
    isPopy: false,
    isOpen: false,
    painpoint: '传统虚拟实训开发周期长（>6个月），无法根据教学内容灵活调整，且软硬件要求高。',
    solution: '学生输入实验需求，AIGC 在 3秒内动态生成 2.5D 三维虚拟实训场景，配备 AI 导师实时语音评分纠错。',
    business: 'ToB 年营收 ￥4.5M，采用按年订阅制，首批试点高校达 12 家。',
    tech: 'Three.js 引擎、WebXR 渲染架构、多模态端侧 LLM 流程监控引擎。'
  },
  {
    id: 4,
    title: 'UniMeet AI产学研中枢',
    subtitle: '打通校企信息壁垒的成果转化与精准撮合大脑',
    statusText: '数据录入中',
    color: '#f59e0b',
    icon: Share2,
    isPopy: false,
    isOpen: false,
    painpoint: '高校科研成果“锁在抽屉里”，而企业面临卡脖子技术找不到对口专家，信息存在严重错配。',
    solution: '以百亿参数级垂直领域大模型，对全网专利及高校教师的学术画像进行深度关联，提供分钟级供需自动撮合。',
    business: '撮合成功抽取 5% 佣金，会员制服务费 ￥50k/年。',
    tech: '多模态知识图谱、图神经网络 (GNN)、向量数据库毫秒级匹配检索。'
  }
]
