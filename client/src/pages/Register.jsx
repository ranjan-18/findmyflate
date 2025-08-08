import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../utils/axios';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', form, {
        withCredentials: true,
      });
      toast.success('Registration successful!');
      navigate('/');
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      toast.error('Registration failed!');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="mb-4 w-full p-2 border rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone (10 digits)"
          onChange={handleChange}
          required
          pattern="\d{10}"
          title="Please enter a 10-digit phone number"
          className="mb-4 w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="mb-4 w-full p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="mb-4 w-full p-2 border rounded"
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="mb-6 w-full p-2 border rounded"
        >
          <option value="">Select Role</option>
          <option value="owner">Owner</option>
          <option value="tenant">Tenant</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
