'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Tanka {
  id: number
  content: string
  author: string
}

export default function Received() {
  const [receivedTanka, setReceivedTanka] = useState<Tanka | null>(null)

  useEffect(() => {
    const fetchRandomTanka = async () => {
      try {
        const response = await fetch('http://localhost:8000/tanka/random')
        if (response.ok) {
          const data = await response.json()
          setReceivedTanka(data)
        } else {
          console.error('Failed to fetch random tanka')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchRandomTanka()
  }, [])

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900">受信した短歌</h1>
        <Link href="/" className="mt-2 inline-block text-indigo-600 hover:text-indigo-800">
          ホームに戻る
        </Link>
      </div>
      {receivedTanka ? (
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">作者</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{receivedTanka.author}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">短歌</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{receivedTanka.content}</dd>
            </div>
          </dl>
        </div>
      ) : (
        <p className="px-4 py-5 sm:px-6 text-sm text-gray-500">まだ受信した短歌はありません。</p>
      )}
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <Link
          href="/reply"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          返歌を作成する
        </Link>
      </div>
    </div>
  )
}

