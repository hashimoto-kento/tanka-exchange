'use client'

import React from 'react'
import { useState } from 'react'

export default function Create() {
  const [tanka, setTanka] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで短歌をサーバーに送信する処理を実装
    console.log('Submitted tanka:', tanka)
    setTanka('')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">短歌を作成</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <textarea
                    id="tanka"
                    name="tanka"
                    className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="ここに短歌を入力してください"
                    value={tanka}
                    onChange={(e) => setTanka(e.target.value)}
                  />
                  <label htmlFor="tanka" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                    あなたの短歌
                  </label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">送信</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
