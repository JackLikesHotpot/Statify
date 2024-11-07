import styles from './Header.module.css'
import logo from '../../../public/assets/logo.svg'

const Header = () => {
  return  (
    <header>
      <nav className={styles['header']}>
        <div className={styles['nav']}>
        <div className={styles['logo']}><img src={logo.src} width='50' height='50' alt='The logo for the Statify website'/><a className={styles['logo-name']} href='/'>Statify</a></div>
          <div className={styles['navbar']}>
            <a className={styles['nav-tracks']} href='/tracks'>Top Tracks</a>
            <a className={styles['nav-artists']} href='/artists'>Top Artists</a>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;