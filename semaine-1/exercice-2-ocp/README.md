# Exercice 2: Open/Closed Principle (OCP)

## Tableau des Responsabilités

| Classe                   | Responsabilité                                      |
|--------------------------|----------------------------------------------------|
| `emailNotification.js`  | Gérer l'envoi des notifications par email.         |
| `pushNotification.js`   | Gérer l'envoi des notifications push.              |
| `smsNotification.js`    | Gérer l'envoi des notifications par SMS.           |
| `notificationProvider.js` | Fournir une interface commune pour les notifications. |
| `notificationService.js` | Coordonner l'envoi des notifications via les providers. |

## Instructions

1. Étudiez les fichiers dans le dossier `bad` pour comprendre les violations du principe OCP.
2. Analysez les fichiers dans le dossier `good` pour voir une implémentation respectant le principe OCP.
3. Comparez les deux approches et notez les différences.

