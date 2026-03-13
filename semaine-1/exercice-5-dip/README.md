## Exercice 5 — Dependency Inversion Principle (DIP)

### Violation

`semaine-1/exercice-5-dip/bad/userService.bad.js`: UserService instancie MySQLDatabase directement.
Les classes de haut niveau ne doit pas dépendre des classes de bas niveau. Mais des abstractions.
### Solution

| Classe            | Rôle                                         |
| ------------------| ---------------------------------------------|
| `UserService`     | Orchestration                                |
| `DatabaseManager` | Contrat commun                               |
| `MongoDatabase`   | Implémentation MongoDB                       |
| `MySQLDatabase`   | Implémentation MySQL                         |

### Résultat

Changer de base de données = modifier UNE ligne dans index.js.
Zéro modification de UserService. Zéro risque de régression.