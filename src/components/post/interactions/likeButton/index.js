import React from 'react';
import { API } from '../../../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from  '@fortawesome/free-regular-svg-icons';
import {faHeart as fasHeart} from  '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';


class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLiked : false,
        likeCount: props.likeCount,
        loading: false,
        error: null,
      };
    }
  
    async addLike() {
      const countNow = this.state.likeCount;
      try {
        this.setState({ loading: true, likeCount: countNow + 1 , isLiked: true });
  
        const result = await API.patch(`/posts/${this.props.postId}/like`);
  
        this.setState({ loading: false, likeCount: result.data.like });
      } catch (error) {
        this.setState({ loading: false, error, likeCount: countNow });
      }
    }
  

    render() {
      if(this.state.isLiked) {
        return <FontAwesomeIcon className={styles.liked} icon={fasHeart} />
      }else { 
        return <FontAwesomeIcon onClick={() => this.addLike()} icon={faHeart} />
      };
    }
  }
  
  export default LikeButton;
  
 
              