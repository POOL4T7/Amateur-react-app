import React from "react";

const Card = ({ profile }) => {
  return (
    <div className="col-md-4">
      <div className="card border-0">
        <div className="card-body">
          <img
            src={profile}
            alt="trending"
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
