// src/components/ListingCard.jsx
import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={listing.imageUrl || "https://via.placeholder.com/300"}
        alt={listing.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{listing.title}</h2>
        <p className="text-gray-600 text-sm">{listing.location}</p>
        <p className="text-blue-600 font-bold mt-2">₹{listing.price}</p>
      </div>
    </div>
  );
};

export default ListingCard;
