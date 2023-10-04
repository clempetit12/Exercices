

const TableComponent = (props) => {

    const {users} = props

  return (
    <>
      <h1>Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
         {users.map((element, index) => <tr key={index}>
            <td>{element.firstname}</td>
         <td>{element.lastname}</td>
         <td>{element.dateOfBirth}</td></tr>)}
           {console.table(users)} 
            
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
