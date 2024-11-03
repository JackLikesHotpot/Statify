import styles from './Header.module.css'
import logo from '../../../public/assets/logo.svg'

const Header = () => {
  return  (
    <nav className={styles['header']}>
      <div className={styles['nav']}>
      <div className={styles['logo']}><img src={logo.src} width='50' height='50'/><p className={styles['logo-name']}>Statify</p></div>
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