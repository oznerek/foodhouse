import React from "react";
import CommentCards from "./commentsCard";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { socialMedia, kitchenChefs, animatePhoto } from './../utils/data';
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  state = { commentsList: [] }

  componentDidMount() {
    this.fetchComment();
  }

  componentDidUpdate() {
    this.randomComments();
  }

  fetchComment() {
    fetch("/comments", {
      method: "GET",
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((comment) =>
        comment.map((elem) => ({
          user_id: `${elem.user_id}`,
          comment: `${elem.comment}`,
          data: `${elem.data}`,
          stars: `${elem.stars}`
        }))
      )
      .then((commentsList) =>
        this.setState({
          commentsList,
        })
      )
      .catch((err) => {
        console.log("caught it!", err);
      });
  }

  randomComments() {
    let commentsNumber = Math.floor(
      Math.random() * this.state.commentsList.length
    );
    return (
      <CommentCards comment={this.state.commentsList[commentsNumber]} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="main">
          {/* SLIDE PHOTO */}
          <div className="slidephoto">
            <ul className="slideshow">
              {animatePhoto.map(item => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <div className="animation-photo">
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* -- SIGN IN -------------------------------- */}
          {/* <Slide bottom> */}
          <section className="signIn containers">
            <div className="discount__description">Would do like</div>
            <div className="frame">
              <div className="discount">15% OFF</div>
              <div className="discount__description">For all your orders?</div>
            </div>
            <div className="create-acount"> Create your account now</div>
            <NavLink to="/register" className="signIn__btn">
              Register
            </NavLink>
          </section>
          {/* </Slide> */}
          {/* -- CHEFS PARTS ----------------------------- */}
          <Slide bottom>
            <div id="chefs" className="chefs">
              <div className="chefs__left">
                <img src="img/chefs.jpg" alt="chefs" className="chefs__img" />
              </div>
              <div className="chefs__container">
                <h1 className="chefs__header">The Best Chefs</h1>
                {kitchenChefs.map(item => (
                  <div key={item.name} className="chefs__card">
                    <div className="chefs__user">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="chefs__user-photo"
                      />
                    </div>
                    <div className="chefs__data">
                      <h2 className="chefs__name">{item.name}</h2>
                      <p className="chefs__description"> {item.description} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ------- DESIGN -------------- */}
          </Slide>
          <Slide bottom>
            <div id="design" className="design">
              <div className="design__shadow">
                <Fade right>
                  <div className="design__shadow-1" />
                </Fade>
                <Fade left>
                  <div className="design__shadow-2" />
                </Fade>
                <div className="reserve">
                  <h2>· Buisness meetings</h2>
                  <h2>· Getaway with friends</h2>
                  <h2>· Romantic dinner for Two</h2>

                  <a href="/contact" className="btn reserve__btn">
                    Book Table Now
                  </a>
                </div>
              </div>
              <div className="design__secondimage" />
            </div>
            {/* ---- SOCIAL MEDIA --------------- */}
          </Slide>
          <Slide bottom>
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
                {socialMedia.map(item => (
                  <a key={item.linkClass} href={item.link} target="_blank" className={item.linkClass} >
                    <i className={item.iconClass} />
                  </a>
                ))}
              </div>
            </div>
          </Slide>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
