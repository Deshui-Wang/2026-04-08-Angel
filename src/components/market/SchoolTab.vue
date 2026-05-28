<script setup>
import { ref, computed } from 'vue'
import { GraduationCap, Users, Network, Tag, School, BookOpen } from 'lucide-vue-next'
import { targetSchools } from '../../data/marketData'

const props = defineProps({
  onlyNoSales: {
    type: Boolean,
    default: false
  }
})

const activeFilter = ref('all') // 'all', 'vocational', 'public'

const filteredSchools = computed(() => {
  let list = targetSchools
  if (activeFilter.value === 'vocational') {
    list = targetSchools.filter(s => s.type === '职业院校')
  } else if (activeFilter.value === 'public') {
    list = targetSchools.filter(s => s.type === '公立院校')
  }
  
  if (props.onlyNoSales) {
    list = list.filter(s => !s.salesperson)
  }
  return list
})
</script>

<template>
  <div class="tab-content-wrapper">
    <!-- Filter Header -->
    <div class="filter-bar">
      <div class="segmented-control">
        <button 
          class="segmented-btn" 
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >
          全部院校 ({{ targetSchools.length }})
        </button>
        <button 
          class="segmented-btn" 
          :class="{ active: activeFilter === 'vocational' }"
          @click="activeFilter = 'vocational'"
        >
          职业院校 ({{ targetSchools.filter(s => s.type === '职业院校').length }})
        </button>
        <button 
          class="segmented-btn" 
          :class="{ active: activeFilter === 'public' }"
          @click="activeFilter = 'public'"
        >
          公立本科 ({{ targetSchools.filter(s => s.type === '公立院校').length }})
        </button>
      </div>
    </div>

    <!-- Cards Grid -->
    <transition-group name="grid-fade" tag="div" class="school-grid">
      <div 
        v-for="school in filteredSchools" 
        :key="school.id" 
        class="school-card"
      >
        <div class="card-glow" :class="school.type === '职业院校' ? 'blue' : 'purple'"></div>
        
        <!-- Header -->
        <div class="card-header">
          <div class="school-icon-wrapper" :class="school.type === '职业院校' ? 'blue' : 'purple'">
            <School v-if="school.type === '职业院校'" :size="20" />
            <GraduationCap v-else :size="20" />
          </div>
          <div class="header-info">
            <h3 class="school-name">{{ school.name }}</h3>
            <div class="badge-row">
              <span class="type-badge" :class="school.type === '职业院校' ? 'blue' : 'purple'">
                {{ school.type }}
              </span>
              <span class="tag-badge">
                <Tag :size="10" />
                {{ school.tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="card-divider"></div>

        <!-- Majors Section -->
        <div class="section-container">
          <h4 class="section-title">
            <BookOpen :size="14" />
            核心专业
          </h4>
          <div class="majors-list">
            <span v-for="major in school.coreMajors" :key="major" class="major-chip">
              {{ major }}
            </span>
          </div>
        </div>

        <!-- Partnership Section -->
        <div class="section-container">
          <h4 class="section-title">
            <Network :size="14" />
            校企合作情况
          </h4>
          <p class="partnership-text">
            {{ school.partnerships }}
          </p>
        </div>

        <!-- Salesperson Row -->
        <div class="salesperson-row">
          <div v-if="school.salesperson" class="sales-badge active">
            <span class="sales-icon">👤</span>
            <span class="sales-label">销售跟进中：</span>
            <span class="sales-name">{{ school.salesperson }}</span>
          </div>
          <div v-else class="sales-badge inactive">
            <span class="sales-icon">👤</span>
            <span class="sales-label">暂无跟进销售员</span>
          </div>
        </div>

        <!-- Footer Stats -->
        <div class="card-footer">
          <div class="stats-icon-wrapper">
            <Users :size="16" />
            <span class="stats-label">师生规模</span>
          </div>
          <div class="stats-numbers">
            <div class="stats-item">
              <span class="num">{{ school.staffAndStudents.teachers }}</span>
              <span class="label">教师</span>
            </div>
            <div class="stats-item">
              <span class="num">{{ school.staffAndStudents.students }}</span>
              <span class="label">学生</span>
            </div>
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

/* Filter Bar */
.filter-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.segmented-control {
  display: flex;
  background: rgba(240, 240, 243, 0.8);
  padding: 4px;
  border-radius: 98px;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.segmented-btn {
  background: transparent;
  border: none;
  border-radius: 98px;
  padding: 6px 18px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-secondary, #666);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.segmented-btn:hover {
  color: var(--text-primary, #111);
}

.segmented-btn.active {
  background: #ffffff;
  color: var(--text-primary, #111);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* Cards Grid */
.school-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
  position: relative;
}

.school-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
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

.school-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.02),
    0 12px 30px rgba(0,0,0,0.06);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 0, 0, 0.1);
}

.card-glow {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  filter: blur(35px);
  pointer-events: none;
  opacity: 0.15;
  transition: all 0.4s ease;
}

.school-card:hover .card-glow {
  opacity: 0.25;
  transform: scale(1.2);
}

.card-glow.blue {
  background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
}

.card-glow.purple {
  background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
}

/* Header */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 1.2rem;
}

.school-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.school-icon-wrapper.blue {
  background: rgba(59, 130, 246, 0.08);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.school-icon-wrapper.purple {
  background: rgba(139, 92, 246, 0.08);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.15);
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.school-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary, #111);
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.badge-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.type-badge {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
}

.type-badge.blue {
  background: rgba(59, 130, 246, 0.12);
  color: #2563eb;
}

.type-badge.purple {
  background: rgba(139, 92, 246, 0.12);
  color: #7c3aed;
}

.tag-badge {
  font-size: 0.72rem;
  color: var(--text-secondary, #777);
  background: rgba(0, 0, 0, 0.04);
  padding: 2px 8px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
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
  margin: 0 0 0.6rem 0;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.majors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.major-chip {
  font-size: 0.76rem;
  font-weight: 550;
  color: var(--text-primary, #333);
  background: #f4f4f6;
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease;
}

.school-card:hover .major-chip {
  background: #fff;
  border-color: rgba(0, 0, 0, 0.06);
}

.partnership-text {
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

.school-card:hover .partnership-text {
  background: rgba(0, 0, 0, 0.02);
  border-left-color: var(--text-primary, #111);
}

/* Salesperson styling */
.salesperson-row {
  margin-bottom: 1rem;
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

/* Stats Footer */
.card-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats-icon-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary, #666);
}

.stats-label {
  font-size: 0.8rem;
  font-weight: 500;
}

.stats-numbers {
  display: flex;
  gap: 16px;
}

.stats-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.stats-item .num {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary, #111);
}

.stats-item .label {
  font-size: 0.7rem;
  color: var(--text-secondary, #888);
}

/* Transition & Animations */
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
