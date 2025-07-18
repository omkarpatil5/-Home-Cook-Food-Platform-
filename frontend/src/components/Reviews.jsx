import React from 'react';

const Reviews = () => {
  const reviewData = [
    {
      name: 'Aarti Sharma',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      comment: 'Delicious home-cooked meals! Felt like my mom made them.',
    },
    {
      name: 'Rohan Patel',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      comment: 'The flavors were authentic and delivery was on time. Loved it!',
    },
    {
      name: 'Sneha Mehta',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      comment: 'Great variety and very hygienic preparation. Highly recommended!',
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 text-warning fw-bold">💬 What Our Customers Say</h2>
      <div className="row g-4">
        {reviewData.map((review, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div className="card shadow-sm text-center p-3 w-100" style={{ maxWidth: '350px' }}>
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle mx-auto"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text fst-italic text-muted">"{review.comment}"</p>
                <h6 className="mt-3 text-orange-600 fw-semibold">{review.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
