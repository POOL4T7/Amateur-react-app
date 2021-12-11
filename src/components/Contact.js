import React from "react";

const Contact = () => {
  return (
    <section className="contact py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5 m-auto text-center">
            <h1>Contact us</h1>
            <h6 style={{ color: "red" }}>blah blah!</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9 m-auto">
            <div className="row">
              <div className="col-md-4">
                <h6>Location</h6>
                <p>Metropolis</p>
                <h6>Phone</h6>
                <p>9451394513</p>
                <h6>Email</h6>
                <p>Kryptonian@gmail.com</p>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control bg-light"
                      placeholder="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control bg-light"
                      placeholder="email"
                    />
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-md-12">
                    <textarea name="" id="" className="form-control bg-light" cols="30" rows="5"></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-outline-success">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
