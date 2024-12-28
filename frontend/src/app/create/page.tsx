'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Create() {
  const [tanka, setTanka] = useState('')
  const [author, setAuthor] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/tanka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: tanka, author }),
      })
      if (response.ok) {
        // 送信成功時にトップページへリダイレクト
        router.push('/')
      } else {
        console.error('Failed to submit tanka')
        alert('短歌の送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('エラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900">短歌を作成</h1>
        <Link href="/" className="mt-2 inline-block text-indigo-600 hover:text-indigo-800">
          ホームに戻る
        </Link>
      </div>
      <div className="border-t border-gray-200">
        {isSubmitted ? (
          <div className="px-4 py-5 sm:p-6">
            <p className="text-green-600 font-semibold">短歌が正常に送信されました！</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              新しい短歌を作成
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
            <div>
              <label htmlFor="tanka" className="block text-sm font-medium text-gray-700">
                あなたの短歌
              </label>
              <div className="mt-1">
                <textarea
                  id="tanka"
                  name="tanka"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="ここに短歌を入力してください"
                  value={tanka}
                  onChange={(e) => setTanka(e.target.value)}
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

