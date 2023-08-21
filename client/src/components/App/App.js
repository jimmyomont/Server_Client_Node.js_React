import React from 'react'; // Importe le module React pour la création de composants React
import FormInput from './FormInput'; // Importe le composant FormInput depuis le fichier './FormInput.js'

const App = () => { // Définit le composant App en utilisant une fonction fléchée (composant fonctionnel)
  return (
    <>
      <h1>Front11</h1> {/* Rend un en-tête avec le texte "Front11" */}
      <FormInput /> {/* Rend le composant FormInput */}
    </>
  );
};

export default App; // Exporte le composant App pour qu'il puisse être utilisé dans d'autres parties de l'application

