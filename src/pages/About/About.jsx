import React from 'react';
import person1 from '../../assets/images/about_us/parts.jpg'
import person2 from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-[600px]  bg-base-150 mb-5 mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person2} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={person1} className="w-1/2 absolute rounded-lg right-5 top-1/2 border-white border-4 shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-6'>
                        <h4 className='text-2xl text-orange-500'>About us</h4>
                        <h1 className="text-4xl font-bold">We are qualified <br /> & of experience  <br />in this field!</h1>
                        <p className="py-6 font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='font-medium'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;