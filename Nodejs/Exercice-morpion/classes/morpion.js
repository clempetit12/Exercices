export class Morpion {
    constructor() {

        this.morpion = Array(3).fill(null).map(() => Array(3).fill(null));
        this.partiegagnée = 0

    }

    setValeur(ligne, colonne, valeur){
      
            return this.morpion[ligne][colonne] = valeur
        
        
   
    }

    getValeur(ligne, colonne){
      
            return this.morpion[ligne][colonne]
        
    }
    setWin() {
        // Vérification des lignes et des colonnes
        for (let i = 0; i < 3; i++) {
            if (this.morpion[i][0] === this.morpion[i][1] && this.morpion[i][1] === this.morpion[i][2]) {
                if (this.morpion[i][0] !== null) {
                    return true;
                }
            }
            if (this.morpion[0][i] === this.morpion[1][i] && this.morpion[1][i] === this.morpion[2][i]) {
                if (this.morpion[0][i] !== null) {
                    return true;
                }
            }
        }

        // Vérification des diagonales
        if (
            (this.morpion[0][0] === this.morpion[1][1] && this.morpion[1][1] === this.morpion[2][2]) ||
            (this.morpion[0][2] === this.morpion[1][1] && this.morpion[1][1] === this.morpion[2][0])
        ) {
            if (this.morpion[1][1] !== null) {
                return true;
            }
        }

        // Aucun gagnant
        return false;
    }
    setPartieGagné () { 
        return this.partiegagnée 

    }

    
}