import React from 'react'
import { Link } from 'react-router-dom'
import { Wine, ShoppingCart } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const Header = () => {
  const cartItems = useCartStore(state => state.items)

  return (
    <header className="bg-purple-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Wine size={32} />
          <span className="text-xl font-bold">Vineyard Delights</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-purple-200">Home</Link></li>
            <li><Link to="/shop" className="hover:text-purple-200">Shop</Link></li>
            <li><Link to="/about" className="hover:text-purple-200">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-200">Contact</Link></li>
            <li>
              <Link to="/cart" className="flex items-center hover:text-purple-200">
                <ShoppingCart size={20} />
                <span className="ml-1">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header