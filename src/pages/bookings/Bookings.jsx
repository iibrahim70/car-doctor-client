import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]); 
  const navigate = useNavigate(); 

  const url = `https://car-doctor-server-sigma-sand.vercel.app/bookings?email=${user?.email}`; 
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if(!data.error){
          setBookings(data)
        }
        else{
          navigate('/'); 
        }
      })
  }, [url, navigate]);

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
        fetch(`https://car-doctor-server-sigma-sand.vercel.app/bookings/${id}`, {
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
    fetch(`https://car-doctor-server-sigma-sand.vercel.app/bookings/${id}`, {
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