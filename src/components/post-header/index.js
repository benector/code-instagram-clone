import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css';
import Avatar from '../avatar';



const PostHeader = (props) => 
            <div className={styles.postHeader}>
                <div className={styles.postAuthor}>
                    <Avatar userAvatar={props.userAvatar} border={true} width="40px"/>
                    <b>{props.userName}</b> 
                </div>
                <div className={styles.postOptions}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div> 

export default PostHeader;