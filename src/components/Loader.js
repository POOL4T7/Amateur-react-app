import React from 'react'

const Loader = () => {
    return (
        <div class="spinner-border" role="status" animation="border" style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "flex",
        }}>
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loader
