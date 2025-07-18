import React from 'react';

const Carousel = () => {
  return (
    <div className="container py-4">
      <div
        id="mainCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Auto-rotate every 3 seconds
      >
        <div className="carousel-inner rounded shadow-sm overflow-hidden">
          <div className="carousel-item active">
            <img
              src="https://www.allrecipes.com/thmb/Pp-4RM1IlAghjBn3cYFEG7kii3g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140286_HomemadeDogFood_DDMFS_Beauty_009-6a6e82002dc3496eaa20dec6bfde6d6e.jpg"
              className="d-block w-100"
              alt="Home Cooked"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/64d26736b35f0c30ea2a5cde_PB-030122-PF-Whats-Your-Favorite-Indian-Thali-last.png"
              className="d-block w-100"
              alt="Indian Thali"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg"
              className="d-block w-100"
              alt="Chef"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
