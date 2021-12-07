import React from 'react'
import image from "../images/cover.jpg"
import AboutCard from './cards/AboutCard'
import Loader from "./Loader"

const About = () => {
    const arr = [1, 2, 3]
    return (
        <section className="about">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-8 m-auto text-center">
                        <h1>This is about section</h1>
                        <h6 style={{ color: "red" }}>Blah blah!</h6>
                    </div>
                </div>
                {arr.length > 0 ? <div className="row">
                    {arr.map(item => (
                        <AboutCard profile={image} />
                    ))}
                </div> : <Loader />}
            </div>
        </section>
    )
}

export default About
