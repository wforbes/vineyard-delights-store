export interface Wine {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export interface CartItem extends Wine {
  quantity: number
}