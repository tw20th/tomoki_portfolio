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
        仮想通貨管理やAI連携など、実用性とモダンな技術を取り入れたWebアプリを開発しています。
        このポートフォリオでは、Next.jsやTypeScript、Tailwind
        CSSなどの最新フロントエンド技術に加え、FirebaseやResendなどのバックエンド・通知サービス、そしてAIの活用も取り入れたアプリケーションを紹介しています。
        ユーザー認証・データ管理・通知連携といった、実サービスにも応用できる仕組みを自分で設計・開発・デプロイまで一貫して行っており、見た目だけでなく、UXやセキュリティ、拡張性も意識しています。
        また、一部のプロジェクトでは AI（ChatGPT
        APIなど）を活用しており、ユーザーが自然な形で情報を取得できるような体験も実装しています。
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
