import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import ViewStudent from "./component/students/ViewStudent";
import DeleteStudent from "./component/students/DeleteStudent";
import AddStudent from "./component/students/AddStudent";
import ModifyStudent from "./component/students/ModifyStudent";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={Home} />
            <Route exact path="/students/about" component={About} />
            <Route exact path="/students/contact" component={Contact} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/view/:id" component={ViewStudent} />
            <Route
              exact
              path="/students/modify/:id"
              component={ModifyStudent}
            />
            <Route
              exact
              path="/students/delete/:id"
              component={DeleteStudent}
            />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
