# Server_Client_Node.js_React

## Résumé du projet :

Le projet est une application web développée avec une architecture client-serveur. Le côté client est intégré en utilisant React, une bibliothèque JavaScript pour créer des interfaces utilisateur interactives. Le côté serveur est développé en utilisant Node.js avec Express, un framework Web, pour créer un serveur HTTP et Sequelize pour interagir avec une base de données PostgreSQL. Le projet suit une approche moderne en utilisant des dépendances frontales et backend bien définies.

### Style d'organisation :

Le projet suit une structure organisée avec des dossiers clairement définis pour le côté client et le côté serveur. Les fichiers sont regroupés en fonction de leur rôle et de leur responsabilité dans le projet. La séparation du frontend et du backend permet de maintenir une base de code propre et évolutif

## Structure du projet :
```go
project/
├── client/
│   ├── .cache/
│   ├── build/
│   ├── dist/
│   ├── node_modules/
│   ├── public/
│   │   ├── style.css
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └──  App/
│   │   │       ├── FormInput/
│   │   │       │   └── index.js
│   │   │       ├── Input/
│   │   │       │   └── index.js
│   │   │       └── App.js
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── server/
│   ├── db/
│   │   ├── models/
│   │   │   └── RecupFormData.js
│   │   ├── database.js
│   │   └── index.js
│   ├── node_modules/
│   ├── routes/
│   │   └── api.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
└──.gitignore
```
## Détail de la structure:

### Côté Client (Frontend) :

- Structure du dossier ``client`` :

- Le dossier ``client`` :
    - contient toute la partie frontend développée en utilisant React.

- Le dossier ``.cache`` :

    - les fichiers cache utilisés par les outils de construction, tels que Parcel ou Webpack.

- Le dossier ``build`` :

    - contient les fichiers générés après la construction de l'application.

- Le dossier ``dist`` : 

    - contient les fichiers statiques à servir pour l'interface de l'application.

- Le dossier ``node_modules`` :

    - contient les dépendances frontales installées pour l'application.

- Le dossier ``public`` :

    - contient le fichier ``index.html``, qui est le point d'entrée de l'interface de l'application.
    - contient le fichier ``style.css``, qui est un style générqiue de la page.

- Dossier ``src`` :

    - Le dossier ``src`` contient le code source de l'interface de l'application.

    - Fichier ``index.js`` (dans ``src``) :

    - Le fichier ``index.js`` est le point d'entrée de l'application React.
    - Il utilise la méthode ReactDOM.render pour rendre le composant principal ``App`` dans le DOM.

- Dossier ``composants`` :

    - Le dossier ``components`` contient les différents composants React utilisés dans l'application.

- Composant ``Application`` :

    - Le composant ``App`` est le composant principal de l'interface de l'application.
    - Il est défini dans le fichier ``App.js`` dans le dossier ``App`` sous ``components``.
    - Le composant ``App`` inclut deux sous-composants : ``FormInput`` et ``Input``.

- Composant ``FormInput`` :

    - Le composant ``FormInput`` est responsable de la gestion du formulaire dans l'application.
    - Il permet aux utilisateurs de saisir des données et de soumettre le formulaire.
    - Lorsque le formulaire est soumis, le composant envoie une requête POST au serveur pour enregistrer les données.

- Composant ``Input`` :

    - Le composant ``Input`` est un composant réutilisable qui affiche un champ de saisie dans le formulaire.
    - Il est utilisé dans le composant ``FormInput`` pour afficher les champs de saisie nécessaires.

- Le fichier ``.env`` :

    - contient les variables d'environnement spécifiques au client, le cas échéant.

- Le fichier ``package.json`` :

    - contient les dépendances nécessaires pour l'application côté client, et le fichier ``package-lock.json`` est utilisé pour verrouiller les versions spécifiques des dépendances.

### Côté Serveur (Backend) :

- Structure du dossier ``serveur`` :

    - Le dossier ``server`` contient toute la partie backend développée en utilisant Node.js avec Express et Sequelize pour interagir avec la base de données PostgreSQL.

- Dossier ``db`` :

    - Le dossier ``db`` les fichiers liés à la gestion de la base de données PostgreSQL contient.

- Fichier ``database.js`` :

    - Le fichier ``database.js`` configure la connexion à la base de données PostgreSQL en utilisant Sequelize.
    - Le fichier ``index.js`` dans le dossier ``db`` : 
        - regroupe tous les modèles Sequelize et crée les associations.

- Dossier ``modèles`` :

    - Le dossier ``models`` les modèles Sequelize utilisé pour interagir avec la base de données contient.

- Modèle ``RecupFormData`` :

    - Le modèle ``RecupFormData`` est défini dans le fichier ``RecupFormData.js`` dans le dossier ``models``.
    - Il est utilisé pour interagir avec la table ``recupformdata`` dans la base de données.

- Dossier ``routes`` :

    - Le dossier ``routes`` contient les fichiers de gestion des routes pour le serveur. Dans ce cas, ``api.js`` gère les routes pour les requêtes GET et POST.

- Fichier ``api.js`` :

    - Le fichier ``api.js`` définit les routes pour les requêtes GET et POST du formulaire.
    - Lorsqu'une requête POST est reçue depuis le client, le serveur utilise le modèle ``RecupFormData`` pour enregistrer les données dans la base de données.
    - Lorsqu'une requête GET est reçue depuis le client, le serveur récupère les données de la base de données et les renvoie au client.

- Le fichier ``.env`` :
        - contient les variables d'environnement spécifiques au serveur, le cas échéant.

- Le fichier ``package.json`` :
    - contient les dépendances nécessaires pour le serveur, et le fichier ``package-lock.json`` est utilisé pour verrouiller les versions spécifiques des dépendances.

- Fichier ``server.js`` :

    - Le fichier ``server.js`` est le point d'entrée du serveur.
    - Il configure le serveur Express et définit les routes pour gérer les requêtes HTTP.

----


# Rapport de Server_Client_Node.js_React - Développement d'une application Web avec React et Sequelize

## Introduction :

Mon projet est le de développement d'une application Web utilisant la bibliothèque React pour le frontend et le framework Sequelize pour la gestion de la base de données PostgreSQL côté backend. J'ai réalisé ce projet de manière autonome, avec pour objectif de créer une application permettant aux utilisateurs de saisir des données dans un formulaire, de les enregistrer dans une base de données et d'afficher les données enregistrées.

### 1. Environnement de développement :

J'ai configuré l'environnement de développement en utilisant Node.js comme plateforme principale. J'ai créé un nouveau projet en utilisant la commande ``npm init`` dans le dossier racine du projet. Pour le frontend (React), j'ai installé les dépendances nécessaires en utilisant ``npm install react react-dom`` et d'autres dépendances mentionnées dans le fichier ``package.json`` du dossier ``client``. Pour le côté serveur, j'ai installé Sequelize, Express et d'autres dépendances en utilisant ``npm install sequelize express pg pg-hstore dotenv`` en suivant les informations du fichier ``package.json`` du dossier ``server``.

### 2. Base de données PostgreSQL :

J'ai configuré une base de données PostgreSQL pour stocker les données saisies par les utilisateurs. J'ai créé une base de données dédiée et défini les informations de connexion dans le fichier ``.env`` du dossier ``server`` pour assurer la sécurité des informations sensibles.

### 3. Développement du côté client (React) :

J'ai commencé par concevoir les composants nécessaires pour l'application dans le dossier ``client/src/components``. J'ai créé le composant principal ``App`` pour gérer l'ensemble de l'application. Pour faciliter la saisie des données, j'ai développé les sous-composants ``FormInput`` et ``Input`` pour gérer les champs de formulaire et les interactions utilisateur.

J'ai utilisé les hooks React, notamment ``useState`` et ``useEffect``, pour gérer les états des formulaires et les interactions utilisateur de manière efficace. J'ai effectué des tests pour vérifier le bon fonctionnement des composants et m'assurer que les données du formulaire sont correctement gérées.

### 4. Développement côté serveur (Sequelize) :

J'ai créé le modèle Sequelize ``RecupFormData.js`` dans le dossier ``server/db/models`` pour interagir avec la table ``recupformdata`` dans la base de données. J'ai défini les associations entre les modèles Sequelize lorsque cela était nécessaire dans le fichier ``server/db/index.js``.

J'ai défini les routes pour gérer les requêtes GET et POST dans le fichier ``server/routes/api.js``. Les requêtes GET permettent de récupérer les données de la base de données, tandis que les requêtes POST permettent d'insérer de nouvelles données dans la table. J'ai testé ces routes à l'aide d'outils tels que Postman pour m'assurer qu'elles fonctionnent correctement.

### 5. Intégration frontend et backend :

J'ai veillé à ce que le côté client puisse communiquer avec le côté serveur en utilisant des requêtes HTTP vers les routes API définies dans le backend. J'ai vérifié que les données du formulaire sont correctement envoyées au serveur et que les réponses du serveur sont efficaces par le client.


### 6. Documentation :

J'ai soigneusement documenté le code pour faciliter la maintenance future. J'ai également rédigé une documentation utilisateur pour expliquer clairement comment utiliser l'application, assurant ainsi une expérience utilisateur fluide.


<!-- En cours d'execution
### 6. Déploiement et tests :

J'ai optimisé l'interface de l'application en utilisant Parcel pour faciliter le déploiement. J'ai déployé l'application frontend sur Netlify, tandis que le serveur backend a été déployé sur Heroku. J'ai effectué des tests approfondis pour identifier et corriger les bugs potentiels, assurant ainsi le bon fonctionnement de l'application en production. -->
----

# Etapes et documentation pour réaliser et utiliser ce projet 


## 1. Mettre en place l'environnement de développement :

- Installer Node.js sur votre machine.
- Créer un nouveau projet en utilisant la commande ``npm init`` dans le dossier racine du projet.
- Installer les dépendances nécessaires pour le côté client (React) en utilisant ``npm install react react-dom`` et d'autres dépendances indiquées dans le fichier ``package.json`` du dossier ``client``.
- Installer les dépendances nécessaires pour le côté serveur (Sequelize, Express, etc.) en utilisant ``npm install sequelize express pg pg-hstore dotenv`` et d'autres dépendances mentionnées dans le fichier ``package.json`` du dossier ``server``.

## 2. Mettre en place la base de données PostgreSQL :

Installer PostgreSQL sur votre machine si ce n'est pas déjà fait.
Créer une base de données pour le projet.

## 3. de Développement du côté client:

- Dans le dossier ``client/src/components``, créer les composants nécessaires à l'application, y compris ``App``, ``FormInput``, ``Input``, etc., en utilisant React.
- Définisser les formulaires et les interactions utilisateur nécessaires.
- Utiliser les composants ``FormInput`` et ``Input`` pour construire l'interface utilisateur.
- Gérer les états des formulaires et les interactions utilisateur à l'aide des hooks React (useState, useEffect, etc.).
- Effectuer des tests pour s' assurer que les composants fonctionnent correctement.

## 4. Développement côté serveur :

- Dans le dossier ``server/db/models``, créer le modèle Sequelize ``RecupFormData.js`` pour la table ``recupformdata``.
- Définisser les associations entre les modèles Sequelize si nécessaire (par exemple, si d'autres tables dans la base de données qui sont liées).
- Dans le fichier ``server/routes/api.js``, paramétrer les routes pour gérer les requêtes GET et POST pour l'API.
- Dans le fichier ``server/server.js``, configurer le serveur Express, se connecter à la base de données, et utiliser les routes definies dans ``api.js``.
- Tester les routes API en utilisant des outils tels que ``Postman`` ou ``CURL`` pour s'assurer qu'elles fonctionnent correctement.

## 5. Intégration frontend et backend :

- S'assurer que le côté client peut communiquer avec le serveur en effectuant des requêtes HTTP vers les routes API définies dans le backend.
- Vérifier que les données du formulaire sont correctement envoyées au serveur et que les réponses du serveur sont correctement traitées par le client.

## 6. Déploiement :

- Optimiser l'application côté client en utilisant des outils de build tels que Parcel ou Webpack.
- Déployer l'application frontend sur un service d'hébergement de votre choix (par exemple, Netlify, Vercel, etc.).
- Déployer le serveur backend sur un service d'hébergement adapté aux applications Node.js (par exemple, Heroku, AWS, etc.).
- Vérifier que l'application fonctionne correctement en production.

## 7. Tests et corrections de bugs :

- Effectuer des tests approfondis de l'application pour identifier les bugs et les problèmes potentiels.
- Corriger les bugs et préciser que l'application fonctionne de manière fiable.

## 8. Documentation :

- Documenter le code pour faciliter la maintenance future.
- Écrire une documentation utilisateur pour expliquer comment utiliser l'application.

## 9. Finalisation et livraison :

- Faites une dernière vérification de l'application pour s' assurer qu'elle est prête à être livrée.
- Livrer l'application à votre client ou  la déployer en production selon les besoins.

