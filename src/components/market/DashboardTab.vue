<script setup>
// 导入分析看板的三大模块原子组件
import DashboardMetrics from './DashboardMetrics.vue'
import DashboardDemand from './DashboardDemand.vue'
import DashboardRegion from './DashboardRegion.vue'
</script>

<template>
  <div class="dashboard-tab-container">
    <!-- Part 1: Macro Metrics cards -->
    <DashboardMetrics />

    <!-- Part 2: AI Tool Demands explorer -->
    <DashboardDemand />

    <!-- Part 3: National Regional share deck -->
    <DashboardRegion />
  </div>
</template>

<style scoped>
.dashboard-tab-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
