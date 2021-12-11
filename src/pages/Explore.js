import React, { useState, useEffect } from "react";
import Card from "../components/cards/Card";
import data from "../data/index";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Explore = ({ location }) => {
  const category = location.search.split("=")[1];
  const [state, setstate] = useState({
    loading: false,
    statedata: [],
  });
  useEffect(() => {
    let filterData = [];
    if (category) {
      filterData = data.filter((data) => {
        return data.tag === category;
      });
    } else {
      filterData = data;
    }
    setstate({ ...state, loading: false, statedata: filterData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  const { loading, statedata } = state;
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <h1 className="text-center">
          Top{" "}
          <span style={{ color: "red" }}>
            <em>{category ? category : " "} </em>
          </span>
          Wallpaper
        </h1>
        {loading ? (
          <h1>
            <Loader />
          </h1>
        ) : (
          <>
            {statedata.length === 0 && (
              <Message variant="danger" message="Data Not Found" />
            )}
            <div className="row">
              {statedata.map((card) => (
                <Card key={card._id} profile={card.image} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Explore;
