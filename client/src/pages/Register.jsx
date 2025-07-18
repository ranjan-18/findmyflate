import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import loginImg from '../assets/login.jpg';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profileImage: null,
  });

  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profileImage') {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    if (formData.profileImage) {
      data.append('profileImage', formData.profileImage);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      const message =
        error.response?.data?.message || 'Registration failed. Try again.';
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-10 h-screen overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-2xl ">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-center">Create Account</h2>
          <p className="text-sm text-gray-500 mb-6 text-center">Please fill in the details</p>

          <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
            <div>
              <label htmlFor="name" className="text-sm font-medium block mb-1">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                value={formData.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium block mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="profileImage" className="text-sm font-medium block mb-1">Profile Picture</label>
              <input
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full text-sm border border-gray-300 rounded-md px-4 py-2 bg-white file:mr-4 file:py-1 file:px-3 file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-3 w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-auto">
          <img
            src={loginImg}
            alt="Visual"
            className="w-full object-cover m-5 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
