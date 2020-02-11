import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  state = {
    isLoggedIn: false
  };
  loginHandler = loggedIn => {
   
    this.setState({
      isLoggedIn: !loggedIn
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <ul style={{ listStyle: "none" }}>
            <li>
              <NavLink to="/" strict>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/users">User</NavLink>
            </li>
            <li>
              <NavLink to="/users/john" activeStyle={{ color: "teal" }}>
                User john
              </NavLink>
            </li>
            <li>
              <NavLink to="/users/peter" activeStyle={{ color: "teal" }}>
                User Peter
              </NavLink>
            </li>
          </ul>

          <input
            type="button"
            value={this.state.isLoggedIn ? "Log Out" : "Log In"}
            onClick={() => {
              this.loginHandler(this.state.isLoggedIn);
            }}
          />
          <hr />

          <Route exact strict path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/users/:id"
            component={this.state.isLoggedIn ? Users : null}
          />
          
        </div>
      </Router>
    );
  }
}
export default App;

const Users = ({ match }) => {
  return (
    <div>
      <h4>Welcome user {match.params.id}</h4>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h4>Welcome to Home</h4>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h4>About Page</h4>
    </div>
  );
};
