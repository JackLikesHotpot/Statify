import styles from './Footer.module.css'

const Footer = () => {
  return  (
    <footer>
      <div className={styles['footer']}>
        
        <div className={styles['left-section']}>
          <div className={styles['copyright']}>
            © 2024 Statify
          </div>
          <div className={styles['relation']}>
            This project is unrelated to Spotify AB or its partners in any way.
          </div>
        </div>

        <div className={styles['right-section']}>
          <div className={styles['license']}>
            License
          </div>
          <div className={styles['GitHub']}>
            Logo
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;