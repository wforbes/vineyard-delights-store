import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { supabase } from '../lib/supabase'
import { Wine } from '../types'
import { toast } from 'react-toastify'

const Shop = () => {
  const [wines, setWines] = useState<Wine[]>([])
  const [loading, setLoading] = useState(true)
  const addToCart = useCartStore(state => state.addItem)

  useEffect(() => {
    fetchWines()
  }, [])

  async function fetchWines() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('wines')
        .select('*')
      
      if (error) {
        throw error
      }
      
      if (data) {
        setWines(data)
      }
    } catch (error: any) {
      console.error('Error fetching wines:', error)
      toast.error(`Failed to load wines: ${error.message || 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (wine: Wine) => {
    addToCart(wine)
    toast.success(`${wine.name} added to cart!`)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Wine Selection</h2>
      {wines.length === 0 ? (
        <p>No wines available at the moment. Please check back later.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wines.map((wine) => (
            <div key={wine.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={wine.image} alt={wine.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
                <p className="text-gray-600 mb-4">${wine.price.toFixed(2)}</p>
                <div className="flex justify-between">
                  <Link
                    to={`/product/${wine.id}`}
                    className="bg-purple-100 text-purple-600 px-4 py-2 rounded hover:bg-purple-200 transition duration-300"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleAddToCart(wine)}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop