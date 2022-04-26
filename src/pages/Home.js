import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="dashboard">
      <h1 className="title">Welcome to Atrea!</h1>
      <Link to="/profile">profile</Link>
    </div>
  );
}
