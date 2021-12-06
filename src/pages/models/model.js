import React from "react";
import cover from "../../images/cover.jpg";

const model = ({ Background }) => {
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(" + cover + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          maxHeight: "92vh"
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", height: "92vh" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <h1 className="text-white mb-0">Page title</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default model;
