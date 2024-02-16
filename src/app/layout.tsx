import type { Metadata } from 'next'
import '@/styles/globals.css'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'

export const metadata: Metadata = {
  title: 'Optimized Next.js Template by Anmol Baranwal',
  description:
    '✨ Optimized Template for Next.js 14 + TypeScript + Tailwind with eslint commands, prettier configuration, strict ESLint rules & standards of GitHub repo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col overflow-x-hidden font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
