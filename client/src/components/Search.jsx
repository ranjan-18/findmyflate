import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const cityList = ['Ranchi', 'Alagdiha', 'Hazaribagh', 'Dhanbad', 'Deogarh'];

const Search = () => {
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ location, gender, category });
  };

  return (
    <section className="w-full py-10 px-4 bg-gray-50">
      {/* 🔖 Form Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Find Rooms & Roommates
        </h2>
        <p className="text-sm text-gray-500">
          Use filters to find a perfect stay for your need
        </p>
      </div>

      {/* 🔍 Search Form */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 w-full max-w-screen-md bg-white shadow-lg p-6 rounded-xl md:rounded-full"
        >
          {/* Location Filter */}
          <div className="flex flex-col gap-1 w-full md:w-auto">
            <label htmlFor="location" className="text-sm font-medium text-gray-700">
              Location
            </label>
            <select
              id="location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select City</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div className="flex flex-col gap-1 w-full md:w-auto">
            <label htmlFor="gender" className="text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Any">Any</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col gap-1 w-full md:w-auto">
            <label htmlFor="category" className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Flat">Flat</option>
              <option value="Room">Room</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm transition-all rounded-full flex items-center justify-center gap-2"
          >
            <FiSearch className="w-5 h-5" />
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
