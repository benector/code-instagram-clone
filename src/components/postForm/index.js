import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { API } from "../../api";
import styles from './styles.module.css';

const PostForm = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    const body = {
      title,
      description,
      imageUrl,
    };
    try {
      setLoading(true);
      const response = await API.post("/posts", body);
      if (response.data.id) {
        history.push('/');
      }
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  return (
      <div className={styles.addPost}>
        <div className={styles.postForm}>
          <h1 style={{textAlign: "center" }}>Criar novo post</h1>
          <input
            placeholder="Título"
            value={title}
            disabled={loading}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea className={styles.mensagem}
            placeholder="Mensagem"
            value={description}
            disabled={loading}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            placeholder="Url da Imagem"
            value={imageUrl}
            disabled={loading}
            onChange={(event) => setImageUrl(event.target.value)}
          />
          {imageUrl && imageUrl.length > 5 && (
            <img className={styles.imgPreview} src={imageUrl} />
          )}
          {error && <p>{error}</p>}
          <button
            className={styles.enterButton}
            disabled={loading}
            onClick={handlePost}
          >
            Postar
          </button>
        </div>
      </div>    
    
  );
};

export default PostForm;