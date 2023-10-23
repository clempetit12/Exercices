export class Morpion {
    constructor() {

        this.morpion = new Array(3);
        for (let i = 0; i < 3; i++) {
            this.morpion[i] = new Array(3);
        }
            
   
          }
    
    setValeur(ligne, colonne, valeur){
        this.morpion[ligne][colonne] = valeur
    }

    getValeur(ligne, colonne){
        this.morpion[ligne][colonne]
    }


  
      
    setWin () {
        function estTableauPlein(morpion) {
            for (let i = 0; i < morpion.length; i++) {
              for (let j = 0; j < morpion[i].length; j++) {
                if (morpion[i][j] === undefined || morpion[i][j] === null) {
                  return false; // Le tableau n'est pas plein
                }
              }
            }
            return true; // Le tableau est plein
          }
        if (estTableauPlein) {
            console.log("vous avez gagné");
        } else {
            console.log("La partie n'est pas finie");
        }
    }

    setPlay () {
        function isColonneRemplie(morpion, colonneIndex) {
            for (let i = 0; i < morpion.length; i++) {
                if (morpion[i][colonneIndex] === undefined || morpion[i][colonneIndex] === null) {
                    return false;
                }
            }
            return true;
        }
        if (isColonneRemplie(morpion, colonneIndex)) {
            console.log(`La colonne ${colonneIndex} est remplie.`);
        } else {
            console.log(`La colonne ${colonneIndex} n'est pas entièrement remplie.`);
        }
        
    }
}