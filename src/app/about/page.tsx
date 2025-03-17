export default function About() {
  return (
    <div className="container mx-auto px-4 py-10 text-center max-w-2xl">
      <h1 className="text-4xl font-bold">Tomoki Watanabe</h1>
      <p className="mt-2 text-gray-700 text-lg">Creative Developer | Building the Future</p>
      <p className="mt-4 text-gray-600">
        Web開発を中心に活動するフロントエンドエンジニアです。Next.js、TypeScriptを使用したアプリ開発が得意です。
      </p>

      {/* スキルセクション */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'].map((skill) => (
            <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* SNSリンク */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
        <div className="space-x-4">
          <a
            href="https://github.com/tomoki"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/tomoki"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            x
          </a>
          <a
            href="https://linkedin.com/in/tomoki"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
