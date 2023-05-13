import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {_id, title, img, price} = service; 
  return (
    <div className="card bg-base-100 shadow-xl border border-[#E8E8E8]">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-semibold text-[#FF3811]'>Price: ${price}</p>
          <Link to={`/checkout/${_id}`}><FaArrowRight className='text-[#FF3811]'/></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;