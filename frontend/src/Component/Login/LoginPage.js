import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const LoginPage = ({ setUserName }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const loginResponse = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        setMessage("Login successful!");
        setSeverity("success");

        if (loginData.userName) {
          localStorage.setItem("userName", loginData.userName);
          setUserName(loginData.userName);
        } else {
          console.error("User name is missing in the response.");
        }

        if (loginData.userId) {
          localStorage.setItem("userId", loginData.userId);
        } else {
          console.error("User ID is missing in the response.");
        }

        setOpen(true);
        navigate("/account");
      } else {
        setMessage(loginData.error);
        setSeverity("error");
        setOpen(true);
      }
    } else {
      const signupResponse = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const signupData = await signupResponse.json();

      if (signupResponse.ok) {
        setMessage("Account created successfully!");
        setSeverity("success");
        setOpen(true);
        setIsLogin(true);
      } else {
        setMessage(signupData.error);
        setSeverity("error");
        setOpen(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <button className="close-button" onClick={handleLogin}>
          ×
        </button>
        <h2 className="login-title">
          {isLogin ? "Login to Bookly" : "Create Your Account"}
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="form-button">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="toggle-form-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="toggle-form-link" onClick={toggleForm}>
            {isLogin ? " Create one" : " Login"}
          </span>
        </p>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
