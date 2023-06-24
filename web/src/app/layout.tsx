import './globals.css'
import { Comic_Neue } from 'next/font/google'

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={comicNeue.className}>{children}</body>
    </html>
  )
}
