import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Card from "../components/cards/Card";
import data from "../data/index";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Explore = () => {
  let { search } = useLocation();
  const category = search.split("=")[1];
  const [state, setState] = useState({
    loading: true,
    statedata: [],
  });

  useEffect(() => {
    let filterData = [];
    setTimeout(() => {
      if (category) {
        filterData = data.filter((data) => {
          return data.tag === category;
        });
      } else {
        filterData = data;
      }
      setState({ ...state, loading: false, statedata: filterData });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const { loading, statedata } = state;
  return (
    <>
      <Outlet />
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
