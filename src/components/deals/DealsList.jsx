import React from 'react';
import DealCard from './DealCard';

const DealsList = ({ deals, favorites, toggleFavorite, isFavorite }) => {
  if (!deals || deals.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No deals found</h3>
        <p className="text-gray-600">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {deals.map(deal => (
        <DealCard
          key={deal.id}
          deal={deal}
          isFavorite={isFavorite(deal.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default DealsList;