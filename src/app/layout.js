import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JP Motion Pictures',
  description: 'IMPACTFUL NARRATIVES THROUGH CINEMATIC EXCELLENCE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
