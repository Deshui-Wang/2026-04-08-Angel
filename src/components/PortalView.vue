<script setup>
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { categories, productsData } from '../data/constants'

const activeCategory = ref('基座系统')
const activeId = ref(null)

const emit = defineEmits(['navigate'])

const handleNavigate = (item) => {
  emit('navigate', item)
}
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="glow-text">
          科研创新与智能教育的<br/>
          <span class="gradient-text">数字超级引擎</span>
        </h1>
        <p class="hero-subtext">
          汇聚全维数据体系，打造一体化生成式工作流，解锁产学研的高效协作与深度创新。
        </p>
      </div>
    </section>

    <section class="products-section">
      <div class="tabs-container">
        <div class="category-tabs">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="tab-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
      
      <div class="products-list">
        <div 
          v-for="item in productsData[activeCategory]" 
          :key="item.id"
          class="product-card"
          @mouseenter="activeId = item.id"
          @mouseleave="activeId = null"
          @click="handleNavigate(item)"
        >
          <div class="card-glow" :style="{ background: `radial-gradient(circle at right, ${item.color}33, transparent 70%)`, opacity: activeId === item.id ? 1 : 0 }"></div>
          
          <div class="card-content">
            <div class="icon-wrapper" :style="{ backgroundColor: `${item.color}1A`, color: item.color }">
              <img v-if="item.iconUrl" :src="item.iconUrl" :alt="item.title" class="custom-icon" />
              <component v-else :is="item.icon" :size="32" />
            </div>
            
            <div class="product-info">
              <h3 class="product-title">{{ item.title }}</h3>
              <p class="product-desc">{{ item.description }}</p>
            </div>

            <div class="product-meta">
              <span class="meta-tag" :style="{ backgroundColor: item.color }">
                <span class="dot"></span>
                {{ item.stats }}
              </span>
              <el-button 
                round 
                class="enter-btn"
                :class="{ 'is-active': activeId === item.id }"
                :style="activeId === item.id ? { backgroundColor: item.color, borderColor: item.color, color: '#fff' } : {}"
                @click.stop="handleNavigate(item)"
              >
                进入产品
                <ArrowRight class="btn-icon" :size="16" />
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  margin-top: 80px;
  padding: 5rem 2rem 3rem 2rem;
  text-align: center;
  position: relative;
}

.glow-text {
  font-size: 3.8rem;
  font-weight: 700;
  line-height: 1.05;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
  letter-spacing: -0.015em;
}

.gradient-text {
  color: var(--primary);
  background: none;
  -webkit-text-fill-color: initial;
}

.hero-subtext {
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0 auto;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

/* Products Section */
.products-section {
  margin: 0 auto 6rem auto;
  padding: 0 2rem;
  width: 100%;
}

/* Tabs Container */
.tabs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
  width: 100%;
  position: relative;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #f1f1f2;
  padding: 6px;
  border-radius: 98px;
  width: fit-content;
}

.tab-btn {
  background: transparent;
  border: none;
  border-radius: 98px;
  padding: 10px 24px;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  letter-spacing: -0.01em;
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  background: #fff;
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
}

/* Product Cards */
.products-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  position: relative;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 2.2rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.01), 0 10px 30px rgba(0,0,0,0.02);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0,0,0,0.06), 0 4px 10px rgba(0,0,0,0.01);
  border-color: rgba(0,0,0,0.08);
}

.card-glow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.card-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.custom-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.product-card:hover .icon-wrapper {
  transform: scale(1.05);
}

.product-info {
  margin-bottom: 2.5rem;
  flex-grow: 1;
}

.product-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.8rem 0;
  letter-spacing: -0.01em;
}

.product-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  padding-top: 1.5rem;
}

.meta-tag {
  font-size: 0.8rem;
  font-weight: 500;
  color: #fff;
  padding: 4px 12px;
  border-radius: 98px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.meta-tag .dot {
  width: 5px;
  height: 5px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
}

.enter-btn {
  border-radius: 98px !important;
  font-size: 0.8rem !important;
  padding: 8px 16px !important;
  border: 1px solid rgba(0,0,0,0.1) !important;
  color: var(--text-primary) !important;
  background: transparent !important;
  transition: all 0.3s ease !important;
}

.enter-btn.is-active {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.btn-icon {
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.product-card:hover .btn-icon {
  transform: translateX(3px);
}
</style>
