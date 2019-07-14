import React from "react";
import $ from 'jquery';

class EmployeeEditData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category : 'profile',
      validation: 'What is wrong',
      profile: ['Change name', 'Change last name', 'Login'],
      email:  ['Old email', 'New email', 'Confirm new email'],
      password: ['Old password', 'New password', 'Confirm new password']
    }
  }
  componentDidMount() {
    this.changeColor()
  }

selectCategory=this.selectCategory.bind(this);
selectCategory(event) {
   this.setState({category: event.target.getAttribute('name')})
   this.changeColor();
}

changeColor() {
  $(".edit__navigation-item").click(function() {
    $(".edit__navigation-item").removeClass("editActive");
    $(this)
      .closest(".edit__navigation-item")
      .addClass("editActive");
  })
}

  renderView() {
    let name = this.state.category;
    let cos = `this.state.`+ name
    console.log(cos);

    return (
      <div> 
        <form className="profile__form">
          
          <div className='profile__validation'>{this.state.validation}</div>
          <div>
            <label className="profile__label"> {this.state.profile[0]}</label>
            <input className="profile__input" />
          </div>
          <div>
            <label className="profile__label"> {this.state.profile[1]}</label>
            <input className="profile__input" />
          </div>
          <div>
            <label className="profile__label">{this.state.profile[2]}</label>
            <input className="profile__input" />
          </div> 

          <button className="btn profile__btn">Save data</button>
        </form>
      </div>
    );
  }

  render() {
    console.log(this.state.category)
    return (
      <span className="edit">
        <nav className="edit">
          <ul className="edit__navigation">
            <li className="edit__navigation-item editActive " name='profile' onClick={this.selectCategory}>
                Profile
            </li>
            <li className="edit__navigation-item" name='email' onClick={this.selectCategory}>
                Email
            </li>
            <li className="edit__navigation-item" name='password' onClick={this.selectCategory}>
                Password
            </li>
          </ul>
        </nav>
        {this.renderView()}
      </span>
    );
  }
}

export default EmployeeEditData;
