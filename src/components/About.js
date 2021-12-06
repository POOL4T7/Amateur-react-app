import React from 'react'
import trending from "../images/trending.jpg"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8 m-auto text-center">
                        <h1>This is about section</h1>
                        <h6 style={{ color: "red" }}>Blah blah!</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={trending} className="img-fluid " alt="about" />
                        <h5>Babe</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores labore illum tenetur amet officiis.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={trending} className="img-fluid " alt="about" />
                        <h5>Babe</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores labore illum tenetur amet officiis.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={trending} className="img-fluid " alt="about" />
                        <h5>Babe</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores labore illum tenetur amet officiis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
