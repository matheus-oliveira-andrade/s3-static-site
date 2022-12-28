import Head from "next/head";
import Link from "next/link";

import styles from "./layout-posts.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Matheus de Oliveira de Andrade";
export const siteTitle = "Profile";

export default function ({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Post" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <img
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height="108"
              width="108"
              alt="profile image"
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}
