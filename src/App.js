import './App.css';
import {Provider} from "react-redux";
import store from "./stores/store";
import Nav from "./components/nav/Nav";
import MainWindow from "./components/main/MainWindow";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Files from "./components/files/Files";
import CreateOrder from "./components/createorder/CreateOrder";
import Counter from "./components/Counter";

function App() {

  return (
      <Provider store={store}>
          <Router>
              <Nav/>
              <Routes>
                  {/*<Route path="/react/counter" element={<Counter/>} />*/}
                  <Route path="/react" element={<MainWindow/>} />
                  <Route path="/react/files" element={<Files/>} />
                  <Route path="/react/createOrder" element={<CreateOrder/>} />
              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
