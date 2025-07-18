import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/meals');
        setMeals(res.data);
      } catch (err) {
        console.error('Error fetching meals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const handleOrder = async (mealId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/orders',
        { mealId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('✅ Order placed successfully!');
    } catch (err) {
      console.error('Order failed:', err);
      alert('❌ Failed to place order. Please try again.');
    }
  };

  if (loading) {
    return <p className="text-center mt-8 text-gray-500">Loading meals...</p>;
  }

  return (
    <>
  <Carousel />
    <Hero />
    <Reviews/>
    <h2 className="text-center mb-5 display-6 fw-semibold text-warning">
        🍽️ Available Meals Now
      </h2>
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {meals.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">No meals available</p>
      ) : (
        meals.map((meal) => (
          <div key={meal._id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="w-full h-48">
              <img
                src={meal.image || 'https://via.placeholder.com/300x200?text=Meal'}
                alt={meal.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-orange-600">{meal.title}</h3>
              <p className="text-sm text-gray-600">{meal.description}</p>
              <p className="mt-1 font-bold">₹{meal.price}</p>

              {user?.role === 'user' && (
                <button
                  onClick={() => handleOrder(meal._id)}
                  className="mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
                >
                  Order Now
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  </>
  );
};

export default Home;
