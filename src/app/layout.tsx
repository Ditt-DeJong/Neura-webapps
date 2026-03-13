import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neura - Tanya Konselor & Psiokolog Pelajar',
  description: 'Platform konsultasi kesehatan fisik dan mental modern khusus untuk pelajar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <div id="app-shell">
          {children}
        </div>
      </body>
    </html>
  )
}
