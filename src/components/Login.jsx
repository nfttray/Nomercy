import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      username,
      level: 1,
      xp: 0,
      tasks: [],
    };
    onLogin(userData);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "1rem" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
