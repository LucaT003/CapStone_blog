import NavBar  from './components/NavBar';
import Home from './components/pages/home/Home';
import Single from './components/pages/Single';
import Write from './components/Write';
import Info from './components/Info';
import Settings from './components/Settings';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import { BrowserRouter  as Router, Routes, Route, Link } from 'react-router-dom';
import SinglePost from './components/SinglePost';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

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
      </Routes>
    </Router>
  );
}

export default App;
