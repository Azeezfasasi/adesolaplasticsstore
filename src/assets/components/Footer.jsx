import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SubscribeToNewsletter from './SubscribeToNewsletter'

function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white pt-10 pb-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Company Info */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Adesola Plastics Store</h2>
          <p className="mb-4 text-gray-300">
            Adesola Plastics Store is a trusted eCommerce destination for high-quality plastic materials and household essentials. We offer a wide range of products including chairs, tables, home equipment, and durable plastic goods to meet your everyday needs.
          </p>
          <div className="flex items-center mb-2">
            <Phone className="w-4 h-4 mr-2 text-[#00B9F1]" />
            <a href="tel:08029580850" className="text-gray-200 hover:text-[#00B9F1] transition">(+234) 08029580850</a>
          </div>
          <div className="flex items-center mb-2">
            <Mail className="w-4 h-4 mr-2 text-[#00B9F1]" />
            <a href="mailto:info@adesolaplasticstore.com" className="text-gray-200 hover:text-[#00B9F1] transition">info@adesolaplasticstore.com</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-[#00B9F1]" />
            <span className="text-gray-200">22 Alhaji Olaye Street, Abule-Odu, Egbeda, Idimu Road Lagos, Nigeria</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#00B9F1] transition">Home</Link></li>
            <li><Link to="/app/shop"className="hover:text-[#00B9F1] transition">Shop</Link></li>
            <li><Link to="/app/cart" className="hover:text-[#00B9F1] transition">Cart</Link></li>
            <li><Link to="/contactus" className="hover:text-[#00B9F1] transition">Contact Us</Link></li>
            <li><Link to="/quoterequest" className="hover:text-[#00B9F1] transition">Get Free Quote</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <SubscribeToNewsletter />
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Adesola Plastics Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer