export interface Question {
  _id: string // MongoDB 自动生成的 ID
  userId: string // 关联用户ID
  title: string // 问题标题
  content: string // 问题内容
  price: number // 问题价格
  status: 'pending' | 'answered' | 'rejected' // 问题状态
  answer?: string // 回答内容
  createdAt: Date // 提问时间
  answeredAt?: Date // 回答时间
  isPaid: boolean // 是否已支付
  paymentId?: string // 支付记录ID
}
