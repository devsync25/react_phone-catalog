import React from 'react';
import styles from '.Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span>nice</span>
          <span>gadgets</span>
        </a>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>
            HOME
          </a>
          <a href="/" className={styles.navLink}>
            PHONES
          </a>
          <a href="/" className={styles.navLink}>
            TABLETS
          </a>
          <a href="/" className={styles.navLink}>
            ACCESSORIES
          </a>
        </nav>

        <div className={styles.actions}>
          <a href="/favorites" className={styles.action}>
            ♡
          </a>
          <a href="/favorites" className={styles.action}>
            🛒
          </a>
        </div>
      </div>
    </header>
  );
};
