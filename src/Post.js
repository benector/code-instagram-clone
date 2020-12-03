import Comment from "./Comment";
import PostHeader from "./PostHeader";


const Post = (props) => 
          <div class="post">
            <div class="post-body">
              <PostHeader  userName={props.userName} />
                  <img  src={props.imgUrl}/>
              <div class="post-description">
                  <p> <b>{props.userName}</b> {props.imgDescription}</p>
              </div>
                <Comment/>
            </div>
          </div>

export default Post;