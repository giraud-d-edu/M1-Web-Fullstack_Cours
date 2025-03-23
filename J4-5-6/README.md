# Introduction

Dans ce TD/TP, vous allez développer une application web complète en utilisant Svelte pour le frontend et en vous connectant à votre API Deno existante pour le backend. Ce travail s'inscrit dans la continuité des cours précédents sur Deno et vise à vous former aux aspects front-end du développement full stack.

## Calendrier de travail

- **Lundi matin - Mardi matin**: Travail individuel guidé (TD/TP)
- **Mardi après-midi - Jeudi matin**: Projet en groupe
- **Jeudi après-midi**: Soutenance en groupe

## Ressources

> N'oubliez de consulter dans le dossier du Cours les ressources suivantes:
> - [Cours/intro-Frontend.md](../Cours/intro-Frontend.md)
> - [Cours/Ressources-Frontend.md](../Cours/Ressources-Frontend.md)
> - [Cours/intro-UX-UI.md](../Cours/intro-UX-UI.md)

- [Documentation officielle de Svelte](https://svelte.dev/docs)
- [Documentation de SvelteKit](https://kit.svelte.dev/docs)
- [Documentation de Deno](https://deno.land/manual)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web Vitals](https://web.dev/vitals/)


# TD/TP individuel

## Exercice 1 : Hello World avec Svelte (Must-have)

**Objectif**: Créer votre première application Svelte et comprendre sa structure de base.

1. **Installation des prérequis**:

```bash
# Vérifiez que Node.js est installé
node -v

# Installer Svelte avec SvelteKit
npx sv create my-app
cd my-app
npm install
npm run dev
```

2. **Structure du projet**:
- Explorez les fichiers générés, notamment `src/routes`, `src/lib` et `svelte.config.js`
- Identifiez les concepts clés de SvelteKit: routes, layouts, components

3. **Créez votre première page**:
- Modifiez le fichier `src/routes/+page.svelte`:

```svelte
<script>
  let nom = "Monde";
</script>

<h1>Bonjour, {nom}!</h1>

<style>
  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }
</style>
```


## Exercice 2 : Navigation et Routes (Must-have)

**Objectif**: Créer plusieurs pages et comprendre le système de routage de SvelteKit.

1. **Créez deux nouvelles routes**:
- `src/routes/about/+page.svelte`
- `src/routes/contact/+page.svelte`

```svelte
<!-- src/routes/about/+page.svelte -->
<h1>À propos</h1>
<p>Cette page présente des informations sur notre application.</p>
```

```svelte
<!-- src/routes/contact/+page.svelte -->
<h1>Contact</h1>
<p>Vous pouvez nous contacter à contact@exemple.fr</p>
```

2. **Créez un menu de navigation partagé** dans `src/routes/+layout.svelte`:

```svelte
<script>
  import { page } from '$app/stores';
</script>

<nav>
  <ul>
    <li class:active={$page.url.pathname === '/'}>
      <a href="/">Accueil</a>
    </li>
    <li class:active={$page.url.pathname === '/about'}>
      <a href="/about">À propos</a>
    </li>
    <li class:active={$page.url.pathname === '/contact'}>
      <a href="/contact">Contact</a>
    </li>
  </ul>
</nav>

<main>
  <slot />
</main>

<style>
  nav {
    background-color: #f5f5f5;
    padding: 1em;
  }
  
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-right: 1em;
  }
  
  .active {
    font-weight: bold;
  }
  
  main {
    padding: 1em;
  }
</style>
```

3. **Route dynamique**: Créez une route avec paramètre `src/routes/produit/[id]/+page.svelte`:

```svelte
<script>
  import { page } from '$app/stores';
  
  // Récupérer le paramètre d'URL
  const id = $page.params.id;
</script>

<h1>Détails du produit {id}</h1>
<p>Cette page affiche les détails du produit avec l'ID {id}.</p>
```


## Exercice 3 : Components réutilisables (Must-have)

**Objectif**: Créer et utiliser des composants réutilisables.

1. **Créez un composant de carte** dans `src/lib/components/Card.svelte`:

```svelte
<script>
  export let titre = "Titre par défaut";
  export let description = "Description par défaut";
  export let image = "";
</script>

<div class="card">
  {#if image}
    <img src={image} alt={titre} />
  {/if}
  <div class="content">
    <h2>{titre}</h2>
    <p>{description}</p>
    <div class="actions">
      <slot name="actions">
        <!-- Contenu par défaut si aucune action n'est fournie -->
        <button>Voir plus</button>
      </slot>
    </div>
  </div>
</div>

<style>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1em;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  .content {
    padding: 1em;
  }
  
  h2 {
    margin-top: 0;
  }
  
  .actions {
    margin-top: 1em;
  }
</style>
```

2. **Utilisez le composant** dans `src/routes/+page.svelte`:

```svelte
<script>
  import Card from '$lib/components/Card.svelte';
  
  const produits = [
    {
      id: 1,
      titre: "Produit 1",
      description: "Description du produit 1",
      image: "https://picsum.photos/300/200?random=1"
    },
    {
      id: 2,
      titre: "Produit 2",
      description: "Description du produit 2",
      image: "https://picsum.photos/300/200?random=2"
    },
    {
      id: 3,
      titre: "Produit 3",
      description: "Description du produit 3",
      image: "https://picsum.photos/300/200?random=3"
    }
  ];
</script>

<h1>Nos produits</h1>

<div class="grid">
  {#each produits as produit}
    <Card 
      titre={produit.titre} 
      description={produit.description} 
      image={produit.image}
    >
      <svelte:fragment slot="actions">
        <a href={`/produit/${produit.id}`}>
          <button>Voir détails</button>
        </a>
      </svelte:fragment>
    </Card>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
  }
</style>
```


## Exercice 4 : Architecture et organisation du code (Should-have)

**Objectif**: Mettre en place une architecture propre et maintenable.

1. **Structure de répertoires recommandée**:

```
src/
├── lib/
│   ├── components/    # Composants réutilisables
│   ├── stores/        # Stores Svelte
│   ├── utils/         # Fonctions utilitaires
│   ├── services/      # Services d'API
│   └── types/         # Types TypeScript
└── routes/            # Pages et layouts
```

2. **Créez un service API** dans `src/lib/services/api.js`:

3. **Créez un store pour les produits** dans `src/lib/stores/produits.ts`:

4. **Utilisez le store dans la page d'accueil** (`src/routes/+page.svelte`):



## Exercice 5 : Formulaire avec gestion d'erreur (Must-have)

**Objectif**: Créer un formulaire de contact avec validation et gestion d'erreur.

**Créez une page de formulaire** dans `src/routes/contact/+page.svelte`:



## Exercice 6 : Connexion avec l'API Deno (Must-have)

**Objectif**: Connecter le formulaire à votre API Deno backend.

1. **Assurez-vous que votre API Deno dispose d'un endpoint pour les contacts**:

2. **Configurez CORS sur votre API Deno**

3. **Testez votre formulaire** pour vérifier qu'il communique bien avec l'API.



## Exercice 7 : Page de détail produit (Should-have)

**Objectif**: Créer une page de détail affichant les informations d'un produit depuis l'API.

1. **Créez un service pour récupérer un produit par ID**

2. **Implémentez la page de détail** dans `src/routes/produit/[id]/+page.svelte`:



# Projet de groupe

> Implémenter le pendant front-end de votre projet Deno en utilisant SvelteKit.

## Must-have Features

* Avoir un projet Deno propre
* Avoir des formulaires de type CRUD pour le(s) modèle(s) principal(aux)

## Should have

* Définition de l'architecture
    - Créez un document d'architecture dans `docs/architecture.md`
    - Définissez les conventions de nommage
    - Planifiez les composants réutilisables
    - Définissez les interfaces TypeScript pour les modèles de données

* Mise en place des composants partagés
    - Créez un système de design (boutons, inputs, cards, etc.)
    - Définissez une palette de couleurs et un système typographique cohérent
    - Implémentez des composants accessibles (ARIA, contraste suffisant, etc.)

* Système de gestion d'erreur
    - Créez un système centralisé de gestion d'erreur
    - Implémentez des pages d'erreur personnalisées (404, 500, etc.)
    - Mettez en place une journalisation côté client

* Upload d'images

* Intégrer un framwork UI
    - Ex : Tailwind CSS
    - Créer un design simple et cohérent.


## Nice-to-have

* Déployer sur un PaaS

* Analyser et améliorer les performances avec Web Vitals.
    - Lazy loading des composants
    - Optimisation des images
    - Minification des assets
    - ...