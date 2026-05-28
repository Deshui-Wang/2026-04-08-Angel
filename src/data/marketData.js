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
