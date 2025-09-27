import React, { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import CategoryFilter from './components/deals/CategoryFilter';
import DealsList from './components/deals/DealsList';
import Pagination from './components/deals/Pagination';
import LoadingSpinner from './components/common/LoadingSpinner';

import { useFavorites } from './hooks/useFavorites';
import { usePagination } from './hooks/usePagination';
import { useDeals } from './hooks/useDeals';
//import { categories } from './data/categories';

const App = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const { deals, loading, error } = useDeals();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [filteredDeals, setFilteredDeals] = useState([]);
  
  const { currentItems, currentPage, totalPages, goToPage, totalItems } = usePagination(filteredDeals, 50);

  // Filter and sort deals
  useEffect(() => {
    let filtered = deals;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(deal => deal.category === selectedCategory);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'trending':
          return (b.trending ? 1 : 0) - (a.trending ? 1 : 0) || b.reviews - a.reviews;
        case 'discount':
          return b.discount - a.discount;
        case 'price':
          return a.salePrice - b.salePrice;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredDeals(filtered);
  }, [deals, selectedCategory, sortBy]);

  useEffect(() => {
    goToPage(1);
  }, [selectedCategory, sortBy]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-12 text-red-600">Error: {error}</div>;

  return (
    <MainLayout>
      <main className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col">
        

           <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
               <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Deals' : 
                    categories.find(c => c.id === selectedCategory)?.name || 'Deals'}
                </h1>
                <p className="text-gray-600 mt-1">{totalItems} deals found</p>
              </div> 
               <div className="flex items-center space-x-1 mt-1 sm:mt-0">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="trending">Trending</option>
                    <option value="discount">Biggest Discount</option>
                    <option value="price">Lowest Price</option>
                    <option value="rating">Highest Rating</option>
                  </select>
                </div>
              </div>  
            </div> 

            <DealsList
              deals={currentItems}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />

            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
                totalItems={totalItems}
              />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default App;
