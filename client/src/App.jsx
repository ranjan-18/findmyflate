import React from 'react';
import Home from './pages/Home';
import { ToastWrapper } from './components/Toast'; // ✅ Import ToastContainer

const App = () => {
  return (
    <>
      <Home />
      <ToastWrapper /> {/* ✅ Toast Container mounted globally */}
    </>
  );
};

export default App;
