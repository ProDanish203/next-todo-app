import { TodoProvider } from '@/store/todos'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo Application',
  description: 'Todo application for adding and reminding the daily tasks of user',
  keywords: "todo, reminder, app, next app, jaascript",
  authors: {name: "Danish Siddiqui"}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/png" href="./favicon.png"/>
      </head>
      <body className={inter.className}>
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  )
}
