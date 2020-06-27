import React from "react";
import { connect } from "react-redux";
import { selectMenu } from "../../store/actions";
import $ from "jquery";

class MenuList extends React.Component {

  addClass(prop) {
    $(".menu__item").click(function() {
      $(".menu__item").removeClass("active");
      $(this)
        .closest(".menu__item")
        .addClass("active");
    });
    console.log(this.props.selectMenu(prop));
    console.log(this.props)
  }

  addClasses(item) {
    let classes = "menu__item ";
    classes += item === "Pizza" ? "active" : "";
    return classes;
  }

  renderList() {
    return this.props.menu.map((menuSelected) => (
      <li key={menuSelected}>
        <div
          onClick={() => this.addClass(menuSelected)}
          className={this.addClasses(menuSelected)}
        >
          <span className="menu__name">{menuSelected}</span>
        </div>
      </li>
    ));
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

const mapStateToProps = (state) => {
  return { menu: state.menu };
};
export default connect(
  mapStateToProps,
  { selectMenu }
)(MenuList);
