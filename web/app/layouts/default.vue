<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const route = useRoute()

const links = [
  { label: '概览', icon: 'i-lucide-layout-dashboard', to: '/' },
  { label: '岗位列表', icon: 'i-lucide-briefcase', to: '/jobs' },
  { label: '数据分析', icon: 'i-lucide-bar-chart-3', to: '/analytics' },
  { label: '爬虫任务', icon: 'i-lucide-spider', to: '/spider' },
  { label: '系统设置', icon: 'i-lucide-settings', to: '/settings' }
]

const { isNotificationsSlideoverOpen } = useDashboard()

const userMenuItems = [[{
  label: '个人资料',
  icon: 'i-lucide-user',
  to: '/settings'
}, {
  label: '爬虫配置',
  icon: 'i-lucide-cog',
  to: '/spider'
}]] satisfies DropdownMenuItem[][]

const title = computed(() => {
  const map: Record<string, string> = {
    '/': '概览',
    '/jobs': '岗位列表',
    '/analytics': '数据分析',
    '/spider': '爬虫任务',
    '/settings': '系统设置'
  }
  return map[route.path] || 'Boss 岗位统计'
})
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      :links="links"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #header>
        <div class="flex items-center gap-2 px-2 py-1">
          <div class="size-8 rounded bg-primary flex items-center justify-center text-white font-bold">
            B
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-semibold">Boss 岗位统计</span>
            <span class="text-xs text-muted">招聘数据分析</span>
          </div>
        </div>
      </template>

      <template #footer>
        <UDropdownMenu :items="userMenuItems">
          <UButton
            color="neutral"
            variant="ghost"
            class="w-full justify-start"
            icon="i-lucide-user-circle"
          >
            <div class="flex flex-col items-start">
              <span class="text-sm">操作员</span>
              <span class="text-xs text-muted">admin@boss.local</span>
            </div>
          </UButton>
        </UDropdownMenu>
      </template>
    </UDashboardSidebar>

    <UDashboardPanel :ui="{ root: 'min-h-svh' }">
      <template #header>
        <UDashboardNavbar :title="title">
          <template #leading>
            <UDashboardSidebarCollapse />
          </template>
          <template #right>
            <UTooltip text="通知">
              <UButton
                color="neutral"
                variant="ghost"
                square
                @click="isNotificationsSlideoverOpen = true"
              >
                <UChip color="error" inset>
                  <UIcon name="i-lucide-bell" class="size-5" />
                </UChip>
              </UButton>
            </UTooltip>
            <ColorModeButton />
          </template>
        </UDashboardNavbar>
      </template>

      <template #body>
        <slot />
      </template>
    </UDashboardPanel>

    <UDashboardSlideover
      v-model:open="isNotificationsSlideoverOpen"
      title="爬虫通知"
    >
      <template #body>
        <div class="p-4 space-y-3">
          <UAlert
            color="success"
            variant="subtle"
            title="爬取任务完成"
            description="Java 岗位抓取完成，新增 1,234 条记录"
            icon="i-lucide-check-circle"
          />
          <UAlert
            color="warning"
            variant="subtle"
            title="反爬触发"
            description="已自动降速，请关注"
            icon="i-lucide-alert-triangle"
          />
        </div>
      </template>
    </UDashboardSlideover>
  </UDashboardGroup>
</template>
