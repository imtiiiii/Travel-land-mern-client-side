import logo from './logo.svg';
import './App.css';
//adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AddService from './Components/AddService/AddService';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <Router>
        {/* header contains->banner,navbar */}
        <Header></Header>
        <Switch>
          {/* default home page  */}
          <Route path="/" exact>
            <Home></Home>
          </Route>
          {/* home page  */}
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* login page */}
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* add service-private route */}
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
