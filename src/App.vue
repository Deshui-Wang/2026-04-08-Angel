<script setup>
import { ref, watch, nextTick } from 'vue'
import {
  FileText,
  PenBox,
  Kanban,
  BrainCircuit,
  DatabaseZap,
  Workflow,
  ArrowRight,
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
  ShoppingCart,
  Sparkles,
  Lock,
  Zap,
  BarChart3,
  Share2,
  Map,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  PieChart,
  ClipboardList,
  Layers,
  Rocket
} from 'lucide-vue-next'
import { ElMessage, ElMessageBox } from 'element-plus'
import PurchaseAdvisor from './components/PurchaseAdvisor.vue'

const currentView = ref('portal') // 'portal' or 'strategy'
const activeStrategyTab = ref('summary')
const activeCategory = ref('基座系统')
const showPurchaseAdvisor = ref(false)

const strategyTabs = [
  { id: 'summary', label: '执行摘要', icon: Zap },
  { id: 'kg', label: '图谱构建', icon: Share2 },
  { id: 'pricing', label: '定价模型', icon: BarChart3 },
  { id: 'entry', label: '进校策略', icon: Target }
]

const strategyData = {
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

// Custom Password Modal State
const showPasswordModal = ref(false)
const passwordInput = ref('')
const pendingItem = ref(null)
const passwordInputRef = ref(null)

const closePasswordModal = () => {
  showPasswordModal.value = false
  passwordInput.value = ''
  pendingItem.value = null
}

const submitPassword = () => {
  if (passwordInput.value === '112027') {
    window.open(pendingItem.value.link, '_blank')
    closePasswordModal()
  } else {
    ElMessage.error('访问密码错误，请重新输入')
    passwordInput.value = ''
  }
}

watch(showPasswordModal, (val) => {
  if (val) {
    nextTick(() => {
      passwordInputRef.value?.focus()
    })
  }
})

const categories = ['基座系统', '智能助管', '智能助教', '智能助研', '智能伴学', '智能就业']

const productsData = {
  '顾得工具': [
    {
      id: 500,
      title: 'PopyWawa',
      description: 'AI 驱动的智能交互与内容生成平台，连接创意与未来的超级工具。',
      iconUrl: 'https://popywawa.deshui27.cn/pic/delove/DeLove03_transparent.png',
      link: 'https://popywawa.deshui27.cn/',
      stats: '全场景创意引擎',
      color: '#3b82f6',
    },
    {
      id: 501,
      title: 'HappyLife AI',
      description: '多维度情感计算与生活智能辅助，为您打造更有温度的 AI 生活伴侣。',
      icon: HeartPlus,
      link: 'https://happylife.deshui27.cn/',
      stats: '情感智能驱动',
      color: '#f43f5e',
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
      description: '全流程数字化的奖助学金申报系统，确保评审过程公平、公正、透明。',
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

const activeId = ref(null)

const handleNavigate = (item) => {
  const link = typeof item === 'string' ? item : item.link
  const title = typeof item === 'object' ? item.title : ''

  if (title === 'HappyLife AI' || link === 'https://happylife.deshui27.cn/') {
    pendingItem.value = { title, link }
    showPasswordModal.value = true
    return;
  }

  if (link && link !== '#') {
    window.open(link, '_blank');
  }
}
</script>

<template>
  <div class="portal-container">
    <header class="navbar">
      <div class="logo" @click="currentView = 'portal'">
        <BrainCircuit class="logo-icon" :size="32" />
        <span class="logo-text">智域 <span>AIOS</span></span>
      </div>
      <div class="main-nav">
        <button 
          class="nav-link" 
          :class="{ active: currentView === 'portal' }"
          @click="currentView = 'portal'"
        >
          产品矩阵
        </button>
        <button 
          class="nav-link" 
          :class="{ active: currentView === 'strategy' }"
          @click="currentView = 'strategy'"
        >
          战略分析
        </button>
        <button 
          class="nav-link" 
          :class="{ active: currentView === 'advisor' }"
          @click="currentView = 'advisor'"
        >
          采购建议
        </button>
        <button 
          class="nav-link" 
          :class="{ active: currentView === 'gude' }"
          @click="currentView = 'gude'"
        >
          顾得工具
        </button>
      </div>
      <div class="nav-links">
        <el-button type="primary" plain class="login-btn">登录工作台</el-button>
      </div>
    </header>

    <main v-if="currentView === 'portal'">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="glow-text">
            科研创新与智能教育的<br/>
            <span class="gradient-text">数字超级引擎</span>
          </h1>
          <p class="hero-subtext">
            汇聚全维数据体系，打造一体化生成式工作流，解锁产学研的高效协作与深度创新。
          </p>
        </div>
      </section>

      <section class="products-section">
        <div class="tabs-container">
          <div class="category-tabs">
            <button 
              v-for="cat in categories" 
              :key="cat"
              class="tab-btn"
              :class="{ active: activeCategory === cat }"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>
        </div>
        
        <div class="products-list">
          <div 
            v-for="item in productsData[activeCategory]" 
            :key="item.id"
            class="product-card"
            @mouseenter="activeId = item.id"
            @mouseleave="activeId = null"
            @click="handleNavigate(item)"
          >
            <div class="card-glow" :style="{ background: `radial-gradient(circle at right, ${item.color}33, transparent 70%)`, opacity: activeId === item.id ? 1 : 0 }"></div>
            
            <div class="card-content">
              <div class="icon-wrapper" :style="{ backgroundColor: `${item.color}1A`, color: item.color }">
                <img v-if="item.iconUrl" :src="item.iconUrl" :alt="item.title" class="custom-icon" />
                <component v-else :is="item.icon" :size="32" />
              </div>
              
              <div class="product-info">
                <h3 class="product-title">{{ item.title }}</h3>
                <p class="product-desc">{{ item.description }}</p>
              </div>

              <div class="product-meta">
                <span class="meta-tag" :style="{ backgroundColor: item.color }">
                  <span class="dot"></span>
                  {{ item.stats }}
                </span>
                <el-button 
                  round 
                  class="enter-btn"
                  :class="{ 'is-active': activeId === item.id }"
                  :style="activeId === item.id ? { backgroundColor: item.color, borderColor: item.color, color: '#fff' } : {}"
                  @click.stop="handleNavigate(item)"
                >
                  进入产品
                  <ArrowRight class="btn-icon" :size="16" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Strategic Analysis View -->
    <main v-else-if="currentView === 'strategy'" class="strategy-section">
      <div class="strategy-container">
        <aside class="strategy-sidebar">
          <div class="sidebar-header">
            <ClipboardList :size="24" />
            <span>战略看板</span>
          </div>
          <nav class="strategy-nav">
            <button 
              v-for="tab in strategyTabs" 
              :key="tab.id"
              class="strategy-tab-btn"
              :class="{ active: activeStrategyTab === tab.id }"
              @click="activeStrategyTab = tab.id"
            >
              <component :is="tab.icon" :size="18" />
              {{ tab.label }}
            </button>
          </nav>
        </aside>

        <section class="strategy-content">
          <!-- Summary Tab -->
          <div v-if="activeStrategyTab === 'summary'" class="tab-pane">
            <div class="pane-header">
              <h2 class="pane-title">{{ strategyData.summary.title }}</h2>
              <p class="pane-subtitle">{{ strategyData.summary.subtitle }}</p>
            </div>
            <div class="summary-grid">
              <div v-for="point in strategyData.summary.keyPoints" :key="point.title" class="summary-card">
                <div class="point-icon" :style="{ color: point.color, backgroundColor: `${point.color}15` }">
                  <component :is="point.icon" :size="24" />
                </div>
                <h4>{{ point.title }}</h4>
                <p>{{ point.desc }}</p>
              </div>
            </div>
            <div class="strategy-highlight-box">
              <p>核心结论：采用<strong>“敲门砖产品进校 → 模块化升级 → 整体解决方案做标杆”</strong>的三步走策略，建立信任后再逐步转化为高价值模块。</p>
            </div>
          </div>

          <!-- Knowledge Graph Tab -->
          <div v-else-if="activeStrategyTab === 'kg'" class="tab-pane">
            <div class="pane-header">
              <h2 class="pane-title">{{ strategyData.kg.title }}</h2>
              <p class="pane-subtitle">{{ strategyData.kg.desc }}</p>
            </div>
            <div class="kg-mapping">
              <div v-for="(layer, idx) in strategyData.kg.layers" :key="layer.name" class="kg-layer-item">
                <div class="layer-badge">L{{ idx + 1 }}</div>
                <div class="layer-info">
                  <strong>{{ layer.name }}</strong>
                  <span>{{ layer.content }}</span>
                </div>
              </div>
            </div>
            <div class="phases-timeline">
              <div v-for="phase in strategyData.kg.phases" :key="phase.name" class="phase-node">
                <div class="phase-meta">
                  <span class="phase-name">{{ phase.name }}</span>
                  <span class="phase-time">{{ phase.time }}</span>
                </div>
                <div class="phase-goal">{{ phase.goal }}</div>
              </div>
            </div>
          </div>

          <!-- Pricing Tab -->
          <div v-else-if="activeStrategyTab === 'pricing'" class="tab-pane">
            <div class="pane-header">
              <h2 class="pane-title">{{ strategyData.pricing.title }}</h2>
            </div>
            <div class="pricing-tiers">
              <div v-for="tier in strategyData.pricing.tiers" :key="tier.name" class="tier-card">
                <div class="tier-name">{{ tier.name }}</div>
                <div class="tier-price">{{ tier.price }}</div>
                <ul class="tier-items">
                  <li v-for="item in tier.items" :key="item"><Check :size="14" /> {{ item }}</li>
                </ul>
              </div>
            </div>
            <div class="pricing-logic">
              <div v-for="item in strategyData.pricing.logic" :key="item.label" class="logic-row">
                <span class="logic-label">{{ item.label }}</span>
                <span class="logic-val">{{ item.val }}</span>
              </div>
            </div>
          </div>

          <!-- Entry Tab -->
          <div v-else-if="activeStrategyTab === 'entry'" class="tab-pane">
            <div class="pane-header">
              <h2 class="pane-title">{{ strategyData.entry.title }}</h2>
            </div>
            <div class="stakeholders-list">
              <div v-for="s in strategyData.entry.stakeholders" :key="s.role" class="stakeholder-card">
                <h5>{{ s.role }}</h5>
                <div class="s-detail"><strong>关注点:</strong> {{ s.focus }}</div>
                <div class="s-detail"><strong>最怕:</strong> {{ s.fear }}</div>
              </div>
            </div>
            <div class="workflow-steps">
              <div v-for="(step, idx) in strategyData.entry.workflow" :key="step" class="workflow-node">
                <div class="node-idx">{{ idx + 1 }}</div>
                <div class="node-text">{{ step }}</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Advisor Page View -->
    <main v-else-if="currentView === 'advisor'">
      <PurchaseAdvisor 
        :productsData="productsData" 
        :isEmbed="true" 
        @navigate="handleNavigate"
      />
    </main>

    <!-- Gude Tools Page View -->
    <main v-else-if="currentView === 'gude'">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="glow-text">
            创意与未来的<br/>
            <span class="gradient-text">数字生产力工具箱</span>
          </h1>
          <p class="hero-subtext">
            精选多维度情感计算、多媒体工厂与超级交互引擎，解锁您的创意边界，享受有温度的 AI 生活。
          </p>
        </div>
      </section>

      <section class="products-section" style="padding-top: 1rem;">
        <div class="products-list">
          <div 
            v-for="item in productsData['顾得工具']" 
            :key="item.id"
            class="product-card"
            @mouseenter="activeId = item.id"
            @mouseleave="activeId = null"
            @click="handleNavigate(item)"
          >
            <div class="card-glow" :style="{ background: `radial-gradient(circle at right, ${item.color}33, transparent 70%)`, opacity: activeId === item.id ? 1 : 0 }"></div>
            
            <div class="card-content">
              <div class="icon-wrapper" :style="{ backgroundColor: `${item.color}1A`, color: item.color }">
                <img v-if="item.iconUrl" :src="item.iconUrl" :alt="item.title" class="custom-icon" />
                <component v-else :is="item.icon" :size="32" />
              </div>
              
              <div class="product-info">
                <h3 class="product-title">{{ item.title }}</h3>
                <p class="product-desc">{{ item.description }}</p>
              </div>

              <div class="product-meta">
                <span class="meta-tag" :style="{ backgroundColor: item.color }">
                  <span class="dot"></span>
                  {{ item.stats }}
                </span>
                <el-button 
                  round 
                  class="enter-btn"
                  :class="{ 'is-active': activeId === item.id }"
                  :style="activeId === item.id ? { backgroundColor: item.color, borderColor: item.color, color: '#fff' } : {}"
                  @click.stop="handleNavigate(item)"
                >
                  进入产品
                  <ArrowRight class="btn-icon" :size="16" />
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- [NEW] 创业梦工厂专属页面 -->
    <main v-else-if="currentView === 'dreamFactory'" class="dream-factory-page">
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="glow-text">
            创业梦工厂<br/>
            <span class="gradient-text">Startup Dream Factory</span>
          </h1>
          <p class="hero-subtext">
            探索未来科技与教育交互的无限可能，点亮创新设想的孵化看板。
          </p>
        </div>
      </section>

      <!-- 创意设想孵化矩阵看板 -->
      <section class="ideas-section">
        <div class="ideas-grid">
          
          <!-- 遍历所有创意想法 -->
          <div 
            v-for="idea in dreamIdeas" 
            :key="idea.id" 
            class="idea-card"
            :class="{ 'is-popy-card': idea.isPopy, 'is-open': idea.isOpen }"
            :style="{ '--idea-color': idea.color }"
          >
            <!-- 头部：图标与状态呼吸灯 -->
            <div class="idea-card-header">
              <div class="idea-icon-wrapper" :style="{ backgroundColor: `${idea.color}15`, color: idea.color }">
                <component :is="idea.icon" :size="24" />
              </div>
              <div class="status-badge" :style="{ color: idea.color, borderColor: `${idea.color}30`, backgroundColor: `${idea.color}08` }">
                <span class="status-dot pulsing" :style="{ backgroundColor: idea.color, boxShadow: `0 0 8px ${idea.color}` }"></span>
                {{ idea.statusText }}
              </div>
            </div>

            <!-- 核心标题与副标题 -->
            <div class="idea-card-body">
              <h3 class="idea-title">{{ idea.title }}</h3>
              <p class="idea-subtitle">{{ idea.subtitle }}</p>
            </div>

            <!-- 可折叠/展开的深度细节面板触发器 -->
            <div class="idea-accordion-trigger" @click="idea.isOpen = !idea.isOpen">
              <span>{{ idea.isOpen ? '收起设想细节' : '展开多维设想细节' }}</span>
              <component :is="idea.isOpen ? ChevronLeft : ArrowRight" class="arrow-icon" :size="16" :style="{ transform: `rotate(${idea.isOpen ? '90deg' : '0'})`, transition: 'all 0.3s' }" />
            </div>

            <!-- 展开的细节区 -->
            <div v-show="idea.isOpen" class="idea-accordion-content">
              
              <!-- 情况 A：普通创意折叠面板（EduChain, VRLab, UniMeet） -->
              <div v-if="!idea.isPopy" class="regular-idea-details">
                <div class="detail-block">
                  <span class="detail-label">🚨 痛点分析:</span>
                  <p class="detail-text">{{ idea.painpoint }}</p>
                </div>
                <div class="detail-block">
                  <span class="detail-label">💡 核心方案:</span>
                  <p class="detail-text">{{ idea.solution }}</p>
                </div>
                <div class="detail-block">
                  <span class="detail-label">💎 商业估值:</span>
                  <p class="detail-text">{{ idea.business }}</p>
                </div>
                <div class="detail-block">
                  <span class="detail-label">🛠️ 核心技术:</span>
                  <p class="detail-text">{{ idea.tech }}</p>
                </div>
              </div>

              <!-- 情况 B：旗舰级可交互 PoC 沙盒实验室（PoPyWaWa） -->
              <div v-else class="popy-sandbox-lab">
                <div class="sandbox-divider"><span>PoC 端侧多模态 AI 概念实验室</span></div>
                
                <div class="sandbox-grid">
                  <!-- 1. 左栏：2D矢量宠物项圈拆解图 -->
                  <div class="sandbox-column collar-column">
                    <div class="column-header">🔍 项圈几何结构分析</div>
                    <div class="collar-visual-box">
                      <!-- 高级 SVG 渲染智能项圈与纽扣 -->
                      <svg class="collar-svg" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(56, 161, 105, 0.15)" stroke-width="12" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#collar-grad)" stroke-width="8" stroke-dasharray="440" stroke-dashoffset="80" />
                        <!-- 骨传导挂饰悬坠 -->
                        <g class="pendant-g">
                          <line x1="100" y1="170" x2="100" y2="185" stroke="#38a169" stroke-width="3" />
                          <circle cx="100" cy="185" r="12" fill="#0f172a" stroke="#38a169" stroke-width="2" />
                          <circle cx="100" cy="185" r="4" fill="#58d68d" class="pendant-pulse" />
                        </g>
                        <!-- 后脑高位感知片 -->
                        <g class="sensor-g">
                          <rect x="85" y="22" width="30" height="12" rx="4" fill="#0f172a" stroke="#38a169" stroke-width="2" />
                          <circle cx="100" cy="28" r="3" fill="#e74c3c" class="sensor-pulse" />
                        </g>
                        <!-- 渐变渲染定义 -->
                        <defs>
                          <linearGradient id="collar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#38a169" />
                            <stop offset="100%" stop-color="#1a365d" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <!-- 交互脉冲锚点 A：下巴低位项坠 -->
                      <div class="collar-anchor anchor-chin tooltip-trigger">
                        <span class="anchor-dot"></span>
                        <div class="tooltip-bubble">
                          <strong>⚓ 下巴低位挂坠（纽扣核心）：</strong>
                          <p>重力锚点平衡项圈（配重质量 > 65%），内置骨传导声学拾音器与110°前向同视角超微摄像头。</p>
                        </div>
                      </div>

                      <!-- 交互脉冲锚点 B：后脑高位感知片 -->
                      <div class="collar-anchor anchor-atlas tooltip-trigger">
                        <span class="anchor-dot"></span>
                        <div class="tooltip-bubble">
                          <strong>🧠 后脑高位感知柔性片：</strong>
                          <p>极轻量级寰椎关节阻尼片（质量占比 < 15%），内置高频六轴 IMU，深度捕捉头部偏侧、颤抖与细微点头幅率。</p>
                        </div>
                      </div>
                    </div>
                    <div class="collar-caption">💡 鼠标Hover圆环上的绿色脉冲点可查阅专业构造</div>
                  </div>

                  <!-- 2. 中栏：端侧推理控制台 (波形图 & 融合公式) -->
                  <div class="sandbox-column control-column">
                    <div class="column-header">🎛️ 实验室端侧推理控制台</div>
                    
                    <!-- 场景切换 Tab -->
                    <div class="scenario-selector">
                      <button 
                        v-for="(scene, key) in idea.scenarios" 
                        :key="key"
                        class="scenario-tab"
                        :class="{ active: idea.activeScenario === key }"
                        @click="switchScenario(idea, key)"
                      >
                        {{ scene.name }}
                      </button>
                    </div>

                    <!-- 输入端实时模拟数据流 -->
                    <div class="data-streams">
                      <div class="stream-item">
                        <div class="stream-label">🎙️ 声学特征波谱 (Audio Wave)</div>
                        <div class="wave-box">
                          <!-- 10个动态起伏声波条 -->
                          <div 
                            v-for="i in 10" 
                            :key="i" 
                            class="audio-bar"
                            :style="{ 
                              animationDuration: idea.scenarios[idea.activeScenario].audioFreq,
                              animationDelay: `${i * 0.05}s`
                            }"
                          ></div>
                        </div>
                      </div>

                      <div class="stream-item">
                        <div class="stream-label">🧭 六轴动作惯性流 (IMU Flux)</div>
                        <div class="imu-box">
                          <svg class="imu-svg" viewBox="0 0 100 20">
                            <!-- 模拟三轴运动波形折线图 -->
                            <path d="M 0 10 Q 15 2, 30 14 T 60 8 T 90 12 L 100 10" fill="none" stroke="#38a169" stroke-width="1.5" class="imu-path" />
                            <path d="M 0 8 Q 20 18, 40 4 T 80 16 L 100 8" fill="none" stroke="#3b82f6" stroke-width="1" class="imu-path-blue" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <!-- AI 特征矩阵拼接公式 -->
                    <div class="fusion-formula-box">
                      <div class="formula-title">🧮 特征向量矩阵融合 (Feature Fusion)</div>
                      <div class="formula-latex">
                        M<sub>fusion</sub> = [ V<sub>audio</sub>, V<sub>motion</sub>, V<sub>context</sub> ]
                      </div>
                      <!-- 模型反馈飞出的绿色微粒 -->
                      <div 
                        v-for="p in idea.particles" 
                        :key="p.id"
                        class="gradient-particle"
                        :style="{ 
                          left: `calc(50% + ${p.x}px)`,
                          bottom: `calc(20px + ${p.y}px)`,
                          animationDelay: `${p.delay}s` 
                        }"
                      ></div>
                    </div>
                  </div>

                  <!-- 3. 右栏：智能手机终端模拟 -->
                  <div class="sandbox-column phone-column">
                    <div class="column-header">📱 智域 App 移动监视端</div>
                    
                    <!-- 手机拟真框体 -->
                    <div class="phone-frame" :class="{ 'vibrate-shake': idea.shakeActive }">
                      <div class="phone-notch"></div>
                      
                      <div class="phone-screen">
                        <!-- 手机状态栏 -->
                        <div class="screen-status-bar">
                          <span>11:45</span>
                          <span>📶 🔋</span>
                        </div>

                        <!-- 推理判定强震动弹窗 -->
                        <div class="screen-alert-card">
                          <div class="alert-header">
                            <span class="alert-dot"></span>
                            {{ idea.scenarios[idea.activeScenario].appTitle }}
                          </div>
                          <div class="alert-body">
                            {{ idea.scenarios[idea.activeScenario].appDesc }}
                          </div>
                        </div>

                        <!-- 第一人称日记卡片 -->
                        <div class="screen-diary-card">
                          <div class="diary-header">
                            🐕 萌宠心情第一人称日记
                          </div>
                          <!-- 包含随着场景动态变化的日记 -->
                          <div class="diary-body">
                            <p class="diary-text">{{ idea.scenarios[idea.activeScenario].diary }}</p>
                          </div>
                        </div>

                        <!-- 增量模型反馈闭环 -->
                        <div class="screen-feedback-loop">
                          <div class="feedback-hint">对本次情绪判定进行小样本反馈:</div>
                          <div class="feedback-actions">
                            <button class="fb-btn correct" @click="triggerFineTuning(idea)">
                              ✔️ 翻译准确
                            </button>
                            <button class="fb-btn incorrect" @click="triggerFineTuning(idea)">
                              ❌ 是在撒娇
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- 创意火花投递箱 -->
      <section class="spark-idea-section">
        <div class="spark-idea-card">
          <div class="spark-glow"></div>
          <div class="spark-header">
            <div class="spark-icon-wrapper">
              <Sparkles :size="24" />
            </div>
            <h3>投递您的创意火花</h3>
            <p>我们相信每一个伟大的创业都始于一个小小的灵感火花。请在此投递您的想法，梦工厂孵化专家将助您点石成金。</p>
          </div>
          <div class="spark-body">
            <textarea 
              v-model="sparkIdeaText" 
              placeholder="请描述您的创意点子、想要解决的问题或者创业想法..."
              rows="4"
              class="spark-textarea"
            ></textarea>
          </div>
          <div class="spark-footer">
            <button 
              class="submit-spark-btn"
              :disabled="!sparkIdeaText.trim()"
              @click="submitSparkIdea"
            >
              向火花智囊团投递创意
              <ArrowRight :size="18" />
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Background decoration -->
    <div class="bg-grid"></div>

    <!-- Premium Password Modal -->
    <transition name="modal-fade">
      <div v-if="showPasswordModal" class="password-modal-overlay" @click.self="closePasswordModal">
        <div class="password-modal-card">
          <div class="modal-glow"></div>
          <div class="modal-header">
            <div class="lock-icon-wrapper">
              <Lock :size="28" />
            </div>
            <h3>安全访问校验</h3>
            <p>该资源受密码保护，请输入 6 位访问码以继续</p>
          </div>
          
          <div class="modal-body">
            <div class="input-container">
              <input 
                ref="passwordInputRef"
                v-model="passwordInput" 
                type="password" 
                placeholder="请输入密码" 
                class="premium-input"
                @keyup.enter="submitPassword"
              />
              <div class="input-focus-border"></div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="modal-btn secondary" @click="closePasswordModal">取消</button>
            <button class="modal-btn primary" @click="submitPassword">
              验证并进入
              <ArrowRight :size="18" />
            </button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
.portal-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

/* Navbar - Apple Style */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2vw;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  border-bottom: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  color: var(--text-primary);
}

.logo-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.logo-text span {
  font-weight: 400;
  color: var(--text-secondary);
}

.login-btn {
  border-radius: 980px !important;
  font-size: 0.8rem !important;
  padding: 8px 16px !important;
  background-color: var(--text-primary) !important;
  color: #fff !important;
  border: none !important;
}
.login-btn:hover {
  background-color: rgba(0,0,0,0.8) !important;
}

/* Hero Section */
.hero-section {
  margin-top: 80px;
  padding: 5rem 2rem 3rem 2rem;
  text-align: center;
  position: relative;
}

.glow-text {
  font-size: 3.8rem;
  font-weight: 700;
  line-height: 1.05;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  letter-spacing: -0.015em;
}

.gradient-text {
  color: var(--primary);
  background: none;
  -webkit-text-fill-color: initial;
}

.hero-subtext {
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0 auto;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

/* Products Section */
.products-section {
  margin: 0 auto 6rem auto;
  padding: 0 2rem;
  width: 100%;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: 2.5rem;
  text-align: center;
}

.section-title::after {
  display: none;
}

/* Tabs Container */
.tabs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
  width: 100%;
  position: relative;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #f1f1f2;
  padding: 6px;
  border-radius: 98px;
  width: fit-content;
}

.tab-btn {
  background: transparent;
  border: none;
  border-radius: 98px;
  padding: 10px 24px;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  letter-spacing: -0.01em;
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  background: #fff;
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
}

.actions-group {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.purchase-advisor-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0f172a, #334155);
  color: #fff;
  border: none;
  border-radius: 98px;
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.purchase-advisor-trigger .sparkle-icon {
  color: #fbbf24;
}

.purchase-advisor-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  opacity: 0.95;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Product Cards */
.products-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.product-card {
  position: relative;
  background: var(--bg-surface);
  border: 1px solid rgba(0,0,0,0.04);
  padding: 3rem 2.5rem;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(0,0,0,0.08);
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  height: 100%;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.custom-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 85%;
}

.product-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.8rem 0;
  letter-spacing: -0.015em;
  line-height: 1.1;
}

.product-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.product-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
  padding-top: 2rem;
}

.meta-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #fff;
  padding: 4px 10px;
  border-radius: 980px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff !important;
}

.enter-btn {
  background: #f5f5f7;
  border-color: transparent;
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 980px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.enter-btn:hover {
  background: var(--text-primary) !important;
  color: #fff !important;
}

.btn-icon {
  transition: transform 0.3s ease;
}

.enter-btn.is-active .btn-icon {
  transform: translateX(3px);
}

/* Grid Decoration */
.bg-grid {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }
  
  .glow-text {
    font-size: 2.5rem;
  }
  
  .card-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  
  .product-meta {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

/* Premium Password Modal Styles */
.password-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.password-modal-card {
  width: 420px;
  background: #fff;
  border-radius: 28px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.modal-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, var(--primary) 0%, transparent 70%);
  opacity: 0.03;
  pointer-events: none;
}

.lock-icon-wrapper {
  width: 64px;
  height: 64px;
  background: #f1f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.modal-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.modal-header p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 32px;
}

.modal-body {
  width: 100%;
  margin-bottom: 32px;
}

.input-container {
  position: relative;
  width: 100%;
}

.premium-input {
  width: 100%;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  letter-spacing: 0.2em;
}

.premium-input::placeholder {
  letter-spacing: normal;
  color: #94a3b8;
  font-weight: 400;
}

.premium-input:focus {
  background: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.modal-footer {
  display: flex;
  gap: 12px;
  width: 100%;
}

.modal-btn {
  flex: 1;
  padding: 14px 20px;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
}

.modal-btn.primary {
  background: var(--text-primary);
  color: #fff;
}

.modal-btn.primary:hover {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.15);
}

.modal-btn.secondary {
  background: #f1f5f9;
  color: var(--text-secondary);
}

.modal-btn.secondary:hover {
  background: #e2e8f0;
  color: var(--text-primary);
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-fade-enter-active .password-modal-card {
  animation: modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalIn {
  0% { opacity: 0; transform: translateY(20px) scale(0.9); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
/* Main Navigation */
.main-nav {
  display: flex;
  gap: 2rem;
  margin: 0 2rem;
}

.nav-link {
  background: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--text-primary);
  font-weight: 700;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
}

/* Strategic Analysis Section */
.strategy-section {
  margin-top: 100px;
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
}

.strategy-container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 3rem;
  min-height: 70vh;
}

.strategy-sidebar {
  width: 240px;
  flex-shrink: 0;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.2rem;
}

.strategy-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.strategy-tab-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border: none;
  background: transparent;
  border-radius: 12px;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;
}

.strategy-tab-btn:hover {
  background: rgba(0, 0, 0, 0.03);
  color: var(--text-primary);
}

.strategy-tab-btn.active {
  background: var(--text-primary);
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.strategy-content {
  flex: 1;
  background: var(--bg-surface);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 32px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
}

.pane-header {
  margin-bottom: 3rem;
}

.pane-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.pane-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* Summary Grid */
.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.summary-card {
  padding: 2rem;
  background: #f8fafc;
  border-radius: 24px;
  text-align: left;
  transition: transform 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
}

.point-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.summary-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.summary-card p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.strategy-highlight-box {
  background: linear-gradient(135deg, #0f172a, #334155);
  color: #fff;
  padding: 2rem;
  border-radius: 24px;
  line-height: 1.6;
}

.strategy-highlight-box strong {
  color: #fbbf24;
}

/* Knowledge Graph Mapping */
.kg-mapping {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.kg-layer-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f1f5f9;
  border-radius: 16px;
}

.layer-badge {
  background: var(--text-primary);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.layer-info strong {
  display: block;
  font-size: 1.1rem;
  color: var(--text-primary);
}

/* Timeline */
.phases-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1rem;
  border-left: 2px dashed #e2e8f0;
}

.phase-node {
  position: relative;
  padding-left: 2rem;
}

.phase-node::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 0;
  width: 16px;
  height: 16px;
  background: #fff;
  border: 4px solid var(--text-primary);
  border-radius: 50%;
}

.phase-meta {
  margin-bottom: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.phase-name {
  font-weight: 700;
  color: var(--text-primary);
}

.phase-time {
  font-size: 0.85rem;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 6px;
  color: #64748b;
}

/* Pricing Section */
.pricing-tiers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tier-card {
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.tier-card:hover {
  border-color: var(--text-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.tier-name {
  font-weight: 700;
  color: #64748b;
  margin-bottom: 0.8rem;
}

.tier-price {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.tier-items {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.tier-items li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.pricing-logic {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 16px;
}

.logic-row {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.logic-row:last-child {
  border-bottom: none;
}

.logic-label {
  color: #64748b;
  font-weight: 500;
}

.logic-val {
  font-weight: 700;
  color: var(--text-primary);
}

/* Entry Section */
.stakeholders-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
}

.stakeholder-card {
  padding: 1.5rem;
  background: #fff;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}

.stakeholder-card h5 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
}

.s-detail {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}

.workflow-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.workflow-node {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  padding: 10px 16px;
  border-radius: 98px;
  border: 1px solid #e2e8f0;
  font-weight: 600;
  font-size: 0.9rem;
}

.node-idx {
  background: var(--text-primary);
  color: #fff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

@media (max-width: 992px) {
  .strategy-container {
    flex-direction: column;
    gap: 2rem;
  }
  .strategy-sidebar {
    width: 100%;
  }
  .strategy-nav {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
  }
  .strategy-tab-btn {
    white-space: nowrap;
    width: auto;
  }
  .summary-grid, .pricing-tiers {
    grid-template-columns: 1fr;
  }
}

/* ==========================================
   创业梦工厂 & PoPyWaWa 旗舰 PoC 概念实验室 
   ========================================== */

/* 专属旗舰级卡片样式 */
.is-popy-card {
  background: linear-gradient(135deg, #0b1329 0%, #050814 100%) !important;
  border: 1px solid rgba(56, 161, 105, 0.25) !important;
  box-shadow: 0 20px 50px rgba(5, 8, 20, 0.8), 0 0 30px rgba(56, 161, 105, 0.05) !important;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.is-popy-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(56, 161, 105, 0.03) 0%, transparent 70%);
  pointer-events: none;
}

/* 实验室水平分割线 */
.sandbox-divider {
  display: flex;
  align-items: center;
  margin: 2.5rem 0 2rem 0;
  position: relative;
}

.sandbox-divider::before,
.sandbox-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(56, 161, 105, 0.3), transparent);
}

.sandbox-divider span {
  padding: 0 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #38a169;
  text-shadow: 0 0 10px rgba(56, 161, 105, 0.4);
}

/* 实验室主格网 */
.popy-sandbox-lab {
  width: 100%;
  margin-top: 1.5rem;
}

.sandbox-grid {
  display: grid;
  grid-template-columns: 1.1fr 1.2fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
}

/* 栏目共有样式 */
.sandbox-column {
  background: rgba(13, 20, 38, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
}

.sandbox-column:hover {
  border-color: rgba(56, 161, 105, 0.2);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3);
}

.column-header {
  font-size: 1rem;
  font-weight: 700;
  color: #f8fafc;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 左栏：宠物项圈结构拆解图 */
.collar-column {
  position: relative;
}

.collar-visual-box {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 240px;
  background: radial-gradient(circle, rgba(26, 54, 93, 0.1) 0%, transparent 80%);
  border-radius: 16px;
  border: 1px dashed rgba(255, 255, 255, 0.03);
}

.collar-svg {
  width: 80%;
  height: 80%;
  transform-origin: center;
  animation: svgRotate 30s linear infinite;
}

@keyframes svgRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.pendant-pulse {
  animation: pulseGreen 2s infinite alternate;
}

.sensor-pulse {
  animation: pulseRed 1.5s infinite alternate;
}

@keyframes pulseGreen {
  0% { r: 3px; fill-opacity: 0.6; }
  100% { r: 5px; fill-opacity: 1; filter: drop-shadow(0 0 6px #38a169); }
}

@keyframes pulseRed {
  0% { r: 2px; fill-opacity: 0.6; }
  100% { r: 4px; fill-opacity: 1; filter: drop-shadow(0 0 6px #e74c3c); }
}

/* 交互脉冲锚点 */
.collar-anchor {
  position: absolute;
  cursor: pointer;
  z-index: 10;
}

.anchor-chin {
  bottom: 18%;
  left: 50%;
  transform: translateX(-50%);
}

.anchor-atlas {
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
}

.anchor-dot {
  width: 14px;
  height: 14px;
  background-color: #38a169;
  border-radius: 50%;
  display: block;
  border: 2px solid #ffffff;
  position: relative;
  box-shadow: 0 0 10px rgba(56, 161, 105, 0.8);
}

.anchor-dot::after {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border: 1.5px solid #38a169;
  border-radius: 50%;
  animation: ripple 2s infinite;
  opacity: 0;
}

@keyframes ripple {
  0% { transform: scale(0.6); opacity: 0; }
  50% { opacity: 0.8; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* Tooltip 悬浮气泡 */
.tooltip-trigger {
  position: absolute;
}

.tooltip-bubble {
  position: absolute;
  bottom: 160%;
  left: 50%;
  transform: translateX(-50%) translateY(10px) scale(0.95);
  width: 220px;
  background: rgba(10, 15, 30, 0.95);
  border: 1px solid rgba(56, 161, 105, 0.4);
  border-radius: 12px;
  padding: 1rem;
  color: #e2e8f0;
  font-size: 0.8rem;
  line-height: 1.5;
  pointer-events: none;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(56, 161, 105, 0.1);
  z-index: 100;
  text-align: left;
  backdrop-filter: blur(10px);
}

.tooltip-bubble::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: rgba(56, 161, 105, 0.4);
}

.tooltip-trigger:hover .tooltip-bubble {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}

.tooltip-bubble strong {
  color: #58d68d;
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
}

.tooltip-bubble p {
  margin: 0;
  color: #94a3b8;
}

.collar-caption {
  font-size: 0.75rem;
  color: #64748b;
  text-align: center;
  margin-top: 1rem;
}

/* 中栏：端侧推理控制台 */
.scenario-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  padding: 4px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.scenario-tab {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: #94a3b8;
  transition: all 0.3s ease;
}

.scenario-tab:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.05);
}

.scenario-tab.active {
  background: #38a169;
  color: #ffffff;
  box-shadow: 0 0 12px rgba(56, 161, 105, 0.4);
}

.data-streams {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}

.stream-item {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1rem;
}

.stream-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  margin-bottom: 0.8rem;
  letter-spacing: 0.05em;
}

/* 声波特效 */
.wave-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 50px;
  padding: 0 10px;
}

.audio-bar {
  flex: 1;
  height: 100%;
  background: linear-gradient(180deg, #38a169 0%, #3b82f6 100%);
  border-radius: 3px;
  transform-origin: bottom;
  animation: audioWaveUp 1s ease-in-out infinite alternate;
}

@keyframes audioWaveUp {
  0% { transform: scaleY(0.15); }
  100% { transform: scaleY(0.9); }
}

/* IMU折线特效 */
.imu-box {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.imu-svg {
  width: 100%;
  height: 100%;
}

.imu-path {
  stroke-dasharray: 200;
  animation: lineFlow 4s linear infinite;
}

.imu-path-blue {
  stroke-dasharray: 200;
  animation: lineFlow 6s linear infinite reverse;
}

@keyframes lineFlow {
  from { stroke-dashoffset: 200; }
  to { stroke-dashoffset: 0; }
}

/* 公式网格 */
.fusion-formula-box {
  position: relative;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.2) 0%, rgba(56, 161, 105, 0.05) 100%);
  border: 1px solid rgba(56, 161, 105, 0.15);
  border-radius: 14px;
  padding: 1.2rem;
  text-align: center;
  overflow: visible;
}

.formula-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #38a169;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(56, 161, 105, 0.2);
}

.formula-latex {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
  color: #f8fafc;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.4rem 0;
}

/* 极客微粒飞升动画 */
.gradient-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #58d68d;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: 0 0 8px #38a169;
  animation: particleFly 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes particleFly {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(var(--p-tx, 0px), var(--p-ty, -150px)) scale(0.2);
    opacity: 0;
  }
}

/* 右栏：智能手机框体 */
.phone-column {
  align-items: center;
}

.phone-frame {
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1 / 2;
  background: #000000;
  border: 7px solid #1e293b;
  border-radius: 36px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.phone-notch {
  width: 110px;
  height: 18px;
  background: #1e293b;
  border-radius: 0 0 14px 14px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
}

.phone-screen {
  flex: 1;
  background: #090d16;
  padding: 24px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  font-family: system-ui, -apple-system, sans-serif;
}

.screen-status-bar {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 2px;
}

/* 震动弹窗 */
.screen-alert-card {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  padding: 10px;
  color: #fca5a5;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.15);
  animation: alertPulse 2s infinite alternate;
}

@keyframes alertPulse {
  0% { border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 4px 15px rgba(239, 68, 68, 0.15); }
  100% { border-color: rgba(239, 68, 68, 0.6); box-shadow: 0 4px 20px rgba(239, 68, 68, 0.3); }
}

.alert-header {
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.alert-dot {
  width: 6px;
  height: 6px;
  background-color: #ef4444;
  border-radius: 50%;
  display: inline-block;
  animation: blinkRed 1s infinite alternate;
}

@keyframes blinkRed {
  0% { opacity: 0.4; }
  100% { opacity: 1; }
}

.alert-body {
  font-size: 0.7rem;
  line-height: 1.4;
  color: #fca5a5;
}

/* 宠物情绪日记 */
.screen-diary-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.diary-header {
  font-size: 0.75rem;
  font-weight: 700;
  color: #58d68d;
  margin-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  padding-bottom: 4px;
}

.diary-body {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

.diary-text {
  font-size: 0.75rem;
  line-height: 1.5;
  color: #cbd5e1;
  margin: 0;
  white-space: pre-wrap;
  font-family: monospace;
}

/* 反馈微调胶囊 */
.screen-feedback-loop {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 8px;
}

.feedback-hint {
  font-size: 0.65rem;
  color: #64748b;
  margin-bottom: 6px;
  text-align: center;
}

.feedback-actions {
  display: flex;
  gap: 6px;
}

.fb-btn {
  flex: 1;
  padding: 6px 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 0.65rem;
  font-weight: 600;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.fb-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
}

.fb-btn:active {
  transform: scale(0.95);
}

.fb-btn.correct:hover {
  border-color: rgba(56, 161, 105, 0.5);
  color: #58d68d;
}

.fb-btn.incorrect:hover {
  border-color: rgba(239, 68, 68, 0.5);
  color: #fca5a5;
}

/* 手机震动抖动动画 */
.vibrate-shake {
  animation: phoneShake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes phoneShake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

/* ==========================================
   创意火花投递箱 
   ========================================== */
.spark-idea-section {
  max-width: 1000px;
  margin: 4rem auto 2rem auto;
  padding: 0 1.5rem;
}

.spark-idea-card {
  background: linear-gradient(135deg, #090e17 0%, #03050a 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 28px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}

.spark-glow {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(56, 161, 105, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.spark-icon-wrapper {
  width: 48px;
  height: 48px;
  background: rgba(56, 161, 105, 0.1);
  border: 1px solid rgba(56, 161, 105, 0.3);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38a169;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 15px rgba(56, 161, 105, 0.1);
}

.spark-header h3 {
  font-size: 1.7rem;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 0.8rem;
  letter-spacing: -0.02em;
}

.spark-header p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
}

.spark-body {
  margin-bottom: 2rem;
}

.spark-textarea {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 1.2rem;
  color: #f8fafc;
  font-size: 0.95rem;
  line-height: 1.6;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
}

.spark-textarea:focus {
  outline: none;
  border-color: rgba(56, 161, 105, 0.5);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 161, 105, 0.15);
}

.spark-textarea::placeholder {
  color: #475569;
}

.spark-footer {
  display: flex;
  justify-content: flex-end;
}

.submit-spark-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #38a169;
  color: #ffffff;
  border: none;
  border-radius: 14px;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(56, 161, 105, 0.3);
}

.submit-spark-btn:hover:not(:disabled) {
  background: #2f855a;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(56, 161, 105, 0.5);
}

.submit-spark-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-spark-btn:disabled {
  background: rgba(255, 255, 255, 0.05);
  color: #475569;
  cursor: not-allowed;
  box-shadow: none;
}

@media (max-width: 992px) {
  .sandbox-grid {
    grid-template-columns: 1fr;
  }
  .phone-column {
    justify-content: center;
  }
  .spark-idea-card {
    padding: 1.5rem;
  }
}
</style>
