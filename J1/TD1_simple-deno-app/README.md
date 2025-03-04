# Travaux Dirigé #1 : Simple Deno App

## Deno

1. Consulter [la documentation](https://docs.deno.com/runtime/)
2. Exécuter `deno main.ts`

## Le contrat d'interface

1. Téélécharger Postman et importer le fichier `postman_collection.json`
2. Identifier les quatre routes que je vous demande d'implémenter.

## Architecture

**MVC**

Il faudra 4 dossiers:
* models
* controllers
* services
* repositories

### Repository "in memory"

Pour ce TD pas besoin d'implémenter une vraie base de donnée.
Vous pouvez directement mettre un array dans votre classe

``` typescript
import { Book } from '../models/book.model.ts';

const books: Book[] = [
    { id: 1, titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", isbn: "978-0618260263", datePublication: "1954-07-29" },
    { id: 2, titre: "Orgueil et Préjugés", auteur: "Jane Austen", isbn: "978-0141439518", datePublication: "1813-01-28" },
];
```
