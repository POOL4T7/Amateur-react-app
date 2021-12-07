import React from 'react'
import TrendingCard from './cards/TrendingCard';
import Trendig from "../images/trending.jpg"

const Trending = () => {
    const arr = [1, 2, 3, 4];
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
                    {arr.map(item => (
                        <TrendingCard profile={Trendig} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Trending
