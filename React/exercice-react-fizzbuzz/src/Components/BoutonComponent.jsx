import { useState } from "react";

const BoutonComponentPlus = (props) => {
 let maxValue = props.maxValue

  const [compteur, setcompteur] = useState(0);
  const [boutonValue, setBoutonValue] = useState("");

  const addBouton = () => {
    console.log("add");
    if (compteur !== Number(maxValue)) {
      setcompteur(compteur + 1);
     display()

    }
    console.log(compteur);
  };

  const subBouton = () => {
    console.log("sub");
    if (compteur !== -1) {
      setcompteur(compteur - 1);
    display()
    } 
    console.log(compteur);
  };

  const display = () => {
    if (compteur%5 == 0){
      setBoutonValue("Fizz") 
    } else if (compteur%7 == 0) {
      setBoutonValue("Buzz") 
    } else {
      setBoutonValue(compteur)
    }
  }

  return (
    <>
    <h1>Fizz Buzz</h1>
    <hr />
      <button onClick={addBouton} value={addBouton}>
        +
      </button>

      <button onClick={subBouton} value={subBouton}>
        -
      </button>
<p>{boutonValue}</p>
    </>
  );
};


export default BoutonComponentPlus;
