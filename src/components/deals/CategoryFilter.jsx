import React from 'react';
import { Filter } from 'lucide-react';
import { categories } from '../../data/categories';

const CategoryFilter = ({ selectedCategory, setSelectedCategory, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
      <h3 className="font-bold text-gray-900 mb-6 flex items-center text-lg">
        <Filter className="w-5 h-5 mr-2 text-red-600" />
        Categories
      </h3>
      <div className="space-y-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 text-sm font-medium ${
              selectedCategory === category.id 
                ? 'bg-red-50 text-red-700 border border-red-200 shadow-sm' 
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="text-xl">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
