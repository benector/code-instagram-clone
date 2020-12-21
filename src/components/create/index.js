import Header from "../header";
import Footer from "../footer";
import PostForm from "../postForm";
import styles from './styles.module.css'

const CreatePost = () =>{
    return(
        <div>
            <Header/>
            <div className={styles.content}>
                <PostForm/>
            </div>
            <Footer/>
        </div>
    );
}

export default CreatePost;
