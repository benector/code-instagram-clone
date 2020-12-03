import Post from "./Post";

const posts = [
  {
    userName:"Bea",
    imgUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    imgDescription: "Descricao"
  },
  {
    userName:"Ana",
    imgUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    imgDescription: "Descricao"

  },
  {
    userName:"App Masters",
    imgUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    imgDescription: "Descricao"
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