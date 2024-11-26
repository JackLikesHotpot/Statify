// pages/index.js

import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import styles from '../styles/Login.module.css'
import music from '../../public/assets/music.svg'
import artist from '../../public/assets/artist.svg'
import sound from '../../public/assets/sound.svg'
import link from '../../public/assets/link.svg'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Header/>
      <div className='pt-24'/>
      <div className={styles['container']}>
      <title className={styles['heading']}>Statify</title>
        <button className={styles['button']} onClick={() => router.push('/api/login')}>Login with Spotify</button>
      </div>
      
      <div className='pt-24'/>
      <div className={styles['descriptions']}>

        <div className={styles['track-description']}>
            <div className={styles['icon']}>
              <Image src={music.src} width='90' height='100'/>
            </div>
            <div className={styles['description']}>
              <h1 className={styles['title']}>View your recent tracks</h1>
              <p className={styles['label']}>Shows your most played tracks over 3 different periods!</p>
            </div>
          </div>

          <div className={styles['artist-description']}>
          <div className={styles['icon']}>
            <Image src={artist.src} width='100' height='100'/>
          </div>
            <div className={styles['description']}>
              <h1 className={styles['title']}>View your recent artists</h1>
              <p className={styles['label']}>Find out what artist you&#39;ve been listening to recently!</p>
            </div>
          </div>

          <div className={styles['sound-description']}>
          <div className={styles['icon']}>
            <Image src={sound.src} width='70' height='100'/>
          </div>
            <div className={styles['description']}>
              <h1 className={styles['title']}>Preview your songs</h1>
              <p className={styles['label']}>Listen to a preview of the songs you like!</p>
            </div>
          </div>

          <div className={styles['link-description']}>
          <div className={styles['icon']}>
            <Image src={link.src} width='75' height='100'/>
          </div>
            <div className={styles['description']}>
              <h1 className={styles['title']}>Find your songs on Spotify</h1>
              <p className={styles['label']}>You can access the Spotify pages directly from here!</p>
            </div>
          </div>
        </div>
        
      <div className='pt-24'/>
      </>
  );
};
