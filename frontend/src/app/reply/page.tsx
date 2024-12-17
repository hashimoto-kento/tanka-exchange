'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Reply() {
  const [reply, setReply] = useState('')
  const [author, setAuthor] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tanka_id: 1, content: reply, author }), // Note: tanka_id is hardcoded for simplicity
      })
      if (response.ok) {
        setReply('')
        setAuthor('')
        setIsSubmitted(true)
      } else {
        console.error('Failed to submit reply')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900">返歌を作成</h1>
        <Link href="/" className="mt-2 inline-block text-indigo-600 hover:text-indigo-800">
          ホームに戻る
        </Link>
      </div>
      <div className="border-t border-gray-200">
        {isSubmitted ? (
          <div className="px-4 py-5 sm:p-6">
            <p className="text-green-600 font-semibold">返歌が正常に送信されました！</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              新しい返歌を作成
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
            <div>
              <label htmlFor="reply" className="block text-sm font-medium text-gray-700">
                あなたの返歌
              </label>
              <div className="mt-1">
                <textarea
                  id="reply"
                  name="reply"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="ここに返歌を入力してください"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                作者名
              </label>
              <input
                type="text"
                id="author"
                name="author"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                送信
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

