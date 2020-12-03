import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'


const PostHeader = (props) => 
            <div class="post-header">
                <div class="post-author">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
                    <b>{props.userName}</b> 
                </div>
                <div class="post-options">
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div> 

export default PostHeader;