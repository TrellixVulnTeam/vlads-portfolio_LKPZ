import React from 'react';
import moi from '../imgs/moi.png';

const About = () => {

    return (
        <div className="container about-container">
            <div className='row about-card'>
                <div className='col-sm'>
                    Yo ,what's up! 
                    I am trying to become a strong coder. One day at a time and make sure you enjoy what you do, otherwise you'll get lost! I know I can do this!
                </div>
                <img src={moi} alt="My caricature"></img>
            </div>
        </div>
    )
}

export default About;