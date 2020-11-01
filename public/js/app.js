

const elCheckbox = document.getElementById('checkbox');

console.log('El checkbox es: ', elCheckbox);

console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);


// Nota: No funciona el hacer set de checbox checked ...........
if(!window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('Dentro de if');
    elCheckbox.setAttribute('checked', true);
    console.log(elCheckbox);
}

// Nota: Con la siguiente línea se cambian los valores de CSS desde JavaScript
//         Referencia en el video minuto 2:32:50
// document.body.style.setProperty('--nombreDeVariable', 'valorNuevo');
// document.body.style.setProperty('--baseBackground', 'purple');





elCheckbox.addEventListener('change', function(event) {
    console.log(this.checked);
    // if (this.checked) {
    //     document.body.classList.add('is-dark-mode');
    // } else{
    //     document.body.classList.remove('is-dark-mode');
    // }
        document.body.classList.toggle('is-dark-mode');
})

// Nota: Continuar
// 2:05:27