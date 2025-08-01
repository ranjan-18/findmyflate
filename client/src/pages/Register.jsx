import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../assets/login.jpg';
import { registerUser } from '../api/api.js';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, phone, email, password, role };
      const res = await registerUser(payload);
      toast.success("Registration successful!");
      navigate('/login');
    } catch (err) {
      console.error("Register error:", err);
      toast.error(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gray-50 py-12 px-4 md:px-8">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <div className="flex justify-center items-center bg-gray-100">
          <img
            src={signup}
            alt="Sign Up Illustration"
            className="object-cover w-full md:h-full"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign Up</h1>
          <p className="text-gray-600 mb-6 text-center">Create an account to list flats or find your next stay.</p>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Enter your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="text-left">
              <label className="block mb-1 text-sm font-medium text-gray-700">Select Role</label>
              <select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a role</option>
                <option value="tenant">Tenant</option>
                <option value="owner">Owner</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Create Account
            </button>
          </form>

          {/* Link to Login */}
          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
