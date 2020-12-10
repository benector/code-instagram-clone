import styles from './styles.module.css';
import classNames from 'classnames';



const Comment = () => {
    return (
        <div className={styles.comment}>
            <img className={styles.commentImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
            <textarea className={styles.textarea} placeholder="Deixe um comentário"/>
            <button className={classNames(styles.button, styles.disable)}>Enviar</button>
        </div>
    )
}

export default Comment;