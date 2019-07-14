import React from "react";

const KitchenOrder = () => {
  return (
    <div className="kitchenOrder">
      <div className="kitchenOrder__header">
        <span className="order__number">S23</span>
      </div>
      <div className="kitchenOrder__todo">
        <div className="kitchenOrder__dish">
          <span>Nazwa dania</span>
          <span className="kitchenOrder__dish-extras">+dodatki</span>
        </div>
      </div>{" "}
      <div className="kitchenOrder__todo">
        <div className="kitchenOrder__dish">
          <span>Nazwa dania</span>
          <span className="kitchenOrder__dish-extras">+dodatki</span>
        </div>
      </div>
    </div>
  );
};

export default KitchenOrder;
