import React from "react";

const model = ({ Background }) => {
  const url = "https://modelinfo.s3.ap-south-1.amazonaws.com/cover/1636045560525_Lana+rhoades.jpg";
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          Height: "100vh",
          width: "100%"
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", height: "100vh" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <h1 className="text-white mb-0">Page title</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default model;
