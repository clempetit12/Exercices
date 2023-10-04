import { useState } from "react";
import classe from "./App.module.css"



const FormChildComponent = (props) => {
  const { usersTab } = props;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const submitHandler = (event) => {
    event.preventDefault()
    usersTab({firstname, 
        lastname, 
        dateOfBirth},
        setFirstname(" "),
        setLastname(""),
        setDateOfBirth("")
     
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
    <form action="" className={classe.body}>
      <h1>Formulaire</h1>
      <div className= "mb-2">
        <label htmlFor="firstname">Firstname</label>
        <input type="text" value={firstname} onInput={changeInputFirstname} />
      </div>
      <div>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" value={lastname} onInput={changeInputLastname} />
      </div>
      <div>
        <label htmlFor="dateOfBirth" placeholder="jj/mm/aaaa">Date of Birth</label>
        <input
          type="text"
          value={dateOfBirth}
          onInput={changeInputDateOfBirth}
        />
        </div>
        <div className="mt-4 ">
        <button className="btn btn-success" onClick={submitHandler}>Ajouter Contacts</button>
        </div>
      
      </form>
    </>
  );
};

export default FormChildComponent;
