import TableComponent from "./Components/TableComponent";
class Person {
  constructor(_firstname, _lastname) {
    this._firstname = _firstname
    this._lastname = _lastname
  }


  get firstname() {
    return this._firstname
  }


  get lastname() {
    return this._lastname
  }


}


function App() {

  const matables = [new Person("clémence", "petit"),
  new Person("albert", "dupont")]
  return (
    <div className="App">

      <TableComponent tables={matables} />



    </div>
  );
}

export default App;
