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
    title: 'E-Commerce Store',
    description: '楽天APIを活用したECサイト。',
    tech: ['Next.js', 'React', 'Rakuten API'],
    img: '/images/ecommerce-store.png',
    link: '/projects/2',
  },
  {
    id: '3',
    title: 'Blog Generator',
    description: 'ChatGPTを活用した自動記事投稿ブログ。',
    tech: ['Next.js', 'OpenAI API', 'Vercel'],
    img: '/images/blog-generator.png',
    link: '/projects/3',
  },
]
