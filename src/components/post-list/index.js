import Post from "../post";
import styles from './styles.module.css';



const PostList = (props) =>     {

  return(
       <div className={styles.list}>
          {
            props.posts.map((post) => 
              <Post 
                key={post.id}
                post={post}
                
                />)
          }

        </div>
 
  );
}

export default PostList;