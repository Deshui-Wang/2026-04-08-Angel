<script setup>
import { ref } from 'vue'
import { CheckCircle2, AlertTriangle, Coins, TrendingUp, Sparkles, Building2 } from 'lucide-vue-next'
import { marketShareOrbit } from '../../data/marketData'

// 默认悬停我方 AIOS
const selectedId = ref('aios')

const selectedEnt = ref(marketShareOrbit.find(e => e.id === 'aios'))

const selectCompetitor = (id) => {
  selectedId.value = id
  selectedEnt.value = marketShareOrbit.find(e => e.id === id)
}
</script>

<template>
  <div class="competitor-section">
    <div class="section-header">
      <Sparkles :size="20" class="header-icon" />
      <h3 class="group-title">市场引力轨道与竞品博弈分析</h3>
    </div>

    <div class="competitor-layout">
      <!-- Left: Market Orbit Gravity Map -->
      <div class="orbit-visual-box">
        <span class="orbit-tip">🪐 悬停不同引力行星查看竞品博弈档案</span>
        
        <div class="orbit-system">
          <!-- Central Sun: Smart Education Market -->
          <div class="central-sun">
            <span class="sun-title">智慧教育</span>
            <span class="sun-share">大盘 100%</span>
            <div class="sun-glow"></div>
          </div>

          <!-- Orbit Rings -->
          <div class="orbit-ring ring-1"></div>
          <div class="orbit-ring ring-2"></div>
          <div class="orbit-ring ring-3"></div>
          <div class="orbit-ring ring-4"></div>

          <!-- Planet 1: 我方 AIOS (Emerald green glow, stands out!) -->
          <div 
            class="planet-node aios-planet"
            :class="{ active: selectedId === 'aios' }"
            @mouseenter="selectCompetitor('aios')"
            style="left: calc(50% + 55px); top: calc(50% - 55px);"
          >
            <div class="planet-body aios-body">
              <span class="abbr">我方</span>
              <span class="pct">18%</span>
            </div>
            <span class="planet-name">智域 AIOS</span>
          </div>

          <!-- Planet 2: 腾讯/阿里 (Blue) -->
          <div 
            class="planet-node tx-planet"
            :class="{ active: selectedId === 'tx' }"
            @mouseenter="selectCompetitor('tx')"
            style="left: calc(50% - 100px); top: calc(50% + 66px);"
          >
            <div class="planet-body tx-body">
              <span class="abbr">腾讯阿里</span>
              <span class="pct">25%</span>
            </div>
            <span class="planet-name">大厂教育云</span>
          </div>

          <!-- Planet 3: 超星 (Red, largest) -->
          <div 
            class="planet-node cx-planet"
            :class="{ active: selectedId === 'cx' }"
            @mouseenter="selectCompetitor('cx')"
            style="left: calc(50% - 130px); top: calc(50% - 130px);"
          >
            <div class="planet-body cx-body">
              <span class="abbr">超星智慧</span>
              <span class="pct">42%</span>
            </div>
            <span class="planet-name">老牌巨头</span>
          </div>

          <!-- Planet 4: 其他中小 (Orange, smallest) -->
          <div 
            class="planet-node other-planet"
            :class="{ active: selectedId === 'other' }"
            @mouseenter="selectCompetitor('other')"
            style="left: calc(50% + 170px); top: calc(50% + 170px);"
          >
            <div class="planet-body other-body">
              <span class="abbr">其他</span>
              <span class="pct">15%</span>
            </div>
            <span class="planet-name">中小厂商</span>
          </div>
        </div>
      </div>

      <!-- Right: Competitor profile cabin -->
      <div class="profile-cabin">
        <div class="cabin-inner" :style="{ borderColor: selectedId === 'aios' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(0,0,0,0.06)' }">
          <!-- Header info -->
          <div class="cabin-header">
            <div class="ent-icon" :style="{ background: selectedEnt.gradient }">
              <Building2 :size="20" style="color: #fff" />
            </div>
            <div class="ent-title-box">
              <h4 class="ent-name">{{ selectedEnt.name }}</h4>
              <div class="share-pct-bar-wrapper">
                <div class="share-pct-bar" :style="{ width: `${selectedEnt.share}%`, background: selectedEnt.gradient }"></div>
                <span class="share-text">市场份额：{{ selectedEnt.share }}%</span>
              </div>
            </div>
          </div>

          <div class="cabin-divider"></div>

          <!-- Sections -->
          <div class="cabin-body">
            <!-- Advantages -->
            <div class="info-block">
              <h5 class="info-title advantage">
                <CheckCircle2 :size="14" />
                竞品优势亮点
              </h5>
              <p class="info-desc">{{ selectedEnt.advantages }}</p>
            </div>

            <!-- Vulnerability compared to us -->
            <div class="info-block">
              <h5 class="info-title vulnerability">
                <AlertTriangle :size="14" />
                我方对比劣势 / 竞品软肋
              </h5>
              <p class="info-desc">{{ selectedEnt.weaknesses }}</p>
            </div>

            <!-- Pricing Comparison -->
            <div class="info-block" style="margin-bottom: 0;">
              <h5 class="info-title pricing">
                <Coins :size="14" />
                价格博弈与招采分析
              </h5>
              <p class="info-desc">{{ selectedEnt.pricing }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.competitor-section {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  padding: 1.8rem;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.01);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.header-icon {
  color: #3b82f6;
}

.group-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

/* Layout */
.competitor-layout {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  align-items: center;
}

@media (max-width: 992px) {
  .competitor-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Left Orbit Box */
.orbit-visual-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #0b0f19; /* 太空深蓝黑，极其凸显科幻引力轨道 */
  border-radius: 24px;
  padding: 2.5rem;
  height: 520px;
  box-shadow: 
    0 4px 20px rgba(0,0,0,0.1),
    inset 0 1px 3px rgba(255,255,255,0.05);
  overflow: hidden;
}

.orbit-tip {
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  z-index: 10;
  background: rgba(15, 23, 42, 0.8);
  padding: 4px 12px;
  border-radius: 98px;
  border: 1px solid rgba(255,255,255,0.05);
}

.orbit-system {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}

/* Central Sun */
.central-sun {
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background: radial-gradient(circle, #6366f1 0%, #4f46e5 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  z-index: 10;
  box-shadow: 0 0 45px rgba(99, 102, 241, 0.6);
  user-select: none;
  border: 1px solid rgba(255,255,255,0.2);
}

.sun-title {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.05em;
}

.sun-share {
  font-size: 0.72rem;
  font-weight: 600;
  opacity: 0.9;
  margin-top: 2px;
}

.sun-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
  z-index: -1;
  animation: pulse-glow 3s ease-in-out infinite;
}

/* Orbit concentric rings */
.orbit-ring {
  position: absolute;
  border: 1px dashed rgba(99, 102, 241, 0.15);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 2;
}

.ring-1 { width: 156px; height: 156px; }
.ring-2 { width: 240px; height: 240px; }
.ring-3 { width: 368px; height: 368px; }
.ring-4 { width: 480px; height: 480px; }

/* Planet Nodes */
.planet-node {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.planet-body {
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: inherit;
  user-select: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.15);
}

.planet-name {
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
  white-space: nowrap;
  background: rgba(15, 23, 42, 0.6);
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.03);
  transition: all 0.3s ease;
}

/* Planet Hover effect */
.planet-node:hover {
  transform: translate(-50%, -50%) scale(1.18);
  z-index: 15;
}

.planet-node:hover .planet-name,
.planet-node.active .planet-name {
  color: #ffffff;
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(255,255,255,0.15);
}

/* Planet size & style mapping */

/* 1. 我方 AIOS: Emerald Green, diameter 68px */
.aios-body {
  width: 66px;
  height: 66px;
  background: radial-gradient(circle at 30% 30%, #10b981 0%, #047857 100%);
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.35);
  animation: float-slow-1 6s ease-in-out infinite;
}
.planet-node:hover .aios-body,
.planet-node.active .aios-body {
  box-shadow: 0 0 40px rgba(16, 185, 129, 0.8);
  transform: scale(1.08);
}
.aios-body .abbr { font-size: 0.75rem; font-weight: 850; letter-spacing: 0.02em; }
.aios-body .pct { font-size: 0.68rem; font-weight: 600; opacity: 0.9; }

/* 2. 腾讯/阿里: Blue, diameter 80px */
.tx-body {
  width: 78px;
  height: 78px;
  background: radial-gradient(circle at 30% 30%, #3b82f6 0%, #1d4ed8 100%);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
  animation: float-slow-2 8s ease-in-out infinite;
}
.planet-node:hover .tx-body,
.planet-node.active .tx-body {
  box-shadow: 0 0 35px rgba(59, 130, 246, 0.6);
  transform: scale(1.06);
}
.tx-body .abbr { font-size: 0.72rem; font-weight: 700; }
.tx-body .pct { font-size: 0.65rem; font-weight: 600; opacity: 0.9; }

/* 3. 超星: Red, Largest, diameter 98px */
.cx-body {
  width: 96px;
  height: 96px;
  background: radial-gradient(circle at 30% 30%, #ef4444 0%, #b91c1c 100%);
  box-shadow: 0 0 15px rgba(239, 68, 68, 0.2);
  animation: float-slow-3 10s ease-in-out infinite;
}
.planet-node:hover .cx-body,
.planet-node.active .cx-body {
  box-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
  transform: scale(1.05);
}
.cx-body .abbr { font-size: 0.75rem; font-weight: 700; }
.cx-body .pct { font-size: 0.65rem; font-weight: 600; opacity: 0.9; }

/* 4. 其他中小: Orange, Smallest, diameter 56px */
.other-body {
  width: 54px;
  height: 54px;
  background: radial-gradient(circle at 30% 30%, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.15);
  animation: float-slow-4 5s ease-in-out infinite;
}
.planet-node:hover .other-body,
.planet-node.active .other-body {
  box-shadow: 0 0 25px rgba(245, 158, 11, 0.45);
  transform: scale(1.1);
}
.other-body .abbr { font-size: 0.7rem; font-weight: 700; }
.other-body .pct { font-size: 0.6rem; font-weight: 600; opacity: 0.9; }

/* Right: Profile Cabin */
.profile-cabin {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cabin-inner {
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(255, 255, 255, 0.85);
  border-radius: 24px;
  padding: 1.8rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.01),
    0 8px 24px rgba(0,0,0,0.01),
    0 20px 45px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.cabin-header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.ent-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  flex-shrink: 0;
}

.ent-title-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.ent-name {
  font-size: 1.15rem;
  font-weight: 750;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}

.share-pct-bar-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.share-pct-bar {
  height: 6px;
  border-radius: 98px;
  transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.share-text {
  font-size: 0.72rem;
  font-weight: 700;
  color: #475569;
}

.cabin-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.04);
  margin: 1.2rem 0;
}

/* Cabin Body Section Block */
.cabin-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-title {
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.info-title.advantage {
  color: #059669;
}

.info-title.vulnerability {
  color: #ea580c;
}

.info-title.pricing {
  color: #4f46e5;
}

.info-desc {
  font-size: 0.84rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
  background: rgba(0, 0, 0, 0.01);
  padding: 8px 12px;
  border-radius: 10px;
  border-left: 2px solid rgba(0,0,0,0.04);
}

.selected-aios .info-desc {
  background: rgba(16, 185, 129, 0.01);
}

/* Floating & pulse animations */
@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.25;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.45;
  }
}

@keyframes float-slow-1 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-4px) translateX(2px); }
}

@keyframes float-slow-2 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(5px) translateX(-3px); }
}

@keyframes float-slow-3 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-6px) translateX(-4px); }
}

@keyframes float-slow-4 {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(4px) translateX(4px); }
}
</style>
