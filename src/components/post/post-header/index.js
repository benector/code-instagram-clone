import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css';
import Avatar from '../../avatar';

import moment from 'moment';
import 'moment/locale/pt';  
moment.locale('pt');


const PostHeader = (props) => 
            <div className={styles.postHeader}>
                <div className={styles.postInfos}>
                        <Avatar userAvatar={props.userAvatar} border={true} width="40px"/>
                        <div className={styles.postAuthor}>
                            <b>{props.userName} - {props.postTitle}</b> 
                            <small className="postDate">
                                {moment(props.createdAt).format('LLL')}
                            </small>
                        </div>
                </div>
                <div className={styles.postOptions}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div> 

export default PostHeader;