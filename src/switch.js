import React from 'react'
import './switch.css';

export default function Switch() {
    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            {/* Nota: input id debe ser el mismo que label for para asociar
                el comportamiento de seleccionar el checkbox al hacer click sobre label */}
            <input type="checkbox" className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    )
}
