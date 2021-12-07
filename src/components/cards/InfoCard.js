import React from 'react'

const InfoCard = ({ profile }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="card border-0 bg-light">
                <div className="card-body">
                    <img src={profile} alt="trending" className="img-fluid" loading="lazy" />
                </div>
            </div>
            <h6>Name</h6>
        </div>
    )
}

export default InfoCard
