<script setup>
import { ref } from 'vue'
import { School, Building2, Users, BarChart3 } from 'lucide-vue-next'

// 导入子组件
import SchoolTab from './SchoolTab.vue'
import EnterpriseTab from './EnterpriseTab.vue'
import UserTab from './UserTab.vue'

// 默认激活的子页签：schools, enterprises, users
const activeMarketTab = ref('schools')

// 联动过滤状态：仅显示暂无销售员
const onlyNoSales = ref(false)
</script>

<template>
  <main class="market-section">
    <div class="market-container">
      
      <!-- Left Sidebar navigation -->
      <aside class="market-sidebar">
        <div class="sidebar-header">
          <BarChart3 :size="22" class="header-icon" />
          <span>市场分析</span>
        </div>
        
        <nav class="market-nav">
          <button 
            class="market-tab-btn"
            :class="{ active: activeMarketTab === 'schools' }"
            @click="activeMarketTab = 'schools'"
          >
            <School :size="18" />
            目标院校
          </button>
          
          <button 
            class="market-tab-btn"
            :class="{ active: activeMarketTab === 'enterprises' }"
            @click="activeMarketTab = 'enterprises'"
          >
            <Building2 :size="18" />
            目标企业
          </button>
          
          <button 
            class="market-tab-btn"
            :class="{ active: activeMarketTab === 'users' }"
            @click="activeMarketTab = 'users'"
          >
            <Users :size="18" />
            C端用户画像
          </button>
        </nav>
      </aside>

      <!-- Right Content Panels -->
      <section class="market-content">
        
        <!-- Tab 1: 目标院校 -->
        <div v-if="activeMarketTab === 'schools'" class="tab-pane">
          <div class="pane-header-container">
            <div class="pane-header">
              <h2 class="pane-title">目标院校市场现状</h2>
              <p class="pane-subtitle">精准把脉全国首批重点职业本科及公立双一流高校，剖析专业布局与校企深度融合生态</p>
            </div>
            
            <div class="pane-header-actions">
              <label class="no-sales-filter" :class="{ checked: onlyNoSales }">
                <input type="checkbox" v-model="onlyNoSales" />
                <span>👤 暂无销售员</span>
              </label>
            </div>
          </div>
          
          <!-- School Component -->
          <SchoolTab :onlyNoSales="onlyNoSales" />
        </div>

        <!-- Tab 2: 目标企业 -->
        <div v-if="activeMarketTab === 'enterprises'" class="tab-pane">
          <div class="pane-header-container">
            <div class="pane-header">
              <h2 class="pane-title">目标企业生态</h2>
              <p class="pane-subtitle">联合全球 ICT 巨头、人工智能龙头及工业制造龙头，共筑校企产教融合新基建</p>
            </div>

            <div class="pane-header-actions">
              <label class="no-sales-filter" :class="{ checked: onlyNoSales }">
                <input type="checkbox" v-model="onlyNoSales" />
                <span>👤 暂无销售员</span>
              </label>
            </div>
          </div>
          
          <!-- Enterprise Component -->
          <EnterpriseTab :onlyNoSales="onlyNoSales" />
        </div>

        <!-- Tab 3: C端用户 -->
        <div v-if="activeMarketTab === 'users'" class="tab-pane">
          <div class="pane-header-container">
            <div class="pane-header">
              <h2 class="pane-title">C端活跃用户偏好画像</h2>
              <p class="pane-subtitle">洞察高校名师、企业教研专家及独立创作者的真实高频应用习惯，驱动产品自传播增长</p>
            </div>
          </div>
          
          <!-- User Component -->
          <UserTab />
        </div>

      </section>

    </div>
  </main>
</template>

<style scoped>
.market-section {
  margin-top: 80px;
  padding: 2rem;
  min-height: calc(100vh - 80px);
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.market-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  max-width: 1450px;
  margin: 0 auto;
  align-items: start;
}

/* Left Sidebar */
.market-sidebar {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.01), 
    0 20px 40px rgba(0,0,0,0.02);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 100px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.header-icon {
  color: var(--text-primary, #111);
}

.market-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.market-tab-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 18px;
  border: none;
  background: transparent;
  border-radius: 14px;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
}

.market-tab-btn:hover {
  background: #f1f5f9;
  color: #0f172a;
}

.market-tab-btn.active {
  background: var(--text-primary, #111);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Right Content Panels */
.market-content {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 2.2rem;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.01), 
    0 20px 40px rgba(0,0,0,0.02);
  min-height: 500px;
}

.pane-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.2rem;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  padding-bottom: 1.2rem;
}

.pane-header {
  margin-bottom: 0;
  flex: 1;
}

.pane-title {
  font-size: 1.45rem;
  font-weight: 750;
  color: #0f172a;
  margin: 0 0 0.4rem 0;
  letter-spacing: -0.02em;
}

.pane-subtitle {
  font-size: 0.92rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* Custom premium checkbox label */
.no-sales-filter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(240, 240, 243, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 8px 18px;
  border-radius: 98px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 0.88rem;
  font-weight: 600;
  color: #64748b;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.02);
}

.no-sales-filter:hover {
  background: rgba(225, 225, 230, 0.9);
  color: var(--text-primary, #111);
}

.no-sales-filter.checked {
  background: var(--text-primary, #111);
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.no-sales-filter input[type="checkbox"] {
  cursor: pointer;
  accent-color: var(--text-primary, #111);
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.no-sales-filter.checked input[type="checkbox"] {
  accent-color: #ffffff;
}

@media (max-width: 992px) {
  .market-container {
    grid-template-columns: 1fr;
  }
  
  .market-sidebar {
    position: static;
    margin-bottom: 1.5rem;
  }
  
  .pane-header-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .pane-header-actions {
    align-self: flex-end;
  }
}
</style>
