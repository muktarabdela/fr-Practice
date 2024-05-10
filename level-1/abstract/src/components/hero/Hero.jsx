import React from 'react'
import "./hero.css"
const Hero = () => {
    return (
        <div className='hero_wrapper'>
            <div className=''>
                <div className='hero_text'>How can we help?
                </div>
                <div className='hero_search'>
                    <input type="search" placeholder='search' />
                    <svg className='hero_arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)' }}>
                        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                    </svg>
                </div>
            </div>
        </div>

    )
}

export default Hero