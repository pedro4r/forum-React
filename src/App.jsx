import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';

export function App() {
  return (
  <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post 
        author="Pedro"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci, facere nostrum doloremque corporis accusantium, autem quod facilis illo praesentium totam magni qui ipsum! Tempora dolorum omnis natus doloribus dolore!"
        />

        <Post
        author="Bruno"
        content="Nostrum doloremque corporis accusantium, autem quod facilis illo praesentium totam magni qui ipsum! Tempora dolorum omnis natus doloribus dolore!"
        />
      </main>
    </div>
    
    </div>
  )
}



