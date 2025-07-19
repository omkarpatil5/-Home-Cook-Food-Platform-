import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderNow = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 6;

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/meals`);
        setMeals(res.data);
        setFilteredMeals(res.data);
      } catch (err) {
        console.error('Error fetching meals:', err);
      }
    };

    fetchMeals();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = meals.filter(meal =>
      meal.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMeals(filtered);
    setCurrentPage(1);
  };

  const handleOrder = async (mealId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/orders`,
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

  // Pagination logic
  const indexOfLast = currentPage * mealsPerPage;
  const indexOfFirst = indexOfLast - mealsPerPage;
  const currentMeals = filteredMeals.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Order Your Favorite Meals</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search meals..."
        value={search}
        onChange={handleSearch}
      />

      <div className="row g-4">
        {currentMeals.length === 0 ? (
          <p className="text-muted">No meals found.</p>
        ) : (
          currentMeals.map(meal => (
            <div className="col-12 col-sm-6 col-md-4" key={meal._id}>
              <div className="card h-100">
                <img
                  src={meal.image || 'https://via.placeholder.com/300x200?text=Meal'}
                  alt={meal.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning">{meal.title}</h5>
                  <p className="card-text text-muted">{meal.description}</p>
                  <p className="fw-bold mb-3">₹{meal.price}</p>

                  {user?.role === 'user' && (
                    <button
                      className="btn btn-warning mt-auto"
                      onClick={() => handleOrder(meal._id)}
                    >
                      Order Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default OrderNow;
