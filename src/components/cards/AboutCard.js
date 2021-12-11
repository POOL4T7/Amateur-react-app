import React from "react";
import { Link } from "react-router-dom";

const AboutCard = ({ name, designation }) => {
  return (
    <div className="col-xl-3 col-sm-6 mb-3">
      <div className="bg-white shadow p-3 mb-5 bg-body rounded py-5 px-4">
        <img
          src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
          alt="profile"
          width="70%"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0">{name}</h5>
        <span className="small text-uppercase text-muted">{designation}</span>
        <ul className="social mb-0 list-inline mt-3">
          <li className="list-inline-item">
            <Link to="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
