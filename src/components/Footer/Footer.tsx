import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

import github from '../../../public/assets/github_logo.svg'
import linkedin from '../../../public/assets/linkedin_logo.svg'

const Footer = () => {
  return  (
    <footer className={styles['footer']}>
        <div className={styles['left-section']}>
          <div className={styles['copyright']}>
            © Jack Li 2024-2024. Made with <Link href='https://www.typescriptlang.org/'>TypeScript </Link><Link href='https://react.dev/'>React</Link> and <Link href='https://nextjs.org/'>Next.js</Link>.
          </div>
          <div className={styles['relation']}>
            This project is unrelated to Spotify AB or its partners in any way. 
          </div>
        </div>

        <div className={styles['right-section']}>
          <div className={styles['repo']}>
          <Link href='https://github.com/JackLikesHotpot/Statify'>
            <Image src={github.src} width='25' height='25' alt='GitHub logo which links to the website repository.'/>
          </Link>
          </div>
          <div className={styles['linkedin']}>
          <Link href='https://www.linkedin.com/in/jack-l-a41a83114/'>
            <Image src={linkedin.src} width='25' height='25' alt='LinkedIn logo which links to my profile.'/>
          </Link>
          </div>
        </div>
    </footer>
  );
};

export default Footer;