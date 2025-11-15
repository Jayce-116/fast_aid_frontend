import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to FaST Aid</h1>
      <p>Your first aid and wellness companion.</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Home;
