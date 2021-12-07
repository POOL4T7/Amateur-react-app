import React from 'react'

const TrendingCard = ({ profile }) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card border-0 bg-light">
                <div className="card-body">
                    <img src={profile} alt="trending" className="img-fluid" loading="lazy" />
                </div>
            </div>
            <h6>Name</h6>
        </div>
    )
}

export default TrendingCard
