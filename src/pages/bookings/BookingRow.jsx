import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, bookingDate, service_title, price, img, status } = booking;
  
  

  return (
    <>
      <tr>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{service_title}</td>
        <td>{bookingDate}</td>
        <td>${price}</td>
        <th>
          {status === 'confirm' ? <button onClick={() => handleBookingConfirm(_id)} className="px-4 py-2 border border-[#FF3811] bg-[#FF3811] text-white font-medium rounded-md">Confirmed</button> : <button onClick={() => handleBookingConfirm(_id)} className="px-4 py-2 border border-[#FF3811] bg-[#FF3811] text-white font-medium rounded-md">Pending</button>}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;