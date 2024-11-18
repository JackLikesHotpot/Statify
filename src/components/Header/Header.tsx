import styles from './Header.module.css'
import logo from '../../../public/assets/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return  (
    <header>
      <nav className={styles['header']}>
        <div className={styles['nav']}>
        <div className={styles['logo']}><Image src={logo.src} width='50' height='50' alt='The logo for the Statify website'/><Link className={styles['logo-name']} href='/'>Statify</Link></div>
          <div className={styles['navbar']}>
            <Link className={styles['nav-tracks']} href='/tracks'>Top Tracks</Link>
            <Link className={styles['nav-artists']} href='/artists'>Top Artists</Link>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;