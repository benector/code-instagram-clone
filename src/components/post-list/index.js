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
                userName={post.user.name} 
                userAvatar = {post.user.avatar}
                imageUrl = {post.imageUrl}
                postDescription = {post.description}
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