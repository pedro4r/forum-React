import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {

    const publishedDateFormatted = format(publishedAt, 'LLLL d h:mm bbb', { 
        locale: enUS});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { 
        locale: enUS,
        addSuffix: true
    });

    //Monitoring comments 
    const [comments, setComments] = useState([
        'Awesome! Congratulations!! 👏👏'
    ]);
    //Monitoring textarea 
    const [newCommentText, setNewCommentText] = useState ('');

    console.log(newCommentText);

    //Post new comment function (onSubmit)
    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    //TEXTAREA --> Apply the changes to the useState (onChange)
    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        console.log(commentsWithoutDeletedOne);

        setComments(commentsWithoutDeletedOne);
    }

    console.log(deleteComment);

    const isNewCommentEmpty = newCommentText.length == 0;

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

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>    

            <div className={styles.content}>
                {
                    content.map(line => {
                        if(line.type == 'paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if (line.type == 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>;
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback</strong>
                <textarea 
                name="comment"
                placeholder="Add a comment"
                onChange={handleNewCommentChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required/>

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>

        </article>
    )
}