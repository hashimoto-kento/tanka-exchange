import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">短歌交換へようこそ</h1>
        <p className="mb-8">
          短歌を作成して見知らぬユーザーと交換しましょう。あなたの言葉が誰かの心に響くかもしれません。
        </p>
        <Link
          href="/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          短歌を作成する
        </Link>
      </div>
    </main>
  )
}

