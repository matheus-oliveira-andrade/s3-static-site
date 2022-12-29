import Head from "next/head";
import Link from "next/link";

import styles from "./blog-layout.module.css";
import utilStyles from "../../styles/utils.module.css";

import CopyrightFooter from "../copyright-footer/copyright-footer";

const name = "Matheus Andrade";
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

      <header
        className={styles.header}
        style={{ borderBottom: "2px solid #f6f6f6", margin: "1.1rem 0" }}
      >
        <h2 className={utilStyles.headingLg}> 
          <Link href="/">
            <a style={{ color: "#2e4772", fontSize: "1.6rem", textDecoration: "none" }}>{name}</a>
          </Link>
        </h2>

        <div style={{ display: "flex", alignItems: "end", marginLeft: "auto", gap: "10px"}}>
          <a href="https://github.com/matheus-oliveira-andrade" className={styles.card}>
            <img src="/images/github.png" height="30" width="30" alt="github" />
          </a>

          <a href="https://www.linkedin.com/in/matheus-oliveira-andrade" className={styles.card}>
            <img src="/images/linkedin.png" height="30" width="30" alt="linkedin" />
          </a>
        </div>  
      </header>
      
      <main>{children}</main>
      
      <CopyrightFooter />
    </div>
  );
}
