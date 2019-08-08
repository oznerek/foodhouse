import React from "react";
import EmployeeOrder from "./EmployeeOrder";
import EmployeeEditData from "./EmlopeeEditData";
import EmployeeAddOrder from "./EmployeeAddOrder";

class EmployeeMenuPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: true,
      workSpaceView: "addneworder"
    };
  }

  componentDidMount() {
    this.renderView();
  }

  renderView() {
    if (this.state.workSpaceView === "orders") {
      return (
        <EmployeeOrder />
      );
    } else if (this.state.workSpaceView === "editdata") {
      return <EmployeeEditData />;
    } else if (this.state.workSpaceView === "addneworder") {
      return (
          <EmployeeAddOrder />
      );
    } else {
      return <div> Opps something is wrong </div>;
    }
  }
  orderList =() => {
    this.setState({ workSpaceView: "orders" });
  }
  editData = () => {
    this.setState({ workSpaceView: "editdata" });
  }
  addNewOrder = () => {
    this.setState({ workSpaceView: "addneworder" });
  }
  logOut = () => {
    this.setState({ logedIn: false });
  }

  render() {
    if (this.state.logedIn === false) {
      return (
        <div className="login">
          <div className="logout">
            <span>Oops, you must be login to see this page</span>
            <span className="logout__btn">
              <a className="btn" href="/login">
                {" "}
                Sign In
              </a>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div className="employee">
        <div className="employee__navigation">
          <div className="addNewOrder">
            <div className="addNewOrder__icon">
              <div>
                <i className="fas fa-plus-circle" onClick={this.addNewOrder} />
              </div>
              <div>
                <i className="fas fa-clipboard-list" onClick={this.orderList} />
              </div>
            </div>
          </div>
          <div className="employee__navigation-1">
            <div className="employee__user">
              <img
                src="img/user.png"
                alt="User"
                className="employee__photo"
              />
              <div className='employee__user-name'>
              <div className="employee__name">John doe</div>
              <div className="employee__name-1">Staff</div>
              </div>
              
            </div>

            <div className="userMenu">
              <div><i className="fas fa-user-edit" onClick={this.editData} /></div>
              <div><i className="fas fa-sign-out-alt" onClick={this.logOut} /></div>  
            </div>
          </div>
        </div>
        <div className="employee__workspace">
          {this.renderView()}
          
          <div className="decoration">
            <div className="decoration1" />
            <div className="decoration2" />
            <div className="decoration3" />
            
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeMenuPanel;
