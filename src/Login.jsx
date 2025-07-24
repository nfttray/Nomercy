import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demo: static username and password
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button style={{ marginTop: "1rem" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
