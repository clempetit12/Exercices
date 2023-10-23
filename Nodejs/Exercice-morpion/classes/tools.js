import readline from "readline";

export function input(message) {
  // On créé une interface qui nous permet de lire et écrire dans la console
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  //   On retourne une promesse avec le flux que l'on lit depuis la console sous forme de chaine
  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Test d'exécution de la fonction
// (async () => {
//   let personne = {};
//   personne.nom = await input("Quel est votre nom: ");
//   personne.prenom = await input("Quel est votre prénom: ");
//   console.log(personne);
// })();