<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const jobs = [
  { id: 1, title: 'Java 高级开发工程师', company: '字节跳动', city: '北京', salary: '35-55K', experience: '5-10年', education: '本科', status: '招聘中' },
  { id: 2, title: 'Java 架构师', company: '阿里巴巴', city: '杭州', salary: '50-80K', experience: '8年以上', education: '本科', status: '招聘中' },
  { id: 3, title: '后端开发 (Java)', company: '腾讯', city: '深圳', salary: '30-50K', experience: '3-5年', education: '本科', status: '招聘中' },
  { id: 4, title: 'Java 开发实习生', company: '美团', city: '北京', salary: '300-400/天', experience: '在校生', education: '本科', status: '招聘中' },
  { id: 5, title: '高级 Java 工程师', company: '京东', city: '北京', salary: '40-65K', experience: '5-10年', education: '本科', status: '已下线' },
  { id: 6, title: 'Java 技术专家', company: '滴滴出行', city: '北京', salary: '60-90K', experience: '10年以上', education: '硕士', status: '招聘中' }
]

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: '岗位' },
  { key: 'company', label: '公司' },
  { key: 'city', label: '城市' },
  { key: 'salary', label: '薪资' },
  { key: 'experience', label: '经验' },
  { key: 'education', label: '学历' },
  { key: 'status', label: '状态' }
]

const search = ref('')
</script>

<template>
  <div class="p-6 space-y-4">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">岗位列表</h1>
        <p class="text-muted mt-1">共 {{ jobs.length }} 个岗位（数据为 mock）</p>
      </div>
      <div class="flex gap-2">
        <UButton variant="outline" icon="i-lucide-filter">高级筛选</UButton>
        <UButton variant="outline" icon="i-lucide-download">导出 CSV</UButton>
      </div>
    </div>

    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <UInput
            v-model="search"
            icon="i-lucide-search"
            placeholder="搜索岗位 / 公司 / 城市..."
            class="w-80"
          />
          <div class="flex gap-2">
            <USelectMenu
              :items="['全部城市', '北京', '上海', '深圳', '广州', '杭州']"
              placeholder="城市"
            />
            <USelectMenu
              :items="['全部', '招聘中', '已下线']"
              placeholder="状态"
            />
          </div>
        </div>
      </template>

      <UTable
        :data="jobs"
        :columns="columns"
        :search="search"
      />
    </UCard>
  </div>
</template>
