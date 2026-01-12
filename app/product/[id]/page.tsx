import { notFound } from "next/navigation"
import productsData from "@/data/products.json"
import { Product } from "@/lib/types"
import { ProductPageClient } from "@/components/product-page-client"

const products = productsData as Product[]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  
  if (!product) {
    return {
      title: "Produit non trouvé",
    }
  }

  return {
    title: `${product.title} - La Petite Boutique`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return <ProductPageClient product={product} relatedProducts={relatedProducts} />
}
