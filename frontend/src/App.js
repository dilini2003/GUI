import './App.css';
import Guest from './Component/Guest';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Component/Login/LoginPage';
import Account from './Component/Account/Account';
import Cart from './Component/Cart/Cart';
import Heart from './Heart/Heart';
import Eye from './Component/Eye/Eye';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Guest />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/heart" element={<Heart/> } />
          <Route path="/eye/:bookId" element={<Eye/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
