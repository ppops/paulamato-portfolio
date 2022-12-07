import {LinkedIn, GitHub, Facebook, Instagram, Twitter} from '/public/icons'

import styles from './social.module.scss'

export default function Social() {
    return (
        <ul className={styles.Social}>
            <li>
                <a href="https://www.linkedin.com/in/paul-amato/" target="_blank" rel="noopener noreferrer">
                    {LinkedIn}
                </a>
            </li>
            <li>
                <a href="https://github.com/ppops" target="_blank" rel="noopener noreferrer">
                    {GitHub}
                </a>
            </li>
            <li>
                <a href="https://facebook.com/amato" target="_blank" rel="noopener noreferrer">
                    {Facebook}
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ppops/" target="_blank" rel="noopener noreferrer">
                    {Instagram}
                </a>
            </li>
            <li>
                <a href="https://twitter.com/ppops" target="_blank" rel="noopener noreferrer">
                    {Twitter}
                </a>
            </li>
        </ul>
    )
}
