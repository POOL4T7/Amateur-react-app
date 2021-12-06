import React, {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const style={
    backgroundColor:"white",
    boxShadow:"0 1px 3px 0 rgba(0,0,0,.15)"
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={colorChange ? style:{}}   >
      <div className="container">
        <Link className="navbar-brand" to="/">
        Amateur
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span > <i class="fa fa-bars" aria-hidden="true"></i> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/models">
                Models
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/production"
              >
                Production
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/models/2"
              >
                contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="px-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
