import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { supabase } from '../lib/supabase'
import { Wine } from '../types'
import { toast } from 'react-toastify'

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [wine, setWine] = useState<Wine | null>(null)
  const [loading, setLoading] = useState(true)
  const addToCart = useCartStore(state => state.addItem)

  useEffect(() => {
    fetchWine()
  }, [id])

  async function fetchWine() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('wines')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) {
        throw error
      }
      
      if (data) {
        setWine(data)
      }
    } catch (error) {
      console.error('Error fetching wine:', error)
      toast.error('Failed to load wine details. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (wine) {
      addToCart(wine)
      toast.success(`${wine.name} added to cart!`)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!wine) {
    return <div>Product not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2">
          <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">{wine.name}</h1>
          <p className="text-gray-600 mb-4">{wine.description}</p>
          <p className="text-2xl font-semibold mb-6">${wine.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails