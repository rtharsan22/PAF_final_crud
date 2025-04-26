import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nexus Frontend',
    description: 'Next.js + TailwindCSS + Spring Boot backend example',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/* Simple navbar or header could go here */}
        <main className="min-h-screen bg-gray-50 p-4">
            {children}
        </main>
        </body>
        </html>
    )
}
