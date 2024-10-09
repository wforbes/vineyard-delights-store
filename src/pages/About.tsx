import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Vineyard Delights</h1>
      <img 
        src="https://images.unsplash.com/photo-1464036388609-747537735eab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Our Vineyard" 
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="mb-4">
        Vineyard Delights is a family-owned winery nestled in the heart of California's wine country. 
        For over three generations, we've been crafting exquisite mid-priced wines that bring the essence 
        of our sun-soaked vineyards to your table.
      </p>
      <p className="mb-4">
        Our commitment to sustainable farming practices and innovative winemaking techniques allows us 
        to produce wines of exceptional quality and value. From crisp Chardonnays to bold Cabernets, 
        each bottle tells the story of our land, our passion, and our dedication to the art of winemaking.
      </p>
      <p>
        We invite you to explore our collection and discover why Vineyard Delights has become synonymous 
        with affordable luxury in the world of wine.
      </p>
    </div>
  )
}

export default About