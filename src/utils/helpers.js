export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const formatTimeLeft = (timeString) => {
  const now = new Date();
  const expirationTime = new Date(now.getTime() + parseTime(timeString));
  const diff = expirationTime - now;
  
  if (diff <= 0) return 'Expired';
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

const parseTime = (timeString) => {
  const [amount, unit] = timeString.split(' ');
  const multipliers = {
    'hours': 60 * 60 * 1000,
    'hour': 60 * 60 * 1000,
    'days': 24 * 60 * 60 * 1000,
    'day': 24 * 60 * 60 * 1000,
    'week': 7 * 24 * 60 * 60 * 1000
  };
  
  return parseInt(amount) * (multipliers[unit] || 0);
};