import styles from './profile-top-card.module.css'

export default function () {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/32457879?v=4"
        height="144"
        width="144"
        alt="Profile image author"
        className={styles.borderCircle}
      />

      <h1 className={styles.title}>Matheus de Oliveira de Andrade</h1>

      <p className={styles.description}>Backend Software Developer</p>
    </>
  );
}
