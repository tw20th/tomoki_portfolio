import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
