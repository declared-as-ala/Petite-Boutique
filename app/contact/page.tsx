import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Contact & Horaires - La Petite Boutique de l'Europe",
  description: "Contactez La Petite Boutique de l'Europe et découvrez nos horaires d'ouverture.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Contact & Horaires</h1>
          <p className="text-lg text-muted-foreground">
            Retrouvez-nous en boutique pour découvrir nos articles
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Address */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <CardTitle>Adresse</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                La Petite Boutique de l'Europe
                <br />
                Refuge SPA de Poitiers
                <br />
                Poitiers, France
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                <em>Pour plus de détails sur l'adresse exacte, contactez-nous directement.</em>
              </p>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Horaires d'ouverture</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lundi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Mardi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Mercredi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Jeudi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <em>Nous vous recommandons de nous contacter avant de vous déplacer pour confirmer les horaires et la disponibilité des articles.</em>
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <CardTitle>Contact</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Téléphone</p>
                <p className="text-muted-foreground">
                  Contactez le Refuge SPA de Poitiers
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Email</p>
                <p className="text-muted-foreground">
                  Via les réseaux sociaux du refuge
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Important Info */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Informations importantes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Retrait en boutique uniquement</strong>
                <br />
                Tous les articles doivent être retirés directement en boutique. Nous ne proposons pas de livraison.
              </p>
              <p>
                <strong className="text-foreground">Paiement</strong>
                <br />
                Paiement sur place par espèces ou carte bancaire.
              </p>
              <p>
                <strong className="text-foreground">Disponibilité</strong>
                <br />
                Les articles sont uniques et en quantité limitée. Nous vous recommandons de contacter la boutique pour vérifier la disponibilité avant de vous déplacer.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-bold">Une question ?</h2>
            <p className="mb-6 text-muted-foreground">
              N'hésitez pas à nous contacter pour plus d'informations sur nos articles ou nos horaires.
            </p>
            <p className="text-sm text-muted-foreground">
              Retrouvez-nous également sur les réseaux sociaux du Refuge SPA de Poitiers pour suivre nos actualités et nos nouveaux arrivages.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

