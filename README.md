# Chat With Me - 表达疑惑

一个连接用户和我的问答平台

## 🌟 产品特色

- 💬 **真人解答**: 区别于 AI，由专业人士提供一对一解答
- 🎯 **专业定制**: 根据您的具体情况提供个性化答案
- 💰 **透明定价**: 固定价格，无隐藏收费
- ✨ **优质服务**: 不满意可以追问和沟通

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **数据库**: MongoDB
- **样式**: TailwindCSS
- **认证**: NextAuth.js
- **代码规范**: ESLint + Prettier

## 🚀 本地开发

1. 克隆项目

```bash
git clone https://github.com/your-username/chat-with-me.git
cd chat-with-me
```

2. 安装依赖

```bash
pnpm install
```

3. 配置环境变量

```bash
cp .env.example .env.local
```

4. 启动开发服务器

```bash
pnpm dev
```

## ⚙️ 环境变量

```env
MONGODB_URI=mongodb://localhost:27017/qa-system
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

## 📁 项目结构

```
chat-with-me/
├── app/                    # App Router 目录
│   ├── page.tsx           # 首页
│   ├── ask/               # 提问模块
│   └── admin/             # 管理后台
├── components/            # 公共组件
├── lib/                   # 工具函数
├── types/                 # 类型定义
└── api/                   # API 路由
```

## 🤝 参与贡献

1. Fork 本仓库
2. 创建新分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 作者

- 作者名字 - [@yayxs](https://github.com/yayxs)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！
