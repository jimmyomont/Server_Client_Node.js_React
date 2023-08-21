import express from 'express'; // Importe le module Express.js
import RecupFormData from '../db/models/RecupFormData.js'; // Importe le modèle RecupFormData directement depuis le chemin spécifié


const router = express.Router(); // Crée une instance du routeur Express

// Définition d'une route pour gérer les requêtes GET sur '/livres'
router.get('/livres', async (req, res) => {
  try {
    const result = await RecupFormData.findAll(); // Effectue une requête SELECT pour récupérer toutes les données de la table RecupFormData
    res.json(result); // Répond avec les données récupérées sous forme de JSON
  } catch (err) {
    console.error('Erreur lors de la requête SELECT :', err); // Affiche une erreur s'il y a un problème lors de l'exécution de la requête SELECT
    res.status(500).json({ error: 'Erreur lors de la requête SELECT.' }); // Répond avec une erreur HTTP 500 (Internal Server Error) si la requête échoue
  }
});

// Définition d'une route pour gérer les requêtes POST sur '/Api'
router.post('/Api', async (req, res) => {
  try {
    const field1 = req.body.test; // Récupère la valeur de la propriété 'test' du corps de la requête POST
    const result = await RecupFormData.create({ result_input1: field1 }); // Effectue une requête INSERT pour insérer une nouvelle entrée dans la table RecupFormData avec la valeur de 'field1'
    console.log(field1); // Affiche la valeur de 'field1' dans la console
    res.json(result); // Répond avec les données de l'entrée nouvellement insérée sous forme de JSON
  } catch (err) {
    console.error('Erreur lors de la requête INSERT :', err); // Affiche une erreur s'il y a un problème lors de l'exécution de la requête INSERT
    res.status(500).json({ error: 'Erreur lors de la requête INSERT.' }); // Répond avec une erreur HTTP 500 (Internal Server Error) si la requête échoue
  }
});

export default router; // Exporte le routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
