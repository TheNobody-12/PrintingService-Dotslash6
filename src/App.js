import './App.css';
import Card from './components/Card';
import { Route, Routes } from 'react-router-dom';
import PrintForm from './components/Form/PrintForm';
import Navbar from './components/Navbar/Navbar';
import Shops from './components/Shops/Shops';
import AddShop from './components/Form/AddShop';
import LogIn from './components/Form/LogIn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/shop/:id" element={<PrintForm />} />
        <Route exact path='/' element={<Shops />} />
        <Route exact path='add-shop' element={<AddShop />} />
        <Route exact path='*' element={<h1>404 Not Found</h1>} />
        <Route exact path='/login' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
