---
title: M1 - Développement Web Full Stack - Introduction Frontend
author: Damien Giraudet
transition: wipe
---

> M1 - Développement Web Full Stack
> Ynov Campus

# Introduction Frontend

> **Damien Giraudet : [Linkedin](https://fr.linkedin.com/in/damiengiraudet)**
> damien.giraudet@ynov.com

---


# Historique : L'approche PHP traditionnelle : Le rendu serveur monolithique

- **Fonctionnement** :
  - Pour chaque requête, le serveur PHP :
    - Reçoit la requête du navigateur
    - Exécute le code PHP (souvent en interagissant avec une base de données)
    - Génère le HTML complet en boucle, en injectant dynamiquement les données au sein du HTML (par exemple, une boucle foreach en PHP pour afficher une liste d'articles)
    - Renvoie le HTML complet au navigateur

---

- **Limites de cette approche** :
  - Expérience utilisateur peu fluide : Rechargement complet de la page à chaque interaction
  - Complexité du Frontend côté serveur : Logique de rendu et logique métier souvent mêlées côté serveur (PHP)
  - Scalabilité limitée : Le serveur PHP doit gérer le rendu pour chaque requête, augmentant la charge
  - Moins de réactivité et d'interactivité pour l'utilisateur


- **Analogie de la boucle PHP répétée** :
  - Imaginez une chaîne de montage où, à chaque requête, il faut reconstruire entièrement la voiture (la page HTML) à partir de zéro, en repassant par toutes les étapes (les boucles PHP)
  - C'est répétitif et peu efficace pour des interfaces riches

---

# Technologies modernes : Évolutions et Paradigmes

- **Analogie du Frontend moderne** :
  - Imaginez une voiture (l'application web) où le châssis et le moteur (Backend) sont séparés de la carrosserie et de l'intérieur (Frontend)
  - La carrosserie (Frontend) peut être conçue et mise à jour indépendamment, offrant plus de flexibilité et une meilleure expérience utilisateur
  - Le moteur (Backend) se concentre sur la puissance et la fiabilité (gestion des données et logique métier)

En résumé, le Frontend moderne a évolué pour offrir une meilleure expérience utilisateur, une performance accrue et une organisation plus claire du code, en se détachant du modèle monolithique du rendu serveur traditionnel comme on pouvait le voir historiquement avec PHP. Les SPAs, SSR et SSG sont des réponses à ces besoins d'efficacité et d'expérience utilisateur optimisée.

---

## L'écosystème JavaScript : Un paysage diversifié

- **Frameworks leaders** : React, Vue.js, Angular, Svelte. Chacun apporte sa philosophie :
    - React : Flexibilité et écosystème riche
    - Vue.js : Progressivité et simplicité
    - Angular : Structuré pour les grandes applications
    - Svelte : Performance et compilation

- **Rôle central du Frontend** :
    - Interface directe avec l'utilisateur
    - Façonne l'expérience, la performance perçue, l'accessibilité et l'engagement

- **Évolution constante** :
    - Le Frontend est un domaine en perpétuelle mutation
    - De nouveaux outils, frameworks et approches émergent, nécessitant une veille technologique active

---

## Les grands paradigmes du Frontend moderne

---

### Single Page Applications (SPA)

- **Concept** :
    - Application web qui se charge initialement en une seule page HTML
    - Les interactions suivantes (navigation, mises à jour de contenu) se font dynamiquement via JavaScript, sans rechargement complet de la page

- **Fonctionnement** :
    - Le navigateur reçoit une page HTML squelette, puis JavaScript prend le relais pour gérer le rendu et les interactions
    - Les données sont généralement récupérées via des APIs

---

- **Avantages** :
    - Expérience utilisateur fluide et rapide : Navigation instantanée, pas de "clignotement" de page
    - Richesse interactive : Permet de créer des interfaces complexes et dynamiques, similaires à des applications desktop
    - Découplage Frontend/Backend : Le Frontend communique avec le Backend via des APIs, facilitant la scalabilité et la spécialisation des équipes

---

- **Inconvénients** :
    - SEO initialement plus complexe : Le contenu est rendu côté client, ce qui peut poser des problèmes d'indexation pour les moteurs de recherche (bien que des solutions existent)
    - First Contentful Paint (FCP) potentiellement plus long : Le chargement initial de l'application peut prendre plus de temps car JavaScript doit être téléchargé et exécuté
    - Complexité de gestion de l'état : Les SPAs nécessitent des solutions robustes de gestion d'état (comme Redux, Vuex, etc.) pour organiser les données de l'application

- **Exemples concrets de SPAs** : Gmail, Trello, les tableaux de bord d'administration modernes, les applications de productivité web (bref énormément de sites)
- **Frameworks typiques pour SPA** : React, Angular, Vue.js

---

### Server-Side Rendering (SSR)

- **Concept** :
    - Le rendu initial de l'application est effectué sur le serveur
    - Le serveur envoie au navigateur une page HTML déjà pré-rendue, avec le contenu initial
    - Les interactions peuvent ensuite être gérées côté client comme dans une SPA

- **Fonctionnement** :
    - Le serveur exécute le code JavaScript (souvent le même code que pour une SPA) et génère le HTML complet
    - Ce HTML est envoyé au navigateur
    - Pour les interactions suivantes, l'application peut se comporter comme une SPA (hydratation)

---

- **Avantages** :
    - SEO optimisé : Le contenu est directement présent dans le HTML initial, facilement indexable par les moteurs de recherche
    - Meilleur First Contentful Paint (FCP) : L'utilisateur voit le contenu plus rapidement car le navigateur n'a pas à attendre l'exécution de JavaScript pour afficher le contenu initial
    - Idéal pour le contenu statique et semi-dynamique : Blogs, sites e-commerce, sites d'actualités

---

- **Inconvénients** :
    - Charge serveur plus importante : Le serveur doit effectuer le rendu à chaque requête initiale
    - Complexité de mise en œuvre : Implique une configuration serveur et une gestion de l'hydratation (rendre l'application interactive côté client après le rendu serveur)

- **Exemples concrets de SSR** : Sites e-commerce, blogs, sites d'actualités, applications nécessitant un bon SEO
- **Frameworks/Outils pour SSR** : Next.js (pour React), Nuxt.js (pour Vue.js), Angular Universal (pour Angular), SvelteKit (pour Svelte)

---

### Static Site Generation (SSG)

- **Concept** :
    - Les pages HTML sont générées au moment de la build, et non à la requête de l'utilisateur
    - Les pages sont pré-calculées et stockées sous forme de fichiers HTML statiques, prêtes à être servies directement par un serveur web ou un CDN

- **Fonctionnement** :
    - Lors de la phase de build (avant le déploiement), un outil (comme un générateur de site statique) compile les templates, les données (souvent depuis des fichiers Markdown, des APIs, ou des CMS) et produit des fichiers HTML, CSS et JavaScript statiques

---

- **Avantages** :
    - Performance maximale : Les pages sont servies instantanément car ce sont des fichiers statiques
    - Sécurité accrue : Moins de surface d'attaque car il n'y a pas de serveur applicatif complexe en production
    - Scalabilité extrême : Facile à scaler car les fichiers statiques peuvent être distribués via un CDN
    - Déploiement simple : Peut être déployé sur des hébergements statiques très économiques

---

- **Inconvénients** :
    - Rebuild nécessaire à chaque modification de contenu : Si le contenu change (mise à jour d'un article de blog, ajout d'un produit), il faut re-générer et re-déployer tout le site
    - Moins adapté au contenu hautement dynamique et personnalisé : Moins pertinent pour les applications web qui nécessitent des données en temps réel et des interactions utilisateur complexes

- **Exemples concrets de SSG** : Blogs personnels, sites de documentation, sites vitrines, portfolios, sites marketing
- **Frameworks/Outils pour SSG** : Gatsby (pour React), Hugo, Jekyll, Eleventy, Next.js et Nuxt.js peuvent aussi faire du SSG

---

# Tendances actuelles

- **Server-Side Rendering (SSR) et Next.js/Nuxt.js** :
    - Amélioration du SEO et du FCP : Pour l'acquisition d'utilisateurs et une bonne expérience initiale
    - Frameworks universels : Next.js et Nuxt.js simplifient la mise en place du SSR et offrent un écosystème riche

- **Static Site Generation (SSG)** :
    - L'essor du JAMstack : Architecture moderne basée sur JavaScript, APIs et Markup, privilégiant performance, sécurité et scalabilité
    - Sites web ultra-rapides : Idéal pour les sites axés sur le contenu statique ou semi-dynamique

- **Web Components** :
    - Réutilisabilité et interopérabilité : Standardisation pour créer des composants réutilisables dans différents frameworks ou même sans framework
    - Longévité : Standard du web, gage de pérennité

---

# Compétences essentielles

- **Maîtrise de HTML, CSS et JavaScript (ES6+)** : Les fondations indispensables
- **Connaissance d'un framework moderne (Svelte, React, Vue, Angular)** : Spécialisation et productivité
- **Gestion d'état (State Management)** : Indispensable pour les applications complexes (Redux, Vuex, Context API, Stores Svelte, etc.)
- **Tests unitaires et tests d'intégration** : Qualité et robustesse du code (Jest, Cypress, Testing Library, etc.)
- **Outils de build et de gestion de paquets** : Optimisation du workflow (Webpack, Parcel, npm, yarn, pnpm, etc.)
- **Compréhension des différents paradigmes de rendu** : SPA, SSR, SSG et savoir quand utiliser chacun

---

# Focus sur Svelte pour ce module

- **Avantages** :
    - Performance exceptionnelle : Compilation en JavaScript vanilla optimisé, pas de Virtual DOM, applications rapides et légères
    - Simplicité et courbe d'apprentissage douce : Syntaxe claire, moins de boilerplate, idéal pour l'apprentissage
    - Réactivité intégrée : Gestion intuitive et performante des mises à jour de l'UI
    - Expérience développeur agréable : Outils performants, communauté active

- **Adapté pour un module d'introduction au Frontend moderne** :
    - Concepts clés (composants, réactivité, gestion d'état) abordés simplement
    - Moins d'abstraction, plus proche du JavaScript pur
    - Préparation solide pour d'autres frameworks
    - Typescript

---

## Attentes pour ce module

- **Comprendre le Frontend** : Maîtriser les technologies et architectures Frontend modernes (avantages/inconvénients de chaque approche).
- **Concevoir des Interfaces Robustes** : Implémenter des interfaces utilisateurs modulaires et performantes avec une architecture claire (composants, state, services, etc.).
- **Garantir la Qualité Frontend** : Mettre en œuvre des tests et les bonnes pratiques pour assurer la qualité et la maintenabilité du code.
- **Collaboration Agile & PR** : Travailler efficacement en équipe agile en utilisant les Pull Requests pour la revue et l'intégration collaborative du code






