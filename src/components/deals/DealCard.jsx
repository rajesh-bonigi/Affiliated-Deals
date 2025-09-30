import React from 'react';
import { Heart, Star, Clock, ExternalLink, TrendingUp, Eye } from 'lucide-react';
import { formatPrice, formatNumber } from '../../utils/priceCalculations';

const DealCard = ({ deal, isFavorite, onToggleFavorite }) => {
  const handleGetDeal = () => {
    window.open(deal.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const savings = deal.originalPrice - deal.salePrice;

  return (
    <div className="bg-white rounded-lg border hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Deal Header with Badges */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <div className="flex flex-wrap gap-2">
            {deal.hotDeal && (
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                🔥 HOT DEAL
              </span>
            )}
            {deal.trending && (
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center">
                <TrendingUp className="w-2 h-2 mr-1" />
                TRENDING
              </span>
            )}
           {/*  <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-bold">
              {deal.discount}% OFF
            </span> */}
          </div>
          <button
            onClick={() => onToggleFavorite(deal.id)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Heart className={`md:hidden w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
        {/* <div className="text-[154px] text-center mb-4">{deal.image}</div> */}
<div className="text-[150px] flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
  {deal.image}
</div>
           <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-small text-gray-600">{deal.store}</span> 
             
            </div>
          <div className="flex-1 min-w-0">
           <button
            onClick={handleGetDeal}
             className="text-start ext-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
              {deal.title}
             
          </button>
            <p className="md:hidden text-gray-600 text-sm line-clamp-2 mb-2">{deal.description}</p>
            {/* <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="font-medium text-gray-700">{deal.store}</span>
              <div className="md:hidden flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{deal.rating}</span>
                <span>({formatNumber(deal.reviews)})</span>
              </div>
            </div> */}
          </div>
        </div>
         
        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-3 mb-2">
            <span className="text-1xl font-bold text-black-600">{formatPrice(deal.salePrice)}</span>
            <span className="text-1xl text-gray-300 line-through decoration-red-500">{formatPrice(deal.originalPrice)}</span>
            
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-bold">
              {deal.discount}% OFF
            
            </span>
             
          </div>
          <div className="md:hidden flex items-center justify-between text-sm">
            <span className="text-green-600 font-semibold">
              Save {formatPrice(savings)}
            </span>
             <span className="font-medium text-gray-700">{deal.store}</span>
            <div className="md:hidden flex items-center text-orange-600 font-medium">
              <Clock className="w-4 h-4 mr-1" />
              <span>Expires in {deal.expiresIn}</span>
             <span className="font-medium text-gray-700">{deal.store}</span>
            </div>
          </div>
        </div>
        

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleGetDeal}
            className="md:hidden flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
             
            <span>Get Deal</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="md:hidden px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;