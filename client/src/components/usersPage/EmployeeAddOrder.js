import React from "react";

class EmployeeAddOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectList: ["Pizza", "Burgers", "Pasta", "Sushi", "Drink"]
    };
  }

  renderType() {
    return this.state.selectList.forEach(element => {
      return <option>{element}</option>;
    });
  }
  render() {
    return (
      <div className="neworder">
        <div className="neworder__form">
          <label className="neworder__label"> Select type</label>
          <form>
            <select className="neworder__select">
              <option>select type</option>
              {this.renderType()}
            </select>
          </form>
          <div className="employee__orderList">
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
            <div className="order" data-toggle="collapse" href="#collapse1">
              <div>
                <span className="order__status addorder">
                  Name of dishoiasdfn oiasdfj ioasdfoij jjdipa jasdf
                </span>
              </div>
              <span
                id="collapse1"
                className="panel-collapse collapse order__collapse"
              >
                <div className="pay__count">
                  <span className="pay__less" onClick={this.decrement}>
                    -
                  </span>
                  <span className="pay__input" id="pay__input">
                    1{" "}
                  </span>
                  <span className="pay__more" onClick={this.increment}>
                    +
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="neworder__list">
          <div>
            <span className="order__name">Pizza </span>
            <span className="order__extras"> dodatki</span>
            <span className="order__sauce"> SOS</span>
          </div>
          <div>
            <textarea className="neworder__select" />
            <div>Price</div> <div>23.5$</div>
            <div className="btn">dodaj zamowienie</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeAddOrder;
