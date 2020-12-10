
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { API  } from "../../api";
import './App.css';
import logo from './logo.png';
import Footer from "../footer";
import PostList from "../post-list";
import Avatar from '../avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome} from  '@fortawesome/free-solid-svg-icons';
import { faHeart, faPaperPlane, faCompass} from  '@fortawesome/free-regular-svg-icons';


const posts = [
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
];

function Home() {
  // Check if have posts now
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  //const [posts, setPosts] = useState([]);

  /*useEffect(() => {
      setLoading(true);
      API.get("/posts")
        .then((response) => {
          setPosts(response.data);
          setLoading(false);
        })
        .catch((apiError) => {
          setLoading(false);
          setError(apiError.response.data.error);
        });

   }, []);*/
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text"  placeholder="Pesquisar"/>
        </div>
        <div className="menu">
              <FontAwesomeIcon icon={faHome} />
              <FontAwesomeIcon icon={faPaperPlane} />
              <FontAwesomeIcon icon={faCompass} />
              <FontAwesomeIcon icon={faHeart} />
              <img className="userAvatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
        </div>
      </header>
      <PostList posts={posts} /> 
      <Footer />
    </div>
  );
}

export default Home;

/*      {!loading ? <PostList posts={posts} /> : <p>Carregando...</p>}
*/