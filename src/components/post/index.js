import Comment from "../comment";
import Description from "../description";
import PostHeader from "../post-header";
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faBookmark, faPaperPlane} from  '@fortawesome/free-regular-svg-icons';



const Post = (props) => 
          <div className = {styles.post}>
            <div className = {styles.postBody}>
              <PostHeader  userName={props.userName} userAvatar={props.userAvatar} />
              <div className = {styles.postImg}>
                  <img  src={props.imageUrl}/>
              </div>
              <div className={styles.interaction}>
                <div className={styles.buttons}>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faComment} />
                  <FontAwesomeIcon icon={faPaperPlane} />

                </div>
                <FontAwesomeIcon icon={faBookmark} />

                
              </div>
              <Description userName={props.userName} postDescription={props.postDescription}/>
              <Comment />
              <small>44 minutes ago</small>
            </div>
          </div>

export default Post;