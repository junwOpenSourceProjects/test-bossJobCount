<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const cityData = [
  { city: '北京', jobs: 3421, salary: 32 },
  { city: '上海', jobs: 3102, salary: 30 },
  { city: '深圳', jobs: 2587, salary: 29 },
  { city: '广州', jobs: 1893, salary: 25 },
  { city: '杭州', jobs: 1543, salary: 28 },
  { city: '成都', jobs: 987, salary: 22 },
  { city: '南京', jobs: 765, salary: 24 }
]

const trend = [
  { date: '12-01', count: 8500 },
  { date: '12-02', count: 9120 },
  { date: '12-03', count: 9870 },
  { date: '12-04', count: 10230 },
  { date: '12-05', count: 11500 },
  { date: '12-06', count: 10890 },
  { date: '12-07', count: 12340 }
]
</script>

<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-2xl font-bold">数据分析</h1>
      <p class="text-muted mt-1">招聘市场多维度数据洞察</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <h3 class="font-semibold">城市岗位数对比</h3>
        </template>
        <div class="space-y-3">
          <div v-for="item in cityData" :key="item.city" class="space-y-1">
            <div class="flex justify-between text-sm">
              <span>{{ item.city }}</span>
              <span class="text-muted">{{ item.jobs.toLocaleString() }}</span>
            </div>
            <UProgress :value="(item.jobs / 3500) * 100" :max="100" />
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="font-semibold">近 7 日岗位增长趋势</h3>
        </template>
        <div class="space-y-3">
          <div v-for="item in trend" :key="item.date" class="space-y-1">
            <div class="flex justify-between text-sm">
              <span>{{ item.date }}</span>
              <span class="text-muted">{{ item.count.toLocaleString() }}</span>
            </div>
            <UProgress
              :value="(item.count / 13000) * 100"
              :max="100"
              :color="item.count >= 11000 ? 'success' : 'primary'"
            />
          </div>
        </div>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <h3 class="font-semibold">薪资区间分布（K/月）</h3>
      </template>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div v-for="range in ['<10', '10-20', '20-30', '30-50', '>50']" :key="range" class="text-center p-4 rounded-lg bg-elevated">
          <div class="text-2xl font-bold text-primary">
            {{ Math.floor(Math.random() * 3000) + 500 }}
          </div>
          <div class="text-sm text-muted mt-1">{{ range }}K</div>
        </div>
      </div>
    </UCard>
  </div>
</template>
