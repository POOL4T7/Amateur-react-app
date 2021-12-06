import React from 'react'
import Trendig from "../images/trending.jpg"

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
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="card border-0 bg-light">
                            <div className="card-body">
                                <img src={Trendig} alt="trending" className="img-fluid" />
                            </div>
                        </div>
                        <h6>Name</h6>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card border-0 bg-light">
                            <div className="card-body">
                                <img src={Trendig} alt="trending" className="img-fluid" />
                            </div>
                        </div>
                        <h6>Name</h6>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card border-0 bg-light">
                            <div className="card-body">
                                <img src={Trendig} alt="trending" className="img-fluid" />
                            </div>
                        </div>
                        <h6>Name</h6>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="card border-0 bg-light">
                            <div className="card-body">
                                <img src={Trendig} alt="trending" className="img-fluid" />
                            </div>
                        </div>
                        <h6>Name</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending
