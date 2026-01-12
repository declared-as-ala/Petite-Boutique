# La Petite Boutique de l'Europe - Site E-commerce

Site e-commerce frontend moderne pour la boutique solidaire au profit du Refuge SPA de Poitiers.

## 🚀 Technologies

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion** (animations)
- **next-themes** (dark mode)

## 📦 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Structure

```
├── app/                    # App Router pages
│   ├── page.tsx           # Homepage
│   ├── catalog/           # Catalogue
│   ├── product/           # Pages produits
│   ├── about/             # À propos
│   └── contact/           # Contact
├── components/            # Composants réutilisables
│   ├── ui/               # shadcn/ui components
│   └── ...               # Composants custom
├── lib/                   # Utilitaires
├── data/                  # Données produits
└── public/                # Assets statiques
```

## 🎨 Fonctionnalités

- ✅ Homepage avec hero et sections
- ✅ Catalogue avec filtres avancés
- ✅ Pages produits individuelles
- ✅ Recherche instantanée
- ✅ Dark mode / Light mode
- ✅ Responsive design
- ✅ Accessibilité WCAG

## 📝 Notes

- Les images doivent être ajoutées dans `/public/images/`
- Format recommandé : JPG/PNG optimisés
- Noms d'images : `product-{id}.jpg`

## 🌐 Déploiement

Le site est prêt à être déployé sur Vercel :

```bash
vercel
```

