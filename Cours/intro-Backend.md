---
title: M1 - Développement Web Full Stack - Introduction Frontend
author: Damien Giraudet
transition: wipe
---

> M1 - Développement Web Full Stack
> Ynov Campus

# Introduction Backend

> **Damien Giraudet : [Linkedin](https://fr.linkedin.com/in/damiengiraudet)**
> damien.giraudet@ynov.com

---

## Évolution des approches

---

### Monolithique : L'approche traditionnelle

- **Application unique et volumineuse**
    - Simplicité initiale pour les petits projets
    - Difficultés de mise à l'échelle et de maintenance pour les grands projets

---

### Microservices : Découpage et indépendance

- **Applications divisées en petits services autonomes**
    - Amélioration de la scalabilité, de la résilience et de l'agilité
    - Complexité accrue de la gestion et du déploiement

---

### Illustration Monolite VS Microservices

![Schéma width:800px](https://res.cloudinary.com/practicaldev/image/fetch/s--seen3BGm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/2697570/49395813-cd094980-f737-11e8-9e9a-6c20db5720c4.jpg)

---

### Serverless : L'abstraction de l'infrastructure

- **Exécution du code à la demande, sans gestion de serveurs**
    - Scalabilité automatique et coût optimisé
    - Limitations potentielles en termes de contrôle et de cold starts

---

## Technologies populaires

---

### Node.js (JavaScript côté serveur)

- **Non-bloquant, événementiel, idéal pour les applications temps réel**
    - Vaste écosystème npm, popularité dans le Full Stack JavaScript

---

### Spring (Java)

- **Framework robuste et mature pour les applications d'entreprise**
    - Gestion de la complexité, sécurité et performance

---

### Django/Flask (Python)

- **Développement rapide, lisibilité du code, écosystème riche**
    - Idéal pour le prototypage, le web scraping, le Machine Learning

---

### Ruby on Rails (Ruby)

- **Convention over configuration, rapidité de développement**
    - Popularisé le développement web rapide

---

# Focus sur Deno pour ce module

- **Avantages** :
  - **Sécurité par défaut** : Sécurité renforcée, permissions explicites pour l'accès au système de fichiers, réseau, etc. Réduit les risques de vulnérabilités.
  - **Expérience développeur moderne** : Support TypeScript natif, outils intégrés (formatter, linter, test runner), pas de node_modules. Améliore le workflow et la qualité du code.
  - **Compatibilité avec les standards web** : Adoption des standards web, compatibilité avec les APIs web modernes. Facilite l'intégration avec le Frontend et les technologies web.
  - **Simplicité et performance** : Conçu pour être simple, performant et facile à utiliser.

---

- **Adapté pour un module d'apprentissage du Backend moderne** :
  - Met l'accent sur la sécurité et les bonnes pratiques dès le départ.
  - Facilite la compréhension des concepts Backend sans les complexités de configuration.
  - Préparation pour les environnements Backend modernes et sécurisés.
  - Typescript
  
---

# API RESTful et GraphQL : Les contrats de communication

---

## Communication standardisée entre Frontend et Backend

Les APIs définissent comment le Frontend et le Backend échangent des informations. Il est crucial de définir des contrats d'interface clairs et robustes.

---

### Contrats d'interface et Swagger/OpenAPI

![illustration width:600px](https://static1.smartbear.co/swagger/media/images/tools/opensource/swagger_ui.png)

---

- **Contrat d'interface pour une API** :
  - **Points de terminaison (endpoints)** : Les URLs auxquelles le Frontend peut envoyer des requêtes (ex: `/users`, `/products/{id}`).
  - **Méthodes HTTP** : Le type d'action à effectuer (GET pour récupérer des données, POST pour créer, PUT pour modifier, DELETE pour supprimer).
  - **Requêtes (Request)** : La structure des données que le Frontend doit envoyer au Backend (en JSON généralement).
  - **Réponses (Response)** : La structure des données que le Backend renverra au Frontend (aussi en JSON), ainsi que les codes HTTP possibles (200 OK, 400 Bad Request, 500 Internal Server Error, etc.) et leur signification.

---

- **Swagger (OpenAPI)** :
  - **Référence pour la documentation et le design d'API** :
    - **Définir et documenter les APIs** : Utilisation d'un langage de description (YAML ou JSON) pour spécifier tous les aspects de votre API (endpoints, paramètres, corps de requête/réponse, codes HTTP, etc.).
    - **Générer de la documentation interactive** : Swagger UI permet de créer automatiquement une documentation web interactive et claire pour votre API, facilitant sa compréhension et son utilisation par les développeurs Frontend et d'autres équipes.
    - **Générer du code serveur et client (stubs)** : Swagger Codegen peut générer automatiquement du code serveur (dans différents langages Backend) et des clients API (SDKs) à partir de la spécification OpenAPI, accélérant le développement et assurant la cohérence avec le contrat d'interface.

---

## JSON : Le format de données universel du web

- **JSON (JavaScript Object Notation)** :
  - **Simplicité et lisibilité** : Facile à lire et à écrire pour les humains et les machines.
  - **Légèreté** : Moins verbeux que XML, ce qui est important pour les performances web.
  - **Support natif en JavaScript** : Manipulation aisée en Frontend et Backend JavaScript/Node.js/Deno.
  - **Compatibilité multi-langages** : Supporté par la plupart des langages de programmation.

---

- **Exemple de JSON (représentant un utilisateur)** :
  ```json
  {
    "id": 123,
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@exemple.com"
  }
  ```

---

## Codes HTTP : Le langage des requêtes web

Familles de codes HTTP importantes

---

### 2xx (Succès)

- **200 OK** : La requête a réussi.
- **201 Created** : Une nouvelle ressource a été créée avec succès (souvent après une requête POST).
- **204 No Content** : La requête a réussi, mais il n'y a pas de contenu à renvoyer dans la réponse (souvent pour DELETE).

---

### 3xx (Redirection)

- Indique une redirection vers une autre URL (moins fréquent dans les APIs RESTful pures).

---

### 4xx (Erreur Client)

- Indique une erreur due à la requête du client (Frontend) :
  - **400 Bad Request** : La requête est mal formée ou invalide.
  - **401 Unauthorized** : Authentification requise et a échoué.
  - **403 Forbidden** : Accès refusé, même après authentification (permissions insuffisantes).
  - **404 Not Found** : La ressource demandée n'existe pas.

---

### 5xx (Erreur Serveur)

- Indique une erreur côté serveur (Backend) :
  - **500 Internal Server Error** : Erreur serveur générique.
  - **503 Service Unavailable** : Le serveur est temporairement indisponible.

---

## Authentification et autorisation : Sécurisation des APIs

- **Protéger l'accès aux données et fonctionnalités** :
  - **OAuth 2.0, JWT, stratégies d'authentification**.

---

## Gestion des erreurs et logging : Robustesse et suivi

- **Assurer la robustesse et faciliter la maintenance** :
  - **Logs structurés, monitoring des erreurs**.

---

# Patterns d'architecture Backend : Organisation et modularité

---

## MVC (Model-View-Controller)

- **Sépare la logique de l'application en trois parties** :
  - **Modèle (Model)** : Gère les données et la logique métier (interaction avec la base de données, validation, etc.).
  - **Vue (View)** : Présente les données à l'utilisateur (dans un contexte Backend, la "vue" pourrait être la réponse JSON de l'API plutôt qu'une page HTML).
  - **Contrôleur (Controller)** : Reçoit les requêtes de l'utilisateur, interagit avec le modèle et choisit la vue à afficher (ou la réponse API à renvoyer).

![illustration width:300px](https://media.geeksforgeeks.org/wp-content/uploads/20220224160807/Model1.png)

---

## MVVM (Model-View-ViewModel)

- **Similaire à MVC, mais introduit un ViewModel pour faciliter le data binding** :
  - Moins fréquent côté Backend pur, plus pertinent pour le Frontend, bien que les concepts restent transposables pour l'organisation du Backend.

---

## Clean Architecture / Onion Architecture / Hexagonal Architecture

- **Met l'accent sur la séparation des préoccupations et l'indépendance par rapport aux détails techniques** :
  - **Frameworks, bases de données, UI** :
    - Le cœur de l'application (la logique métier - les "Use Cases" ou "Interactors" dans Clean Architecture) est isolé des couches externes.
    - Favorise la testabilité, la maintenabilité et l'adaptabilité.

---

### Diagramme Clean Architecture

![diagramme clan architecture width:500px](https://blog.ndepend.com/wp-content/uploads/Clean-Architecture-Diagram-Asp-Net.png)

[ Plus d'infos](https://blog.ndepend.com/clean-architecture-for-asp-net-core-solution/)

---

### Diagramme Onion Architecture

![diagramme onion architecture width:500px](https://miro.medium.com/v2/resize:fit:640/format:webp/1*7vdYUJ0cP8WzuCAxcoLT4g.png)

[ Plus d'infos](https://medium.com/expedia-group-tech/onion-architecture-deed8a554423)

---

### Diagramme Hexagonal Architecture

![diagramme hexagonal architecture width:500px](https://miro.medium.com/v2/resize:fit:720/format:webp/1*aD3zDFzcF5Y2_27dvU213Q.png)

[ Plus d'infos](https://medium.com/@luishrsoares/whats-hexagonal-architecture-6da22d4ab600)

---

## Microservices Architecture (déjà mentionné)

- **Découpage en services autonomes**.

---

## Serverless Architecture (déjà mentionné)

- **Exécution à la demande**.

---

## Choix de l'architecture

- **Dépend du contexte** :
  - La meilleure architecture dépend des besoins du projet (complexité, taille de l'équipe, exigences de scalabilité, etc.).
  - Toujours des avantages et inconvéniants
  - Par contre il y a toujours de très mauvaises architectures

---

### Exemple de code Deno

```typescript
import { oak } from './deps.ts';

interface User {
  id: number;
  name: string;
  email: string;
}

const usersDatabase: User[] = [ // Fausse "base de données" en mémoire
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

export const getUser = async (ctx: oak.Context) => {
  const userId = ctx.params.id;

  if (!userId) {
    ctx.response.status = 400;
    ctx.response.body = { error: 'User ID is required' };
    return;
  }

  const id = parseInt(userId);
  if (isNaN(id)) {
    ctx.response.status = 400;
    ctx.response.body = { error: 'Invalid User ID format' };
    return;
  }

  const user = usersDatabase.find(u => u.id === id);

  if (user) {
    ctx.response.body = user;
  } else {
    ctx.response.status = 404;
    ctx.response.body = { error: 'User not found' };
  }
};
```

---

#### Mélange des responsabilités

- **La fonction `getUser` fait trop de choses** :
  - **Gère la requête HTTP** (paramètres, codes HTTP, réponse). (Contrôleur)
  - **Valide les données d'entrée** (User ID). (Contrôleur et/ou Service ? Pas clair)
  - **Contient la logique métier** (rechercher un utilisateur). (Service)
  - **Accède directement à la "base de données"** (ici, un simple tableau en mémoire). (Repository)

---

#### Difficulté de test

- **Tester cette fonction unitaire devient compliqué** car elle a trop de dépendances et de responsabilités mélangées.

---

#### Manque de réutilisabilité

- **La logique de recherche d'utilisateur est enfermée dans le contrôleur**. Si vous voulez réutiliser cette logique ailleurs (par exemple, dans un autre contrôleur ou un service), vous devez la copier/coller ou la refactoriser difficilement.

---

#### Difficulté de maintenance et d'évolution

- **Si la logique métier devient plus complexe** (par exemple, validation plus poussée, logique de recherche plus sophistiquée), le contrôleur devient rapidement illisible et difficile à maintenir. Si vous changez la base de données, vous devrez modifier le contrôleur.

---

### Introduction à une meilleure architecture

Pour améliorer cette situation, on introduit une architecture qui sépare les responsabilités. Par exemple, avec une approche MVC simplifiée (Contrôleur, Service, Repository).

- Contrôleur (user.controller.ts)
  - **Gère les requêtes HTTP**, la validation de base des entrées, et orchestre l'appel au service. Il ne contient pas de logique métier complexe ni d'accès direct aux données.

- Service (user.service.ts)
  - **Contient la logique métier spécifique aux utilisateurs** (rechercher un utilisateur, créer un utilisateur, etc.). Il appelle le repository pour accéder aux données.

- Repository (user.repository.ts)
  - **S'occupe uniquement de l'accès aux données** (lecture, écriture, suppression, etc.). Il isole la logique d'accès aux données du reste de l'application.

---

## Attentes pour ce module

- **Architectures Backend Maîtrisées** : Comprendre architectures Backend modernes (monolithique, microservices, serverless) : avantages/inconvénients selon cas d'usage.
- **APIs Robustes** : Conception & Implémentation : Concevoir APIs RESTful/GraphQL robustes & documentées : contrats (Swagger/OpenAPI), JSON, codes HTTP.
- **Persistance Données Efficace** : Gérer persistance données : types BD (SQL/NoSQL), choix adapté, modélisation & optimisation.
- **Backend Qualité & Structuré** : Structurer Backend qualité : architectures (MVC, Clean, etc.), maintenabilité, testabilité, évolution.
