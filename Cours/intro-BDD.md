---
title: M1 - Développement Web Full Stack - Introduction BDD
author: Damien Giraudet
transition: wipe
---

> M1 - Développement Web Full Stack
> Ynov Campus

# Rappel architecure & Introduction BDD

> **Damien Giraudet : [Linkedin](https://fr.linkedin.com/in/damiengiraudet)**
> damien.giraudet@ynov.com

---

## Architectures Backend : MVC et Onion

---

### [Rappel] MVC : Modèle-Vue-Contrôleur (Architecture Simple)

L'architecture MVC est un pattern fondamental pour organiser votre code backend. Elle sépare l'application en trois parties principales :

- **Modèle (Model) :**  Gère les données et la logique métier. Interagit avec la base de données.
- **Vue (View) :**  Présente les données à l'utilisateur. Dans un backend API, cela peut être la réponse JSON retournée.
- **Contrôleur (Controller) :**  Reçoit les requêtes de l'utilisateur, interagit avec le modèle pour récupérer ou modifier les données, et choisit la vue à afficher ou la réponse à renvoyer.

---

### Architecture Onion (Architecture en Oignon)

L'architecture Onion pousse la séparation des préoccupations plus loin que MVC.

Elle met l'accent sur le **Domaine Métier** au centre, indépendant des détails techniques externes.  Les couches sont organisées concentriquement :

---

**Couches principales de l'Architecture Onion (de l'intérieur vers l'extérieur) :**

- **Domaine (Model) :** Le cœur de l'application. Contient la logique métier, les entités, les règles de validation, les cas d'utilisation. **Indépendant de toute technologie externe.**
- **Application (Service) :**  Orchestre les cas d'utilisation en utilisant le domaine.  Contient les services applicatifs.  **Connait le domaine, mais pas l'infrastructure.**
- **Infrastructure (Controller, Repository) :**  Détails techniques : base de données, API externes, systèmes de fichiers.  Implémente les interfaces définies par l'application ou le domaine. **Couche la plus externe, dépend des couches internes.**
- **Présentation (Presentation) / UI / API :**  Couche la plus externe qui interagit avec le monde extérieur (utilisateurs, autres systèmes). Contrôleurs API, UI, etc.

---

**Avantages de l'Architecture Onion :**

- **Découplage fort :**  Le domaine métier est isolé des détails techniques, facilitant les tests, la maintenance et l'évolution.
- **Testabilité accrue :**  Logique métier facilement testable unitairement car indépendante des frameworks et des bases de données.
- **Adaptabilité :**  Changer de base de données ou de framework de présentation a moins d'impact sur le cœur de l'application.

---

## DTO, Domain, DBO : Les Objets de Données

Pour bien structurer le flux de données dans votre application, on utilise différents types d'objets :

---

### DTO (Data Transfer Object)

- **Objet de Transfert de Données.**
- **Usage :**  Transporte des données **entre les couches** de votre application, et **entre votre API et le monde extérieur**.
- **Caractéristiques :**  Simples, contiennent uniquement des données, souvent validées et transformées pour la couche qui les reçoit.
- **Exemple :** `BookDTO` pour envoyer les informations d'un livre au format JSON dans une réponse API.

---

### Domain Object (Objet de Domaine)

- **Objet du Domaine Métier.**
- **Usage :**  Représente un concept du métier (ex: `Livre`, `Auteur`, `Commande`). Contient la **logique métier** associée à ce concept.
- **Caractéristiques :**  Riches, peuvent contenir des méthodes, des validations complexes, des relations avec d'autres objets de domaine.  **Indépendants de la base de données ou de l'API.**
- **Exemple :** `Book` (modèle de domaine) avec des méthodes pour calculer des réductions, vérifier la disponibilité, etc.

---

### DBO (Data Base Object) / Entity (Entité)

- **Objet de Base de Données / Entité de Persistance.**
- **Usage :**  Représente les données telles qu'elles sont **stockées dans la base de données**.
- **Caractéristiques :**  Reflète la structure de la base de données (tables, collections, champs).  Peuvent contenir des annotations ou des configurations spécifiques à l'ORM ou au driver de base de données.
- **Exemple :**  L'interface `Book` que nous utilisons avec `_id` pour MongoDB, reflétant la structure du document "book" dans la collection MongoDB.

---

### En résumé :

- **DTO** : Communication API / Transfert entre couches (Présentation -> Application, Application -> Présentation).
- **Domain Object** : Cœur de la logique métier (Couche Domaine).
- **DBO/Entity** : Représentation de la base de données (Couche Infrastructure/Data).

---

## Domain-Driven Design (DDD)

DDD est une approche de conception logicielle qui met l'accent sur la compréhension et la modélisation du **domaine métier**.  Les architectures MVC et Onion, ainsi que l'utilisation de DTOs, d'objets de domaine et de DBOs, s'alignent parfaitement avec les principes DDD :

---

- **Ubiquitous Language (Langage Ubiquitaire) :** Les objets de domaine (`Book`, `Auteur`, etc.) et leurs propriétés doivent refléter le langage utilisé par les experts du domaine métier.
- **Bounded Contexts (Contextes Délimités) :**  L'architecture Onion, avec sa séparation claire en couches, aide à définir des contextes délimités, où un modèle de domaine a une signification et une portée spécifiques.
- **Entities et Value Objects :** Les objets de domaine sont souvent des Entities (avec une identité unique, comme `Book` avec son `_id`) ou des Value Objects (sans identité propre, définis par leurs attributs, comme une `Adresse`).
- **Repositories :** La couche Repository isole le domaine des détails d'implémentation de la base de données, en accord avec les principes DDD.
- **DTOs et API comme couche Présentation :**  L'API et les DTOs servent de couche de présentation, communiquant avec le monde extérieur et transformant les données pour les besoins spécifiques de l'interface utilisateur ou des autres systèmes.

---

**DDD n'est pas une architecture, mais une *approche de conception*. MVC et Onion sont des *architectures* qui peuvent faciliter l'implémentation des principes DDD.**

---

## Bases de Données : SQL vs NoSQL

---

### Bases de Données Relationnelles (SQL)

- **Structure :** Données organisées en **tables** avec des **lignes** (enregistrements) et des **colonnes** (champs).
- **Relations :** Relations définies entre les tables (One-to-One, One-to-Many, Many-to-Many).
- **Langage :** SQL (Structured Query Language) pour interroger et manipuler les données.
- **Principes clés :** ACID (Atomicité, Cohérence, Isolation, Durabilité) - garantit l'intégrité des données.

---

**Types de Relations SQL :**

- **One-to-One :** Une ligne dans la table A est liée à au plus une ligne dans la table B, et vice versa.
    - *Exemple :* `Utilisateur` et `ProfilUtilisateur` - chaque utilisateur a un profil, et chaque profil appartient à un utilisateur.

- **One-to-Many :** Une ligne dans la table A peut être liée à zéro, une ou plusieurs lignes dans la table B, mais une ligne dans la table B ne peut être liée qu'à au plus une ligne dans la table A.
    - *Exemple :* `Auteur` et `Livre` - un auteur peut écrire plusieurs livres, mais un livre n'a qu'un seul auteur principal.

- **Many-to-Many :**  Une ligne dans la table A peut être liée à zéro, une ou plusieurs lignes dans la table B, et vice versa. Nécessite souvent une **table de jointure** intermédiaire.
    - *Exemple :* `Livre` et `Catégorie` - un livre peut appartenir à plusieurs catégories, et une catégorie peut contenir plusieurs livres.

---

**Avantages des BDD Relationnelles (SQL) :**

- **Intégrité des données :** ACID garantit la cohérence et la fiabilité.
- **Structure claire et rigide :**  Schéma bien défini, relations explicites.
- **Maturité et outils :**  Écosystème mature, nombreux outils et compétences disponibles.
- **Transactions complexes :**  Support robuste pour les transactions multi-étapes.

---

**Inconvénients des BDD Relationnelles (SQL) :**

- **Moins flexible pour les données non structurées :**  Schéma rigide peut être contraignant.
- **Scalabilité horizontale plus complexe :**  Scaler horizontalement (répartir sur plusieurs serveurs) peut être plus difficile.
- **Développement parfois plus lent pour les applications agiles :**  Modifications de schéma peuvent être lourdes.

---

### Bases de Données NoSQL (Non-Relationnelles)

- **Structure :**  Plus flexibles que les BDD relationnelles. Différents types :
    - **Document Store (MongoDB):** Stocke des données en documents (JSON-like). Pas de schéma fixe.
    - **Key-Value Store (Redis, Memcached):** Stocke des paires clé-valeur. Rapide pour le cache et les sessions.
    - **Column-Family Store (Cassandra):**  Optimisées pour la scalabilité et la haute disponibilité.
    - **Graph Database (Neo4j):**  Optimisées pour les relations complexes et les graphes de données.
- **Langage :** Pas de langage de requête standardisé comme SQL. Chaque type de NoSQL a souvent son propre langage ou API.
- **Principes clés :**  "BASE" (Basically Available, Soft state, Eventually consistent) - privilégie la disponibilité et la performance sur la cohérence stricte (ACID relâché).

---

**Avantages des BDD NoSQL :**

- **Flexibilité du schéma :**  Facile de modifier la structure des données, idéal pour les données non structurées ou semi-structurées.
- **Scalabilité horizontale :**  Conçues pour scaler horizontalement, gérer de gros volumes de données et de trafic.
- **Performance pour certains cas d'usage :**  Peuvent être très rapides pour des opérations simples (lecture/écriture de documents, requêtes par clé).
- **Adapté aux applications agiles et au développement rapide :**  Flexibilité du schéma facilite les itérations rapides.

---

**Inconvénients des BDD NoSQL :**

- **Cohérence des données moins stricte :** "Eventually consistent" peut être un problème pour certaines applications nécessitant une forte cohérence (transactions bancaires, etc.).
- **Moins de fonctionnalités pour les requêtes complexes (pour certains types) :**  Les requêtes complexes, les jointures multi-tables sont moins naturelles ou moins performantes qu'en SQL.
- **Moins de maturité et d'outils (que SQL, mais l'écart se réduit) :**  Écosystème moins mature que SQL, peut-être moins d'outils et de compétences disponibles pour certains types de NoSQL.

---

**Choisir entre SQL et NoSQL ?**

- **SQL :**  Pour les applications nécessitant une forte intégrité des données, un schéma rigide, des transactions complexes, et quand les données sont relationnelles par nature.
- **NoSQL :** Pour les applications nécessitant une grande scalabilité, une flexibilité du schéma, des données non structurées, et quand la cohérence stricte n'est pas primordiale.  Souvent un bon choix pour les applications web modernes, les applications mobiles, et les systèmes de Big Data.

---

## Introduction Pratique à MongoDB avec Deno

---

### MongoDB : Base de données NoSQL Document Store

- **Document Store :** Stocke les données sous forme de **documents** au format BSON (Binary JSON). Les documents sont regroupés dans des **collections**.
- **Pas de schéma fixe :** Chaque document dans une collection peut avoir une structure différente. Grande flexibilité.
- **Scalable et performant :**  Conçu pour la scalabilité horizontale et les performances élevées.
- **Facile à utiliser :**  Syntaxe de requête intuitive, facile à apprendre.

---

**Concepts clés MongoDB :**

- **Document :** Unité de base de données dans MongoDB. Similaire à un objet JSON. Contient des paires clé-valeur.
    ```json
    {
      "_id": ObjectId("65d09a7b9d34a81c0b3a4e5f"),
      "titre": "Le Seigneur des Anneaux",
      "auteur": "J.R.R. Tolkien",
      "isbn": "978-0618260263",
      "datePublication": "1954"
    }
    ```
- **Collection :** Groupe de documents. Similaire à une table dans une base de données relationnelle, mais sans schéma imposé.
- **Base de données :** Conteneur logique pour une ou plusieurs collections.
