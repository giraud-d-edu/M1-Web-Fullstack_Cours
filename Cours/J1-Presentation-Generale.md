---
title: M1 - Développement Web Full Stack - Cours
author: Damien Giraudet
transition: wipe
---

> M1 - Développement Web Full Stack
> Ynov Campus

# J1 : Présentation générale

> **Damien Giraudet : [Linkedin](https://fr.linkedin.com/in/damiengiraudet)**
> damien.giraudet@ynov.com

---

# Qu'est-ce qu'un développeur Full Stack en 2025 ?

---

## Définition contemporaine
Un développeur Full Stack en 2025 est un professionnel polyvalent capable de travailler sur l'ensemble des couches d'une application web ou mobile, de l'interface utilisateur jusqu'à l'infrastructure. Il maîtrise non seulement plusieurs technologies mais comprend surtout les principes architecturaux et méthodologiques qui les sous-tendent.

---

## Évolution du métier
```
Complexité
^
|                                      * 2025 (Cloud natif, IA,
|                                               Sécurité avancée)
|                           
|                           * 2020 (DevOps, Conteneurisation,
|                                    Microservices)
|                  
|                * 2015 (SPA, API REST, NoSQL)
|         
|      * 2010 (AJAX, jQuery, Frameworks MVC)
|
| * 2005 (HTML/CSS/PHP/MySQL)
|
+-----------------------------------------> Temps
```

---

> "Le développeur Full Stack moderne n'est pas celui qui connaît tout sur tout, mais celui qui comprend comment tout s'articule et sait où approfondir quand nécessaire."
> — Sarah Drasner, VP of Developer Experience chez Netlify

---

## Attentes vs Réalité
- **Attente** : Maîtriser parfaitement chaque technologie de la stack
- **Réalité** : Comprendre les principes fondamentaux et savoir s'adapter rapidement

- **Attente** : Coder parfaitement du premier coup
- **Réalité** : Itérer, tester et améliorer continuellement

Le syndrome de l'imposteur touche 72% des développeurs Full Stack, qui se sentent souvent dépassés par l'étendue des connaissances à maîtriser. Rappelez-vous : personne ne sait tout, l'important est de savoir apprendre.

---

# Le spectre complet du développement Full Stack

---

## Architecture en couches

![Présentation en 3 couches width:800px](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Overview_of_a_three-tier_application_vectorVersion.svg/1920px-Overview_of_a_three-tier_application_vectorVersion.svg.png)

---

### Les couches essentielles

---

### UX/UI (Expérience)
- Recherche utilisateur et personas
- Design d'interface et prototypage
- Accessibilité et ergonomie
- Design system et composants

---

### Frontend (Présentation)
- HTML/CSS/JavaScript
- Frameworks (React, Vue, Svelte, Angular)
- State management
- Tests unitaires, E2E, ...

---

### Backend (Application)
- Architecture et API
- Logique métier et validation
- Authentification et autorisation
- Test unitaire, d'intégration, ...

---

### Persistance des données (Données)
- Modélisation (SQL/NoSQL)
- Optimisation et performance
- Migration et versioning
- Backup et résilience

---

### Infrastructure
- Cloud et serveurs
- Virtualisation et containers
- Réseau et DNS
- Stockage et CDN

---

### Compétences transversales
- **DevOps** : CI/CD, automatisation, monitoring
- **Sécurité** : OWASP, cryptographie, bonnes pratiques
- **Performance** : Optimisation, caching, lazy loading
- **Méthodologie** : Agile, Git, documentation, collaboration

---

# Les défis du développeur Full Stack
- Apprentissage perpétuel
- Équilibrer largeur et profondeur des connaissances
- Rester à jour avec les évolutions technologiques
- Gérer la complexité et la dette technique

---

# Pourquoi apprendre le Full Stack ?
- Avantages professionnels
- Autonomie technique
- Vision globale des projets
- Facilité à communiquer entre équipes spécialisées

---

# Et concrètement pour ce module ?

---

## Objectifs du module
- Comprendre l'écosystème complet du développement web moderne
- Maîtriser les fondamentaux architecturaux au-delà des technologies spécifiques
- Acquérir une vision transversale de la stack technique
- Développer des compétences méthodologiques essentielles
- Construire une application complète de A à Z

---

## Ce que ce module n'est PAS
- Exhaustif sur chaque technologie
- Une formation spécialisée dans un domaine unique
- Un cours de programmation de base (prérequis attendus)
- Une présentation des dernières tendances sans fondements

---

## Les technologies que nous utiliserons
- TypeScript
- Deno
- MongoDB
- Svelte
- GitHub

---

## Les 101 de ce module

- Introduction sur l'UX/UI [Lien HTML](intro-UX-UI.html)
- Introduction sur le Frontend [Lien HTML](intro-Frontend.html)
- Introduction sur le Backend [Lien HTML](intro-Backend.html)
- Introduction sur les BDD [Lien HTML](intro-BDD.html)
- Introduction DevOps (module B3 - Devops) :
  1. Les fondamentaux : [GSlide](https://docs.google.com/presentation/d/1U75Knm1lCWn8E2pZdGI1aUa9ALnnk3ivPyD4rxtWeVw/edit?usp=sharing)
  2. Les fondamentaux de Docker : [GSlide](https://docs.google.com/presentation/d/1QWYzxQaoHI-BkpkjSAwAuj7VvMQkmSyyaT4XZ0ktvTo/edit?usp=sharing)
  3. Docker, les commandes de base : [GSlide](https://docs.google.com/presentation/d/1DaWyp2i-0xaavqGsAho0LxCZn45LsY716rZ5WlZ72UU/edit?usp=sharing)

---

## Calendrier

- lundi 3, mardi 4 et jeudi 6 mars
- lundi 24 (matin), mardi 25 et jeudi 27 mars
- mardi 15 avril
- lundi 5 mai
  - *[TU] mardi 6 mai*
- lundi 16 et mercredi 18 juin
  - *[TU] mardi 17 et jeudi 19 juin*
  - *[TU] mardi 24 et jeudi 25 juin*

---

### Cette semaine (J1, J2, J3) : du backend

- J1 : Lundi 3 mars
  - Présentation Générale
  - TD1 : Application simple avec Deno
  - Présentation "Introduction au backend"
  - TP1 : Development d'une API simple
- J2 : Mardi 4 mars
  - REX sur le lundi
  - Presentation "API, DDD, Contrat d'interface"
  - TD2 : Implémentation de MongoDB
  - TP2 : Développement d'une API en trinôme
- J3 : Jeudi 6 mars (distanciel)
  - REX sur lundi et mardi
  - Projet de groupe noté en trinôme pour développer une API

---

### Dans deux semaines (J4, J5, J6) : du frontend

- Lundi 24 matin en distanciel ?
- Même structure
  - théorie et de la pratique les deux premiers jours
  - projet en trinôme noté le troisième jour

---

## Projet de fin de module


Encore en cours de réflexion de mon coté.

> Vous pouvez me fournir des idées de projets

> Idéalement deux ou trois gros projets pour toute la promo avec des sous groupe et des rituels agiles

---

## Notations :

- Soutenance sur le frontend en groupe
- Soutenance sur le backend en groupe
- Présentation individuelle (à faire une fois sur le module)
- Evaluation individuelle (vers la fin du module)
- Projet de module en groupe avec soutenances intermédiaire et finale

---

# Questions ?
