import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">La Petite Boutique</h3>
            <p className="text-sm text-muted-foreground">
              Boutique solidaire au profit du Refuge SPA de Poitiers
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-muted-foreground hover:text-foreground">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Informations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Retrait en boutique uniquement</li>
              <li>Paiement sur place</li>
              <li>Articles de seconde main</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Cause solidaire</h4>
            <p className="text-sm text-muted-foreground">
              Tous les bénéfices sont reversés au Refuge SPA de Poitiers pour aider les animaux.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} La Petite Boutique de l'Europe. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Fait avec <Heart className="h-4 w-4 text-red-500" /> pour les animaux
          </p>
        </div>
      </div>
    </footer>
  )
}

