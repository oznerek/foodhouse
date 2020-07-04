import React from "react";
import EmployeeOrder from "./EmployeeOrder";
import EmployeeAddOrder from "./EmployeeAddOrder";
import EditUser from './editUser';
import { logout, deleteUser } from '../../store/actions/user.actions';
import { connect } from "react-redux";

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
      return (<EditUser />
        // <EmployeeOrder />
      );
    } else if (this.state.workSpaceView === "editdata") {
      return <EditUser />;
    } else if (this.state.workSpaceView === "addneworder") {
      return (<EditUser />
          // <EmployeeAddOrder />
      );
    } else {
      return <div> Opps something is wrong </div>;
    }
  }
  orderList =() => {
    this.setState({ workSpaceView: "orders" });
  }
  // editData = () => {
  //   this.props.deleteUser();
  // }
  addNewOrder = () => {
    this.setState({ workSpaceView: "addneworder" });
  }
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className="employee">
        <div className="employee__navigation">
          <div className="addNewOrder">
            <i className="fas fa-plus-circle" onClick={this.addNewOrder} />
            <i className="fas fa-clipboard-list" onClick={this.orderList} />
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
              <i className="fas fa-user-edit" onClick={this.editData} />
              <i className="fas fa-sign-out-alt" onClick={this.logout} />  
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
const mapStateToProps = (state) => {
  console.log(state.users)
  return { user: state.users };
};
export default connect(
  mapStateToProps, { logout, deleteUser }
)(EmployeeMenuPanel);
