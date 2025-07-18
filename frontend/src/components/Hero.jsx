import React from 'react';

const Hero = () => {
  return (
    <div className="container-fluid px-4 py-5 bg-white">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-12 col-lg-6">
          <img
            src="https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg"
            className="d-block mx-auto img-fluid rounded shadow"
            alt="Delicious home-cooked meal"
            style={{ maxHeight: '420px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-5 fw-bold text-orange lh-1 mb-3">
            Homemade Meals Delivered Fresh
          </h1>
          <p className="lead text-muted">
            Enjoy fresh, hygienic, and delicious food cooked by local chefs. Whether you're craving comfort food or looking for healthy meals, we’ve got you covered.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
            <a href="/login" className="btn btn-warning btn-lg px-4 me-md-2">
              Order Now
            </a>
            <a href="/register" className="btn btn-outline-secondary btn-lg px-4">
              Become a Chef
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
