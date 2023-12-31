import { input } from "./tools.js";

export class Ihm {
  constructor() {
    this.joueur1 = true;
    this.joueur2 = false;
    this.cptJoueur1 = 0
    this.cptJoueur2 = 0
    this.partie = 0
  }

  async menu(morpion) {
    while (!morpion.setWin()) {
      console.table(morpion);

      if (this.joueur1) {
        let positionLigne1 = await input("Joueur 1, saisissez la position ligne :");
        let positionLigne1Chiffre = parseInt(positionLigne1)
        while(positionLigne1Chiffre === undefined) {
          positionLigne1 = await input("Joueur 1, saisissez la position ligne :");
        }
        let positionColonne1 = await input("Joueur 1, saisissez la position colonne :");
        console.log(positionLigne1Chiffre);
        let positionColonne1Chiffre = parseInt(positionColonne1)
        while(positionColonne1Chiffre === undefined) {
          positionColonne1 = await input("Joueur 1, saisissez la position colonne :");
        }
        console.log(positionColonne1Chiffre);
        
       
        if (!morpion.getValeur(positionLigne1, positionColonne1)) {
          morpion.setValeur(positionLigne1, positionColonne1, "x");
          console.table(morpion);
          this.joueur1 = false;
          this.joueur2 = true;
          this.cptJoueur1 ++
          console.log( "coup joueur 1 : " + this.cptJoueur1);
        } else {
          console.log("Cette position est déjà occupée. Veuillez choisir une autre position.");
        }
      } else if (this.joueur2) {
        let positionLigne2 = await input("Joueur 2, saisissez la position ligne :");
        let positionColonne2 = await input("Joueur 2, saisissez la position colonne :");
        while (positionLigne2 !== Number ||positionColonne2 !== Number){
          console.log("Veuillez entrer un chiffre");
          positionLigne2 = await input("Joueur 1, saisissez la position ligne :");
          positionColonne2 = await input("Joueur 1, saisissez la position colonne :");
        }
        console.table(morpion);
        if (!morpion.getValeur(positionLigne2, positionColonne2)) {
          morpion.setValeur(positionLigne2, positionColonne2, "o");
          console.table(morpion);
          this.joueur1 = true;
          this.joueur2 = false;
          this.cptJoueur2 ++
          console.log("coup joueur 2 : " + this.cptJoueur2);
        } else {
          console.log("Cette position est déjà occupée. Veuillez choisir une autre position.");
        }
      }
    }

    if (!this.joueur1) {
      this.partie++
      console.log(`La partie est terminée.Félicitations au joueur 1, vous avez gagné en ${this.cptJoueur1} coups!`);
      console.log(`Nombre de partie gagnée : ${this.partie}`);

    } else {
      this.partie++
      console.log(`La partie est terminée. Félicitations au joueur 2, vous avez gagné en ${this.cptJoueur2} coups  !`);
      console.log(`Nombre de partie gagnée : ${this.partie}`);
    }

  }
}
