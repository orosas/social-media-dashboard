import React, { useRef, useEffect, useState } from 'react';
import './switch.css';

export default function Switch(setDarkMode, checked) {

    
    // const [checked, setChecked] = useState(defaultChecked);


    // Nota: useRef se utiliza para "guardar" el valor del input box
    //         como checked true, o checked false
    const ref = useRef(null);
    // console.log(ref);

    function handleChange(){

        setChecked(ref.current.checked);
        setDarkMode(ref.current.checked);
        // if(ref.current.checked) {
        //     console.log('vamos a light mode');
        // } else{
        //             console.log('vamos a dark mode');
        // }

        // Nota: En lugar de usar el evento de la forma:
        //     function handleChange(event)
        //     Se usa ref.current.checked
        // console.log(ref.current.checked);
        

    }


// function changeMedia(mq) {
//     setChecked(mq.matches);
//     if (mq.matches) {
//         
//         // document.body.classList.remove('is-light-mode');
//         // document.body.classList.add('is-dark-mode');
//     } else{
//         console.log('vamos a dark mode');
//         // document.body.classList.remove('is-dark-mode');
//         // document.body.classList.add('is-light-mode');
//     }
// }


    // Nota: Similar a componentDidMount

    // En caso de que se requiera ejecutar la función pasada como parámetro solo 
    // cuando el componente se montó por primera vez y cuando se va a desmontar, 
    // la variable del paso 2 debe ser un array vacío []
    // useEffect(() => {

    //     // Nota: matchMedia se utiliza para checar el @media (prefers-color-scheme: dark)
    //     const mq = window.matchMedia('(prefers-color-scheme: dark)');
    //     mq.addListener(changeMedia);
    //     setChecked(true);
        
    // }, []);



    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            {/* Nota: input id debe ser el mismo que label for para asociar
                el comportamiento de seleccionar el checkbox al hacer click sobre label */}
            <input ref={ref} onClick={handleChange} type="checkbox" checked={checked}  className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    )
}

// Nota: continuar video
//     minuto 3:19:15
