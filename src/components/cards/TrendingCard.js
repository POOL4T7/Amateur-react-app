import React from 'react'

const TrendingCard = ({ profile }) => {
    return (
        <div className="col-md-3 text-center ">
            <div className="card border-0 bg-white shadow bg-body rounded">
                <div className="card-body">
                    <img src={profile} alt="trending" className="img-fluid" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default TrendingCard
