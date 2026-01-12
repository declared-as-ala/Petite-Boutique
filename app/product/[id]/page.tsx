"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"
import productsData from "@/data/products.json"
import { Product } from "@/lib/types"
import { Heart, ArrowLeft, ShoppingBag } from "lucide-react"
import { ImagePlaceholder } from "@/components/image-placeholder"

const products = productsData as Product[]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!product) {
    notFound()
  }

  // Get all images (use images array if available, otherwise fallback to single image)
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : product.image 
      ? [product.image] 
      : []

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/catalog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au catalogue
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted">
            {allImages.length > 0 ? (
              <>
                <Image
                  src={allImages[selectedImageIndex]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                {product.isNew && (
                  <Badge variant="success" className="absolute top-4 right-4">
                    Nouveau
                  </Badge>
                )}
              </>
            ) : (
              <ImagePlaceholder alt={product.title} />
            )}
          </div>
          
          {/* Thumbnail Gallery */}
          {allImages.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-primary ring-2 ring-primary ring-offset-2"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} - Vue ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 15vw"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge variant="secondary">{product.category}</Badge>
              <Badge variant="outline">{product.condition}</Badge>
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="mb-4 text-4xl font-bold">{product.title}</h1>
            <p className="text-3xl font-bold text-primary mb-6">
              {formatPrice(product.price)}
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Achat solidaire</h3>
                  <p className="text-sm text-muted-foreground">
                    En achetant cet article, vous contribuez directement au bien-être des animaux du Refuge SPA de Poitiers. Tous les bénéfices sont reversés à l'association.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Informations pratiques</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Retrait en boutique uniquement</li>
              <li>• Paiement sur place (espèces ou carte)</li>
              <li>• Article unique - Disponibilité à confirmer</li>
              <li>• État : {product.condition}</li>
            </ul>
          </div>

          <Button size="lg" className="w-full" asChild>
            <Link href="/contact">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Contacter la boutique
            </Link>
          </Button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold">Articles similaires</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => {
              const relatedImages = relatedProduct.images && relatedProduct.images.length > 0
                ? relatedProduct.images
                : relatedProduct.image
                  ? [relatedProduct.image]
                  : []
              
              return (
                <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-square w-full overflow-hidden bg-muted">
                      {relatedImages.length > 0 ? (
                        <Image
                          src={relatedImages[0]}
                          alt={relatedProduct.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      ) : (
                        <ImagePlaceholder alt={relatedProduct.title} />
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2 mb-2">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-lg font-bold text-primary">
                        {formatPrice(relatedProduct.price)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
