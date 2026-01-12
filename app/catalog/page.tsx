"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import productsData from "@/data/products.json"
import { Product, Category, Condition } from "@/lib/types"
import { X, Search } from "lucide-react"

const products = productsData as Product[]
const categories: Category[] = ["Tous", "Vêtements", "Accessoires", "Vaisselle", "Décoration", "Animaux"]
const conditions: Condition[] = ["Tous", "Neuf", "Très bon état", "Bon état", "Occasion", "Vintage"]

export default function CatalogPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "Tous"
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory as Category)
  const [selectedCondition, setSelectedCondition] = useState<Condition>("Tous")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory
      const matchesCondition = selectedCondition === "Tous" || product.condition === selectedCondition
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesCondition && matchesPrice
    })
  }, [searchQuery, selectedCategory, selectedCondition, priceRange])

  const maxPrice = Math.max(...products.map(p => p.price))
  const minPrice = Math.min(...products.map(p => p.price))

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("Tous")
    setSelectedCondition("Tous")
    setPriceRange([0, maxPrice])
  }

  const hasActiveFilters = 
    searchQuery !== "" ||
    selectedCategory !== "Tous" ||
    selectedCondition !== "Tous" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== maxPrice

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Catalogue</h1>
        <p className="text-muted-foreground">
          Découvrez tous nos articles de seconde main
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4 rounded-lg border bg-card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filtres</h2>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="mr-2 h-4 w-4" />
              Réinitialiser
            </Button>
          )}
        </div>

        <Separator />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Category */}
          <Select
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as Category)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Condition */}
          <Select
            value={selectedCondition}
            onValueChange={(value) => setSelectedCondition(value as Condition)}
          >
            <SelectTrigger>
              <SelectValue placeholder="État" />
            </SelectTrigger>
            <SelectContent>
              {conditions.map((condition) => (
                <SelectItem key={condition} value={condition}>
                  {condition}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Prix : {priceRange[0]}€ - {priceRange[1]}€
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                min={minPrice}
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <Input
                type="number"
                min={minPrice}
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredProducts.length} article{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Aucun article ne correspond à vos critères
          </p>
          <Button variant="outline" onClick={clearFilters}>
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

