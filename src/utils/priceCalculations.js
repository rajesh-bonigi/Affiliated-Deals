export const calculateSavings = (originalPrice, salePrice) => {
  return (originalPrice - salePrice).toFixed(2);
};

export const calculateDiscountPercentage = (originalPrice, salePrice) => {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toLocaleString();
};