
import styles from './styles.module.css';

const Description = (props) => {
    return(
        <div className={styles.description}>
                  <p> <b>{props.userName}</b> {props.postDescription}</p>
        </div>
    )
}

export default Description;