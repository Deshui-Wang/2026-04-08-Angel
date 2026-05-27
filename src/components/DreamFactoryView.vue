<script setup>
import { ref, onMounted, watch, h } from 'vue'
import {
  BrainCircuit,
  ShieldCheck,
  Workflow,
  Share2,
  ArrowRight,
  Sparkles,
  ChevronLeft
} from 'lucide-vue-next'
import { ElMessage, ElMessageBox } from 'element-plus'
import { initialDreamIdeas } from '../data/constants'

// --------------------------------------------------
// 原生纯代码科幻猫爪 AI 智能徽标 (MeZaIcon)
// --------------------------------------------------
const MeZaIcon = {
  render() {
    return h('svg', {
      width: '100%',
      height: '100%',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      style: 'display: block; width: 100%; height: 100%;'
    }, [
      // 渐变与阴影定义
      h('defs', null, [
        h('linearGradient', { id: 'meza-paw-grad', x1: '0%', y1: '0%', x2: '100%', y2: '100%' }, [
          h('stop', { offset: '0%', 'stop-color': '#38a169' }), // 迷爪绿
          h('stop', { offset: '100%', 'stop-color': '#3b82f6' }) // AI 蓝
        ])
      ]),
      // 神经网络电路线连接桥 (隐喻意图解码)
      h('path', { d: 'M12 14.5 L6.5 9 M12 14.5 L10 6 M12 14.5 L14 6 M12 14.5 L17.5 9', stroke: 'rgba(56, 161, 105, 0.4)', 'stroke-width': '1.2', 'stroke-dasharray': '2 1.5' }),
      // 核心大掌垫
      h('path', { 
        d: 'M12 11.5 C10 11.5 7.8 12.5 7.8 14.5 C7.8 16.5 9.5 18 12 18 C14.5 18 16.2 16.5 16.2 14.5 C16.2 12.5 14 11.5 12 11.5 Z', 
        fill: 'url(#meza-paw-grad)',
        style: 'filter: drop-shadow(0 2px 5px rgba(56, 161, 105, 0.3));'
      }),
      // 四个趾垫节点
      h('circle', { cx: '6.5', cy: '9', r: '2.2', fill: '#38a169', style: 'filter: drop-shadow(0 1px 3px rgba(56,161,105,0.2));' }),
      h('circle', { cx: '10', cy: '6', r: '2.2', fill: '#38a169', style: 'filter: drop-shadow(0 1px 3px rgba(56,161,105,0.2));' }),
      h('circle', { cx: '14', cy: '6', r: '2.2', fill: '#3b82f6', style: 'filter: drop-shadow(0 1px 3px rgba(59,130,246,0.2));' }),
      h('circle', { cx: '17.5', cy: '9', r: '2.2', fill: '#3b82f6', style: 'filter: drop-shadow(0 1px 3px rgba(59,130,246,0.2));' }),
      // 掌心闪烁 AI 意图感知芯片
      h('circle', { cx: '12', cy: '14.5', r: '1.2', fill: '#ffffff', class: 'pulsing-chip' })
    ])
  }
}

const props = defineProps({
  currentView: {
    type: String,
    required: true
  },
  urlIdeaId: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['update-view', 'navigate'])

// 初始数据轻量克隆，防 JSON stringify 抹除 Vue 组件对象 bug，并为“迷爪MeZa”动态挂载科幻爪印 Icon
const dreamIdeas = ref(initialDreamIdeas.map(item => {
  if (item.id === 1) {
    return { ...item, icon: MeZaIcon }
  }
  return { ...item }
}))
const sparkIdeaText = ref('')
const activeLabIdea = ref(null)
const labActiveTab = ref('prototype') // 'prototype', 'perception', 'finetuning', 'business'

const openLabIdea = (idea) => {
  const url = window.location.origin + window.location.pathname + '?view=dreamLab&ideaId=' + idea.id;
  window.open(url, '_blank');
}

const closeLabIdea = () => {
  activeLabIdea.value = null;
  labActiveTab.value = 'prototype';
  if (props.currentView === 'dreamLab') {
    emit('update-view', 'dreamFactory');
  }
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has('view')) {
      url.searchParams.delete('view');
      url.searchParams.delete('ideaId');
      window.history.replaceState({}, '', url.pathname);
    }
  } catch (e) {
    console.error(e);
  }
}

const switchScenario = (idea, key) => {
  idea.activeScenario = key
  idea.shakeActive = true
  setTimeout(() => {
    idea.shakeActive = false
  }, 500)
}

const triggerFineTuning = (idea) => {
  idea.particles = []
  for (let i = 0; i < 15; i++) {
    idea.particles.push({
      id: i,
      x: (Math.random() - 0.5) * 160,
      y: -50 - Math.random() * 120,
      delay: Math.random() * 0.3
    })
  }
  
  ElMessage.success('小样本端侧数据反馈成功，神经网络梯度增量微调已完成！')
  
  setTimeout(() => {
    idea.particles = []
  }, 2000)
}

const submitSparkIdea = () => {
  if (!sparkIdeaText.value.trim()) return
  
  ElMessageBox.alert(
    `我们已收到您宝贵的创意想法：“${sparkIdeaText.value}”。梦工厂孵化专家将在 24 小时内对该想法进行商业可行性评估，并为您提供专属分析报告！`,
    '✨ 创意火花投递成功',
    {
      confirmButtonText: '收到',
      type: 'success'
    }
  )
  sparkIdeaText.value = ''
}

// 新开页检测
onMounted(() => {
  if (props.currentView === 'dreamLab' && props.urlIdeaId) {
    const matchedIdea = dreamIdeas.value.find(item => item.id == props.urlIdeaId)
    if (matchedIdea) {
      activeLabIdea.value = matchedIdea
    }
  }
})

// 监听 urlIdeaId 变化
watch(() => props.urlIdeaId, (newId) => {
  if (props.currentView === 'dreamLab' && newId) {
    const matchedIdea = dreamIdeas.value.find(item => item.id == newId)
    if (matchedIdea) {
      activeLabIdea.value = matchedIdea
    }
  } else if (!newId) {
    activeLabIdea.value = null
  }
})

// --------------------------------------------------
// 迷爪MeZa BOM 供应链图表与高亮交互数据逻辑
// --------------------------------------------------
const activeBomHover = ref(null)

const bomItems = [
  { name: '主控芯片组', cost: 15.00, color: '#3b82f6', desc: '集成 BLE 5.3 + 轻量 NPU 芯片', pct: '19.1%' },
  { name: '感知传感器', cost: 18.00, color: '#10b981', desc: '六轴 IMU + 麦克风 + 低功耗广角摄像头', pct: '22.9%' },
  { name: '电源与配重', cost: 8.00, color: '#f59e0b', desc: '400-500mAh 异形锂电池 + 非对称配重', pct: '10.2%' },
  { name: '电路板总线', cost: 7.50, color: '#8b5cf6', desc: '多层柔性印制电路板 (FPC)', pct: '9.6%' },
  { name: '结构外壳', cost: 12.00, color: '#ec4899', desc: '医疗级防敏硅胶项圈 + 磁吸紧急安全扣 + PC/ABS 防水外壳 (IP67)', pct: '15.3%' },
  { name: '生产综合规费', cost: 10.00, color: '#0ea5e9', desc: 'SMT 贴片 + 组装测试 + 包装辅料', pct: '12.7%' },
  { name: '首次固定成本分摊', cost: 8.00, color: '#64748b', desc: '模具费 + 外观设计 + 产线分摊', pct: '10.2%' }
]

// 动态拼装圆环的 stroke-dasharray 和 stroke-dashoffset (圆环半径为50，周长为 314.16)
const bomChartSegments = (() => {
  const totalCost = 78.5
  let currentOffset = 0
  return bomItems.map(item => {
    const percent = item.cost / totalCost
    const length = percent * 314.16
    const offset = currentOffset
    currentOffset -= length
    return {
      ...item,
      dasharray: `${length} 314.16`,
      dashoffset: offset
    }
  })
})()
</script>

<template>
  <main class="dream-factory-page" :class="{ 'fullscreen-lab-mode': currentView === 'dreamLab' }">
      <section v-if="currentView !== 'dreamLab'" class="hero-section">
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
      <section v-if="currentView !== 'dreamLab'" class="ideas-section">
        <div class="ideas-grid">
          
          <!-- 遍历所有创意想法 -->
          <div 
            v-for="idea in dreamIdeas" 
            :key="idea.id" 
            class="idea-card"
            :class="{ 'is-popy-card': idea.isPopy }"
            :style="{ '--idea-color': idea.color }"
            @click="openLabIdea(idea)"
          >
            <div class="idea-card-glow" :style="{ background: `radial-gradient(circle at top right, ${idea.color}15, transparent 60%)` }"></div>

            <!-- 头部：图标与状态呼吸灯 -->
            <div class="idea-card-header">
              <div class="idea-icon-wrapper" :style="{ backgroundColor: `${idea.color}15`, color: idea.color }">
                <component :is="idea.icon" :size="26" />
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
              
              <!-- 轻量痛点简述，突出亮点 -->
              <p class="idea-brief-pain">
                {{ idea.isPopy ? '宠物情绪与行为意图多模态解码。端侧多模态架构结合骨传导声学与六轴 IMU 姿态流动态拼接推理，实现毫秒级宠物意图精准破译。' : idea.painpoint }}
              </p>
            </div>

            <!-- 卡片尾部微光引导按钮 -->
            <div class="idea-card-footer">
              <span class="enter-lab-link" :style="{ color: idea.color }">
                查看概念验证实验室
                <ArrowRight :size="14" />
              </span>
            </div>
          </div>

        </div>
      </section>

      <!-- 创意火花投递箱 -->
      <section v-if="currentView !== 'dreamLab'" class="spark-idea-section">
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

      <!-- 旗舰级/常规创意实验室全屏毛玻璃弹窗 -->
      <transition name="modal-fade">
        <div 
          v-if="activeLabIdea" 
          :class="currentView === 'dreamLab' ? 'dream-lab-page-mode' : 'lab-modal-overlay'" 
          @click.self="currentView === 'dreamLab' ? null : closeLabIdea"
        >
          <div 
            :class="[currentView === 'dreamLab' ? 'lab-page-container' : 'lab-modal-content', { 'is-popy-lab': activeLabIdea.isPopy }]" 
            :style="{ '--lab-color': activeLabIdea.color }"
          >
            
            <!-- 顶部面包屑返回条 (仅在全屏页面模式下展示) -->
            <div v-if="currentView === 'dreamLab'" class="lab-back-bar" @click="closeLabIdea">
              <ChevronLeft :size="16" class="back-icon" />
              返回创业梦工厂
            </div>

            <!-- 关闭按钮 (仅在弹窗模式下展示) -->
            <button v-else class="lab-modal-close" @click="closeLabIdea">×</button>

            <!-- 弹窗头部 -->
            <div :class="currentView === 'dreamLab' ? 'lab-page-header' : 'lab-modal-header'">
              <div class="lab-header-icon" :style="{ backgroundColor: `${activeLabIdea.color}15`, color: activeLabIdea.color }">
                <component :is="activeLabIdea.icon" :size="32" />
              </div>
              <div class="lab-header-text-group">
                <h2 class="lab-header-title">{{ activeLabIdea.title }}</h2>
                <p class="lab-header-subtitle">{{ activeLabIdea.subtitle }}</p>
              </div>
              <div class="lab-header-status" :style="{ color: activeLabIdea.color, borderColor: `${activeLabIdea.color}30`, backgroundColor: `${activeLabIdea.color}08` }">
                <span class="status-dot pulsing" :style="{ backgroundColor: activeLabIdea.color, boxShadow: `0 0 8px ${activeLabIdea.color}` }"></span>
                {{ activeLabIdea.statusText }}
              </div>
            </div>

            <!-- 弹窗主体区 -->
            <div class="lab-modal-body">
              
              <!-- 情况 A：普通创意实验室详情（EduChain, VRLab, UniMeet） -->
              <div v-if="!activeLabIdea.isPopy" class="regular-lab-details">
                <div class="lab-detail-card">
                  <div class="lab-card-icon">🚨</div>
                  <div class="lab-card-title">痛点分析</div>
                  <div class="lab-card-text">{{ activeLabIdea.painpoint }}</div>
                </div>
                <div class="lab-detail-card">
                  <div class="lab-card-icon">💡</div>
                  <div class="lab-card-title">核心创新方案</div>
                  <div class="lab-card-text">{{ activeLabIdea.solution }}</div>
                </div>
                <div class="lab-detail-card">
                  <div class="lab-card-icon">💎</div>
                  <div class="lab-card-title">商业估值</div>
                  <div class="lab-card-text">{{ activeLabIdea.business }}</div>
                </div>
                <div class="lab-detail-card">
                  <div class="lab-card-icon">🛠️</div>
                  <div class="lab-card-title">核心技术架构</div>
                  <div class="lab-card-text">{{ activeLabIdea.tech }}</div>
                </div>
              </div>

              <!-- 情况 B：旗舰级可交互 PoC 沙盒实验室（PoPyWaWa） -->
              <div v-else class="popy-sandbox-lab">
                <div class="sandbox-divider"><span>PoC 端侧多模态 AI 概念实验室</span></div>
                
                <!-- B1: [NEW] 全屏高端传统网页两栏模式 -->
                <div v-if="currentView === 'dreamLab'" class="dream-lab-layout-new" :class="{ 'business-wide-layout': labActiveTab === 'business' }">
                  
                  <!-- 横向分段控制页签栏 (Apple Style segmented control, 始终撑满全宽在最上方) -->
                  <div class="lab-tab-bar">
                    <button 
                      class="lab-tab-btn" 
                      :class="{ active: labActiveTab === 'prototype' }" 
                      @click="labActiveTab = 'prototype'"
                    >
                      1. 概念解构与仿生硬件
                    </button>
                    <button 
                      class="lab-tab-btn" 
                      :class="{ active: labActiveTab === 'perception' }" 
                      @click="labActiveTab = 'perception'"
                    >
                      2. 多模态端侧感知
                    </button>
                    <button 
                      class="lab-tab-btn" 
                      :class="{ active: labActiveTab === 'finetuning' }" 
                      @click="labActiveTab = 'finetuning'"
                    >
                      3. 小样本梯度微调
                    </button>
                    <button 
                      class="lab-tab-btn" 
                      :class="{ active: labActiveTab === 'business' }" 
                      @click="labActiveTab = 'business'"
                    >
                      4. 供应链成本与定价
                    </button>
                  </div>

                  <!-- 左栏：高端白皮书图文信息 -->
                  <div class="lab-info-column">
                    
                    <!-- 页签一：概念解构与仿生硬件 -->
                    <div v-if="labActiveTab === 'prototype'" class="tab-content-pane">
                      <!-- 产品简介 -->
                      <div class="info-section-card">
                        <div class="section-badge" :style="{ color: activeLabIdea.color, borderColor: `${activeLabIdea.color}30`, backgroundColor: `${activeLabIdea.color}08` }">
                          旗舰级概念验证（PoC）深度展示
                        </div>
                        <h2 class="section-title">迷爪MeZa 智能宠物情绪与行为意图多模态解码项圈</h2>
                        <p class="section-lead-text">
                          迷爪MeZa 是一款 AI 驱动的宠物情绪与行为意图多模态解码平台。我们深度融合端侧多模态算法，结合六轴高频 IMU 寰椎关节姿态惯性流与骨传导声学频段特征，实现毫秒级宠物生理与心理意图的动态推理，打通人宠心灵交互的最后壁垒。
                        </p>
                        
                        <!-- 传统大图文：项圈结构与锚点分析 -->
                        <div class="collar-visual-showcase">
                          <div class="collar-visual-left">
                            <div class="collar-visual-box-new">
                              <svg class="collar-svg" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(56, 161, 105, 0.08)" stroke-width="12" />
                                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#collar-grad-page)" stroke-width="8" stroke-dasharray="440" stroke-dashoffset="80" />
                                <g class="pendant-g">
                                  <line x1="100" y1="170" x2="100" y2="185" stroke="#38a169" stroke-width="3" />
                                  <circle cx="100" cy="185" r="12" fill="#ffffff" stroke="#38a169" stroke-width="2" />
                                  <circle cx="100" cy="185" r="4" fill="#38a169" class="pendant-pulse" />
                                </g>
                                <g class="sensor-g">
                                  <rect x="85" y="22" width="30" height="12" rx="4" fill="#ffffff" stroke="#38a169" stroke-width="2" />
                                  <circle cx="100" cy="28" r="3" fill="#e74c3c" class="sensor-pulse" />
                                </g>
                                <defs>
                                  <linearGradient id="collar-grad-page" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#38a169" />
                                    <stop offset="100%" stop-color="#3b82f6" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div class="collar-caption">智能感知项圈三维仿生结构拓扑图</div>
                          </div>
                          <div class="collar-visual-right">
                            <div class="collar-spec-item">
                              <strong :style="{ color: activeLabIdea.color }">⚓ 下巴低位挂坠（纽扣核心）</strong>
                              <p>项圈主要的重力阻尼平衡锚点，内置骨传导高保真声学拾音拾振器与 110° 同向视野的端侧高精防抖摄像头。</p>
                            </div>
                            <div class="collar-spec-item" style="margin-top: 1.5rem;">
                              <strong :style="{ color: '#e74c3c' }">🧠 后脑高位感知柔性阻尼片</strong>
                              <p>极轻量级寰椎关节感知组件（质量占比 &lt; 15%），搭载高采样率六轴 IMU，捕获头部颤抖、偏侧与细微动作倾角。</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 页签二：多模态端侧感知 -->
                    <div v-else-if="labActiveTab === 'perception'" class="tab-content-pane">
                      <!-- 场景与多模态端侧数据流 -->
                      <div class="info-section-card">
                        <h3 class="section-subtitle">多模态端侧数据流与神经网络推理</h3>
                        <p class="section-desc">
                          系统在宠物端侧实时对骨传导声学信号与寰椎六轴 IMU 惯性流进行毫秒级对齐特征拼接，输入轻量级 CNN 神经网络完成推理判定。您可以通过点选不同的测试场景，直接激活右侧的手机模拟监视器：
                        </p>
                        
                        <!-- 传统网格事件选择 -->
                        <div class="scenario-grid-new">
                          <div 
                            v-for="(scene, key) in activeLabIdea.scenarios" 
                            :key="key" 
                            class="scenario-grid-item"
                            :class="{ active: activeLabIdea.activeScenario === key }"
                            @click="switchScenario(activeLabIdea, key)"
                          >
                            <div class="grid-item-header">
                              <span class="grid-emoji">{{ key === 'fear' ? '⛈️' : key === 'toilet' ? '🚽' : '🎉' }}</span>
                              <span class="grid-title">{{ scene.name }}</span>
                            </div>
                            <p class="grid-brief">
                              {{ key === 'fear' ? '监测雷雨惊慌下肌肉高频颤抖与骨传导尖叫，动态匹配抗焦虑对策。' : key === 'toilet' ? '精准捕捉寰椎倾角排泄姿态，记录蹲便规律预防下尿路结石。' : '监测寰椎超速摆动与高流速奔跑特征，捕捉萌宠最开心的瞬间。' }}
                            </p>
                            <div class="grid-item-indicator" :style="{ backgroundColor: activeLabIdea.activeScenario === key ? activeLabIdea.color : 'transparent' }"></div>
                          </div>
                        </div>

                        <!-- 精致的实时数据流可视化 -->
                        <div class="realtime-data-dashboard">
                          <div class="dashboard-panel">
                            <span class="panel-tag">📊 实时多模态声流 [Audio Freq]</span>
                            <div class="wave-box" style="height: 40px; margin-top: 8px;">
                              <div v-for="n in 12" :key="n" class="audio-bar" :style="{ animationDelay: `${n * 0.1}s`, backgroundColor: activeLabIdea.color }"></div>
                            </div>
                          </div>
                          <div class="dashboard-panel">
                            <span class="panel-tag">📈 关节倾角惯性流 [IMU Stream]</span>
                            <div class="imu-box" style="height: 40px; margin-top: 8px;">
                              <svg class="imu-svg">
                                <path d="M 0,20 Q 25,5 50,20 T 100,20 T 150,20 T 200,20" fill="none" :stroke="activeLabIdea.color" stroke-width="2" class="imu-path" />
                                <path d="M 0,25 Q 35,35 70,25 T 140,25 T 210,25" fill="none" stroke="#3b82f6" stroke-width="1.5" class="imu-path-blue" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <!-- 核心拼接数学公式（白底深字优化） -->
                        <div class="fusion-formula-box" style="margin-top: 1.5rem;">
                          <div class="formula-title">🧠 多模态时空流向量级融合模型推理</div>
                          <div class="formula-latex" style="color: #0f172a !important;">
                            \mathcal{P}(	ext{Emotion}) = 	ext{Softmax}(\mathbf{W}_f \cdot [\mathbf{F}_{IMU} \oplus \mathbf{F}_{Audio}] + \mathbf{b}_f)
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 页签三：小样本梯度微调 -->
                    <div v-else-if="labActiveTab === 'finetuning'" class="tab-content-pane">
                      <!-- 增量梯度网络微调 -->
                      <div class="info-section-card">
                        <h3 class="section-subtitle">增量小样本神经网络（梯度微调）</h3>
                        <p class="section-desc">
                          宠物情绪与习惯具有高度的个体独立性。迷爪MeZa 支持将主人的主动修正信号生成端侧梯度增量包，反向注入卷积感知层，使端侧模型越用越聪明，实现小样本自主个性化进化。
                        </p>
                        
                        <div class="tuning-dashboard-new">
                          <div class="dashboard-meta-row">
                            <span class="meta-indicator">反馈状态：<span class="indicator-highlight">网络通畅已联机 (Active)</span></span>
                            <span class="meta-indicator">梯度定位：<span class="indicator-highlight">均方差已收敛 (0.0024)</span></span>
                          </div>
                          
                          <!-- 神经网络图 -->
                          <div class="neural-visual-row">
                            <div class="neural-net">
                              <div class="neural-layer">
                                <div class="neural-node active"></div>
                                <div class="neural-node active"></div>
                              </div>
                              <div class="neural-layer">
                                <div class="neural-node active"></div>
                              </div>
                            </div>
                            <div class="neural-btn-wrapper">
                              <button class="tuning-action-btn-new" :style="{ backgroundColor: activeLabIdea.color }" @click="triggerFineTuning(activeLabIdea)">
                                🚀 发送梯度增量并进行端侧反向调优
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 页签四：供应链成本与定价 -->
                    <div v-else-if="labActiveTab === 'business'" class="tab-content-pane">
                      <!-- 新增：成本与定价 -->
                      <div class="info-section-card">
                        <h3 class="section-subtitle">迷爪MeZa 商业模式、BOM 成本及财务闭环</h3>
                        <p class="section-desc">
                          作为一个软硬件一体化的创新产品，在制订定价策略和成本结构时，我们需要用智能硬件（如智能手表/智能家居）的商业模型来推演，而不是把它当成普通的宠物玩具。为了实现<strong>“好用、想用”的体验，硬件只是触点，AI服务和情感闭环才是高粘性的核心</strong>。因此，商业模式应当采用：<strong>“硬件低毛利切入占位 + 软件增值服务（SaaS/LLM订阅）长尾盈利”</strong>。
                        </p>

                        <!-- 一、定价策略 -->
                        <div class="section-subtitle" style="font-size: 1.1rem; margin-top: 1.5rem;">一、 产品定价策略（三种版本定位）</div>
                        <p class="section-desc">为了降低用户尝鲜门槛，同时保证产品高端科技感，建议采用分级定价+订阅制：</p>
                        
                        <div class="pricing-cards-container">
                          <div class="pricing-card hardware">
                            <div class="pricing-card-header">
                              <span class="pricing-card-icon">🏷️</span>智能硬件终端售价（建议）
                            </div>
                            <div class="price-giant">
                              <span class="price-currency">￥</span>299<span class="price-range"> ~ </span>399<span class="price-unit">元</span>
                            </div>
                            <div class="price-badge hardware-badge">快速切入占位（贴近出厂成本）</div>
                            <p class="price-desc-detail">
                              <strong>心理锚点：</strong>年轻人给猫狗买一袋好一点的冻干或驱虫药就要 ￥200-300 元。￥299-399 的价格正好卡在“冲动消费”区间，远低于海外动辄上千元的传统智能项圈（如 Whistle），能快速占领宠物脖子上的生态位。
                            </p>
                          </div>
                          <div class="pricing-card software">
                            <div class="pricing-card-header">
                              <span class="pricing-card-icon">🚀</span>软件服务订阅定价（核心利润源）
                            </div>
                            <div class="price-giant">
                              <span class="price-currency">￥</span>19<span class="price-unit">/月</span>
                              <span class="price-separator">或</span>
                              <span class="price-amount">158</span><span class="price-unit">/年</span>
                            </div>
                            <div class="price-badge software-badge">AI 情感高级增值包</div>
                            <p class="price-desc-detail">
                              <strong>订阅服务：</strong>第一人称大模型（LLM）宠物日记、高光行为短视频云端自动剪辑、AI 宠物健康周报/月报。利用极富趣味性与情感价值的功能，让用户产生持续的年续费高粘性。
                            </p>
                          </div>
                        </div>

                        <!-- 二、BOM 成本明细表格 -->
                        <div class="section-subtitle" style="font-size: 1.1rem; margin-top: 1.5rem;">二、 硬件生产 B.O.M 成本明细（按 1 万台量产预估）</div>
                        <p class="section-desc">硬件涉及两端（下巴项坠主模块 + 后脑柔性IMU模块），通过柔性电路板（FPC）连接。在深圳/东莞供应链体系下，单台硬件的纯物料成本（BOM）可以控制在 ￥73.5 ~ ￥98 元 之间。</p>

                        <!-- 新增：交互式 BOM 成本分析圆环图 -->
                        <div class="bom-chart-panel">
                          <div class="bom-donut-wrapper">
                            <svg width="220" height="220" viewBox="0 0 120 120" class="bom-donut-svg">
                              <!-- 底色空心背景环 -->
                              <circle cx="60" cy="60" r="50" fill="none" stroke="#f1f5f9" stroke-width="12" />
                              <!-- 动态拼接 7 色圆弧 -->
                              <circle 
                                v-for="(seg, idx) in bomChartSegments" 
                                :key="idx"
                                cx="60"
                                cy="60"
                                r="50"
                                fill="none"
                                :stroke="seg.color"
                                stroke-width="12"
                                :stroke-dasharray="seg.dasharray"
                                :stroke-dashoffset="seg.dashoffset"
                                transform="rotate(-90 60 60)"
                                class="donut-segment"
                                :class="{ 'is-hovered': activeBomHover === idx, 'is-dimmed': activeBomHover !== null && activeBomHover !== idx }"
                                @mouseenter="activeBomHover = idx"
                                @mouseleave="activeBomHover = null"
                              />
                              <!-- 圆环正中央文字信息 -->
                              <g class="donut-center-text">
                                <text x="60" y="55" text-anchor="middle" class="donut-center-label">BOM总成本</text>
                                <text x="60" y="75" text-anchor="middle" class="donut-center-val">￥78.50</text>
                              </g>
                            </svg>
                          </div>
                          <!-- 右侧动态高亮关联图例列表 -->
                          <div class="bom-legend-list">
                            <div 
                              v-for="(item, idx) in bomItems" 
                              :key="idx" 
                              class="bom-legend-item"
                              :class="{ 'is-hovered': activeBomHover === idx }"
                              @mouseenter="activeBomHover = idx"
                              @mouseleave="activeBomHover = null"
                            >
                              <div class="legend-color-dot" :style="{ backgroundColor: item.color }"></div>
                              <div class="legend-info">
                                <div class="legend-title-row">
                                  <span class="legend-name">{{ item.name }}</span>
                                  <span class="legend-cost">￥{{ item.cost.toFixed(2) }} <span class="legend-pct">({{ item.pct }})</span></span>
                                </div>
                                <div class="legend-desc">{{ item.desc }}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <table class="business-bom-table">
                          <thead>
                            <tr>
                              <th>物料类别</th>
                              <th>核心元器件与规格明细</th>
                              <th>单台估计成本 (RMB)</th>
                              <th>备注 / 供应链逻辑说明</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>主控芯片组</td>
                              <td>边缘计算 SoC 芯片（集成低功耗蓝牙 BLE 5.3 + 轻量级神经网络加速器 NPU）</td>
                              <td>￥15.00</td>
                              <td>满足端侧多模态数据一阶特征融合分类。</td>
                            </tr>
                            <tr>
                              <td>感知传感器</td>
                              <td>1. 后脑：微型六轴惯性传感器 (IMU)<br/>2. 下巴：高灵敏骨传导/电容麦克风<br/>3. 前置：微型低功耗广角摄像头</td>
                              <td>￥18.00</td>
                              <td>摄像头采用低成本大广角模组（不需手机级像素，主要用于时空上下文验证）。</td>
                            </tr>
                            <tr>
                              <td>电源与配重</td>
                              <td>高能量密度异形锂电池 (约 400-500mAh) + 配重块</td>
                              <td>￥8.00</td>
                              <td>保证 3-5 天续航，同时兼顾非对称重力配重。</td>
                            </tr>
                            <tr>
                              <td>电路板总线</td>
                              <td>多层柔性印制电路板 (FPC) + 信号屏蔽层</td>
                              <td>￥7.50</td>
                              <td>贯穿整个项圈，负责双端信号硬同步高速传输。</td>
                            </tr>
                            <tr>
                              <td>结构外壳</td>
                              <td>医疗级防敏硅胶项圈 + 磁吸紧急安全安全扣 + PC/ABS 防水外壳 (IP67)</td>
                              <td>￥12.00</td>
                              <td>磁吸带拉力阈值锁，兼顾顺应性与安全性。</td>
                            </tr>
                            <tr>
                              <td>生产综合规费</td>
                              <td>电子元件贴片 (SMT) + 组装测试 + 包装辅料</td>
                              <td>￥10.00</td>
                              <td>包含成品出厂前的多模态数据采集校准测试。</td>
                            </tr>
                            <tr>
                              <td>首次固定成本分摊</td>
                              <td>模具费、外观设计、初版产线治具费（按 1 万台分摊）</td>
                              <td>￥8.00</td>
                              <td>硬件开模的首次投入分摊。</td>
                            </tr>
                            <tr style="font-weight: bold; background: #f8fafc;">
                              <td>合计 (BOM)</td>
                              <td>单台硬件综合出厂成本</td>
                              <td>￥78.50 元</td>
                              <td>硬件毛利率约为 73.7% （以 299 元售价计算）</td>
                            </tr>
                          </tbody>
                        </table>

                        <!-- 三、全链路预算与算力 -->
                        <div class="section-subtitle" style="font-size: 1.1rem; margin-top: 1.5rem;">三、 全链路综合成本与商业预算闭环</div>
                        <p class="section-desc">要将产品真正卖出去并跑通，除了硬件本身的生产成本，产品经理还必须把研发、云端算力、运营、推广渠道费纳入全局观中。</p>
                        
                        <div class="realtime-data-dashboard" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                          <div class="dashboard-panel" style="background: #f8fafc;">
                            <span class="panel-tag" style="color: #3b82f6;">💻 软件与云端算力成本：约 ￥15.00 元 / 年</span>
                            <p style="font-size: 0.8rem; line-height: 1.6; color: #475569; margin: 8px 0 0 0;">
                              <strong>端侧免费：</strong> 蓝牙传输到手机，利用手机算力做基础特征融合，不花服务器钱。<br/>
                              <strong>云端 LLM 算力成本：</strong> 针对购买了增值包的用户，调用大语言模型（如 DeepSeek、Gemini API）生成第一人称日记。按照 2026 年底层的 Token 价格，单次生成的成本极低（单人单日约 ￥0.02-0.03 元），订阅费完全可以覆盖并实现高额净利润。
                            </p>
                          </div>
                          <div class="dashboard-panel" style="background: #f8fafc;">
                            <span class="panel-tag" style="color: #f59e0b;">📣 售卖与推广渠道成本（核心痛点）：占售价 25% ~ 35%</span>
                            <p style="font-size: 0.8rem; line-height: 1.6; color: #475569; margin: 8px 0 0 0;">
                              智能宠物硬件的 2C 推广非常依赖精准场景流量。<br/>
                              <strong>线上推广：</strong> 小红书、抖音、宠物博主（KOL/KOC）种草。通过展示“我的猫今天背着我写了一篇傲娇日记”的视觉化冲突进行裂变，降低获客成本（CAC）。<br/>
                              <strong>线下分销：</strong> 宠物连锁店、宠物医院。这需要给线下渠道留出足够的利润空间（通常需要给店主 20%-30% 的分润）。
                            </p>
                          </div>
                        </div>

                        <!-- 四、财务闭环模型 -->
                        <div class="section-subtitle" style="font-size: 1.1rem; margin-top: 1.5rem;">四、 财务闭环模型（以￥299元基础版为例）</div>
                        <p class="section-desc">当产品出厂 1 万台时，我们的财务模型呈现出极其健康的良性循环：</p>
                        
                        <div class="finance-breakdown-box">
                          <div class="finance-pay-header">
                            <span class="pay-title">🛍️ 消费者支付基础价：</span>
                            <span class="pay-amount">￥299.00 元</span>
                          </div>
                          
                          <div class="finance-bars-list">
                            <div class="finance-bar-item">
                              <div class="bar-meta-row">
                                <span class="bar-label">🛠️ 硬件出厂 BOM 成本 (￥78.50)</span>
                                <span class="bar-val-pct">26.2%</span>
                              </div>
                              <div class="bar-track">
                                <div class="bar-fill" :style="{ width: '26.2%', backgroundColor: activeLabIdea.color }"></div>
                              </div>
                            </div>
                            
                            <div class="finance-bar-item">
                              <div class="bar-meta-row">
                                <span class="bar-label">📣 渠道推广与分销费用 (￥90.00)</span>
                                <span class="bar-val-pct">30.1%</span>
                              </div>
                              <div class="bar-track">
                                <div class="bar-fill" :style="{ width: '30.1%', backgroundColor: '#f59e0b' }"></div>
                              </div>
                            </div>
                            
                            <div class="finance-bar-item">
                              <div class="bar-meta-row">
                                <span class="bar-label">👥 团队研发与固定运营分摊 (￥40.00)</span>
                                <span class="bar-val-pct">13.4%</span>
                              </div>
                              <div class="bar-track">
                                <div class="bar-fill" :style="{ width: '13.4%', backgroundColor: '#3b82f6' }"></div>
                              </div>
                            </div>
                          </div>
                          
                          <div class="finance-net-profit-card">
                            <div class="profit-card-left">
                              <span class="profit-icon">💰</span>
                              <div style="text-align: left;">
                                <span class="profit-label">单台硬件税前净利润</span>
                                <div style="font-size: 0.72rem; color: #555;">(税前纯毛利空间高达 30.2%)</div>
                              </div>
                            </div>
                            <span class="profit-amount">￥90.50 元 (30.2%)</span>
                          </div>
                        </div>

                        <!-- 想象空间长尾 -->
                        <div class="dashboard-panel" style="background: linear-gradient(135deg, rgba(56, 161, 105, 0.05) 0%, rgba(56, 161, 105, 0.01) 100%); border: 1px solid rgba(56, 161, 105, 0.2); margin-top: 1.5rem; text-align: left; padding: 1.5rem;">
                          <strong style="color: #276749; display: block; font-size: 0.95rem; margin-bottom: 0.5rem;">📈 未来的想象空间（SaaS 长尾闭环）：</strong>
                          <p style="font-size: 0.8rem; line-height: 1.6; color: #276749; margin: 0;">
                            如果 1 万个硬件激活用户中有 <strong>20% 的人（2000人）</strong> 转化为了连续续费的“宠物日记高级包”订阅用户（按 <strong>￥158/年</strong> 计算），<strong>每年将额外为你产生 ￥31.6 万 的纯软件净利润</strong>（软件高利润模型，毛利率高达 85% 以上）。<br/><br/>
                            这套成本 and 定价结构，既向投资人展示了我们在硬件供应链端的务实把控（硬件端贴地飞行，但依然具备自我造写能力），又展现了我们在软件 SaaS 服务商业化上的远期高毛利长尾预期。
                          </p>
                        </div>

                      </div>
                    </div>

                  </div>
                  
<!-- 右栏：手机高保真模拟演示（粘性定位） -->
                  <div v-if="labActiveTab !== 'business'" class="lab-preview-column">
                    <div class="phone-mockup-container">
                      <div class="phone-frame" :class="{ 'vibrate-shake': activeLabIdea.shakeActive }">
                        <div class="phone-notch"></div>
                        <div class="phone-screen">
                          <div class="screen-status-bar">
                            <span>16:32</span>
                            <span>📶 🔋 100%</span>
                          </div>
                          
                          <!-- 预警弹窗 -->
                          <div class="screen-alert-card">
                            <div class="screen-alert-header">
                              <span class="alert-icon">⚠️</span>
                              <strong>{{ activeLabIdea.scenarios[activeLabIdea.activeScenario].appTitle }}</strong>
                            </div>
                            <p class="alert-desc" style="font-size: 0.72rem; line-height: 1.5; margin: 4px 0 0 0; color: #fca5a5;">{{ activeLabIdea.scenarios[activeLabIdea.activeScenario].appDesc }}</p>
                          </div>

                          <!-- 萌宠日记 -->
                          <div class="screen-diary-card" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 10px; text-align: left;">
                            <div class="diary-header-row" style="font-size: 0.8rem; font-weight: 700; color: #fff; margin-bottom: 4px;">
                              🐕 萌宠心情第一人称日记
                            </div>
                            <p class="diary-text-new">{{ activeLabIdea.scenarios[activeLabIdea.activeScenario].diary }}</p>
                            <span class="diary-meta-new" style="margin-top: 4px;">数据来自 PoPyWaWa 端侧 AI</span>
                          </div>

                          <!-- 交互反馈区 -->
                          <div class="screen-action-card" style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); border-radius: 12px; padding: 8px; text-align: center;">
                            <span class="action-title" style="font-size: 0.72rem; color: #94a3b8; display: block; margin-bottom: 6px;">此预警研判是否精准？</span>
                            <div class="fb-btn-row" style="display: flex; gap: 8px; justify-content: center;">
                              <button class="fb-btn correct" @click="triggerFineTuning(activeLabIdea)" style="flex: 1; padding: 6px; font-size: 0.72rem; border-radius: 6px; cursor: pointer;">精准 👍</button>
                              <button class="fb-btn incorrect" @click="triggerFineTuning(activeLabIdea)" style="flex: 1; padding: 6px; font-size: 0.72rem; border-radius: 6px; cursor: pointer;">有误 👎</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="phone-label-tag">高保真端侧 AI 接收客户端模拟器</div>
                    </div>
                  </div>

                </div>

                <!-- B2: 原有的弹窗三栏拼盘模式 -->
                <div v-else class="sandbox-grid">
                  <!-- 1. 左栏：2D矢量宠物项圈拆解图 -->
                  <div class="sandbox-column collar-column">
                    <div class="column-header">🔍 项圈几何结构分析</div>
                    <div class="collar-visual-box">
                      <!-- 高级 SVG 渲染智能项圈与纽扣 -->
                      <svg class="collar-svg" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(56, 161, 105, 0.15)" stroke-width="12" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke="url(#collar-grad-modal)" stroke-width="8" stroke-dasharray="440" stroke-dashoffset="80" />
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
                          <linearGradient id="collar-grad-modal" x1="0%" y1="0%" x2="100%" y2="100%">
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
                        v-for="(scene, key) in activeLabIdea.scenarios" 
                        :key="key"
                        class="scenario-tab"
                        :class="{ active: activeLabIdea.activeScenario === key }"
                        @click="switchScenario(activeLabIdea, key)"
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
                              animationDuration: activeLabIdea.scenarios[activeLabIdea.activeScenario].audioFreq,
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
                        v-for="p in activeLabIdea.particles" 
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
                    <div class="phone-frame" :class="{ 'vibrate-shake': activeLabIdea.shakeActive }">
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
                            {{ activeLabIdea.scenarios[activeLabIdea.activeScenario].appTitle }}
                          </div>
                          <div class="alert-body">
                            {{ activeLabIdea.scenarios[activeLabIdea.activeScenario].appDesc }}
                          </div>
                        </div>

                        <!-- 第一人称日记卡片 -->
                        <div class="screen-diary-card">
                          <div class="diary-header">
                            🐕 萌宠心情第一人称日记
                          </div>
                          <div class="diary-body">
                            <p class="diary-text">{{ activeLabIdea.scenarios[activeLabIdea.activeScenario].diary }}</p>
                          </div>
                        </div>

                        <!-- 增量模型反馈闭环 -->
                        <div class="screen-feedback-loop">
                          <div class="feedback-hint">对本次情绪判定进行小样本反馈:</div>
                          <div class="feedback-actions">
                            <button class="fb-btn correct" @click="triggerFineTuning(activeLabIdea)">
                              ✔️ 翻译准确
                            </button>
                            <button class="fb-btn incorrect" @click="triggerFineTuning(activeLabIdea)">
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
      </transition>
    </main>

</template>

<style scoped>
@import '../assets/css/dream-factory.css';
</style>
