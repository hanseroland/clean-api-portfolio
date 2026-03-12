## Exercice 3 — Liskov Substitution Principle (LSP)

### Violation

`semaine-1/exercice-3-lsp/bad/printer.bad.js`: `OldPrinter.scan()` throw une Error — elle brise le contrat de `Printer`.`scanDocument(new OldPrinter())` crashe en production.
Un objet fils doit pouvoir remplacer sa classe mère sans rien casser.

### Solution

| Classe       | Rôle                                |
| ------------ | ----------------------------------- |
| `Printer`    | Contrat commun — class mère         |
| `NewPrinter` | Implémentation de print() et scan() |
| `OldPrinter` | Implémentation unique de print()    |

### Résultat

Pas de crashe en production
