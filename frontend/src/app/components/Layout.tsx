'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                短歌交換
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/create" className={`${isActive('/create')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  短歌を作成
                </Link>
                <Link href="/received" className={`${isActive('/received')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  受信した短歌
                </Link>
                <Link href="/reply" className={`${isActive('/reply')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  返歌を作成
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

