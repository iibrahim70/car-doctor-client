import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
  const service = useLoaderData();  
  const {title, price, _id, img} = service; 
  const {user} = useContext(AuthContext); 

  const handleCheckOut = e => {
    e.preventDefault();
    const form = e.target; 
    const name = form.name.value; 
    const date = form.date.value; 
    const email = form.email.value; 
    const bookingInformation = {
      service_id: _id, 
      customerName: name, 
      email: email,
      service_title: title,  
      img: img,
      price: price,
      bookingDate: date, 
    }
    console.log(bookingInformation);

    fetch('https://car-doctor-server-sigma-sand.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingInformation)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId) {
          Swal.fire({
            title: 'Custom width, padding, color, background.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat`
          })
        }
      })
  }

  return (
    <div className='w-[90%] mx-auto my-20'>
      <h2 className='text-center text-3xl font-medium mb-5'>Check Out: {title}</h2>
      <form onSubmit={handleCheckOut}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name='date' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due</span>
            </label>
            <input type="text" name='due' defaultValue={'$'+ price} className="input input-bordered" />
          </div>
        </div>
        <div className="form-control mt-8">
          <button className="px-4 py-2 border border-[#FF3811] bg-[#FF3811] text-white font-medium rounded-md uppercase">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;