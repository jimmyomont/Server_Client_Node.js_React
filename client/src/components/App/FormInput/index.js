import React, { useState } from 'react'; // Importe le module React et la fonction useState pour la gestion des états

import Input from '../Input'; // Importe le composant Input depuis le fichier '../Input.js'

const POST_DB = process.env.DB_HOST
const FormInput = () => { // Définit le composant FormInput en utilisant une fonction fléchée (composant fonctionnel)
    const [formData, setFormData] = useState({
        test: '', // Initialise l'état 'formData' avec une propriété 'test' ayant la valeur initiale vide
        // Vous pouvez ajouter d'autres champs du formulaire ici avec leurs valeurs initiales
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    /* Définit la fonction de rappel 'handleInputChange' pour mettre à jour l'état 'formData' en utilisant
       la valeur saisie par l'utilisateur dans le champ de texte. */

    const handleSubmitForm = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

        fetch(`${POST_DB}/Api`, { // Effectue une requête POST vers l'URL 'http://localhost:3000/Api'
            method: 'POST', // Méthode de la requête : POST
            headers: {
                'Content-Type': 'application/json', // En-tête de la requête : données au format JSON
            },
            body: JSON.stringify(formData), // Corps de la requête : données du formulaire au format JSON
        })
            .then((response) => response.json()) // Analyse la réponse au format JSON
            .then((data) => {
                window.alert(` la données : "${data.result_input1}" à bien été envoyées à la BDD`)
                console.log(data); // Affiche les données renvoyées par le serveur dans la console
            })
            .catch((error) => {
                console.error('Erreur:', error); // Affiche une erreur s'il y a un problème avec la requête
            });
    };
    /* Définit la fonction de rappel 'handleSubmitForm' pour gérer la soumission du formulaire.
       Elle effectue une requête POST vers le serveur avec les données du formulaire au format JSON,
       puis affiche les données renvoyées par le serveur dans la console. */

    return (
        <>
            <form onSubmit={handleSubmitForm}> {/* Définit le formulaire et utilise 'handleSubmitForm' comme fonction de rappel lors de la soumission */}
                <Input
                    type="text"
                    label="test"
                    name="test"
                    value={formData.test}
                    onChange={handleInputChange}
                />
                {/* Utilise le composant Input pour afficher un champ de texte du formulaire,
                   en utilisant 'handleInputChange' comme fonction de rappel pour gérer les changements de saisie. */}

                {/* Vous pouvez ajouter d'autres champs du formulaire ici en utilisant le composant Input */}
                <input className="formSearch-item-button" type="submit" value="Envoyer" />
                {/* Bouton de soumission du formulaire */}
            </form>
        </>
    );
};

export default FormInput; // Exporte le composant FormInput pour qu'il puisse être utilisé dans d'autres parties de l'application
