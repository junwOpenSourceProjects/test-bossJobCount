# SPEC.md - test-boss_job_count

## 1. Project Overview

- **Project Name**: test-boss_job_count
- **Project Type**: npm (NestJS) Project
- **Description**: boss网站爬虫，查看java岗位数量
- **Location**: /Users/junw/Documents/GitHub/test-boss_job_count

## 2. Build Status

**npm install: FAILED**

### npm Errors
```
Could not resolve dependency:
peer typescript@">=4.8.4 <6.0.0" from @typescript-eslint/eslint-plugin@8.57.2
Conflicting peer dependency: typescript@5.9.3
```
**Root Cause**: TypeScript version conflict between project and eslint-plugin requirements.

## 3. Project Structure

```
test-boss_job_count/
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── pnpm-lock.yaml / package-lock.json
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── entites/
│       └── Job.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── 城市代码.txt
└── node_modules/
```

## 4. Technology Stack

- TypeScript
- NestJS Framework
- TypeORM
- MySQL
- Docker

## 5. Key Features

- Boss直聘网站爬虫
- 职位数据解析
- MySQL数据存储
- Docker容器支持

## 6. README Status

- README.md: EXISTS
- SPEC.md: CREATED (this file)

## 7. Gitignore

Standard Java gitignore covering:
- Compiled class files (*.class)
- Log files (*.log)
- Package archives (*.jar, *.war, etc.)
- IDE files (.idea, .iml)
- OS files (.DS_Store)

## 8. Build Fix Suggestions

To fix npm install, either:
1. Run `npm install --legacy-peer-deps`
2. Downgrade TypeScript to 5.x in package.json
3. Or upgrade eslint dependencies to compatible versions

## 9. Database Schema

```sql
create table job
(
    id      int auto_increment primary key,
    name    varchar(30)  not null comment '职位名称',
    area    varchar(20)  not null comment '区域',
    salary  varchar(10)  not null comment '薪资范围',
    link    varchar(600) not null comment '详情页链接',
    company varchar(30) not null comment '公司名',
    `desc`  text         not null comment '职位描述'
);
```

## 10. Last Updated

2026-04-22
