import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Home from './components/Home';
import ReduxToolTodo from './components/ReduxToolTodo';
import CounterView from './app/features/counters/CounterView';



function App() {
  return (
    <>
    <Router>
          <Navbar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/todos' element={<Todos/>}/>
          <Route path='/redux/counter' element={<CounterView/>}/>
          <Route path='/redux/todos' element={<ReduxToolTodo/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
