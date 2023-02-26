import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt}) {

    const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      }).format(publishedAt);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="May 11th at 11:13" dateTime="2022-05-11">
                    {publishedDateFormat}
                </time>
            </header>    

            <div className={styles.content}>
                <p>Hey Guys! 👋</p>
                <p>I just created a new project! Check this out!🚀</p>
                <p><a href="">clearcloud.design/doctorcare</a></p>
                <p>
                    <a href="">#newproject</a>{' '}
                    <a href="">#code</a>{' '}
                    <a href="">#webdev</a>
                </p> 
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea placeholder="Add a comment"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}