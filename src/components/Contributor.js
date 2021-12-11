import React from "react";
import AboutCard from "./cards/AboutCard";
import User from "../data/user";

const Contributor = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-8 m-auto text-center">
            <h1>Our Top Contributor</h1>
            <h6 style={{ color: "red" }}>Blah blah!</h6>
          </div>
        </div>
        <div className="row text-center">
          {User.map((person) => (
            <AboutCard
              key={person._id}
              name={person.name}
              designation={person.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributor;
