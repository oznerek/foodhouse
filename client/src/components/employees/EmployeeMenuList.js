import React from "react";
import EmployeeOrder from './EmployeeOrder'
class EmployeeMenuPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: true
    };
  }


  render() {
    if (this.state.logedIn === false) {
      return (
        <div className="employee">
          <div className="notLogin">
            Oops, you must be login to see this page
            <div><a href='/login'> Sign In</a></div>
          </div>
        </div>
      );
    }
    return (
      <div className="employee">
        <div className="employee__navigation">
          <div>
            <div className="employee__photo" />
            <div className="employee__name">John doe</div>
            <div className="employee__name-1">Staff</div>
          </div>

          <div className="userMenu">
            <i className="fas fa-user-edit" />
            <i className="fas fa-sign-out-alt" />
          </div>
        </div>
        <div className="employee__navigation-1">
          <div className="addNewOrder">
            <div className="addNewOrder__icon">
              <i className="fas fa-plus-circle" />
            </div>
          </div>
        </div>

        <div className="employee__workspace">
          <EmployeeOrder />          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />
          <EmployeeOrder />

        </div>
      </div>
    );
  }
}

export default EmployeeMenuPanel;
