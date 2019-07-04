import React from "react";
import DishItem from "./DishItem";

const DishList = ({ recipes }) => {

  const renderList = recipes.map(item => {
    const price = parseFloat(Math.random() * 20).toFixed(2);
    return (    
      <DishItem
        key={item.recipe_id}
        onItem={item}
        id={item.recipe_id}
        price={price}
      />
      
    );
  });
  return <div className="menu__content">{renderList}</div>;
};

export default DishList;
