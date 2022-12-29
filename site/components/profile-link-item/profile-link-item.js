import styles from './profile-link-item.module.css'

export default function ProfileLinkItem({ link, imgPath, altName }) {
  return (
    <>
      <a href={link} className={styles.card}>
        <img src={imgPath} height="50" width="60" alt={altName} />
      </a>
    </>
  );
}
