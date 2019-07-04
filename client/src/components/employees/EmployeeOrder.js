import React from "react";

const EmployeeOrder = () => {
  return (
    <div class="order" data-toggle="collapse" href="#collapse1">
      <div>
        <span class="order__number">S23</span>
        <span class="order__status">In progress</span>
      </div>
      <span id="collapse1" class="panel-collapse collapse order__collapse">
        <i class="far fa-credit-card" />
        <i class="far fa-edit" />
        <i class="far fa-trash-alt" />
      </span>
    </div>
  );
};

export default EmployeeOrder;
