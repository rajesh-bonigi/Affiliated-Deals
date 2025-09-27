import { useState, useEffect } from 'react';
import { generateDeals } from '../data/generateDeals';

export const useDeals = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDeals = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const generatedDeals = generateDeals(100);
        setDeals(generatedDeals);
      } catch (err) {
        setError('Failed to load deals');
        console.error('Error loading deals:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDeals();
  }, []);

  const refreshDeals = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const generatedDeals = generateDeals(100);
      setDeals(generatedDeals);
    } catch (err) {
      setError('Failed to refresh deals');
    } finally {
      setLoading(false);
    }
  };

  return { deals, loading, error, refreshDeals };
};