// pages/index.js

import { useRouter } from 'next/navigation'

import Header from '../components/Header/Header'
import styles from '../styles/Login.module.css'
import music from '../../public/assets/music.svg'
import artist from '../../public/assets/artist.svg'
import sound from '../../public/assets/sound.svg'
import link from '../../public/assets/link.svg'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Header/>
      <div className='pt-24'/>
      <div className={styles['container']}>
      <p className={styles['heading']}>Statify</p>
        <button className={styles['button']} onClick={() => router.push('/api/login')}>Login with Spotify</button>
      </div>
      
      <div className='pt-24'/>
      <div className={styles['descriptions']}>
        <div className={styles['track-description']}>
          <div className={styles['icon']}>
            <img src={music.src} width='100'/>
          </div>
          <p className={styles['label']}>View your most played tracks over 3 different periods!</p>
          </div>

          <div className={styles['artist-description']}>
          <div className={styles['icon']}>
            <img src={artist.src} width='100'/>
          </div>
          <p className={styles['label']}>Find out what artist you've been listening to recently!</p>
          </div>

          <div className={styles['sound-description']}>
          <div className={styles['icon']}>
            <img src={sound.src} width='100'/>
          </div>
          <p className={styles['label']}>Have a small preview of the songs you like!</p>
          </div>

          <div className={styles['link-description']}>
          <div className={styles['icon']}>
            <img src={link.src} width='100'/>
          </div>
          <p className={styles['label']}>You can access the Spotify pages directly from here!</p>
          </div>
        </div>
      </div>
  );
};
