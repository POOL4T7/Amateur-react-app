import React from 'react'

const Loader = () => {
    return (
        <div className="spinner-border" role="status" animation="border" style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "flex",
            marginTop: "5rem"
        }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loader
