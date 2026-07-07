# Portfolio - Lilya3

Portfolio professionnel réalisé dans le cadre du projet 12 de la formation Développeur Web / Intégrateur Web OpenClassrooms.

Ce portfolio présente mon profil, mes compétences techniques, mes projets de formation et mes moyens de contact.  
L’objectif est de proposer une vitrine professionnelle claire, responsive, accessible et maintenable.

## Site en ligne

Le portfolio est déployé avec Vercel :

```txt
https://portfolio-delta-taupe-81.vercel.app/
```

## Objectifs du projet

Ce projet a pour objectifs de :

- créer un portfolio professionnel complet ;
- valoriser les projets réalisés durant la formation ;
- présenter mes compétences techniques et méthodologiques ;
- construire une interface moderne, responsive et accessible ;
- organiser le projet avec une architecture claire ;
- déployer le site en ligne ;
- préparer un support concret pour la recherche d’un premier poste en développement web.

## Technologies utilisées

Le projet a été développé avec :

- React ;
- Vite ;
- JavaScript ;
- React Router ;
- Sass / SCSS ;
- React Icons ;
- PrismJS ;
- Vercel.

## Fonctionnalités principales

Le portfolio contient :

- une page d’accueil avec une présentation rapide ;
- une page projets avec filtres par technologies ;
- des pages détaillées pour chaque projet ;
- une galerie d’images avec lightbox ;
- une page compétences ;
- une page contact avec formulaire basé sur `mailto:`;
- des liens vers GitHub, le CV et les projets déployés ;
- une gestion SEO par page ;
- un design responsive adapté au desktop, à la tablette et au mobile.

## Projets présentés

### Kasa

Application de location immobilière développée avec React.

Compétences mises en avant :

- React ;
- React Router ;
- composants réutilisables ;
- gestion des routes dynamiques ;
- intégration responsive ;
- Sass.

### ArgentBank

Application bancaire front-end développée avec React et Redux Toolkit.

Compétences mises en avant :

- React ;
- Redux Toolkit ;
- authentification ;
- gestion du token ;
- routes protégées ;
- consommation d’API ;
- documentation Swagger.

### Nina Carducci

Projet d’optimisation SEO et accessibilité d’un site de photographe.

Compétences mises en avant :

- optimisation des images ;
- amélioration des performances ;
- SEO technique ;
- accessibilité ;
- audit Lighthouse ;
- bonnes pratiques web.

## Architecture du projet

Le projet est organisé afin de séparer clairement les pages, les composants globaux, les données et les styles.

```txt
src/
├─ assets/
├─ components/
│  ├─ ContactForm/
│  ├─ Footer/
│  ├─ Header/
│  ├─ Layout/
│  ├─ ProjectCard/
│  └─ Seo/
├─ data/
│  ├─ icons.jsx
│  ├─ projects.js
│  └─ skills.js
├─ pages/
│  ├─ Contact/
│  ├─ Home/
│  ├─ ProjectDetails/
│  ├─ Projects/
│  └─ Skills/
├─ styles/
│  ├─ abstracts/
│  ├─ base/
│  └─ main.scss
├─ App.jsx
└─ main.jsx
```

Les composants réutilisables globalement sont placés dans `src/components`.

Les composants spécifiques à une page sont placés dans un dossier `_components` à l’intérieur de la page concernée.

Exemple :

```txt
src/pages/ProjectDetails/
├─ _components/
├─ hooks/
├─ ProjectDetails.jsx
└─ ProjectDetails.scss
```

Cette organisation permet de garder des fichiers plus lisibles et de mieux séparer la logique globale des éléments propres à chaque page.

## Choix techniques

### React

React a été choisi pour structurer l’interface en composants, améliorer la maintenabilité du code et faciliter la création de pages dynamiques.

### Vite

Vite permet de disposer d’un environnement de développement rapide, moderne et adapté aux projets React.

### Sass / SCSS

Sass est utilisé pour organiser les styles avec :

- des variables globales ;
- des mixins ;
- des fichiers de styles séparés par page ou composant ;
- une meilleure lisibilité du CSS.

### React Router

React Router permet de gérer la navigation entre les différentes pages du portfolio :

- accueil ;
- projets ;
- détail d’un projet ;
- compétences ;
- contact.

### Vercel

Vercel a été utilisé pour déployer le portfolio en ligne simplement depuis le dépôt GitHub.

## Refactoring

Un refactoring important a été réalisé afin d’améliorer la lisibilité et la maintenabilité du projet.

Les principales améliorations sont :

- découpage des pages en composants internes ;
- création de dossiers `_components` pour les blocs spécifiques aux pages ;
- création d’un hook personnalisé `useProjectLightbox` ;
- allègement du fichier `ProjectDetails.jsx` ;
- réduction du fichier `ProjectDetails.scss` ;
- ajout de mixins SCSS globaux ;
- séparation plus claire entre composants globaux et composants propres aux pages.

Le composant `ProjectDetails.jsx` sert maintenant principalement à organiser la page, tandis que les parties spécifiques comme le hero, la galerie, la lightbox ou le bloc de code sont séparées dans leurs propres composants.

## SEO

Le projet intègre un composant `Seo` permettant de gérer les balises importantes de chaque page :

- titre de page ;
- meta description ;
- contenu adapté au portfolio ;
- structure claire des pages.

Les audits Lighthouse réalisés sur les pages principales montrent un score SEO de 100.

## Accessibilité

Une attention particulière a été portée à l’accessibilité :

- structure HTML sémantique ;
- textes alternatifs sur les images ;
- boutons et liens explicites ;
- navigation clavier possible ;
- attributs ARIA lorsque nécessaire ;
- contrastes vérifiés ;
- responsive mobile, tablette et desktop.

Les audits Lighthouse montrent de très bons scores d’accessibilité sur les pages testées.

## Performance

Les images du projet sont optimisées au format WebP.

Le projet a également été testé avec Lighthouse.  
Les pages principales obtiennent de très bons scores de performance.

Exemples de résultats observés :

```txt
Performance : 98 à 100
Accessibilité : 96 à 100
Bonnes pratiques : 100
SEO : 100
```

## Installation du projet

### Prérequis

Vous devez avoir Node.js et npm installés sur votre machine.

### Cloner le dépôt

```bash
git clone https://github.com/Lilya3/portfolio.git
```

### Aller dans le dossier du projet

```bash
cd portfolio
```

### Installer les dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le projet sera accessible en local à l’adresse indiquée dans le terminal.

### Générer le build de production

```bash
npm run build
```

### Vérifier le lint

```bash
npm run lint
```

## Tests réalisés

Les tests réalisés sont principalement des tests manuels et des audits qualité.

Vérifications effectuées :

- navigation entre toutes les pages ;
- filtres de projets ;
- liens GitHub ;
- liens vers les sites déployés ;
- téléchargement du CV ;
- formulaire de contact ;
- lightbox des pages projets ;
- responsive desktop, tablette et mobile ;
- absence d’erreurs console ;
- build de production ;
- audit Lighthouse.

## Gestion de projet

La gestion du projet a été suivie avec un tableau Kanban.

Le tableau contient notamment :

- les tâches de cadrage ;
- les tâches de développement ;
- les tâches de design ;
- le responsive ;
- le SEO ;
- l’accessibilité ;
- le déploiement ;
- le refactoring ;
- les tests et validations finales.

Les tâches sont organisées avec :

- un statut ;
- une priorité ;
- une catégorie ;
- une complexité ;
- une estimation de temps.

## Déploiement

Le projet est déployé sur Vercel.

Le déploiement permet de rendre le portfolio accessible publiquement et de vérifier le comportement du site dans un environnement réel.

## Auteur

Lilya3 
Développeuse Front-End React junior

## Liens

```txt
Portfolio : https://portfolio-delta-taupe-81.vercel.app/
GitHub : https://github.com/Lilya3
```