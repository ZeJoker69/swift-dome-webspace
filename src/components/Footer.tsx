
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-swiftdome-black text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold font-serif mb-6">
              <span className="text-white">SWIFT</span>
              <span className="text-swiftdome-red">DOME</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium home services in Nigeria. We bring luxury and comfort to your doorstep through our comprehensive range of professional services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-swiftdome-red"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-swiftdome-red"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Laundry
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Fumigation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Delivery
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Interior Decoration
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Event Planning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  House Painting
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-swiftdome-red"></span>
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for tips, offers, and updates on premium home services.
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-swiftdome-black/80 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-swiftdome-red focus:border-transparent flex-grow"
              />
              <button
                type="submit"
                className="bg-swiftdome-red text-white px-4 py-2 rounded-r-md hover:bg-swiftdome-red/90 transition-colors duration-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <p className="text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SWIFTDOME. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
