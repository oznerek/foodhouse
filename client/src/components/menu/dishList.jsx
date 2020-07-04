import React from "react";
import DishItem from "./dishItem";

const DishList = ({ dishList }) => {
  if(dishList.length > 0 ) {
    const renderList = dishList.map((item, val) => {
      const price = 18.95 ;
      return (    
        <DishItem
        key={item.recipe_id+val}
        onItem={item}
        id={item.recipe_id+val}
        price={price}
        />
        
        );
      });
      return <div className="menu__content">{renderList}</div>;
    } else {
      return <div className="menu__content">Not Found Dishise</div>;
  }
};

export default DishList;
