import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleLogin = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  const updateUser = (updatedData) => {
    sessionStorage.setItem("user", JSON.stringify(updatedData));
    setUser(updatedData);
  };

  return user ? (
    <Dashboard user={user} onLogout={handleLogout} updateUser={updateUser} />
  ) : (
    <Login onLogin={handleLogin} />
  );
};

export default App;
