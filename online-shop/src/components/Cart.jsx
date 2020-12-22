import React, { Component } from "react";
import "./Cart.css";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/shop")
      .then((res) => res.json())
      .then((data) => this.setState({ items: data }));
  }

  render() {
    console.log(this.props.users[0]);
    return <div className="cartItem"></div>;
  }
}
