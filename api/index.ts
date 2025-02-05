export const API = {
  // ... 原有的API

  // 项目相关
  projects: {
    list: '/api/projects', // GET
    create: '/api/projects', // POST
    detail: '/api/projects/:id', // GET
    quote: '/api/projects/:id/quote', // POST - 报价
    accept: '/api/projects/:id/accept', // POST - 接受报价
    reject: '/api/projects/:id/reject', // POST - 拒绝报价
    update: '/api/projects/:id/status', // PUT - 更新项目状态
  },

  // 文件上传
  upload: {
    attachment: '/api/upload/attachment', // POST
  },

  questions: {
    list: '/api/questions',
    create: '/api/questions',
    detail: '/api/questions/:id',
    answer: '/api/questions/:id/answer',
  },

  payment: {
    create: '/api/payment/create',
    callback: '/api/payment/callback',
  },
}
