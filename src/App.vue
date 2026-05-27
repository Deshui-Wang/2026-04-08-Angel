<script setup>
import { ref, watch, nextTick } from 'vue'
import { BrainCircuit, Lock, ArrowRight } from 'lucide-vue-next'
import { ElMessage } from 'element-plus'

// 导入自治子组件
import PortalView from './components/PortalView.vue'
import StrategyView from './components/StrategyView.vue'
import GudeView from './components/GudeView.vue'
import DreamFactoryView from './components/DreamFactoryView.vue'
import PurchaseAdvisor from './components/PurchaseAdvisor.vue'

// 导入静态常量数据
import { productsData } from './data/constants'

const currentView = ref('portal') // 'portal', 'strategy', 'advisor', 'gude', 'dreamFactory', 'dreamLab'

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

// 初始化时检测 URL 参数，自动在新开页面中直接展示对应的概念验证实验室 Modal
const urlIdeaId = ref(null)
const params = new URLSearchParams(window.location.search);
const urlView = params.get("view");
const matchedIdeaId = params.get("ideaId");
if (urlView === "dreamLab" && matchedIdeaId) {
  currentView.value = "dreamLab";
  urlIdeaId.value = matchedIdeaId;
}
</script>

<template>
  <div class="portal-container">
    <!-- Navbar - Apple Style -->
    <header v-if="currentView !== 'dreamLab'" class="navbar">
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
        <button 
          class="nav-link" 
          :class="{ active: currentView === 'dreamFactory' }"
          @click="currentView = 'dreamFactory'"
        >
          创业梦工厂
        </button>
      </div>
      <div class="nav-links">
        <el-button type="primary" plain class="login-btn">登录工作台</el-button>
      </div>
    </header>

    <!-- 动态路由分流 -->
    <PortalView 
      v-if="currentView === 'portal'" 
      @navigate="handleNavigate" 
    />
    
    <StrategyView 
      v-else-if="currentView === 'strategy'" 
    />
    
    <main v-else-if="currentView === 'advisor'">
      <PurchaseAdvisor 
        :productsData="productsData" 
        :isEmbed="true" 
        @navigate="handleNavigate"
      />
    </main>
    
    <GudeView 
      v-else-if="currentView === 'gude'" 
      @navigate="handleNavigate" 
    />
    
    <DreamFactoryView 
      v-else-if="currentView === 'dreamFactory' || currentView === 'dreamLab'" 
      :currentView="currentView" 
      :urlIdeaId="urlIdeaId" 
      @update-view="val => currentView = val" 
      @navigate="handleNavigate" 
    />

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

/* Main Navigation */
.main-nav {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(250, 250, 250, 0.8);
  padding: 4px;
  border-radius: 98px;
  border: 1px solid rgba(0,0,0,0.03);
}

.nav-link {
  background: transparent;
  border: none;
  border-radius: 98px;
  padding: 8px 18px;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  background: #fff;
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}

/* Grid Decoration */
.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.03) 1px, transparent 0);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.6;
}

/* Premium Password Modal Styles */
.password-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.password-modal-card {
  width: 90%;
  max-width: 440px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 28px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.02),
    0 4px 16px rgba(0,0,0,0.02),
    0 24px 60px rgba(0,0,0,0.08);
  text-align: center;
}

.modal-glow {
  position: absolute;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.lock-icon-wrapper {
  width: 64px;
  height: 64px;
  background: #f5f5f7;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  color: var(--text-primary);
  border: 1px solid rgba(0,0,0,0.03);
}

.password-modal-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.01em;
}

.password-modal-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0 0 2rem 0;
  line-height: 1.4;
}

.input-container {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
}

.premium-input {
  width: 100%;
  padding: 14px 20px;
  background: #f5f5f7;
  border: 1px solid transparent;
  border-radius: 14px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  letter-spacing: 0.2em;
  transition: all 0.3s ease;
  font-family: inherit;
}

.premium-input::placeholder {
  letter-spacing: normal;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.premium-input:focus {
  outline: none;
  background: #fff;
  border-color: var(--text-primary);
  box-shadow: 0 0 0 4px rgba(0,0,0,0.02);
}

.modal-footer {
  display: flex;
  gap: 12px;
}

.modal-btn {
  flex: 1;
  padding: 12px 20px;
  border-radius: 980px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.modal-btn.secondary {
  background: #f5f5f7;
  border: none;
  color: var(--text-secondary);
}
.modal-btn.secondary:hover {
  background: #e8e8ed;
  color: var(--text-primary);
}

.modal-btn.primary {
  background: var(--text-primary);
  border: none;
  color: #fff;
}
.modal-btn.primary:hover {
  background: rgba(0, 0, 0, 0.85);
  transform: translateY(-1px);
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>