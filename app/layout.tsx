import type { Metadata, Viewport } from "next"

import './globals.scss'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
})

export const metadata: Metadata = {
    title: "Paul James Amato - Web Developer from Melbourne",
    description: "Paul James Amato - Web Developer from Melbourne",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={poppins.className}>
            <body>{children}</body>
        </html>
    )
}
