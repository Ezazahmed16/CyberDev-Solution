import React from 'react'

const Subscribe = () => {
    return (
        <div className='text-center'>
            <h3 className='text-2xl my-10' style={{ color: '#20B15A' }}>SUBSCRIBE</h3>
            <h1 className='text-3xl mb-8'>Subscribe to get the latest news about us</h1>
            <p className='text-xs mb-10' style={{ color: '#8B8B8B' }}>Please drop your email below to get daily update about what we do</p>

            <div className="mb-10">
                <div className="join items-center">
                    <input className="input input-success input-xs md:input-lg input-bordered join-item" placeholder="Enter Your Email Adress" />
                    <button style={{ background: '#F55F1D', color: '#fff' }} className="btn btn-xs md:btn-lg join-item">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe