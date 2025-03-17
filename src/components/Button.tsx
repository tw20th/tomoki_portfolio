export default function Button({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition"
    >
      {text}
    </a>
  )
}
