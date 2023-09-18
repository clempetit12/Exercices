const touches = [...document.querySelectorAll('.bouton')]
const tableauCode = touches.map(touche => touche.dataset.key);

const ecran = document.querySelector('.ecran')
const resultat = document.querySelector('.resultat')

document.addEventListener('keydown', (e) => {
   const valeur = e.keyCode.toString();
   calculer(valeur)
})
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    console.log(valeur);
    calculer(valeur)

})
let key
const calculer = (valeur) => {
    if (tableauCode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = " ";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent += `=\n${calcul}`;
                break;
            default:
                const indexKeycode = tableauCode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML

        }
    }
}






let result = document.querySelector("#result")


