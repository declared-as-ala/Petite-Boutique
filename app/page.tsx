import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Heart, ShoppingBag, Sparkles, MapPin, ArrowRight } from "lucide-react"
import productsData from "@/data/products.json"
import { Product } from "@/lib/types"

const products = productsData as Product[]
const featuredProducts = products.filter(p => p.isNew).slice(0, 6)
const categories = [
  { name: "Vêtements", count: products.filter(p => p.category === "Vêtements").length },
  { name: "Accessoires", count: products.filter(p => p.category === "Accessoires").length },
  { name: "Vaisselle", count: products.filter(p => p.category === "Vaisselle").length },
  { name: "Décoration", count: products.filter(p => p.category === "Décoration").length },
  { name: "Animaux", count: products.filter(p => p.category === "Animaux").length },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Professional Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="Boutique solidaire"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={95}
          />
          {/* Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/10" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-white shadow-lg">
                <Heart className="h-4 w-4 text-red-400" />
                <span>Boutique solidaire au profit du Refuge SPA de Poitiers</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  La Petite Boutique
                  <br />
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    de l'Europe
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                  Découvrez des articles uniques de seconde main. Chaque achat aide les animaux du refuge.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
                  <Link href="/catalog">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Voir les articles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20">
                  <Link href="/about">
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Store Image in Circular Frame */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Circular Image with Professional Frame */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 ring-offset-8 ring-offset-black/50">
                  <Image
                    src="/images/locale.jpg"
                    alt="La Petite Boutique de l'Europe"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 320px, 384px"
                    priority
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/50">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Poitiers, France</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos catégories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez notre sélection soignée d'articles de seconde main
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/catalog?category=${encodeURIComponent(category.name)}`}
                className="group relative rounded-2xl border-2 border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors relative z-10">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground relative z-10">
                  {category.count} article{category.count > 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Nouveautés</h2>
              </div>
              <p className="text-lg text-muted-foreground mt-2">
                Découvrez nos dernières arrivées
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/catalog">
                Voir tout
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-card to-card/50 p-12 md:p-16 text-center shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
                  <Heart className="h-10 w-10 text-red-500" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Votre achat fait la différence</h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Tous les bénéfices de la boutique sont reversés au Refuge SPA de Poitiers pour aider les animaux abandonnés à trouver un foyer aimant.
                </p>
                <Button asChild size="lg" className="mt-8 shadow-lg">
                  <Link href="/about">
                    Découvrir notre mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
