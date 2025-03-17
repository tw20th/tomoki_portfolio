const projects = [
  {
    id: '1',
    title: 'My Portfolio',
    description: 'Next.js + TypeScriptで作成したポートフォリオサイト。',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: '/projects/1',
  },
  {
    id: '2',
    title: 'E-Commerce Store',
    description: '楽天APIを活用したECサイト。',
    tech: ['Next.js', 'React', 'Rakuten API'],
    link: '/projects/2',
  },
  {
    id: '3',
    title: 'Blog Generator',
    description: 'ChatGPTを活用した自動記事投稿ブログ。',
    tech: ['Next.js', 'OpenAI API', 'Vercel'],
    link: '/projects/3',
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="block mt-4 text-blue-600 font-semibold hover:underline"
            >
              詳細を見る →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
