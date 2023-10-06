import React from 'react'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold">Unlocking Knowledge: Your Path to Educational Excellence</h1>
                    <p className="mb-5">Welcome to Education Events, where the pursuit of knowledge knows no bounds. We believe that education is the key to personal growth and societal progress. Our mission is to curate, organize, and facilitate exceptional educational events that empower individuals and communities to reach new heights. Explore a world of opportunities with us</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner