import './globals.css'
import type { Metadata } from 'next'
import FloatingSidebar from '@/components/FloatingSidebar'

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
      <body className="antialiased bg-gray-50">
        <div className="relative min-h-screen">
          <div id="app-shell" className="relative min-h-screen bg-white max-w-[450px] mx-auto overflow-x-hidden shadow-2xl z-10">
            {children}
          </div>
          <FloatingSidebar />
        </div>
      </body>
    </html>
  )
}
