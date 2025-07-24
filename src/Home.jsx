import React from "react";

const Home = ({ onLogout }) => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome!</h1>
      <p>You are logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
