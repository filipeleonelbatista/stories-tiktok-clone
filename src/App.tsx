
import { useState } from 'react';
import styles from './App.module.css';
import Stories from './Stories';
import Tiktok from './Tiktok';

export default function App() {
  const [nav, setNav] = useState('tiktok')

  return (
    <div className={styles.container}>
      {
        nav === 'tiktok' && (
          <Tiktok />
        )
      }
      {
        nav === 'stories' && (
          <Stories />
        )
      }
      <div className={styles.buttonContainer}>
        <div className={styles.buttonNav}>
          <button onClick={()=> setNav('tiktok')}>Tiktok</button>
          <button onClick={()=> setNav('stories')}>Stories</button>
        </div>
      </div>
    </div>

  )
};
