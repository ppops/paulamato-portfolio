import Script from 'next/script'
import Image from 'next/image'

import Header from '/components/header/header'
import Social from '/components/social/social'
import Footer from '/components/footer/footer'
import Skills from '/components/skills/skills'

import Reykjavik from '/public/reykjavik.jpg'

import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.Main}>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=UA-2205557-1"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-2205557-1');
                `}
            </Script>
            <div className={styles.Container}>
                <Header />
                <Social />
                <Skills />
            </div>
            <Footer />
            <Image
                src={Reykjavik}
                alt="Reykjavik"
                placeholder="blur"
            />
        </main>
    )
}
