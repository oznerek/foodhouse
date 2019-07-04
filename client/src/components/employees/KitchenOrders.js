import React from "react";

const KitchenOrder = () => {
  return (
    <div class="kitchenOrder">
      <div class="kitchenOrder__header">
        <span class="order__number">S23</span>
      </div>
      <div class="kitchenOrder__todo">
        <div class="kitchenOrder__dish">
          <span>Nazwa dania</span>
          <span class="kitchenOrder__dish-extras">+dodatki</span>
        </div>
      </div>{" "}
      <div class="kitchenOrder__todo">
        <div class="kitchenOrder__dish">
          <span>Nazwa dania</span>
          <span class="kitchenOrder__dish-extras">+dodatki</span>
        </div>
      </div>
    </div>
  );
};

export default KitchenOrder;
