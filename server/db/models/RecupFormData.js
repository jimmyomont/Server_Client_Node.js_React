import { DataTypes, Model } from 'sequelize'; // Importe les classes DataTypes et Model depuis le module sequelize
import sequelize from '../database.js'; // Importe l'instance de Sequelize créée dans le fichier '../database.js'

class RecupFormData extends Model {} // Déclare une classe RecupFormData qui étend la classe Model de Sequelize

RecupFormData.init(
  {
    result_input1: {
      type: DataTypes.STRING, // Le type de la colonne 'result_input1' est une chaîne de caractères
      allowNull: false, // La colonne 'result_input1' ne peut pas être nulle (NOT NULL)
    },
  },
  {
    sequelize, // L'instance de Sequelize utilisée pour définir le modèle
    modelName: 'RecupFormData', // Le nom du modèle
    tableName: 'recupformdata', // Le nom de la table dans la base de données
    timestamps: false, // Désactive les colonnes de timestamp (created_at, updated_at)
  }
);

export default RecupFormData; // Exporte le modèle RecupFormData pour qu'il puisse être utilisé dans d'autres parties de l'application

