import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center" id="home">
      <h1>Amatures aka Models</h1>
      <h5>Welcome to the new era of collections</h5>
      <Link to="/models" className="btn btn-outline-success">
        Explore
      </Link>
    </div>
  );
};

export default Home;
