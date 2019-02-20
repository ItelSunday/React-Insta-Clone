import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';





function PostContainer (props) {
    return (
        <div className="post-container">
            <div className="thumbnail-container">
                <img className="thumbnail" src={props.post.thumbnailUrl} alt="" />
                <p>{props.post.username}</p>
            </div>

            <div className="">
            <img src={props.post.imageUrl} alt="" />
            </div>

            <div className="comment-container">
                <div className="post-buttons">
                <img src="../../img/heart-icon.png" alt="heart"/>
                    <img src="../../img/comment-icon.png" alt="comment"/>
                </div>
                
                <p className="post-likes">{props.post.likes} likes</p>
                {props.post.comments.map((comment, index) => (
                    <CommentSection key={index} comment={comment}/>
                ))}
                <p className="post-timestamp">{props.post.timestamp}</p>
                <div className="post-comment">
                    <input className="comment-bar" type='text' placeholder='Add a comment...'/>
                    <img src="../../img/more-icon.png" alt="more"/>
                </div>

            </div>
        </div>
    )}
export default PostContainer;