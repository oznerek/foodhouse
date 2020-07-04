import React from "react";

class EmployeeOrder extends React.Component {

  renderOrderList() {
    return (
      <div className="order" data-toggle="collapse" href="#collapse1">
        <div>
          <span className="order__number">S23</span>
          <span className="order__status">In progress</span>
        </div>
        <span id="collapse1" className="panel-collapse collapse order__collapse">
          <i className="far fa-credit-card" />
          <i className="far fa-edit" />
          <i className="far fa-trash-alt" />
        </span>
      </div>
      );
  }

  render() {
    return (
      <div className='employee__orderList'>
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}
        {this.renderOrderList()}

        {this.renderOrderList()}

      </div>
    )
  }
};

export default EmployeeOrder;
