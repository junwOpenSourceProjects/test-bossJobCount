<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const stats = [
  { label: '岗位总数', value: '12,847', icon: 'i-lucide-briefcase', change: '+156 今日' },
  { label: '在招公司', value: '1,243', icon: 'i-lucide-building', change: '+8 今日' },
  { label: '平均薪资', value: '28.5K', icon: 'i-lucide-trending-up', change: '+1.2K 较上周' },
  { label: '爬虫任务', value: '3/5', icon: 'i-lucide-spider', change: '运行中' }
]

const topCities = [
  { city: '北京', count: 3421, percent: 27 },
  { city: '上海', count: 3102, percent: 24 },
  { city: '深圳', count: 2587, percent: 20 },
  { city: '广州', count: 1893, percent: 15 },
  { city: '杭州', count: 1543, percent: 12 }
]
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">Boss 岗位数据总览</h1>
        <p class="text-muted mt-1">实时监控招聘市场动态</p>
      </div>
      <div class="flex gap-2">
        <UButton variant="outline" icon="i-lucide-refresh-cw">刷新数据</UButton>
        <UButton icon="i-lucide-play" color="primary">启动爬虫</UButton>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard v-for="stat in stats" :key="stat.label">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-muted">{{ stat.label }}</p>
            <p class="text-2xl font-bold mt-1">{{ stat.value }}</p>
            <p class="text-xs text-success mt-1">{{ stat.change }}</p>
          </div>
          <div class="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <UIcon :name="stat.icon" class="size-6 text-primary" />
          </div>
        </div>
      </UCard>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <UCard class="lg:col-span-2">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-semibold">城市岗位分布 TOP 5</h3>
            <UButton to="/analytics" variant="ghost" size="sm">详细分析</UButton>
          </div>
        </template>
        <div class="space-y-4">
          <div v-for="item in topCities" :key="item.city" class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="font-medium">{{ item.city }}</span>
              <span class="text-muted">{{ item.count.toLocaleString() }} ({{ item.percent }}%)</span>
            </div>
            <UProgress :value="item.percent" :max="100" />
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="font-semibold">快捷操作</h3>
        </template>
        <div class="space-y-2">
          <UButton to="/jobs" variant="outline" class="w-full justify-start" icon="i-lucide-list">
            浏览岗位列表
          </UButton>
          <UButton to="/analytics" variant="outline" class="w-full justify-start" icon="i-lucide-pie-chart">
            数据分析
          </UButton>
          <UButton to="/spider" variant="outline" class="w-full justify-start" icon="i-lucide-spider">
            爬虫管理
          </UButton>
          <UButton variant="outline" class="w-full justify-start" icon="i-lucide-download">
            导出报表
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
