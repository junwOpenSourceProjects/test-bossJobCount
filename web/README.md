# Boss 岗位统计 - Web 管理后台

基于 Nuxt 4 + @nuxt/ui v4 的 Boss 直聘岗位数据分析后台，作为 NestJS 后端（根目录）的可视化前端。

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Nuxt | 4.4.6 | Vue 全栈框架 |
| @nuxt/ui | 4.7.0 | 现代 UI 组件库 |
| Vue | 3.5.33 | 渐进式 JS 框架 |
| ECharts | 6.0.0 | 数据可视化 |
| Tailwind CSS | 4.x | 原子化 CSS |

## 与后端项目关系

| 路径 | 技术栈 | 用途 |
|------|--------|------|
| `../src/` | NestJS + TypeORM + MySQL | 业务后端 API（端口 3000） |
| `../src/entites/Job.ts` | TypeORM Entity | job 职位数据表 |
| `./` (web/) | Nuxt 4 + @nuxt/ui | 数据可视化与管理后台 |

## 快速开始

```bash
# 1. 启动后端 (终端 1)
cd ..
pnpm install
pnpm start:dev          # 监听 3000

# 2. 启动管理后台 (终端 2)
cd web
pnpm install
pnpm dev                # 监听 3001 (避免与后端冲突)
```

> 注意：在 `web/nuxt.config.ts` 的 `devServer.port` 显式指定 3001，避免与 NestJS 后端 (3000) 冲突。

## 后端 API 代理

当前版本为前端 mock 数据，**未连接**后端。后续可：

1. 在 `web/server/api/` 中添加 Nuxt Nitro 代理端点
2. 通过 `$fetch('/api/jobs')` 调用后端 `http://localhost:3000`
3. 或在 `nuxt.config.ts` 中配置 `nitro: { routeRules: { '/api/**': { proxy: 'http://localhost:3000/**' } } }`

## 目录结构

```
web/
├── app/
│   ├── app.vue                 # 根组件
│   ├── app.config.ts           # UI 配置
│   ├── assets/css/main.css     # 全局样式
│   ├── composables/
│   │   └── useDashboard.ts     # 仪表盘状态
│   ├── layouts/
│   │   └── default.vue         # 默认布局 (侧边栏 + 顶部)
│   └── pages/
│       ├── index.vue           # 首页 (概览)
│       ├── jobs.vue            # 岗位列表
│       └── analytics.vue       # 数据分析
├── public/                     # 静态资源
├── nuxt.config.ts
├── package.json
└── README.md
```

## 设计规范

- **主色**: `#1456f0` (企业蓝)
- **字体**: `'等线','DengXian','Microsoft YaHei',sans-serif`
- **主题**: 支持浅色 / 深色 / 跟随系统

## 当前功能（占位实现）

- ✅ 概览首页 (统计卡片 + 城市分布 + 快捷操作)
- ✅ 岗位列表 (搜索、筛选、表格)
- ✅ 数据分析 (城市对比、增长趋势、薪资分布)
- 🚧 爬虫任务管理 (规划中)
- 🚧 系统设置 (规划中)

## 后续计划

- 接入 NestJS 后端 API（替换 mock 数据）
- 使用 ECharts 替换占位进度条图表
- 爬虫任务状态实时推送 (WebSocket)
- 报表导出 (PDF / Excel)
- 多角色权限系统
