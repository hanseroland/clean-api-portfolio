## Exercice 1 — Single Responsibility Principle (SRP)

### Violation

`semaine-1/exercice-1-srp/bad/userService.bad.js` continent 4 raisons de changer.
4 raisons de changer = 4 sources de bugs potentiels = 4 développeurs qui se marchent dessus

### Solution

| Classe                 | Rôle                              |
| ---------------------- | --------------------------------- |
| `UserRepository`       | Accès DB uniquement               |
| `PasswordService`      | Hashage uniquement                |
| `EmailService`         | Envoie Email uniquement           |
| `UserService`          | Orchestration uniquement          |

### Résultat

Chaque classe a une seule raison de changer.
Un bug dans le hashage → on touche uniquement PasswordService.
Un changement de DB → on touche uniquement UserRepository.