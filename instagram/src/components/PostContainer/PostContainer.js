import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



function PostContainer (props) {
    return (
        <div className="post-container">
            <div className="thumbnail-container">
                <img src={props.post.thumbnailUrl} alt="" />
                <p>{props.postusername}</p>
            </div>
            <img src={props.post.imageUrl} alt="" />
            <img className="main-image"></img>

            <div className="comment-container">
                <div className="icons">
                </div>
                
                <p className="likes">{props.post.likes} likes</p>

                {props.post.comments.map((comment, index) => (
                    <CommentSection key={index} comment={comment}/>
                ))};
                <p className="post-timestamp">{props.post.timestamp}</p>
                <p className="add-comment">Add a comment...</p>
            </div>
        </div>
    )}
export default PostContainer;