<script setup>
import { computed } from 'vue'
import { Building2, Cpu, Workflow } from 'lucide-vue-next'
import { targetEnterprises } from '../../data/marketData'

const props = defineProps({
  onlyNoSales: {
    type: Boolean,
    default: false
  }
})

const filteredEnterprises = computed(() => {
  let list = targetEnterprises
  if (props.onlyNoSales) {
    list = list.filter(e => !e.salesperson)
  }
  return list
})
</script>

<template>
  <div class="tab-content-wrapper">
    <!-- Grid -->
    <transition-group name="grid-fade" tag="div" class="enterprise-grid">
      <div 
        v-for="ent in filteredEnterprises" 
        :key="ent.id" 
        class="ent-card"
      >
        <!-- Header -->
        <div class="ent-header">
          <div class="ent-icon-wrapper">
            <Building2 :size="20" />
          </div>
          <div class="ent-header-info">
            <h3 class="ent-name">{{ ent.name }}</h3>
            <span class="ent-status-tag">{{ ent.tag }}</span>
          </div>
        </div>

        <!-- Details Info Table (Grid) -->
        <div class="meta-container">
          <div class="meta-item">
            <span class="meta-label">企业类型</span>
            <span class="meta-value">{{ ent.type }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">人员规模</span>
            <span class="meta-value">{{ ent.scale }}</span>
          </div>
        </div>

        <div class="card-divider"></div>

        <!-- Industry -->
        <div class="section-container">
          <h4 class="section-title">
            <Cpu :size="13" />
            涉足产业
          </h4>
          <span class="industry-chip">{{ ent.industry }}</span>
        </div>

        <!-- Collaboration -->
        <div class="section-container" style="margin-bottom: 1.5rem;">
          <h4 class="section-title">
            <Workflow :size="13" />
            产学研合作方向
          </h4>
          <p class="collab-desc">
            {{ ent.collabDirection }}
          </p>
        </div>

        <!-- Salesperson Row (Footer) -->
        <div class="salesperson-row">
          <div v-if="ent.salesperson" class="sales-badge active">
            <span class="sales-icon">👤</span>
            <span class="sales-label">销售跟进中：</span>
            <span class="sales-name">{{ ent.salesperson }}</span>
          </div>
          <div v-else class="sales-badge inactive">
            <span class="sales-icon">👤</span>
            <span class="sales-label">暂无跟进销售员</span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.tab-content-wrapper {
  animation: fadeIn 0.4s ease-out;
}

/* Grid */
.enterprise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
  position: relative;
}

.ent-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.01),
    0 4px 12px rgba(0,0,0,0.01),
    0 12px 24px rgba(0,0,0,0.02);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.ent-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.02),
    0 12px 30px rgba(0,0,0,0.06);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 0, 0, 0.1);
}

/* Header */
.ent-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 1.2rem;
}

.ent-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.04);
  color: var(--text-primary, #111);
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.ent-card:hover .ent-icon-wrapper {
  background: var(--text-primary, #111);
  color: #ffffff;
  border-color: var(--text-primary, #111);
}

.ent-header-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ent-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary, #111);
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.ent-status-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: #10b981;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.15);
  padding: 1px 6px;
  border-radius: 6px;
  align-self: flex-start;
}

/* Meta Table */
.meta-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background: rgba(0, 0, 0, 0.01);
  padding: 10px 14px;
  border-radius: 12px;
  margin-bottom: 1.2rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.meta-label {
  font-size: 0.7rem;
  color: var(--text-secondary, #888);
}

.meta-value {
  font-size: 0.82rem;
  font-weight: 550;
  color: var(--text-primary, #333);
}

.card-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.04);
  margin-bottom: 1.2rem;
}

/* Sections */
.section-container {
  margin-bottom: 1.2rem;
}

.section-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary, #666);
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.industry-chip {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-primary, #333);
  background: rgba(0, 0, 0, 0.04);
  padding: 4px 10px;
  border-radius: 8px;
}

.ent-card:hover .industry-chip {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}

.collab-desc {
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--text-secondary, #555);
  margin: 0;
  background: rgba(0, 0, 0, 0.01);
  padding: 8px 12px;
  border-radius: 10px;
  border-left: 2px solid rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.ent-card:hover .collab-desc {
  background: rgba(0, 0, 0, 0.02);
  border-left-color: var(--text-primary, #111);
}

/* Salesperson Row */
.salesperson-row {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
}

.sales-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 550;
}

.sales-badge.active {
  background: rgba(16, 185, 129, 0.06);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.15);
}

.sales-badge.inactive {
  background: rgba(243, 244, 246, 0.9);
  color: #6b7280;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.sales-name {
  font-weight: 700;
}

/* Transitions */
.grid-fade-enter-active,
.grid-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.grid-fade-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(15px);
}

.grid-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-15px);
  position: absolute;
}

.grid-fade-move {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
