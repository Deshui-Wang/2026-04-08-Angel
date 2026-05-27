<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { 
  Check, 
  ClipboardList, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  HelpCircle, 
  Rocket, 
  TrendingUp, 
  Target, 
  Layers, 
  UserCheck, 
  DatabaseZap, 
  Workflow, 
  BrainCircuit, 
  GraduationCap, 
  Briefcase,
  Play,
  RotateCcw,
  MessageSquare
} from 'lucide-vue-next'

// 当前激活的页签
const activeStrategyTab = ref('summary')

// ----------------- Tab 1: 执行摘要与沙盘推演 -----------------
const targetSchoolType = ref('doubleHigh')
const targetPainpoint = ref('filling')
const isSimulating = ref(false)
const simulationDone = ref(false)
const simulateProgress = ref(0)
const loadingText = ref('分析目标院校级别中...')

const startSimulation = () => {
  isSimulating.value = true
  simulationDone.value = false
  simulateProgress.value = 0
  loadingText.value = '精准解析目标院校评估体系...'
  
  // 模拟雷达推演进度
  const interval = setInterval(() => {
    simulateProgress.value += 10
    if (simulateProgress.value === 30) {
      loadingText.value = '匹配针对性敲门砖破冰产品...'
    } else if (simulateProgress.value === 60) {
      loadingText.value = '判定预算限额与合规避标决策链...'
    } else if (simulateProgress.value === 80) {
      loadingText.value = '构建 Phase 1~3 战略升级路线图...'
    }
    
    if (simulateProgress.value >= 100) {
      clearInterval(interval)
      isSimulating.value = false
      simulationDone.value = true
      ElMessage.success('ToB高校进校战略蓝图已成功生成！')
    }
  }, 120)
}

const simulatedTimeline = computed(() => {
  if (!simulationDone.value) return []
  
  if (targetSchoolType.value === 'doubleHigh') {
    return [
      {
        step: 'Phase 1: 痛点破冰（首个落地点）',
        product: '98 表自动填报工具 + 教师教学档案袋',
        action: '教务处/二级学院直接划拨小额零星经费用作科研立项，￥1.8-3万快捷直签入校，快速积累老师好评，为双高评估重点建设指标提供数据。',
        time: '第 1-2 个月',
        icon: Rocket,
        color: '#3b82f6',
        bg: 'rgba(59, 130, 246, 0.04)'
      },
      {
        step: 'Phase 2: 场景升级（腰部深耕）',
        product: 'AI 实训平台 + 提示词实训服务',
        action: '结合二级学院的“产教融合”需求，将服务打包为“教学质量与双师型教师培训项目”，走小额询价通道（￥8-15万），建立师生高频使用粘性。',
        time: '第 3-6 个月',
        icon: TrendingUp,
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.04)'
      },
      {
        step: 'Phase 3: 标杆示范（终极客单）',
        product: 'AI+ 专业群建设整体方案',
        action: '校党委及网信办牵头，申报国家双高专业群数字化转型重大成果专项资金（￥50-150万），推动全校级 AI 中枢建设，打造省属/国家级标杆示范。',
        time: '第 6 个月+',
        icon: Sparkles,
        color: '#8b5cf6',
        bg: 'rgba(139, 92, 246, 0.04)'
      }
    ]
  } else if (targetSchoolType.value === 'publicCol') {
    return [
      {
        step: 'Phase 1: 痛点破冰（首个落地点）',
        product: '98 表自动填报工具 + AI 简历诊断',
        action: '锁定教务处填报与就业处简历通关两个最迫切指标。以 2.8 万元打包价极速直签，绕过漫长的采购审核，迅速形成破冰突破口。',
        time: '第 1-2 个月',
        icon: Rocket,
        color: '#3b82f6',
        bg: 'rgba(59, 130, 246, 0.04)'
      },
      {
        step: 'Phase 2: 场景升级（腰部深耕）',
        product: 'AI 模拟面试系统 + 教学助手全能版',
        action: '提报就业处与教务处联合采购，以“AI 智慧就业大厅升级”或“教考分离辅助评分”进行立项（约￥18-25万），走二级学院与就业处比价询价通道。',
        time: '第 3-6 个月',
        icon: TrendingUp,
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.04)'
      },
      {
        step: 'Phase 3: 标杆示范（终极客单）',
        product: '校园私有大模型与数据底座',
        action: '利用网信中心年度信息化专项，进行“校园智慧大脑与大模型中台”项目公开招标（￥50-100万），全面支撑全校 AI 应用的高效统管。',
        time: '第 6 个月+',
        icon: Sparkles,
        color: '#8b5cf6',
        bg: 'rgba(139, 92, 246, 0.04)'
      }
    ]
  } else {
    return [
      {
        step: 'Phase 1: 痛点破冰（首个落地点）',
        product: 'AI 轻量教案生成器 + AI 简历诊断',
        action: '以极低单价（￥1.5万以内）或买硬件赠送增值 SaaS 服务的方式，直签教研室作为教师备课福利，或直接作为就业处日常消耗物资切入。',
        time: '第 1-2 个月',
        icon: Rocket,
        color: '#3b82f6',
        bg: 'rgba(59, 130, 246, 0.04)'
      },
      {
        step: 'Phase 2: 场景升级（腰部深耕）',
        product: '个化学习路径规划 + 伴学系统',
        action: '面向二级系部，以提升教学诊断与改进（诊改）评估指标为由，采购轻量伴学系统（￥5-8万），走二级院长自主审批通道。',
        time: '第 3-6 个月',
        icon: TrendingUp,
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.04)'
      },
      {
        step: 'Phase 3: 标杆示范（终极客单）',
        product: 'AI 仿真实验室与校企撮合中心',
        action: '联合本地大型合作企业进行“校企共建产教融合实训基地”申报，撬动财政及企业共建专项基金，采购高阶仿真模块（￥20-40万）。',
        time: '第 6 个月+',
        icon: Sparkles,
        color: '#8b5cf6',
        bg: 'rgba(139, 92, 246, 0.04)'
      }
    ]
  }
})

// ----------------- Tab 2: 图谱构建 -----------------
const activePhase = ref(1)
const activeLayer = ref(1)

const layers = [
  { 
    id: 1, 
    name: '岗位层 (Level 1)', 
    title: '企业需求雷达匹配',
    desc: '系统化采集并结构化拆解企业海量用人 JD 需求。通过大语言模型提取关键专业技能、工程经验与软实力硬性门槛，让专业课程设置不再闭门造车，与大厂产业用人需求精准同步。', 
    color: '#3b82f6',
    icon: Briefcase
  },
  { 
    id: 2, 
    name: '专业层 (Level 2)', 
    title: '院校专业体系对齐',
    desc: '深度解析高校专业群底座与核心课程设置。根据岗位层提取的技能画像，自动匹配和纠偏学校课程大纲、数字教材框架及实训大纲，解决“学校教的与企业要的相脱节”的历史难题。', 
    color: '#10b981',
    icon: GraduationCap
  },
  { 
    id: 3, 
    name: '能力层 (Level 3)', 
    title: '学生技能雷达评估',
    desc: '结合学生日常在 AI 实训、模拟阅卷及 1+X 证书考核中的学习足迹，进行全周期动态能力评估。构建学生个人的“数字能力雷达图”，为精准就业推送和个性化伴学提供精细决策。', 
    color: '#8b5cf6',
    icon: BrainCircuit
  }
]

const phases = [
  { id: 1, name: 'Phase 1: 静态图谱映射', time: '1-2 个月', goal: '利用大模型在后台构建 3500+ 对“专业-职业”的静态对应字典，锁定各专业的基础能力权重与教学评估目标。' },
  { id: 2, name: 'Phase 2: 动态多维迭代', time: '3-6 个月', goal: '随着师生频繁使用 AI 备课和实训，系统将收集百亿级互动数据，多维度动态调校技能雷达参数，反哺模型精准度。' },
  { id: 3, name: 'Phase 3: 智能流向决策', time: '6 个月+', goal: '全面打通校企供需壁垒，实现毕业生的“一键内推”与对口率自动化跟踪，打造真正的智慧校园大数据治理闭环。' }
]

// ----------------- Tab 3: 定价模型与报价决策计算器 -----------------
const pricingProducts = [
  { id: 't1', name: '98表自动填报工具', price: 1.8, desc: '直击教务员及分管院长填报痛点，1分钟自动合并数据', cat: '🚀 敲门砖（<3万）' },
  { id: 't2', name: 'AI 轻量教案生成器', price: 2.0, desc: '支持多版本教材，为全校教师极速生成个性化精美教学设计', cat: '🚀 敲门砖（<3万）' },
  { id: 't3', name: 'AI 简历诊断与体检系统', price: 1.2, desc: 'NLP智能简历诊断，提供秒级针对性修改与对口岗位建议', cat: '🚀 敲门砖（<3万）' },
  { id: 'm1', name: '教学助手全能版', price: 12.0, desc: '包含AI智能阅卷、多模态学情监控与因材施教雷达', cat: '💎 场景化模块（3-30万）' },
  { id: 'm2', name: 'AI模拟面试系统', price: 8.0, desc: '真实企业面试真题还原，语音与神态多模态结构化反馈', cat: '💎 场景化模块（3-30万）' },
  { id: 'm3', name: 'AI仿真与实训管理平台', price: 15.0, desc: '2.5D实验场景动态编排与实训操作AI智能辅导', cat: '💎 场景化模块（3-30万）' },
  { id: 's1', name: 'AI+ 专业群建设整体方案', price: 60.0, desc: '包含人才培养方案重塑、精品数字课程共建与双高验收支撑', cat: '👑 整体标杆（>30万）' },
  { id: 's2', name: '全校级 AI+ 教育大脑中枢', price: 100.0, desc: '统筹全校教学、学工、网信、算力于一体的数字化治理大脑', cat: '👑 整体标杆（>30万）' }
]

// 默认勾选 98 表
const selectedProducts = ref(['t1'])

const totalPrice = computed(() => {
  const sum = pricingProducts
    .filter(p => selectedProducts.value.includes(p.id))
    .reduce((acc, curr) => acc + curr.price, 0)
  return parseFloat(sum.toFixed(2))
})

const decisionChannel = computed(() => {
  const price = totalPrice.value
  if (price === 0) {
    return {
      type: 'gray',
      title: '请先勾选采购配置',
      tag: '未选配置',
      advice: '勾选左侧配置即可开启高校智能化招采决策规避机制的自动推演！',
      hack: '首单推介【98表填报工具】（￥1.8万），过审率极高，决策周期极短。'
    }
  } else if (price < 3) {
    return {
      type: 'green',
      title: '🟢 快捷直签通道（完美规避招标）',
      tag: '3万以下直签',
      advice: '极其绝妙！该预算在大部分职业院校归为【教研室或二级学院日常公用经费】自主划拨范畴。二级院长或教务处长可一言九鼎直接拍板，跳过资产处和招采网，一般 1-3 天极速到账签约。',
      hack: '首推破冰：先以该额度切入“首单”，让学校尝到显著甜头。一旦建立坚实信任，二期扩充至场景模块时，阻力将彻底化为零。'
    }
  } else if (price <= 10) {
    return {
      type: 'yellow',
      title: '🟡 二级学院询价比价/单一来源通道',
      tag: '3-10万小额采购',
      advice: '合理配置！此区间属于校内【小额自行采购】额度。无需挂省属政采平台，仅需校内资产系统上传三家供应商对比单（我们可协助提供两家兄弟陪跑公司报价）或直接申请单一来源。决策只需主管副校长审批，耗时 1-2 周。',
      hack: '销冠贴士：如学校硬性规定 5 万以上需要省属比价，建议把合同总金额下压至 4.9 万元，或者将部分费用拆解为另一张“硬件采购合同”，从而合规规避大额询价。'
    }
  } else {
    return {
      type: 'red',
      title: '🔴 校级公开招标/大型重大项目评审通道',
      tag: '10万以上公开招标',
      advice: '重大系统！总额超出 10 万元需列入学校【年度大额招采项目库】。必须由信息中心牵头技术安全评估，在政采网公示，成立 5 人专家评审组进行现场招投标。流程严苛、周期冗长（通常需 1-3 个月），变数极大。',
      hack: '🔥 销冠拆单避标绝密剧本：若客户预算充足且急于在学期内落地，请积极配合客户将该整体项目【化整为零】！例如：把 15 万元的总费用拆分为“9.8 万元的教学终端系统采购合同（走询价通道免招标）”加“5.2 万元的双师型培训与运营支持合同（走直签服务类通道）”。完美合规避开资产处大型招标程序，抢占落地先机！'
    }
  }
})

// ----------------- Tab 4: 进校策略与角色攻防 -----------------
const activeRole = ref('jw')

const activeWorkflowStep = ref(0)
const workflowSteps = [
  { name: '专业研究', desc: '拆解目标校官网专业群设置' },
  { name: '政策突破', desc: '以最新双高诊改政策打头阵' },
  { name: '数据说服', desc: '用学校真实历史数据做Demo' },
  { name: '小额直签', desc: '以3万以下敲门砖首单突破' },
  { name: '全员宣讲', desc: '系部带头人集体使用与宣讲' },
  { name: '标杆扩单', desc: '申报全校项目，完成大额扩单' }
]

const stakeholders = {
  jw: {
    role: '教务处长 🎓',
    tag: '教学大脑 核心决策人',
    focus: '各项教学质量与改进指标（双高评估、诊改、教学大赛）、日常管理的真正减负与流程顺畅。',
    fear: '系统过于臃肿，给老师和教务干事增添额外的“操作负担”；替换超星等老系统引起数据大面积丢失。',
    chat: [
      { sender: 'role', text: '“我们学校现在大大小小的教学系统有十几套，超星、智慧树都在用，天天要老师录入。你们这个所谓的 AI 助手，是不是又让老师们多了一项填表任务？”' },
      { sender: 'me', text: '“处长，您这个问题一针见血！现在的老师最怕录入数据。我们的系统开发了一套【非入侵式抓取兼容技术】，它不替换旧系统，而是一键自动读取超星的教案和日常成绩，在后台直接帮您生成评估需要的‘教学质量 98 表’。老师点个按钮 1 分钟就能省去原本一周的填报量，是实打实的‘减负神器’，老师们绝对抢着要用！”' },
      { sender: 'role', text: '“哦？要是真能一键合并教案数据，不需要重新导，还能帮我们在诊改评估里直接算分，那这确实给我们的老师解决大难题了。咱们这学期还有两三万教改零星经费，可以先安排个教研室做破冰试点嘛。”' },
      { sender: 'me', text: '“太好了处长，我们第一期方案就以 98 表填报为主，金额控制在 2.6 万元，免招标 3 天即可部署开通，迅速帮咱们教研室的老师减负破局！”' }
    ]
  },
  xx: {
    role: '网络与信息中心主任 💻',
    tag: '安全看门人 技术底线人',
    focus: '校园师生数据资产隐私安全、三级等保合规性、是否支持单点登录 (SSO) 极速接入。',
    fear: '要求学校购买额外的本地机房硬件设备（运维成本过高）；系统挂机、出现敏感数据泄露（被校领导追责）。',
    chat: [
      { sender: 'role', text: '“现在提倡轻量化，我们中心不支持任何需要重新采购物理服务器的私有化项目，运维不过来。还有，你们这个涉及学生心理和成绩，数据安全怎么保证？”' },
      { sender: 'me', text: '“主任您非常严谨！我们完全支持纯 SaaS 云端化弹性部署，对学校提供零硬件消耗、零运维占用的安全底座。对于师生数据安全，我们系统通过了【三级等保测评】，数据库敏感信息全采用国密单向脱敏，且支持与咱们信息中心的 LDAP/SSO 单点登录端口无缝串接，您直接拉个接口就行，绝不会造成任何安全缺口。”' },
      { sender: 'role', text: '“这就好。只要安全合规，支持单点登录，不占用我们的本地硬件资源和中心人力，我们会配合教务处，不卡你们的审批会签。”' },
      { sender: 'me', text: '“非常感谢主任的技术指导！项目启动首日，我们会把等保报告、SSO接口对接文档及脱敏白皮书一次性交由您处备案，确保万无一失。”' }
    ]
  },
  xy: {
    role: '二级学院院长 🏛️',
    tag: '学科掌舵人 成果兑现人',
    focus: '本院特色专业在全省/全国的亮点成果、在数字教学大赛中拿奖、学生产教融合的对口实习质量。',
    fear: '沦为没有任何行业特色的通用化模型，无法体现电子商务、智能制造等各自系部特有的专业属性。',
    chat: [
      { sender: 'role', text: '“通用的大模型我们老师自己天天在用。你们这个系统，怎么证明它真正符合我们系电子商务专业的教学和实训标准？”' },
      { sender: 'me', text: '“院长，这正是我们的独特优势！通用大模型根本不懂电商的专业评估标准。我们的图谱库底层专门导入了教育部最新的职业教学标准，把阿里巴巴、拼多多等头部真实企业的用人 JD 解析为了技能画像。我们不仅能自动纠偏咱们的教学大纲，还能为您直接共建一套‘AI直播仿真实验室’，在全省乃至全国都是独树一帜的标杆数字化教学成果！”' },
      { sender: 'role', text: '“如果是帮我们定制电商数字课程群，还能支撑今年的产教融合成果申报，那这绝对不是通用的皮包软件了。下周我们开系部主任会，你带Demo过来现场展示一下。”' },
      { sender: 'me', text: '“没问题院长！我们将在下周带上一套针对贵院电子商务人才方案的‘三层图谱’拟真演示大屏，用咱们本校的电商数据跑指标，一定让各位专业带头人惊艳！”' }
    ]
  },
  jy: {
    role: '招生就业处长 💼',
    tag: '最后一公里 极硬KPI落实者',
    focus: '毕业生的一次性初次就业率、毕业生的专业岗位对口率、企业满意度与校企紧密对接。',
    fear: '学生不点、企业不理的“假就业大厅”系统；对提升就业率和简历通过率没有任何实质性的成效。',
    chat: [
      { sender: 'role', text: '“年年买那些就业撮合软件，就是给学生发几百条死气沉沉的旧岗位，学生连点都不想点。你们这个有什么真家伙，能提高我们毕业生的就业率？”' },
      { sender: 'me', text: '“处长，我们完全懂您的苦衷，普通就业网就是个死板公告牌。我们这个是‘全天候AI就业辅导经纪人’！学生输入简历，AI 自动进行秒级语法和经历精修，并匹配最适合的企业。AI 导师还会提供 1对1 纯语音模拟面试训练。最核心的是，我们会把学生实训中得出的 AI 能力雷达，直接内推给合作的大厂企业，实现岗位供需的秒级精准匹配，帮毕业生扫平最后一公里壁垒！”' },
      { sender: 'role', text: '“要是能帮我们把今年商科和工科几个冷门专业的初次就业率切实提上去，简历辅导减去我们老师的一大半工作量，我绝对向上头全力争取支持这套系统采购！”' },
      { sender: 'me', text: '“太好了处长，第一步咱们直接针对大三/大四毕业班，先以 2.8 万元的简历诊断与面试通关特训包切入，快速打响就业处‘AI 精准就业大厅’的头一炮！”' }
    ]
  }
}
</script>

<template>
  <main class="strategy-section">
    <div class="strategy-container">
      
      <!-- 左侧固定侧边栏 aside -->
      <aside class="strategy-sidebar">
        <div class="sidebar-header">
          <ClipboardList :size="24" class="header-icon" />
          <span>战略看板</span>
        </div>
        <nav class="strategy-nav">
          <button 
            class="strategy-tab-btn"
            :class="{ active: activeStrategyTab === 'summary' }"
            @click="activeStrategyTab = 'summary'"
          >
            <Rocket :size="18" />
            沙盘路线推演
          </button>
          <button 
            class="strategy-tab-btn"
            :class="{ active: activeStrategyTab === 'kg' }"
            @click="activeStrategyTab = 'kg'"
          >
            <Layers :size="18" />
            三层图谱构建
          </button>
          <button 
            class="strategy-tab-btn"
            :class="{ active: activeStrategyTab === 'pricing' }"
            @click="activeStrategyTab = 'pricing'"
          >
            <TrendingUp :size="18" />
            招采决策计算
          </button>
          <button 
            class="strategy-tab-btn"
            :class="{ active: activeStrategyTab === 'entry' }"
            @click="activeStrategyTab = 'entry'"
          >
            <Target :size="18" />
            进校攻防话术
          </button>
        </nav>
      </aside>

      <!-- 右侧内容区 section -->
      <section class="strategy-content">
        
        <!-- Tab 1: 执行摘要与沙盘推演 -->
        <div v-if="activeStrategyTab === 'summary'" class="tab-pane">
          <div class="pane-header">
            <h2 class="pane-title">ToB 高校进校战略沙盘模拟器</h2>
            <p class="pane-subtitle">基于院校级别与痛点分布，动态演练敲门砖破冰及场景级增量套件的升级版图</p>
          </div>

          <!-- 推演输入表单 -->
          <div v-if="!isSimulating && !simulationDone" class="sandbox-input-panel">
            <div class="sim-row">
              <span class="sim-label">🎯 1. 目标高校类型定位</span>
              <div class="school-type-cards">
                <div 
                  class="school-card"
                  :class="{ active: targetSchoolType === 'doubleHigh' }"
                  @click="targetSchoolType = 'doubleHigh'"
                >
                  <div class="school-icon double-high">🎓</div>
                  <h4>国家“双高”计划高职</h4>
                  <p>预算充足、极度重视教学成果申报与双高指标验收</p>
                </div>
                <div 
                  class="school-card"
                  :class="{ active: targetSchoolType === 'publicCol' }"
                  @click="targetSchoolType = 'publicCol'"
                >
                  <div class="school-icon public-col">🏛️</div>
                  <h4>普通公办大专/专科</h4>
                  <p>关注中规中矩的专业评估、教务减负以及硬性就业率</p>
                </div>
                <div 
                  class="school-card"
                  :class="{ active: targetSchoolType === 'minTech' }"
                  @click="targetSchoolType = 'minTech'"
                >
                  <div class="school-icon min-tech">⚡</div>
                  <h4>民办中专/高职院校</h4>
                  <p>预算偏紧，追求极致性价比，重视快速就业与招生特色</p>
                </div>
              </div>
            </div>

            <div class="sim-row" style="margin-top: 2rem;">
              <span class="sim-label">🔥 2. 首选破冰突破痛点</span>
              <div class="painpoint-select">
                <button 
                  class="pain-btn"
                  :class="{ active: targetPainpoint === 'filling' }"
                  @click="targetPainpoint = 'filling'"
                >
                  教务处日常填表重 (98表难合并)
                </button>
                <button 
                  class="pain-btn"
                  :class="{ active: targetPainpoint === 'teachers' }"
                  @click="targetPainpoint = 'teachers'"
                >
                  系部数字教师/AI教学大赛成果少
                </button>
                <button 
                  class="pain-btn"
                  :class="{ active: targetPainpoint === 'silos' }"
                  @click="targetPainpoint = 'silos'"
                >
                  信息中心孤岛严重且数据算力分散
                </button>
              </div>
            </div>

            <div class="sim-action-row">
              <button class="simulate-btn" @click="startSimulation">
                <Play :size="18" />
                <span>启动战略路线智能推演沙盘</span>
              </button>
            </div>
          </div>

          <!-- 推演 Loading -->
          <div v-if="isSimulating" class="simulating-panel">
            <div class="radar-scan">
              <div class="pulse-ring"></div>
              <div class="radar-sweep"></div>
              <Sparkles :size="32" class="sim-sparkle" />
            </div>
            <div class="loading-progress-wrapper">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: `${simulateProgress}%` }"></div>
              </div>
              <span class="progress-val">{{ simulateProgress }}%</span>
            </div>
            <p class="sim-loading-text">{{ loadingText }}</p>
          </div>

          <!-- 推演结果 Timeline -->
          <div v-if="simulationDone && !isSimulating" class="simulation-result-panel">
            <div class="results-top-bar">
              <span class="result-badge">推演结果已就绪</span>
              <button class="retry-btn" @click="simulationDone = false">
                <RotateCcw :size="14" />
                <span>重新配置推演</span>
              </button>
            </div>

            <div class="sim-timeline">
              <div 
                v-for="(node, index) in simulatedTimeline" 
                :key="node.step" 
                class="sim-timeline-item"
                :style="{ borderLeftColor: node.color }"
              >
                <!-- 时间轴节点图标 -->
                <div class="sim-timeline-dot" :style="{ backgroundColor: node.color }">
                  <component :is="node.icon" :size="16" style="color: #fff" />
                </div>
                
                <div class="sim-timeline-card" :style="{ backgroundColor: node.bg }">
                  <div class="sim-timeline-header">
                    <span class="node-step" :style="{ color: node.color }">{{ node.step }}</span>
                    <span class="node-time">{{ node.time }}</span>
                  </div>
                  <h4 class="node-product">{{ node.product }}</h4>
                  <p class="node-action">{{ node.action }}</p>
                </div>
              </div>
            </div>

            <div class="strategy-highlight-box" style="margin-top: 2rem;">
              <p>💡 <strong>推演总结：</strong>当前策略将总价控制在关键节点以下，采用“非入侵式”98 表填报软件破冰以避开大型招标；在首个学期建立良性信任底座后，在二期合并教务/学工经费直接实现高溢价扩单。</p>
            </div>
          </div>
        </div>

        <!-- Tab 2: 三层图谱构建 -->
        <div v-if="activeStrategyTab === 'kg'" class="tab-pane">
          <div class="pane-header">
            <h2 class="pane-title">岗位-专业-能力三层关联沙盘</h2>
            <p class="pane-subtitle">打通企业JD、学校核心课程以及学生多维能力雷达的一体化逻辑模型</p>
          </div>

          <!-- L1-L3 交互磁贴区 -->
          <div class="kg-layer-simulator">
            <div class="layers-left-stack">
              <div 
                v-for="layer in layers" 
                :key="layer.id"
                class="layer-tile-item"
                :class="{ active: activeLayer === layer.id }"
                @mouseenter="activeLayer = layer.id"
              >
                <div class="tile-icon" :style="{ backgroundColor: `${layer.color}15`, color: layer.color }">
                  <component :is="layer.icon" :size="20" />
                </div>
                <div class="tile-meta">
                  <span class="tile-level">{{ layer.name }}</span>
                  <span class="tile-title">{{ layer.title }}</span>
                </div>
                <ArrowRight :size="16" class="tile-chevron" />
              </div>
            </div>

            <div class="layer-detail-card">
              <div class="card-inner-glow" :style="{ borderColor: layers[activeLayer-1].color }">
                <div class="detail-header">
                  <span class="detail-badge" :style="{ backgroundColor: `${layers[activeLayer-1].color}15`, color: layers[activeLayer-1].color }">
                    {{ layers[activeLayer-1].name }}
                  </span>
                  <h3>{{ layers[activeLayer-1].title }}</h3>
                </div>
                <p class="detail-desc">{{ layers[activeLayer-1].desc }}</p>
                <div class="detail-pulsar">
                  <span class="pulsar-dot" :style="{ backgroundColor: layers[activeLayer-1].color }"></span>
                  <span class="pulsar-label">大模型底层图谱已建立 3500+ 实名映射</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Phase 步进器 -->
          <div class="phases-stepper-box">
            <div class="stepper-header">
              <span class="stepper-title">🗓️ 阶段式迭代与演进路径</span>
            </div>
            
            <div class="stepper-nav-row">
              <div 
                v-for="p in phases" 
                :key="p.id"
                class="step-nav-btn"
                :class="{ active: activePhase === p.id }"
                @click="activePhase = p.id"
              >
                <div class="step-num">{{ p.id }}</div>
                <div class="step-meta">
                  <span class="step-label">{{ p.name.split(':')[0] }}</span>
                  <span class="step-duration">{{ p.time }}</span>
                </div>
              </div>
            </div>

            <div class="step-content-display">
              <h4>{{ phases[activePhase-1].name }}</h4>
              <p>{{ phases[activePhase-1].goal }}</p>
            </div>
          </div>
        </div>

        <!-- Tab 3: 定价模型与招采比价计算器 -->
        <div v-if="activeStrategyTab === 'pricing'" class="tab-pane">
          <div class="pane-header">
            <h2 class="pane-title">方案智能报价与招采决策计算器</h2>
            <p class="pane-subtitle">任意勾选采购套件，系统将实时进行高校审批决策链推演并自动提供避标指南</p>
          </div>

          <div class="calculator-layout">
            <!-- 左侧产品配置单 -->
            <div class="calc-products-list">
              <div class="calc-section-title">📦 配置您的采购套件</div>
              
              <div class="pricing-items-grid">
                <div 
                  v-for="p in pricingProducts" 
                  :key="p.id"
                  class="calc-product-card"
                  :class="{ checked: selectedProducts.includes(p.id) }"
                  @click="() => {
                    const idx = selectedProducts.indexOf(p.id);
                    if (idx === -1) selectedProducts.push(p.id);
                    else selectedProducts.splice(idx, 1);
                  }"
                >
                  <div class="calc-checkbox">
                    <Check v-if="selectedProducts.includes(p.id)" :size="12" style="color: #fff" />
                  </div>
                  <div class="calc-product-info">
                    <div class="prod-header">
                      <span class="prod-name">{{ p.name }}</span>
                      <span class="prod-price">￥{{ p.price.toFixed(1) }} 万</span>
                    </div>
                    <p class="prod-desc">{{ p.desc }}</p>
                    <span class="prod-cat-badge">{{ p.cat }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧决策雷达 -->
            <div class="calc-decision-panel">
              <div class="budget-giant-box">
                <span class="budget-lbl">预算配置总计</span>
                <span class="budget-val">￥{{ totalPrice.toFixed(2) }} <span class="budget-unit">万</span></span>
              </div>

              <!-- 决策结果警示卡 -->
              <div class="decision-result-card" :class="decisionChannel.type">
                <div class="decision-card-header">
                  <h4>{{ decisionChannel.title }}</h4>
                  <span class="decision-tag">{{ decisionChannel.tag }}</span>
                </div>
                
                <div class="decision-body">
                  <div class="advice-block">
                    <span class="block-title">💡 校方招采流程解析：</span>
                    <p>{{ decisionChannel.advice }}</p>
                  </div>
                  
                  <div v-if="selectedProducts.length > 0" class="hack-block">
                    <span class="block-title">🔥 销冠避标/直签实战指南：</span>
                    <p>{{ decisionChannel.hack }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 4: 进校策略与角色攻防 -->
        <div v-if="activeStrategyTab === 'entry'" class="tab-pane">
          <div class="pane-header">
            <h2 class="pane-title">干系人攻防剧本与进校 Playbook</h2>
            <p class="pane-subtitle">点击不同核心角色切换其利益关注点、畏惧项，并演练销售实战对话攻防气泡</p>
          </div>

          <!-- 角色徽标选择行 -->
          <div class="stakeholders-avatar-row">
            <div 
              v-for="(val, key) in stakeholders" 
              :key="key"
              class="avatar-btn"
              :class="{ active: activeRole === key }"
              @click="activeRole = key"
            >
              <div class="avatar-circle">
                <span class="avatar-emoji">{{ val.role.split(' ')[1] }}</span>
              </div>
              <span class="avatar-name">{{ val.role.split(' ')[0] }}</span>
            </div>
          </div>

          <!-- 角色痛点卡与 IM 聊天模拟器 -->
          <div class="role-combat-panel">
            <div class="role-profile-aside">
              <h3>{{ stakeholders[activeRole].role }}</h3>
              <span class="profile-tag">{{ stakeholders[activeRole].tag }}</span>
              <p class="profile-desc">{{ stakeholders[activeRole].desc }}</p>
              
              <div class="pain-fear-box">
                <div class="pf-item">
                  <span class="pf-title focus">🎯 利益关注点</span>
                  <p>{{ stakeholders[activeRole].focus }}</p>
                </div>
                <div class="pf-item" style="margin-top: 1rem;">
                  <span class="pf-title fear">⚠️ 核心抗拒/最怕</span>
                  <p>{{ stakeholders[activeRole].fear }}</p>
                </div>
              </div>
            </div>

            <!-- IM 聊天对话框 -->
            <div class="im-chat-simulator">
              <div class="chat-header">
                <MessageSquare :size="16" />
                <span>与【{{ stakeholders[activeRole].role.split(' ')[0] }}】的实博弈话术演练</span>
              </div>

              <div class="chat-messages-body">
                <div 
                  v-for="(msg, i) in stakeholders[activeRole].chat" 
                  :key="i"
                  class="chat-bubble-row"
                  :class="msg.sender === 'me' ? 'me' : 'role'"
                >
                  <div class="chat-avatar-sphere">
                    {{ msg.sender === 'me' ? '👑' : stakeholders[activeRole].role.split(' ')[1] }}
                  </div>
                  <div class="chat-bubble-content">
                    <span class="chat-sender-name">{{ msg.sender === 'me' ? '我方销冠' : stakeholders[activeRole].role.split(' ')[0] }}</span>
                    <p class="chat-bubble-text">{{ msg.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 进校 Workflow 步骤条 -->
          <div class="workflow-stepper-box">
            <div class="workflow-stepper-title">🎯 进校标准化工作流 (Workflow)</div>
            <div class="workflow-nodes-grid">
              <div 
                v-for="(node, index) in workflowSteps" 
                :key="node.name"
                class="wf-node-item"
                :class="{ active: activeWorkflowStep === index }"
                @click="activeWorkflowStep = index"
              >
                <div class="wf-node-index">{{ index + 1 }}</div>
                <div class="wf-node-info">
                  <span class="wf-node-name">{{ node.name }}</span>
                  <p class="wf-node-desc">{{ node.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </main>
</template>

<style scoped>
/* Core Layout adapted from Gude/Purchase with luxury modern accents */
.strategy-section {
  margin-top: 80px;
  padding: 2rem;
  min-height: calc(100vh - 80px);
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.strategy-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: start;
}

.strategy-sidebar {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.01), 0 20px 40px rgba(0,0,0,0.02);
  backdrop-filter: blur(10px);
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
.header-icon {
  color: #3b82f6;
}

.strategy-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.strategy-tab-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 18px;
  border: none;
  background: transparent;
  border-radius: 14px;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  font-family: inherit;
}

.strategy-tab-btn:hover {
  color: #0f172a;
  background: #f1f5f9;
}

.strategy-tab-btn.active {
  color: #3b82f6;
  background: #eff6ff;
}

.strategy-content {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 2.5rem;
  min-height: 580px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.02);
}

.pane-header {
  margin-bottom: 2rem;
}

.pane-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.pane-subtitle {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}

/* Tab 1: 沙盘输入界面 */
.sandbox-input-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sim-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sim-label {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
}

.school-type-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.school-card {
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
}
.school-card:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);
}
.school-card.active {
  border-color: #3b82f6;
  background: #eff6ff;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.08);
}

.school-icon {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.school-card h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
}

.school-card p {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

.painpoint-select {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pain-btn {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 12px 20px;
  border-radius: 98px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}
.pain-btn:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}
.pain-btn.active {
  background: #0f172a;
  border-color: #0f172a;
  color: #fff;
}

.sim-action-row {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.simulate-btn {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: #fff;
  border: none;
  padding: 16px 36px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.simulate-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 30px -5px rgba(139, 92, 246, 0.45);
}

/* Loading Panel with radar */
.simulating-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 380px;
}

.radar-scan {
  position: relative;
  width: 120px;
  height: 120px;
  background: rgba(59, 130, 246, 0.05);
  border-radius: 50%;
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  overflow: hidden;
}

.radar-sweep {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: conic-gradient(from 0deg, transparent 50%, rgba(59, 130, 246, 0.4) 100%);
  border-radius: 50%;
  animation: radarScan 1.8s linear infinite;
}

@keyframes radarScan {
  to { transform: rotate(360deg); }
}

.pulse-ring {
  position: absolute;
  width: 100%; height: 100%;
  border: 2px solid rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  animation: pulse 1.2s cubic-bezier(0.24, 0, 0.38, 1) infinite;
}

@keyframes pulse {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(1.3); opacity: 0; }
}

.sim-sparkle {
  color: #3b82f6;
  z-index: 2;
  animation: spinSlow 3s linear infinite;
}

@keyframes spinSlow {
  to { transform: rotate(360deg); }
}

.loading-progress-wrapper {
  width: 320px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #f1f5f9;
  border-radius: 98px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 98px;
  transition: width 0.1s ease;
}

.progress-val {
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b82f6;
}

.sim-loading-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: #64748b;
  margin-top: 1rem;
}

/* Timeline Results */
.simulation-result-panel {
  animation: modalPop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalPop {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.results-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.result-badge {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
  padding: 4px 12px;
  border-radius: 98px;
  font-size: 0.8rem;
  font-weight: 600;
}

.retry-btn {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 6px 14px;
  border-radius: 98px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
}
.retry-btn:hover {
  background: #f8fafc;
  color: #0f172a;
}

.sim-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
}

.sim-timeline-item {
  position: relative;
  padding-left: 36px;
  padding-bottom: 2rem;
  border-left: 2px solid #e2e8f0;
}
.sim-timeline-item:last-child {
  border-left-color: transparent;
  padding-bottom: 0;
}

.sim-timeline-dot {
  position: absolute;
  left: -15px;
  top: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.sim-timeline-card {
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(0,0,0,0.02);
}

.sim-timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.node-step {
  font-size: 0.85rem;
  font-weight: 700;
}

.node-time {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 500;
}

.node-product {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px 0;
}

.node-action {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.strategy-highlight-box {
  background: #fdfaf2;
  border: 1px solid #fef3c7;
  padding: 14px 20px;
  border-radius: 14px;
  color: #78350f;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Tab 2: 图谱构建 */
.kg-layer-simulator {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.layers-left-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.layer-tile-item {
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  background: #fff;
  transition: all 0.25s;
}
.layer-tile-item:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}
.layer-tile-item.active {
  border-color: #3b82f6;
  background: #eff6ff;
}

.tile-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
}

.tile-meta {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tile-level {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 700;
}

.tile-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
}

.tile-chevron {
  color: #94a3b8;
  transition: transform 0.2s;
}
.layer-tile-item.active .tile-chevron {
  color: #3b82f6;
  transform: translateX(4px);
}

.layer-detail-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
}

.card-inner-glow {
  height: 100%;
  border: 1.5px solid;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(180deg, #fff 0%, #fdfdfe 100%);
  box-shadow: inset 0 0 100px rgba(0,0,0,0.015);
  transition: border-color 0.3s;
}

.detail-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-badge {
  width: fit-content;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
}

.card-inner-glow h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.detail-desc {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.7;
  margin: 20px 0;
}

.detail-pulsar {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 600;
}

.pulsar-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  animation: quickPulse 1.5s infinite;
}

@keyframes quickPulse {
  0% { transform: scale(0.85); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(59, 130, 246, 0); }
  100% { transform: scale(0.85); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}

/* Phase Stepper */
.phases-stepper-box {
  border-top: 1px solid #e2e8f0;
  padding-top: 2rem;
}

.stepper-header {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.25rem;
}

.stepper-nav-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.step-nav-btn {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 12px 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.25s;
}
.step-nav-btn:hover {
  background: #f1f5f9;
}
.step-nav-btn.active {
  border-color: #0f172a;
  background: #0f172a;
  color: #fff;
}

.step-num {
  width: 24px; height: 24px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #475569;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.step-nav-btn.active .step-num {
  background: rgba(255,255,255,0.2);
  color: #fff;
}

.step-meta {
  display: flex;
  flex-direction: column;
}

.step-label {
  font-size: 0.85rem;
  font-weight: 700;
}

.step-duration {
  font-size: 0.75rem;
  color: #64748b;
}
.step-nav-btn.active .step-duration {
  color: rgba(255,255,255,0.7);
}

.step-content-display {
  background: #f8fafc;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.02);
}
.step-content-display h4 {
  font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0 0 8px 0;
}
.step-content-display p {
  font-size: 0.85rem; color: #475569; line-height: 1.6; margin: 0;
}

/* Tab 3: 定价模型计算器 */
.calculator-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
}

.calc-section-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.25rem;
}

.pricing-items-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.calc-product-card {
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  cursor: pointer;
  background: #fff;
  transition: all 0.2s;
}
.calc-product-card:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}
.calc-product-card.checked {
  border-color: #3b82f6;
  background: #f0f6ff;
}

.calc-checkbox {
  width: 18px; height: 18px;
  border-radius: 4px;
  border: 2px solid #e2e8f0;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}
.checked .calc-checkbox {
  background: #3b82f6;
  border-color: #3b82f6;
}

.calc-product-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.prod-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.prod-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
}

.prod-price {
  font-size: 0.95rem;
  font-weight: 700;
  color: #3b82f6;
}

.prod-desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 8px 0;
}

.prod-cat-badge {
  width: fit-content;
  background: #fff;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 4px;
}
.checked .prod-cat-badge {
  background: #3b82f6;
  border-color: #3b82f6;
  color: #fff;
}

.calc-decision-panel {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: fit-content;
  position: sticky;
  top: 100px;
}

.budget-giant-box {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.02);
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.01);
}

.budget-lbl {
  font-size: 0.8rem;
  color: #94a3b8;
  font-weight: 700;
  text-transform: uppercase;
}

.budget-val {
  font-size: 2.2rem;
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.03em;
}

.budget-unit {
  font-size: 1.1rem;
  font-weight: 700;
}

.decision-result-card {
  border-radius: 18px;
  border: 1px solid;
  padding: 20px;
  transition: all 0.3s;
}

.decision-result-card.gray {
  border-color: #cbd5e1;
  background: rgba(226, 232, 240, 0.3);
}

.decision-result-card.green {
  border-color: #bbf7d0;
  background: rgba(240, 253, 244, 0.7);
  color: #14532d;
}

.decision-result-card.yellow {
  border-color: #fef3c7;
  background: rgba(254, 243, 199, 0.5);
  color: #78350f;
}

.decision-result-card.red {
  border-color: #fecaca;
  background: rgba(254, 242, 242, 0.7);
  color: #7f1d1d;
}

.decision-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
}

.decision-card-header h4 {
  font-size: 0.95rem; font-weight: 800; margin: 0;
}

.decision-tag {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 98px;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0.05);
}

.decision-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.advice-block, .hack-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.block-title {
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.8;
}

.advice-block p, .hack-block p {
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
}

/* Tab 4: 进校策略与干系人攻防 */
.stakeholders-avatar-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2.5rem;
  background: #f8fafc;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.avatar-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.avatar-circle {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #e2e8f0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.02);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.avatar-btn:hover .avatar-circle {
  transform: translateY(-4px);
  border-color: #cbd5e1;
}
.avatar-btn.active .avatar-circle {
  border-color: #3b82f6;
  background: #eff6ff;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.avatar-emoji {
  font-size: 1.8rem;
}

.avatar-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #475569;
}
.avatar-btn.active .avatar-name {
  color: #3b82f6;
}

.role-combat-panel {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.role-profile-aside {
  background: #f8fafc;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  padding: 20px;
}
.role-profile-aside h3 {
  font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 0 0 6px 0;
}
.profile-tag {
  font-size: 0.75rem;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 700;
}
.profile-desc {
  font-size: 0.8rem; color: #64748b; margin: 10px 0 20px 0; font-weight: 500;
}

.pain-fear-box {
  display: flex;
  flex-direction: column;
}

.pf-title {
  font-size: 0.75rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 4px;
  width: fit-content;
}
.pf-title.focus { background: #f0fdf4; color: #166534; }
.pf-title.fear { background: #fef2f2; color: #991b1b; }

.pf-item p {
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.5;
  margin: 6px 0 0 0;
  font-weight: 500;
}

/* IM Chat Simulator */
.im-chat-simulator {
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.chat-header {
  background: #f8fafc;
  padding: 14px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-messages-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-height: 380px;
  overflow-y: auto;
  background: #fdfdfe;
}

.chat-bubble-row {
  display: flex;
  gap: 12px;
  max-width: 85%;
}

.chat-bubble-row.role {
  align-self: flex-start;
}

.chat-bubble-row.me {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.chat-avatar-sphere {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}
.chat-bubble-row.me .chat-avatar-sphere {
  background: #eff6ff;
  border-color: #cbd5e1;
}

.chat-bubble-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.chat-bubble-row.me .chat-bubble-content {
  align-items: flex-end;
}

.chat-sender-name {
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
}

.chat-bubble-text {
  font-size: 0.85rem;
  line-height: 1.5;
  padding: 10px 14px;
  border-radius: 16px;
  margin: 0;
}
.chat-bubble-row.role .chat-bubble-text {
  background: #f1f5f9;
  color: #1e293b;
  border-top-left-radius: 4px;
}
.chat-bubble-row.me .chat-bubble-text {
  background: #3b82f6;
  color: #fff;
  border-top-right-radius: 4px;
}

/* Workflow steps bottom */
.workflow-stepper-box {
  border-top: 1px solid #e2e8f0;
  padding-top: 2rem;
}

.workflow-stepper-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.25rem;
}

.workflow-nodes-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}

.wf-node-item {
  border: 1.5px solid #e2e8f0;
  border-radius: 14px;
  padding: 12px;
  cursor: pointer;
  background: #fff;
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.wf-node-item:hover {
  border-color: #cbd5e1;
}
.wf-node-item.active {
  border-color: #3b82f6;
  background: #eff6ff;
}

.wf-node-index {
  width: 20px; height: 20px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.wf-node-item.active .wf-node-index {
  background: #3b82f6;
  color: #fff;
}

.wf-node-info {
  display: flex;
  flex-direction: column;
}

.wf-node-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: #1e293b;
}

.wf-node-desc {
  font-size: 0.7rem;
  color: #64748b;
  margin: 2px 0 0 0;
  line-height: 1.3;
}
</style>
