import logo from './logo.svg';
import './App.css';
//adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AddService from './Components/AddService/AddService';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddService></AddService>
      <Home></Home>
    </div>
  );
}

export default App;
