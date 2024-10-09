import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Vineyard Delights</h3>
            <p>Bringing you the finest mid-priced wines from our vineyard to your table.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:text-purple-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-purple-200">Contact</a></li>
              <li><a href="/terms" className="hover:text-purple-200">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-purple-200">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-200"><Facebook /></a>
              <a href="#" className="hover:text-purple-200"><Instagram /></a>
              <a href="#" className="hover:text-purple-200"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Vineyard Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer