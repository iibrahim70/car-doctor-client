import React from 'react';

const BookingRow = ({booking}) => {
  const { customerName, email, bookingDate, service_title, price, img } = booking; 
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
          <button className="px-4 py-2 border border-[#FF3811] bg-[#FF3811] text-white font-medium rounded-md">Pending</button>
        </th>
      </tr>
    </>
  );
};

export default BookingRow;