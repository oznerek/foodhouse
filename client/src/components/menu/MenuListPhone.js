import React from "react";
import { connect } from "react-redux";
import { selectMenu } from "../../actions";
import $ from 'jquery'

class MenuListPhone extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $(document).delegate(".open", "click", function(event) {
        $(this).addClass("oppenned");
        event.stopPropagation();
      });
      $(document).delegate("body", "click", function(event) {
        $(".open").removeClass("oppenned");
      });
      $(document).delegate(".oppenned", "click", function(event) {
        $(".open").removeClass("oppenned");
        event.stopPropagation();
      });
    });
  }


  renderList() {
    return this.props.menu.map(menuSelected => {
      return (
        <li key={menuSelected}>
          <a href="#pizza" title="pizza">
            <div
              onClick={() => this.props.selectMenu(menuSelected)}
            >
              {menuSelected}
            </div>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="open">
        <span className="cls" />
        <span>
          <ul className="sub-menu">{this.renderList()}</ul>
        </span>
        <span className="cls" />
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
)(MenuListPhone);
