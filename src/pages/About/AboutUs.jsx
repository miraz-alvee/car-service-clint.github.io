import React from 'react';
import person1 from '../../assets/images/about_us/parts.jpg'
import person2 from '../../assets/images/about_us/person.jpg'

const AboutUs = () => {
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
        <section className="py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Oil Change</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
               
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Tire Rotation</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Brake Inspection</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Brake Inspection</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Brake Inspection</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-2">Brake Inspection</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default AboutUs;