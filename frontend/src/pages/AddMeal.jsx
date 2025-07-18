import React, { useState } from 'react';
import axios from 'axios';

const AddMeal = () => {
  const [meal, setMeal] = useState({
  title: '',
  description: '',
  price: '',
  image: '', // ← Add this
});

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMeal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:5000/api/meals/add',
        meal,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage('Meal added successfully!');
      setMeal({ title: '', description: '', price: '', image: '' }); // ✅ clear all fields

    } catch (err) {
      setMessage(err.response?.data?.error || 'Error adding meal');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-xl font-semibold text-center mb-4">Add New Meal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Meal Title"
          value={meal.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
  type="text"
  name="image"
  placeholder="Image URL"
  value={meal.image}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded px-4 py-2"
/>

        <textarea
          name="description"
          placeholder="Meal Description"
          value={meal.description}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={meal.price}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default AddMeal;
