import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="proContainer">
        <div>{`Одоогийн хэрэглэгчийн ID: ${this.props.id}`}</div>
        <span style={{ fontSize: "30px" }}>Хэрэглэгч сонгох:</span>
        <div>
          <div className={["userButton"]} onClick={() => {}}>
            <Link>Хэрэглэгч нэмэх</Link>
          </div>
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
