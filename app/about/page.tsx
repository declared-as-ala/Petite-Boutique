import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, ShoppingBag, HandHeart } from "lucide-react"

export const metadata = {
  title: "À propos - La Petite Boutique de l'Europe",
  description: "Découvrez l'histoire et la mission de La Petite Boutique de l'Europe, boutique solidaire au profit du Refuge SPA de Poitiers.",
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">À propos</h1>
          <p className="text-lg text-muted-foreground">
            Une boutique solidaire au service des animaux
          </p>
        </div>

        {/* Mission */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500" />
              <CardTitle className="text-2xl">Notre mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              La Petite Boutique de l'Europe est une boutique solidaire créée pour venir en aide aux animaux du Refuge SPA de Poitiers. Notre objectif est simple : transformer chaque achat en un geste de solidarité.
            </p>
            <p>
              Nous proposons une sélection soignée d'articles de seconde main : vêtements, accessoires, décoration, vaisselle et articles pour animaux. Chaque article a été choisi avec soin pour sa qualité et son caractère unique.
            </p>
            <p>
              <strong className="text-foreground">100% des bénéfices</strong> sont reversés au Refuge SPA de Poitiers pour financer les soins, la nourriture et le bien-être des animaux abandonnés en attente d'adoption.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <HandHeart className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Solidarité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Chaque achat contribue directement au bien-être des animaux du refuge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ShoppingBag className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Seconde main</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nous donnons une seconde vie aux objets tout en préservant l'environnement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Communauté</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Une équipe de bénévoles passionnés au service d'une cause qui nous tient à cœur.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* SPA Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Le Refuge SPA de Poitiers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              La Société Protectrice des Animaux (SPA) de Poitiers œuvre depuis de nombreuses années pour le bien-être des animaux abandonnés. Le refuge accueille, soigne et trouve des foyers aimants pour des centaines d'animaux chaque année.
            </p>
            <p>
              En achetant dans notre boutique, vous participez directement à cette mission. Votre contribution permet de financer :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Les soins vétérinaires</li>
              <li>La nourriture et les accessoires</li>
              <li>L'amélioration des conditions d'accueil</li>
              <li>Les campagnes de sensibilisation</li>
            </ul>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="rounded-lg border bg-card p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Rejoignez-nous dans cette aventure solidaire</h2>
          <p className="mb-6 text-muted-foreground">
            Découvrez nos articles et faites un geste pour les animaux
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/catalog"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Voir le catalogue
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

