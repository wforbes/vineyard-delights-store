import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Vineyard Delights</h1>
      <p className="text-xl mb-8">Discover our exquisite selection of mid-priced wines</p>
      <div className="mb-12">
        <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Vineyard" className="w-full h-96 object-cover rounded-lg shadow-lg" />
      </div>
      <Link to="/shop" className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300">
        Shop Our Wines
      </Link>
    </div>
  )
}

export default Home