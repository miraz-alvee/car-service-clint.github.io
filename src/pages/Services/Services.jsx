import React, { useEffect, useState } from 'react';
import Card from './Card';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-4'>
            <div className='text-center space-y-4'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
                <h2 className='text-5xl'>Our Service  Area</h2>
                <p className='font-medium'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 mb-5'>
                {
                    services.map(service => <Card key={service._id} service={service} ></Card>)
                }
            </div>

        </div>
    );
};

export default Services;