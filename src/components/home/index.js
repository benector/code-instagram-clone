
import React, { useState, useEffect } from "react";
import { API , getAuthToken } from "../../api";
import Header from "../header"
import Footer from "../footer";
import PostList from "../post-list";
import PostForm from "../postForm";
import styles from './styles.module.css';



/*const posts = [
  {
    user: {name:"Bea", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"},
    imageUrl : "https://news.itu.int/wp-content/uploads/2018/07/citymobility-min-e1530886118305.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    user: {name:"Anna", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"},
    imageUrl : "https://bookstr.com/wp-content/uploads/2020/09/coffee-aesthetic-1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  },
  {
    user: {name:"Code Jr", avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"},
    imageUrl : "https://codejr.com.br/wp-content/uploads/2020/09/quem-somos.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];*/

function Home() {
  // Check if have posts now
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [posts, setPosts] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function(event){
    setScreenWidth(window.innerWidth);
    console.log(window.innerWidth);
  })
  
  useEffect(() => {
    setLoading(true);
    API.get("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((apiError) => {
        setLoading(false);
        setError(apiError.response.data);
      });
  }, []);
   
  return (
    <div className={"App"}>
      <Header />
      <div className={styles.content}>
        <div className={styles.mainContent}>
            {loading ? 
            <div className={styles.warnings}>
                    <b>Carregando posts...</b>  
            </div> 
            :  error ? 
            <div className={styles.warnings}>
                    <b>Não foi possível acessar os posts, sua sessão provavelmente expirou, faça
                login novamente.</b> 
            </div> : 
            <PostList posts={posts} /> 
            }
        </div>  
        <div className={styles.sidebar}>
              <PostForm style={{display : "block"}}/>
              <Footer width={"30%"} display={screenWidth >1024 ? "unset" : "none"} />
        </div>
        <Footer display={screenWidth > 1024 ? "none" : "unset"}/>

      </div>
    </div>
  );
}

export default Home;

/*      {!loading ? <PostList posts={posts} /> : <p>Carregando...</p>}
*/