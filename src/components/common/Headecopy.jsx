import React, { useState } from 'react';
import { Search, Menu, X, Heart, ShoppingBag, User, MapPin } from 'lucide-react';


// Main Header Component
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const navigation = [
    { name: "Electronics", href: "#electronics" },
    { name: "Fashion", href: "#fashion" },
    { name: "Home & Kitchen", href: "#home" },
    { name: "Health & Beauty", href: "#health" },
    { name: "Sports", href: "#sports" },
  ];

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    setSearchResults(query);
    // Here you would typically:
    // 1. Filter your products/deals based on the query
    // 2. Navigate to a search results page
    // 3. Make an API call to fetch search results
    // 4. Update your app state with filtered results
    
    // Example: You could emit an event or use a context to update the main app
    // window.dispatchEvent(new CustomEvent('search', { detail: query }));
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span>🔥 Free shipping on all deals over $50 | Limited time offers</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">DealsHub</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-900 hover:text-red-600 font-medium transition-colors py-2 text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Store locator"
            >
              <MapPin className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-red-600 transition-colors relative"
              aria-label="Favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-600"
              aria-label="Menu"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="pb-4">
            <SearchBar 
              onClose={() => setShowSearch(false)} 
              onSearch={handleSearch}
            />
          </div>
        )}

        {/* Search Results Indicator (optional) */}
        {searchResults && !showSearch && (
          <div className="py-2 text-sm text-gray-600">
            Showing results for: <span className="font-semibold text-red-600">{searchResults}</span>
            <button 
              onClick={() => setSearchResults(null)}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4 inline" />
            </button>
          </div>
        )}

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navigation.map(item => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-900 hover:text-red-600 font-medium px-2 py-1 text-sm uppercase tracking-wide"
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;