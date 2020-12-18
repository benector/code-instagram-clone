import Post from "../post";
import styles from './styles.module.css';



const PostList = (props) =>     {

  return(
    <main >
       <div className={styles.list}>
          {
            props.posts.map((post) => 
              <Post 
                key={post.id}
                post={post}
                
                />)
          }

        </div>
        <div className="sidebar">
            sidebar
        </div>
    </main>
 
  );
}

export default PostList;