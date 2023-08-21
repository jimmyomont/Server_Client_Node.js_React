import React from 'react'; // Importe le module React pour la création de composants React
import ReactDOM from 'react-dom'; // Importe le module ReactDOM pour le rendu des composants React dans le DOM
import App from './components/App/App.js'; // Importe le composant App depuis le fichier './components/App/App.js'

// Utilise ReactDOM.render pour rendre le composant App dans la page HTML
ReactDOM.render(
  <React.StrictMode> {/* React.StrictMode est un composant pour activer des vérifications de développement supplémentaires dans le mode de développement */}
    <App /> {/* Rend le composant App */}
  </React.StrictMode>,
  document.getElementById('root') // Sélectionne l'élément HTML avec l'ID 'root' dans lequel le composant App sera rendu
);
