import { productTemplates, stores, expirationOptions } from './sampleDeals';

export const generateDeals = (count = 100) => {
  const deals = [];
  
  for (let i = 1; i <= count; i++) {
    const product = productTemplates[Math.floor(Math.random() * productTemplates.length)];
    const originalPrice = Math.random() * 900 + 100;
    const discount = Math.floor(Math.random() * 60) + 10;
    const salePrice = originalPrice * (1 - discount / 100);
    
    deals.push({
      id: i,
      title: `${product.title} - ${discount}% Off`,
      description: `Premium ${product.title.toLowerCase()} with advanced features and excellent build quality. Limited time offer with free shipping and returns.`,
      originalPrice: Math.round(originalPrice * 100) / 100,
      salePrice: Math.round(salePrice * 100) / 100,
      discount,
      rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
      reviews: Math.floor(Math.random() * 50000) + 1000,
      category: product.category,
      store: stores[Math.floor(Math.random() * stores.length)],
      expiresIn: expirationOptions[Math.floor(Math.random() * expirationOptions.length)],
      image: product.icon,
      affiliateLink: '#',
      trending: Math.random() > 0.7,
      hotDeal: Math.random() > 0.8,
      featured: i <= 3
    });
  }
  
  return deals;
};
