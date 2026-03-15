# Clean API Portfolio

> Série d'exercices pratiques démontrant la maîtrise des principes 
> SOLID et de la Clean Architecture en Node.js/Express/MySQL.

## Stack technique
- **Runtime** : Node.js
- **Framework** : Express.js
- **Base de données** : MySQL
- **Tests** : Jest (100% coverage)
- **Validation** : Joi
- **Auth** : JWT + Bcrypt

## Structure du projet

### Semaine 1 — Principes SOLID
| Exercice | Principe | Description |
|---|---|---|
| exercice-1 | SRP | Séparation des responsabilités — UserService en 4 classes  |
| exercice-2 | OCP | Open/Closed Principle - NotificationService en 5 classes |
| exercice-3 | LSP | Liskove Substitution Principle - Printer en 3 classes|
| exercice-4 | ISP | Interface Segregation Principle - Worker en 3 classes |
| exercice-5 | DIP | Dependency Inversion Principle - UserService en 4 classes  |

### Semaine 2 — Clean Architecture
API REST d'authentification structurée en 4 couches :
- **Domain** : Règles métier pures — zéro dépendance externe
- **Application** : Cas d'usage — orchestre le domaine
- **Infrastructure** : DB, Email, services externes — implémente les contrats du domaine
- **Interfaces** : Controllers, Routes, Middlewares — gère le protocole HTTP

## Endpoints
| Méthode | Route | Auth | Description |
|---|---|---|---|
| POST | /api/v1/auth/register | ❌ | Enregistrer un user |
| POST | /api/v1/auth/login | ❌ | Connexion d'un user |
| GET | /api/v1/users/me | ✅ | Obtenir les données d'un utilisateur connecté, route protégée |

## Lancer le projet
```bash
npm install
cp .env.example .env
npm run dev
```

## Tests
```bash
npm test
```

