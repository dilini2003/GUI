import Guest from './Component/Guest';
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Component/Login/LoginPage';
import Account from './Component/Account';
import Cart from './Component/Cart/Cart';
import Heart from './Component/Heart/Heart';
import Eye from './Component/Eye/Eye';


function App() {
  
  const [isLoggedOut] = useState(false);
  const [isLoggedIn] = useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Guest isLogged={isLoggedOut}/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<Account isLogged={isLoggedIn}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/heart" element={<Heart/> } />
          <Route path="/eye/:bookId" element={<Eye/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
