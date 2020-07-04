import React from "react";
import $ from "jquery";
import { menuList } from "./../utils/data";

const MenuListPhone = ({ onChange }) => {
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

  const renderList = () => {
    return menuList.map((menuSelected) => {
      return (
        <li key={menuSelected} onClick={() => onChange(menuSelected)}>
          {menuSelected}
        </li>
      );
    });
  };

  return (
    <div className="open">
      <span className="cls" />
      <span>
        <ul className="sub-menu">{renderList()}</ul>
      </span>
      <span className="cls" />
    </div>
  );
};

export default MenuListPhone;
