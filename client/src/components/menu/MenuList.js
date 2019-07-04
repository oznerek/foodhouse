import React from "react";
import { connect } from "react-redux";
import { selectMenu } from "../../actions";
import $ from "jquery";

class MenuList extends React.Component {
  addClass(prop) {
    $(".menu__item").click(function() {
      $(".menu__item").removeClass("active");
      $(this)
        .closest(".menu__item")
        .addClass("active");
    });
    this.props.selectMenu(prop);
  }

  renderList() {
    return this.props.menu.map(menuSelected => {
      if (menuSelected === "Pizza") {
        return (
          <li key={menuSelected}>
            <div
              onClick={() => this.addClass(menuSelected)}
              className="menu__item active"
            >
              <span className="menu__name">{menuSelected}</span>
            </div>
          </li>
        );
      } else {
        return (
          <li key={menuSelected}>
            <div
              onClick={() => this.addClass(menuSelected)}
              className="menu__item"
            >
              <span className="menu__name">{menuSelected}</span>
            </div>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <div className="menu__nav">
        <nav className="menu__navigation">
          <ul className="menu__list">{this.renderList()}</ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { menu: state.menu };
};

export default connect(
  mapStateToProps,
  { selectMenu }
)(MenuList);
