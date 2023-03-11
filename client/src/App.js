import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Login from './Pages/LoginPage/Login.js';
import SignUp from './Pages/SignupPage/SignUp.js'
function App() {
  return (
    <>
<Header/>
<Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>

<Footer/> 
    </>
  );
}

export default App;
