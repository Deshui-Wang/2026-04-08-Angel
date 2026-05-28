<script setup>
import { ref } from 'vue'
import { User, Activity, Clock, FileText, School, Building2, UserCheck } from 'lucide-vue-next'
import { cEndUsers } from '../../data/marketData'

// 颜色映射生成器，为不同的用户头像生成独特的极光渐变
const getAvatarStyle = (seed) => {
  const styles = {
    zhang: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
    li: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    wang: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)',
    zhao: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    liu: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
  }
  return { background: styles[seed] || 'linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)' }
}

const getStatusColor = (status) => {
  if (status === '高频') return '#10b981' // Green
  if (status === '活跃') return '#3b82f6' // Blue
  return '#f59e0b' // Amber
}
</script>

<template>
  <div class="tab-content-wrapper">
    <!-- User Grid -->
    <div class="user-grid">
      <div 
        v-for="user in cEndUsers" 
        :key="user.id" 
        class="user-card"
      >
        <!-- Top Profile Info -->
        <div class="profile-header">
          <div class="avatar-wrapper" :style="getAvatarStyle(user.avatarSeed)">
            {{ user.name.charAt(0) }}
          </div>
          <div class="profile-meta">
            <div class="name-row">
              <h3 class="user-name">{{ user.name }}</h3>
              <span class="status-dot-wrapper">
                <span class="status-dot" :style="{ backgroundColor: getStatusColor(user.usageStats.status) }"></span>
                <span class="status-text">{{ user.usageStats.status }}</span>
              </span>
            </div>
            <span class="identity-badge">{{ user.identity }}</span>
          </div>
        </div>

        <div class="card-divider"></div>

        <!-- Affiliation Info -->
        <div class="section-container">
          <h4 class="section-title">所属组织归属</h4>
          
          <div v-if="user.affiliation.type === 'school'" class="affiliation-box school">
            <div class="aff-icon">
              <School :size="16" />
            </div>
            <div class="aff-info">
              <span class="aff-name">{{ user.affiliation.name }}</span>
              <span class="aff-detail">{{ user.affiliation.detail }}</span>
            </div>
            <span class="aff-tag school">教育机构成员</span>
          </div>

          <div v-else-if="user.affiliation.type === 'enterprise'" class="affiliation-box enterprise">
            <div class="aff-icon">
              <Building2 :size="16" />
            </div>
            <div class="aff-info">
              <span class="aff-name">{{ user.affiliation.name }}</span>
              <span class="aff-detail">{{ user.affiliation.detail }}</span>
            </div>
            <span class="aff-tag enterprise">企业组织成员</span>
          </div>

          <div v-else class="affiliation-box independent">
            <div class="aff-icon">
              <UserCheck :size="16" />
            </div>
            <div class="aff-info">
              <span class="aff-name">{{ user.affiliation.name }}</span>
              <span class="aff-detail">{{ user.affiliation.detail }}</span>
            </div>
            <span class="aff-tag independent">C端独立用户</span>
          </div>
        </div>

        <!-- Apps Usage Section -->
        <div class="section-container">
          <h4 class="section-title">重点使用的应用功能</h4>
          <div class="apps-list">
            <span v-for="app in user.preferredApps" :key="app" class="app-chip">
              {{ app }}
            </span>
          </div>
        </div>

        <div class="card-divider"></div>

        <!-- Usage Statistics Panel -->
        <div class="stats-dashboard">
          <div class="dashboard-item">
            <Clock :size="14" class="stat-icon" />
            <div class="stat-meta">
              <span class="num">{{ user.usageStats.weeklyActiveHours }}h</span>
              <span class="lbl">周活跃时长</span>
            </div>
          </div>
          
          <div class="dashboard-item">
            <FileText :size="14" class="stat-icon" />
            <div class="stat-meta">
              <span class="num">{{ user.usageStats.docGeneratedCount }}次</span>
              <span class="lbl">应用创作数</span>
            </div>
          </div>

          <div class="dashboard-item">
            <Activity :size="14" class="stat-icon" />
            <div class="stat-meta">
              <span class="num">{{ user.usageStats.lastActive }}</span>
              <span class="lbl">最近在线</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-content-wrapper {
  animation: fadeIn 0.4s ease-out;
}

/* User Grid */
.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
}

.user-card {
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

.user-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 4px 8px rgba(0,0,0,0.02),
    0 12px 30px rgba(0,0,0,0.06);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(0, 0, 0, 0.1);
}

/* Profile Header */
.profile-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 1.2rem;
}

.avatar-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 650;
  color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.profile-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary, #111);
  margin: 0;
  letter-spacing: -0.01em;
}

.status-dot-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.status-text {
  font-size: 0.72rem;
  font-weight: 550;
  color: var(--text-secondary, #666);
}

.identity-badge {
  font-size: 0.76rem;
  color: var(--text-secondary, #777);
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
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary, #888);
  margin: 0 0 0.6rem 0;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* Affiliation Box */
.affiliation-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.affiliation-box.school {
  background: rgba(59, 130, 246, 0.04);
  border-color: rgba(59, 130, 246, 0.08);
}

.affiliation-box.enterprise {
  background: rgba(139, 92, 246, 0.04);
  border-color: rgba(139, 92, 246, 0.08);
}

.affiliation-box.independent {
  background: rgba(16, 185, 129, 0.04);
  border-color: rgba(16, 185, 129, 0.08);
}

.aff-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.03);
}

.school .aff-icon {
  color: #3b82f6;
}

.enterprise .aff-icon {
  color: #8b5cf6;
}

.independent .aff-icon {
  color: #10b981;
}

.aff-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 60%;
}

.aff-name {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-primary, #222);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.aff-detail {
  font-size: 0.72rem;
  color: var(--text-secondary, #777);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.aff-tag {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: auto;
}

.aff-tag.school {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
}

.aff-tag.enterprise {
  background: rgba(139, 92, 246, 0.1);
  color: #7c3aed;
}

.aff-tag.independent {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

/* App Preference Chips */
.apps-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.app-chip {
  font-size: 0.76rem;
  font-weight: 550;
  color: var(--text-primary, #333);
  background: #f4f4f6;
  border: 1px solid rgba(0, 0, 0, 0.02);
  padding: 4px 10px;
  border-radius: 8px;
  transition: all 0.25s ease;
}

.user-card:hover .app-chip {
  background: #fff;
  border-color: rgba(0, 0, 0, 0.06);
}

/* Usage Statistics Dashboard */
.stats-dashboard {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 8px;
}

.dashboard-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.stat-icon {
  color: var(--text-secondary, #888);
  flex-shrink: 0;
}

.stat-meta {
  display: flex;
  flex-direction: column;
}

.dashboard-item .num {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-primary, #111);
}

.dashboard-item .lbl {
  font-size: 0.65rem;
  color: var(--text-secondary, #888);
  margin-top: -1px;
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
