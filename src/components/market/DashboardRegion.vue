<script setup>
import { ref } from 'vue'
import { MapPin, Target, Rocket, Sparkles, Navigation } from 'lucide-vue-next'
import { regionalDistribution } from '../../data/marketData'

const selectedId = ref('east')
const selectedReg = ref(regionalDistribution.find(r => r.id === 'east'))

const hoverRegion = (id) => {
  selectedId.value = id
  selectedReg.value = regionalDistribution.find(r => r.id === id)
}
</script>

<template>
  <div class="region-section">
    <div class="section-header">
      <Navigation :size="20" class="header-icon" />
      <h3 class="group-title">全国区域智慧大盘图谱</h3>
    </div>

    <div class="region-layout">
      <!-- Left: Regional Distribution Deck -->
      <div class="region-deck">
        <div 
          v-for="r in regionalDistribution" 
          :key="r.id" 
          class="region-bar-card"
          :class="{ active: selectedId === r.id }"
          @mouseenter="hoverRegion(r.id)"
        >
          <!-- Card Header inside list -->
          <div class="card-top-row">
            <span class="reg-name">{{ r.name }}</span>
            <span class="reg-badge" :style="{ backgroundColor: `${r.color}08`, color: r.color, borderColor: `${r.color}15` }">
              {{ r.activeBadge }}
            </span>
          </div>

          <!-- Color Progress Bar -->
          <div class="progress-track-wrapper">
            <div class="custom-progress-track">
              <div 
                class="custom-progress-fill" 
                :style="{ width: `${r.share}%`, background: `linear-gradient(90deg, ${r.color}aa, ${r.color})`, boxShadow: `0 0 12px ${r.color}40` }"
              ></div>
            </div>
            <span class="pct-display" :style="{ color: r.color }">{{ r.share }}%</span>
          </div>
        </div>
      </div>

      <!-- Right: AI Strategy Info Cabin -->
      <div class="strategy-cabin">
        <div class="cabin-inner" :style="{ borderColor: `${selectedReg.color}25` }">
          <div class="cabin-glow" :style="{ background: `radial-gradient(circle, ${selectedReg.color}08 0%, transparent 70%)` }"></div>
          
          <div class="cabin-header">
            <div class="badge-sphere" :style="{ backgroundColor: `${selectedReg.color}08`, color: selectedReg.color }">
              <Sparkles :size="20" />
            </div>
            <div class="header-text-block">
              <h4 class="cabin-title">{{ selectedReg.name }}</h4>
              <span class="share-highlight" :style="{ color: selectedReg.color }">市场占有比重：{{ selectedReg.share }}%</span>
            </div>
          </div>

          <div class="cabin-divider"></div>

          <div class="cabin-body">
            <!-- Covered Provinces -->
            <div class="info-block">
              <h5 class="info-title provinces" :style="{ color: selectedReg.color }">
                <MapPin :size="14" />
                主力覆盖省份
              </h5>
              <p class="provinces-text">{{ selectedReg.provinces }}</p>
            </div>

            <!-- Strategic Status -->
            <div class="info-block">
              <h5 class="info-title focus" :style="{ color: selectedReg.color }">
                <Target :size="14" />
                大区核心战略地位
              </h5>
              <p class="info-desc">{{ selectedReg.focus }}</p>
            </div>

            <!-- Tactical Playbook -->
            <div class="info-block" style="margin-bottom: 0;">
              <h5 class="info-title tactics" :style="{ color: selectedReg.color }">
                <Rocket :size="14" />
                智域 AIOS 精准战术推进
              </h5>
              <p class="tactics-desc" :style="{ borderLeftColor: selectedReg.color }">
                {{ selectedReg.tactics }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.region-section {
  background:#f8fafc;
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
.region-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2rem;
  align-items: stretch;
}

@media (max-width: 992px) {
  .region-layout {
    grid-template-columns: 1fr;
  }
}

/* Left deck list */
.region-deck {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.region-bar-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  padding: 1rem 1.2rem;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.01), 0 4px 12px rgba(0,0,0,0.01);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.region-bar-card:hover {
  transform: translateX(4px);
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
}

.region-bar-card.active {
  transform: translateX(6px);
  background: #f8fafc;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 12px 28px rgba(0, 0, 0, 0.04);
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.reg-name {
  font-size: 0.92rem;
  font-weight: 700;
  color: #0f172a;
}

.reg-badge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid transparent;
}

/* Progress rail in card */
.progress-track-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.custom-progress-track {
  flex: 1;
  height: 6px;
  background: #e2e8f0;
  border-radius: 98px;
  overflow: hidden;
  box-shadow: inset 0 1px 1px rgba(0,0,0,0.05);
}

.custom-progress-fill {
  height: 100%;
  border-radius: 98px;
  transition: width 0.5s ease-in-out;
}

.pct-display {
  font-size: 0.88rem;
  font-weight: 800;
  width: 40px;
  text-align: right;
}

/* Right Strategy Cabin */
.strategy-cabin {
  display: flex;
  flex-direction: column;
}

.cabin-inner {
  border: 1px solid rgba(0, 0, 0, 0.04);
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
  position: relative;
  overflow: hidden;
  height: 100%;
}

.cabin-glow {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(35px);
  pointer-events: none;
  z-index: 1;
}

.cabin-header {
  display: flex;
  align-items: center;
  gap: 14px;
  position: relative;
  z-index: 2;
}

.badge-sphere {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  flex-shrink: 0;
  border: 1px solid rgba(0,0,0,0.03);
}

.header-text-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cabin-title {
  font-size: 1.15rem;
  font-weight: 750;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.01em;
}

.share-highlight {
  font-size: 0.76rem;
  font-weight: 700;
}

.cabin-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.04);
  margin: 1.2rem 0;
  position: relative;
  z-index: 2;
}

/* Cabin Body */
.cabin-body {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  z-index: 2;
}

.info-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-title {
  font-size: 0.8rem;
  font-weight: 750;
  margin: 0 0 4px 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.provinces-text {
  font-size: 0.84rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  background: #f8fafc;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.03);
}

.info-desc {
  font-size: 0.84rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
}

.tactics-desc {
  font-size: 0.84rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
  background: rgba(0, 0, 0, 0.01);
  padding: 8px 12px;
  border-radius: 10px;
  border-left: 2px solid transparent;
}
</style>
