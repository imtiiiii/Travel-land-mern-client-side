import logo from './logo.svg';
import './App.css';
//adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AddService from './Components/AddService/AddService';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AllBookings from './Components/AllBookings/AllBookings';
import Book from './Components/Home/Service/Book/Book';
import MyBookings from './Components/MyBookings/MyBookings';
import useAuth from './Hooks/useAuth';
function App() {

  return (
    <div className="App">
      <AuthProvider>

        <Router>
          {/* header contains->banner,navbar */}
          <Header></Header>
          <Switch>
            {/* default home page  */}
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home/:id" exact>
              <Book></Book>
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
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/allbookings">
              <AllBookings></AllBookings>
            </Route>
            <Route path={`/mybookings`} >
              <MyBookings></MyBookings>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
