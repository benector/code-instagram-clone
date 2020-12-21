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
          const[comments, setComments] = useState (post.comments);
          const  initialState = comments.length;
          const [commentQuantity, setCommentQuantity] = useState(2);
          const [likeCount, setLikeCount] = useState(post.like);


          const addNewComment = (comment) => {
          const commentList = [...comments];
          commentList.push(comment);
          setComments(commentList);
          }

          const viewComents = () => {
            
          }

          return ( 
            <div className = {styles.post}>
            <div className = {styles.postBody}>
              <PostHeader  userName={post.user.name} postTitle={post.title} userAvatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"} />
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
              <div className={styles.commentsBox}>
                  {comments.length > 2 ?  <p onClick={() => setCommentQuantity(initialState)}>Ver todos {initialState} comentários</p> 
                  : comments.lenght? <p>Seja o primeiro a comentar</p> : ""}
                  {comments.slice(0, commentQuantity).map(comment => {
                      return <p key={comment.id}>{comment.text}</p>
                  })}
              </div>
              {commentQuantity < comments.length && (
                  <button onClick={() => setCommentQuantity(commentQuantity+3)}>Mostrar mais</button>
              )}
              <Comment post_id = {post.id} addNewComment={addNewComment}/>
            </div>
          </div>
        );
}
export default Post;