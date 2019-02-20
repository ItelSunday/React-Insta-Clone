import React from 'react';

function CommentSection(props) {
    return (
    <div className="comment-container">
        <p className="comment">{props.comment.username}{props.comment.text}</p>
    </div>
    )
}

export default CommentSection; 