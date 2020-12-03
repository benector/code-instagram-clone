import Post from "./Post";

const posts = [
  {
    userName:"Bea",
    imgUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    imgDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    userName:"Ana",
    imgUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    imgDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  },
  {
    userName:"App Masters",
    imgUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    imgDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

const PostList = () =>     {

  return(
  <div class="post-list"> 

    {
      posts.map((post) => 
        <Post 
          userName={post.userName} 
          imgUrl = {post.imgUrl}
          imgDescription = {post.imgDescription}
          />)
    }

  </div>
  );
}

export default PostList;