import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddMeal from './pages/AddMeal';
import RequireChef from './components/RequireChef';
import { AuthProvider } from './context/AuthContext';
import MyMeals from './pages/MyMeals';
import MyOrders from './pages/MyOrders';
import OrderNow from './pages/OrderNow';

// Inside <Routes>



function App() {
  return (
  <AuthProvider>
    <Router>
      <div className="min-h-screen bg-[#fffdf7] text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route  path="/add-meal"  element={<RequireChef><AddMeal /></RequireChef>  }/>
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order" element={<OrderNow />} />
          <Route
  path="/my-meals"
  element={
    <RequireChef>
      <MyMeals />
    </RequireChef>
  }
/>
          
        </Routes>
      </div>
    </Router>
  </AuthProvider>
  );
}

export default App;
