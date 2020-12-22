import { useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { API } from '../../../api';



const Comment = (props) => {

    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleComment = async () => {
        try{
            setLoading(true);
            const body = {
                text,
                post_id: props.post_id
            }
            const result = await API.post('/comments', body);
            if(result){
                console.log(result.data);
                props.addNewComment(result.data);
                setText('');
            }
            setLoading(false);
        }catch(error){
            setLoading(false);
            setError(error);
        }   
    }

    return (
        <div className={styles.comment}>
            <img className={styles.commentImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
            <textarea className={styles.textarea}
             placeholder="Comentar"
             value={text}
             onChange={event => setText(event.target.value)}
             />
             {text ? <button onClick={handleComment}>Enviar</button> :
                <button disabled className={classNames(styles.button, styles.disable)} >Enviar</button>
            }
        </div>
    )
}

export default Comment;