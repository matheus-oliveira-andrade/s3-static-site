import styles from './profile-top-card.module.css'

import Link from 'next/link'

export default function ProfileTopCard() {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/32457879?v=4"
        height="144"
        width="144"
        alt="Profile image author"
        className={styles.borderCircle}
      />

      <Link href="/blog"><h1 className={styles.title}>Matheus de Oliveira de Andrade</h1></Link>

      <p className={styles.description}>Backend Software Developer</p>
    </>
  );
}
