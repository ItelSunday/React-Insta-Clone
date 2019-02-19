import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



function PostContainer (props) {
    return (
        <div className="post-container">
            <div className="thumbnail-container">
                <img className="user"></img>
                <p className="username"></p>
            </div>

            <img className="main-image"></img>

            <div className="comment-section">
                <div className="icons">
                </div>
                
                <p className="likes"></p>

                {props.post.comments.map((comment, index) => (
                    <CommentSection key={index} comment={comment}/>
                ))};
                

            </div>

        </div>

export default PostContainer;