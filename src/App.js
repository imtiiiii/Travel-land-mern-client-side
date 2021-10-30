import logo from './logo.svg';
import './App.css';
//adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AddService from './Components/Header/AddService/AddService';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddService></AddService>
    </div>
  );
}

export default App;
