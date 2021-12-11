import React from "react";
import { Link } from "react-router-dom";

const TrendingCard = ({ profile, name }) => {
  return (
    <div className="col-md-4 col-lg-3 text-center">
      <div className="card border-0 bg-white shadow bg-body rounded">
        <div className="card-body">
          <Link to={`explore?q=${name}`}>
            <img
              src={profile}
              alt="trending"
              className="img-fluid"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
