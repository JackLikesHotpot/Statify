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
        </div>
        <span className='text-sm'>Due to Spotify key limitations, I am unable to provide a website that uses your Spotify user data. <br></br>Please enjoy this website with dummy data instead.</span>
      </nav>
    </header>
  );
};

export default Header;