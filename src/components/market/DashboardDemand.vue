<script setup>
import { Sparkles, Compass, Lightbulb, Flame, Award } from 'lucide-vue-next'
import { aiToolDemands } from '../../data/marketData'
</script>

<template>
  <div class="demand-section">
    <div class="section-header">
      <Sparkles :size="20" class="header-icon" />
      <h3 class="group-title">三维 AI 工具需求探索图谱</h3>
    </div>

    <div class="demand-grid">
      <!-- Column 1: 通用需求 -->
      <div class="demand-column">
        <div class="column-header">
          <Flame :size="16" class="col-icon red" />
          <h4>时下通用热点需求</h4>
        </div>
        <div class="cards-stack">
          <div 
            v-for="g in aiToolDemands.general" 
            :key="g.title" 
            class="demand-card normal-card"
          >
            <div class="card-top">
              <h5 class="card-name">{{ g.title }}</h5>
              <span class="hot-badge">
                热度 {{ g.hotIndex }}
              </span>
            </div>
            <p class="card-desc">{{ g.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Column 2: 个性化专业需求 -->
      <div class="demand-column">
        <div class="column-header">
          <Compass :size="16" class="col-icon blue" />
          <h4>专业级个性化定制</h4>
        </div>
        <div class="cards-stack">
          <div 
            v-for="c in aiToolDemands.customized" 
            :key="c.domain" 
            class="demand-card normal-card"
          >
            <div class="card-top">
              <h5 class="card-name">{{ c.demand }}</h5>
              <span class="domain-tag">{{ c.domain.split('')[0] + c.domain.split('')[1] }}</span>
            </div>
            <span class="domain-full-tag">{{ c.domain }}</span>
            <p class="card-desc">{{ c.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Column 3: 黄金可挖掘需求 -->
      <div class="demand-column">
        <div class="column-header">
          <Lightbulb :size="16" class="col-icon gold" />
          <h4>黄金可挖掘蓝海点</h4>
        </div>
        <div class="cards-stack">
          <div 
            v-for="u in aiToolDemands.untapped" 
            :key="u.title" 
            class="demand-card gold-card"
          >
            <div class="gold-glow"></div>
            <div class="card-top">
              <h5 class="card-name gold-text">
                <Award :size="16" />
                {{ u.title }}
              </h5>
            </div>
            <p class="card-desc">{{ u.desc }}</p>
            <div class="gold-badge">
              {{ u.valuePoint }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demand-section {
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

/* Grid Layout */
.demand-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.1fr;
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .demand-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.demand-column {
  display: flex;
  flex-direction: column;
}

.column-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
}

.column-header h4 {
  font-size: 0.92rem;
  font-weight: 650;
  color: #334155;
  margin: 0;
}

.col-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-icon.red {
  background: rgba(239, 68, 68, 0.08);
  color: #ef4444;
}

.col-icon.blue {
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
}

.col-icon.gold {
  background: rgba(245, 158, 11, 0.08);
  color: #d97706;
}

/* Cards Stack */
.cards-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.demand-card {
  border-radius: 18px;
  padding: 1.2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Normal Card Styling */
.normal-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 2px rgba(0,0,0,0.01), 0 4px 12px rgba(0,0,0,0.01);
}

.normal-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.04);
  border-color: rgba(0, 0, 0, 0.08);
}

/* Gold Card Styling (Untapped opportunities) */
.gold-card {
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(255, 255, 255, 0.8) 100%);
  border: 1px solid rgba(245, 158, 11, 0.22);
  box-shadow: 
    0 1px 2px rgba(245, 158, 11, 0.02),
    0 8px 24px rgba(245, 158, 11, 0.04);
}

.gold-card:hover {
  transform: translateY(-4px);
  background: linear-gradient(135deg, rgba(254, 243, 199, 0.6) 0%, rgba(255, 255, 255, 0.95) 100%);
  box-shadow: 
    0 10px 30px rgba(245, 158, 11, 0.08),
    0 24px 60px rgba(245, 158, 11, 0.05);
  border-color: rgba(245, 158, 11, 0.4);
}

.gold-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%);
  filter: blur(20px);
  pointer-events: none;
  transition: all 0.4s ease;
}

.gold-card:hover .gold-glow {
  transform: scale(1.3);
  opacity: 1;
}

/* Card content */
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 0.6rem;
}

.card-name {
  font-size: 0.92rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.3;
}

.gold-text {
  color: #b45309;
  display: flex;
  align-items: center;
  gap: 6px;
}

.hot-badge {
  font-size: 0.68rem;
  font-weight: 700;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.15);
  padding: 1px 6px;
  border-radius: 6px;
  flex-shrink: 0;
}

.domain-tag {
  font-size: 0.68rem;
  font-weight: 700;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  padding: 1px 6px;
  border-radius: 6px;
  flex-shrink: 0;
}

.domain-full-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 0.4rem;
  display: inline-block;
}

.card-desc {
  font-size: 0.84rem;
  line-height: 1.5;
  color: #475569;
  margin: 0;
}

.gold-badge {
  margin-top: 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: #b45309;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.15);
  padding: 6px 12px;
  border-radius: 10px;
  text-align: center;
}
</style>
