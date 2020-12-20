import React, { Component } from "react";
import "./Shop.css";
import ShoppyCard from "./ShoppyCard";
export default class Shop extends Component {
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
    return (
      <div className="shopCont">
        <h2 style={{ color: "rgb(248, 98, 161)", padding: "15px 0px" }}>
          СҮҮЛД НЭМЭГДСЭН БАРААНУУД
        </h2>
        <div className="body">
          {this.state.items.map((el, ind) => {
            return <ShoppyCard key={ind} items={el} />;
          })}
        </div>
      </div>
    );
  }
}
