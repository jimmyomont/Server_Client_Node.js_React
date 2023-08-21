import { Sequelize } from 'sequelize'; // Importe la classe Sequelize depuis le module sequelize
import dotenv from 'dotenv'; // Importe le module dotenv pour la gestion des variables d'environnement

dotenv.config(); // Charge les variables d'environnement à partir du fichier .env

// Création d'une instance de Sequelize pour se connecter à la base de données PostgreSQL
const sequelize = new Sequelize(process.env.PG_URL, {
  // logging: false, // Optionnel : désactive les journaux de Sequelize (les requêtes SQL ne seront pas affichées dans la console)
  define: {
    underscored: true, // Optionnel : permet de définir que les noms des colonnes dans les tables seront en notation snake_case (minuscules séparées par des underscores) plutôt qu'en notation camelCase par défaut.
  },
});

export default sequelize; // Exporte l'instance de Sequelize pour qu'elle puisse être utilisée dans d'autres parties de l'application
