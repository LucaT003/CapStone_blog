import NavBar  from './components/NavBar';
import Home from './components/pages/home/Home';
import Write from './components/Write';
import Info from './components/Info';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Registrato from './components/Registrato';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/scrivi' element={<Write/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/set' element={<Settings/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/singleP' element={<SinglePost/>}/>
        <Route path='/regs' element={<Registrato/>}/>
      </Routes>
    </Router>
  );
}

export default App;
