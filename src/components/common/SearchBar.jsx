import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ onClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Comprehensive list of search suggestions
  const allSearches = [
    'Laptops under $500',
    'Laptop deals',
    'Wireless headphones',
    'Bluetooth headphones',
    'Smart watches',
    'Apple Watch',
    'Kitchen appliances',
    'Coffee makers',
    'Running shoes',
    'Nike shoes',
    'Gaming accessories',
    'Gaming mouse',
    'Home decor',
    'Wall art',
    'Fitness equipment',
    'Yoga mats',
    'Smartphones',
    'iPhone deals',
    'TV deals',
    '4K TVs',
    'Tablets',
    'iPad',
    'Cameras',
    'DSLR cameras',
    'Speakers',
    'Bluetooth speakers'
  ];

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSuggestions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery);
      }
      setShowSuggestions(false);
      if (onClose) {
        onClose();
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    if (onSearch) {
      onSearch(suggestion);
    }
    setShowSuggestions(false);
    if (onClose) {
      onClose();
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Filter suggestions based on search query
  const filteredSuggestions = searchQuery.trim()
    ? allSearches.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allSearches.slice(0, 8); // Show first 8 when empty

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for deals, products, categories..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
          autoFocus
        />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {searchQuery ? 'Suggestions' : 'Popular Searches'}
            </div>
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 flex items-center space-x-3 transition-colors"
              >
                <Search className="w-4 h-4 text-gray-400" />
                <span>
                  {searchQuery ? (
                    // Highlight matching text
                    <span>
                      {suggestion.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) =>
                        part.toLowerCase() === searchQuery.toLowerCase() ? (
                          <span key={i} className="font-semibold text-red-600">{part}</span>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </span>
                  ) : (
                    suggestion
                  )}
                </span>
              </button>
            ))}
          </div>
          
          {/* No results message */}
          {searchQuery && filteredSuggestions.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              No suggestions found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;