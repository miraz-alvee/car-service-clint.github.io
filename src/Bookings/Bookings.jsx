import React, { useContext, useEffect, useState } from 'react';
import image from '../assets/images/checkout/checkout.png';
import { authContext } from '../Providers/AuthProvider';
import BookingDetailes from './BookingDetailes';

const Bookings = () => {
    const { user } = useContext(authContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <div className="carousel w-full">
                <div className="carousel-item relative w-full">
                    <img src={image} className="w-full mb-5 mt-5" />
                    <div className="absolute rounded-lg flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white pl-12 space-y-7 w-1/2 mb-20'>
                            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-3xl font-medium text-center mt-5'>Bookings : {bookings.length}</h2>
            <table className="table mt-5">
                <thead >
                    <tr className='font-bold'>
                        <th></th>
                        <th >Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingDetailes
                            key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingDetailes>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;