import Image from 'next/image'

interface ProjectProps {
  title: string
  description: string
  tech: string[]
  img: string
  link: string
}

export function ProjectCard({ title, description, tech, img, link }: ProjectProps) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <Image src={img} alt={title} width={400} height={200} className="rounded" />
      <h2 className="text-2xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((techItem) => (
          <span key={techItem} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            {techItem}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-600 font-semibold hover:underline"
      >
        詳細を見る →
      </a>
    </div>
  )
}
