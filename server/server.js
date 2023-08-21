// Import des modules nécessaires
import express from 'express'; // Importe le module Express.js
import dotenv from 'dotenv'; // Importe le module dotenv pour la gestion des variables d'environnement
import { fileURLToPath } from 'url'; // Importe la fonction fileURLToPath du module URL pour convertir les URL de fichiers en chemins de fichiers
import { dirname, join } from 'path'; // Importe les fonctions dirname et join du module path pour manipuler les chemins de fichiers
import sequelize from './db/database.js'; // Importe l'instance de Sequelize pour la connexion à la base de données
import apiRouter from './routes/api.js'; // Importe le routeur API pour gérer les requêtes API
import cors from 'cors'; // Importe le module cors pour gérer les autorisations CORS (Cross-Origin Resource Sharing)

// Configuration des variables d'environnement
dotenv.config(); // Charge les variables d'environnement à partir du fichier .env

// Création de l'application Express
const app = express(); // Crée une instance de l'application Express

// Configuration du port
const port = process.env.PORT || 8000; // Le port sur lequel l'application écoute, soit celui spécifié dans les variables d'environnement, soit le port 3000 par défaut

// Récupération du chemin du répertoire courant
const cheminUrl = fileURLToPath(import.meta.url); // Convertit l'URL du fichier en chemin de fichier
const cheminRepertoire = dirname(cheminUrl); // Obtient le répertoire du fichier en utilisant le chemin du fichier

// Définition des middlewares
app.use(express.static(join(cheminRepertoire, 'dist'))); // Utilise le middleware static pour servir les fichiers statiques depuis le répertoire 'dist'
app.use(express.json()); // Utilise le middleware json pour analyser les corps de requête au format JSON
app.use(cors()); // Utilise le middleware cors pour gérer les autorisations Cross-Origin

// Connexion à la base de données
sequelize
  .authenticate() // Vérifie la connexion à la base de données en utilisant l'instance Sequelize
  .then(() => {
    console.log('Connecté à la base de données PostgreSQL 🥳.'); // Affiche un message si la connexion est réussie
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données 😈:', err); // Affiche une erreur si la connexion échoue
  });

// Définition des routes
app.post('/Api', apiRouter); // Associe le routeur API aux requêtes POST sur le chemin '/Api'
app.get('/', (req, res) => {
  res.send('La partie Serveur !'); // Répond avec ce message pour les requêtes GET sur le chemin '/'
});

// Gestion de la fermeture du processus
process.on('SIGINT', () => {
  sequelize.close(); // Ferme la connexion à la base de données lorsque le processus reçoit le signal SIGINT (généralement envoyé lorsqu'on arrête le serveur)
  process.exit(); // Termine le processus
});

// Synchronisation de la base de données
sequelize.sync() // Synchronise les modèles définis avec la base de données (crée les tables si elles n'existent pas)
  .then(() => {
    console.log('Les tables ont été synchronisées avec la base de données.'); // Affiche un message si la synchronisation est réussie
  })
  .catch((err) => {
    console.error('Erreur lors de la synchronisation des tables :', err); // Affiche une erreur si la synchronisation échoue
  });

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Écoute sur http://localhost:${port}/ 📺`); // Affiche un message lorsque le serveur démarre et écoute les requêtes
});
