import React from 'react'

const AboutCard = ({ profile }) => {
    return (
        <div className="col-md-4 text-center">
            <img src={profile} className="img-fluid " alt="about" loading="lazy" />
            <h5>Babe</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores labore illum tenetur amet officiis.</p>
        </div>
    )
}

export default AboutCard
