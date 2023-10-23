import { input } from "./tools.js";




export class Ihm {
  constructor() {
    this.joueur1 = true;
    this.joueur2 = false
  }




  async menu(morpion) {
    while (!morpion.setWin()) {
      console.table(morpion);

      if (this.joueur1) {
        let positionLigne1 = await input("Joueur 1, saisissez la position ligne :");
        let positionColonne1 = await input("Joueur 1, saisissez la position colonne :");

        // Vérifier si la position est déjà occupée
        if (!morpion.getValeur(positionLigne1, positionColonne1)) {
          morpion.setValeur(positionLigne1, positionColonne1, "x");
          console.table(morpion);
          this.joueur1 = false;
          this.joueur2 = true;
        } else {
          console.log("Cette position est déjà occupée. Veuillez choisir une autre position.");
        }
     if (this.joueur2) {
        let positionLigne2 = await input("Joueur 2, saisissez la position ligne :");
        let positionColonne2 = await input("Joueur 2, saisissez la position colonne :");

        if (!morpion.getValeur(positionLigne2, positionColonne2)) {
          morpion.setValeur(positionLigne2, positionColonne2, "o");
          console.table(morpion);
          this.joueur1 = true;
          this.joueur2 = false;
        } else {
          console.log("Cette position est déjà occupée. Veuillez choisir une autre position.");
        }
      }
    }

    console.log("La partie est terminée.");
  }
}
}


 
           
            
     

  
  
