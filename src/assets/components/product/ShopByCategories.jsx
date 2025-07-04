import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/api';
import { Link } from 'react-router-dom';

function ShopByCategories() {
  // Fetch categories from backend
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/categories`);
      return res.data.data || res.data;
    },
  });

  const categories = data || [];

  return (
    <div className="font-sans antialiased bg-white p-6 md:p-10 lg:p-12">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-orange-500 border-b-2 border-orange-500 pb-1">
          Shop by Categories
        </h2>
      </div>
      {isLoading && <div className="text-center py-8">Loading categories...</div>}
      {isError && <div className="text-center text-red-600 py-8">{error?.message || 'Failed to load categories.'}</div>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link
            to={`/app/productsbycategory/slug/${cat.slug}`}
            key={cat._id}
            className="bg-gray-50 rounded-xl shadow-sm overflow-hidden p-4 flex flex-col items-center text-center border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer focus:outline-none"
            style={{ textDecoration: 'none' }}
          >
            <img
              src={cat.image || 'https://placehold.co/120x120/E0F2F7/2C3E50?text=Category'}
              alt={cat.name}
              className="w-24 h-24 object-cover mb-3 rounded-full border border-blue-100"
              onError={e => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/120x120/E0F2F7/2C3E50?text=Category';
              }}
            />
            <h3 className="text-base font-medium text-gray-800 mb-1">{cat.name}</h3>
            {cat.description && <p className="text-xs text-gray-500">{cat.description}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ShopByCategories;