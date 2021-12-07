import React from "react";
import { Link } from "react-router-dom";
import Trending from "../components/Trending";
import About from "../components/About";
import Contact from "../components/Contact"
import Loader from "../components/Loader";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pt-5 text-center">
              <h1 className="pt-5">Welcome to the new era of collections</h1>
              <Link to="/models" className="btn btn-outline-success">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Loader />
      <Trending />
      <About />
      <Contact />
    </>
  );
};

export default Home;
