import React from "react";
import { menuList } from './../utils/data';

const MenuList = ({selectedDish, onChange}) =>{

  const addClasses = (item) => {
    const classes = item == selectedDish ? "menu__item active" : "menu__item";
    return classes;
  }
  const renderList = () => {
    return menuList.map((menuSelected) => (
      <li key={menuSelected}>
        <div
          onClick={() => onChange(menuSelected)}
          className={addClasses(menuSelected)}
        >
          <span className="menu__name">{menuSelected}</span>
        </div>
      </li>
    ));
  }

  return(
    <div className="menu__nav">
      <nav className="menu__navigation">
        <ul className="menu__list">{renderList()}</ul>
      </nav>
    </div>
  )
}

export default MenuList;