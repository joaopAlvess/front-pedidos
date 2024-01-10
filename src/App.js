
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Produtos from './routes/Produtos';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/produtos' element={<Produtos />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;