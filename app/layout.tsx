import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import './globals.css'
import { ToastProvider } from './providers/ToastProvider'
import LenisProvider from './components/LenisProvider'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Farid Hussain',
    description: 'Frontend Developer Portfolio showcasing React, Next.js, TypeScript, and modern web projects.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className={`${geistSans.className} min-h-full flex flex-col`}>
                <ToastProvider>
                    <LenisProvider>{children}</LenisProvider>
                </ToastProvider>
            </body>
        </html>
    )
}
