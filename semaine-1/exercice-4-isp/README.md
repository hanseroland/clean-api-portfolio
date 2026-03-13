## Exercice 4 — Interface Segregation Principle (ISP)

### Violation

`semaine-1/exercice-4-isp/bad/worker.bad.js`: `RobotWorker.sleep()` et `RobotWorker.eat()` throw une Error — elles brisent le contrat de `Worker`.
Un objet fils n'est pas obligé d'implémenter une méthode de sa classe mère.

### Solution

| Classe       | Rôle                                         |
| ------------ | ---------------------------------------------|
| `Worker`     | Contrat commun — class mère                  |
| `HumanWorker`| Implémentation de worker(), eat() et sleep() |
| `RobotWorker`| Implémentation unique de work()              |

### Résultat

Pas de crashe en production
