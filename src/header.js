import React from 'react';
import './header.css';
// Nota: Al usar webpack detecta el nombre del archivo para importar sin el .js
//         Buscará un archivo con el nombre indicado nombre de carpeta y 
//          adentro un archivo index.js

export default function Header({children}) {
    return (
        <header className="header">
          <div className="wrapper">
              <div className="header-grid">
                  <div>
                      <h1>Social Media Dashboard</h1>
                      <p className="header-total">Total Followers: 23,004</p>
                  </div>
                  {children}
              </div>
          </div>
      </header>
    )
}

// Nota: Continuar en minuto 1:05:24
// Video: https://youtu.be/-K4zonaIrV8
