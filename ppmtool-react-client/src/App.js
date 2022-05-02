import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTask/AddProjectTask";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/addProject" element={<AddProject />} />
              <Route
                exact
                path="/updateProject/:id"
                element={<UpdateProject />}
              />
              <Route
                exact
                path="/projectBoard/:id"
                element={<ProjectBoard />}
              />
              <Route
                exact
                path="/addProjectTask/:id"
                element={<AddProjectTask />}
              />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
