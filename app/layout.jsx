import './globals.scss'

import { Poppins } from '@next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '400', '700'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.className}>
            {/*
                <head /> will contain the components returned by the nearest parent
                head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />
            <body>{children}</body>
        </html>
    )
}
