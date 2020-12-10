import styles from './styles.module.css';

const Avatar = (props) => {
    
    if(props.border)
    {
        return(
            <div className={styles.userAvatar}>
                <img src={props.userAvatar} style={{width: props.width}} alt={"avatar"}/>
            </div>
        );
    }else{
        return(
            <img src={props.userAvatar} style={{width: props.width}} alt={"avatar"}/>
        );
    }
   
    
}

export default Avatar;