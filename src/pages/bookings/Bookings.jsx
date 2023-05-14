import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]); 

  const url = `http://localhost:5000/bookings?email=${user?.email}`; 
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [url]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this booking!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your booking has been deleted.',
                'success'
              );
              const remaining = bookings.filter(booking => booking._id !== id);
              setBookings(remaining);
            }
          })
      }
    })
  }
  
  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'}) 
    }) 
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
          // update
          const remaining = bookings.filter(booking => booking._id !== id);
          const updated = bookings.find(booking => booking._id === id)
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      })
  }

  return (
    <div className='w-[90%] mx-auto my-20'>
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
              bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;