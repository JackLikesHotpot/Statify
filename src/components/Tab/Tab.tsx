import styles from './Tab.module.css'
import { useState } from 'react';

const Tab = ({onPeriodChange}: any) => {

    const [title, setTitle] = useState('Last 12 months')
  
    const handleTabChange = (newTitle: string) => {
      setTitle(newTitle)
      onPeriodChange(newTitle)
    }
  

  return  (
    <div className={styles['tab']}>
      <div className={styles['tab-title']}><h1>{title}</h1></div>
      <div className={styles['tab-terms']}>
        <div className={styles['short-term']}>
          <button onClick={() => handleTabChange('Last 4 weeks')}>
          Last 4 weeks</button></div>
        <div className={styles['medium-term']}>
          <button onClick={() => handleTabChange('Last 6 months')}>
          Last 6 months</button></div>
        <div className={styles['long-term']}>
          <button onClick={() => handleTabChange('Last 12 months')}>
          Last 12 months</button></div>
      </div>
    </div>
  );
};

export default Tab;