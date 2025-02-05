'use client'

import { useState } from 'react'
import { API } from '@/api'

export default function AskPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 固定价格，比如50元每个问题
  const QUESTION_PRICE = 50

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 1. 创建问题
      const response = await fetch(API.questions.create, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          price: QUESTION_PRICE,
        }),
      })

      if (!response.ok) throw new Error('提交失败')

      const question = await response.json()

      // 2. 创建支付订单
      const paymentResponse = await fetch(API.payment.create, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: question._id,
          amount: QUESTION_PRICE,
        }),
      })

      if (!paymentResponse.ok) throw new Error('创建支付订单失败')

      const { paymentUrl } = await paymentResponse.json()

      // 3. 跳转到支付页面
      window.location.href = paymentUrl
    } catch (error) {
      console.error('提交问题失败:', error)
      alert('提交失败，请重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">提出问题</h1>

      <div className="mb-4">
        <label className="block mb-2">问题标题</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">问题详情</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full border p-2 rounded h-32"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="mb-4 p-4 bg-gray-50 rounded">
        <p className="text-lg font-bold">费用说明</p>
        <p>问题咨询费用：￥{QUESTION_PRICE}</p>
        <p className="text-sm text-gray-600 mt-2">
          支付完成后，我们会尽快为您解答问题（通常在24小时内）
        </p>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? '提交中...' : '支付并提交问题'}
      </button>
    </form>
  )
}
