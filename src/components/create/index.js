import React, { useState } from "react";
import Header from "../header";
import Footer from "../footer";
import PostForm from "../postForm";
import styles from './styles.module.css'

const CreatePost = () =>{

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function(event){
        setScreenWidth(window.innerWidth);
        console.log(window.innerWidth);
    })

    return(
        <div>
            <Header/>
            <div className={styles.content}>
                <PostForm width = {screenWidth >= 768 ? 500 : null}/>
            </div>
            <Footer/>
        </div>
    );
}

export default CreatePost;
