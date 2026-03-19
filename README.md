# clean-api-portfolio

[![CI](https://github.com/hanseroland/clean-api-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/hanseroland/clean-api-portfolio/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/hanseroland/clean-api-portfolio)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Série d'exercices pratiques démontrant la maîtrise des **principes SOLID** et de la **Clean Architecture** en Node.js/Express/MySQL — avec **100% de couverture de tests Jest**.

---

## Pourquoi ce projet ?

La Clean Architecture et les principes SOLID sont souvent cités mais rarement démontrés dans un code réel. Ce repo propose des exercices progressifs avec, pour chaque principe, une implémentation **incorrecte** et une version **corrigée** — permettant de comparer directement l'avant/après.

---

## Stack technique

| Catégorie | Technologie |
|---|---|
| Runtime | Node.js 18+ |
| Framework | Express.js |
| Base de données | MySQL (Mongoose) |
| Tests | Jest — 100% coverage |
| Validation | Joi |
| Auth | JWT + Bcrypt |
| Qualité code | Prettier |

---

## Architecture des couches

```
┌─────────────────────────────────────────┐
│              Interfaces                 │  ← Controllers, Routes, Middlewares HTTP
│  ┌───────────────────────────────────┐  │
│  │          Infrastructure           │  │  ← DB, Email, Services externes
│  │  ┌─────────────────────────────┐  │  │      Implémente les contrats du domaine
│  │  │        Application          │  │  │
│  │  │  ┌───────────────────────┐  │  │  │  ← Use Cases, orchestre le domaine
│  │  │  │        Domain         │  │  │  │
│  │  │  │  Règles métier pures  │  │  │  │  ← Zéro dépendance externe
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
         ↑ Les dépendances pointent toujours vers l'intérieur
```

**Règle fondamentale** : le domaine ne connaît rien des autres couches. Les couches externes dépendent des couches internes — jamais l'inverse.

---

## Exercices SOLID — Semaine 1

Chaque exercice contient un fichier `bad/` (implémentation incorrecte) et `good/` (version corrigée).

| Exercice | Principe | Description |
|---|---|---|
| `exercice-1` | **SRP** — Single Responsibility | `UserService` découpé en 4 classes à responsabilité unique |
| `exercice-2` | **OCP** — Open/Closed | `NotificationService` extensible sans modification — 5 classes |
| `exercice-3` | **LSP** — Liskov Substitution | `Printer` respectant la substitution — 3 classes |
| `exercice-4` | **ISP** — Interface Segregation | `Worker` avec interfaces ségrégées — 3 classes |
| `exercice-5` | **DIP** — Dependency Inversion | `UserService` inversant ses dépendances — 4 classes |

### Exemple — SRP avant/après

**Avant (violation SRP) :** une seule classe fait tout
```js
class UserService {
  createUser() { /* validation + DB + email + log */ }
  sendEmail() { /* ... */ }
  logActivity() { /* ... */ }
}
```

**Après (SRP respecté) :** chaque classe a une seule responsabilité
```js
class UserRepository   { save(user) { /* DB only */ } }
class EmailService     { send(to, msg) { /* email only */ } }
class ActivityLogger   { log(action) { /* log only */ } }
class UserService      { constructor(repo, email, logger) { /* orchestre */ } }
```

---

## API REST — Semaine 2 : Clean Architecture complète

API d'authentification structurée en 4 couches indépendantes.

### Endpoints

| Méthode | Route | Auth | Description |
|---|---|---|---|
| `POST` | `/api/v1/auth/register` | ❌ | Enregistrement d'un utilisateur |
| `POST` | `/api/v1/auth/login` | ❌ | Connexion et obtention du JWT |
| `GET` | `/api/v1/users/me` | ✅ JWT | Profil de l'utilisateur connecté |

### Structure du projet

```
src/
├── domain/               # Règles métier — zéro dépendance externe
│   ├── entities/
│   └── repositories/     # Interfaces (contrats)
├── application/          # Use cases — orchestre le domaine
│   └── usecases/
├── infrastructure/       # Implémente les contrats
│   ├── database/
│   └── email/
└── interfaces/           # Protocole HTTP
    ├── controllers/
    ├── routes/
    └── middlewares/
```

---

## Lancer le projet

```bash
git clone https://github.com/hanseroland/clean-api-portfolio.git
cd clean-api-portfolio
npm install
cp .env.example .env   # Configurer DB_HOST, DB_USER, DB_PASS, JWT_SECRET
npm run dev
```

---

## Tests

```bash
npm test                 # Lance tous les tests
npm run test:coverage    # Rapport de couverture (100%)
```

---

## Ce que ce projet démontre

- Séparation stricte des préoccupations (Separation of Concerns)
- Inversion des dépendances via des interfaces/contrats
- Code testable à 100% grâce au découplage des couches
- Architecture scalable : changer de DB ou d'email sans toucher au domaine

---

## Auteur

**NGUEMA NTOUGOU Hanse R.P.**
[hanseroland.com](https://www.hanseroland.com) · [LinkedIn](https://www.linkedin.com/in/hanse-r-p-nguema-ntougou-16a907220/) · [GitHub](https://github.com/hanseroland)