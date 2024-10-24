import styles from './Header.module.css'

const Header = () => {
  return  (
    <nav className={styles['header']}>
      <div className={styles['nav']}>
      <div className={styles['logo']}>logo</div>
        <div className={styles['navbar']}>
          <a className={styles['nav-tracks']} href='/tracks'>Top Tracks</a>
          <a className={styles['nav-artists']} href='/artists'>Top Artists</a>
          <a className={styles['nav-genres']}>Top Genres</a>
      </div>
      </div>
    </nav>
  );
};

export default Header;