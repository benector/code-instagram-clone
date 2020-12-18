import { useState } from 'react';
import Comment from "./comment";
import Description from "./description";
import PostHeader from "./post-header";
import LikeButton from './interactions/likeButton';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,  faBookmark, faPaperPlane} from  '@fortawesome/free-regular-svg-icons';

 
const Post = (props) => {

          const { post } = props;
          const[comments, setComments] = useState (post.comments.slice(1,3));
          const [commentQuantity, setCommentQuantity] = useState(3);
          const [likeCount, setLikeCount] = useState(post.like);


          const addNewComment = (comment) => {
          const commentList = [...comments];
          commentList.push(comment);
          setComments(commentList);
          }

          
          return ( 
            <div className = {styles.post}>
            <div className = {styles.postBody}>
              <PostHeader  userName={post.user.name} userAvatar={post.user.avatar} />
              <div className = {styles.postImg}>
                  <img  src={post.imageUrl} alt={`imagem do post ${post.id}`}/>
              </div>
              <Description userName={post.user.name} postDescription={post.description}/>
              <div className={styles.interaction}>
                <div className={styles.buttons}>
                  <LikeButton likeCount={post.like} postId={post.id}/>
                  <FontAwesomeIcon icon={faComment} />
                  <FontAwesomeIcon icon={faPaperPlane} />

                </div>
               
                <FontAwesomeIcon icon={faBookmark} />

                
              </div>
              <div className={styles.likes}>
                  <p>{likeCount} likes</p>
              </div>
              <div>
                  {props.post.comments.map(comment => {
                      return <p key={comment.id} style={{color: 'grey', fontSize: 10}}>{comment.text}</p>
                  })}
              </div>
              {commentQuantity < comments.length && (
                  <button onClick={() => setCommentQuantity(commentQuantity+3)}>mostrar</button>
              )}
              <Comment post_id = {post.id} addNewComment={addNewComment}/>
              <small>44 minutes ago</small>
            </div>
          </div>
        );
}
export default Post;