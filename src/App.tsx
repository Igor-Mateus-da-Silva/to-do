import styles from './App.module.css'

import './global.css';
import { Header } from './components/Header';
import { InsertList } from './components/InsertList';
import { Tasks } from './components/Tasks';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <InsertList />
      </div> 

      <div className={styles.wrapper}>
        <Tasks />
      </div>

    </div> 
  )
}