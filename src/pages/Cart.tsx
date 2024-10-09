import React from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { Trash2 } from 'lucide-react'

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/shop" className="text-purple-600 hover:text-purple-800">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 text-center border rounded p-1"
              />
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
          <Link
            to="/checkout"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart