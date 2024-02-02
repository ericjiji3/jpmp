import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JP Motion Pictures LLC',
  description: "Austin's hub for cinematic stories that stand above the rest. Owned by the filmmaker/cinematographer, Jaden Patterson, JPMP specializes in narrative films and music videos. Choose JP Motion Pictures for unparalleled creativity and expertise, ensuring your idea comes to life exactly the way you intended.",
  keywords: "Cinematography, Music-Videos, Directing, Austin",
  author: "Jaden Patterson"
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
