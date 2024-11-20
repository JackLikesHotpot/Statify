import { useRouter } from 'next/router';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

import styles from '../../styles/Page.module.css'

export default function License() {
  const router = useRouter()

  return (
    <div>
      <Header/>
      <div className='pt-24'/>
      
        <Footer/>
      </div>
  );
};
