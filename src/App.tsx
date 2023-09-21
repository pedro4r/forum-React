import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';



const posts: PostType[] = [
  { id: 1,
    author: { 
      avatarUrl: "https://github.com/pedro4r.png",
      name: 'Diego Fernandes',
      role: 'CTO @ Voabox LLC',
    },
    content: [
      {type: 'paragraph', content:'Hey Guys! 👋'},
      {type: 'paragraph', content:'I just created a new project! Check this out!🚀'},
      {type: 'link', content:'clearcloud.design/doctorcare'},
      {type: 'paragraph', content:'#newproject #code #webdev'}
    ],
    publishedAt: new Date('2022-02-12 01:02:00'),
  },
  { id: 2,
    author: { 
      avatarUrl: "https://github.com/diego3g.png",
      name: 'Diego Fernandes',
      role: 'CTO @ Voabox LLC',
    },
    content: [
      {type: 'paragraph', content:'Hey Guys! 👋'},
      {type: 'paragraph', content:'I just created a new project! Check this out!🚀'},
      {type: 'link', content:'clearcloud.design/doctorcare'},
      {type: 'paragraph', content:'#newproject #code #webdev'}
    ],
    publishedAt: new Date('2022-02-03 10:30:00'),
  },
  { id: 3,
    author: { 
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator @ RocketSeat',
    },
    content: [
      {type: 'paragraph', content:'Hey Guys! 👋'},
      {type: 'paragraph', content:'I just created a new project! Check this out!🚀'},
      {type: 'link', content:'clearcloud.design/doctorcare'},
      {type: 'paragraph', content:'#newproject #code #webdev'}
    ],
    publishedAt: new Date('2022-01-10 20:20:00'),
  }
];

export function App() {
  return (
  <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (
            <Post 
            key={post.id}
            post={post}
            />
          )
        })
        }
      </main>
    </div>
    
    </div>
  )
}



