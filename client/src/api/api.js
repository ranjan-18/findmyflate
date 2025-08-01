import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api", // adjust for production
});

export const fetchListings = async (filters) => {
  const params = {};

  if (filters.location) params.location = filters.location;
  if (filters.maxRent) params.maxRent = filters.maxRent;
  if (filters.sharing && filters.sharing !== 'any') params.sharing = filters.sharing;

  const response = await API.get('/listings', { params });
  return response;
};

export const registerUser = (formData) => API.post("/auth/register", formData);

// Login user
export const loginUser = (formData) => API.post('/auth/login', formData);
