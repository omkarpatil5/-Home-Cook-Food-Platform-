import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/meals/my-meals', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMeals(res.data);
      } catch (err) {
        console.error('Failed to fetch chef meals:', err);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">My Meals</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {meals.length === 0 ? (
          <p className="text-gray-500 col-span-full">You haven't added any meals yet.</p>
        ) : (
          meals.map((meal) => (
            <div key={meal._id} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={meal.image || 'https://via.placeholder.com/300x200?text=Meal'}
                alt={meal.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold text-orange-600">{meal.title}</h3>
              <p className="text-sm text-gray-600">{meal.description}</p>
              <p className="mt-2 font-bold">₹{meal.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyMeals;
