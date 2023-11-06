import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Home from './components/Home';



function App() {
  return (
    <>
    <Router>
          <Navbar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/todos' element={<Todos/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
