import React from "react";
import TrendingCard from "./cards/TrendingCard";
import category from "../data/category";
import Loader from "./Loader";

const Trending = () => {
  return (
    <section className="trending">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-5  m-auto text-center">
            <h1>What's Trending</h1>
            <h6 style={{ color: "red" }}>Blah blah!</h6>
          </div>
        </div>
        {category.length > 0 ? (
          <div className="row">
            {category.map((item) => (
              <TrendingCard
                key={item._id}
                profile={item.image}
                name={item.name}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default Trending;
