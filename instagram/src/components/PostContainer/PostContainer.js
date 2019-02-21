import React from 'react';
import './PostContainer.css';

//sections
import CommentSection from '../CommentSection/CommentSection';

//styling
import HeartIcon from '../../images/heart-icon.png';
import CommentIcon from '../../images/comment-icon.png';
import MoreIcon from '../../images/more-icon.png';



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
                <img src={HeartIcon} alt="like"/>
                <img src={CommentIcon} alt="comment"/>
                </div>
                
                <p className="post-likes">{props.post.likes} likes</p>
                {props.post.comments.map((comment, index) => (
                    <CommentSection key={index} comment={comment}/>
                ))}
                <p className="post-timestamp">{props.post.timestamp}</p>
                <div className="post-comment">
                    <input className="comment-bar" type='text' placeholder='Add a comment...'/>
                    <img src={MoreIcon} alt="cmore"/>
                </div>

            </div>
        </div>
    )}
export default PostContainer;