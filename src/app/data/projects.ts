export const projects = [
  {
    id: '1',
    title: 'Gaming Affiliate',
    description:
      'Gaming Affiliate は、楽天市場のAPIを活用してゲーミングチェア・マウス・キーボードなどのガジェットを自動取得し、価格比較や詳細情報を提供するアフィリエイトサイトです。Next.js 14 の最新技術を採用し、Vercel にデプロイすることで高速かつスケーラブルな構成を実現しました。',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'OpenAI API',
      'Rakuten API',
      'Vercel',
      'ESLint / Prettier',
    ],
    img: '/images/gaming-affiliate.png',
    link: 'https://gaming-affiliate.vercel.app/',
  },
  {
    id: '2',
    title: 'サブスク図鑑',
    description:
      '人気のサブスクリプションサービスをカテゴリ別にまとめたWebアプリ。Next.js + Tailwind CSS + TypeScript構成で開発。 カテゴリ別の動的ルーティング、詳細ページ、ナビゲーション、ESLint/Prettierによる品質管理、Vercelでデプロイ済み。',
    tech: ['Next.js', 'React', 'ESLint / Prettier'],
    img: '/images/subsc-site.png',
    link: 'https://subsc-site.vercel.app',
  },
  {
    id: '3',
    title: 'My Crypto Tool',
    description:
      '仮想通貨のポートフォリオ管理と価格アラート通知ができるWebアプリ。Next.js App Router + Tailwind CSS + TypeScript構成で開発。Googleログイン（OAuth認証）、保有資産のグラフ表示、Resendによるメール通知機能を実装。Firebaseでユーザー・資産情報を管理し、Vercelにデプロイ済み。',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Firebase', 'Resend', 'NextAuth'],
    img: '/images/my-crypto-tool.png',
    link: 'https://my-crypto-tool.vercel.app',
  },
]
