import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]); 

  console.log(user);
  const url = `http://localhost:5000/bookings?email=${user?.email}`; 
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [])

  return (
    <div className='w-[90%] mx-auto'>
      <h2>Your Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map(booking => <BookingRow key={booking._id} booking={booking} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;