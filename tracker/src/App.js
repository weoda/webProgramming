import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddExercise from "./components/AddExercise/AddExersice";
import ExerciseList from "./components/ExerciseList/ExerciseList";
import EditExercise from "./components/EditExercise/EditExercise";
import AddUser from "./components/AddUser/AddUser";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <div style={{ padding: "10px" }}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <ExerciseList {...props} />}
          />
          <Route
            path="/edit/:id"
            render={(props) => <EditExercise {...props} />}
          />
          <Route
            path="/create"
            render={(props) => <AddExercise {...props} />}
          />
          <Route path="/user" render={(props) => <AddUser {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
