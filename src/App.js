import './bootstrap.css';
import './bootstrap.css.map';
import './StylesOld.css';
import './App.css';
import {Provider} from "react-redux";
import store from "./stores/store";
import Nav from "./components/calc/nav/Nav";
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react";
import AfterNav from "./components/calc/AfterNav";

function App() {

  return (
      <Provider store={store}>
          <Router>
              <Nav/>
              <AfterNav/>
          </Router>
      </Provider>
  );
}

export default App;
