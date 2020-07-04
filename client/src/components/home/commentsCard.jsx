import React from "react";

const CommentCard = ({comment}) => {
  return (
    comment !== undefined? (
    <div className="comment-card">
        <div className="comment-card__user">
          <img
            src="img/user.png"
            alt="User"
            className="comment-card__user-photo"
          />
        </div>
        <div className="comment-card-content">
          <div className="comment-card__user-data">
            <div className="comment-card__user-name">Tom Bark</div>
            {/* <h2 className="comment-card__user-name">{comment.user_name} {comment.user_lastname}</h2> */}
            <p className="comment-card__user-date">
              {comment.data}  
              <span className="comment-card__user-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star "/>
               
              </span>
            </p>
          </div>
          <p className="comment-card__comments">
            "{comment.comment} "
            {/* "he best Reastaurant in the town" */}
          </p>
        </div>

      </div>
    )
    : (<div className="comment-card"> <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>)
  );
};

export default CommentCard;
