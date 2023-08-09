"use client";
import React, { useState } from "react";
import api from "../config/index.js";
import "../styles.css"; // Import the custom styles


import image from "../image.jpg";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async(e) => {
    e.preventDefault();
    console.log("loginUser", email, password);
    const response = await fetch(`${api.url}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    const data = await response.json()
    console.log(data)
    if (data.status === true) {
        alert("Login Successful")
        localStorage.setItem("token", data.token)
        window.location.href = "/"
    } else {
        alert("Login Failed : please check your email and password")
    }
  };

  return (
    <div className="page">
      <div className="main">
        <div className="main-wrapper">
          <div className="login-methods">
            <div className="login-methods-signup text-gold">Sign up</div>
            <div className="login-methods-login btn-gray">Sign in</div>
          </div>
          <form onSubmit={loginUser}>
            <div className="form-message">
              <div className="form-message-title">Welcome</div>
              <div className="form-message-body">
                SURVEILLANCE 
              </div>
            </div>
            <div className="form-body">
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <div className="main-footer">
          <div className="title">Hacktopia</div>
          <hr />
          <div className="copyright">
            Copyright © 2023 All rights reserved | created by{" "}
            <a
              href="https://github.com/anusha9573"
              className="text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
            <p> </p> 
            </a>
          </div>
        </div>
      </div>

      <div className="pic">
      <img src={image} alt="" />
      </div>
    </div>
  );
}