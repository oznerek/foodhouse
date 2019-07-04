import React from 'react';

class CommentCard extends React.Component {
    render() {
        return (
            <div className="customers-card">
            <div className="customers-card-header">
              <div className="customers-card-header2">
                <div className="customers-card__user">
                  <img
                    src="img/france.jpg"
                    alt="Ito Tanaka"
                    className="customers-card__user-photo"
                  />
                </div>
                <div className="customers-card__user-data">
                  <h2 className="customers-card__user-name">Jessica Brown</h2>
                  <p className="customers-card__user-date">
                    13<sup>th</sup> May 2018
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
              " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              mollitia ab, atque, officiis maiores asperiores dolorem odio quo
              dolorum! "
            </p>
          </div>
        )
    }


}

export default CommentCard;