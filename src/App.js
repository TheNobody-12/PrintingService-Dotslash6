import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Navbar from './components/navbar';
import './components/bootstrap.min.css'
import './components/starter.css'
import './components/card-02.css'
import './components/navbar-05.css'
import './components/lineicons.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <center> <h1> Hello World !!! </h1> </center>
      <br></br>
      <br></br>
      <div className="container">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquet nisl, eget aliquet nisl ni
      </div>
      <Card />
      <Card />
    </div>
  );
}

export default App;
