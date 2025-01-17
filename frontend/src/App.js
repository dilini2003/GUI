import './App.css';
import Guest from './Component/Guest';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Component/Login/LoginPage';
import Account from './Component/Account/Account';


function App() {
  const [userName, setName] = useState(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setName(storedUserName);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Guest userName={userName}/>} />
          <Route path="/login" element={<LoginPage setName={setName}/>} />
          <Route path="/account" element={<Account userName={userName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
