import Link from 'next/link'

import {LinkedIn, GitHub, Facebook, Instagram, Twitter} from '@images/icons'

import styles from './social.module.scss'

export default function Social() {
    return (
        <ul className={styles.Social}>
            <li>
                <Link href="https://www.linkedin.com/in/paul-amato/" target="_blank" rel="noopener noreferrer">
                    {LinkedIn}
                </Link>
            </li>
            <li>
                <Link href="https://github.com/ppops" target="_blank" rel="noopener noreferrer">
                    {GitHub}
                </Link>
            </li>
            <li>
                <Link href="https://facebook.com/amato" target="_blank" rel="noopener noreferrer">
                    {Facebook}
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/ppops/" target="_blank" rel="noopener noreferrer">
                    {Instagram}
                </Link>
            </li>
            <li>
                <Link href="https://twitter.com/ppops" target="_blank" rel="noopener noreferrer">
                    {Twitter}
                </Link>
            </li>
        </ul>
    )
}
