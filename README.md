# Calculatrice TDD

Ce projet développe une calculatrice (addition, soustraction, multiplication) avec gestion d'un historique, en appliquant la démarche TDD.

## Technologies

- **HTML, CSS, JavaScript (ES Modules)** : Interface utilisateur.
- **Jest** : Tests unitaires de la logique métier.
- **Playwright** : Tests end-to-end de l'interface.
- **ESLint** : Qualité du code.

## Structure

- **src/** : Fichiers sources  
  - `index.html` : Page principale.  
  - `script.js` : Gestion des interactions.  
  - `calculator.js` : Logique métier et historique.
- **tests/unit/** : Tests unitaires (Jest).
- **tests/e2e/** : Tests E2E (Playwright).

## Tests

### Tests unitaires (Jest)
- Vérifie le bon fonctionnement des opérations et de la gestion de l'historique.  
- Pour exécuter :  
```bash
  npm test
```

### Tests End-to-End (Playwright)

Simule des actions sur l'interface (remplissage des champs, clics, affichage du résultat).
Pour exécuter :
```bash
npx playwright test
```
Pour le mode interactif :
```bash
npx playwright test --ui
```

### Démarche TDD
La démarche TDD (Test-Driven Development) que vous suivez se décompose en trois étapes principales :

1. Red : Écrire un test qui échoue
2. Green : Implémenter le code minimal pour passer le test
3. Refactor : Optimiser le code tout en gardant les tests verts

Chaque fonctionnalité est développée et commitée de manière atomique pour une évolution contrôlée du projet.

### Utilisation
1. Installer les dépendances
```bash
npm install
```
2. Lancer un serveur de développement (ex. Live Server) pour servir le dossier src/ (ex. http://localhost:5500/src/index.html).
3. Exécuter les tests unitaires et E2E comme indiqué ci-dessus.


