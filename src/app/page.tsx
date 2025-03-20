'use client'

import { motion } from 'framer-motion'
import Button from '@/app/components/Button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6">
      {/* アニメーション付きタイトル */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Tomoki Watanabe
      </motion.h1>

      {/* キャッチフレーズ */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-lg md:text-xl"
      >
        Creative Developer | Building the Future
      </motion.p>

      {/* 自己紹介 */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 text-gray-200 max-w-2xl"
      >
        Web開発が大好きなフロントエンドエンジニア。Next.js, TypeScript, Tailwind
        CSSを活用して、美しく使いやすいUIを作るのが得意です。
      </motion.p>

      {/* ボタン（プロジェクトページへ） */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-6"
      >
        <Button text="プロジェクトを見る" href="/projects" />
      </motion.div>
    </div>
  )
}
