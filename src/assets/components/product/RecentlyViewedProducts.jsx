import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RECENTLY_VIEWED_KEY = 'recentlyViewedProducts';

const RecentlyViewedProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 4; // Number of products visible at once

  useEffect(() => {
    // Get recently viewed products from localStorage
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProducts(parsed.slice(0, 10));
      } catch {
        setProducts([]);
      }
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, Math.max(products.length - maxVisible, 0))
    );
  };

  if (!products.length) return null;

  return (
    <div className="my-8 bg-white rounded-xl shadow-lg px-4 py-8 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <h3 className="text-lg font-semibold text-orange-500 mb-2 sm:mb-0">
          Recently Viewed Products
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-orange-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            aria-label="Previous"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= products.length - maxVisible}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-orange-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / maxVisible)}%)`,
          }}
        >
          {products.map((product, idx) => (
            <div
              className="min-w-[50%] lg:min-w-[23%] max-w-[23%] mx-[1%] bg-gray-50 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition mb-2"
              key={product._id || idx}
            >
              <Link
                to={`/app/productdetails/slug/${product.slug || product._id}`}
                className="flex flex-col items-center w-full h-full text-inherit no-underline"
              >
                <img
                  src={
                    product.thumbnail ||
                    (product.images && product.images[0]?.url) ||
                    '/placehold.co/400x400/CCCCCC/000000?text=No+Image'
                  }
                  alt={product.name}
                  className="w-full h-40 object-cover border-b border-gray-100"
                />
                <div className="py-3 px-2 text-center w-full">
                  <div className="text-base font-medium text-gray-800 mb-1 truncate">
                    {product.name}
                  </div>
                  <div className="text-orange-500 font-bold text-lg">
                    ₦{product.salePrice || product.price}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewedProducts;