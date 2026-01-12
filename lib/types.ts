export interface Product {
  id: string
  title: string
  category: string
  description: string
  price: number
  condition: string
  tags: string[]
  image: string
  images?: string[] // For products with multiple images
  isNew?: boolean
}

export type Category = "Tous" | "Vêtements" | "Accessoires" | "Vaisselle" | "Décoration" | "Animaux"

export type Condition = "Tous" | "Neuf" | "Très bon état" | "Bon état" | "Occasion" | "Vintage"

