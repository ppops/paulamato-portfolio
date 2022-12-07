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
