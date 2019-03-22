import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// Layout Components
import { Navbar, Landing, Footer } from "./components/layout";

//Authorization Components
import { Login, Register } from "./components/auth";

//import Navbar from "./components/layout/Navbar";
//import Footer from "./components/layout/Footer";
//import Landing from "./components/layout/Landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />

            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
