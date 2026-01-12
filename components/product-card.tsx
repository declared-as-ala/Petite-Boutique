"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { Product } from "@/lib/types"
import { motion } from "framer-motion"
import { ImagePlaceholder } from "@/components/image-placeholder"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link href={`/product/${product.id}`}>
        <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
          <div className="relative aspect-square w-full overflow-hidden bg-muted">
            {(() => {
              // Use first image from images array if available, otherwise use single image
              const imageUrl = product.images && product.images.length > 0
                ? product.images[0]
                : product.image
              
              return imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              ) : (
                <ImagePlaceholder alt={product.title} />
              )
            })()}
            {product.isNew && (
              <Badge
                variant="success"
                className="absolute top-2 right-2"
              >
                Nouveau
              </Badge>
            )}
            <Badge
              variant="secondary"
              className="absolute top-2 left-2"
            >
              {product.condition}
            </Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold line-clamp-2 mb-2">{product.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {product.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

