import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Initialize from state instead of localStorage
    return new Set();
  });

  const toggleFavorite = (dealId) => {
    const newFavorites = new Set(favorites);
    if (favorites.has(dealId)) {
      newFavorites.delete(dealId);
    } else {
      newFavorites.add(dealId);
    }
    setFavorites(newFavorites);
  };

  const isFavorite = (dealId) => favorites.has(dealId);
  const getFavoritesCount = () => favorites.size;
  const clearFavorites = () => setFavorites(new Set());

  return { 
    favorites, 
    toggleFavorite, 
    isFavorite, 
    getFavoritesCount, 
    clearFavorites 
  };
};