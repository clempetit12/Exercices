import { useState } from "react";
import FormChildComponent from "./Components/FormChildComponent";
import TableComponent from "./Components/TableComponent";

function App() {

  const [users, setUsers ] = useState([])

  const usersTab = ({firstname, lastname, dateOfBirth}) => {
    console.log(firstname);
    setUsers( prevState => [...prevState, {firstname, lastname, dateOfBirth}])

  }

  return (
    <>
    <div className="App">
      <h1>Tableau de contacts</h1>
      <hr />
      <TableComponent users = {users}/>
 <FormChildComponent usersTab={usersTab} />

    </div>
    </>
  );
}

export default App;
