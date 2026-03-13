import './globals.css'
import type { Metadata } from 'next'
import BottomNav from '@/components/BottomNav'

export const metadata: Metadata = {
  title: 'Neura - Tanya Konselor & Psiokolog Pelajar',
  description: 'Platform konsultasi kesehatan fisik and mental modern khusus untuk pelajar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <div id="app-shell" className="relative min-h-screen bg-white max-w-[450px] mx-auto overflow-x-hidden shadow-2xl">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
