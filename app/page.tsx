import { Question } from '@/types/question'
import clientPromise from '@/lib/db'
import Link from 'next/link'

export default async function Home() {
  const client = await clientPromise
  const questions = (await client
    .db('qa-system')
    .collection('questions')
    .find({
      status: 'answered',
      isPaid: true,
    })
    .sort({ answeredAt: -1 })
    .limit(10)
    .toArray()) as unknown as Question[]

  return (
    <main className="container mx-auto px-4">
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold">最新问答</h1>
        <Link href="/ask" className="bg-blue-500 text-white px-4 py-2 rounded">
          提出问题
        </Link>
      </div>

      <div className="grid gap-4">
        {questions.map((question: Question) => (
          <div key={question._id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{question.title}</h2>
            <p className="text-gray-600 mt-2">{question.content}</p>
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <h3 className="font-bold">回答：</h3>
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
