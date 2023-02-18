import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrintForm from './components/Form/PrintForm';

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/shop/:id" element={<PrintForm />} />
      </Routes>
    </div>
  );
}

export default App;
