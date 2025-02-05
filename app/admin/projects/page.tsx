import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import clientPromise from '@/lib/db'

export default async function AdminProjectsPage() {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    redirect('/')
  }

  const client = await clientPromise
  const projects = await client
    .db('qa-system')
    .collection('questions')
    .find({ type: 'project' })
    .sort({ createdAt: -1 })
    .toArray()

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">项目管理</h1>
      <div className="grid gap-4">
        {projects.map(project => (
          <div key={project._id} className="border p-4 rounded">
            <h2 className="text-xl">{project.title}</h2>
            <p className="text-gray-600">{project.content}</p>
            <div className="mt-2">
              <span className="mr-4">预算：￥{project.budget}</span>
              <span>时间要求：{project.timeline}</span>
            </div>
            {project.status === 'pending' && (
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">提交报价</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded">拒绝项目</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
