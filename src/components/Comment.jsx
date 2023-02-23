import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/pedro4r.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Requião</strong>
                            <time title="May 11th at 11:13" dateTime="2022-05-11 11:13:30">About 1 hour ago.</time>
                        </div>
                        <button title="Delete comment">
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>Awesome! Congratulations!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp /> Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}