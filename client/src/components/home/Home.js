import React from "react";

import CommentCards from "./commentsCard";
import Header from "./Header";
import Navigation from "./Navigation";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsList: []
    };
  }

  componentDidMount() {
    this.fetchBasket();
  }

  componentDidUpdate() {
    this.randomComments();
  }

  fetchBasket() {
    fetch("/comments", {
      method: "GET"
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(comment =>
        comment.map(elem => ({
          user_id: `${elem.user_id}`,
          user_name: `${elem.user_name}`,
          user_lastname: `${elem.user_lastname}`,
          login: `${elem.login}`,
          comments: `${elem.comments}`,
          data: `${elem.date}`
        }))
      )
      .then(commentsList =>
        this.setState({
          commentsList
        })
      )
      .catch(err => {
        console.log("caught it!", err);
      });
  }

 
  randomComments() {
    let commentsNumber = Math.floor(
      Math.random() * this.state.commentsList.length
    );
    return (
      <CommentCards commentsid={this.state.commentsList[commentsNumber]} />
    );
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <section className="main">
          {/* SLIDE PHOTO */}
          <div className="slidephoto">
            <ul className="slideshow">
              <li>
                <span>Image 01</span>
                <div className="animation-photo">
                  <h3>· · Satisfied customers · ·</h3>
                </div>
              </li>
              <li>
                <span>Image 02</span>
                <div className="animation-photo">
                  <h3>· · Incdredible Design · ·</h3>
                </div>
              </li>
              <li>
                <span>Image 03</span>
                <div className="animation-photo">
                  <h3>· · 3 Rooms · ·</h3>
                </div>
              </li>
              <li>
                <span>Image 04</span>
                <div className="animation-photo">
                  <h3>· · The Best Food · ·</h3>
                </div>
              </li>
            </ul>
          </div>

          {/* -- CHEFS PARTS ----------------------------- */}
          <div id="chefs" className="chefs">
            <div className="chefs__left">
              <img src="img/chefs.jpg" alt="chefs" className="chefs__img" />
            </div>
            <div className="chefs__container">
              <h1 className="chefs__header">The Best Chefs</h1>
              {/* <Fade left cascade> */}
              <div className="chefs__card">
                <div className="chefs__user">
                  <img
                    src="img/vietnam.jpg"
                    alt="Thien_Lou"
                    className="chefs__user-photo"
                  />
                </div>
                <div className="chefs__data">
                  <h2 className="chefs__name">Thien Lou</h2>
                  <p className="chefs__description">
                    Master Chefs in orietnal cousine
                  </p>
                </div>
              </div>
              <div className="chefs__card">
                <div className="chefs__user">
                  <img
                    src="img/france.jpg"
                    alt="Olympe de Beauvoir"
                    className="chefs__user-photo"
                  />
                </div>
                <div className="chefs__data">
                  <h2 className="chefs__name">Olympe de Beauvoir</h2>
                  <p className="chefs__description">
                    French winner of the hell's kitchen program
                  </p>
                </div>
              </div>
              <div className="chefs__card">
                <div className="chefs__user">
                  <img
                    src="img/japan.jpg"
                    alt="Ito Tanaka"
                    className="chefs__user-photo"
                  />
                </div>
                <div className="chefs__data">
                  <h2 className="chefs__name">Ito Tanaka</h2>
                  <p className="chefs__description">
                    Best Sushi Cheft from Tokyo
                  </p>
                </div>
              </div>
              {/* </Fade> */}
            </div>
          </div>
          {/* ------- DESIGN -------------- */}
          <div id="design" className="design">
            <div className="design__shadow">
              <div className="design__shadow-1" />
              <div className="design__shadow-2" />
              <div className="reserve">
                <h2>· Buisness meetings</h2>
                <h2>· Getaway with friends</h2>
                <h2>· Romantic dinner for Two</h2>

                <a href="/contact" className="btn reserve__btn">
                  {" "}
                  Book Table Now
                </a>
              </div>
            </div>
            <div className="design__secondimage" />
          </div>
          {/* ---- SOCIAL MEDIA --------------- */}
          <div id="socialmedia" className="socialmedia">
            <h3 className="socialmedia__header">
              Over 1500 satisfied customers
            </h3>
            <div className="socialmedia__container">
              <div className="socialmedia__commentsCard">
                {this.randomComments()}
                {this.randomComments()}
              </div>
              <div className="socialmedia__content">
                <img
                  src="img/customers.jpg"
                  className="socialmedia__photo"
                  alt="Happy customers"
                />
              </div>
            </div>

            <div className="socialmedia__links">
              <a
                href="http://facebook.com"
                className="socialmedia__links-facebook"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a
                href="http://instagram.com"
                className="socialmedia__links-instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="http:///twitter.com"
                className="socialmedia__links-twitter"
              >
                <i className="fab fa-twitter-square" />
              </a>
              <a
                href="http://youtube.com"
                className="socialmedia__links-youtube"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
