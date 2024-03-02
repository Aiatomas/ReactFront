import './bootstrap.css';
import './bootstrap.css.map';
import './App.css';
import './StylesOld.css';
import {Provider} from "react-redux";
import store from "./stores/store";
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react";
import AllWindow from "./components/AllWindow";
import AnimatedComponent from "./AnimatedComponent";
import Gravity from "./components/Gravity";

function App() {
    console.log("App");


    return (
      <Provider store={store}>
          <Router>
              <AllWindow/>
              {/*<AnimatedComponent/>*/}
              {/*<Gravity/>*/}
          </Router>
      </Provider>
  );
}

export default App;
