import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>HomeCook</Link>

      <div className="space-x-4">
        <Link to="/" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>Home</Link>

        {!user && (
          <>
            <Link to="/login" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>Login</Link>
            <Link to="/register" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>Register</Link>
          </>
        )}
        {user?.role === 'user' && (
          <>
  <Link to="/my-orders" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>My Orders</Link>
<Link to="/order" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>Order Now</Link>
  
  </>
)}





      {user?.role === 'chef' && (
  <>
    <Link to="/add-meal" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>Add Meal</Link>
    <Link to="/my-meals" className="navbar-brand fw-bold" style={{ color: '#ea580c' }}>My Meals</Link>
  </>
)}


        {user && (
          <button
            onClick={logout}
            className="text-gray-700 hover:text-orange-500"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
