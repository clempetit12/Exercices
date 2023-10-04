import { useState } from "react";

const FormChildComponent = (props) => {
  const { usersTab } = props;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const submitHandler = (event) => {
    usersTab({firstname, 
        lastname, 
        dateOfBirth}
     
    );
  };

  const changeInputFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const changeInputLastname = (e) => {
    setLastname(e.target.value);
  };
  const changeInputDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };

  return (
    <>
      <h1>Formulaire</h1>
      <div className="div">
        <label htmlFor="firstname">Firstname</label>
        <input type="text" value={firstname} onInput={changeInputFirstname} />
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" value={lastname} onInput={changeInputLastname} />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="text"
          value={dateOfBirth}
          onInput={changeInputDateOfBirth}
        />
        <button onClick={submitHandler}>Ajouter Contacts</button>
      </div>
    </>
  );
};

export default FormChildComponent;
