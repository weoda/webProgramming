import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div className="mainTitle">GANAA's online shop</div>
          <div className="rightSectionBar">
            <Link to="/">Дэлгүүр</Link>
            <Link to="/cart">Сагс</Link>
            <Link to="/profile">Профайл</Link>
          </div>
        </div>
        <div>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Shop users={this.state.users} />}
            />
            <Route
              path="/cart"
              exact
              render={() => <Cart users={this.state.users} />}
            />
            <Route
              path="/profile"
              exact
              render={() => <Profile users={this.state.users} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
