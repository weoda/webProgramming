import React, { Component } from "react";
import "./Profile.css";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="proContainer">
        <div>{`Одоогийн хэрэглэгч: ${this.props.users[0]}`}</div>
        <span style={{ fontSize: "30px" }}>Хэрэглэгч сонгох:</span>
        <div>
          {this.props.users.map((el, ind) => {
            return (
              <div
                className={["userButton"]}
                key={ind}
                onClick={() => this.props.changeUser(el._id)}
              >
                {el.first_name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
