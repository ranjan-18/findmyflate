import React from 'react';

const ListingCard = ({ listing }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow hover:shadow-md transition overflow-hidden">
      <img src={listing.imageUrl} alt="room" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{listing.location}</h3>
        <p className="text-gray-600">₹{listing.rent}/month</p>
        <p className="text-sm text-gray-500 capitalize">{listing.sharing} room</p>
      </div>
    </div>
  );
};

export default ListingCard;
