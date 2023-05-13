import React from 'react';

const ServiceCard = ({service}) => {
  const {title, img, price} = service; 
  return (
    <div className="card bg-base-100 shadow-xl border border-[#E8E8E8]">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className='text-xl font-semibold text-[#FF3811]'>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;