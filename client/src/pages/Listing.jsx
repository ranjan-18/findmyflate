import React, { useEffect, useState } from 'react';
import { fetchListings } from '../api/api';
import ListingCard from '../components/ListingCard';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    maxRent: '',
    sharing: 'any',
  });

  const loadListings = async () => {
    try {
      const { data } = await fetchListings(filters);
      setListings(data.listings || []);
    } catch (error) {
      console.error("Failed to load listings:", error.message);
    }
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Browse Available Listings</h1>

      {/* Filters */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border border-gray-300 p-2 rounded-md"
        />

        <input
          type="number"
          placeholder="Max Rent"
          value={filters.maxRent}
          onChange={(e) => setFilters({ ...filters, maxRent: e.target.value })}
          className="border border-gray-300 p-2 rounded-md"
        />

        <select
          value={filters.sharing}
          onChange={(e) => setFilters({ ...filters, sharing: e.target.value })}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="any">Any</option>
          <option value="private">Private</option>
          <option value="shared">Shared</option>
        </select>

        <button
          onClick={loadListings}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Search
        </button>
      </div>

      {/* Listings */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No listings found.</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
