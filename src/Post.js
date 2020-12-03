import Comment from "./Comment";

const Post = (props) => 
          <div class="post">
            <div class="post-body">
              <div class="post-header">
                <div class="post-author"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS275fgbLRUvZTthUPudJHdKymk096IE-8LFg&usqp=CAU"/>
                <b>{props.userName}</b> 
                </div>
                <i class="fas fa-ellipsis-h"></i>




              </div> 
              <br/>
                <img  src={props.imgUrl}/>
                <p>{props.imgDescription}</p>
                <Comment/>
            </div>
          </div>

export default Post;