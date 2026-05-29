<script setup>
import { School, GraduationCap } from 'lucide-vue-next'
import { marketStats } from '../../data/marketData'
</script>

<template>
  <div class="metrics-grid">
    <!-- Card 1: 职业院校 -->
    <div class="metric-card blue-glow">
      <div class="card-radar-bg"></div>
      <div class="card-content">
        <div class="metric-header">
          <div class="icon-sphere blue">
            <School :size="24" />
          </div>
          <span class="metric-category">宏观市场大盘</span>
        </div>
        
        <div class="number-display">
          <span class="number">{{ marketStats.vocationalSchools }}</span>
          <span class="unit">所</span>
        </div>
        
        <h3 class="metric-title">全国职业院校总量</h3>
        <p class="metric-desc">涵盖高等职业本科、高职专科以及中等专业院校。是当前 ToB 敲门砖破冰工具落地、诊改软件订阅的**最主力黄金战场**。</p>
        
        <!-- 新增：职业院校占有率分布轨道 -->
        <div class="share-track-section">
          <div class="track-title-row">
            <span class="track-lbl">🏫 市场占有率分配对比</span>
            <span class="track-growth">我方强势攀升中 📈</span>
          </div>
          
          <div class="glow-spectrum-rail">
            <div 
              class="rail-segment aios" 
              :style="{ width: `${marketStats.vocationalShare.aios}%` }" 
              :title="`我方 AIOS: ${marketStats.vocationalShare.aios}%`"
            ></div>
            <div 
              class="rail-segment cx" 
              :style="{ width: `${marketStats.vocationalShare.cx}%` }" 
              :title="`老牌巨头超星: ${marketStats.vocationalShare.cx}%`"
            ></div>
            <div 
              class="rail-segment tx" 
              :style="{ width: `${marketStats.vocationalShare.tx}%` }" 
              :title="`大厂云腾讯阿里: ${marketStats.vocationalShare.tx}%`"
            ></div>
            <div 
              class="rail-segment other" 
              :style="{ width: `${marketStats.vocationalShare.other}%` }" 
              :title="`其他中小厂商: ${marketStats.vocationalShare.other}%`"
            ></div>
          </div>
          
          <div class="rail-legend">
            <div class="legend-item aios">
              <span class="dot"></span>
              <span class="lbl">我方 AIOS</span>
              <span class="val">{{ marketStats.vocationalShare.aios }}%</span>
            </div>
            <div class="legend-item cx">
              <span class="dot"></span>
              <span class="lbl">老牌巨头</span>
              <span class="val">{{ marketStats.vocationalShare.cx }}%</span>
            </div>
            <div class="legend-item tx">
              <span class="dot"></span>
              <span class="lbl">大厂云</span>
              <span class="val">{{ marketStats.vocationalShare.tx }}%</span>
            </div>
            <div class="legend-item other">
              <span class="dot"></span>
              <span class="lbl">其他</span>
              <span class="val">{{ marketStats.vocationalShare.other }}%</span>
            </div>
          </div>
        </div>

        <div class="metric-divider"></div>
        
        <div class="sub-stats-row">
          <div class="sub-stat">
            <span class="val">197 所</span>
            <span class="lbl">“双高计划”建设校</span>
          </div>
          <div class="sub-stat">
            <span class="val">~1,800 万</span>
            <span class="lbl">在校师生总量</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2: 公立本科 -->
    <div class="metric-card purple-glow">
      <div class="card-radar-bg"></div>
      <div class="card-content">
        <div class="metric-header">
          <div class="icon-sphere purple">
            <GraduationCap :size="24" />
          </div>
          <span class="metric-category">学术科研大盘</span>
        </div>
        
        <div class="number-display">
          <span class="number">{{ marketStats.publicUniversities }}</span>
          <span class="unit">所</span>
        </div>
        
        <h3 class="metric-title">全国公立大学总量</h3>
        <p class="metric-desc">涵盖双一流、985、211及地方普通本科高校。以**学术科研助手、论文润色确权及算力调度中枢**为核心高溢价采购目标。</p>
        
        <!-- 新增：公立本科占有率分布轨道 -->
        <div class="share-track-section">
          <div class="track-title-row">
            <span class="track-lbl">🏫 市场占有率分配对比</span>
            <span class="track-growth">科研助手破冰 📈</span>
          </div>
          
          <div class="glow-spectrum-rail">
            <div 
              class="rail-segment aios" 
              :style="{ width: `${marketStats.publicShare.aios}%` }" 
              :title="`我方 AIOS: ${marketStats.publicShare.aios}%`"
            ></div>
            <div 
              class="rail-segment cx" 
              :style="{ width: `${marketStats.publicShare.cx}%` }" 
              :title="`老牌巨头超星: ${marketStats.publicShare.cx}%`"
            ></div>
            <div 
              class="rail-segment tx" 
              :style="{ width: `${marketStats.publicShare.tx}%` }" 
              :title="`大厂云腾讯阿里: ${marketStats.publicShare.tx}%`"
            ></div>
            <div 
              class="rail-segment other" 
              :style="{ width: `${marketStats.publicShare.other}%` }" 
              :title="`其他中小厂商: ${marketStats.publicShare.other}%`"
            ></div>
          </div>
          
          <div class="rail-legend">
            <div class="legend-item aios">
              <span class="dot"></span>
              <span class="lbl">我方 AIOS</span>
              <span class="val">{{ marketStats.publicShare.aios }}%</span>
            </div>
            <div class="legend-item cx">
              <span class="dot"></span>
              <span class="lbl">老牌巨头</span>
              <span class="val">{{ marketStats.publicShare.cx }}%</span>
            </div>
            <div class="legend-item tx">
              <span class="dot"></span>
              <span class="lbl">大厂云</span>
              <span class="val">{{ marketStats.publicShare.tx }}%</span>
            </div>
            <div class="legend-item other">
              <span class="dot"></span>
              <span class="lbl">其他</span>
              <span class="val">{{ marketStats.publicShare.other }}%</span>
            </div>
          </div>
        </div>

        <div class="metric-divider"></div>
        
        <div class="sub-stats-row">
          <div class="sub-stat">
            <span class="val">147 所</span>
            <span class="lbl">双一流建设高校</span>
          </div>
          <div class="sub-stat">
            <span class="val">85%</span>
            <span class="lbl">智慧校园AI中台普及率</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}

.metric-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 28px;
  padding: 2.2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.01),
    0 8px 24px rgba(0,0,0,0.02),
    0 24px 60px rgba(0,0,0,0.03);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.metric-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 
    0 10px 30px rgba(0,0,0,0.03),
    0 30px 80px rgba(0,0,0,0.08);
  border-color: rgba(0, 0, 0, 0.08);
}

/* Radar Scan background decoration */
.card-radar-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.02) 1.5px, transparent 0);
  background-size: 24px 24px;
  pointer-events: none;
  opacity: 0.8;
  z-index: 1;
}

.card-radar-bg::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent 40%, rgba(99, 102, 241, 0.01) 50%, transparent 60%);
  animation: radar-sweep 12s linear infinite;
  pointer-events: none;
}

.metric-card.purple-glow .card-radar-bg::after {
  background: conic-gradient(from 0deg, transparent 40%, rgba(139, 92, 246, 0.01) 50%, transparent 60%);
}

.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Glow Background filters */
.metric-card::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -120px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.12;
  transition: all 0.5s ease;
  pointer-events: none;
}

.metric-card:hover::before {
  opacity: 0.22;
  transform: scale(1.15);
}

.blue-glow::before {
  background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
}

.purple-glow::before {
  background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
}

/* Metric Header */
.metric-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.icon-sphere {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-sphere.blue {
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.icon-sphere.purple {
  background: rgba(139, 92, 246, 0.08);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.metric-category {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary, #777);
}

/* Numbers */
.number-display {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--text-primary, #0f172a);
}

.unit {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-secondary, #64748b);
  margin-left: 6px;
}

.metric-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary, #0f172a);
  margin: 0 0 0.6rem 0;
  letter-spacing: -0.01em;
}

.metric-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary, #555);
  margin: 0 0 1.5rem 0;
}

/* Market Share track */
.share-track-section {
  margin-bottom: 1.8rem;
  background: rgba(0, 0, 0, 0.015);
  padding: 14px 18px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.track-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.track-lbl {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-primary, #1e293b);
}

.track-growth {
  font-size: 0.72rem;
  font-weight: 700;
  color: #10b981;
  background: rgba(16, 185, 129, 0.06);
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.glow-spectrum-rail {
  display: flex;
  height: 10px;
  border-radius: 98px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  background: #e2e8f0;
}

.rail-segment {
  height: 100%;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  position: relative;
}

.rail-segment:hover {
  transform: scaleY(1.3);
  filter: brightness(1.1);
  z-index: 10;
}

/* Colors for segments */
.rail-segment.aios {
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}
.rail-segment.cx {
  background: linear-gradient(90deg, #ef4444 0%, #b91c1c 100%);
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
}
.rail-segment.tx {
  background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
}
.rail-segment.other {
  background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 0 10px rgba(245, 158, 11, 0.2);
}

/* Legend styling */
.rail-legend {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.legend-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.legend-item:hover {
  background: rgba(0, 0, 0, 0.03);
}

.legend-item .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 2px;
  animation: pulse-legend 2.5s infinite;
}

.legend-item.aios .dot { background-color: #10b981; box-shadow: 0 0 6px #10b981; }
.legend-item.cx .dot { background-color: #ef4444; box-shadow: 0 0 6px #ef4444; }
.legend-item.tx .dot { background-color: #3b82f6; box-shadow: 0 0 6px #3b82f6; }
.legend-item.other .dot { background-color: #f59e0b; box-shadow: 0 0 6px #f59e0b; }

.legend-item .lbl {
  font-size: 0.65rem;
  font-weight: 550;
  color: #64748b;
  white-space: nowrap;
}

.legend-item .val {
  font-size: 0.78rem;
  font-weight: 800;
  color: #0f172a;
}

.metric-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.04);
  margin-bottom: 1.5rem;
  margin-top: auto; /* Push divider and sub stats to bottom */
}

/* Sub statistics */
.sub-stats-row {
  display: flex;
  gap: 2.2rem;
}

.sub-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sub-stat .val {
  font-size: 1.15rem;
  font-weight: 750;
  color: var(--text-primary, #0f172a);
}

.sub-stat .lbl {
  font-size: 0.78rem;
  color: var(--text-secondary, #888);
}

/* Keyframes */
@keyframes radar-sweep {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-legend {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}
</style>
