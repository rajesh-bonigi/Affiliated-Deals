import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "My Account",
      links: [
        { name: "Sign In", href: "#" },
        { name: "Create Account", href: "#" },
        { name: "Order Status", href: "#" },
        { name: "Returns & Exchanges", href: "#" }
      ]
    },
    {
      title: "Help",
      links: [
        { name: "Size Guide", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Live Chat", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    },
    {
      title: "About DealsHub",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Media", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Sustainability", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "Newsletter", href: "#" },
        { name: "Social Media", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Community", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-red-400">DealsHub</h3>
            <p className="text-gray-300 mb-4">
              Your trusted source for the best deals and savings online. 
              Discover amazing offers from top brands.
            </p>
            <div className="flex space-x-4 text-2xl">
              <span>🛍️</span>
              <span>💰</span>
              <span>🎯</span>
              <span>⚡</span>
            </div>
          </div>
          
          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <div className="space-y-2 text-gray-300">
                {section.links.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="block hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 DealsHub. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
