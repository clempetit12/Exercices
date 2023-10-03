import { useState, useEffect } from "react";

const FindNumbersComponent = () => {
  const [inputAvalue, setInputAValue] = useState("");
  const [inputBvalue, setInputBValue] = useState("");
  const [isWon, setIsWon] = useState(false);

  const inputAchanged = (event) => {
    setInputAValue(+event.target.value);
  };

  const inputBchanged = (event) => {
    setInputBValue(+event.target.value);
  };

  useEffect(() => {
    const produit = inputAvalue * inputBvalue;
    if (produit == 12) {
      setIsWon(true);
    } else {
      setIsWon(false);
    }
  }, [inputAvalue, inputBvalue]);

  return (
    <>
      <h1>Allez-vous trouver les bons chiffres ?</h1>
      <hr />
      <div className="row">
        <div className="col-6 text-center">
          <input
            type="text"
            value={inputAvalue}
            onInput={inputAchanged}
            placeholder="Premier chiffre"
          />
          <input
            type="text"
            value={inputBvalue}
            onInput={inputBchanged}
            placeholder="Deuxième chiffre"
          />
        </div>
        <div className="col-6 text-center">
          <p>
            {isWon
              ? `Bravo vous avez gagné ! (${inputAvalue}x${inputBvalue} = 12 )`
              : "Vous avez perdu"}
          </p>
        </div>
      </div>
    </>
  );
};

export default FindNumbersComponent;
