'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('送信中...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('お問い合わせが送信されました！')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      setStatus('エラーが発生しました。')
    }
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>

      {/* お問い合わせフォーム */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700">名前</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">メールアドレス</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg p-2 mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">メッセージ</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg p-2 mt-1 h-24"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-400"
        >
          送信する
        </button>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </form>

      {/* SNSリンク */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
        <div className="space-x-4">
          <a
            href="https://github.com/tomoki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/tomoki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/tomoki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
