## Exercice 2 — Open/Closed Principle (OCP)

### Violation

`NotificationService` contient un `if/else` par canal.
Ajouter WhatsApp = modifier la classe = risque de régression.

### Solution

| Classe                 | Rôle                              |
| ---------------------- | --------------------------------- |
| `NotificationProvider` | Contrat commun — ne change jamais |
| `EmailNotification`    | Implémentation email              |
| `SmsNotification`      | Implémentation SMS                |
| `PushNotification`     | Implémentation Push               |
| `NotificationService`  | Orchestration — ne change jamais  |

### Résultat

Nouveau canal = nouveau fichier. Zéro modification du code existant.
