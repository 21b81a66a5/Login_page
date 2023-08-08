"use client";
import React, { useState } from "react";
import api from "../config/index";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const loginUser = async(e) => {
    e.preventDefault();
    console.log("loginUser", email, password);
    //API call to login
    setLoading(true);
    try {
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
}catch (error) {
    alert("An error occurred, please try again later");
}
finally{
    setLoading(false);
}
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={loginUser}>
        <input
            type="email"
            placeholder="Email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
          <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
        </button>
        </form>
      </div>
    </div>
  );
}
