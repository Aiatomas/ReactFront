import './bootstrap.css';
import './bootstrap.css.map';
import './StylesOld.css';
import './App.css';
import {Provider} from "react-redux";
import store from "./stores/store";
import Nav from "./components/calc/nav/Nav";
import MainWindow from "./components/calc/main/MainWindow";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Files from "./components/calc/files/Files";
import CreateOrder from "./components/calc/createorder/CreateOrder";

function App() {

  return (
      <Provider store={store}>
          <Router>
              <Nav/>
              <Routes>
                  <Route path="/react" element={<MainWindow/>} />
                  <Route path="/react/files" element={<Files/>} />
                  <Route path="/react/createOrder" element={<CreateOrder/>} />
              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
