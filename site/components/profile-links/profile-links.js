import ProfileLinkItem from "../profile-link-item/profile-link-item"

import styles from './profile-links.module.css'

export default function () {
  return (
    <>
      <div className={styles.grid}>
        <ProfileLinkItem
          link="https://github.com/matheus-oliveira-andrade"
          imgPath="/images/github.png"
          altName="github"
        />

        <ProfileLinkItem
          link="https://www.linkedin.com/in/matheus-oliveira-andrade"
          imgPath="/images/linkedin.png"
          altName="linkedin"
        />
      </div>
    </>
  );
}
