'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* サイト名 */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Tomoki's Portfolio
        </Link>

        {/* PC向けナビゲーション */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-gray-700 hover:text-blue-500 ${
                pathname === item.href ? 'text-blue-600 font-bold' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* モバイル用ハンバーガーメニュー */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-md rounded-lg w-40">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                  pathname === item.href ? 'bg-blue-100 font-bold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
