'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

const projects = [
  {
    id: '1',
    title: 'My Portfolio',
    description: 'Next.js + TypeScriptで作成したポートフォリオサイト。',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/tomoki/portfolio',
    demo: 'https://tomoki-portfolio.com',
  },
  {
    id: '2',
    title: 'E-Commerce Store',
    description: '楽天APIを活用したECサイト。',
    tech: ['Next.js', 'React', 'Rakuten API'],
    github: 'https://github.com/tomoki/ecommerce',
    demo: 'https://tomoki-ecommerce.com',
  },
  {
    id: '3',
    title: 'Blog Generator',
    description: 'ChatGPTを活用した自動記事投稿ブログ。',
    tech: ['Next.js', 'OpenAI API', 'Vercel'],
    github: 'https://github.com/tomoki/blog-generator',
    demo: 'https://tomoki-blog.com',
  },
]

export default function ProjectDetail() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return <p className="text-center text-red-500 text-lg">プロジェクトが見つかりません。</p>
  }

  return (
    <div className="container mx-auto px-4 py-10 text-center max-w-2xl">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-gray-700 mt-4">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {project.tech.map((tech) => (
          <span key={tech} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 space-x-4">
        <a
          href={project.github}
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-400"
        >
          デモサイト
        </a>
      </div>

      <Link href="/projects" className="mt-8 block text-blue-600 hover:underline">
        ← プロジェクト一覧へ戻る
      </Link>
    </div>
  )
}
