import React from 'react';

class CommentCard extends React.Component {

    render() {
      let comment = this.props.commentsid;
        return (
          comment !== undefined? (
          <div className="customers-card">
            <div className="customers-card-header">
              <div className="customers-card-header2">
                <div className="customers-card__user">
                  <img
                    src="img/user.png"
                    alt="User"
                    className="customers-card__user-photo"
                  />
                </div>
                <div className="customers-card__user-data">
                  <h2 className="customers-card__user-name">{comment.user_name} {comment.user_lastname}</h2>
                  <p className="customers-card__user-date">
                    {comment.data.slice(0,10)}
                  </p>
                </div>
              </div>
              <div>
                <span className="customers-card__user-stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
              </div>
            </div>
            <p className="customers-card__comments">
              "{comment.comments} "
            </p>
          </div>
        )
        : (<div>brak danych</div>)
        )
        }

}

export default CommentCard;