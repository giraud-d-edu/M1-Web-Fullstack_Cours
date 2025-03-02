# TP #1 : API Films, Acteurs & Notes avec Deno

## Le client demande :

Pour un site internet il faut une API qui référence les Films et Acteurs.
(bonus) : Et je veux aussi que des utilisateurs puissent noter les films.

## Points Clés (Obligatoires) :

1.  **Relations Entités :** Modéliser et implémenter les relations entre `Film`, `Acteur`, `Note`. Fournir une brève justification écrite de vos choix de modélisation.
2.  **DTOs (Data Transfer Objects) :**  Utiliser *impérativement* des DTOs pour toutes les interactions API (requêtes/réponses JSON). Distinguer clairement DTOs (`dtos/`) et Models (`models/`). Implémenter des fonctions de conversion Model <-> DTO dans les Services.
3.  **Architecture MVC :** Structurer le code en MVC (Controllers, Services, Repositories).  Respecter strictement le rôle de chaque couche.
4.  **Codes HTTP :**  Choisir et utiliser des codes HTTP pertinents pour chaque endpoint. Justifier brièvement vos choix (commentaires dans le code).

Faites des petits commit réguliers. Vous pouvez faire des PR au sein de votre binôme.

## Bonus :

*   **Middleware :** Implémenter un middleware (ex: logging, exceptions).
*   **RxJS :** Utiliser RxJs à la place des promesses
*   **Pull Requests (PR) :** Travailler en binômes avec workflow de Pull Requests.
*   **Tests API :** Écrire des tests d'API basiques.
*   **Présentation Deno :** Présentation technique courte demain matin sur un aspect de Deno.

**Bon TP !**