import React from 'react';
import { Heart, Star, Clock, ExternalLink, TrendingUp, Eye } from 'lucide-react';
import { formatPrice, formatNumber } from '../../utils/priceCalculations';

const DealCard = ({ deal, isFavorite, onToggleFavorite }) => {
  const handleGetDeal = () => {
    window.open(deal.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  const savings = deal.originalPrice - deal.salePrice;

  return (
    <div className="bg-white rounded-lg border hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Deal Header with Badges */}
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between mb-3">
          <div className="flex flex-wrap gap-2">
            {deal.hotDeal && (
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                🔥 HOT DEAL
              </span>
            )}
            {deal.trending && (
              <span className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                TRENDING
              </span>
            )}
            <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-bold">
              {deal.discount}% OFF
            </span>
          </div>
          <button
            onClick={() => onToggleFavorite(deal.id)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        {/* Product Info */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="text-4xl">{deal.image}</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
              {deal.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">{deal.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="font-medium text-gray-700">{deal.store}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{deal.rating}</span>
                <span>({formatNumber(deal.reviews)})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-3 mb-2">
            <span className="text-2xl font-bold text-green-600">{formatPrice(deal.salePrice)}</span>
            <span className="text-lg text-gray-400 line-through">{formatPrice(deal.originalPrice)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-600 font-semibold">
              Save {formatPrice(savings)}
            </span>
            <div className="flex items-center text-orange-600 font-medium">
              <Clock className="w-4 h-4 mr-1" />
              <span>Expires in {deal.expiresIn}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleGetDeal}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <span>Get Deal</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;