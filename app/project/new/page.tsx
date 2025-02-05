'use client'

import { useState } from 'react'
import { API } from '@/api'

export default function NewProjectPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [budget, setBudget] = useState<number>()
  const [timeline, setTimeline] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 先上传文件
    const attachments = await Promise.all(
      files.map(async file => {
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch(API.upload.attachment, {
          method: 'POST',
          body: formData,
        })
        return res.json()
      })
    )

    // 创建项目
    const response = await fetch(API.projects.create, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        type: 'project',
        budget,
        timeline,
        attachments,
      }),
    })

    if (response.ok) {
      // 提交成功，重定向到项目详情页
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">提交项目需求</h1>

      <div className="mb-4">
        <label className="block mb-2">项目名称</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">项目详情</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full border p-2 rounded h-32"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">预算范围（元）</label>
        <input
          type="number"
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">时间要求</label>
        <input
          type="text"
          value={timeline}
          onChange={e => setTimeline(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="例如：1个月内完成"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">上传附件</label>
        <input
          type="file"
          multiple
          onChange={e => setFiles(Array.from(e.target.files || []))}
          className="w-full border p-2 rounded"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        提交项目
      </button>
    </form>
  )
}
